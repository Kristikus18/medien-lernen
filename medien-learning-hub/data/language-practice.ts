export interface PracticeExample {
  sentence: string;
  translation: string;
}

export interface PracticeQuizQuestion {
  id: string;
  question: string;
  options: string[];
  answer: string;
}

export interface PracticeResource {
  title: string;
  url: string;
  description: string;
}

export interface DictationTask {
  title: string;
  level: string;
  text: string;
  selfCheck: string[];
}

export interface IrregularVerb {
  base: string;
  past: string;
  participle: string;
  ukrainian: string;
}

export interface PracticeTopic {
  id: string;
  level: "A1" | "A2" | "B1" | "B2";
  title: string;
  subtitle: string;
  goal: string;
  rules: string[];
  examples: PracticeExample[];
  tasks: string[];
  quiz: PracticeQuizQuestion[];
}

export const germanLearningResources: PracticeResource[] = [
  {
    title: "DW Deutsch Lernen",
    url: "https://learngerman.dw.com/de/deutsch-lernen/s-9095",
    description: "Безкоштовні курси, відео, читання і слухання від A1 до B2."
  },
  {
    title: "DW Top-Thema",
    url: "https://learngerman.dw.com/de/top-thema/s-55861562",
    description: "Короткі актуальні тексти з аудіо. Добре для B1/B2 Lesen + Hören."
  },
  {
    title: "Schubert Verlag Online-Übungen",
    url: "https://www.schubert-verlag.de/aufgaben/",
    description: "Безкоштовні граматичні вправи за рівнями."
  },
  {
    title: "Mein Deutschbuch Übungen",
    url: "https://mein-deutschbuch.de/online-uebungen.html",
    description: "Онлайн-вправи з граматики, словника і структури речень."
  }
];

export const englishLearningResources: PracticeResource[] = [
  {
    title: "British Council LearnEnglish Grammar",
    url: "https://learnenglish.britishcouncil.org/grammar",
    description: "Безкоштовні пояснення і вправи з граматики."
  },
  {
    title: "British Council A1-A2 Grammar",
    url: "https://learnenglish.britishcouncil.org/grammar/a1-a2-grammar",
    description: "Практичні теми A1-A2 з короткими правилами."
  },
  {
    title: "Perfect English Grammar",
    url: "https://www.perfect-english-grammar.com/grammar-exercises.html",
    description: "Багато безкоштовних граматичних вправ."
  }
];

export const germanDictationTasks: DictationTask[] = [
  {
    title: "Diktat 1 - Alltag und Schule",
    level: "5-6 Klasse / leicht",
    text: "Heute lerne ich Deutsch. Ich schreibe neue Wörter in mein Heft. Danach lese ich einen kurzen Text und höre eine Übung. Am Abend wiederhole ich die Grammatik.",
    selfCheck: [
      "Перевір великі літери на початку речення.",
      "Перевір іменники з великої літери: Deutsch, Wörter, Heft, Text, Übung, Abend, Grammatik.",
      "Підкресли дієслова: lerne, schreibe, lese, höre, wiederhole."
    ]
  },
  {
    title: "Diktat 2 - Design und Arbeit",
    level: "6-7 Klasse / leicht-mittel",
    text: "Die Kundin braucht ein Logo und eine Visitenkarte. Ich erstelle zuerst ein Moodboard. Dann wähle ich Farben und Schriften. Am Ende exportiere ich die Datei als PDF.",
    selfCheck: [
      "Перевір артиклі: die Kundin, ein Logo, eine Visitenkarte, ein Moodboard, die Datei.",
      "Перевір порядок: zuerst, dann, am Ende.",
      "Перевір професійні слова: Logo, Visitenkarte, Moodboard, PDF."
    ]
  },
  {
    title: "Diktat 3 - B2 Kurs Rhythmus",
    level: "7 Klasse / mittel",
    text: "Im Deutschkurs übe ich Lesen, Hören, Schreiben und Sprechen. Wenn ich ein neues Wort nicht verstehe, schreibe ich es in mein Wörterbuch und suche ein Beispiel.",
    selfCheck: [
      "Перевір коми перед wenn.",
      "Перевір іменники: Deutschkurs, Lesen, Hören, Schreiben, Sprechen, Wort, Wörterbuch, Beispiel.",
      "Після диктанту прочитай текст уголос один раз."
    ]
  }
];

