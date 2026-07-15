import { Cooldown } from '@slipher/cooldown'
import type { Player } from 'aqualink'
import {
  ActionRow,
  Button,
  ButtonStyle,
  Command,
  type CommandContext,
  Container,
  Declare,
  MessageFlags,
  Middlewares,
  Section,
  Separator,
  Spacing,
  TextDisplay,
  Thumbnail
} from 'seyfert'
import {
  buildLyricsQueryFromHints,
  extractLyricsSearchHints
} from '../shared/lyrics.ts'
import { musixmatch } from '../shared/musixmatch.ts'
import { formatDuration } from '../shared/utils.ts'
import { authorizeVoiceControl } from '../shared/voiceAuthorization.ts'
import { getContextLanguage } from '../utils/i18n.ts'
import { getMemberVoiceState, safeDefer } from '../utils/interactions.ts'

const ACCENT_COLOR = '#100e09'
const ERROR_COLOR = '#e74c3c'

const SESSION_TIMEOUT_MS = 300000
const SONG_END_BUFFER_MS = 5000
const AUTO_DELETE_MS = 10000

const MIN_TICK_DELAY_MS = 75
const MAX_TICK_DELAY_MS = 5000
const MIN_EDIT_INTERVAL_MS = 900
const MIN_LINE_TRANSITION_INTERVAL_MS = 250
const PROGRESS_EDIT_INTERVAL_MS = 1500
const PAUSED_POLL_INTERVAL_MS = 750
const SCHEDULER_JITTER_MS = 25
const DEFAULT_LINE_DURATION_MS = 4000

const VIEW_PAST_LINES = 1
const VIEW_NEXT_LINES = 1
const PROGRESS_BAR_LENGTH = 12

type LyricLine = {
  line: string
  timestamp?: number
  range?: { start: number; end?: number }
}

interface KaraokeSession {
  // biome-ignore lint/suspicious/noExplicitAny: message is a dynamic Discord message object
  message: any
  lines: LyricLine[]
  player: Player

  updateTimer: NodeJS.Timeout
  timeout: NodeJS.Timeout

  // biome-ignore lint/suspicious/noExplicitAny: collector is a dynamic object
  collector: any

  fallbackStartPosition: number
  fallbackStartTime: number
  artist: string
  artworkUrl?: string | undefined
  lastEditAt: number
  lastRenderKey: string
  title: string
  uri?: string | undefined
  trackKey: string
  stoppedByUser: boolean
}

interface KaraokeStageDetails {
  artist: string
  artworkUrl?: string | undefined
  title: string
  uri?: string | undefined
}

// biome-ignore lint/suspicious/noExplicitAny: msg is a dynamic Discord message object
const _autoDelete = (msg: any, delay = AUTO_DELETE_MS) => {
  if (!msg?.delete) return
  const timer = setTimeout(() => {
    msg.delete().catch(() => null)
  }, delay)
  if (timer.unref) timer.unref()
}

const _divider = () =>
  new Separator().setDivider(true).setSpacing(Spacing.Small)

const _createErrorContainer = (
  message: string,
  lang: string,
  ctx: CommandContext
) => {
  const t = ctx.t.get(lang)
  return new Container()
    .setColor(ERROR_COLOR)
    .addComponents(
      new TextDisplay().setContent(`## [X] ${t.karaoke.error}`),
      _divider(),
      new TextDisplay().setContent(message)
    )
}

const _createEndedContainer = (
  reason: 'stopped' | 'finished' | 'error' | 'changed'
) => {
  const messages = {
    stopped: 'Session stopped by a user.',
    finished: 'Track finished. Stage lights down.',
    error: 'The karaoke display has been closed.',
    changed: 'Track changed. Karaoke closed to avoid stale lyrics.'
  }

  return new Container()
    .setColor(ERROR_COLOR)
    .addComponents(
      new TextDisplay().setContent('## KARAOKE STAGE'),
      _divider(),
      new TextDisplay().setContent(messages[reason])
    )
}

