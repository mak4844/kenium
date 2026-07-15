import { lru } from 'tiny-lru'

export function createPlaylistNameCache(max = 200, ttl = 30_000) {
  const cache = lru<string[]>(max, ttl)
  return {
    get: (userId: string) => cache.get(userId),
    set: (userId: string, names: string[]) => cache.set(userId, names),
    invalidate: (userId: string) => cache.delete(userId)
  }
}
