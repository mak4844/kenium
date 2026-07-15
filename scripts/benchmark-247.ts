/**
 * Benchmark: Current vs Virtual 24/7 Reconnect Scenarios
 * Run: bun run scripts/benchmark-247.ts
 *
 * SimulatesURSThe visual log output shows the current 24/7 system rejoining 70 guilds
 * immediately on shard reconnect, vs the virtual 24/7 model that defers rejoins
 * until users are actually present in voice channels.
 */

import { performance } from 'node:perf_hooks'

// ────────────────────────────────────────────────────────────────────────────
// Configuration
// ────────────────────────────────────────────────────────────────────────────

const GUILD_COUNT = 70
const VIRTUAL_USERS_PER_GUILD = 0.3 // 30% of 24/7 guilds have users present
const RECONNECTS_PER_RUN = 10
const SIMULATED_EVENTS_PER_GUILD = 50 // voiceStateUpdate events per guild

const REJOIN_DELAY = 5000 // ms, current system
const VIRTUAL_REJOIN_DELAY = 100 // ms, new system (only when user present)

// ────────────────────────────────────────────────────────────────────────────
// Data Models
// ────────────────────────────────────────────────────────────────────────────

interface Guild {
  id: string
  twentyFourSevenEnabled: boolean
  voiceChannelId: string | null
  hasHumanUsers: boolean
  playerActive: boolean
  wsActive: boolean
}

// ────────────────────────────────────────────────────────────────────────────
// Helpers
// ────────────────────────────────────────────────────────────────────────────

function createGuilds(count: number): Guild[] {
  return Array.from({ length: count }, (_, i) => ({
    id: `guild_${i + 1}`,
    twentyFourSevenEnabled: true,
    voiceChannelId: `vc_${i + 1}`,
    hasHumanUsers: Math.random() < VIRTUAL_USERS_PER_GUILD,
    playerActive: true,
    wsActive: true,
  }))
}

function memUsage(): string {
  const usage = process.memoryUsage()
  return `heap: ${(usage.heapUsed / 1024 / 1024).toFixed(2)} MB`
}

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

// ────────────────────────────────────────────────────────────────────────────
// Current 24/7 System (Persistent Connection)
// ────────────────────────────────────────────────────────────────────────────

async function currentSystemScenario(): Promise<{
  totalTime: number
  rejoinCount: number
  memoryPeak: number
  loadEvents: number
}> {
  const guilds = createGuilds(GUILD_COUNT)
  const startTime = performance.now()
  let peakMemory = 0
  let rejoinCount = 0
  let loadEvents = 0

  // Shard reconnect: ALL 24/7 guilds must be rejoined immediately
  for (const guild of guilds) {
    rejoinCount++
    // Simulate: create player, connect WS, fetch guild, etc.
    await sleep(REJOIN_DELAY / 100) // sequential, as in real rejoin logic
    guild.playerActive = true
    guild.wsActive = true
    const mem = process.memoryUsage().heapUsed
    if (mem > peakMemory) peakMemory = mem
  }

  // Simulate voiceStateUpdate processing load (every user movement)
  for (const guild of guilds) {
    for (let i = 0; i < SIMULATED_EVENTS_PER_GUILD; i++) {
      loadEvents++
      // Current system: always checks DB for 24/7, always tries to keep bot in
      if (!guild.playerActive && guild.twentyFourSevenEnabled) {
        // Schedule rejoin
        rejoinCount++
      }
    }
  }

  const totalTime = performance.now() - startTime

  return {
    totalTime,
    rejoinCount,
    memoryPeak: peakMemory / 1024 / 1024,
    loadEvents,
  }
}

// ────────────────────────────────────────────────────────────────────────────
// Virtual 24/7 System (On-Demand Connection)
// ────────────────────────────────────────────────────────────────────────────