const _lineStartMs = (line: LyricLine): number =>
  line.range?.start ?? line.timestamp ?? 0

const _cleanLyricText = (text: string) => text.replace(/\s+/g, ' ').trim()

const _getTrackKey = (
  track:
    | {
        uri?: string
        identifier?: string
        title?: string
        author?: string
        info?: {
          uri?: string
          identifier?: string
          title?: string
          author?: string
        }
      }
    | null
    | undefined
) => {
  if (!track) return ''

  const uri = track.info?.uri ?? track.uri
  const identifier = track.info?.identifier ?? track.identifier
  const title = track.info?.title ?? track.title
  const author = track.info?.author ?? track.author

  return [uri, identifier, title, author].filter(Boolean).join('|')
}

const _findCurrentLineIndex = (lines: LyricLine[], currentTimeMs: number) => {
  let left = 0
  let right = lines.length - 1
  let result = -1

  while (left <= right) {
    const mid = Math.floor((left + right) / 2)
    const currentLine = lines[mid]
    if (!currentLine) break
    const ts = _lineStartMs(currentLine)

    if (ts <= currentTimeMs) {
      result = mid
      left = mid + 1
    } else {
      right = mid - 1
    }
  }
  return result
}

const _createProgressBar = (
  currentMs: number,
  startMs: number,
  endMs: number
) => {
  const durationMs = endMs - startMs
  if (durationMs <= 0) return `●${'─'.repeat(PROGRESS_BAR_LENGTH - 1)}`

  const cursor = _getProgressCursor(currentMs, startMs, endMs)
  const chars = Array.from({ length: PROGRESS_BAR_LENGTH }, (_, index) => {
    if (index === cursor) return '●'
    return index < cursor ? '━' : '─'
  })

  return chars.join('')
}

const _getProgressCursor = (
  currentMs: number,
  startMs: number,
  endMs: number
) => {
  const durationMs = endMs - startMs
  if (durationMs <= 0) return 0
  const progress = Math.max(0, Math.min(1, (currentMs - startMs) / durationMs))
  return Math.min(
    PROGRESS_BAR_LENGTH - 1,
    Math.max(0, Math.round(progress * (PROGRESS_BAR_LENGTH - 1)))
  )
}

const _getRenderKey = (
  lines: LyricLine[],
  currentTimeMs: number,
  isPaused: boolean
) => {
  const currentIdx = _findCurrentLineIndex(lines, currentTimeMs)
  if (currentIdx < 0) {
    const firstLine = lines[0]
    const countdown = firstLine
      ? Math.max(0, Math.ceil((_lineStartMs(firstLine) - currentTimeMs) / 1000))
      : 0
    return `pre:${countdown}:${isPaused}`
  }

  const current = lines[currentIdx]
  if (!current) return `empty:${isPaused}`
  const next = lines[currentIdx + 1]
  const startMs = _lineStartMs(current)
  const endMs = next ? _lineStartMs(next) : startMs + DEFAULT_LINE_DURATION_MS
  return `${currentIdx}:${_getProgressCursor(currentTimeMs, startMs, endMs)}:${isPaused}`
}

const _formatViewportLine = (
  line: LyricLine,
  kind: 'past' | 'current' | 'next',
  nextIndex?: number
) => {
  const text = _cleanLyricText(line.line) || '...'

  switch (kind) {
    case 'past':
      return `-# ${text}`
    case 'current':
      return `## ${text}`
    case 'next':
      return nextIndex === 0 ? `**${text}**` : `-# ${text}`
  }
}

const _createStatusLine = (
  currentTimeMs: number,
  startMs: number,
  endMs: number,
  isPaused: boolean
) => {
  const state = isPaused ? 'PAUSED' : 'LIVE'
  const remainingMs = Math.max(0, endMs - currentTimeMs)
  const nextIn =
    isPaused || remainingMs <= 0
      ? '--'
      : `${Math.max(0.1, remainingMs / 1000).toFixed(1)}s`

  return [
    `-# ${state}  •  ${formatDuration(currentTimeMs)}  •  next line ${nextIn}`,
    `\`${_createProgressBar(currentTimeMs, startMs, endMs)}\``
  ].join('\n')
}

