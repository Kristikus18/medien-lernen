import type {
  CustomerBrief,
  LearningModule,
  ModuleBlock,
  ProfessionalPhrase,
  QuizQuestion,
  TimeCategory,
  VocabularyWord
} from "@/lib/types";

export const modules: LearningModule[] = [
  {
    id: "module-1",
    number: 1,
    title: "Lune Bakery - Brand Identity",
    client: "Lune Bakery",
    field: "Französische Patisserie & Café",
    summary: "Logo, Moodboard, Wettbewerbsanalyse, Präsentation und Export für Web und Print.",
    software: ["Illustrator", "Photoshop", "Figma"],
    finalDeliverables: ["Logo Set", "Mockups", "PDF Presentation", "Behance Case"]
  },
  {
    id: "module-2",
    number: 2,
    title: "Medicus Praxis - Corporate Design",
    client: "Medicus Praxis",
    field: "Arztpraxis",
    summary: "Seriöse visuelle Identität mit Briefpapier, Visitenkarte und Social Preview.",
    software: ["Illustrator", "InDesign", "Photoshop"],
    finalDeliverables: ["Logo", "Business Card", "Letterhead", "Social Templates"]
  },
  {
    id: "module-3",
    number: 3,
    title: "Nova Jobs - Recruiting Brand",
    client: "Nova Jobs",
    field: "Jobvermittlung",
    summary: "Branding für eine moderne Plattform zur Jobsuche mit klarer Zielgruppenansprache.",
    software: ["Illustrator", "Figma", "Photoshop"],
    finalDeliverables: ["Logo", "Brand Board", "Landing Page", "LinkedIn Banner"]
  },
  {
    id: "module-4",
    number: 4,
    title: "Atelier Flora - Packaging Basics",
    client: "Atelier Flora",
    field: "Blumengeschäft",
    summary: "Logo, Farbpalette, Verpackungssticker und einfache Markenregeln.",
    software: ["Illustrator", "InDesign"],
    finalDeliverables: ["Logo", "Sticker", "Mini CD Manual", "Mockup"]
  },
  {
    id: "module-5",
    number: 5,
    title: "Kunstnacht Wien - Flyer A5",
    client: "Kunstnacht Wien",
    field: "Kulturveranstaltung",
    summary: "A5-Flyer mit Raster, Typografie, Bildbearbeitung und druckfertigem PDF.",
    software: ["InDesign", "Photoshop"],
    finalDeliverables: ["A5 Flyer", "PDF/X", "Print Preview", "Instagram Story"]
  },
  {
    id: "module-6",
    number: 6,
    title: "Green Studio - Broschüre",
    client: "Green Studio",
    field: "Interior Design",
    summary: "8-seitige Broschüre mit Satzspiegel, Bildkonzept und sauberer Druckvorstufe.",
    software: ["InDesign", "Photoshop"],
    finalDeliverables: ["8-page Brochure", "PDF/X", "Image Package", "Print Checklist"]
  },
  {
    id: "module-7",
    number: 7,
    title: "Mellow Yoga - Editorial Layout",
    client: "Mellow Yoga",
    field: "Yoga Studio",
    summary: "Editoriales Mini-Magazin mit Textstilen, Bildrhythmus und Leserführung.",
    software: ["InDesign", "Photoshop"],
    finalDeliverables: ["Magazine Spread", "Style Sheet", "PDF Export", "Mockup"]
  },
  {
    id: "module-8",
    number: 8,
    title: "Craft Market - Print Campaign",
    client: "Craft Market",
    field: "Handmade Markt",
    summary: "Plakat, Flyer und Roll-up als zusammenhängende Printkampagne.",
    software: ["Illustrator", "InDesign", "Photoshop"],
    finalDeliverables: ["Poster", "Flyer", "Roll-up", "Production Files"]
  },
  {
    id: "module-9",
    number: 9,
    title: "Maison Lune - Website Design",
    client: "Maison Lune",
    field: "Boutique Hotel",
    summary: "Responsive One-Page Website in Figma mit UI Komponenten und Prototyp.",
    software: ["Figma"],
    finalDeliverables: ["Wireframe", "UI Design", "Prototype", "Design Specs"]
  },
  {
    id: "module-10",
    number: 10,
    title: "Lernraum Kids - Elementor Site",
    client: "Lernraum Kids",
    field: "Nachhilfeinstitut",
    summary: "WordPress Website mit Elementor, Formular, Cookie Plugin und SEO Basics.",
    software: ["WordPress", "Elementor"],
    finalDeliverables: ["5 Pages", "Contact Form", "Cookie Banner", "SEO Setup"]
  },
  {
    id: "module-11",
    number: 11,
    title: "Studio Frame - HTML CSS Landing Page",
    client: "Studio Frame",
    field: "Fotostudio",
    summary: "Eine saubere Landing Page mit HTML, CSS, responsiven Sections und Assets.",
    software: ["HTML", "CSS", "Figma"],
    finalDeliverables: ["Landing Page", "Responsive Layout", "Asset Folder", "Code Review"]
  },
  {
    id: "module-12",
    number: 12,
    title: "Bella Casa - Web Relaunch",
    client: "Bella Casa",
    field: "Immobilienagentur",
    summary: "Website-Konzept mit Informationsarchitektur, Elementor Umsetzung und Performance Check.",
    software: ["Figma", "WordPress", "Elementor"],
    finalDeliverables: ["Sitemap", "Wireframes", "WordPress Pages", "Plugin Setup"]
  },
  {
    id: "module-13",
    number: 13,
    title: "Sound & Motion - Audiovisual Basics",
    client: "Sound & Motion",
    field: "Eventagentur",
    summary: "Kurzes Produktvideo, Storyboard, Exportformate und einfache Motion Assets.",
    software: ["Premiere Pro", "After Effects"],
    finalDeliverables: ["Storyboard", "30s Video", "Export Presets", "Thumbnail"]
  },
  {
    id: "module-14",
    number: 14,
    title: "Café Nord - Commercial Project",
    client: "Café Nord",
    field: "Gastronomie",
    summary: "Kompletter Mini-Auftrag von Briefing bis Kundendateien und Abschlusspräsentation.",
    software: ["Illustrator", "InDesign", "Photoshop", "Figma"],
    finalDeliverables: ["Brand Set", "Menu", "Website Mockup", "Client ZIP"]
  },
  {
    id: "module-15",
    number: 15,
    title: "Portfolio Sprint - Behance & LinkedIn",
    client: "Krystyna Lozova",
    field: "Personal Branding",
    summary: "Case Study Struktur, Mockups, LinkedIn Profil und Bewerbungsportfolio.",
    software: ["Behance", "LinkedIn", "Figma"],
    finalDeliverables: ["Behance Case", "LinkedIn Banner", "Portfolio PDF", "CV Visual"]
  },
  {
    id: "module-16",
    number: 16,
    title: "LAP Simulation - Final Presentation",
    client: "Prüfungsvorbereitung",
    field: "Medienfachfrau LAP",
    summary: "Fachgespräch, Druckdaten, Präsentation, Zeitplan und finale Prüfungssimulation.",
    software: ["Adobe CC", "Figma", "WordPress"],
    finalDeliverables: ["Prüfungsmappe", "Fachwörter", "Mock Exam", "Reflection"]
  }
];

