import { createEvent } from 'seyfert'
import { requestTwentyFourSevenRecovery } from './voiceStateUpdate.ts'

export default createEvent({
  data: { name: 'resumed', once: false },
  run: (_args, client) => {
    requestTwentyFourSevenRecovery(
      client as unknown as Parameters<typeof requestTwentyFourSevenRecovery>[0],
      'gatewayResumed'
    )
  }
})