const _createKaraokeStageContainer = (
  details: KaraokeStageDetails,
  lines: LyricLine[],
  currentTimeMs: number,
  isPaused: boolean
) => {
  const stopButton = new Button()
    .setCustomId('ignore_karaoke-stop')
    .setLabel('Stop')
    .setStyle(ButtonStyle.Secondary)

  const linkedTitle = details.uri
    ? `[${details.title}](${details.uri})`
    : details.title
  const headerContent = [
    '## KARAOKE',
    `**${linkedTitle}**`,
    `-# ${details.artist || 'Unknown artist'}  •  synchronized lyrics`
  ].join('\n')
  const header = details.artworkUrl
    ? new Section()
        .addComponents(new TextDisplay().setContent(headerContent))
        .setAccessory(new Thumbnail().setMedia(details.artworkUrl))
    : new TextDisplay().setContent(headerContent)

  if (!lines.length) {
    return new Container()
      .setColor(ACCENT_COLOR)
      .addComponents(
        header,
        _divider(),
        new TextDisplay().setContent(
          'No time-synced lyrics available for this track.'
        )
      )
  }

  const currentIdx = _findCurrentLineIndex(lines, currentTimeMs)

  if (currentIdx < 0) {
    const firstLine = lines[0]
    const preview = lines.slice(0, Math.min(VIEW_NEXT_LINES + 1, lines.length))
    const previewText = preview
      .map((line, index) => _formatViewportLine(line, 'next', index))
      .join('\n')

    const timeUntil = firstLine ? _lineStartMs(firstLine) - currentTimeMs : 0
    const countdown =
      timeUntil > 0
        ? `### Mic check\n-# Lyrics begin in ${Math.ceil(timeUntil / 1000)}s`
        : '### Mic check\n-# Your first line is coming up'

    return new Container()
      .setColor(ACCENT_COLOR)
      .addComponents(
        header,
        _divider(),
        new TextDisplay().setContent(
          [countdown, '', '-# FIRST UP', previewText].join('\n')
        ),
        _divider(),
        new ActionRow().addComponents(stopButton)
      )
  }

  const current = lines[currentIdx]
  if (!current) {
    return new Container()
      .setColor(ACCENT_COLOR)
      .addComponents(new TextDisplay().setContent('...'))
  }

  const next = lines[currentIdx + 1]
  const segStart = _lineStartMs(current)
  const segEnd = next ? _lineStartMs(next) : segStart + DEFAULT_LINE_DURATION_MS

  const pastStart = Math.max(0, currentIdx - VIEW_PAST_LINES)
  const past = lines.slice(pastStart, currentIdx)
  const upcoming = lines.slice(currentIdx + 1, currentIdx + 1 + VIEW_NEXT_LINES)

  const viewportParts: string[] = []

  if (past.length) {
    viewportParts.push(
      past.map((line) => _formatViewportLine(line, 'past')).join('\n')
    )
    viewportParts.push('')
  }

  viewportParts.push(_formatViewportLine(current, 'current'))
  viewportParts.push(
    _createStatusLine(currentTimeMs, segStart, segEnd, isPaused)
  )

  if (upcoming.length) {
    viewportParts.push('')
    viewportParts.push('-# UP NEXT')
    viewportParts.push(
      upcoming
        .map((line, index) => _formatViewportLine(line, 'next', index))
        .join('\n')
    )
  } else if (currentIdx === lines.length - 1) {
    viewportParts.push('')
    viewportParts.push('-# FINAL LINE  •  bring it home')
  }

  return new Container()
    .setColor(ACCENT_COLOR)
    .addComponents(
      header,
      _divider(),
      new TextDisplay().setContent(viewportParts.join('\n')),
      _divider(),
      new ActionRow().addComponents(stopButton)
    )
}