export const moduleOneBrief: CustomerBrief = {
  company: "Lune Bakery",
  industry: "Französische Patisserie & Café",
  targetGroup: "Frauen zwischen 25 und 45 Jahren, Familien und Touristen",
  request:
    "Ein elegantes, modernes und minimalistisches Logo mit einem dezenten Mondmotiv und einer warmen Atmosphäre.",
  avoid: "Cartoon-Stil, Neonfarben und kindliche Schriftarten."
};

export const moduleOneBlocks: ModuleBlock[] = [
  {
    key: "lernziele",
    title: "Lernziele",
    eyebrow: "Was du nach dem Modul kannst",
    items: [
      "Professionelles Vektorlogo erstellen und sauber exportieren.",
      "Wortmarke, Bildmarke und Bild-Wort-Marke einfach erklären.",
      "Konkurrenzanalyse und Moodboard für ein Kundenprojekt erstellen.",
      "Projekt auf Deutsch und Englisch kurz präsentieren."
    ]
  },
  {
    key: "kundenbrief",
    title: "Kundenbrief",
    eyebrow: "Client context",
    items: [
      "Firmenname: Lune Bakery.",
      "Branche: Französische Patisserie & Café.",
      "Zielgruppe: Frauen 25-45, Familien und Touristen.",
      "Wunsch: elegant, modern, minimalistisch, warmer Eindruck.",
      "Nicht verwenden: Cartoon-Stil, Neonfarben, kindliche Schrift."
    ]
  },
  {
    key: "theorie",
    title: "Theorie",
    eyebrow: "Prüfungsrelevante Grundlagen",
    items: [
      "RGB ist für digitale Medien, CMYK ist für Druckprodukte.",
      "Vektorgrafiken bleiben beim Skalieren scharf, Rastergrafiken bestehen aus Pixeln.",
      "Kontrast, Balance und Weißraum machen ein Logo ruhiger und lesbarer.",
      "Der goldene Schnitt hilft bei harmonischen Proportionen.",
      "Urheberrecht beachten: keine fremden Logos, Fonts oder Bilder ohne Lizenz verwenden.",
      "Wichtige Formate: AI, SVG, EPS, PDF, PNG und JPG."
    ]
  },
  {
    key: "lap",
    title: "Berufsschule / LAP Vorbereitung",
    eyebrow: "Fachgespräch",
    items: [
      "Ich kann erklären, warum ein Logo als Vektorgrafik erstellt wird.",
      "Ich kann begründen, warum CMYK für Druckdaten wichtig ist.",
      "Ich kann beschreiben, wie ich Kundenkorrekturen umsetze.",
      "Ich kann die finalen Dateiformate für Web und Print nennen."
    ]
  },
  {
    key: "research",
    title: "Research",
    eyebrow: "Konkurrenzanalyse",
    items: [
      "Mindestens drei Patisserien oder Cafés analysieren.",
      "Farben, Schriften, Stil und Zielgruppe vergleichen.",
      "Eine klare Differenzierung für Lune Bakery formulieren."
    ]
  },
  {
    key: "moodboard",
    title: "Moodboard",
    eyebrow: "Visual direction",
    items: [
      "5-8 Bildideen sammeln: Interior, Verpackung, Typografie, Farben.",
      "3-5 Farbtöne definieren.",
      "2 passende Schriftstile testen."
    ]
  },
  {
    key: "sketches",
    title: "Sketches",
    eyebrow: "Ideenentwicklung",
    items: [
      "Mindestens 10 schnelle Logo-Skizzen zeichnen.",
      "3 Favoriten auswählen und begründen.",
      "Eine Version in Illustrator sauber nachbauen."
    ]
  },
  {
    key: "software",
    title: "Software Tools",
    eyebrow: "Illustrator Workflow",
    items: [
      "Artboards und Ebenen sauber benennen.",
      "Formen mit Pathfinder und Shape Builder erstellen.",
      "Konturen und Flächen korrekt einsetzen.",
      "Dateien mit klarer Ordnerstruktur exportieren."
    ]
  },
  {
    key: "ai",
    title: "AI Workflow",
    eyebrow: "Kostenlos und unterstützend",
    items: [
      "AI nur für Recherche, Namensideen, Moodboard-Wörter und Präsentationstexte nutzen.",
      "Keine fremden Logos direkt kopieren.",
      "Prompts und Entscheidungen kurz dokumentieren."
    ]
  },
  {
    key: "project",
    title: "Praktischer Projektauftrag",
    eyebrow: "Portfolio-ready",
    items: [
      "Erstelle 1-3 Logoentwürfe für Lune Bakery.",
      "Wähle eine finale Richtung und erstelle ein Logo Set.",
      "Erstelle Mockups: Coffee Cup, Paper Bag, Shop Sign und Instagram Post.",
      "Baue daraus eine kleine Behance Case Study."
    ]
  },
  {
    key: "correction",
    title: "Kundenkorrektur Simulation",
    eyebrow: "Client feedback",
    items: [
      "Kunde wünscht: Mondmotiv dezenter machen.",
      "Kunde wünscht: Schrift etwas hochwertiger wirken lassen.",
      "Kunde wünscht: eine Schwarz-Weiß-Version sehen."
    ]
  },
  {
    key: "reflection",
    title: "Reflection",
    eyebrow: "Deutsch + Ukrainisch",
    items: [
      "Was habe ich gelernt? - Що я вивчила?",
      "Was war schwierig? - Що було складно?",
      "Was ist mir gut gelungen? - Що вийшло добре?",
      "Was mache ich beim nächsten Projekt anders? - Що я зроблю інакше наступного разу?"
    ]
  },
  {
    key: "competencies",
    title: "Kompetenzen aus der Ausbildung",
    eyebrow: "Medienfachfrau",
    items: [
      "Kundenbriefing verstehen und gestalterisch umsetzen.",
      "Gestaltungsentwürfe entwickeln und präsentieren.",
      "Digitale und druckfähige Dateien korrekt vorbereiten.",
      "Eigene Entscheidungen fachlich begründen."
    ]
  }
];