export const englishIrregularVerbs: IrregularVerb[] = [
  { base: "be", past: "was/were", participle: "been", ukrainian: "бути" },
  { base: "become", past: "became", participle: "become", ukrainian: "ставати" },
  { base: "begin", past: "began", participle: "begun", ukrainian: "починати" },
  { base: "break", past: "broke", participle: "broken", ukrainian: "ламати" },
  { base: "bring", past: "brought", participle: "brought", ukrainian: "приносити" },
  { base: "buy", past: "bought", participle: "bought", ukrainian: "купувати" },
  { base: "choose", past: "chose", participle: "chosen", ukrainian: "обирати" },
  { base: "come", past: "came", participle: "come", ukrainian: "приходити" },
  { base: "do", past: "did", participle: "done", ukrainian: "робити" },
  { base: "draw", past: "drew", participle: "drawn", ukrainian: "малювати" },
  { base: "drink", past: "drank", participle: "drunk", ukrainian: "пити" },
  { base: "eat", past: "ate", participle: "eaten", ukrainian: "їсти" },
  { base: "find", past: "found", participle: "found", ukrainian: "знаходити" },
  { base: "get", past: "got", participle: "got/gotten", ukrainian: "отримувати" },
  { base: "give", past: "gave", participle: "given", ukrainian: "давати" },
  { base: "go", past: "went", participle: "gone", ukrainian: "йти" },
  { base: "have", past: "had", participle: "had", ukrainian: "мати" },
  { base: "hear", past: "heard", participle: "heard", ukrainian: "чути" },
  { base: "know", past: "knew", participle: "known", ukrainian: "знати" },
  { base: "make", past: "made", participle: "made", ukrainian: "робити/створювати" },
  { base: "read", past: "read", participle: "read", ukrainian: "читати" },
  { base: "see", past: "saw", participle: "seen", ukrainian: "бачити" },
  { base: "send", past: "sent", participle: "sent", ukrainian: "надсилати" },
  { base: "speak", past: "spoke", participle: "spoken", ukrainian: "говорити" },
  { base: "take", past: "took", participle: "taken", ukrainian: "брати" },
  { base: "write", past: "wrote", participle: "written", ukrainian: "писати" }
];

