import type English from './en.ts'

export default {
  hello: 'হ্যালো',
  ping: {
    description:
      '**গেটওয়ে**: {wsPing}ms\n**শার্ড**: {shardPing}ms\n**প্লেয়ার**: {playerPing}ms',
    descriptionNoPlayer: '**গেটওয়ে**: {wsPing}ms\n**শার্ড**: {shardPing}ms',
    title: 'পিং তথ্য'
  },
  language: {
    set: 'ভাষা {lang} এ সেট করা হয়েছে',
    name: 'ভাষা',
    description: 'বটের ভাষা সেট করুন'
  },
  commands: {
    ping: {
      name: 'পিং',
      description: 'ডিসকর্ডের সাথে পিং দেখান'
    },
    language: {
      name: 'ভাষা',
      description: 'বটের ভাষা সেট করুন'
    },
    play: {
      name: 'বাজান',
      description: 'অনুসন্ধান বা URL দিয়ে গান বাজান।'
    },
    'play-file': {
      name: 'ফাইল-বাজান',
      description: 'আপনার কম্পিউটার থেকে একটি ফাইল বাজান।'
    },
    pause: {
      name: 'বিরতি',
      description: 'সঙ্গীত বিরতি দিন'
    },
    resume: {
      name: 'পুনরায়-শুরু',
      description: 'সঙ্গীত পুনরায় শুরু করুন'
    },
    stop: {
      name: 'বন্ধ',
      description: 'সঙ্গীত বন্ধ করুন'
    },
    skip: {
      name: 'এড়িয়ে-যান',
      description: 'বর্তমান গান এড়িয়ে যান'
    },
    previous: {
      name: 'পূর্ববর্তী',
      description: 'পূর্ববর্তী গান বাজান'
    },
    queue: {
      name: 'তালিকা',
      description: 'নিয়ন্ত্রণ সহ সঙ্গীত তালিকা দেখান'
    },
    nowplaying: {
      name: 'এখন-বাজছে',
      description: 'বর্তমানে বাজানো গান দেখান'
    },
    volume: {
      name: 'আওয়াজ',
      description: 'আওয়াজ সেট করুন'
    },
    clear: {
      name: 'পরিষ্কার',
      description: 'সঙ্গীত তালিকা পরিষ্কার করুন'
    },
    shuffle: {
      name: 'এলোমেলো',
      description: 'তালিকা এলোমেলো করুন'
    },
    loop: {
      name: 'পুনরাবৃত্তি',
      description: 'পুনরাবৃত্তি মোড সেট করুন'
    },
    autoplay: {
      name: 'স্বয়ংক্রিয়-চালানো',
      description: 'স্বয়ংক্রিয় চালানো টগল করুন'
    },
    filters: {
      name: 'ফিল্টার',
      description: 'অডিও ফিল্টার প্রয়োগ করুন'
    },
    jump: {
      name: 'যান',
      description: 'তালিকায় নির্দিষ্ট অবস্থানে যান'
    },
    remove: {
      name: 'সরান',
      description: 'তালিকা থেকে একটি গান সরান'
    },
    grab: {
      name: 'নিন',
      description: 'বর্তমান গান নিন এবং DM এ পাঠান'
    },
    lyrics: {
      name: 'গানের-কথা',
      description: 'বর্তমান গানের কথা পান'
    },
    export: {
      name: 'রপ্তানি',
      description: 'তালিকা রপ্তানি করুন'
    },
    import: {
      name: 'আমদানি',
      description: 'ফাইল থেকে তালিকা আমদানি করুন'
    },
    destroy: {
      name: 'ধ্বংস',
      description: 'সঙ্গীত প্লেয়ার ধ্বংস করুন'
    },
    '247': {
      name: '247',
      description: '24/7 মোড টগল করুন'
    },
    changelog: {
      name: 'পরিবর্তন-তালিকা',
      description: 'বট পরিবর্তন তালিকা দেখান'
    },
    help: {
      name: 'সাহায্য',
      description: 'উপলব্ধ কমান্ড দেখান'
    },
    invite: {
      name: 'আমন্ত্রণ',
      description: 'বট আমন্ত্রণ লিঙ্ক পান'
    },
    search: {
      name: 'খুঁজুন',
      description: 'সঙ্গীত প্ল্যাটফর্মে গান খুঁজুন'
    },
    seek: {
      name: 'অবস্থান-খুঁজুন',
      description: 'গানে নির্দিষ্ট অবস্থানে যান'
    },
    restart: {
      name: 'পুনরায়-আরম্ভ',
      description: 'সঙ্গীত পুনরায় আরম্ভ করুন'
    },
    status: {
      name: 'অবস্থা',
      description: 'বট অবস্থা দেখান'
    },
    tts: {
      name: 'টিটিএস',
      description: 'TTS বার্তা তৈরি করুন এবং পাঠান'
    },
    karaoke: {
      name: 'ক্যারাওকে',
      description: 'সিঙ্ক করা গানের কথা সহ ক্যারাওকে সেশন শুরু করুন'
    },
    roulette: {
      name: 'রুলেট',
      description: 'কিউ থেকে একটি র্যান্ডম ট্র্যাক বাজান'
    }
  },
  // সঙ্গীত প্লেয়ার বার্তা
  player: {
    noVoiceChannel: 'এই কমান্ড ব্যবহার করতে আপনাকে একটি ভয়েস চ্যানেলে থাকতে হবে।',
    noPlayer: 'কোন সঙ্গীত প্লেয়ার পাওয়া যায়নি।',
    noTrack: 'বর্তমানে কোন ট্র্যাক বাজছে না।',
    alreadyPaused: 'গান ইতিমধ্যে বিরতিতে আছে।',
    alreadyResumed: 'গান ইতিমধ্যে বাজছে।',
    paused: 'গান বিরতি দেয়া হয়েছে।',
    resumed: 'গান পুনরায় শুরু করা হয়েছে।',
    stopped: 'সঙ্গীত বন্ধ করা হয়েছে।',
    destroyed: 'সঙ্গীত প্লেয়ার ধ্বংস করা হয়েছে।',
    queueEmpty: 'তালিকা খালি।',
    queueCleared: 'তালিকা পরিষ্কার করা হয়েছে।',
    trackAdded: '**[{title}]({uri})** তালিকায় যোগ করা হয়েছে।',
    playlistAdded:
      '**[`{name}`]({uri})** প্লেলিস্ট ({count} ট্র্যাক) তালিকায় যোগ করা হয়েছে।',
    noTracksFound: 'প্রদত্ত অনুসন্ধানের জন্য কোন ট্র্যাক পাওয়া যায়নি।',
    invalidPosition: 'অবস্থান 1 এবং {max} এর মধ্যে হতে হবে।',
    jumpedTo: 'গান {position} এ চলে গেছে।',
    jumpedToSong: 'গান "{title}" এ চলে গেছে।',
    songNotFound: 'তালিকায় "{title}" খুঁজে পাওয়া যায়নি।',
    alreadyAtPosition: 'ইতিমধ্যে অবস্থান 1 এ রয়েছে।',
    alreadyPlaying: '"{title}" ইতিমধ্যে বাজছে।',
    volumeSet: 'আওয়াজ {volume}% এ সেট করা হয়েছে।',
    invalidVolume: 'আওয়াজ 0 এবং 100 এর মধ্যে হতে হবে।',
    autoplayEnabled: 'স্বয়ংক্রিয় চালানো **চালু** করা হয়েছে।',
    autoplayDisabled: 'স্বয়ংক্রিয় চালানো **বন্ধ** করা হয়েছে।',
    loopEnabled: 'পুনরাবৃত্তি **চালু** করা হয়েছে।',
    loopDisabled: 'পুনরাবৃত্তি **বন্ধ** করা হয়েছে।',
    filterApplied: '**{filter}** ফিল্টার প্রয়োগ করা হয়েছে।',
    filtersCleared: 'সমস্ত ফিল্টার পরিষ্কার করা হয়েছে।',
    filterInvalid: 'অবৈধ ফিল্টার।',
    nowPlaying: 'এখন বাজছে',
    requestedBy: 'অনুরোধকারী',
    duration: 'সময়কাল',
    author: 'লেখক',
    position: 'অবস্থান',
    volume: 'আওয়াজ',
    loop: 'পুনরাবৃত্তি',
    autoplay: 'স্বয়ংক্রিয় চালানো',
    queueSize: 'তালিকার আকার',
    enabled: 'চালু',
    disabled: 'বন্ধ',
    none: 'কিছুই না',
    track: 'ট্র্যাক',
    queue: 'তালিকা',
    restarted: 'সঙ্গীত পুনরায় শুরু করা হয়েছে',
    shuffled: 'তালিকা এলোমেলো করা হয়েছে',
    skipped: 'গান এড়িয়ে যাওয়া হয়েছে',
    previousPlayed: 'পূর্ববর্তী গান বাজানো হচ্ছে',
    previousAdded: 'পূর্ববর্তী গান যোগ করা হয়েছে',
    volumeChanged: 'আওয়াজ পরিবর্তন করা হয়েছে',
    removedSong: 'গান সরানো হয়েছে',
    seeked: 'গানে অবস্থান খোঁজা হয়েছে',
    fileAdded: 'তালিকায় যোগ করা হয়েছে',
    noTrackFound: 'কোন ট্র্যাক পাওয়া যায়নি'
  },
  // 24/7 মোড
  mode247: {
    title: '24/7 মোড',
    enabled: '24/7 মোড চালু করা হয়েছে',
    disabled: '24/7 মোড বন্ধ করা হয়েছে'
  },
  // রপ্তানি/আমদানি
  export: {
    emptyQueue: 'তালিকা খালি',
    success: 'আমদানির জন্য URL সহ তালিকা রপ্তানি করা হয়েছে'
  },
  import: {
    emptyFile: 'ফাইল খালি',
    noValidTracks: 'ফাইলে কোন বৈধ ট্র্যাক পাওয়া যায়নি',
    importing: '{count} ট্র্যাক আমদানি করা হচ্ছে...',
    complete: 'আমদানি সম্পূর্ণ',
    successfullyImported: 'সফলভাবে আমদানি করা হয়েছে: **{count}** ট্র্যাক',
    failedToImport: 'আমদানি করতে ব্যর্থ: **{count}** ট্র্যাক',
    totalQueueSize: 'মোট তালিকার আকার: **{count}** ট্র্যাক'
  },
  // নিন কমান্ড (grab)
  grab: {
    title: 'এখন বাজছে: **{title}**',
    listenHere: '[এখানে শুনুন]({uri})',
    duration: 'সময়কাল',
    author: 'লেখক',
    server: 'সার্ভার',
    footer: 'আপনার বর্তমান সেশন থেকে নেওয়া',
    sentToDm: 'আমি আপনার DM এ ট্র্যাকের বিবরণ পাঠিয়েছি।',
    dmError:
      'আমি আপনাকে DM পাঠাতে পারিনি। অনুগ্রহ করে আপনার গোপনীয়তা সেটিংস পরীক্ষা করুন।',
    noSongPlaying: 'বর্তমানে কোন গান বাজছে না।'
  },
  // সাহায্য কমান্ড (help)
  help: {
    pageTitle: 'পৃষ্ঠা {current} এর {total}',
    previous: 'পূর্ববর্তী',
    next: 'পরবর্তী'
  },
  // গানের কথা কমান্ড (lyrics)
  lyrics: {
    title: 'গানের কথা',
    error: 'গানের কথার ত্রুটি',
    noLyricsFound: 'কোন গানের কথা পাওয়া যায়নি',
    serviceUnavailable: 'গানের কথার সেবা উপলব্ধ নেই',
    syncedLyrics: 'সিঙ্ক করা গানের কথা',
    textLyrics: 'টেক্সট গানের কথা',
    artist: 'শিল্পী',
    noActivePlayer: 'কোন সক্রিয় প্লেয়ার পাওয়া যায়নি'
  },
  // যান কমান্ড (jump)
  jump: {
    noSongsInQueue: 'তালিকায় কোন গান নেই',
    specifyPositionOrName: 'অনুগ্রহ করে অবস্থান নম্বর বা গানের নাম নির্দিষ্ট করুন'
  },
  // ফিল্টারের নাম
  filters: {
    '8d': '8D',
    equalizer: 'ইকুয়ালাইজার',
    karaoke: 'কারাওকে',
    timescale: 'টাইম স্কেল',
    tremolo: 'ট্রেমোলো',
    vibrato: 'ভাইব্রেটো',
    rotation: 'ঘূর্ণন',
    distortion: 'বিকৃতি',
    channelMix: 'চ্যানেল মিক্স',
    lowPass: 'লো পাস',
    bassboost: 'বাস বুস্ট',
    slowmode: 'স্লো মোড',
    nightcore: 'নাইটকোর',
    vaporwave: 'ভেপারওয়েভ',
    clear: 'পরিষ্কার',
    invalidFilter: 'অবৈধ ফিল্টার নির্বাচিত।'
  },
  // খুঁজুন কমান্ড (search)
  search: {
    noVoiceChannel: '🎵 প্রথমে একটি ভয়েস চ্যানেলে যোগ দিন!',
    alreadyConnected: '🎵 আমি ইতিমধ্যে এই চ্যানেলে সঙ্গীত বাজাচ্ছি',
    noResults: '🔍 কোন ফলাফল পাওয়া যায়নি। অন্য প্ল্যাটফর্ম চেষ্টা করুন!',
    trackAdded: '✅ তালিকায় যোগ করা হয়েছে',
    searchError: '❌ অনুসন্ধান ব্যর্থ। অনুগ্রহ করে আবার চেষ্টা করুন।',
    genericError: '❌ একটি ত্রুটি ঘটেছে। অনুগ্রহ করে আবার চেষ্টা করুন।',
    invalidQuery: '❌ অনুসন্ধান খুব ছোট বা অবৈধ অক্ষর',
    multiSearchStarted: '🔍 একাধিক প্ল্যাটফর্মে অনুসন্ধান করা হচ্ছে...',
    failedToJoinVoice: '❌ ভয়েস চ্যানেলে যোগ দিতে ব্যর্থ।'
  },
  // অবস্থা কমান্ড
  status: {
    title: 'বট অবস্থা',
    systemUptime: 'সিস্টেম আপটাইম',
    systemCpuModel: 'সিস্টেম CPU মডেল',
    systemCpuLoad: 'সিস্টেম CPU লোড',
    lavalinkUptime: 'Lavalink আপটাইম',
    lavalinkVersion: 'Lavalink সংস্করণ',
    systemMemory: 'সিস্টেম মেমরি',
    systemMemBar: 'সিস্টেম মেম বার',
    lavalinkMemory: 'Lavalink মেমরি',
    lavalinkMemBar: 'Lavalink মেম বার',
    lavalinkCpuLoad: 'Lavalink CPU লোড',
    lavalinkPlayers: 'Lavalink প্লেয়ার',
    lavalinkNodes: 'Lavalink নোড',
    ping: 'পিং',
    processMemory: 'প্রসেস মেমরি'
  },
  // TTS কমান্ড
  tts: {
    generated: 'TTS বার্তা তৈরি করা হয়েছে'
  },
  // karaoke কমান্ড
  karaoke: {
    error: 'ক্যারাওকে ত্রুটি',
    sessionEnded: 'ক্যারাওকে সেশন শেষ হয়েছে',
    noActivePlayer: 'কোন সক্রিয় প্লেয়ার পাওয়া যায়নি',
    sessionAlreadyActive:
      'এই সার্ভারে ইতিমধ্যে একটি সক্রিয় ক্যারাওকে সেশন আছে। এটি শেষ হওয়া পর্যন্ত অপেক্ষা করুন বা বর্তমান সেশন বন্ধ করতে কমান্ডটি আবার ব্যবহার করুন।',
    noLyricsAvailable: 'কোন সিঙ্ক করা গানের কথা উপলব্ধ নেই। একটি ভিন্ন গান চেষ্টা করুন।',
    playing: 'চলছে',
    paused: 'বিরতি দেওয়া হয়েছে',
    noLyrics: 'কোন গানের কথা উপলব্ধ নেই'
  },
  // roulette কমান্ড
  roulette: {
    playingRandom: '🎲 র্যান্ডম ট্র্যাক চালানো হচ্ছে: **{title}** - **{author}**',
    error: 'র্যান্ডম ট্র্যাক চালানোর সময় একটি ত্রুটি ঘটেছে!'
  },
  // আওয়াজ কমান্ড
  volume: {
    rangeError: '`0 - 200` এর মধ্যে একটি সংখ্যা ব্যবহার করুন।'
  },
  // আমন্ত্রণ কমান্ড (invite)
  invite: {
    title: 'কোন পেওয়াল নেই। কোন ভোটিং নেই। শুধু সঙ্গীত।',
    description: `এমন বট নিয়ে ক্লান্ত যা পেওয়াল বা ভোটের প্রয়োজনীয়তার পেছনে বৈশিষ্ট্য লক করে? Kenium ভিন্ন:

- **চিরকাল বিনামূল্যে**: সমস্ত বৈশিষ্ট্য, সমস্ত প্ল্যাটফর্ম (YouTube, Spotify, SoundCloud, Vimeo) — কোন ফি নেই, কোন বিজ্ঞাপন নেই।
- **24/7 সঙ্গীত**: উচ্চ মানের অডিও, দ্রুত প্রতিক্রিয়া, শূন্য ডাউনটাইম।
- **ব্যবহার সহজ**: শুধু /বাজান টাইপ করুন — তাৎক্ষণিক তালিকা, কোন জটিল সেটআপ নেই।
- **ওপেন সোর্স**: স্বচ্ছ কোড, সর্বদা পর্যালোচনার জন্য উপলব্ধ।
- **সীমাহীন বৈশিষ্ট্য**: প্লেলিস্ট, ফিল্টার, বাস বুস্ট — সবকিছু বিনামূল্যে।
- **Aqualink দ্বারা চালিত**: দ্রুত, স্থিতিশীল এবং নির্ভরযোগ্য lavalink হ্যান্ডলার

কোন নগদ দখল নেই। কোন ভোটিং নেই। শুধু প্লে চাপুন এবং উপভোগ করুন।

**আরো চান?** নিচের বোতামগুলিতে ক্লিক করুন!
আর চান না? [\`আমাকে আমন্ত্রণ জানাতে এখানে ক্লিক করুন\`](https://discord.com/oauth2/authorize?client_id=1202232935311495209)`,
    supportServer: 'সহায়তা সার্ভার',
    github: 'GitHub',
    website: 'ওয়েবসাইট'
  },
  // তালিকা কমান্ড (queue)
  queue: {
    title: 'তালিকা',
    page: 'পৃষ্ঠা {current} এর {total}',
    nowPlaying: '🎵 এখন বাজছে',
    comingUp: '📋 আসছে',
    queueEmpty: 'তালিকা খালি',
    noTracksInQueue:
      '🔭 **তালিকায় কোন ট্র্যাক নেই**\n\nকিছু সঙ্গীত যোগ করতে `/বাজান` ব্যবহার করুন!',
    tip: '*টিপ: আপনি অনুসন্ধান করতে পারেন বা URL ব্যবহার করতে পারেন*',
    pause: 'বিরতি',
    resume: 'পুনরায় শুরু',
    shuffleOn: 'এলোমেলো: চালু',
    shuffleOff: 'এলোমেলো: বন্ধ',
    loopOn: 'পুনরাবৃত্তি: চালু',
    loopOff: 'পুনরাবৃত্তি: বন্ধ',
    refresh: 'রিফ্রেশ',
    clear: 'পরিষ্কার',
    noActivePlayerFound: '❌ কোন সক্রিয় প্লেয়ার পাওয়া যায়নি',
    errorDisplayingQueue: '❌ তালিকা প্রদর্শনে একটি ত্রুটি ঘটেছে'
  },
  // ত্রুটির বার্তা
  errors: {
    general: 'একটি ত্রুটি ঘটেছে',
    notFound: 'পাওয়া যায়নি',
    noPermission: 'এই কমান্ড ব্যবহার করার অনুমতি আপনার নেই',
    invalidLanguage: 'অবৈধ ভাষা নির্বাচিত',
    databaseError: 'সেটিংস সংরক্ষণ করতে ব্যর্থ',
    commandError: 'কমান্ড সম্পাদন করতে একটি ত্রুটি ঘটেছে',
    unsupportedContentType: 'অসমর্থিত কন্টেন্ট টাইপ।'
  },
  // সফলতার বার্তা
  success: {
    languageSet: 'ভাষা সফলভাবে **{lang}** এ পরিবর্তিত হয়েছে!',
    settingsSaved: 'সেটিংস সফলভাবে সংরক্ষিত হয়েছে',
    settingAlradySet: 'এই সেটিং ইতিমধ্যে সেট করা হয়েছে'
  },
  // প্লেলিস্ট সিস্টেম
  playlist: {
    create: {
      invalidName: 'অবৈধ নাম',
      nameTooLong: 'প্লেলিস্টের নাম {maxLength} অক্ষরের কম হতে হবে।',
      limitReached: 'প্লেলিস্ট সীমা পৌঁছেছে',
      maxPlaylists: 'আপনি সর্বোচ্চ {max} প্লেলিস্ট রাখতে পারেন।',
      exists: 'প্লেলিস্ট বিদ্যমান',
      alreadyExists: '"{name}" নামের একটি প্লেলিস্ট ইতিমধ্যে আছে!',
      created: 'প্লেলিস্ট তৈরি হয়েছে',
      name: 'নাম',
      status: 'অবস্থা',
      readyForTracks: 'ট্র্যাকের জন্য প্রস্তুত!',
      addTracks: 'ট্র্যাক যোগ করুন',
      viewPlaylist: 'প্লেলিস্ট দেখুন'
    },
    add: {
      notFound: 'প্লেলিস্ট পাওয়া যায়নি',
      notFoundDesc: '"{name}" নামের কোন প্লেলিস্ট নেই!',
      full: 'প্লেলিস্ট পূর্ণ',
      fullDesc: 'এই প্লেলিস্ট {max}-ট্র্যাক সীমায় পৌঁছেছে!',
      nothingAdded: 'কিছুই যোগ করা হয়নি',
      nothingAddedDesc:
        'কোন নতুন ট্র্যাক যোগ করা হয়নি। সেগুলি ইতিমধ্যে প্লেলিস্টে থাকতে পারে বা কোন মিল পাওয়া যায়নি।',
      tracksAdded: 'ট্র্যাক যোগ করা হয়েছে',
      trackAdded: 'ট্র্যাক যোগ করা হয়েছে',
      tracks: 'ট্র্যাক',
      track: 'ট্র্যাক',
      artist: 'শিল্পী',
      source: 'সোর্স',
      added: 'যোগ করা হয়েছে',
      total: 'মোট',
      duration: 'সময়কাল',
      addMore: 'আরো যোগ করুন',
      playNow: 'এখনই বাজান',
      viewAll: 'সব দেখুন',
      addFailed: 'যোগ করতে ব্যর্থ',
      addFailedDesc: 'ট্র্যাক যোগ করতে পারেনি: {error}'
    },
    view: {
      noPlaylists: 'কোন প্লেলিস্ট নেই',
      noPlaylistsDesc: 'আপনি এখনো কোন প্লেলিস্ট তৈরি করেননি!',
      gettingStarted: 'শুরু করা',
      gettingStartedDesc:
        'আপনার প্রথম প্লেলিস্ট তৈরি করতে `/playlist create` ব্যবহার করুন!',
      createPlaylist: 'প্লেলিস্ট তৈরি করুন',
      yourPlaylists: 'আপনার প্লেলিস্ট',
      yourPlaylistsDesc: 'আপনার **{count}** প্লেলিস্ট{plural} আছে',
      choosePlaylist: 'দেখার জন্য একটি প্লেলিস্ট বেছে নিন...',
      notFound: 'প্লেলিস্ট পাওয়া যায়নি',
      notFoundDesc: '"{name}" নামের কোন প্লেলিস্ট নেই!',
      playlistTitle: 'প্লেলিস্ট: {name}',
      empty: 'এই প্লেলিস্ট খালি',
      description: 'বিবরণ',
      noDescription: 'কোন বিবরণ নেই',
      info: 'তথ্য',
      tracks: 'ট্র্যাক',
      plays: 'চালানো',
      tracksPage: 'ট্র্যাক (পৃষ্ঠা {current}/{total})',
      play: 'বাজান',
      shuffle: 'এলোমেলো',
      manage: 'পরিচালনা',
      previous: 'পূর্ববর্তী',
      next: 'পরবর্তী'
    },
    delete: {
      notFound: 'প্লেলিস্ট পাওয়া যায়নি',
      notFoundDesc: '"{name}" নামের কোন প্লেলিস্ট নেই!',
      deleted: 'প্লেলিস্ট মুছে ফেলা হয়েছে',
      deletedDesc: 'প্লেলিস্ট "{name}" সফলভাবে মুছে ফেলা হয়েছে'
    },
    play: {
      notFound: 'প্লেলিস্ট পাওয়া যায়নি',
      notFoundDesc: '"{name}" নামের কোন প্লেলিস্ট নেই!',
      empty: 'খালি প্লেলিস্ট',
      emptyDesc: 'এই প্লেলিস্টে বাজানোর জন্য কোন ট্র্যাক নেই!',
      noVoiceChannel: 'কোন ভয়েস চ্যানেল নেই',
      noVoiceChannelDesc: 'প্লেলিস্ট বাজাতে একটি ভয়েস চ্যানেলে যোগ দিন',
      loadFailed: 'লোড ব্যর্থ',
      loadFailedDesc: 'এই প্লেলিস্ট থেকে কোন ট্র্যাক লোড করতে পারেনি',
      shuffling: 'প্লেলিস্ট এলোমেলো করা হচ্ছে',
      playing: 'প্লেলিস্ট বাজানো হচ্ছে',
      playlist: 'প্লেলিস্ট',
      loaded: 'লোড করা হয়েছে',
      duration: 'সময়কাল',
      channel: 'চ্যানেল',
      mode: 'মোড',
      shuffled: 'এলোমেলো',
      sequential: 'ক্রমিক',
      playFailed: 'বাজানো ব্যর্থ',
      playFailedDesc: 'প্লেলিস্ট বাজাতে পারেনি। অনুগ্রহ করে পরে আবার চেষ্টা করুন।'
    },
    remove: {
      notFound: 'প্লেলিস্ট পাওয়া যায়নি',
      notFoundDesc: '"{name}" নামের কোন প্লেলিস্ট নেই!',
      invalidIndex: 'অবৈধ ইনডেক্স',
      invalidIndexDesc: 'ট্র্যাক ইনডেক্স 1 এবং {max} এর মধ্যে হতে হবে',
      removed: 'ট্র্যাক সরানো হয়েছে',
      removedTrack: 'সরানো হয়েছে',
      artist: 'শিল্পী',
      source: 'সোর্স',
      remaining: 'অবশিষ্ট'
    },
    import: {
      invalidFile: 'অবৈধ ফাইল',
      invalidFileDesc: 'ফাইলে নাম এবং ট্র্যাক অ্যারে সহ একটি বৈধ প্লেলিস্ট থাকতে হবে।',
      nameConflict: 'নামের দ্বন্দ্ব',
      nameConflictDesc: '"{name}" নামের একটি প্লেলিস্ট ইতিমধ্যে আছে!',
      imported: 'প্লেলিস্ট আমদানি করা হয়েছে',
      system: 'প্লেলিস্ট সিস্টেম',
      importFailed: 'আমদানি ব্যর্থ',
      importFailedDesc: 'প্লেলিস্ট আমদানি করতে পারেনি: {error}',
      name: 'নাম',
      tracks: 'ট্র্যাক',
      duration: 'সময়কাল'
    }
  },
  // সাধারণ শব্দ
  common: {
    enabled: 'চালু',
    disabled: 'বন্ধ',
    unknown: 'অজানা',
    loading: 'লোড হচ্ছে...',
    page: 'পৃষ্ঠা',
    of: 'এর',
    close: 'বন্ধ',
    previous: 'পূর্ববর্তী',
    next: 'পরবর্তী'
  }
} satisfies typeof English