const _fetchKaraokeLyrics = async (
  query: string | undefined,
  // biome-ignore lint/suspicious/noExplicitAny: currentTrack is a dynamic track object
  currentTrack: any
) => {
  const hints = extractLyricsSearchHints(currentTrack)
  const searchQuery = query?.trim() || buildLyricsQueryFromHints(hints)

  if (!searchQuery) return null

  try {
    const result = await musixmatch.findLyrics(searchQuery, hints)

    const rawLines = (result?.lines ?? []) as LyricLine[]
    const lines = rawLines
      .map((l) => ({ ...l, line: (l.line ?? '').toString() }))
      .filter((l) => _cleanLyricText(l.line).length > 0)
      .sort((a, b) => _lineStartMs(a) - _lineStartMs(b))

    if (!lines.length) return null

    return { lines, track: result?.track }
  } catch {
    return null
  }
}

const KaraokeSessionRegistry = {
  cache: new Map<string, KaraokeSession>(),
  MAX_SESSIONS: 100,

  get(guildId: string) {
    return KaraokeSessionRegistry.cache.get(guildId)
  },

  has(guildId: string) {
    const session = KaraokeSessionRegistry.cache.get(guildId)
    if (!session) return false
    return session.player?.connected
  },

  async add(guildId: string, session: KaraokeSession) {
    await KaraokeSessionRegistry.cleanup(guildId, 'error')

    // Evict oldest entry if at capacity
    if (
      KaraokeSessionRegistry.cache.size >= KaraokeSessionRegistry.MAX_SESSIONS
    ) {
      const firstKey = KaraokeSessionRegistry.cache.keys().next().value
      if (firstKey) await KaraokeSessionRegistry.cleanup(firstKey, 'error')
    }

    KaraokeSessionRegistry.cache.set(guildId, session)
  },

  async cleanup(
    guildId: string,
    reason: 'stopped' | 'finished' | 'error' | 'changed' = 'error'
  ) {
    const session = KaraokeSessionRegistry.cache.get(guildId)
    if (!session) return

    clearTimeout(session.updateTimer)
    clearTimeout(session.timeout)

    if (session.collector?.stop) {
      session.collector.stop('cleanup')
    }

    if (session.message?.edit) {
      await session.message
        .edit({
          components: [_createEndedContainer(reason)],
          flags: MessageFlags.IsComponentsV2
        })
        .catch(() => null)

      _autoDelete(session.message)
    }

    KaraokeSessionRegistry.cache.delete(guildId)
  },

  async cleanupAll() {
    const keys = [...KaraokeSessionRegistry.cache.keys()]
    for (const key of keys) {
      await KaraokeSessionRegistry.cleanup(key, 'error')
    }
    KaraokeSessionRegistry.cache.clear()
  }
}

// Periodic cleanup of orphaned karaoke sessions (disconnected players, destroyed players)
const KARAOKE_ORPHAN_CLEANUP_INTERVAL = 60_000
const karaokeOrphanTimer = setInterval(() => {
  for (const [guildId, session] of KaraokeSessionRegistry.cache) {
    if (!session.player?.connected || session.player?.destroyed) {
      KaraokeSessionRegistry.cleanup(guildId, 'error').catch(() => {})
    }
  }
}, KARAOKE_ORPHAN_CLEANUP_INTERVAL)
if (karaokeOrphanTimer.unref) karaokeOrphanTimer.unref()

