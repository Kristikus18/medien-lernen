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

export interface PracticeTopic {
  id: string;
  level: "A1" | "A2" | "B1";
  title: string;
  subtitle: string;
  goal: string;
  rules: string[];
  examples: PracticeExample[];
  tasks: string[];
  quiz: PracticeQuizQuestion[];
}

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
  }
];
