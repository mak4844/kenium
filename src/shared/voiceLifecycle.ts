export type LifecycleTimer = ReturnType<typeof setTimeout>

export const isSupportedVoiceChannelType = (type?: number): boolean =>
  type === 2 || type === 13

export class GuildTimerRegistry {
  private timers = new Map<string, LifecycleTimer>()

  schedule(guildId: string, callback: () => void, delay: number) {
    this.cancel(guildId)
    const timer = setTimeout(() => {
      if (this.timers.get(guildId) !== timer) return
      this.timers.delete(guildId)
      callback()
    }, delay)
    timer.unref?.()
    this.timers.set(guildId, timer)
  }

  cancel(guildId: string) {
    const timer = this.timers.get(guildId)
    if (!timer) return
    clearTimeout(timer)
    this.timers.delete(guildId)
  }

  clear() {
    for (const timer of this.timers.values()) clearTimeout(timer)
    this.timers.clear()
  }
}