export const germanGrammarTopics: PracticeTopic[] = [
  {
    id: "de-a1-praesens",
    level: "A1",
    title: "Präsens",
    subtitle: "Теперішній час",
    goal: "Мета: сказати, що я роблю зараз або регулярно.",
    rules: [
      "Ich + Verb mit -e: ich lerne, ich arbeite.",
      "Du + Verb mit -st: du lernst, du arbeitest.",
      "Er/sie/es + Verb mit -t: sie lernt, er arbeitet.",
      "Wir + Verb mit -en: wir lernen, wir arbeiten."
    ],
    examples: [
      { sentence: "Ich lerne Deutsch.", translation: "Я вчу німецьку." },
      { sentence: "Sie arbeitet heute.", translation: "Вона сьогодні працює." },
      { sentence: "Wir machen eine Aufgabe.", translation: "Ми робимо завдання." }
    ],
    tasks: [
      "Вивчити закінчення: ich -e, du -st, er/sie/es -t, wir -en.",
      "Прочитати 3 приклади вголос.",
      "Позначити тему як повторену.",
      "★ Скласти усно 2 речення про свій день."
    ],
    quiz: [
      { id: "de-a1-praesens-q1", question: "Was ist richtig?", options: ["ich lerne", "ich lernst", "ich lernt"], answer: "ich lerne" },
      { id: "de-a1-praesens-q2", question: "Was passt zu 'du'?", options: ["arbeitest", "arbeite", "arbeiten"], answer: "arbeitest" },
      { id: "de-a1-praesens-q3", question: "Переклад: 'Wir lernen Deutsch.'", options: ["Ми вчимо німецьку.", "Вона вчить німецьку.", "Я працюю."], answer: "Ми вчимо німецьку." }
    ]
  },
  {
    id: "de-a1-artikel",
    level: "A1",
    title: "Artikel",
    subtitle: "der, die, das / ein, eine",
    goal: "Мета: бачити рід слова і правильно ставити простий артикль.",
    rules: [
      "Maskulin: der Tisch, ein Tisch.",
      "Feminin: die Tasche, eine Tasche.",
      "Neutral: das Bild, ein Bild.",
      "Plural: die Bilder, keine Bilder."
    ],
    examples: [
      { sentence: "Das ist ein Logo.", translation: "Це логотип." },
      { sentence: "Die Datei ist fertig.", translation: "Файл готовий." },
      { sentence: "Der Kunde möchte eine Visitenkarte.", translation: "Клієнт хоче візитку." }
    ],
    tasks: [
      "Вивчити: der - maskulin, die - feminin/plural, das - neutral.",
      "Повторити 5 слів з артиклями.",
      "Прочитати приклади вголос.",
      "★ Додати 3 Fachwörter з артиклями."
    ],
    quiz: [
      { id: "de-a1-artikel-q1", question: "Was ist richtig?", options: ["das Logo", "die Logo", "der Logo"], answer: "das Logo" },
      { id: "de-a1-artikel-q2", question: "Was ist feminin?", options: ["die Datei", "der Datei", "das Datei"], answer: "die Datei" },
      { id: "de-a1-artikel-q3", question: "Was passt zu Plural?", options: ["die Bilder", "das Bilder", "ein Bilder"], answer: "die Bilder" }
    ]
  },
  {
    id: "de-a1-akkusativ",
    level: "A1",
    title: "Akkusativ",
    subtitle: "Кого? Що?",
    goal: "Мета: правильно сказати, що я маю, бачу або створюю.",
    rules: [
      "Maskulin ändert sich: der -> den, ein -> einen.",
      "Feminin bleibt: die -> die, eine -> eine.",
      "Neutral bleibt: das -> das, ein -> ein.",
      "Typische Verben: haben, sehen, brauchen, erstellen."
    ],
    examples: [
      { sentence: "Ich erstelle einen Flyer.", translation: "Я створюю флаєр." },
      { sentence: "Ich brauche eine Datei.", translation: "Мені потрібен файл." },
      { sentence: "Ich sehe das Layout.", translation: "Я бачу макет." }
    ],
    tasks: [
      "Запам'ятати: тільки maskulin змінюється в Akkusativ.",
      "Прочитати 3 приклади.",
      "Вибрати правильну відповідь у тесті.",
      "★ Усно сказати: Ich erstelle einen..."
    ],
    quiz: [
      { id: "de-a1-akkusativ-q1", question: "Was ist richtig?", options: ["Ich erstelle einen Flyer.", "Ich erstelle ein Flyer.", "Ich erstelle der Flyer."], answer: "Ich erstelle einen Flyer." },
      { id: "de-a1-akkusativ-q2", question: "Was bleibt gleich?", options: ["eine Datei", "einen Datei", "den Datei"], answer: "eine Datei" },
      { id: "de-a1-akkusativ-q3", question: "Akkusativ fragt:", options: ["Wen? Was?", "Wer? Was?", "Wann?"], answer: "Wen? Was?" }
    ]
  },
  {
    id: "de-a2-perfekt",
    level: "A2",
    title: "Perfekt",
    subtitle: "Минулій час у розмові",
    goal: "Мета: розповісти, що ти вже зробила.",
    rules: [
      "Perfekt = haben/sein + Partizip II.",
      "Mit haben: Ich habe gelernt. Ich habe gestaltet.",
      "Mit sein: Ich bin gegangen. Ich bin gekommen.",
      "Partizip steht am Ende."
    ],
    examples: [
      { sentence: "Ich habe ein Logo erstellt.", translation: "Я створила логотип." },
      { sentence: "Ich habe die Datei exportiert.", translation: "Я експортувала файл." },
      { sentence: "Ich bin zur Schule gegangen.", translation: "Я пішла до школи." }
    ],
    tasks: [
      "Вивчити формулу: haben/sein + Partizip II.",
      "Прочитати приклади про дизайн.",
      "Позначити тему як повторену.",
      "★ Усно сказати 3 речення: Ich habe..."
    ],
    quiz: [
      { id: "de-a2-perfekt-q1", question: "Was ist richtig?", options: ["Ich habe gelernt.", "Ich gelernt habe.", "Ich bin gelernt."], answer: "Ich habe gelernt." },
      { id: "de-a2-perfekt-q2", question: "Wo steht Partizip II?", options: ["am Ende", "immer am Anfang", "nach dem Subjekt"], answer: "am Ende" },
      { id: "de-a2-perfekt-q3", question: "Переклад: 'Ich habe ein Logo erstellt.'", options: ["Я створила логотип.", "Я створюю логотип.", "Я хочу логотип."], answer: "Я створила логотип." }
    ]
  },
  {
    id: "de-a2-weil",
    level: "A2",
    title: "Nebensatz mit weil",
    subtitle: "Речення з 'тому що'",
    goal: "Мета: пояснювати причину, особливо на Fachgespräch.",
    rules: [
      "Weil bedeutet: тому що.",
      "Im weil-Satz steht das Verb am Ende.",
      "Hauptsatz: Ich nutze CMYK.",
      "Nebensatz: weil das Produkt gedruckt wird."
    ],
    examples: [
      { sentence: "Ich nutze CMYK, weil das Produkt gedruckt wird.", translation: "Я використовую CMYK, тому що продукт друкується." },
      { sentence: "Ich wähle diese Schrift, weil sie gut lesbar ist.", translation: "Я обираю цей шрифт, тому що він добре читається." },
      { sentence: "Ich brauche Beschnitt, weil das Papier geschnitten wird.", translation: "Мені потрібен виліт, тому що папір обрізається." }
    ],
    tasks: [
      "Запам'ятати: після weil дієслово в кінці.",
      "Прочитати 3 Prüfung-речення.",
      "Зробити mini-test.",
      "★ Повторити 2 речення перед сном."
    ],
    quiz: [
      { id: "de-a2-weil-q1", question: "Was ist richtig?", options: ["weil sie gut lesbar ist", "weil sie ist gut lesbar", "weil gut lesbar sie ist"], answer: "weil sie gut lesbar ist" },
      { id: "de-a2-weil-q2", question: "Was bedeutet 'weil'?", options: ["тому що", "але", "потім"], answer: "тому що" },
      { id: "de-a2-weil-q3", question: "Wo steht das Verb im weil-Satz?", options: ["am Ende", "immer am Anfang", "nie im Satz"], answer: "am Ende" }
    ]
  },
  {
    id: "de-b1-konjunktiv",
    level: "B1",
    title: "Konjunktiv II höflich",
    subtitle: "Ввічливі прохання",
    goal: "Мета: говорити м'якше і професійніше.",
    rules: [
      "Könnte ich...? = Чи могла б я...?",
      "Ich würde gern... = Я б хотіла...",
      "Wäre es möglich...? = Чи було б можливо...?",
      "Das klingt höflicher als direkte Befehle."
    ],
    examples: [
      { sentence: "Könnte ich die Datei morgen schicken?", translation: "Чи могла б я надіслати файл завтра?" },
      { sentence: "Ich würde gern eine zweite Version zeigen.", translation: "Я б хотіла показати другу версію." },
      { sentence: "Wäre es möglich, das Briefing kurz zu besprechen?", translation: "Чи було б можливо коротко обговорити бриф?" }
    ],
    tasks: [
      "Вивчити 3 ввічливі форми.",
      "Прочитати речення повільно.",
      "Зробити тест.",
      "★ Використати одну фразу в реальному повідомленні."
    ],
    quiz: [
      { id: "de-b1-konjunktiv-q1", question: "Was klingt höflich?", options: ["Könnte ich die Datei schicken?", "Schick Datei!", "Ich Datei schicken."], answer: "Könnte ich die Datei schicken?" },
      { id: "de-b1-konjunktiv-q2", question: "Was bedeutet 'Ich würde gern...'?", options: ["Я б хотіла...", "Я мушу...", "Я не можу..."], answer: "Я б хотіла..." },
      { id: "de-b1-konjunktiv-q3", question: "Wofür nutzt man Konjunktiv II hier?", options: ["höfliche Bitte", "Plural", "Farbe"], answer: "höfliche Bitte" }
    ]
  },
  {
    id: "de-b1-passiv",
    level: "B1",
    title: "Passiv",
    subtitle: "wird + Partizip II",
    goal: "Мета: пояснювати процеси: файл експортується, продукт друкується.",
    rules: [
      "Passiv zeigt: Was passiert mit einer Sache?",
      "Form: werden + Partizip II.",
      "Präsens: Die Datei wird exportiert.",
      "Für Prüfung gut bei Druck, Export und Produktion."
    ],
    examples: [
      { sentence: "Die Datei wird exportiert.", translation: "Файл експортується." },
      { sentence: "Das Produkt wird gedruckt.", translation: "Продукт друкується." },
      { sentence: "Das Papier wird geschnitten.", translation: "Папір обрізається." }
    ],
    tasks: [
      "Вивчити формулу: wird + Partizip II.",
      "Прочитати 3 речення про Druck.",
      "Зробити тест.",
      "★ Сказати 2 речення про InDesign/PDF."
    ],
    quiz: [
      { id: "de-b1-passiv-q1", question: "Was ist Passiv?", options: ["Die Datei wird exportiert.", "Ich exportiere die Datei.", "Export Datei ich."], answer: "Die Datei wird exportiert." },
      { id: "de-b1-passiv-q2", question: "Was bedeutet 'wird gedruckt'?", options: ["друкується", "малюється", "зберігається"], answer: "друкується" },
      { id: "de-b1-passiv-q3", question: "Passiv ist gut für:", options: ["Prozesse erklären", "nur Namen lernen", "Farben mischen"], answer: "Prozesse erklären" }
    ]
  },
  {
    id: "de-b2-konnektoren",
    level: "B2",
    title: "Konnektoren",
    subtitle: "obwohl, trotzdem, deshalb",
    goal: "Мета: зв'язувати думки у B2-курсі і говорити більш природно.",
    rules: [
      "Obwohl = хоча. У підрядному реченні дієслово стоїть в кінці.",
      "Trotzdem = попри це. Після trotzdem часто стоїть дієслово на позиції 2.",
      "Deshalb = тому. Воно показує наслідок, а не причину.",
      "Für B2 важливо не тільки знати слово, а й правильно будувати речення."
    ],
    examples: [
      { sentence: "Obwohl das Layout einfach ist, wirkt es professionell.", translation: "Хоча макет простий, він виглядає професійно." },
      { sentence: "Das Bild ist dunkel. Trotzdem passt es zur Stimmung.", translation: "Зображення темне. Попри це воно підходить до настрою." },
      { sentence: "Die Datei ist zu groß. Deshalb komprimiere ich die Bilder.", translation: "Файл занадто великий. Тому я стискаю зображення." }
    ],
    tasks: [
      "Вивчити різницю: obwohl = хоча, trotzdem = попри це, deshalb = тому.",
      "Прочитати 3 приклади вголос.",
      "Знайти в одному B2-тексті 3 Konnektoren.",
      "★ Сказати усно одне речення про дизайн з obwohl."
    ],
    quiz: [
      { id: "de-b2-konnektoren-q1", question: "Was bedeutet 'obwohl'?", options: ["хоча", "тому", "без"], answer: "хоча" },
      { id: "de-b2-konnektoren-q2", question: "Was ist richtig?", options: ["Obwohl das Layout einfach ist, wirkt es professionell.", "Obwohl ist das Layout einfach, wirkt es professionell.", "Obwohl das Layout ist einfach, wirkt es professionell."], answer: "Obwohl das Layout einfach ist, wirkt es professionell." },
      { id: "de-b2-konnektoren-q3", question: "Deshalb zeigt:", options: ["Folge / наслідок", "Gegensatz / протилежність", "Ort / місце"], answer: "Folge / наслідок" }
    ]
  },
  {
    id: "de-b2-lesen-hoeren",
    level: "B2",
    title: "Lesen und Hören",
    subtitle: "B2 Kurs Training",
    goal: "Мета: тренувати курс B2 без перевантаження: читання, слухання, нові слова і короткий переказ.",
    rules: [
      "Lesen: спочатку прочитай заголовок і підзаголовки, потім шукай головну думку.",
      "Hören: перший раз слухай загальний зміст, другий раз шукай деталі.",
      "Neue Wörter: записуй тільки важливі слова, не всі підряд.",
      "Zusammenfassung: після тексту скажи 2-3 прості речення німецькою."
    ],
    examples: [
      { sentence: "Der Text handelt von digitaler Kommunikation.", translation: "Текст про цифрову комунікацію." },
      { sentence: "Die wichtigste Information ist, dass Datenschutz beachtet werden muss.", translation: "Найважливіша інформація: треба враховувати захист даних." },
      { sentence: "Ich habe fünf neue Wörter gelernt.", translation: "Я вивчила п'ять нових слів." }
    ],
    tasks: [
      "1 короткий B2-текст прочитати і підкреслити 5 важливих слів.",
      "1 аудіо послухати двічі: перший раз загально, другий раз з нотатками.",
      "Записати 5 нових слів у Wörterbuch.",
      "★ Усно зробити 2 речення: Der Text handelt von..."
    ],
    quiz: [
      { id: "de-b2-lesen-q1", question: "Beim ersten Hören soll man zuerst:", options: ["den allgemeinen Sinn verstehen", "jedes Wort übersetzen", "sofort alles schreiben"], answer: "den allgemeinen Sinn verstehen" },
      { id: "de-b2-lesen-q2", question: "Was ist eine Zusammenfassung?", options: ["короткий переказ", "повний переклад", "список артиклів"], answer: "короткий переказ" },
      { id: "de-b2-lesen-q3", question: "Neue Wörter soll man:", options: ["kurz notieren und mit Beispiel lernen", "alle Wörter ohne Kontext schreiben", "nie wiederholen"], answer: "kurz notieren und mit Beispiel lernen" }
    ]
  },
  {
    id: "de-b1-diktat",
    level: "B1",
    title: "Diktat Training",
    subtitle: "1-2x pro Woche",
    goal: "Мета: писати від руки, тренувати Rechtschreibung і потім перевіряти себе.",
    rules: [
      "Один диктант має бути короткий: 4-6 речень.",
      "Пиши від руки, не на комп'ютері.",
      "Після написання перевір великі літери, артиклі, дієслова і коми.",
      "Для старту підходить рівень 5-7 класу: не надто складно, але корисно."
    ],
    examples: [
      { sentence: "Ich schreibe den Text zuerst ohne Hilfe.", translation: "Спочатку я пишу текст без допомоги." },
      { sentence: "Danach vergleiche ich meine Version mit dem Original.", translation: "Потім я порівнюю свою версію з оригіналом." },
      { sentence: "Ich markiere meine Fehler mit einer Farbe.", translation: "Я позначаю свої помилки кольором." }
    ],
    tasks: [
      "1 раз на тиждень написати Diktat 1 від руки.",
      "Другий раз optional: короткий дизайн-диктант.",
      "Після перевірки записати 3 помилки, які повторюються.",
      "★ Одне речення з диктанту прочитати вголос."
    ],
    quiz: [
      { id: "de-b1-diktat-q1", question: "Diktat soll man hier schreiben:", options: ["mit der Hand", "nur im Kopf", "nur als Audio"], answer: "mit der Hand" },
      { id: "de-b1-diktat-q2", question: "Was prüft man danach?", options: ["Großschreibung, Artikel, Verben, Kommas", "nur Farbe", "nur Dateiname"], answer: "Großschreibung, Artikel, Verben, Kommas" },
      { id: "de-b1-diktat-q3", question: "Wie oft pro Woche?", options: ["1-2 Mal", "jeden Tag 3 Stunden", "nie"], answer: "1-2 Mal" }
    ]
  }
];