@Cooldown.user(60000, { uses: 2 })
@Declare({
  name: 'karaoke',
  description: 'Start a karaoke session with synced lyrics'
})
@Middlewares(['cooldown', 'checkPlayer', 'checkVoice', 'checkTrack'])
export default class KaraokeCommand extends Command {
  private _getCurrentTimeMs(
    session: KaraokeSession,
    isPaused: boolean
  ): number {
    const player = session.player
    const position = player?.position
    const timestamp = player?.timestamp

    if (typeof position === 'number' && Number.isFinite(position)) {
      if (isPaused) return Math.max(0, position)

      if (typeof timestamp === 'number' && Number.isFinite(timestamp)) {
        const elapsedMs = Math.max(0, Date.now() - timestamp)
        const estimatedPosition = position + elapsedMs
        const trackLength = player.current?.info?.length
        return Math.max(
          0,
          typeof trackLength === 'number' && Number.isFinite(trackLength)
            ? Math.min(estimatedPosition, trackLength)
            : estimatedPosition
        )
      }

      return Math.max(0, position)
    }

    if (isPaused) return Math.max(0, session.fallbackStartPosition)
    const elapsedMs = Date.now() - session.fallbackStartTime
    return Math.max(0, session.fallbackStartPosition + elapsedMs)
  }

  // biome-ignore lint/suspicious/noExplicitAny: player is a dynamic player object
  private _isPlayerPaused(player: any): boolean {
    return player?.paused === true || player?.playing === false
  }

  private _computeNextEditDelayMs(
    session: KaraokeSession,
    currentTimeMs: number,
    isPaused: boolean
  ) {
    if (isPaused) return PAUSED_POLL_INTERVAL_MS

    const lines = session.lines
    if (!lines.length) return 1000

    const idx = _findCurrentLineIndex(lines, currentTimeMs)
    if (idx < 0) {
      const firstLine = lines[0]
      if (!firstLine) return 1000
      const timeUntilFirstLine = _lineStartMs(firstLine) - currentTimeMs
      const countdownBoundary = timeUntilFirstLine % 1000
      return Math.max(
        MIN_TICK_DELAY_MS,
        Math.min(
          MAX_TICK_DELAY_MS,
          Math.min(timeUntilFirstLine, countdownBoundary || 1000) +
            SCHEDULER_JITTER_MS
        )
      )
    }

    const current = lines[idx]
    if (!current) return 1000
    const next = lines[idx + 1]

    const segStart = _lineStartMs(current)
    const segEnd = next
      ? _lineStartMs(next)
      : segStart + DEFAULT_LINE_DURATION_MS

    const duration = segEnd - segStart
    if (duration <= 0) return MIN_TICK_DELAY_MS

    const timeToNextLine = Math.max(0, segEnd - currentTimeMs)
    const delay =
      Math.min(timeToNextLine, PROGRESS_EDIT_INTERVAL_MS) + SCHEDULER_JITTER_MS
    return Math.max(MIN_TICK_DELAY_MS, Math.min(MAX_TICK_DELAY_MS, delay))
  }

  private _scheduleNextTick(guildId: string, delayMs: number, errorCount = 0) {
    const session = KaraokeSessionRegistry.get(guildId)
    if (!session) return

    clearTimeout(session.updateTimer)

    session.updateTimer = setTimeout(() => {
      this._tick(guildId, errorCount).catch(() =>
        KaraokeSessionRegistry.cleanup(guildId, 'error')
      )
    }, delayMs)

    if (session.updateTimer.unref) session.updateTimer.unref()
  }

