import { createEvent } from 'seyfert'
import { GuildTimerRegistry } from '../shared/voiceLifecycle.ts'

const reconnectTimers = new GuildTimerRegistry()

export const cleanupResumedReconnectTimers = () => reconnectTimers.clear()

export default createEvent({
  data: { name: 'resumed', once: false },
  run: async (_args, client) => {
    const players = client.aqua?.players
    if (
      !players ||
      typeof players.size !== 'number' ||
      players.size <= 0 ||
      typeof players.values !== 'function'
    ) {
      return
    }

    for (const player of players.values()) {
      const vcId = player.voiceChannel ?? player._lastVoiceChannel
      if (!vcId) continue

      if (player.connection) {
        player.connection._lastSentVoiceKey = ''
        player.connection._lastVoiceDataUpdate = 0
      }

      if (!player.textChannel && player._lastTextChannel) {
        player.textChannel = player._lastTextChannel
      }

      if (player.nowPlayingMessage) {
        const nowPlayingMessage = player.nowPlayingMessage as {
          id?: string
          channelId?: string
        }
        if (!nowPlayingMessage.id || !nowPlayingMessage.channelId) {
          player.nowPlayingMessage = null
        } else {
          const fetched =
            typeof client.messages?.fetch === 'function'
              ? await client.messages
                  .fetch(nowPlayingMessage.id, nowPlayingMessage.channelId)
                  .catch(() => null)
              : null
          player.nowPlayingMessage = fetched || null
        }
      }

      player.send({
        guild_id: player.guildId,
        channel_id: vcId,
        self_deaf: player.deaf,
        self_mute: player.mute
      })

      reconnectTimers.schedule(
        player.guildId,
        () => {
          if (player.destroyed) return
          const conn = player.connection
          if (!conn) return

          if (
            !conn._lastVoiceDataUpdate ||
            Date.now() - conn._lastVoiceDataUpdate > 2500
          ) {
            player.send({
              guild_id: player.guildId,
              channel_id: null,
              self_deaf: player.deaf,
              self_mute: player.mute
            })
            reconnectTimers.schedule(
              player.guildId,
              () => {
                if (player.destroyed) return
                player.connect({
                  guildId: player.guildId,
                  voiceChannel: vcId,
                  deaf: player.deaf,
                  mute: player.mute
                })
              },
              250
            )
          }
        },
        2500
      )
    }
  }
})
