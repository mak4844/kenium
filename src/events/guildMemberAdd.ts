import { createEvent } from 'seyfert'
import { state } from '../../index.ts'

export default createEvent({
  data: { name: 'guildMemberAdd' },
  run: () => {
    state.cachedUserCount++
  }
})
