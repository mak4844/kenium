type PlaylistPlayerLike = {
  destroyed?: boolean
  voiceChannel?: string | null
  _lastVoiceChannel?: string | null
}

export type PlaylistPlayerDecision =
  | { action: 'create' }
  | { action: 'reuse' }
  | { action: 'reject' }

export const decidePlaylistPlayer = (
  player: PlaylistPlayerLike | null | undefined,
  callerChannelId: string
): PlaylistPlayerDecision => {
  if (!player || player.destroyed) return { action: 'create' }

  const playerChannelId =
    player.voiceChannel || player._lastVoiceChannel || null
  return playerChannelId === callerChannelId
    ? { action: 'reuse' }
    : { action: 'reject' }
}

export const enqueueTracksAndCount = async <T>(
  tracks: T[],
  enqueue: (track: T) => unknown
): Promise<number> => {
  let count = 0
  for (const track of tracks) {
    try {
      await enqueue(track)
      count += 1
    } catch {}
  }
  return count
}
