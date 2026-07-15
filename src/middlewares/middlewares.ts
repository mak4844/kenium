import { cooldownMiddleware } from './cooldown.middleware.ts'
import { checkPlayer, checkTrack, checkVoice } from './internals.ts'
export const middlewares = {
  cooldown: cooldownMiddleware,
  checkPlayer,
  checkVoice,
  checkTrack
}