export const moduleOneDeliverables = [
  "Logo AI",
  "Logo SVG",
  "Logo EPS",
  "Logo PDF",
  "Farbige PNG-Version",
  "Schwarze PNG-Version",
  "Weiße PNG-Version",
  "JPG Preview",
  "Business Card",
  "Coffee Cup Mockup",
  "Paper Bag Mockup",
  "Shop Sign Mockup",
  "Instagram Post",
  "Behance Case",
  "PDF Presentation",
  "ZIP für den Kunden"
];

export const moduleOneQualityChecks = [
  "Logo funktioniert im kleinen Format.",
  "Logo funktioniert in Schwarz-Weiß.",
  "Alle Texte sind geprüft.",
  "Keine Rasterelemente im Vektorlogo.",
  "RGB-Version ist fertig.",
  "CMYK-Version ist fertig.",
  "SVG öffnet sich korrekt.",
  "PDF wurde korrekt erstellt.",
  "Schriften sind bei Bedarf in Pfade umgewandelt.",
  "Dateinamen sind klar und verständlich.",
  "Keine unnötigen Objekte außerhalb der Zeichenfläche.",
  "Alle Mockup-Dateien sind geprüft.",
  "Kundenpaket ist bereit."
];

export const timeCategories: TimeCategory[] = [
  "Research",
  "Moodboard",
  "Sketches",
  "Illustrator",
  "Photoshop",
  "Mockups",
  "Presentation",
  "Language Learning",
  "Theory",
  "Corrections"
];