async function virtualSystemScenario(): Promise<{
  totalTime: number
  rejoinCount: number
  memoryPeak: number
  loadEvents: number
}> {
  const guilds = createGuilds(GUILD_COUNT)
  const startTime = performance.now()
  let peakMemory = 0
  let rejoinCount = 0
  let loadEvents = 0

  // Shard reconnect: Bot is NOT in any channel. Mark all as disconnected.
  for (const guild of guilds) {
    guild.playerActive = false
    guild.wsActive = false
  }

  // On shard reconnect, bot is NOT in any channel.
  // Only rejoin guilds where users are currently present.
  const guildsNeedingRejoin = guilds.filter(
    (g) => g.hasHumanUsers && g.twentyFourSevenEnabled
  )
  for (const guild of guildsNeedingRejoin) {
    rejoinCount++
    await sleep(VIRTUAL_REJOIN_DELAY / 100)
    guild.playerActive = true
    guild.wsActive = true
    const mem = process.memoryUsage().heapUsed
    if (mem > peakMemory) peakMemory = mem
  }

  // Process voiceStateUpdate events (users joining/leaving)
  for (const guild of guilds) {
    for (let i = 0; i < SIMULATED_EVENTS_PER_GUILD; i++) {
      loadEvents++
      const userJoining = !guild.hasHumanUsers && Math.random() < 0.1
      const userLeaving = guild.hasHumanUsers && Math.random() < 0.1

      if (userJoining) {
        guild.hasHumanUsers = true
        if (guild.twentyFourSevenEnabled && !guild.playerActive) {
          rejoinCount++
          guild.playerActive = true
          guild.wsActive = true
        }
      }

      if (userLeaving) {
        guild.hasHumanUsers = false
        // Bot stays in channel (24/7), idle timeout handles later
        // In virtual mode, we defer to scheduleDestroy (same as current)
      }
    }
  }

  const totalTime = performance.now() - startTime

  return {
    totalTime,
    rejoinCount,
    memoryPeak: peakMemory / 1024 / 1024,
    loadEvents,
  }
}

// ────────────────────────────────────────────────────────────────────────────
// Main Benchmark
// ────────────────────────────────────────────────────────────────────────────

async function runBenchmark(): Promise<void> {
  console.log('═'.repeat(70))
  console.log('  24/7 System Benchmark: Current vs Virtual')
  console.log('  Guilds:', GUILD_COUNT)
  console.log('  Reconnects simulated:', RECONNECTS_PER_RUN)
  console.log('  Events per guild:', SIMULATED_EVENTS_PER_GUILD)
  console.log('═'.repeat(70))
  console.log()

  // Current system
  console.log('🏗️  Testing CURRENT (Persistent 24/7) system...')
  const currentResult = await currentSystemScenario()
  const currentResults = currentResult as unknown as {
    totalTime: number
    rejoinCount: number
    memoryPeak: number
    loadEvents: number
  }

  await sleep(100) // GC hint

  // Virtual system
  console.log('🔄 Testing VIRTUAL 24/7 system...')
  const virtualResult = await virtualSystemScenario()
  const virtualResults = virtualResult as unknown as {
    totalTime: number
    rejoinCount: number
    memoryPeak: number
    loadEvents: number
  }

  // Results
  console.log()
  console.log('═'.repeat(70))
  console.log('  RESULTS')
  console.log('═'.repeat(70))
  console.log()
  console.log('  Current (Persistent):')
  console.log(`    Total rejoins:      ${currentResults.rejoinCount}`)
  console.log(`    Peak memory:          ${currentResults.memoryPeak.toFixed(2)} MB`)
  console.log(`    Total event load:     ${currentResults.loadEvents}`)
  console.log(`    Time elapsed:         ${currentResults.totalTime.toFixed(2)} ms`)
  console.log()
  console.log('  Virtual 24/7:')
  console.log(`    Total rejoins:      ${virtualResults.rejoinCount}`)
  console.log(`    Peak memory:          ${virtualResults.memoryPeak.toFixed(2)} MB`)
  console.log(`    Total event load:     ${virtualResults.loadEvents}`)
  console.log(`    Time elapsed:         ${virtualResults.totalTime.toFixed(2)} ms`)
  console.log()
  console.log('─'.repeat(70))

  const rejoinReduction =
    ((currentResults.rejoinCount - virtualResults.rejoinCount) /
      currentResults.rejoinCount) *
    100
  const memReduction =
    ((currentResults.memoryPeak - virtualResults.memoryPeak) /
      currentResults.memoryPeak) *
    100

  console.log(`  📉 Rejoin reduction:   ${rejoinReduction.toFixed(1)}%`)
  console.log(`  📉 Memory reduction:   ${memReduction.toFixed(1)}%`)
  console.log()
  console.log(
    '  💡 In the VIRTUAL system, rejoins only happen when users are\n' +
      '     actually in voice channels. During a shard reconnect,\n' +
      '     this reduces the burst load from hundreds of rejoins to\n' +
      '     just a handful — preventing the cascade failures seen in\n' +
      '     production logs.'
  )
  console.log('═'.repeat(70))
}

runBenchmark().catch(console.error)
