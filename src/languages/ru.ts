import type English from './en.ts'

export default {
  hello: 'привет',
  ping: {
    description:
      '**Шлюз**: {wsPing}ms\n**Шард**: {shardPing}ms\n**Плеер**: {playerPing}ms',
    descriptionNoPlayer: '**Шлюз**: {wsPing}ms\n**Шард**: {shardPing}ms',
    title: 'Информация о пинге'
  },
  language: {
    set: 'Язык установлен на {lang}',
    name: 'Язык',
    description: 'Установить язык бота'
  },
  commands: {
    ping: {
      name: 'пинг',
      description: 'Показать пинг с Discord'
    },
    language: {
      name: 'язык',
      description: 'Установить язык бота'
    },
    play: {
      name: 'играть',
      description: 'Воспроизвести песню по поиску или URL.'
    },
    'play-file': {
      name: 'играть-файл',
      description: 'Воспроизвести файл с вашего компьютера.'
    },
    pause: {
      name: 'пауза',
      description: 'Поставить музыку на паузу'
    },
    resume: {
      name: 'продолжить',
      description: 'Продолжить воспроизведение музыки'
    },
    stop: {
      name: 'стоп',
      description: 'Остановить музыку'
    },
    skip: {
      name: 'пропустить',
      description: 'Пропустить текущую песню'
    },
    previous: {
      name: 'предыдущий',
      description: 'Воспроизвести предыдущую песню'
    },
    queue: {
      name: 'очередь',
      description: 'Показать музыкальную очередь с элементами управления'
    },
    nowplaying: {
      name: 'сейчас-играет',
      description: 'Показать текущую играющую песню'
    },
    volume: {
      name: 'громкость',
      description: 'Установить громкость'
    },
    clear: {
      name: 'очистить',
      description: 'Очистить музыкальную очередь'
    },
    shuffle: {
      name: 'перемешать',
      description: 'Перемешать очередь'
    },
    loop: {
      name: 'повтор',
      description: 'Установить режим повтора'
    },
    autoplay: {
      name: 'автовоспроизведение',
      description: 'Переключить автовоспроизведение'
    },
    filters: {
      name: 'фильтры',
      description: 'Применить аудио фильтры'
    },
    jump: {
      name: 'перейти',
      description: 'Перейти к определенной позиции в очереди'
    },
    remove: {
      name: 'удалить',
      description: 'Удалить песню из очереди'
    },
    grab: {
      name: 'взять',
      description: 'Взять текущую песню и отправить в личные сообщения'
    },
    lyrics: {
      name: 'текст',
      description: 'Получить текст текущей песни'
    },
    export: {
      name: 'экспорт',
      description: 'Экспортировать очередь'
    },
    import: {
      name: 'импорт',
      description: 'Импортировать очередь из файла'
    },
    destroy: {
      name: 'уничтожить',
      description: 'Уничтожить музыкальный плеер'
    },
    '247': {
      name: '247',
      description: 'Переключить режим 24/7'
    },
    changelog: {
      name: 'изменения',
      description: 'Показать журнал изменений бота'
    },
    help: {
      name: 'помощь',
      description: 'Показать доступные команды'
    },
    invite: {
      name: 'пригласить',
      description: 'Получить ссылку приглашения бота'
    },
    search: {
      name: 'поиск',
      description: 'Найти песню на музыкальных платформах'
    },
    seek: {
      name: 'искать-позицию',
      description: 'Перейти к определенной позиции в песне'
    },
    restart: {
      name: 'перезапуск',
      description: 'Перезапустить музыку'
    },
    status: {
      name: 'статус',
      description: 'Показать статус бота'
    },
    tts: {
      name: 'тts',
      description: 'Создать и отправить TTS сообщение'
    },
    karaoke: {
      name: 'караоке',
      description: 'Начать караоке-сессию с синхронизированными текстами'
    },
    roulette: {
      name: 'рулетка',
      description: 'Воспроизвести случайный трек из очереди'
    }
  },
  player: {
    noVoiceChannel:
      'Вы должны быть в голосовом канале для использования этой команды.',
    noPlayer: 'Музыкальный плеер не найден.',
    noTrack: 'В данный момент ничего не воспроизводится.',
    alreadyPaused: 'Песня уже на паузе.',
    alreadyResumed: 'Песня уже воспроизводится.',
    paused: 'Песня поставлена на паузу.',
    resumed: 'Воспроизведение песни продолжено.',
    stopped: 'Музыка остановлена.',
    destroyed: 'Музыкальный плеер уничтожен.',
    queueEmpty: 'Очередь пуста.',
    queueCleared: 'Очередь очищена.',
    trackAdded: 'Добавлено **[{title}]({uri})** в очередь.',
    playlistAdded:
      'Добавлен плейлист **[`{name}`]({uri})** ({count} треков) в очередь.',
    noTracksFound: 'Треки для данного запроса не найдены.',
    invalidPosition: 'Позиция должна быть между 1 и {max}.',
    jumpedTo: 'Перешел к песне {position}.',
    jumpedToSong: 'Перешел к песне "{title}".',
    songNotFound: 'Не удалось найти "{title}" в очереди.',
    alreadyAtPosition: 'Уже на позиции 1.',
    alreadyPlaying: '"{title}" уже воспроизводится.',
    volumeSet: 'Громкость установлена на {volume}%.',
    invalidVolume: 'Громкость должна быть между 0 и 100.',
    autoplayEnabled: 'Автовоспроизведение **включено**.',
    autoplayDisabled: 'Автовоспроизведение **отключено**.',
    loopEnabled: 'Повтор **включен**.',
    loopDisabled: 'Повтор **отключен**.',
    filterApplied: 'Применен фильтр **{filter}**.',
    filtersCleared: 'Все фильтры очищены.',
    filterInvalid: 'Неверный фильтр.',
    nowPlaying: 'Сейчас играет',
    requestedBy: 'По запросу',
    duration: 'Длительность',
    author: 'Автор',
    position: 'Позиция',
    volume: 'Громкость',
    loop: 'Повтор',
    autoplay: 'Автовоспроизведение',
    queueSize: 'Размер очереди',
    enabled: 'Включено',
    disabled: 'Отключено',
    none: 'Нет',
    track: 'Трек',
    queue: 'Очередь',
    restarted: 'Музыка перезапущена',
    shuffled: 'Очередь перемешана',
    skipped: 'Песня пропущена',
    previousPlayed: 'Воспроизводится предыдущая песня',
    previousAdded: 'Предыдущая песня добавлена',
    volumeChanged: 'Громкость изменена',
    removedSong: 'Песня удалена',
    seeked: 'Позиция в песне найдена',
    fileAdded: 'Добавлено в очередь',
    noTrackFound: 'Трек не найден'
  },
  // Режим 24/7
  mode247: {
    title: 'Режим 24/7',
    enabled: 'Режим 24/7 включен',
    disabled: 'Режим 24/7 отключен'
  },
  // Экспорт/Импорт
  export: {
    emptyQueue: 'Очередь пуста',
    success: 'Очередь экспортирована с URL для импорта'
  },
  import: {
    emptyFile: 'Файл пуст',
    noValidTracks: 'В файле не найдены действительные треки',
    importing: 'Импортирую {count} треков...',
    complete: 'Импорт завершен',
    successfullyImported: 'Успешно импортировано: **{count}** треков',
    failedToImport: 'Не удалось импортировать: **{count}** треков',
    totalQueueSize: 'Общий размер очереди: **{count}** треков'
  },
  // Команда взять (grab)
  grab: {
    title: 'Сейчас играет: **{title}**',
    listenHere: '[Послушать здесь]({uri})',
    duration: 'Длительность',
    author: 'Автор',
    server: 'Сервер',
    footer: 'Получено из вашей текущей сессии',
    sentToDm: 'Я отправил вам детали трека в личные сообщения.',
    dmError:
      'Не могу отправить вам личное сообщение. Проверьте настройки приватности.',
    noSongPlaying: 'В данный момент ничего не играет.'
  },
  // Команда помощь (help)
  help: {
    pageTitle: 'Страница {current} из {total}',
    previous: 'Предыдущая',
    next: 'Следующая'
  },
  // Команда текст (lyrics)
  lyrics: {
    title: 'Текст песни',
    error: 'Ошибка текста',
    noLyricsFound: 'Текст не найден',
    serviceUnavailable: 'Сервис текстов недоступен',
    syncedLyrics: 'Синхронизированный текст',
    textLyrics: 'Текстовый текст',
    artist: 'Исполнитель',
    noActivePlayer: 'Активный плеер не найден'
  },
  // Команда перейти (jump)
  jump: {
    noSongsInQueue: 'В очереди нет песен',
    specifyPositionOrName:
      'Пожалуйста, укажите номер позиции или название песни'
  },
  // Названия фильтров
  filters: {
    '8d': '8D',
    equalizer: 'Эквалайзер',
    karaoke: 'Караоке',
    timescale: 'Временная шкала',
    tremolo: 'Тремоло',
    vibrato: 'Вибрато',
    rotation: 'Вращение',
    distortion: 'Искажение',
    channelMix: 'Микс каналов',
    lowPass: 'Низкие частоты',
    bassboost: 'Усиление басов',
    slowmode: 'Медленный режим',
    nightcore: 'Найткор',
    vaporwave: 'Вэйпорвэйв',
    clear: 'Очистить',
    invalidFilter: 'Выбран неверный фильтр.'
  },
  // Команда поиск (search)
  search: {
    noVoiceChannel: '🎵 Сначала присоединитесь к голосовому каналу!',
    alreadyConnected: '🎵 Я уже воспроизвожу музыку в этом канале',
    noResults: '🔍 Результаты не найдены. Попробуйте другую платформу!',
    trackAdded: '✅ Добавлено в очередь',
    searchError: '❌ Поиск не удался. Попробуйте еще раз.',
    genericError: '❌ Произошла ошибка. Попробуйте еще раз.',
    invalidQuery:
      '❌ Запрос слишком короткий или содержит недопустимые символы',
    multiSearchStarted: '🔍 Поиск на нескольких платформах...',
    failedToJoinVoice: '❌ Не удалось присоединиться к голосовому каналу.'
  },
  // Команда статус
  status: {
    title: 'Статус бота',
    systemUptime: 'Время работы системы',
    systemCpuModel: 'Модель CPU системы',
    systemCpuLoad: 'Загрузка CPU системы',
    lavalinkUptime: 'Время работы Lavalink',
    lavalinkVersion: 'Версия Lavalink',
    systemMemory: 'Память системы',
    systemMemBar: 'Индикатор памяти системы',
    lavalinkMemory: 'Память Lavalink',
    lavalinkMemBar: 'Индикатор памяти Lavalink',
    lavalinkCpuLoad: 'Загрузка CPU Lavalink',
    lavalinkPlayers: 'Плееры Lavalink',
    lavalinkNodes: 'Узлы Lavalink',
    ping: 'Пинг',
    processMemory: 'Память процесса'
  },
  // Команда TTS
  tts: {
    generated: 'TTS сообщение создано'
  },
  // Команда karaoke
  karaoke: {
    error: 'Ошибка Караоке',
    sessionEnded: 'Сессия караоке завершена',
    noActivePlayer: 'Активный плеер не найден',
    sessionAlreadyActive:
      'На этом сервере уже активна сессия караоке. Дождитесь её завершения или используйте команду повторно для остановки текущей сессии.',
    noLyricsAvailable:
      'Синхронизированные тексты песен недоступны. Попробуйте другую песню.',
    playing: 'Воспроизведение',
    paused: 'Приостановлено',
    noLyrics: 'Тексты песен недоступны'
  },
  // Команда roulette
  roulette: {
    playingRandom:
      '🎲 Воспроизведение случайного трека: **{title}** от **{author}**',
    error: 'Произошла ошибка при воспроизведении случайного трека!'
  },
  // Команда громкость
  volume: {
    rangeError: 'Используйте число от `0 - 200`.'
  },
  // Команда пригласить (invite)
  invite: {
    title: 'Никаких платных стен. Никакого голосования. Только музыка.',
    description: `Устали от ботов, которые блокируют функции за платными стенами или требованиями голосования? Kenium отличается:

- **Навсегда бесплатно**: Все функции, все платформы (YouTube, Spotify, SoundCloud, Vimeo) — без платы, без рекламы.
- **Музыка 24/7**: Высококачественный звук, быстрые ответы, нулевое время простоя.
- **Легко использовать**: Просто наберите /играть — мгновенная очередь, без сложной настройки.
- **Открытый исходный код**: Прозрачный код, всегда доступен для проверки.
- **Неограниченные функции**: Плейлисты, фильтры, усиление басов — все бесплатно.
- **На базе Aqualink**: Быстрый, стабильный и надежный обработчик lavalink

Никаких денежных захватов. Никакого голосования. Просто нажмите play и наслаждайтесь.

**Хотите больше?** Нажмите на кнопки ниже!
Не хотите больше? [\`Нажмите здесь, чтобы пригласить меня\`](https://discord.com/oauth2/authorize?client_id=1202232935311495209)`,
    supportServer: 'Сервер поддержки',
    github: 'GitHub',
    website: 'Веб-сайт'
  },
  // Команда очередь (queue)
  queue: {
    title: 'Очередь',
    page: 'Страница {current} из {total}',
    nowPlaying: '🎵 Сейчас играет',
    comingUp: '📋 Далее',
    queueEmpty: 'Очередь пуста',
    noTracksInQueue:
      '🔭 **Нет треков в очереди**\n\nИспользуйте `/играть` чтобы добавить музыку!',
    tip: '*Совет: Вы можете искать или использовать URL*',
    pause: 'Пауза',
    resume: 'Продолжить',
    shuffleOn: 'Перемешивание: Вкл',
    shuffleOff: 'Перемешивание: Выкл',
    loopOn: 'Повтор: Вкл',
    loopOff: 'Повтор: Выкл',
    refresh: 'Обновить',
    clear: 'Очистить',
    noActivePlayerFound: '❌ Активный плеер не найден',
    errorDisplayingQueue: '❌ Произошла ошибка при отображении очереди'
  },
  // Сообщения об ошибках
  errors: {
    general: 'Произошла ошибка',
    notFound: 'Не найдено',
    noPermission: 'У вас нет разрешения на использование этой команды',
    invalidLanguage: 'Выбран неверный язык',
    databaseError: 'Не удалось сохранить настройки',
    commandError: 'Произошла ошибка при выполнении команды',
    unsupportedContentType: 'Неподдерживаемый тип контента.'
  },
  // Сообщения об успехе
  success: {
    languageSet: 'Язык успешно изменен на **{lang}**!',
    settingsSaved: 'Настройки успешно сохранены',
    settingAlradySet: 'Эта настройка уже установлена'
  },
  // Система плейлистов
  playlist: {
    create: {
      invalidName: 'Неверное имя',
      nameTooLong: 'Имя плейлиста должно быть менее {maxLength} символов.',
      limitReached: 'Достигнут лимит плейлистов',
      maxPlaylists: 'Вы можете иметь максимум {max} плейлистов.',
      exists: 'Плейлист существует',
      alreadyExists: 'Плейлист с именем "{name}" уже существует!',
      created: 'Плейлист создан',
      name: 'Имя',
      status: 'Статус',
      readyForTracks: 'Готов к трекам!',
      addTracks: 'Добавить треки',
      viewPlaylist: 'Просмотреть плейлист'
    },
    add: {
      notFound: 'Плейлист не найден',
      notFoundDesc: 'Плейлист с именем "{name}" не существует!',
      full: 'Плейлист полон',
      fullDesc: 'Этот плейлист достиг лимита в {max} треков!',
      nothingAdded: 'Ничего не добавлено',
      nothingAddedDesc:
        'Новые треки не были добавлены. Они могут уже существовать в плейлисте или совпадения не найдены.',
      tracksAdded: 'Треки добавлены',
      trackAdded: 'Трек добавлен',
      tracks: 'Треки',
      track: 'Трек',
      artist: 'Исполнитель',
      source: 'Источник',
      added: 'Добавлено',
      total: 'Всего',
      duration: 'Длительность',
      addMore: 'Добавить еще',
      playNow: 'Играть сейчас',
      viewAll: 'Просмотреть все',
      addFailed: 'Добавление не удалось',
      addFailedDesc: 'Не удалось добавить треки: {error}'
    },
    view: {
      noPlaylists: 'Нет плейлистов',
      noPlaylistsDesc: 'Вы еще не создали ни одного плейлиста!',
      gettingStarted: 'Начало работы',
      gettingStartedDesc:
        'Используйте `/playlist create` чтобы создать свой первый плейлист!',
      createPlaylist: 'Создать плейлист',
      yourPlaylists: 'Ваши плейлисты',
      yourPlaylistsDesc: 'У вас есть **{count}** плейлист{plural}',
      choosePlaylist: 'Выберите плейлист для просмотра...',
      notFound: 'Плейлист не найден',
      notFoundDesc: 'Плейлист с именем "{name}" не существует!',
      playlistTitle: 'Плейлист: {name}',
      empty: 'Этот плейлист пуст',
      description: 'Описание',
      noDescription: 'Нет описания',
      info: 'Информация',
      tracks: 'Треки',
      plays: 'Воспроизведения',
      tracksPage: 'Треки (Страница {current}/{total})',
      play: 'Играть',
      shuffle: 'Перемешать',
      manage: 'Управлять',
      previous: 'Предыдущая',
      next: 'Следующая'
    },
    delete: {
      notFound: 'Плейлист не найден',
      notFoundDesc: 'Плейлист с именем "{name}" не существует!',
      deleted: 'Плейлист удален',
      deletedDesc: 'Плейлист "{name}" успешно удален'
    },
    play: {
      notFound: 'Плейлист не найден',
      notFoundDesc: 'Плейлист с именем "{name}" не существует!',
      empty: 'Пустой плейлист',
      emptyDesc: 'В этом плейлисте нет треков для воспроизведения!',
      noVoiceChannel: 'Нет голосового канала',
      noVoiceChannelDesc:
        'Присоединитесь к голосовому каналу для воспроизведения плейлиста',
      loadFailed: 'Загрузка не удалась',
      loadFailedDesc: 'Не удалось загрузить треки из этого плейлиста',
      shuffling: 'Перемешивание плейлиста',
      playing: 'Воспроизведение плейлиста',
      playlist: 'Плейлист',
      loaded: 'Загружено',
      duration: 'Длительность',
      channel: 'Канал',
      mode: 'Режим',
      shuffled: 'Перемешано',
      sequential: 'Последовательно',
      playFailed: 'Воспроизведение не удалось',
      playFailedDesc: 'Не удалось воспроизвести плейлист. Попробуйте позже.'
    },
    remove: {
      notFound: 'Плейлист не найден',
      notFoundDesc: 'Плейлист с именем "{name}" не существует!',
      invalidIndex: 'Неверный индекс',
      invalidIndexDesc: 'Индекс трека должен быть между 1 и {max}',
      removed: 'Трек удален',
      removedTrack: 'Удален',
      artist: 'Исполнитель',
      source: 'Источник',
      remaining: 'Осталось'
    },
    import: {
      invalidFile: 'Неверный файл',
      invalidFileDesc:
        'Файл должен содержать действительный плейлист с именем и массивом треков.',
      nameConflict: 'Конфликт имен',
      nameConflictDesc: 'Плейлист с именем "{name}" уже существует!',
      imported: 'Плейлист импортирован',
      system: 'Система плейлистов',
      importFailed: 'Импорт не удался',
      importFailedDesc: 'Не удалось импортировать плейлист: {error}',
      name: 'Имя',
      tracks: 'Треки',
      duration: 'Длительность'
    }
  },
  // Общие слова
  common: {
    enabled: 'включено',
    disabled: 'отключено',
    unknown: 'Неизвестно',
    loading: 'Загрузка...',
    page: 'Страница',
    of: 'из',
    close: 'Закрыть',
    previous: 'Предыдущая',
    next: 'Следующая'
  }
} satisfies typeof English