export const seedVocabulary: VocabularyWord[] = [
  {
    id: "logo",
    german: "Logo",
    article: "das",
    plural: "die Logos",
    ukrainian: "логотип",
    english: "logo",
    simpleGerman: "Ein Logo ist ein Zeichen für eine Marke oder ein Unternehmen.",
    exampleGerman: "Das Logo von Lune Bakery wirkt elegant und ruhig.",
    exampleUkrainian: "Логотип Lune Bakery виглядає елегантно і спокійно.",
    category: "Brand Identity",
    moduleId: "module-1",
    status: "Neu",
    difficulty: "A1"
  },
  {
    id: "wortmarke",
    german: "Wortmarke",
    article: "die",
    plural: "die Wortmarken",
    ukrainian: "словесний логотип",
    english: "wordmark",
    simpleGerman: "Eine Wortmarke besteht hauptsächlich aus Text oder dem Namen.",
    exampleGerman: "Eine Wortmarke kann sehr klar und hochwertig wirken.",
    exampleUkrainian: "Словесний логотип може виглядати дуже чисто і дорого.",
    category: "Logo",
    moduleId: "module-1",
    status: "Neu",
    difficulty: "A2"
  },
  {
    id: "bildmarke",
    german: "Bildmarke",
    article: "die",
    plural: "die Bildmarken",
    ukrainian: "графічний знак",
    english: "brand symbol",
    simpleGerman: "Eine Bildmarke ist ein Symbol ohne Text.",
    exampleGerman: "Das Mondzeichen kann als Bildmarke verwendet werden.",
    exampleUkrainian: "Знак місяця можна використати як графічний знак.",
    category: "Logo",
    moduleId: "module-1",
    status: "Neu",
    difficulty: "A2"
  },
  {
    id: "bild-wort-marke",
    german: "Bild-Wort-Marke",
    article: "die",
    plural: "die Bild-Wort-Marken",
    ukrainian: "логотип із текстом і знаком",
    english: "combination mark",
    simpleGerman: "Eine Bild-Wort-Marke kombiniert Text und Symbol.",
    exampleGerman: "Für Lune Bakery passt eine dezente Bild-Wort-Marke.",
    exampleUkrainian: "Для Lune Bakery пасує стриманий логотип із текстом і знаком.",
    category: "Logo",
    moduleId: "module-1",
    status: "Neu",
    difficulty: "A2"
  },
  {
    id: "entwurf",
    german: "Entwurf",
    article: "der",
    plural: "die Entwürfe",
    ukrainian: "чернетка, дизайн-варіант",
    english: "draft",
    simpleGerman: "Ein Entwurf ist eine erste Designidee.",
    exampleGerman: "Ich habe drei Entwürfe für den Kunden erstellt.",
    exampleUkrainian: "Я створила три варіанти дизайну для клієнта.",
    category: "Workflow",
    moduleId: "module-1",
    status: "Neu",
    difficulty: "A2"
  },
  {
    id: "reinzeichnung",
    german: "Reinzeichnung",
    article: "die",
    plural: "die Reinzeichnungen",
    ukrainian: "фінальна чистова версія",
    english: "final artwork",
    simpleGerman: "Eine Reinzeichnung ist die saubere finale Datei für Produktion oder Druck.",
    exampleGerman: "Nach der Freigabe erstelle ich die Reinzeichnung.",
    exampleUkrainian: "Після підтвердження я створюю фінальну чистову версію.",
    category: "Workflow",
    moduleId: "module-1",
    status: "Neu",
    difficulty: "B1"
  },
  {
    id: "gestaltung",
    german: "Gestaltung",
    article: "die",
    plural: "die Gestaltungen",
    ukrainian: "оформлення, дизайн",
    english: "design",
    simpleGerman: "Gestaltung bedeutet, visuelle Elemente bewusst anzuordnen.",
    exampleGerman: "Die Gestaltung soll modern und warm wirken.",
    exampleUkrainian: "Дизайн має виглядати сучасно і тепло.",
    category: "Design",
    moduleId: "module-1",
    status: "Neu",
    difficulty: "A2"
  },
  {
    id: "typografie",
    german: "Typografie",
    article: "die",
    plural: "keine übliche Pluralform",
    ukrainian: "типографіка",
    english: "typography",
    simpleGerman: "Typografie ist die Gestaltung von Schrift und Text.",
    exampleGerman: "Die Typografie muss gut lesbar sein.",
    exampleUkrainian: "Типографіка має бути добре читабельною.",
    category: "Typography",
    moduleId: "module-1",
    status: "Neu",
    difficulty: "A2"
  },
  {
    id: "schriftart",
    german: "Schriftart",
    article: "die",
    plural: "die Schriftarten",
    ukrainian: "тип шрифту",
    english: "typeface",
    simpleGerman: "Eine Schriftart ist ein bestimmtes Design von Buchstaben.",
    exampleGerman: "Ich wähle eine elegante Schriftart für die Marke.",
    exampleUkrainian: "Я обираю елегантний шрифт для бренду.",
    category: "Typography",
    moduleId: "module-1",
    status: "Neu",
    difficulty: "A2"
  },
  {
    id: "schriftschnitt",
    german: "Schriftschnitt",
    article: "der",
    plural: "die Schriftschnitte",
    ukrainian: "накреслення шрифту",
    english: "font style",
    simpleGerman: "Ein Schriftschnitt ist zum Beispiel Regular, Bold oder Italic.",
    exampleGerman: "Der fette Schriftschnitt betont die Überschrift.",
    exampleUkrainian: "Жирне накреслення підкреслює заголовок.",
    category: "Typography",
    moduleId: "module-1",
    status: "Neu",
    difficulty: "A2"
  },
  {
    id: "buchstabenabstand",
    german: "Buchstabenabstand",
    article: "der",
    plural: "die Buchstabenabstände",
    ukrainian: "відстань між літерами",
    english: "letter spacing",
    simpleGerman: "Der Buchstabenabstand beschreibt den Abstand zwischen Buchstaben.",
    exampleGerman: "Mehr Buchstabenabstand kann ein Logo hochwertiger wirken lassen.",
    exampleUkrainian: "Більша відстань між літерами може зробити логотип дорожчим на вигляд.",
    category: "Typography",
    moduleId: "module-1",
    status: "Neu",
    difficulty: "B1"
  },
  {
    id: "zeilenabstand",
    german: "Zeilenabstand",
    article: "der",
    plural: "die Zeilenabstände",
    ukrainian: "міжрядковий інтервал",
    english: "line spacing",
    simpleGerman: "Der Zeilenabstand ist der Abstand zwischen Textzeilen.",
    exampleGerman: "Ein guter Zeilenabstand verbessert die Lesbarkeit.",
    exampleUkrainian: "Хороший міжрядковий інтервал покращує читабельність.",
    category: "Typography",
    moduleId: "module-1",
    status: "Neu",
    difficulty: "A2"
  },
  {
    id: "laufweite",
    german: "Laufweite",
    article: "die",
    plural: "die Laufweiten",
    ukrainian: "загальна відстань між літерами",
    english: "tracking",
    simpleGerman: "Die Laufweite verändert den Abstand zwischen allen Buchstaben.",
    exampleGerman: "Ich erhöhe die Laufweite für ein ruhiges Logo.",
    exampleUkrainian: "Я збільшую відстань між літерами для спокійного логотипу.",
    category: "Typography",
    moduleId: "module-1",
    status: "Neu",
    difficulty: "B1"
  },
  {
    id: "lesbarkeit",
    german: "Lesbarkeit",
    article: "die",
    plural: "keine übliche Pluralform",
    ukrainian: "читабельність",
    english: "readability",
    simpleGerman: "Lesbarkeit bedeutet, dass Text leicht gelesen werden kann.",
    exampleGerman: "Die Lesbarkeit ist für Kundinnen und Kunden wichtig.",
    exampleUkrainian: "Читабельність важлива для клієнтів.",
    category: "Typography",
    moduleId: "module-1",
    status: "Neu",
    difficulty: "A2"
  },
  {
    id: "farbpalette",
    german: "Farbpalette",
    article: "die",
    plural: "die Farbpaletten",
    ukrainian: "кольорова палітра",
    english: "color palette",
    simpleGerman: "Eine Farbpalette ist eine Auswahl von Farben für ein Design.",
    exampleGerman: "Die Farbpalette wirkt warm und harmonisch.",
    exampleUkrainian: "Кольорова палітра виглядає тепло і гармонійно.",
    category: "Color",
    moduleId: "module-1",
    status: "Neu",
    difficulty: "A2"
  },
  {
    id: "farbton",
    german: "Farbton",
    article: "der",
    plural: "die Farbtöne",
    ukrainian: "відтінок",
    english: "hue",
    simpleGerman: "Der Farbton beschreibt die Grundfarbe, zum Beispiel Rot oder Blau.",
    exampleGerman: "Der warme Farbton passt zur Bäckerei.",
    exampleUkrainian: "Теплий відтінок пасує до пекарні.",
    category: "Color",
    moduleId: "module-1",
    status: "Neu",
    difficulty: "A2"
  },
  {
    id: "saettigung",
    german: "Sättigung",
    article: "die",
    plural: "die Sättigungen",
    ukrainian: "насиченість",
    english: "saturation",
    simpleGerman: "Sättigung beschreibt, wie kräftig eine Farbe wirkt.",
    exampleGerman: "Ich reduziere die Sättigung, damit die Farbe ruhiger wirkt.",
    exampleUkrainian: "Я зменшую насиченість, щоб колір виглядав спокійніше.",
    category: "Color",
    moduleId: "module-1",
    status: "Neu",
    difficulty: "B1"
  },
  {
    id: "helligkeit",
    german: "Helligkeit",
    article: "die",
    plural: "die Helligkeiten",
    ukrainian: "світлість",
    english: "brightness",
    simpleGerman: "Helligkeit beschreibt, wie hell oder dunkel eine Farbe ist.",
    exampleGerman: "Mehr Helligkeit macht die Farbe freundlicher.",
    exampleUkrainian: "Більша світлість робить колір дружнішим.",
    category: "Color",
    moduleId: "module-1",
    status: "Neu",
    difficulty: "A2"
  },
  {
    id: "kontrast",
    german: "Kontrast",
    article: "der",
    plural: "die Kontraste",
    ukrainian: "контраст",
    english: "contrast",
    simpleGerman: "Kontrast ist ein sichtbarer Unterschied zwischen Elementen.",
    exampleGerman: "Ein guter Kontrast macht das Logo besser lesbar.",
    exampleUkrainian: "Хороший контраст робить логотип краще читабельним.",
    category: "Design",
    moduleId: "module-1",
    status: "Neu",
    difficulty: "A2"
  },
  {
    id: "weissraum",
    german: "Weißraum",
    article: "der",
    plural: "die Weißräume",
    ukrainian: "вільний простір",
    english: "white space",
    simpleGerman: "Weißraum ist freier Platz im Design.",
    exampleGerman: "Weißraum lässt das Logo hochwertiger wirken.",
    exampleUkrainian: "Вільний простір робить логотип дорожчим на вигляд.",
    category: "Layout",
    moduleId: "module-1",
    status: "Neu",
    difficulty: "A2"
  },
  {
    id: "ausrichtung",
    german: "Ausrichtung",
    article: "die",
    plural: "die Ausrichtungen",
    ukrainian: "вирівнювання",
    english: "alignment",
    simpleGerman: "Ausrichtung beschreibt, wie Elemente zueinander stehen.",
    exampleGerman: "Die Ausrichtung sorgt für Ordnung im Design.",
    exampleUkrainian: "Вирівнювання створює порядок у дизайні.",
    category: "Layout",
    moduleId: "module-1",
    status: "Neu",
    difficulty: "A2"
  },
  {
    id: "vektorgrafik",
    german: "Vektorgrafik",
    article: "die",
    plural: "die Vektorgrafiken",
    ukrainian: "векторна графіка",
    english: "vector graphic",
    simpleGerman: "Eine Vektorgrafik besteht aus Linien, Kurven und Flächen.",
    exampleGerman: "Ein Logo sollte als Vektorgrafik erstellt werden.",
    exampleUkrainian: "Логотип потрібно створювати як векторну графіку.",
    category: "File Basics",
    moduleId: "module-1",
    status: "Neu",
    difficulty: "A2"
  },
  {
    id: "rastergrafik",
    german: "Rastergrafik",
    article: "die",
    plural: "die Rastergrafiken",
    ukrainian: "растрова графіка",
    english: "raster graphic",
    simpleGerman: "Eine Rastergrafik besteht aus Pixeln.",
    exampleGerman: "Fotos sind meistens Rastergrafiken.",
    exampleUkrainian: "Фотографії зазвичай є растровою графікою.",
    category: "File Basics",
    moduleId: "module-1",
    status: "Neu",
    difficulty: "A2"
  },
  {
    id: "aufloesung",
    german: "Auflösung",
    article: "die",
    plural: "die Auflösungen",
    ukrainian: "роздільна здатність",
    english: "resolution",
    simpleGerman: "Auflösung beschreibt, wie viele Bildpunkte ein Bild hat.",
    exampleGerman: "Für den Druck braucht man eine hohe Auflösung.",
    exampleUkrainian: "Для друку потрібна висока роздільна здатність.",
    category: "Print",
    moduleId: "module-1",
    status: "Neu",
    difficulty: "A2"
  },
  {
    id: "kontur",
    german: "Kontur",
    article: "die",
    plural: "die Konturen",
    ukrainian: "контур",
    english: "stroke",
    simpleGerman: "Eine Kontur ist eine Linie um eine Form.",
    exampleGerman: "Die Kontur darf im Logo nicht zu fein sein.",
    exampleUkrainian: "Контур у логотипі не має бути занадто тонким.",
    category: "Illustrator",
    moduleId: "module-1",
    status: "Neu",
    difficulty: "A2"
  },
  {
    id: "flaeche",
    german: "Fläche",
    article: "die",
    plural: "die Flächen",
    ukrainian: "заливка, площина",
    english: "fill",
    simpleGerman: "Eine Fläche ist der gefüllte Bereich einer Form.",
    exampleGerman: "Die Fläche ist warm beige gefärbt.",
    exampleUkrainian: "Заливка має теплий бежевий колір.",
    category: "Illustrator",
    moduleId: "module-1",
    status: "Neu",
    difficulty: "A2"
  },
  {
    id: "moodboard",
    german: "Moodboard",
    article: "das",
    plural: "die Moodboards",
    ukrainian: "дошка настрою",
    english: "moodboard",
    simpleGerman: "Ein Moodboard zeigt die visuelle Stimmung eines Projekts.",
    exampleGerman: "Das Moodboard zeigt warme Farben und elegante Formen.",
    exampleUkrainian: "Moodboard показує теплі кольори та елегантні форми.",
    category: "Research",
    moduleId: "module-1",
    status: "Neu",
    difficulty: "A2"
  },
  {
    id: "zielgruppe",
    german: "Zielgruppe",
    article: "die",
    plural: "die Zielgruppen",
    ukrainian: "цільова аудиторія",
    english: "target group",
    simpleGerman: "Eine Zielgruppe sind die Menschen, die erreicht werden sollen.",
    exampleGerman: "Die Zielgruppe sind Frauen, Familien und Touristen.",
    exampleUkrainian: "Цільова аудиторія - жінки, сім'ї та туристи.",
    category: "Research",
    moduleId: "module-1",
    status: "Neu",
    difficulty: "A2"
  },
  {
    id: "kundenauftrag",
    german: "Kundenauftrag",
    article: "der",
    plural: "die Kundenaufträge",
    ukrainian: "замовлення клієнта",
    english: "client order",
    simpleGerman: "Ein Kundenauftrag beschreibt, was der Kunde braucht.",
    exampleGerman: "Der Kundenauftrag ist ein neues Logo für Lune Bakery.",
    exampleUkrainian: "Замовлення клієнта - новий логотип для Lune Bakery.",
    category: "Client Work",
    moduleId: "module-1",
    status: "Neu",
    difficulty: "A2"
  },
  {
    id: "kundenbriefing",
    german: "Kundenbriefing",
    article: "das",
    plural: "die Kundenbriefings",
    ukrainian: "бриф клієнта",
    english: "client briefing",
    simpleGerman: "Ein Kundenbriefing enthält wichtige Informationen vom Kunden.",
    exampleGerman: "Im Kundenbriefing stehen Zielgruppe und Stilwunsch.",
    exampleUkrainian: "У брифі клієнта є цільова аудиторія та побажаний стиль.",
    category: "Client Work",
    moduleId: "module-1",
    status: "Neu",
    difficulty: "B1"
  },
  {
    id: "korrektur",
    german: "Korrektur",
    article: "die",
    plural: "die Korrekturen",
    ukrainian: "правка",
    english: "correction",
    simpleGerman: "Eine Korrektur ist eine Änderung nach Feedback.",
    exampleGerman: "Ich habe die Korrekturen des Kunden umgesetzt.",
    exampleUkrainian: "Я внесла правки клієнта.",
    category: "Client Work",
    moduleId: "module-1",
    status: "Neu",
    difficulty: "A2"
  },
  {
    id: "praesentation",
    german: "Präsentation",
    article: "die",
    plural: "die Präsentationen",
    ukrainian: "презентація",
    english: "presentation",
    simpleGerman: "Eine Präsentation zeigt und erklärt das Ergebnis.",
    exampleGerman: "In der Präsentation erkläre ich meine Designentscheidung.",
    exampleUkrainian: "У презентації я пояснюю своє дизайнерське рішення.",
    category: "Client Work",
    moduleId: "module-1",
    status: "Neu",
    difficulty: "A2"
  },
  {
    id: "dateiformat",
    german: "Dateiformat",
    article: "das",
    plural: "die Dateiformate",
    ukrainian: "формат файлу",
    english: "file format",
    simpleGerman: "Ein Dateiformat zeigt, wie eine Datei gespeichert ist.",
    exampleGerman: "SVG ist ein gutes Dateiformat für Weblogos.",
    exampleUkrainian: "SVG - хороший формат файлу для логотипів у вебі.",
    category: "File Basics",
    moduleId: "module-1",
    status: "Neu",
    difficulty: "A2"
  },
  {
    id: "export",
    german: "Export",
    article: "der",
    plural: "die Exporte",
    ukrainian: "експорт",
    english: "export",
    simpleGerman: "Beim Export wird eine Datei in einem bestimmten Format ausgegeben.",
    exampleGerman: "Der Export ist für Web und Print vorbereitet.",
    exampleUkrainian: "Експорт підготовлений для вебу та друку.",
    category: "File Basics",
    moduleId: "module-1",
    status: "Neu",
    difficulty: "A2"
  },
  {
    id: "druckdatei",
    german: "Druckdatei",
    article: "die",
    plural: "die Druckdateien",
    ukrainian: "файл для друку",
    english: "print file",
    simpleGerman: "Eine Druckdatei ist für die Produktion in der Druckerei vorbereitet.",
    exampleGerman: "Die Druckdatei wird im CMYK-Farbmodus exportiert.",
    exampleUkrainian: "Файл для друку експортується у колірному режимі CMYK.",
    category: "Print",
    moduleId: "module-1",
    status: "Neu",
    difficulty: "B1"
  },
  {
    id: "webversion",
    german: "Webversion",
    article: "die",
    plural: "die Webversionen",
    ukrainian: "версія для вебу",
    english: "web version",
    simpleGerman: "Eine Webversion ist für digitale Medien optimiert.",
    exampleGerman: "Die Webversion ist klein und lädt schnell.",
    exampleUkrainian: "Версія для вебу маленька і швидко завантажується.",
    category: "File Basics",
    moduleId: "module-1",
    status: "Neu",
    difficulty: "A2"
  },
  {
    id: "skalierbarkeit",
    german: "Skalierbarkeit",
    article: "die",
    plural: "keine übliche Pluralform",
    ukrainian: "масштабованість",
    english: "scalability",
    simpleGerman: "Skalierbarkeit bedeutet, dass ein Design in verschiedenen Größen funktioniert.",
    exampleGerman: "Skalierbarkeit ist bei Logos besonders wichtig.",
    exampleUkrainian: "Масштабованість особливо важлива для логотипів.",
    category: "Logo",
    moduleId: "module-1",
    status: "Neu",
    difficulty: "B1"
  },
  {
    id: "markenzeichen",
    german: "Markenzeichen",
    article: "das",
    plural: "die Markenzeichen",
    ukrainian: "фірмовий знак",
    english: "trademark sign",
    simpleGerman: "Ein Markenzeichen macht eine Marke wiedererkennbar.",
    exampleGerman: "Der Mond wird zum Markenzeichen von Lune Bakery.",
    exampleUkrainian: "Місяць стає фірмовим знаком Lune Bakery.",
    category: "Brand Identity",
    moduleId: "module-1",
    status: "Neu",
    difficulty: "B1"
  },
  {
    id: "erscheinungsbild",
    german: "Erscheinungsbild",
    article: "das",
    plural: "die Erscheinungsbilder",
    ukrainian: "візуальний образ",
    english: "visual appearance",
    simpleGerman: "Das Erscheinungsbild beschreibt, wie eine Marke nach außen wirkt.",
    exampleGerman: "Das Erscheinungsbild soll ruhig und hochwertig sein.",
    exampleUkrainian: "Візуальний образ має бути спокійним і якісним.",
    category: "Brand Identity",
    moduleId: "module-1",
    status: "Neu",
    difficulty: "B1"
  },
  {
    id: "markenidentitaet",
    german: "Markenidentität",
    article: "die",
    plural: "die Markenidentitäten",
    ukrainian: "ідентичність бренду",
    english: "brand identity",
    simpleGerman: "Die Markenidentität beschreibt, wofür eine Marke steht.",
    exampleGerman: "Die Markenidentität von Lune Bakery ist elegant und warm.",
    exampleUkrainian: "Ідентичність бренду Lune Bakery елегантна і тепла.",
    category: "Brand Identity",
    moduleId: "module-1",
    status: "Neu",
    difficulty: "B1"
  }
];

