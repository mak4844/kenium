import type English from './en.ts'

export default {
  hello: 'مرحبا',
  ping: {
    description:
      '**البوابة**: {wsPing}ms\n**الشريحة**: {shardPing}ms\n**المشغل**: {playerPing}ms',
    descriptionNoPlayer: '**البوابة**: {wsPing}ms\n**الشريحة**: {shardPing}ms',
    title: 'معلومات البينغ'
  },
  language: {
    set: 'تم تعيين اللغة إلى {lang}',
    name: 'اللغة',
    description: 'تعيين لغة البوت'
  },
  commands: {
    ping: {
      name: 'بينغ',
      description: 'عرض البينغ مع ديسكورد'
    },
    language: {
      name: 'اللغة',
      description: 'تعيين لغة البوت'
    },
    play: {
      name: 'تشغيل',
      description: 'تشغيل أغنية بالبحث أو الرابط.'
    },
    'play-file': {
      name: 'تشغيل-ملف',
      description: 'تشغيل ملف من جهازك.'
    },
    pause: {
      name: 'إيقاف-مؤقت',
      description: 'إيقاف الموسيقى مؤقتاً'
    },
    resume: {
      name: 'استكمال',
      description: 'استكمال الموسيقى'
    },
    stop: {
      name: 'إيقاف',
      description: 'إيقاف الموسيقى'
    },
    skip: {
      name: 'تخطي',
      description: 'تخطي الأغنية الحالية'
    },
    previous: {
      name: 'السابق',
      description: 'تشغيل الأغنية السابقة'
    },
    queue: {
      name: 'القائمة',
      description: 'عرض قائمة الموسيقى مع عناصر التحكم'
    },
    nowplaying: {
      name: 'الحالي',
      description: 'عرض الأغنية الحالية'
    },
    volume: {
      name: 'الصوت',
      description: 'تعيين مستوى الصوت'
    },
    clear: {
      name: 'مسح',
      description: 'مسح قائمة الموسيقى'
    },
    shuffle: {
      name: 'خلط',
      description: 'خلط القائمة'
    },
    loop: {
      name: 'تكرار',
      description: 'تعيين وضع التكرار'
    },
    autoplay: {
      name: 'تشغيل-تلقائي',
      description: 'تبديل التشغيل التلقائي'
    },
    filters: {
      name: 'مرشحات',
      description: 'تطبيق مرشحات الصوت'
    },
    jump: {
      name: 'انتقال',
      description: 'الانتقال إلى موضع محدد في القائمة'
    },
    remove: {
      name: 'حذف',
      description: 'حذف أغنية من القائمة'
    },
    grab: {
      name: 'أخذ',
      description: 'أخذ الأغنية الحالية وإرسالها في رسالة خاصة'
    },
    lyrics: {
      name: 'الكلمات',
      description: 'الحصول على كلمات الأغنية الحالية'
    },
    export: {
      name: 'تصدير',
      description: 'تصدير القائمة'
    },
    import: {
      name: 'استيراد',
      description: 'استيراد قائمة من ملف'
    },
    destroy: {
      name: 'تدمير',
      description: 'تدمير مشغل الموسيقى'
    },
    '247': {
      name: '247',
      description: 'تبديل وضع 24/7'
    },
    changelog: {
      name: 'سجل-التغييرات',
      description: 'عرض سجل تغييرات البوت'
    },
    help: {
      name: 'مساعدة',
      description: 'عرض الأوامر المتاحة'
    },
    invite: {
      name: 'دعوة',
      description: 'الحصول على رابط دعوة البوت'
    },
    search: {
      name: 'بحث',
      description: 'البحث عن أغنية في منصات الموسيقى'
    },
    seek: {
      name: 'البحث-عن-موضع',
      description: 'الانتقال إلى موضع محدد في الأغنية'
    },
    restart: {
      name: 'إعادة-تشغيل',
      description: 'إعادة تشغيل الموسيقى'
    },
    status: {
      name: 'الحالة',
      description: 'عرض حالة البوت'
    },
    tts: {
      name: 'تحويل-نص-لكلام',
      description: 'إنشاء وإرسال رسالة TTS'
    },
    karaoke: {
      name: 'كاراوكي',
      description: 'بدء جلسة كاراوكي مع كلمات متزامنة'
    },
    roulette: {
      name: 'روليت',
      description: 'تشغيل مقطع عشوائي من قائمة الانتظار'
    }
  },
  // رسائل مشغل الموسيقى
  player: {
    noVoiceChannel: 'يجب أن تكون في قناة صوتية لاستخدام هذا الأمر.',
    noPlayer: 'لم يتم العثور على مشغل الموسيقى.',
    noTrack: 'لا توجد مقطوعة قيد التشغيل حالياً.',
    alreadyPaused: 'الأغنية متوقفة مؤقتاً بالفعل.',
    alreadyResumed: 'الأغنية قيد التشغيل بالفعل.',
    paused: 'تم إيقاف الأغنية مؤقتاً.',
    resumed: 'تم استكمال الأغنية.',
    stopped: 'تم إيقاف الموسيقى.',
    destroyed: 'تم تدمير مشغل الموسيقى.',
    queueEmpty: 'القائمة فارغة.',
    queueCleared: 'تم مسح القائمة.',
    trackAdded: 'تمت إضافة **[{title}]({uri})** إلى القائمة.',
    playlistAdded:
      'تمت إضافة قائمة التشغيل **[`{name}`]({uri})** ({count} مقطوعة) إلى القائمة.',
    noTracksFound: 'لم يتم العثور على مقطوعات للاستعلام المعطى.',
    invalidPosition: 'يجب أن يكون الموضع بين 1 و {max}.',
    jumpedTo: 'تم الانتقال إلى الأغنية {position}.',
    jumpedToSong: 'تم الانتقال إلى الأغنية "{title}".',
    songNotFound: 'لا يمكن العثور على "{title}" في القائمة.',
    alreadyAtPosition: 'في الموضع 1 بالفعل.',
    alreadyPlaying: '"{title}" قيد التشغيل بالفعل.',
    volumeSet: 'تم تعيين الصوت إلى {volume}%.',
    invalidVolume: 'يجب أن يكون الصوت بين 0 و 100.',
    autoplayEnabled: 'تم **تشغيل** التشغيل التلقائي.',
    autoplayDisabled: 'تم **إيقاف** التشغيل التلقائي.',
    loopEnabled: 'تم **تشغيل** التكرار.',
    loopDisabled: 'تم **إيقاف** التكرار.',
    filterApplied: 'تم تطبيق المرشح **{filter}**.',
    filtersCleared: 'تم مسح جميع المرشحات.',
    filterInvalid: 'مرشح غير صالح.',
    nowPlaying: 'قيد التشغيل الآن',
    requestedBy: 'بطلب من',
    duration: 'المدة',
    author: 'المؤلف',
    position: 'الموضع',
    volume: 'الصوت',
    loop: 'التكرار',
    autoplay: 'التشغيل التلقائي',
    queueSize: 'حجم القائمة',
    enabled: 'مُفعّل',
    disabled: 'مُعطّل',
    none: 'لا شيء',
    track: 'مقطوعة',
    queue: 'القائمة',
    restarted: 'تم إعادة تشغيل الموسيقى',
    shuffled: 'تم خلط القائمة',
    skipped: 'تم تخطي الأغنية',
    previousPlayed: 'تشغيل الأغنية السابقة',
    previousAdded: 'تمت إضافة الأغنية السابقة',
    volumeChanged: 'تم تغيير الصوت',
    removedSong: 'تم حذف الأغنية',
    seeked: 'تم البحث في الأغنية',
    fileAdded: 'تمت الإضافة إلى القائمة',
    noTrackFound: 'لم يتم العثور على مقطوعة'
  },
  // وضع 24/7
  mode247: {
    title: 'وضع 24/7',
    enabled: 'تم تفعيل وضع 24/7',
    disabled: 'تم إلغاء تفعيل وضع 24/7'
  },
  // التصدير/الاستيراد
  export: {
    emptyQueue: 'القائمة فارغة',
    success: 'تم تصدير القائمة مع الروابط للاستيراد'
  },
  import: {
    emptyFile: 'الملف فارغ',
    noValidTracks: 'لم يتم العثور على مقطوعات صالحة في الملف',
    importing: 'استيراد {count} مقطوعة...',
    complete: 'اكتمل الاستيراد',
    successfullyImported: 'تم الاستيراد بنجاح: **{count}** مقطوعة',
    failedToImport: 'فشل في الاستيراد: **{count}** مقطوعة',
    totalQueueSize: 'إجمالي حجم القائمة: **{count}** مقطوعة'
  },
  // أمر الأخذ (grab)
  grab: {
    title: 'قيد التشغيل الآن: **{title}**',
    listenHere: '[استمع هنا]({uri})',
    duration: 'المدة',
    author: 'المؤلف',
    server: 'الخادم',
    footer: 'مأخوذ من جلستك الحالية',
    sentToDm: 'أرسلت لك تفاصيل المقطوعة في رسالة خاصة.',
    dmError: 'لا يمكنني إرسال رسالة خاصة لك. يرجى التحقق من إعدادات الخصوصية.',
    noSongPlaying: 'لا توجد أغنية قيد التشغيل حالياً.'
  },
  // أمر المساعدة (help)
  help: {
    pageTitle: 'الصفحة {current} من {total}',
    previous: 'السابق',
    next: 'التالي'
  },
  // أمر الكلمات (lyrics)
  lyrics: {
    title: 'الكلمات',
    error: 'خطأ في الكلمات',
    noLyricsFound: 'لم يتم العثور على كلمات',
    serviceUnavailable: 'خدمة الكلمات غير متاحة',
    syncedLyrics: 'كلمات متزامنة',
    textLyrics: 'كلمات نصية',
    artist: 'الفنان',
    noActivePlayer: 'لم يتم العثور على مشغل نشط'
  },
  // أمر الانتقال (jump)
  jump: {
    noSongsInQueue: 'لا توجد أغاني في القائمة',
    specifyPositionOrName: 'يرجى تحديد رقم الموضع أو اسم الأغنية'
  },
  // أسماء المرشحات
  filters: {
    '8d': '8D',
    equalizer: 'المعادل',
    karaoke: 'كاريوكي',
    timescale: 'المقياس الزمني',
    tremolo: 'تريمولو',
    vibrato: 'فيبراتو',
    rotation: 'الدوران',
    distortion: 'التشويه',
    channelMix: 'خلط القنوات',
    lowPass: 'تمرير منخفض',
    bassboost: 'تعزيز الباس',
    slowmode: 'الوضع البطيء',
    nightcore: 'نايتكور',
    vaporwave: 'فيبورويف',
    clear: 'مسح',
    invalidFilter: 'تم اختيار مرشح غير صالح.'
  },
  // أمر البحث (search)
  search: {
    noVoiceChannel: '🎵 انضم إلى قناة صوتية أولاً!',
    alreadyConnected: '🎵 أنا أشغل الموسيقى بالفعل في هذه القناة',
    noResults: '🔍 لم يتم العثور على نتائج. جرب منصة أخرى!',
    trackAdded: '✅ تمت الإضافة إلى القائمة',
    searchError: '❌ فشل البحث. يرجى المحاولة مرة أخرى.',
    genericError: '❌ حدث خطأ. يرجى المحاولة مرة أخرى.',
    invalidQuery: '❌ الاستعلام قصير جداً أو يحتوي على أحرف غير صالحة',
    multiSearchStarted: '🔍 البحث عبر منصات متعددة...',
    failedToJoinVoice: '❌ فشل في الانضمام للقناة الصوتية.'
  },
  // أمر الحالة
  status: {
    title: 'حالة البوت',
    systemUptime: 'وقت تشغيل النظام',
    systemCpuModel: 'موديل معالج النظام',
    systemCpuLoad: 'حمولة معالج النظام',
    lavalinkUptime: 'وقت تشغيل Lavalink',
    lavalinkVersion: 'إصدار Lavalink',
    systemMemory: 'ذاكرة النظام',
    systemMemBar: 'شريط ذاكرة النظام',
    lavalinkMemory: 'ذاكرة Lavalink',
    lavalinkMemBar: 'شريط ذاكرة Lavalink',
    lavalinkCpuLoad: 'حمولة معالج Lavalink',
    lavalinkPlayers: 'مشغلات Lavalink',
    lavalinkNodes: 'عقد Lavalink',
    ping: 'البينغ',
    processMemory: 'ذاكرة العملية'
  },
  // أمر TTS
  tts: {
    generated: 'تم إنشاء رسالة TTS'
  },
  // أمر karaoke
  karaoke: {
    error: 'خطأ في الكاراوكي',
    sessionEnded: 'انتهت جلسة الكاراوكي',
    noActivePlayer: 'لم يتم العثور على مشغل نشط',
    sessionAlreadyActive:
      'يوجد جلسة كاراوكي نشطة بالفعل على هذا الخادم. انتظر انتهاءها أو استخدم الأمر مرة أخرى لإيقاف الجلسة الحالية.',
    noLyricsAvailable: 'لا توجد كلمات متزامنة متاحة. جرب أغنية أخرى.',
    playing: 'تشغيل',
    paused: 'متوقف مؤقتاً',
    noLyrics: 'لا توجد كلمات متاحة'
  },
  // أمر roulette
  roulette: {
    playingRandom: '🎲 تشغيل مقطع عشوائي: **{title}** بواسطة **{author}**',
    error: 'حدث خطأ أثناء تشغيل المقطع العشوائي!'
  },
  // أمر الصوت
  volume: {
    rangeError: 'استخدم رقماً بين `0 - 200`.'
  },
  // أمر الدعوة (invite)
  invite: {
    title: 'لا توجد أسوار مدفوعة. لا توجد تصويتات. فقط موسيقى.',
    description: `متعب من البوتات التي تحجب المميزات خلف أسوار مدفوعة أو متطلبات تصويت؟ Kenium مختلف:

- **مجاني إلى الأبد**: جميع المميزات، جميع المنصات (YouTube, Spotify, SoundCloud, Vimeo) — لا رسوم، لا إعلانات.
- **موسيقى 24/7**: صوت عالي الجودة، استجابات سريعة، انقطاع صفر.
- **سهل الاستخدام**: فقط اكتب /تشغيل — قائمة فورية، لا إعداد معقد.
- **مفتوح المصدر**: كود شفاف، متاح دائماً للمراجعة.
- **مميزات غير محدودة**: قوائم التشغيل، المرشحات، تعزيز الباس — كل شيء مجاني.
- **مدعوم بـ Aqualink**: معالج lavalink سريع ومستقر وموثوق

لا استغلال مالي. لا تصويت. فقط اضغط تشغيل واستمتع.

**تريد المزيد؟** انقر على الأزرار أدناه!
لا تريد المزيد؟ [\`انقر هنا لدعوتي\`](https://discord.com/oauth2/authorize?client_id=1202232935311495209)`,
    supportServer: 'خادم الدعم',
    github: 'GitHub',
    website: 'الموقع الإلكتروني'
  },
  // أمر القائمة (queue)
  queue: {
    title: 'القائمة',
    page: 'الصفحة {current} من {total}',
    nowPlaying: '🎵 قيد التشغيل الآن',
    comingUp: '📋 قادم',
    queueEmpty: 'القائمة فارغة',
    noTracksInQueue:
      '🔭 **لا توجد مقطوعات في القائمة**\n\nاستخدم `/تشغيل` لإضافة بعض الموسيقى!',
    tip: '*نصيحة: يمكنك البحث أو استخدام الروابط*',
    pause: 'إيقاف مؤقت',
    resume: 'استكمال',
    shuffleOn: 'الخلط: مُفعّل',
    shuffleOff: 'الخلط: مُعطّل',
    loopOn: 'التكرار: مُفعّل',
    loopOff: 'التكرار: مُعطّل',
    refresh: 'تحديث',
    clear: 'مسح',
    noActivePlayerFound: '❌ لم يتم العثور على مشغل نشط',
    errorDisplayingQueue: '❌ حدث خطأ أثناء عرض القائمة'
  },
  // رسائل الأخطاء
  errors: {
    general: 'حدث خطأ',
    notFound: 'غير موجود',
    noPermission: 'ليس لديك صلاحية لاستخدام هذا الأمر',
    invalidLanguage: 'لغة مختارة غير صالحة',
    databaseError: 'فشل في حفظ الإعدادات',
    commandError: 'حدث خطأ أثناء تنفيذ الأمر',
    unsupportedContentType: 'نوع محتوى غير مدعوم.'
  },
  // رسائل النجاح
  success: {
    languageSet: 'تم تغيير اللغة بنجاح إلى **{lang}**!',
    settingsSaved: 'تم حفظ الإعدادات بنجاح',
    settingAlradySet: 'تم تعيين هذا الإعداد بالفعل'
  },
  // نظام قوائم التشغيل
  playlist: {
    create: {
      invalidName: 'اسم غير صالح',
      nameTooLong: 'يجب أن يكون اسم قائمة التشغيل أقل من {maxLength} حرف.',
      limitReached: 'تم الوصول لحد قوائم التشغيل',
      maxPlaylists: 'يمكنك الحصول على حد أقصى {max} قائمة تشغيل فقط.',
      exists: 'قائمة التشغيل موجودة',
      alreadyExists: 'قائمة تشغيل باسم "{name}" موجودة بالفعل!',
      created: 'تم إنشاء قائمة التشغيل',
      name: 'الاسم',
      status: 'الحالة',
      readyForTracks: 'جاهز للمقطوعات!',
      addTracks: 'إضافة مقطوعات',
      viewPlaylist: 'عرض قائمة التشغيل'
    },
    add: {
      notFound: 'قائمة التشغيل غير موجودة',
      notFoundDesc: 'لا توجد قائمة تشغيل باسم "{name}"!',
      full: 'قائمة التشغيل ممتلئة',
      fullDesc: 'وصلت قائمة التشغيل هذه لحد {max} مقطوعة!',
      nothingAdded: 'لم تتم إضافة شيء',
      nothingAddedDesc:
        'لم تتم إضافة مقطوعات جديدة. قد تكون موجودة بالفعل في قائمة التشغيل أو لم يتم العثور على تطابقات.',
      tracksAdded: 'تمت إضافة المقطوعات',
      trackAdded: 'تمت إضافة المقطوعة',
      tracks: 'مقطوعات',
      track: 'مقطوعة',
      artist: 'الفنان',
      source: 'المصدر',
      added: 'مُضاف',
      total: 'المجموع',
      duration: 'المدة',
      addMore: 'إضافة المزيد',
      playNow: 'تشغيل الآن',
      viewAll: 'عرض الكل',
      addFailed: 'فشل في الإضافة',
      addFailedDesc: 'لا يمكن إضافة المقطوعات: {error}'
    },
    view: {
      noPlaylists: 'لا توجد قوائم تشغيل',
      noPlaylistsDesc: 'لم تنشئ أي قوائم تشغيل بعد!',
      gettingStarted: 'البدء',
      gettingStartedDesc:
        'استخدم `/playlist create` لإنشاء قائمة التشغيل الأولى!',
      createPlaylist: 'إنشاء قائمة تشغيل',
      yourPlaylists: 'قوائم التشغيل الخاصة بك',
      yourPlaylistsDesc: 'لديك **{count}** قائمة تشغيل{plural}',
      choosePlaylist: 'اختر قائمة تشغيل للعرض...',
      notFound: 'قائمة التشغيل غير موجودة',
      notFoundDesc: 'لا توجد قائمة تشغيل باسم "{name}"!',
      playlistTitle: 'قائمة التشغيل: {name}',
      empty: 'قائمة التشغيل هذه فارغة',
      description: 'الوصف',
      noDescription: 'لا يوجد وصف',
      info: 'معلومات',
      tracks: 'مقطوعات',
      plays: 'تشغيلات',
      tracksPage: 'المقطوعات (الصفحة {current}/{total})',
      play: 'تشغيل',
      shuffle: 'خلط',
      manage: 'إدارة',
      previous: 'السابق',
      next: 'التالي'
    },
    delete: {
      notFound: 'قائمة التشغيل غير موجودة',
      notFoundDesc: 'لا توجد قائمة تشغيل باسم "{name}"!',
      deleted: 'تم حذف قائمة التشغيل',
      deletedDesc: 'تم حذف قائمة التشغيل "{name}" بنجاح'
    },
    play: {
      notFound: 'قائمة التشغيل غير موجودة',
      notFoundDesc: 'لا توجد قائمة تشغيل باسم "{name}"!',
      empty: 'قائمة تشغيل فارغة',
      emptyDesc: 'قائمة التشغيل هذه لا تحتوي على مقطوعات للتشغيل!',
      noVoiceChannel: 'لا توجد قناة صوتية',
      noVoiceChannelDesc: 'انضم لقناة صوتية لتشغيل قائمة التشغيل',
      loadFailed: 'فشل التحميل',
      loadFailedDesc: 'لا يمكن تحميل أي مقطوعات من قائمة التشغيل هذه',
      shuffling: 'خلط قائمة التشغيل',
      playing: 'تشغيل قائمة التشغيل',
      playlist: 'قائمة التشغيل',
      loaded: 'محملة',
      duration: 'المدة',
      channel: 'القناة',
      mode: 'الوضع',
      shuffled: 'مخلوطة',
      sequential: 'متتالية',
      playFailed: 'فشل التشغيل',
      playFailedDesc: 'لا يمكن تشغيل قائمة التشغيل. يرجى المحاولة لاحقاً.'
    },
    remove: {
      notFound: 'قائمة التشغيل غير موجودة',
      notFoundDesc: 'لا توجد قائمة تشغيل باسم "{name}"!',
      invalidIndex: 'فهرس غير صالح',
      invalidIndexDesc: 'يجب أن يكون فهرس المقطوعة بين 1 و {max}',
      removed: 'تم حذف المقطوعة',
      removedTrack: 'محذوف',
      artist: 'الفنان',
      source: 'المصدر',
      remaining: 'متبقي'
    },
    import: {
      invalidFile: 'ملف غير صالح',
      invalidFileDesc:
        'يجب أن يحتوي الملف على قائمة تشغيل صالحة مع اسم ومصفوفة مقطوعات.',
      nameConflict: 'تعارض في الاسم',
      nameConflictDesc: 'قائمة تشغيل باسم "{name}" موجودة بالفعل!',
      imported: 'تم استيراد قائمة التشغيل',
      system: 'نظام قائمة التشغيل',
      importFailed: 'فشل الاستيراد',
      importFailedDesc: 'لا يمكن استيراد قائمة التشغيل: {error}',
      name: 'الاسم',
      tracks: 'مقطوعات',
      duration: 'المدة'
    }
  },
  // كلمات شائعة
  common: {
    enabled: 'مُفعّل',
    disabled: 'مُعطّل',
    unknown: 'غير معروف',
    loading: 'جاري التحميل...',
    page: 'صفحة',
    of: 'من',
    close: 'إغلاق',
    previous: 'السابق',
    next: 'التالي'
  }
} satisfies typeof English