  private async _tick(guildId: string, errorCount = 0): Promise<void> {
    const session = KaraokeSessionRegistry.get(guildId)
    if (!session || session.stoppedByUser || session.player.destroyed) {
      await KaraokeSessionRegistry.cleanup(
        guildId,
        session?.stoppedByUser ? 'stopped' : 'error'
      )
      return
    }

    if (!KaraokeSessionRegistry.has(guildId)) {
      await KaraokeSessionRegistry.cleanup(guildId, 'error')
      return
    }

    const isPaused = this._isPlayerPaused(session.player)
    const currentTimeMs = this._getCurrentTimeMs(session, isPaused)
    const currentTrackKey = _getTrackKey(session.player.current)

    if (!currentTrackKey || currentTrackKey !== session.trackKey) {
      await KaraokeSessionRegistry.cleanup(guildId, 'changed')
      return
    }

    const lastLine = session.lines[session.lines.length - 1]
    const lastTimestampMs = lastLine ? _lineStartMs(lastLine) : 0

    if (currentTimeMs > lastTimestampMs + SONG_END_BUFFER_MS) {
      await KaraokeSessionRegistry.cleanup(guildId, 'finished')
      return
    }

    const renderKey = _getRenderKey(session.lines, currentTimeMs, isPaused)
    const timeSinceLastEdit = Date.now() - session.lastEditAt
    const isLineTransition =
      renderKey.split(':', 1)[0] !== session.lastRenderKey.split(':', 1)[0]
    const minimumEditInterval = isLineTransition
      ? MIN_LINE_TRANSITION_INTERVAL_MS
      : MIN_EDIT_INTERVAL_MS

    if (renderKey === session.lastRenderKey) {
      const delay = this._computeNextEditDelayMs(
        session,
        currentTimeMs,
        isPaused
      )
      this._scheduleNextTick(guildId, delay, 0)
      return
    }

    if (timeSinceLastEdit < minimumEditInterval) {
      this._scheduleNextTick(
        guildId,
        minimumEditInterval - timeSinceLastEdit + SCHEDULER_JITTER_MS,
        0
      )
      return
    }

    const container = _createKaraokeStageContainer(
      {
        artist: session.artist,
        artworkUrl: session.artworkUrl,
        title: session.title,
        uri: session.uri
      },
      session.lines,
      currentTimeMs,
      isPaused
    )

    try {
      await session.message.edit({
        components: [container],
        flags: MessageFlags.IsComponentsV2
      })
      session.lastEditAt = Date.now()
      session.lastRenderKey = renderKey
    } catch (error) {
      const err = error as { code?: number }
      if (err.code === 10065 || err.code === 10008) {
        await KaraokeSessionRegistry.cleanup(guildId, 'error')
        return
      }

      if (errorCount < 3) {
        this._scheduleNextTick(guildId, 1000, errorCount + 1)
        return
      }

      await KaraokeSessionRegistry.cleanup(guildId, 'error')
      return
    }

    const delay = this._computeNextEditDelayMs(session, currentTimeMs, isPaused)
    this._scheduleNextTick(guildId, delay, 0)
  }

  private async _sendErrorAndAutoDelete(
    ctx: CommandContext,
    container: Container
  ) {
    const msg = await ctx.editOrReply(
      {
        components: [container],
        flags: MessageFlags.IsComponentsV2
      },
      true
    )
    _autoDelete(msg)
  }