export const professionalPhrases: ProfessionalPhrase[] = [
  {
    id: "phrase-1",
    german: "Ich habe drei unterschiedliche Logoentwürfe erstellt.",
    ukrainian: "Я створила три різні варіанти логотипу.",
    english: "I created three different logo drafts.",
    category: "Presentation",
    status: "Neu"
  },
  {
    id: "phrase-2",
    german: "Die Farbpalette wirkt warm und harmonisch.",
    ukrainian: "Кольорова палітра виглядає тепло і гармонійно.",
    english: "The color palette feels warm and harmonious.",
    category: "Color",
    status: "Neu"
  },
  {
    id: "phrase-3",
    german: "Die Typografie ist modern und gut lesbar.",
    ukrainian: "Типографіка сучасна і добре читабельна.",
    english: "The typography is modern and easy to read.",
    category: "Typography",
    status: "Neu"
  },
  {
    id: "phrase-4",
    german: "Das Logo funktioniert auch in Schwarz-Weiß.",
    ukrainian: "Логотип працює також у чорно-білому варіанті.",
    english: "The logo also works in black and white.",
    category: "Logo",
    status: "Neu"
  },
  {
    id: "phrase-5",
    german: "Möchten Sie Änderungen am Entwurf vornehmen?",
    ukrainian: "Чи хочете ви внести зміни до макету?",
    english: "Would you like to make changes to the draft?",
    category: "Client Communication",
    status: "Neu"
  },
  {
    id: "phrase-6",
    german: "Ich habe Ihre Korrekturen umgesetzt.",
    ukrainian: "Я внесла ваші правки.",
    english: "I implemented your corrections.",
    category: "Client Communication",
    status: "Neu"
  },
  {
    id: "phrase-7",
    german: "Die finale Version steht zum Export bereit.",
    ukrainian: "Фінальна версія готова до експорту.",
    english: "The final version is ready for export.",
    category: "Export",
    status: "Neu"
  },
  {
    id: "phrase-8",
    german: "Bitte überprüfen Sie noch einmal alle Angaben.",
    ukrainian: "Будь ласка, ще раз перевірте всі дані.",
    english: "Please check all details once again.",
    category: "Client Communication",
    status: "Neu"
  },
  {
    id: "phrase-9",
    german: "Der Entwurf wurde für Web und Print optimiert.",
    ukrainian: "Макет оптимізовано для вебу та друку.",
    english: "The draft was optimized for web and print.",
    category: "Export",
    status: "Neu"
  },
  {
    id: "phrase-10",
    german: "Die Dateien sind in verschiedenen Formaten verfügbar.",
    ukrainian: "Файли доступні у різних форматах.",
    english: "The files are available in different formats.",
    category: "Export",
    status: "Neu"
  }
];

