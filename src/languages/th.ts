import type English from './en.ts'

export default {
  hello: 'สวัสดี',
  ping: {
    description:
      '**เกตเวย์**: {wsPing}ms\n**ชาร์ด**: {shardPing}ms\n**ผู้เล่น**: {playerPing}ms',
    descriptionNoPlayer: '**เกตเวย์**: {wsPing}ms\n**ชาร์ด**: {shardPing}ms',
    title: 'ข้อมูล Ping'
  },
  language: {
    set: 'ตั้งค่าภาษาเป็น {lang}',
    name: 'ภาษา',
    description: 'ตั้งค่าภาษาของบอท'
  },
  commands: {
    ping: {
      name: 'ping',
      description: 'แสดง ping กับ discord'
    },
    language: {
      name: 'language',
      description: 'ตั้งค่าภาษาของบอท'
    },
    play: {
      name: 'play',
      description: 'เล่นเพลงจากคำค้นหาหรือ URL'
    },
    'play-file': {
      name: 'play-file',
      description: 'เล่นไฟล์จากคอมพิวเตอร์ของคุณ'
    },
    pause: {
      name: 'pause',
      description: 'หยุดเพลงชั่วคราว'
    },
    resume: {
      name: 'resume',
      description: 'เล่นเพลงต่อ'
    },
    stop: {
      name: 'stop',
      description: 'หยุดเพลง'
    },
    skip: {
      name: 'skip',
      description: 'ข้ามเพลงปัจจุบัน'
    },
    previous: {
      name: 'previous',
      description: 'เล่นเพลงก่อนหน้า'
    },
    queue: {
      name: 'queue',
      description: 'แสดงคิวเพลงพร้อมส่วนควบคุม'
    },
    nowplaying: {
      name: 'nowplaying',
      description: 'แสดงเพลงที่กำลังเล่นอยู่'
    },
    volume: {
      name: 'volume',
      description: 'ตั้งค่าระดับเสียง'
    },
    clear: {
      name: 'clear',
      description: 'ล้างคิวเพลง'
    },
    shuffle: {
      name: 'shuffle',
      description: 'สับเปลี่ยนคิว'
    },
    loop: {
      name: 'loop',
      description: 'ตั้งค่าโหมดเล่นซ้ำ'
    },
    autoplay: {
      name: 'autoplay',
      description: 'สลับการเล่นอัตโนมัติ'
    },
    filters: {
      name: 'filters',
      description: 'ใช้ตัวกรองเสียง'
    },
    jump: {
      name: 'jump',
      description: 'ข้ามไปยังตำแหน่งที่ต้องการในคิว'
    },
    remove: {
      name: 'remove',
      description: 'ลบเพลงออกจากคิว'
    },
    grab: {
      name: 'grab',
      description: 'หยิบเพลงปัจจุบันและส่งไปยัง DM'
    },
    lyrics: {
      name: 'lyrics',
      description: 'รับเนื้อเพลงสำหรับเพลงปัจจุบัน'
    },
    export: {
      name: 'export',
      description: 'ส่งออกคิว'
    },
    import: {
      name: 'import',
      description: 'นำเข้าคิวจากไฟล์'
    },
    destroy: {
      name: 'destroy',
      description: 'ทำลายโปรแกรมเล่นเพลง'
    },
    '247': {
      name: '247',
      description: 'สลับโหมด 24/7'
    },
    changelog: {
      name: 'changelog',
      description: 'แสดงบันทึกการเปลี่ยนแปลงของบอท'
    },
    help: {
      name: 'help',
      description: 'แสดงคำสั่งที่มีอยู่'
    },
    invite: {
      name: 'invite',
      description: 'รับลิงก์เชิญบอท'
    },
    search: {
      name: 'search',
      description: 'ค้นหาเพลงบนแพลตฟอร์มเพลง'
    },
    seek: {
      name: 'seek',
      description: 'ข้ามไปยังตำแหน่งที่ต้องการในเพลง'
    },
    restart: {
      name: 'restart',
      description: 'เริ่มเพลงใหม่'
    },
    status: {
      name: 'status',
      description: 'แสดงสถานะของบอท'
    },
    tts: {
      name: 'ทีทีเอส',
      description: 'สร้างและส่งข้อความ TTS'
    },
    karaoke: {
      name: 'คาราโอเกะ',
      description: 'เริ่มเซสชันคาราโอเกะด้วยเนื้อเพลงที่ซิงค์'
    },
    roulette: {
      name: 'รูเล็ต',
      description: 'เล่นแทร็กแบบสุ่มจากคิว'
    }
  },
  // Music player messages
  player: {
    noVoiceChannel: 'คุณต้องอยู่ในช่องเสียงเพื่อใช้คำสั่งนี้',
    noPlayer: 'ไม่พบโปรแกรมเล่นเพลง',
    noTrack: 'ไม่มีเพลงที่กำลังเล่นอยู่',
    alreadyPaused: 'เพลงถูกหยุดชั่วคราวแล้ว',
    alreadyResumed: 'เพลงกำลังเล่นอยู่แล้ว',
    paused: 'หยุดเพลงชั่วคราว',
    resumed: 'เล่นเพลงต่อ',
    stopped: 'หยุดเพลง',
    destroyed: 'ทำลายโปรแกรมเล่นเพลง',
    queueEmpty: 'คิวว่างเปล่า',
    queueCleared: 'ล้างคิวแล้ว',
    trackAdded: 'เพิ่ม **[{title}]({uri})** ลงในคิวแล้ว',
    playlistAdded: 'เพิ่มเพลย์ลิสต์ **[`{name}`]({uri})** ({count} แทร็ก) ลงในคิวแล้ว',
    noTracksFound: 'ไม่พบแทร็กสำหรับคำค้นหาที่ระบุ',
    invalidPosition: 'ตำแหน่งต้องอยู่ระหว่าง 1 ถึง {max}',
    jumpedTo: 'ข้ามไปยังเพลงที่ {position}',
    jumpedToSong: 'ข้ามไปยังเพลง "{title}"',
    songNotFound: 'ไม่พบ "{title}" ในคิว',
    alreadyAtPosition: 'อยู่ที่ตำแหน่ง 1 แล้ว',
    alreadyPlaying: '"{title}" กำลังเล่นอยู่แล้ว',
    volumeSet: 'ตั้งค่าระดับเสียงเป็น {volume}%',
    invalidVolume: 'ระดับเสียงต้องอยู่ระหว่าง 0 ถึง 100',
    autoplayEnabled: 'เปิดใช้งานการเล่นอัตโนมัติแล้ว',
    autoplayDisabled: 'ปิดใช้งานการเล่นอัตโนมัติแล้ว',
    loopEnabled: 'เปิดใช้งานการเล่นซ้ำแล้ว',
    loopDisabled: 'ปิดใช้งานการเล่นซ้ำแล้ว',
    filterApplied: 'ใช้ตัวกรอง **{filter}** แล้ว',
    filtersCleared: 'ล้างตัวกรองทั้งหมดแล้ว',
    filterInvalid: 'ตัวกรองไม่ถูกต้อง',
    nowPlaying: 'กำลังเล่น',
    requestedBy: 'ขอโดย',
    duration: 'ระยะเวลา',
    author: 'ศิลปิน',
    position: 'ตำแหน่ง',
    volume: 'ระดับเสียง',
    loop: 'เล่นซ้ำ',
    autoplay: 'เล่นอัตโนมัติ',
    queueSize: 'ขนาดคิว',
    enabled: 'เปิดใช้งาน',
    disabled: 'ปิดใช้งาน',
    none: 'ไม่มี',
    track: 'แทร็ก',
    queue: 'คิว',
    restarted: 'เริ่มเพลงใหม่',
    shuffled: 'สับเปลี่ยนคิวแล้ว',
    skipped: 'ข้ามเพลงแล้ว',
    previousPlayed: 'กำลังเล่นเพลงก่อนหน้า',
    previousAdded: 'เพิ่มเพลงก่อนหน้าลงในคิวแล้ว',
    volumeChanged: 'เปลี่ยนระดับเสียงแล้ว',
    removedSong: 'ลบเพลงแล้ว',
    seeked: 'ข้ามเพลงแล้ว',
    fileAdded: 'เพิ่มลงในคิวแล้ว',
    noTrackFound: 'ไม่พบแทร็ก'
  },
  // 24/7 mode
  mode247: {
    title: 'โหมด 24/7',
    enabled: 'เปิดใช้งานโหมด 24/7 แล้ว',
    disabled: 'ปิดใช้งานโหมด 24/7 แล้ว'
  },
  // Export/Import
  export: {
    emptyQueue: 'คิวว่างเปล่า',
    success: 'ส่งออกคิวพร้อม URL สำหรับการนำเข้าแล้ว'
  },
  import: {
    emptyFile: 'ไฟล์ว่างเปล่า',
    noValidTracks: 'ไม่พบแทร็กที่ถูกต้องในไฟล์',
    importing: 'กำลังนำเข้า {count} แทร็ก...',
    complete: 'นำเข้าเสร็จสมบูรณ์',
    successfullyImported: 'นำเข้าสำเร็จ: **{count}** แทร็ก',
    failedToImport: 'นำเข้าไม่สำเร็จ: **{count}** แทร็ก',
    totalQueueSize: 'ขนาดคิวทั้งหมด: **{count}** แทร็ก'
  },
  // Grab command
  grab: {
    title: 'กำลังเล่น: **{title}**',
    listenHere: '[ฟังที่นี่]({uri})',
    duration: 'ระยะเวลา',
    author: 'ศิลปิน',
    server: 'เซิร์ฟเวอร์',
    footer: 'หยิบจากเซสชันปัจจุบันของคุณ',
    sentToDm: 'ฉันส่งรายละเอียดแทร็กให้คุณใน DM แล้ว',
    dmError: 'ฉันไม่สามารถส่ง DM ให้คุณได้ โปรดตรวจสอบการตั้งค่าความเป็นส่วนตัวของคุณ',
    noSongPlaying: 'ไม่มีเพลงที่กำลังเล่นอยู่'
  },
  // Help command
  help: {
    pageTitle: 'หน้า {current} จาก {total}',
    previous: 'ก่อนหน้า',
    next: 'ถัดไป'
  },
  // Lyrics command
  lyrics: {
    title: 'เนื้อเพลง',
    error: 'ข้อผิดพลาดเกี่ยวกับเนื้อเพลง',
    noLyricsFound: 'ไม่พบเนื้อเพลง',
    serviceUnavailable: 'บริการเนื้อเพลงไม่พร้อมใช้งาน',
    syncedLyrics: 'เนื้อเพลงที่ซิงค์แล้ว',
    textLyrics: 'เนื้อเพลงแบบข้อความ',
    artist: 'ศิลปิน',
    noActivePlayer: 'ไม่พบโปรแกรมเล่นที่ใช้งานอยู่'
  },
  // Jump command
  jump: {
    noSongsInQueue: 'ไม่มีเพลงในคิว',
    specifyPositionOrName: 'โปรดระบุหมายเลขตำแหน่งหรือชื่อเพลง'
  },
  // Filter names
  filters: {
    '8d': '8D',
    equalizer: 'อีควอไลเซอร์',
    karaoke: 'คาราโอเกะ',
    timescale: 'ไทม์สเกล',
    tremolo: 'ลูกคอ',
    vibrato: 'สั่น',
    rotation: 'การหมุน',
    distortion: 'การบิดเบือน',
    channelMix: 'ผสมช่อง',
    lowPass: 'ผ่านต่ำ',
    bassboost: 'เพิ่มเสียงเบส',
    slowmode: 'โหมดช้า',
    nightcore: 'ไนท์คอร์',
    vaporwave: 'เวเปอร์เวฟ',
    clear: 'ล้าง',
    invalidFilter: 'เลือกตัวกรองไม่ถูกต้อง'
  },
  // Search command
  search: {
    noVoiceChannel: '🎵 เข้าร่วมช่องเสียงก่อน!',
    alreadyConnected: '🎵 ฉันกำลังเล่นเพลงในช่องนี้อยู่แล้ว',
    noResults: '🔍 ไม่พบผลลัพธ์ ลองแพลตฟอร์มอื่น!',
    trackAdded: '✅ เพิ่มลงในคิวแล้ว',
    searchError: '❌ การค้นหาล้มเหลว โปรดลองอีกครั้ง',
    genericError: '❌ เกิดข้อผิดพลาด โปรดลองอีกครั้ง',
    invalidQuery: '❌ คำค้นหาสั้นเกินไปหรือมีอักขระที่ไม่ถูกต้อง',
    multiSearchStarted: '🔍 กำลังค้นหาในหลายแพลตฟอร์ม...',
    failedToJoinVoice: '❌ ไม่สามารถเข้าร่วมช่องเสียงได้'
  },
  // Status command
  status: {
    title: 'สถานะบอท',
    systemUptime: 'เวลาทำงานของระบบ',
    systemCpuModel: 'รุ่น CPU ของระบบ',
    systemCpuLoad: 'โหลด CPU ของระบบ',
    lavalinkUptime: 'เวลาทำงานของ Lavalink',
    lavalinkVersion: 'เวอร์ชัน Lavalink',
    systemMemory: 'หน่วยความจำของระบบ',
    systemMemBar: 'แถบหน่วยความจำของระบบ',
    lavalinkMemory: 'หน่วยความจำของ Lavalink',
    lavalinkMemBar: 'แถบหน่วยความจำของ Lavalink',
    lavalinkCpuLoad: 'โหลด CPU ของ Lavalink',
    lavalinkPlayers: 'ผู้เล่น Lavalink',
    lavalinkNodes: 'โหนด Lavalink',
    ping: 'Ping',
    processMemory: 'หน่วยความจำของกระบวนการ'
  },
  // TTS command
  tts: {
    generated: 'สร้างข้อความ TTS แล้ว'
  },
  // karaoke command
  karaoke: {
    error: 'ข้อผิดพลาดคาราโอเกะ',
    sessionEnded: 'เซสชันคาราโอเกะสิ้นสุดแล้ว',
    noActivePlayer: 'ไม่พบผู้เล่นที่ใช้งานอยู่',
    sessionAlreadyActive:
      'เซิร์ฟเวอร์นี้มีเซสชันคาราโอเกะที่ใช้งานอยู่แล้ว รอให้สิ้นสุดหรือใช้คำสั่งอีกครั้งเพื่อหยุดเซสชันปัจจุบัน',
    noLyricsAvailable: 'ไม่มีเนื้อเพลงที่ซิงค์พร้อมใช้งาน ลองเพลงอื่นดู',
    playing: 'กำลังเล่น',
    paused: 'หยุดชั่วคราว',
    noLyrics: 'ไม่มีเนื้อเพลงพร้อมใช้งาน'
  },
  // roulette command
  roulette: {
    playingRandom: '🎲 กำลังเล่นแทร็กแบบสุ่ม: **{title}** - **{author}**',
    error: 'เกิดข้อผิดพลาดขณะเล่นแทร็กแบบสุ่ม!'
  },
  // Volume command
  volume: {
    rangeError: 'ใช้ตัวเลขระหว่าง `0 - 200`'
  },
  // Invite command
  invite: {
    title: 'ไม่มีเพย์วอลล์ ไม่มีการโหวต มีแต่เพลง',
    description:
      'เบื่อบอทที่ล็อคฟีเจอร์ไว้หลังเพย์วอลล์หรือข้อกำหนดการโหวตหรือไม่? Kenium แตกต่าง:\n\n- **ฟรีตลอดไป**: ฟีเจอร์ทั้งหมด ทุกแพลตฟอร์ม (YouTube, Spotify, SoundCloud, Vimeo) – ไม่มีค่าธรรมเนียม ไม่มีโฆษณา\n- **เพลง 24/7**: เสียงคุณภาพสูง ตอบสนองรวดเร็ว ไม่มีการหยุดทำงาน\n- **ใช้งานง่าย**: เพียงพิมพ์ /play – คิวทันที ไม่มีการตั้งค่าที่ซับซ้อน\n- **โอเพ่นซอร์ส**: โค้ดโปร่งใส พร้อมให้ตรวจสอบเสมอ\n- **ฟีเจอร์ไม่จำกัด**: เพลย์ลิสต์ ฟิลเตอร์ เพิ่มเสียงเบส – ทั้งหมดฟรี\n- **ขับเคลื่อนโดย Aqualink**: ตัวจัดการ lavalink ที่รวดเร็ว เสถียร และเชื่อถือได้\n\nไม่มีการเก็บเงิน ไม่มีการโหวต แค่กดเล่นและสนุก\n\n**ต้องการมากกว่านี้?** คลิกที่ปุ่มด้านล่าง!\nไม่ต้องการมากกว่านี้? [`คลิกที่นี่เพื่อเชิญฉัน`](https://discord.com/oauth2/authorize?client_id=1202232935311495209)',
    supportServer: 'เซิร์ฟเวอร์สนับสนุน',
    github: 'GitHub',
    website: 'เว็บไซต์'
  },
  // Queue command
  queue: {
    title: 'คิว',
    page: 'หน้า {current} จาก {total}',
    nowPlaying: '🎵 กำลังเล่น',
    comingUp: '📋 กำลังจะมาถึง',
    queueEmpty: 'คิวว่างเปล่า',
    noTracksInQueue: '🔭 **ไม่มีแทร็กในคิว**\n\nใช้ `/play` เพื่อเพิ่มเพลง!',
    tip: '*เคล็ดลับ: คุณสามารถค้นหาหรือใช้ URL ได้*',
    pause: 'หยุดชั่วคราว',
    resume: 'เล่นต่อ',
    shuffleOn: 'สับเปลี่ยน: เปิด',
    shuffleOff: 'สับเปลี่ยน: ปิด',
    loopOn: 'เล่นซ้ำ: เปิด',
    loopOff: 'เล่นซ้ำ: ปิด',
    refresh: 'รีเฟรช',
    clear: 'ล้าง',
    noActivePlayerFound: '❌ ไม่พบโปรแกรมเล่นที่ใช้งานอยู่',
    errorDisplayingQueue: '❌ เกิดข้อผิดพลาดขณะแสดงคิว'
  },
  // Error messages
  errors: {
    general: 'เกิดข้อผิดพลาด',
    notFound: 'ไม่พบ',
    noPermission: 'คุณไม่มีสิทธิ์ใช้คำสั่งนี้',
    invalidLanguage: 'เลือกภาษาไม่ถูกต้อง',
    databaseError: 'ไม่สามารถบันทึกการตั้งค่าได้',
    commandError: 'เกิดข้อผิดพลาดขณะดำเนินการคำสั่ง',
    unsupportedContentType: 'ไม่รองรับประเภทเนื้อหา'
  },
  // Success messages
  success: {
    languageSet: 'เปลี่ยนภาษาเป็น **{lang}** สำเร็จแล้ว!',
    settingsSaved: 'บันทึกการตั้งค่าสำเร็จแล้ว',
    settingAlradySet: 'ตั้งค่านี้ถูกตั้งค่าไว้แล้ว'
  },
  // Playlist system
  playlist: {
    create: {
      invalidName: 'ชื่อไม่ถูกต้อง',
      nameTooLong: 'ชื่อเพลย์ลิสต์ต้องมีความยาวน้อยกว่า {maxLength} อักขระ',
      limitReached: 'ถึงขีดจำกัดเพลย์ลิสต์แล้ว',
      maxPlaylists: 'คุณสามารถมีเพลย์ลิสต์ได้สูงสุด {max} เพลย์ลิสต์',
      exists: 'เพลย์ลิสต์มีอยู่แล้ว',
      alreadyExists: 'มีเพลย์ลิสต์ชื่อ "{name}" อยู่แล้ว!',
      created: 'สร้างเพลย์ลิสต์แล้ว',
      name: 'ชื่อ',
      status: 'สถานะ',
      readyForTracks: 'พร้อมสำหรับแทร็ก!',
      addTracks: 'เพิ่มแทร็ก',
      viewPlaylist: 'ดูเพลย์ลิสต์'
    },
    add: {
      notFound: 'ไม่พบเพลย์ลิสต์',
      notFoundDesc: 'ไม่มีเพลย์ลิสต์ชื่อ "{name}"!',
      full: 'เพลย์ลิสต์เต็ม',
      fullDesc: 'เพลย์ลิสต์นี้ถึงขีดจำกัด {max} แทร็กแล้ว!',
      nothingAdded: 'ไม่มีอะไรถูกเพิ่ม',
      nothingAddedDesc: 'ไม่มีแทร็กใหม่ถูกเพิ่ม อาจมีอยู่แล้วในเพลย์ลิสต์หรือไม่พบรายการที่ตรงกัน',
      tracksAdded: 'เพิ่มแทร็กแล้ว',
      trackAdded: 'เพิ่มแทร็กแล้ว',
      tracks: 'แทร็ก',
      track: 'แทร็ก',
      artist: 'ศิลปิน',
      source: 'แหล่งที่มา',
      added: 'เพิ่มแล้ว',
      total: 'ทั้งหมด',
      duration: 'ระยะเวลา',
      addMore: 'เพิ่มอีก',
      playNow: 'เล่นเลย',
      viewAll: 'ดูทั้งหมด',
      addFailed: 'เพิ่มไม่สำเร็จ',
      addFailedDesc: 'ไม่สามารถเพิ่มแทร็กได้: {error}'
    },
    view: {
      noPlaylists: 'ไม่มีเพลย์ลิสต์',
      noPlaylistsDesc: 'คุณยังไม่ได้สร้างเพลย์ลิสต์เลย!',
      gettingStarted: 'เริ่มต้นใช้งาน',
      gettingStartedDesc: 'ใช้ `/playlist create` เพื่อสร้างเพลย์ลิสต์แรกของคุณ!',
      createPlaylist: 'สร้างเพลย์ลิสต์',
      yourPlaylists: 'เพลย์ลิสต์ของคุณ',
      yourPlaylistsDesc: 'คุณมี **{count}** เพลย์ลิสต์{plural}',
      choosePlaylist: 'เลือกเพลย์ลิสต์เพื่อดู...',
      notFound: 'ไม่พบเพลย์ลิสต์',
      notFoundDesc: 'ไม่มีเพลย์ลิสต์ชื่อ "{name}"!',
      playlistTitle: 'เพลย์ลิสต์: {name}',
      empty: 'เพลย์ลิสต์นี้ว่างเปล่า',
      description: 'คำอธิบาย',
      noDescription: 'ไม่มีคำอธิบาย',
      info: 'ข้อมูล',
      tracks: 'แทร็ก',
      plays: 'เล่น',
      tracksPage: 'แทร็ก (หน้า {current}/{total})',
      play: 'เล่น',
      shuffle: 'สับเปลี่ยน',
      manage: 'จัดการ',
      previous: 'ก่อนหน้า',
      next: 'ถัดไป'
    },
    delete: {
      notFound: 'ไม่พบเพลย์ลิสต์',
      notFoundDesc: 'ไม่มีเพลย์ลิสต์ชื่อ "{name}"!',
      deleted: 'ลบเพลย์ลิสต์แล้ว',
      deletedDesc: 'ลบเพลย์ลิสต์ "{name}" สำเร็จแล้ว'
    },
    play: {
      notFound: 'ไม่พบเพลย์ลิสต์',
      notFoundDesc: 'ไม่มีเพลย์ลิสต์ชื่อ "{name}"!',
      empty: 'เพลย์ลิสต์ว่างเปล่า',
      emptyDesc: 'เพลย์ลิสต์นี้ไม่มีแทร็กให้เล่น!',
      noVoiceChannel: 'ไม่มีช่องเสียง',
      noVoiceChannelDesc: 'เข้าร่วมช่องเสียงเพื่อเล่นเพลย์ลิสต์',
      loadFailed: 'โหลดไม่สำเร็จ',
      loadFailedDesc: 'ไม่สามารถโหลดแทร็กใดๆ จากเพลย์ลิสต์นี้ได้',
      shuffling: 'กำลังสับเปลี่ยนเพลย์ลิสต์',
      playing: 'กำลังเล่นเพลย์ลิสต์',
      playlist: 'เพลย์ลิสต์',
      loaded: 'โหลดแล้ว',
      duration: 'ระยะเวลา',
      channel: 'ช่อง',
      mode: 'โหมด',
      shuffled: 'สับเปลี่ยนแล้ว',
      sequential: 'ตามลำดับ',
      playFailed: 'เล่นไม่สำเร็จ',
      playFailedDesc: 'ไม่สามารถเล่นเพลย์ลิสต์ได้ โปรดลองอีกครั้งในภายหลัง'
    },
    remove: {
      notFound: 'ไม่พบเพลย์ลิสต์',
      notFoundDesc: 'ไม่มีเพlย์ลิสต์ชื่อ "{name}"!',
      invalidIndex: 'ดัชนีไม่ถูกต้อง',
      invalidIndexDesc: 'ดัชนีแทร็กต้องอยู่ระหว่าง 1 ถึง {max}',
      removed: 'ลบแทร็กแล้ว',
      removedTrack: 'ลบแล้ว',
      artist: 'ศิลปิน',
      source: 'แหล่งที่มา',
      remaining: 'ที่เหลือ'
    },
    import: {
      invalidFile: 'ไฟล์ไม่ถูกต้อง',
      invalidFileDesc: 'ไฟล์ต้องมีเพลย์ลิสต์ที่ถูกต้องพร้อมชื่อและอาร์เรย์แทร็ก',
      nameConflict: 'ชื่อขัดแย้งกัน',
      nameConflictDesc: 'มีเพลย์ลิสต์ชื่อ "{name}" อยู่แล้ว!',
      imported: 'นำเข้าเพลย์ลิสต์แล้ว',
      system: 'ระบบเพลย์ลิสต์',
      importFailed: 'นำเข้าไม่สำเร็จ',
      importFailedDesc: 'ไม่สามารถนำเข้าเพลย์ลิสต์ได้: {error}',
      name: 'ชื่อ',
      tracks: 'แทร็ก',
      duration: 'ระยะเวลา'
    }
  },
  // Common words
  common: {
    enabled: 'เปิดใช้งาน',
    disabled: 'ปิดใช้งาน',
    unknown: 'ไม่ทราบ',
    loading: 'กำลังโหลด...',
    page: 'หน้า',
    of: 'จาก',
    close: 'ปิด',
    previous: 'ก่อนหน้า',
    next: 'ถัดไป'
  }
} satisfies typeof English
