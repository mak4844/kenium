export interface VersionedUpdate<T> {
  updates: Partial<T>
  version: number
}

export const mergeQueuedUpdate = <T>(
  older: VersionedUpdate<T>,
  newer?: VersionedUpdate<T>
): VersionedUpdate<T> =>
  newer
    ? {
        updates: { ...older.updates, ...newer.updates },
        version: newer.version
      }
    : { updates: { ...older.updates }, version: older.version }

export const isCurrentVersion = (
  updateVersion: number,
  currentVersion: number | undefined
) => updateVersion === currentVersion

export const cloneSettings = <T extends object>(settings: T): T => ({
  ...settings
})