  public override async run(ctx: CommandContext): Promise<void> {
    if (!(await safeDefer(ctx))) return

    const lang = getContextLanguage(ctx)
    const t = ctx.t.get(lang)

    const guildId = ctx.guildId
    if (!guildId) return

    const player = ctx.client.aqua.players.get(guildId)
    if (!player) {
      await this._sendErrorAndAutoDelete(
        ctx,
        _createErrorContainer(t.karaoke.noActivePlayer, lang, ctx)
      )
      return
    }

    if (KaraokeSessionRegistry.has(guildId)) {
      await this._sendErrorAndAutoDelete(
        ctx,
        _createErrorContainer(t.karaoke.sessionAlreadyActive, lang, ctx)
      )
      return
    }

    await KaraokeSessionRegistry.cleanup(guildId, 'error')

    const result = await _fetchKaraokeLyrics(undefined, player.current)
    if (!result) {
      await this._sendErrorAndAutoDelete(
        ctx,
        _createErrorContainer(t.karaoke.noLyricsAvailable, lang, ctx)
      )
      return
    }

    const title = result.track?.title || player.current?.title || 'Karaoke'
    const artist =
      result.track?.author || player.current?.author || 'Unknown artist'
    const artworkUrl =
      result.track?.albumArt ||
      player.current?.info?.artworkUrl ||
      player.current?.thumbnail ||
      undefined
    const uri = player.current?.info?.uri || player.current?.uri || undefined
    const initialPosition = player.position ?? 0
    const isPaused = this._isPlayerPaused(player)
    const initialRenderKey = _getRenderKey(
      result.lines,
      initialPosition,
      isPaused
    )

    const container = _createKaraokeStageContainer(
      { artist, artworkUrl, title, uri },
      result.lines,
      initialPosition,
      isPaused
    )

    const message = await ctx.editOrReply(
      {
        components: [container],
        flags: MessageFlags.IsComponentsV2
      },
      true
    )
    if (!message) return

    const collector = message.createComponentCollector?.({
      filter: (i: { isButton: () => boolean; customId: string }) =>
        i.isButton() && i.customId === 'ignore_karaoke-stop',
      onStop(_reason: string | undefined, _refresh: () => void) {},
      idle: SESSION_TIMEOUT_MS
    })

    if (!collector) {
      _autoDelete(message)
      return
    }

    collector.run(
      'ignore_karaoke-stop',
      async (i: {
        guildId?: string | null
        member?: { voice?: unknown } | null
        user: { id: string }
        client?: unknown
        write: (opts: { content: string; flags: number }) => Promise<void>
      }) => {
        const session = KaraokeSessionRegistry.get(guildId)
        const currentPlayer = ctx.client.aqua.players.get(guildId)
        const memberVoice = await getMemberVoiceState({
          ...i,
          guildId,
          client: ctx.client
        })
        const authorization = authorizeVoiceControl({
          guildId,
          memberChannelId: memberVoice?.channelId ?? null,
          playerChannelId: currentPlayer?.voiceChannel ?? null,
          hasPlayer: Boolean(currentPlayer),
          requirePlayer: true,
          playerDestroyed: currentPlayer?.destroyed === true
        })

        if (!authorization.ok || !session || session.player !== currentPlayer) {
          await i.write({
            content: 'You must be in the voice channel to stop karaoke.',
            flags: 64
          })
          return
        }

        session.stoppedByUser = true

        await KaraokeSessionRegistry.cleanup(guildId, 'stopped')

        await i.write({
          content: `Karaoke session stopped by <@${i.user.id}>.`,
          flags: 64
        })
      }
    )

    const timeout = setTimeout(() => {
      KaraokeSessionRegistry.cleanup(guildId, 'finished')
    }, SESSION_TIMEOUT_MS)
    if (timeout.unref) timeout.unref()

    const updateTimer = setTimeout(() => {}, 0)
    if (updateTimer.unref) updateTimer.unref()

    await KaraokeSessionRegistry.add(guildId, {
      message,
      lines: result.lines,
      player,
      updateTimer,
      timeout,
      collector,
      fallbackStartPosition: initialPosition,
      fallbackStartTime: Date.now(),
      artist,
      artworkUrl,
      lastEditAt: Date.now(),
      lastRenderKey: initialRenderKey,
      title,
      uri,
      trackKey: _getTrackKey(player.current),
      stoppedByUser: false
    })

    this._scheduleNextTick(guildId, 0, 0)
  }
}

export const cleanupKaraokeSession = async (
  guildId: string,
  reason: 'stopped' | 'finished' | 'error' = 'error'
) => {
  await KaraokeSessionRegistry.cleanup(guildId, reason)
}

export const hasKaraokeSession = (guildId: string) => {
  return KaraokeSessionRegistry.has(guildId)
}

export const syncKaraokeSessionTrack = async (
  guildId: string,
  track:
    | {
        uri?: string
        identifier?: string
        title?: string
        author?: string
        info?: {
          uri?: string
          identifier?: string
          title?: string
          author?: string
        }
      }
    | null
    | undefined
) => {
  const session = KaraokeSessionRegistry.get(guildId)
  if (!session) return

  const trackKey = _getTrackKey(track)
  if (!trackKey || trackKey !== session.trackKey) {
    await KaraokeSessionRegistry.cleanup(guildId, 'changed')
  }
}

export const cleanupAllKaraokeSessions = async () => {
  await KaraokeSessionRegistry.cleanupAll()
}