export const englishTopics: PracticeTopic[] = [
  {
    id: "en-a1-be",
    level: "A1",
    title: "Verb to be",
    subtitle: "am / is / are",
    goal: "Goal: say who you are and what something is.",
    rules: [
      "I am = I'm.",
      "He/she/it is = he's / she's / it's.",
      "You/we/they are = you're / we're / they're.",
      "Negative: I am not, she is not, they are not."
    ],
    examples: [
      { sentence: "I am a designer.", translation: "Я дизайнерка." },
      { sentence: "The file is ready.", translation: "Файл готовий." },
      { sentence: "We are at work.", translation: "Ми на роботі." }
    ],
    tasks: [
      "Learn: I am, you are, he/she/it is.",
      "Read 3 examples aloud.",
      "Do the mini-test.",
      "★ Say 2 sentences about yourself."
    ],
    quiz: [
      { id: "en-a1-be-q1", question: "Choose the correct sentence.", options: ["I am a designer.", "I is a designer.", "I are a designer."], answer: "I am a designer." },
      { id: "en-a1-be-q2", question: "The file ___ ready.", options: ["is", "are", "am"], answer: "is" },
      { id: "en-a1-be-q3", question: "Переклад: 'We are at work.'", options: ["Ми на роботі.", "Я вдома.", "Вона працює."], answer: "Ми на роботі." }
    ]
  },
  {
    id: "en-a1-present-simple",
    level: "A1",
    title: "Present Simple",
    subtitle: "regular actions",
    goal: "Goal: speak about routine and facts.",
    rules: [
      "I/you/we/they work.",
      "He/she/it works: add -s.",
      "Negative: I do not work, she does not work.",
      "Question: Do you work? Does she work?"
    ],
    examples: [
      { sentence: "I work with Figma.", translation: "Я працюю з Figma." },
      { sentence: "She creates logos.", translation: "Вона створює логотипи." },
      { sentence: "Do you use WordPress?", translation: "Ти використовуєш WordPress?" }
    ],
    tasks: [
      "Learn: he/she/it + -s.",
      "Read examples aloud.",
      "Do the mini-test.",
      "★ Say one sentence about work."
    ],
    quiz: [
      { id: "en-a1-present-q1", question: "Choose the correct sentence.", options: ["She creates logos.", "She create logos.", "She creating logos."], answer: "She creates logos." },
      { id: "en-a1-present-q2", question: "Question form:", options: ["Do you use WordPress?", "You use WordPress?", "Does you use WordPress?"], answer: "Do you use WordPress?" },
      { id: "en-a1-present-q3", question: "Negative:", options: ["I do not work today.", "I not work today.", "I does not work today."], answer: "I do not work today." }
    ]
  },
  {
    id: "en-a1-questions",
    level: "A1",
    title: "Question Words",
    subtitle: "what, where, when, why",
    goal: "Goal: ask simple questions.",
    rules: [
      "What = що.",
      "Where = де.",
      "When = коли.",
      "Why = чому."
    ],
    examples: [
      { sentence: "What is your name?", translation: "Як тебе звати?" },
      { sentence: "Where is the file?", translation: "Де файл?" },
      { sentence: "Why do you need this logo?", translation: "Чому тобі потрібен цей логотип?" }
    ],
    tasks: [
      "Learn 4 question words.",
      "Read 3 questions aloud.",
      "Do the mini-test.",
      "★ Ask one question about a client project."
    ],
    quiz: [
      { id: "en-a1-questions-q1", question: "What means 'where'?", options: ["де", "що", "коли"], answer: "де" },
      { id: "en-a1-questions-q2", question: "Choose the correct question.", options: ["Where is the file?", "Where the file is?", "Is where the file?"], answer: "Where is the file?" },
      { id: "en-a1-questions-q3", question: "Why = ?", options: ["чому", "коли", "де"], answer: "чому" }
    ]
  },
  {
    id: "en-a2-past-simple",
    level: "A2",
    title: "Past Simple",
    subtitle: "finished actions",
    goal: "Goal: say what happened yesterday or last week.",
    rules: [
      "Regular verbs: work -> worked, design -> designed.",
      "Irregular verbs: go -> went, make -> made.",
      "Negative: did not + base verb.",
      "Question: Did you...?"
    ],
    examples: [
      { sentence: "I designed a flyer yesterday.", translation: "Я вчора зробила дизайн флаєра." },
      { sentence: "I made a moodboard.", translation: "Я зробила moodboard." },
      { sentence: "Did you finish the website?", translation: "Ти закінчила сайт?" }
    ],
    tasks: [
      "Learn: did + base verb.",
      "Read 3 examples.",
      "Do the mini-test.",
      "★ Say what you did yesterday."
    ],
    quiz: [
      { id: "en-a2-past-q1", question: "Choose the correct sentence.", options: ["I designed a flyer.", "I design yesterday a flyer.", "I did designed a flyer."], answer: "I designed a flyer." },
      { id: "en-a2-past-q2", question: "Question form:", options: ["Did you finish the website?", "Finished you the website?", "Did you finished the website?"], answer: "Did you finish the website?" },
      { id: "en-a2-past-q3", question: "make in past simple:", options: ["made", "maked", "makes"], answer: "made" }
    ]
  },
  {
    id: "en-a2-going-to",
    level: "A2",
    title: "Going to",
    subtitle: "plans",
    goal: "Goal: talk about plans.",
    rules: [
      "I am going to + verb.",
      "She is going to + verb.",
      "We are going to + verb.",
      "Use it for plans and intentions."
    ],
    examples: [
      { sentence: "I am going to create a logo.", translation: "Я збираюся створити логотип." },
      { sentence: "We are going to build a website.", translation: "Ми збираємося зробити сайт." },
      { sentence: "She is going to send the file.", translation: "Вона збирається надіслати файл." }
    ],
    tasks: [
      "Learn the formula: am/is/are going to + verb.",
      "Read 3 examples.",
      "Do the mini-test.",
      "★ Say one plan for this week."
    ],
    quiz: [
      { id: "en-a2-going-q1", question: "Choose the correct sentence.", options: ["I am going to create a logo.", "I going create a logo.", "I am going create a logo."], answer: "I am going to create a logo." },
      { id: "en-a2-going-q2", question: "She ___ going to send the file.", options: ["is", "are", "am"], answer: "is" },
      { id: "en-a2-going-q3", question: "Going to is used for:", options: ["plans", "only past", "articles"], answer: "plans" }
    ]
  },
  {
    id: "en-a2-comparatives",
    level: "A2",
    title: "Comparatives",
    subtitle: "bigger, better, more modern",
    goal: "Goal: compare two design options.",
    rules: [
      "Short adjectives: small -> smaller.",
      "Long adjectives: modern -> more modern.",
      "Good -> better.",
      "Use than: This logo is better than the first version."
    ],
    examples: [
      { sentence: "This layout is cleaner than the first one.", translation: "Цей макет чистіший, ніж перший." },
      { sentence: "The second logo is more modern.", translation: "Другий логотип сучасніший." },
      { sentence: "This version is better.", translation: "Ця версія краща." }
    ],
    tasks: [
      "Learn: better, cleaner, more modern.",
      "Read 3 design examples.",
      "Do the mini-test.",
      "★ Compare two of your designs in one sentence."
    ],
    quiz: [
      { id: "en-a2-comp-q1", question: "good ->", options: ["better", "gooder", "more good"], answer: "better" },
      { id: "en-a2-comp-q2", question: "modern ->", options: ["more modern", "moderner", "modernest"], answer: "more modern" },
      { id: "en-a2-comp-q3", question: "Choose the correct sentence.", options: ["This logo is better than the first version.", "This logo is better then the first version.", "This logo better than first."], answer: "This logo is better than the first version." }
    ]
  },
  {
    id: "en-a1-there-is",
    level: "A1",
    title: "There is / There are",
    subtitle: "опис макету",
    goal: "Goal: describe what is on a page, flyer or website.",
    rules: [
      "There is = є один предмет або один блок.",
      "There are = є кілька предметів або блоків.",
      "Question: Is there...? Are there...?",
      "Negative: There is no... / There are no..."
    ],
    examples: [
      { sentence: "There is a logo at the top.", translation: "Вгорі є логотип." },
      { sentence: "There are three sections on the website.", translation: "На сайті є три секції." },
      { sentence: "There is no contact form yet.", translation: "Форми контакту ще немає." }
    ],
    tasks: [
      "Describe one design with there is / there are.",
      "Read 3 examples aloud.",
      "Do the mini-test.",
      "★ Say what is missing in a website."
    ],
    quiz: [
      { id: "en-a1-there-q1", question: "Choose the correct sentence.", options: ["There is a logo.", "There are a logo.", "There a logo is."], answer: "There is a logo." },
      { id: "en-a1-there-q2", question: "Three sections:", options: ["There are three sections.", "There is three sections.", "There be three sections."], answer: "There are three sections." },
      { id: "en-a1-there-q3", question: "No form:", options: ["There is no form.", "There are no form.", "No there form."], answer: "There is no form." }
    ]
  },
  {
    id: "en-a1-can",
    level: "A1",
    title: "Can / Can't",
    subtitle: "уміння і можливості",
    goal: "Goal: say what you can do at work.",
    rules: [
      "Can + base verb: I can design.",
      "Negative: can't / cannot.",
      "Question: Can you...?",
      "After can there is no -s: She can create, not she can creates."
    ],
    examples: [
      { sentence: "I can create a logo.", translation: "Я можу створити логотип." },
      { sentence: "I can't finish the website today.", translation: "Я не можу закінчити сайт сьогодні." },
      { sentence: "Can you send the file?", translation: "Ти можеш надіслати файл?" }
    ],
    tasks: [
      "Learn: can + verb.",
      "Say 3 things you can do in design.",
      "Do the mini-test.",
      "★ Write one client sentence with can."
    ],
    quiz: [
      { id: "en-a1-can-q1", question: "Choose the correct sentence.", options: ["She can create a logo.", "She can creates a logo.", "She cans create a logo."], answer: "She can create a logo." },
      { id: "en-a1-can-q2", question: "Question:", options: ["Can you send the file?", "You can send the file?", "Do can you send?"], answer: "Can you send the file?" },
      { id: "en-a1-can-q3", question: "Can't means:", options: ["не можу", "буду", "мала"], answer: "не можу" }
    ]
  },
  {
    id: "en-a2-present-continuous",
    level: "A2",
    title: "Present Continuous",
    subtitle: "right now",
    goal: "Goal: say what is happening now.",
    rules: [
      "Form: am/is/are + verb-ing.",
      "I am working. She is designing. They are testing.",
      "Use it for actions happening now.",
      "Question: Are you working? Is she designing?"
    ],
    examples: [
      { sentence: "I am working on the flyer.", translation: "Я зараз працюю над флаєром." },
      { sentence: "She is testing the website.", translation: "Вона тестує сайт." },
      { sentence: "We are choosing colors.", translation: "Ми обираємо кольори." }
    ],
    tasks: [
      "Learn: am/is/are + -ing.",
      "Say what you are doing now.",
      "Do the mini-test.",
      "★ Compare Present Simple and Present Continuous."
    ],
    quiz: [
      { id: "en-a2-cont-q1", question: "Choose the correct sentence.", options: ["I am working on the flyer.", "I working on the flyer.", "I work now on flyer."], answer: "I am working on the flyer." },
      { id: "en-a2-cont-q2", question: "She ___ testing the website.", options: ["is", "are", "am"], answer: "is" },
      { id: "en-a2-cont-q3", question: "Present Continuous is for:", options: ["now", "only yesterday", "articles"], answer: "now" }
    ]
  },
  {
    id: "en-a2-emails",
    level: "A2",
    title: "Client Emails",
    subtitle: "simple work messages",
    goal: "Goal: write and understand simple client messages.",
    rules: [
      "Start politely: Hello / Dear...",
      "Use simple structure: reason, information, next step.",
      "Useful phrase: I am sending you...",
      "End politely: Best regards / Kind regards."
    ],
    examples: [
      { sentence: "I am sending you the first logo version.", translation: "Я надсилаю вам першу версію логотипу." },
      { sentence: "Could you please check the file?", translation: "Чи могли б ви перевірити файл?" },
      { sentence: "Thank you for your feedback.", translation: "Дякую за ваш feedback." }
    ],
    tasks: [
      "Read 3 client email phrases aloud.",
      "Choose one phrase for sending a file.",
      "Do the mini-test.",
      "★ Write a short message in your notebook."
    ],
    quiz: [
      { id: "en-a2-email-q1", question: "Which phrase is polite?", options: ["Could you please check the file?", "Check file now!", "File check you?"], answer: "Could you please check the file?" },
      { id: "en-a2-email-q2", question: "Best regards is used:", options: ["at the end", "only in the middle", "as a question"], answer: "at the end" },
      { id: "en-a2-email-q3", question: "Переклад: I am sending you the file.", options: ["Я надсилаю вам файл.", "Я видаляю файл.", "Я шукаю файл."], answer: "Я надсилаю вам файл." }
    ]
  },
  {
    id: "en-a2-irregular-verbs",
    level: "A2",
    title: "Irregular Verbs",
    subtitle: "go-went-gone",
    goal: "Goal: recognize the most useful irregular verbs for work and daily life.",
    rules: [
      "Irregular verbs do not use normal -ed in Past Simple.",
      "Use column 2 for Past Simple: I went, I made, I wrote.",
      "Use column 3 with have/has: I have made, she has written.",
      "Learn small groups, not the whole table at once."
    ],
    examples: [
      { sentence: "I made a moodboard.", translation: "Я зробила moodboard." },
      { sentence: "I wrote a short email.", translation: "Я написала короткий email." },
      { sentence: "I have sent the file.", translation: "Я надіслала файл." }
    ],
    tasks: [
      "Learn 5 verbs: be, do, go, make, write.",
      "Read the irregular verbs table.",
      "Do the mini-test.",
      "★ Say 3 things you did last week."
    ],
    quiz: [
      { id: "en-a2-irregular-q1", question: "go in Past Simple:", options: ["went", "goed", "gone"], answer: "went" },
      { id: "en-a2-irregular-q2", question: "make in Past Simple:", options: ["made", "maked", "make"], answer: "made" },
      { id: "en-a2-irregular-q3", question: "write - wrote -", options: ["written", "writed", "writing"], answer: "written" }
    ]
  }
];
