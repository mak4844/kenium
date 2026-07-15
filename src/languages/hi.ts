import type English from './en.ts'

export default {
  hello: 'नमस्ते',
  ping: {
    description:
      '**गेटवे**: {wsPing}ms\n**शार्ड**: {shardPing}ms\n**प्लेयर**: {playerPing}ms',
    descriptionNoPlayer: '**गेटवे**: {wsPing}ms\n**शार्ड**: {shardPing}ms',
    title: 'पिंग जानकारी'
  },
  language: {
    set: 'भाषा {lang} पर सेट की गई',
    name: 'भाषा',
    description: 'बॉट की भाषा सेट करें'
  },
  commands: {
    ping: {
      name: 'पिंग',
      description: 'डिस्कॉर्ड के साथ पिंग दिखाएं'
    },
    language: {
      name: 'भाषा',
      description: 'बॉट की भाषा सेट करें'
    },
    play: {
      name: 'बजाएं',
      description: 'खोज या URL द्वारा गाना बजाएं।'
    },
    'play-file': {
      name: 'फाइल-बजाएं',
      description: 'अपने कंप्यूटर से फाइल बजाएं।'
    },
    pause: {
      name: 'रोकें',
      description: 'संगीत रोकें'
    },
    resume: {
      name: 'जारी-रखें',
      description: 'संगीत जारी रखें'
    },
    stop: {
      name: 'बंद-करें',
      description: 'संगीत बंद करें'
    },
    skip: {
      name: 'छोड़ें',
      description: 'वर्तमान गाना छोड़ें'
    },
    previous: {
      name: 'पिछला',
      description: 'पिछला गाना बजाएं'
    },
    queue: {
      name: 'कतार',
      description: 'कंट्रोल के साथ संगीत कतार दिखाएं'
    },
    nowplaying: {
      name: 'अभी-बज-रहा',
      description: 'वर्तमान में बजने वाला गाना दिखाएं'
    },
    volume: {
      name: 'आवाज़',
      description: 'आवाज़ सेट करें'
    },
    clear: {
      name: 'साफ-करें',
      description: 'संगीत कतार साफ करें'
    },
    shuffle: {
      name: 'फेंटें',
      description: 'कतार को फेंटें'
    },
    loop: {
      name: 'लूप',
      description: 'लूप मोड सेट करें'
    },
    autoplay: {
      name: 'ऑटोप्ले',
      description: 'ऑटोप्ले टॉगल करें'
    },
    filters: {
      name: 'फिल्टर',
      description: 'ऑडियो फिल्टर लागू करें'
    },
    jump: {
      name: 'जाएं',
      description: 'कतार में विशिष्ट स्थान पर जाएं'
    },
    remove: {
      name: 'हटाएं',
      description: 'कतार से गाना हटाएं'
    },
    grab: {
      name: 'लें',
      description: 'वर्तमान गाना लें और DM में भेजें'
    },
    lyrics: {
      name: 'बोल',
      description: 'वर्तमान गाने के बोल प्राप्त करें'
    },
    export: {
      name: 'निर्यात',
      description: 'कतार निर्यात करें'
    },
    import: {
      name: 'आयात',
      description: 'फाइल से कतार आयात करें'
    },
    destroy: {
      name: 'नष्ट-करें',
      description: 'संगीत प्लेयर नष्ट करें'
    },
    '247': {
      name: '247',
      description: '24/7 मोड टॉगल करें'
    },
    changelog: {
      name: 'परिवर्तन-लॉग',
      description: 'बॉट परिवर्तन लॉग दिखाएं'
    },
    help: {
      name: 'सहायता',
      description: 'उपलब्ध कमांड दिखाएं'
    },
    invite: {
      name: 'आमंत्रित-करें',
      description: 'बॉट आमंत्रण लिंक प्राप्त करें'
    },
    search: {
      name: 'खोजें',
      description: 'संगीत प्लेटफॉर्म पर गाना खोजें'
    },
    seek: {
      name: 'स्थिति',
      description: 'गाने में विशिष्ट स्थिति पर जाएं'
    },
    restart: {
      name: 'पुनः-आरंभ',
      description: 'संगीत पुनः आरंभ करें'
    },
    status: {
      name: 'स्थिति',
      description: 'बॉट स्थिति दिखाएं'
    },
    tts: {
      name: 'टीटीएस',
      description: 'TTS संदेश जेनरेट करें और भेजें'
    },
    karaoke: {
      name: 'कराओके',
      description: 'सिंक किए गए बोल के साथ कराओके सत्र शुरू करें'
    },
    roulette: {
      name: 'रूले',
      description: 'कतार से एक यादृच्छिक ट्रैक चलाएं'
    }
  },
  // संगीत प्लेयर संदेश
  player: {
    noVoiceChannel: 'इस कमांड का उपयोग करने के लिए आपको वॉयस चैनल में होना चाहिए।',
    noPlayer: 'कोई संगीत प्लेयर नहीं मिला।',
    noTrack: 'वर्तमान में कोई ट्रैक नहीं बज रहा।',
    alreadyPaused: 'गाना पहले से ही रुका हुआ है।',
    alreadyResumed: 'गाना पहले से ही बज रहा है।',
    paused: 'गाना रोक दिया।',
    resumed: 'गाना जारी कर दिया।',
    stopped: 'संगीत बंद कर दिया।',
    destroyed: 'संगीत प्लेयर नष्ट कर दिया।',
    queueEmpty: 'कतार खाली है।',
    queueCleared: 'कतार साफ कर दी।',
    trackAdded: '**[{title}]({uri})** को कतार में जोड़ा।',
    playlistAdded: '**[`{name}`]({uri})** प्लेलिस्ट ({count} ट्रैक) को कतार में जोड़ा।',
    noTracksFound: 'दिए गए प्रश्न के लिए कोई ट्रैक नहीं मिला।',
    invalidPosition: 'स्थिति 1 और {max} के बीच होनी चाहिए।',
    jumpedTo: 'गाना {position} पर गया।',
    jumpedToSong: 'गाना "{title}" पर गया।',
    songNotFound: 'कतार में "{title}" नहीं मिल सका।',
    alreadyAtPosition: 'पहले से ही स्थिति 1 पर है।',
    alreadyPlaying: '"{title}" पहले से ही बज रहा है।',
    volumeSet: 'आवाज़ {volume}% पर सेट की गई।',
    invalidVolume: 'आवाज़ 0 और 100 के बीच होनी चाहिए।',
    autoplayEnabled: 'ऑटोप्ले **सक्रिय** कर दिया गया।',
    autoplayDisabled: 'ऑटोप्ले **निष्क्रिय** कर दिया गया।',
    loopEnabled: 'लूप **सक्रिय** कर दिया गया।',
    loopDisabled: 'लूप **निष्क्रिय** कर दिया गया।',
    filterApplied: '**{filter}** फिल्टर लागू किया।',
    filtersCleared: 'सभी फिल्टर साफ कर दिए।',
    filterInvalid: 'अमान्य फिल्टर।',
    nowPlaying: 'अभी बज रहा',
    requestedBy: 'द्वारा मांगा गया',
    duration: 'अवधि',
    author: 'लेखक',
    position: 'स्थिति',
    volume: 'आवाज़',
    loop: 'लूप',
    autoplay: 'ऑटोप्ले',
    queueSize: 'कतार का आकार',
    enabled: 'सक्रिय',
    disabled: 'निष्क्रिय',
    none: 'कोई नहीं',
    track: 'ट्रैक',
    queue: 'कतार',
    restarted: 'संगीत पुनः आरंभ किया',
    shuffled: 'कतार को फेंटा',
    skipped: 'गाना छोड़ा',
    previousPlayed: 'पिछला गाना बजाया',
    previousAdded: 'पिछला गाना जोड़ा',
    volumeChanged: 'आवाज़ बदली',
    removedSong: 'गाना हटाया',
    seeked: 'गाने में स्थिति बदली',
    fileAdded: 'कतार में जोड़ा',
    noTrackFound: 'कोई ट्रैक नहीं मिला'
  },
  // 24/7 मोड
  mode247: {
    title: '24/7 मोड',
    enabled: '24/7 मोड सक्रिय कर दिया गया',
    disabled: '24/7 मोड निष्क्रिय कर दिया गया'
  },
  // निर्यात/आयात
  export: {
    emptyQueue: 'कतार खाली है',
    success: 'आयात के लिए URL के साथ कतार निर्यात की गई'
  },
  import: {
    emptyFile: 'फाइल खाली है',
    noValidTracks: 'फाइल में कोई मान्य ट्रैक नहीं मिला',
    importing: '{count} ट्रैक आयात कर रहे हैं...',
    complete: 'आयात पूरा',
    successfullyImported: 'सफलतापूर्वक आयात किया: **{count}** ट्रैक',
    failedToImport: 'आयात करने में विफल: **{count}** ट्रैक',
    totalQueueSize: 'कुल कतार का आकार: **{count}** ट्रैक'
  },
  // लें कमांड (grab)
  grab: {
    title: 'अभी बज रहा: **{title}**',
    listenHere: '[यहाँ सुनें]({uri})',
    duration: 'अवधि',
    author: 'लेखक',
    server: 'सर्वर',
    footer: 'आपके वर्तमान सत्र से लिया गया',
    sentToDm: 'मैंने आपको DM में ट्रैक विवरण भेजा है।',
    dmError: 'मैं आपको DM नहीं भेज सका। कृपया अपनी गोपनीयता सेटिंग्स जांचें।',
    noSongPlaying: 'वर्तमान में कोई गाना नहीं बज रहा।'
  },
  // सहायता कमांड (help)
  help: {
    pageTitle: 'पेज {current} में से {total}',
    previous: 'पिछला',
    next: 'अगला'
  },
  // बोल कमांड (lyrics)
  lyrics: {
    title: 'बोल',
    error: 'बोल त्रुटि',
    noLyricsFound: 'कोई बोल नहीं मिला',
    serviceUnavailable: 'बोल सेवा उपलब्ध नहीं',
    syncedLyrics: 'सिंक किए गए बोल',
    textLyrics: 'टेक्स्ट बोल',
    artist: 'कलाकार',
    noActivePlayer: 'कोई सक्रिय प्लेयर नहीं मिला'
  },
  // जाएं कमांड (jump)
  jump: {
    noSongsInQueue: 'कतार में कोई गाना नहीं',
    specifyPositionOrName: 'कृपया या तो स्थिति संख्या या गाने का नाम निर्दिष्ट करें'
  },
  // फिल्टर नाम
  filters: {
    '8d': '8D',
    equalizer: 'इक्वलाइज़र',
    karaoke: 'कराओके',
    timescale: 'टाइम स्केल',
    tremolo: 'ट्रेमोलो',
    vibrato: 'वाइब्रेटो',
    rotation: 'घूर्णन',
    distortion: 'विकृति',
    channelMix: 'चैनल मिक्स',
    lowPass: 'लो पास',
    bassboost: 'बास बूस्ट',
    slowmode: 'स्लो मोड',
    nightcore: 'नाइटकोर',
    vaporwave: 'वेपरवेव',
    clear: 'साफ करें',
    invalidFilter: 'अमान्य फिल्टर चुना गया।'
  },
  // खोजें कमांड (search)
  search: {
    noVoiceChannel: '🎵 पहले वॉयस चैनल में शामिल हों!',
    alreadyConnected: '🎵 मैं पहले से ही इस चैनल में संगीत बजा रहा हूँ',
    noResults: '🔍 कोई परिणाम नहीं मिला। दूसरे प्लेटफॉर्म की कोशिश करें!',
    trackAdded: '✅ कतार में जोड़ा',
    searchError: '❌ खोज विफल। कृपया पुनः प्रयास करें।',
    genericError: '❌ एक त्रुटि हुई। कृपया पुनः प्रयास करें।',
    invalidQuery: '❌ प्रश्न बहुत छोटा या अमान्य अक्षर',
    multiSearchStarted: '🔍 कई प्लेटफॉर्म पर खोज रहे हैं...',
    failedToJoinVoice: '❌ वॉयस चैनल में शामिल होने में विफल।'
  },
  // स्थिति कमांड
  status: {
    title: 'बॉट स्थिति',
    systemUptime: 'सिस्टम अपटाइम',
    systemCpuModel: 'सिस्टम CPU मॉडल',
    systemCpuLoad: 'सिस्टम CPU लोड',
    lavalinkUptime: 'Lavalink अपटाइम',
    lavalinkVersion: 'Lavalink संस्करण',
    systemMemory: 'सिस्टम मेमोरी',
    systemMemBar: 'सिस्टम मेम बार',
    lavalinkMemory: 'Lavalink मेमोरी',
    lavalinkMemBar: 'Lavalink मेम बार',
    lavalinkCpuLoad: 'Lavalink CPU लोड',
    lavalinkPlayers: 'Lavalink प्लेयर',
    lavalinkNodes: 'Lavalink नोड्स',
    ping: 'पिंग',
    processMemory: 'प्रोसेस मेमोरी'
  },
  // TTS कमांड
  tts: {
    generated: 'TTS संदेश जेनरेट किया'
  },
  // karaoke कमांड
  karaoke: {
    error: 'कराओके त्रुटि',
    sessionEnded: 'कराओके सत्र समाप्त हुआ',
    noActivePlayer: 'कोई सक्रिय प्लेयर नहीं मिला',
    sessionAlreadyActive:
      'इस सर्वर पर पहले से ही एक सक्रिय कराओके सत्र है। इसे समाप्त होने तक प्रतीक्षा करें या वर्तमान सत्र को रोकने के लिए कमांड को फिर से उपयोग करें।',
    noLyricsAvailable: 'कोई सिंक किए गए बोल उपलब्ध नहीं हैं। एक अलग गाना आज़माएं।',
    playing: 'बजा रहा है',
    paused: 'रोक दिया गया',
    noLyrics: 'कोई बोल उपलब्ध नहीं हैं'
  },
  // roulette कमांड
  roulette: {
    playingRandom: '🎲 यादृच्छिक ट्रैक बजा रहा है: **{title}** - **{author}**',
    error: 'यादृच्छिक ट्रैक बजाते समय एक त्रुटि हुई!'
  },
  // आवाज़ कमांड
  volume: {
    rangeError: '`0 - 200` के बीच संख्या का उपयोग करें।'
  },
  // आमंत्रित करें कमांड (invite)
  invite: {
    title: 'कोई Paywall नहीं। कोई वोटिंग नहीं। सिर्फ संगीत।',
    description: `उन बॉट्स से थक गए हैं जो paywall या वोट आवश्यकताओं के पीछे सुविधाएं छुपाते हैं? Kenium अलग है:

- **हमेशा के लिए मुफ्त**: सभी सुविधाएं, सभी प्लेटफॉर्म (YouTube, Spotify, SoundCloud, Vimeo) — कोई फीस नहीं, कोई विज्ञापन नहीं।
- **24/7 संगीत**: उच्च गुणवत्ता वाला ऑडियो, तेज़ प्रतिक्रिया, शून्य डाउनटाइम।
- **उपयोग में आसान**: बस /बजाएं टाइप करें — तुरंत कतार, कोई जटिल सेटअप नहीं।
- **ओपन सोर्स**: पारदर्शी कोड, हमेशा समीक्षा के लिए उपलब्ध।
- **असीमित सुविधाएं**: प्लेलिस्ट, फिल्टर, बास बूस्ट — सब मुफ्त।
- **Aqualink द्वारा संचालित**: तेज़, स्थिर और विश्वसनीय lavalink हैंडलर

कोई धन लूट नहीं। कोई वोटिंग नहीं। बस प्ले दबाएं और आनंद लें।

**और चाहिए?** नीचे बटन पर क्लिक करें!
और नहीं चाहिए? [\`मुझे आमंत्रित करने के लिए यहाँ क्लिक करें\`](https://discord.com/oauth2/authorize?client_id=1202232935311495209)`,
    supportServer: 'सपोर्ट सर्वर',
    github: 'GitHub',
    website: 'वेबसाइट'
  },
  // कतार कमांड (queue)
  queue: {
    title: 'कतार',
    page: 'पेज {current} में से {total}',
    nowPlaying: '🎵 अभी बज रहा',
    comingUp: '📋 आगे आने वाले',
    queueEmpty: 'कतार खाली',
    noTracksInQueue:
      '🔭 **कतार में कोई ट्रैक नहीं**\n\nकुछ संगीत जोड़ने के लिए `/बजाएं` का उपयोग करें!',
    tip: '*टिप: आप खोज सकते हैं या URL का उपयोग कर सकते हैं*',
    pause: 'रोकें',
    resume: 'जारी रखें',
    shuffleOn: 'फेंटना: चालू',
    shuffleOff: 'फेंटना: बंद',
    loopOn: 'लूप: चालू',
    loopOff: 'लूप: बंद',
    refresh: 'रीफ्रेश',
    clear: 'साफ करें',
    noActivePlayerFound: '❌ कोई सक्रिय प्लेयर नहीं मिला',
    errorDisplayingQueue: '❌ कतार दिखाने में त्रुटि हुई'
  },
  // त्रुटि संदेश
  errors: {
    general: 'एक त्रुटि हुई',
    notFound: 'नहीं मिला',
    noPermission: 'आपको इस कमांड का उपयोग करने की अनुमति नहीं है',
    invalidLanguage: 'अमान्य भाषा चुनी गई',
    databaseError: 'सेटिंग्स सेव करने में विफल',
    commandError: 'कमांड निष्पादित करते समय त्रुटि हुई',
    unsupportedContentType: 'असमर्थित सामग्री प्रकार।'
  },
  // सफलता संदेश
  success: {
    languageSet: 'भाषा सफलतापूर्वक **{lang}** में बदली गई!',
    settingsSaved: 'सेटिंग्स सफलतापूर्वक सेव की गईं',
    settingAlradySet: 'यह सेटिंग पहले से ही सेट की गई है'
  },
  // प्लेलिस्ट सिस्टम
  playlist: {
    create: {
      invalidName: 'अमान्य नाम',
      nameTooLong: 'प्लेलिस्ट नाम {maxLength} अक्षरों से कम होना चाहिए।',
      limitReached: 'प्लेलिस्ट सीमा पहुंच गई',
      maxPlaylists: 'आप केवल अधिकतम {max} प्लेलिस्ट रख सकते हैं।',
      exists: 'प्लेलिस्ट मौजूद है',
      alreadyExists: '"{name}" नाम की प्लेलिस्ट पहले से मौजूद है!',
      created: 'प्लेलिस्ट बनाई गई',
      name: 'नाम',
      status: 'स्थिति',
      readyForTracks: 'ट्रैक के लिए तैयार!',
      addTracks: 'ट्रैक जोड़ें',
      viewPlaylist: 'प्लेलिस्ट देखें'
    },
    add: {
      notFound: 'प्लेलिस्ट नहीं मिली',
      notFoundDesc: '"{name}" नाम की कोई प्लेलिस्ट मौजूद नहीं है!',
      full: 'प्लेलिस्ट भरी हुई',
      fullDesc: 'इस प्लेलिस्ट ने {max}-ट्रैक की सीमा पहुंचा ली है!',
      nothingAdded: 'कुछ भी नहीं जोड़ा गया',
      nothingAddedDesc:
        'कोई नए ट्रैक नहीं जोड़े गए। वे पहले से ही प्लेलिस्ट में मौजूद हो सकते हैं या कोई मैच नहीं मिला।',
      tracksAdded: 'ट्रैक जोड़े गए',
      trackAdded: 'ट्रैक जोड़ा गया',
      tracks: 'ट्रैक',
      track: 'ट्रैक',
      artist: 'कलाकार',
      source: 'स्रोत',
      added: 'जोड़ा गया',
      total: 'कुल',
      duration: 'अवधि',
      addMore: 'और जोड़ें',
      playNow: 'अभी बजाएं',
      viewAll: 'सभी देखें',
      addFailed: 'जोड़ना विफल',
      addFailedDesc: 'ट्रैक नहीं जोड़ सके: {error}'
    },
    view: {
      noPlaylists: 'कोई प्लेलिस्ट नहीं',
      noPlaylistsDesc: 'आपने अभी तक कोई प्लेलिस्ट नहीं बनाई है!',
      gettingStarted: 'शुरुआत',
      gettingStartedDesc:
        'अपनी पहली प्लेलिस्ट बनाने के लिए `/playlist create` का उपयोग करें!',
      createPlaylist: 'प्लेलिस्ट बनाएं',
      yourPlaylists: 'आपकी प्लेलिस्ट',
      yourPlaylistsDesc: 'आपके पास **{count}** प्लेलिस्ट{plural} है',
      choosePlaylist: 'देखने के लिए प्लेलिस्ट चुनें...',
      notFound: 'प्लेलिस्ट नहीं मिली',
      notFoundDesc: '"{name}" नाम की कोई प्लेलिस्ट मौजूद नहीं है!',
      playlistTitle: 'प्लेलिस्ट: {name}',
      empty: 'यह प्लेलिस्ट खाली है',
      description: 'विवरण',
      noDescription: 'कोई विवरण नहीं',
      info: 'जानकारी',
      tracks: 'ट्रैक',
      plays: 'प्ले',
      tracksPage: 'ट्रैक (पेज {current}/{total})',
      play: 'बजाएं',
      shuffle: 'फेंटें',
      manage: 'प्रबंधन',
      previous: 'पिछला',
      next: 'अगला'
    },
    delete: {
      notFound: 'प्लेलिस्ट नहीं मिली',
      notFoundDesc: '"{name}" नाम की कोई प्लेलिस्ट मौजूद नहीं है!',
      deleted: 'प्लेलिस्ट हटाई गई',
      deletedDesc: 'प्लेलिस्ट "{name}" सफलतापूर्वक हटाई गई'
    },
    play: {
      notFound: 'प्लेलिस्ट नहीं मिली',
      notFoundDesc: '"{name}" नाम की कोई प्लेलिस्ट मौजूद नहीं है!',
      empty: 'खाली प्लेलिस्ट',
      emptyDesc: 'इस प्लेलिस्ट में बजाने के लिए कोई ट्रैक नहीं है!',
      noVoiceChannel: 'कोई वॉयस चैनल नहीं',
      noVoiceChannelDesc: 'प्लेलिस्ट बजाने के लिए वॉयस चैनल में शामिल हों',
      loadFailed: 'लोड विफल',
      loadFailedDesc: 'इस प्लेलिस्ट से कोई ट्रैक लोड नहीं कर सके',
      shuffling: 'प्लेलिस्ट फेंट रहे हैं',
      playing: 'प्लेलिस्ट बजा रहे हैं',
      playlist: 'प्लेलिस्ट',
      loaded: 'लोड किया गया',
      duration: 'अवधि',
      channel: 'चैनल',
      mode: 'मोड',
      shuffled: 'फेंटा गया',
      sequential: 'क्रमिक',
      playFailed: 'बजाना विफल',
      playFailedDesc: 'प्लेलिस्ट नहीं बजा सके। कृपया बाद में पुनः प्रयास करें।'
    },
    remove: {
      notFound: 'प्लेलिस्ट नहीं मिली',
      notFoundDesc: '"{name}" नाम की कोई प्लेलिस्ट मौजूद नहीं है!',
      invalidIndex: 'अमान्य इंडेक्स',
      invalidIndexDesc: 'ट्रैक इंडेक्स 1 और {max} के बीच होना चाहिए',
      removed: 'ट्रैक हटाया गया',
      removedTrack: 'हटाया गया',
      artist: 'कलाकार',
      source: 'स्रोत',
      remaining: 'शेष'
    },
    import: {
      invalidFile: 'अमान्य फाइल',
      invalidFileDesc: 'फाइल में नाम और ट्रैक सरणी के साथ मान्य प्लेलिस्ट होनी चाहिए।',
      nameConflict: 'नाम संघर्ष',
      nameConflictDesc: '"{name}" नाम की प्लेलिस्ट पहले से मौजूद है!',
      imported: 'प्लेलिस्ट आयात की गई',
      system: 'प्लेलिस्ट सिस्टम',
      importFailed: 'आयात विफल',
      importFailedDesc: 'प्लेलिस्ट आयात नहीं कर सके: {error}',
      name: 'नाम',
      tracks: 'ट्रैक',
      duration: 'अवधि'
    }
  },
  // सामान्य शब्द
  common: {
    enabled: 'सक्रिय',
    disabled: 'निष्क्रिय',
    unknown: 'अज्ञात',
    loading: 'लोड हो रहा...',
    page: 'पेज',
    of: 'में से',
    close: 'बंद करें',
    previous: 'पिछला',
    next: 'अगला'
  }
} satisfies typeof English
