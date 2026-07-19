export interface HungarianWord {
  id: string;
  hungarian: string;
  pronunciation: string;
  ukrainian: string;
  german: string;
}

export interface HungarianPhrase {
  id: string;
  hungarian: string;
  pronunciation: string;
  ukrainian: string;
  german: string;
}

export interface HungarianQuizQuestion {
  id: string;
  question: string;
  options: string[];
  answer: string;
}

export interface HungarianTopic {
  id: string;
  title: string;
  subtitle: string;
  goal: string;
  words: HungarianWord[];
  phrases: HungarianPhrase[];
  tasks: string[];
  quiz: HungarianQuizQuestion[];
}

export const hungarianTopics: HungarianTopic[] = [
  {
    id: "basics",
    title: "Begrüßung",
    subtitle: "Привітання і ввічливість",
    goal: "Мета: сказати привіт, подякувати і попрощатися.",
    words: [
      { id: "szia", hungarian: "szia", pronunciation: "сіа", ukrainian: "привіт / бувай", german: "Hallo / Tschüss" },
      { id: "jo-napot", hungarian: "jó napot", pronunciation: "йо напот", ukrainian: "добрий день", german: "Guten Tag" },
      { id: "koszonom", hungarian: "köszönöm", pronunciation: "кьосьоньом", ukrainian: "дякую", german: "Danke" },
      { id: "kerem", hungarian: "kérem", pronunciation: "керем", ukrainian: "будь ласка / прошу", german: "bitte" },
      { id: "elnezest", hungarian: "elnézést", pronunciation: "ельнезешт", ukrainian: "вибачте", german: "Entschuldigung" },
      { id: "viszlat", hungarian: "viszlát", pronunciation: "віслат", ukrainian: "до побачення", german: "Auf Wiedersehen" }
    ],
    phrases: [
      { id: "basics-1", hungarian: "Szia, hogy vagy?", pronunciation: "сіа, ходь вадь?", ukrainian: "Привіт, як ти?", german: "Hallo, wie geht es dir?" },
      { id: "basics-2", hungarian: "Köszönöm szépen.", pronunciation: "кьосьоньом сейпен", ukrainian: "Дуже дякую.", german: "Vielen Dank." },
      { id: "basics-3", hungarian: "Elnézést, nem értem.", pronunciation: "ельнезешт, нем ертем", ukrainian: "Вибачте, я не розумію.", german: "Entschuldigung, ich verstehe nicht." }
    ],
    tasks: [
      "Вивчити 6 слів уголос.",
      "Сказати 3 фрази без підглядання.",
      "Записати 1 фразу, яка потрібна тобі в реальному житті.",
      "★ Повторити ці слова завтра 3 хвилини."
    ],
    quiz: [
      { id: "basics-q1", question: "Що означає 'köszönöm'?", options: ["дякую", "вибачте", "добрий день"], answer: "дякую" },
      { id: "basics-q2", question: "Як сказати 'до побачення'?", options: ["viszlát", "kérem", "szia"], answer: "viszlát" },
      { id: "basics-q3", question: "Що означає 'elnézést'?", options: ["вибачте", "дякую", "добре"], answer: "вибачте" }
    ]
  },
  {
    id: "daily",
    title: "Alltag",
    subtitle: "Щоденні слова",
    goal: "Мета: розуміти базові слова для дому, дороги і звичайного дня.",
    words: [
      { id: "viz", hungarian: "víz", pronunciation: "віз", ukrainian: "вода", german: "Wasser" },
      { id: "kave", hungarian: "kávé", pronunciation: "каве", ukrainian: "кава", german: "Kaffee" },
      { id: "kenyer", hungarian: "kenyér", pronunciation: "кеньєр", ukrainian: "хліб", german: "Brot" },
      { id: "bolt", hungarian: "bolt", pronunciation: "болт", ukrainian: "магазин", german: "Geschäft" },
      { id: "munka", hungarian: "munka", pronunciation: "мунка", ukrainian: "робота", german: "Arbeit" },
      { id: "otthon", hungarian: "otthon", pronunciation: "оттхон", ukrainian: "вдома", german: "zu Hause" }
    ],
    phrases: [
      { id: "daily-1", hungarian: "Kérek egy vizet.", pronunciation: "керек едж візет", ukrainian: "Я прошу одну воду.", german: "Ich hätte gern ein Wasser." },
      { id: "daily-2", hungarian: "Hol van a bolt?", pronunciation: "хол ван а болт?", ukrainian: "Де магазин?", german: "Wo ist das Geschäft?" },
      { id: "daily-3", hungarian: "Ma dolgozom.", pronunciation: "ма долґозом", ukrainian: "Сьогодні я працюю.", german: "Heute arbeite ich." }
    ],
    tasks: [
      "Вибрати 4 слова, які точно потрібні тобі щодня.",
      "Скласти 2 міні-речення з цих слів.",
      "Повторити слова 5 хвилин у дорозі.",
      "★ Зробити маленьку картку у Notes або Figma."
    ],
    quiz: [
      { id: "daily-q1", question: "Що означає 'víz'?", options: ["вода", "хліб", "робота"], answer: "вода" },
      { id: "daily-q2", question: "Як сказати 'магазин'?", options: ["bolt", "kávé", "otthon"], answer: "bolt" },
      { id: "daily-q3", question: "Що означає 'munka'?", options: ["робота", "кава", "вдома"], answer: "робота" }
    ]
  },
  {
    id: "questions",
    title: "Fragen",
    subtitle: "Як ставити прості питання",
    goal: "Мета: не губитися, коли треба щось спитати.",
    words: [
      { id: "mi", hungarian: "mi", pronunciation: "мі", ukrainian: "що", german: "was" },
      { id: "hol", hungarian: "hol", pronunciation: "хол", ukrainian: "де", german: "wo" },
      { id: "mennyibe", hungarian: "mennyibe", pronunciation: "меньїбе", ukrainian: "скільки коштує", german: "wie viel kostet" },
      { id: "beszelsz", hungarian: "beszélsz", pronunciation: "бесеелс", ukrainian: "ти говориш", german: "du sprichst" },
      { id: "segit", hungarian: "segít", pronunciation: "шеґіт", ukrainian: "допомагає", german: "hilft" },
      { id: "ertem", hungarian: "értem", pronunciation: "ертем", ukrainian: "я розумію", german: "ich verstehe" }
    ],
    phrases: [
      { id: "questions-1", hungarian: "Mi ez?", pronunciation: "мі ез?", ukrainian: "Що це?", german: "Was ist das?" },
      { id: "questions-2", hungarian: "Mennyibe kerül?", pronunciation: "меньїбе керюль?", ukrainian: "Скільки це коштує?", german: "Wie viel kostet das?" },
      { id: "questions-3", hungarian: "Beszélsz németül?", pronunciation: "бесеелс неметюль?", ukrainian: "Ти говориш німецькою?", german: "Sprichst du Deutsch?" }
    ],
    tasks: [
      "Вивчити 3 питання напам'ять.",
      "Вимовити кожне питання 5 разів.",
      "Вибрати одне питання, яке може знадобитися на вулиці.",
      "★ Записати аудіо для себе і послухати вимову."
    ],
    quiz: [
      { id: "questions-q1", question: "Що означає 'Mi ez?'?", options: ["Що це?", "Де магазин?", "Скільки коштує?"], answer: "Що це?" },
      { id: "questions-q2", question: "Як сказати 'де'?", options: ["hol", "mi", "víz"], answer: "hol" },
      { id: "questions-q3", question: "Що означає 'értem'?", options: ["я розумію", "я працюю", "я купую"], answer: "я розумію" }
    ]
  },
  {
    id: "work",
    title: "Arbeit",
    subtitle: "Робота і навчання",
    goal: "Мета: знати базові слова для роботи, школи і планування.",
    words: [
      { id: "iskola", hungarian: "iskola", pronunciation: "ішкола", ukrainian: "школа", german: "Schule" },
      { id: "tanulok", hungarian: "tanulok", pronunciation: "танулок", ukrainian: "я вчуся", german: "ich lerne" },
      { id: "dolgozom", hungarian: "dolgozom", pronunciation: "долґозом", ukrainian: "я працюю", german: "ich arbeite" },
      { id: "ido", hungarian: "idő", pronunciation: "ідео", ukrainian: "час", german: "Zeit" },
      { id: "feladat", hungarian: "feladat", pronunciation: "феладат", ukrainian: "завдання", german: "Aufgabe" },
      { id: "szunet", hungarian: "szünet", pronunciation: "сюнет", ukrainian: "перерва", german: "Pause" }
    ],
    phrases: [
      { id: "work-1", hungarian: "Ma tanulok.", pronunciation: "ма танулок", ukrainian: "Сьогодні я вчуся.", german: "Heute lerne ich." },
      { id: "work-2", hungarian: "Van időm.", pronunciation: "ван ідеом", ukrainian: "У мене є час.", german: "Ich habe Zeit." },
      { id: "work-3", hungarian: "Ez a feladat nehéz.", pronunciation: "ез а феладат нехез", ukrainian: "Це завдання складне.", german: "Diese Aufgabe ist schwer." }
    ],
    tasks: [
      "Вивчити слова: tanulok, dolgozom, feladat.",
      "Сказати угорською: сьогодні я вчуся.",
      "Позначити 3 слова як знайомі.",
      "★ Додати 1 фразу про твою Ausbildung."
    ],
    quiz: [
      { id: "work-q1", question: "Що означає 'feladat'?", options: ["завдання", "перерва", "школа"], answer: "завдання" },
      { id: "work-q2", question: "Як сказати 'я вчуся'?", options: ["tanulok", "dolgozom", "szünet"], answer: "tanulok" },
      { id: "work-q3", question: "Що означає 'idő'?", options: ["час", "вода", "робота"], answer: "час" }
    ]
  },
  {
    id: "travel",
    title: "Unterwegs",
    subtitle: "Дорога, місто, транспорт",
    goal: "Мета: мати слова для дороги, станції і простих ситуацій.",
    words: [
      { id: "utca", hungarian: "utca", pronunciation: "уца", ukrainian: "вулиця", german: "Straße" },
      { id: "allomas", hungarian: "állomás", pronunciation: "аалломаш", ukrainian: "станція", german: "Station" },
      { id: "busz", hungarian: "busz", pronunciation: "бус", ukrainian: "автобус", german: "Bus" },
      { id: "vonat", hungarian: "vonat", pronunciation: "вонат", ukrainian: "поїзд", german: "Zug" },
      { id: "jegy", hungarian: "jegy", pronunciation: "єдь", ukrainian: "квиток", german: "Ticket" },
      { id: "balra", hungarian: "balra", pronunciation: "балра", ukrainian: "ліворуч", german: "links" }
    ],
    phrases: [
      { id: "travel-1", hungarian: "Hol van az állomás?", pronunciation: "хол ван аз аалломаш?", ukrainian: "Де станція?", german: "Wo ist die Station?" },
      { id: "travel-2", hungarian: "Kérek egy jegyet.", pronunciation: "керек едж єдєт", ukrainian: "Я прошу один квиток.", german: "Ich hätte gern ein Ticket." },
      { id: "travel-3", hungarian: "Balra vagy jobbra?", pronunciation: "балра вадь йоббра?", ukrainian: "Ліворуч чи праворуч?", german: "Links oder rechts?" }
    ],
    tasks: [
      "Вивчити 6 слів для дороги.",
      "Сказати 2 фрази як маленький діалог.",
      "Повторити слова перед виходом з дому.",
      "★ Додати улюблену фразу в нотатки."
    ],
    quiz: [
      { id: "travel-q1", question: "Що означає 'jegy'?", options: ["квиток", "станція", "вулиця"], answer: "квиток" },
      { id: "travel-q2", question: "Як сказати 'поїзд'?", options: ["vonat", "busz", "utca"], answer: "vonat" },
      { id: "travel-q3", question: "Що означає 'balra'?", options: ["ліворуч", "праворуч", "вдома"], answer: "ліворуч" }
    ]
  }
];