export const quizQuestions: QuizQuestion[] = [
  {
    id: "q1",
    type: "single",
    question: "Wofür verwendet man CMYK?",
    options: ["Für Druckprodukte", "Für reine Bildschirmdarstellung", "Für Audioexport"],
    answer: "Für Druckprodukte",
    help: "CMYK wird für Druckdaten verwendet."
  },
  {
    id: "q2",
    type: "article",
    question: "Welcher Artikel passt zu Wortmarke?",
    answer: "die",
    help: "Es heißt: die Wortmarke."
  },
  {
    id: "q3",
    type: "trueFalse",
    question: "Eine Vektorgrafik bleibt beim Vergrößern scharf.",
    answer: "richtig",
    help: "Vektorgrafiken bestehen aus Linien, Kurven und Flächen."
  },
  {
    id: "q4",
    type: "translation",
    question: "Übersetze: der Entwurf",
    answer: "дизайн-варіант",
    help: "Auch: чернетка або перший варіант дизайну."
  },
  {
    id: "q5",
    type: "short",
    question: "Warum ist Weißraum wichtig?",
    answer: "Er verbessert die Lesbarkeit und macht das Design ruhiger.",
    help: "Eine kurze Antwort reicht: Weißraum schafft Ordnung und Lesbarkeit."
  }
];
