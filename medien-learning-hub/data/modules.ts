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

export interface ModulePlan {
  brief: CustomerBrief;
  ausbildungFocus: string[];
  theory: string[];
  fachwoerter: string[];
  fachgespraech: string[];
  practice: string[];
  drawing: string[];
  report: string[];
  deliverables: string[];
  quality: string[];
}

export interface ClientVariant {
  company: string;
  industry: string;
  wantsDe: string;
  wantsUa: string;
  orderDe: string;
  orderUa: string;
  deliverables: string[];
}

export interface BriefTranslation {
  industry: string;
  targetGroup: string;
  request: string;
  avoid: string;
  pages?: string;
}

export const primaryClientBriefTranslations: Record<string, BriefTranslation> = {
  "module-1": {
    industry: "Французька патисерія і кафе.",
    targetGroup: "Жінки 25-45 років, сім'ї та туристи.",
    request: "Потрібен елегантний, сучасний і мінімалістичний логотип з легким мотивом місяця та теплою атмосферою.",
    avoid: "Не використовувати мультяшний стиль, неонові кольори та дитячі шрифти."
  },
  "module-2": {
    industry: "Лікарська практика.",
    targetGroup: "Пацієнти різного віку, особливо сім'ї та старші люди.",
    request: "Потрібен серйозний і спокійний corporate design з логотипом, візиткою, фірмовим бланком і social preview.",
    avoid: "Не використовувати занадто грайливі кольори, нечіткий шрифт і медичні кліше без ідеї."
  },
  "module-3": {
    industry: "Фірма з пошуку роботи.",
    targetGroup: "Молоді дорослі, люди на старті кар'єри та ті, хто хоче змінити професійний напрямок.",
    request: "Потрібен сучасний recruiting branding з чітким зверненням до цільової групи, landing page і LinkedIn banner.",
    avoid: "Не робити дизайн занадто холодним, не використовувати нечіткі call-to-actions і типові stock images."
  },
  "module-4": {
    industry: "Квітковий магазин.",
    targetGroup: "Люди, які шукають якісні квіти, маленькі подарунки і гарне пакування.",
    request: "Потрібен природний branding з пакувальним sticker, етикеткою і маленьким CD Manual.",
    avoid: "Не робити дешевий декоративний стиль, забагато кольорів або деталі, які важко друкувати."
  },
  "module-5": {
    industry: "Культурна подія.",
    targetGroup: "Дорослі, студенти, туристи і локальні фанати культури, які цікавляться мистецтвом.",
    request: "Потрібен A5 flyer з сильною типографікою, обробкою зображення і готовим print PDF.",
    avoid: "Не робити хаотичну ієрархію, занадто дрібну інформацію і файл без Beschnitt."
  },
  "module-6": {
    industry: "Interior Design.",
    targetGroup: "Приватні клієнти і маленькі офіси, які шукають сталий interior design.",
    request: "Потрібна брошура на 8 сторінок із Satzspiegel, концепцією зображень, чистою сіткою і Druckvorstufe.",
    avoid: "Не робити перевантажені сторінки, погану якість фото і нерівні відступи."
  },
  "module-7": {
    industry: "Yoga Studio.",
    targetGroup: "Люди, які шукають спокій, здоров'я і більш усвідомлений щоденний ритм.",
    request: "Потрібен editorial magazine spread з text styles, ритмом зображень і спокійною Leserführung.",
    avoid: "Не робити перевантажені сторінки, занадто декоративний шрифт і погану читабельність."
  },
  "module-8": {
    industry: "Handmade market.",
    targetGroup: "Креативні люди, сім'ї та відвідувачі локальних маркетів.",
    request: "Потрібна цілісна print campaign з poster, flyer і roll-up.",
    avoid: "Не робити різний стиль для кожного носія, забагато шрифтів і нечіткі print formats."
  },
  "module-9": {
    industry: "Boutique hotel.",
    targetGroup: "Мандрівники, пари і гості, які цікавляться дизайном та шукають особливий готель.",
    request: "Потрібен responsive one-page website у Figma з wireframe, UI components і prototype.",
    avoid: "Не робити нечітку навігацію, занадто маленькі кнопки і декоративні елементи без функції.",
    pages: "Одна сторінка: Start, Zimmer, Galerie, Angebote, Kontakt."
  },
  "module-10": {
    industry: "Репетиторський центр.",
    targetGroup: "Батьки школярів і підлітки, які шукають Nachhilfe.",
    request: "Потрібен WordPress website з Elementor, contact form, cookie banner і SEO basics.",
    avoid: "Не робити нечітку структуру сторінок, не забувати Impressum/Datenschutz, не використовувати занадто важкі картинки.",
    pages: "5 сторінок: Start, Kurse, Preise, Über uns, Kontakt."
  },
  "module-11": {
    industry: "Фотостудія.",
    targetGroup: "Приватні особи, пари і маленькі компанії, яким потрібні професійні фото.",
    request: "Потрібна проста responsive landing page з HTML, CSS, чіткими секціями і чистою папкою assets.",
    avoid: "Не робити фокус на складному JavaScript, не залишати хаотичний код і занадто важкі картинки.",
    pages: "Одна сторінка: Hero, Leistungen, Galerie, Preise, Kontakt."
  },
  "module-12": {
    industry: "Агенція нерухомості.",
    targetGroup: "Люди, які хочуть купити, продати або орендувати нерухомість.",
    request: "Потрібен website relaunch з information architecture, Figma wireframes, Elementor implementation і plugin setup.",
    avoid: "Не робити нечітку структуру об'єктів, не пропускати search function і не залишати погану performance.",
    pages: "6 сторінок: Start, Immobilien, Kaufen, Verkaufen, Über uns, Kontakt."
  },
  "module-13": {
    industry: "Event agency.",
    targetGroup: "Компанії та організатори подій, яким потрібні короткі event videos і social clips.",
    request: "Потрібне 30-секундне відео зі storyboard, монтажем, export formats і thumbnail.",
    avoid: "Не робити занадто довгі clips, поганий звук і неправильний format для social media."
  },
  "module-14": {
    industry: "Гастрономія / кафе.",
    targetGroup: "Локальні гості, студенти і люди, які шукають спокійне кафе для роботи.",
    request: "Потрібен повний mini-Auftrag: branding, menu, website mockup, customer files і final presentation.",
    avoid: "Не здавати неповні файли, дизайн без пояснення і носії, які не виглядають як одна система."
  },
  "module-15": {
    industry: "Personal branding.",
    targetGroup: "Ausbilder, Prüfungskommission, агенції і можливі роботодавці.",
    request: "Потрібен portfolio sprint з Behance case studies, LinkedIn profile, portfolio PDF і application documents.",
    avoid: "Не показувати тільки красиві картинки без процесу, пояснень і чіткої структури проєкту."
  },
  "module-16": {
    industry: "Підготовка до LAP Medienfachfrau.",
    targetGroup: "Prüfungskommission і Krystyna як кандидатка на іспиті.",
    request: "Потрібна LAP simulation з Fachgespräch, перевіркою Druckdaten, project presentation і final exam folder.",
    avoid: "Не вчити тільки напам'ять без пояснення, не залишати слабкі Druckbegriffe і не забувати приклади з власних проєктів."
  }
};

const reportTemplate = [
  "Was habe ich gemacht? - Напиши 3-5 речень про виконану роботу.",
  "Welche Programme habe ich benutzt? - Назви програму і конкретний інструмент.",
  "Welche Fachwörter habe ich gelernt? - Випиши 5-10 слів з перекладом.",
  "Was war schwierig? - Коротко опиши проблему і як ти її вирішила.",
  "Was kann ich auf Deutsch erklären? - Напиши 2 прості Prüfungssätze.",
  "Beweis / Datei / Link - Додай назву файлу, Figma/Behance/WordPress посилання або скриншот."
];

export const coreAusbildungProjectFlow = [
  "1. Moodboard - Sammle 6-10 Referenzen, Farben, Schriften und Bildsprache. Ausbildung: Stil begründen und visuelle Richtung zeigen.",
  "2. Logo - Entwirf 1-3 Logo-Versionen und finalisiere eine saubere Variante. Ausbildung: Vektor, Formen, Farbe und Skalierbarkeit üben.",
  "3. Visitenkarte - Gestalte Vorder- und Rückseite mit Logo, Kontaktdaten, Typografie, Beschnitt und CMYK.",
  "4. Flyer A5 - Gestalte einen einseitigen oder zweiseitigen Flyer mit Hierarchie, Raster, Bild und druckfertigem PDF.",
  "★ 5. Website - optional: Entwirf eine Startseite in Figma. Wenn du Zeit hast, baue sie später in WordPress/Elementor nach."
];

export const coreAusbildungDeliverables = [
  "1. Moodboard",
  "2. Logo: 1-3 Entwürfe + finales Logo",
  "3. Visitenkarte Vorder- und Rückseite",
  "4. Flyer A5 als Print-PDF",
  "★ 5. Website Design in Figma / optional WordPress"
];

export const alternativeClientBriefs: Record<string, ClientVariant> = {
  "module-1": {
    company: "Praxis Dr. Anna Berger",
    industry: "Hausarztpraxis / лікарська практика",
    wantsDe: "Die Ärztin eröffnet eine moderne Hausarztpraxis und braucht eine ruhige, vertrauensvolle visuelle Richtung.",
    wantsUa: "Лікарка відкриває сучасну сімейну практику і потребує спокійного, надійного візуального напрямку.",
    orderDe: "Erstelle Briefing, Zielgruppe, Persona und Moodboard für die Praxis.",
    orderUa: "Створи бриф, цільову групу, персону і moodboard для лікарської практики.",
    deliverables: ["Briefing", "Persona", "Moodboard", "Brand Direction"]
  },
  "module-2": {
    company: "JobBrücke Recruiting",
    industry: "Firma für Jobsuche und Bewerbung / рекрутингова фірма",
    wantsDe: "Die Firma hilft Menschen bei Jobsuche, Bewerbung und Karrierewechsel und braucht ein seriöses Logo.",
    wantsUa: "Фірма допомагає людям з пошуком роботи, резюме і зміною кар'єри та потребує серйозний логотип.",
    orderDe: "Gestalte 1-3 Logo-Versionen und finalisiere eine saubere Logo-Variante.",
    orderUa: "Створи 1-3 версії логотипу і доведи одну чисту фінальну версію.",
    deliverables: ["3 Logo-Entwürfe", "Finales Logo", "Icon", "SVG/PDF/PNG"]
  },
  "module-3": {
    company: "Klara Beauty Studio",
    industry: "Kosmetikstudio / косметологічна студія",
    wantsDe: "Das Studio braucht Farben und Schriften, die hochwertig, sauber und feminin wirken.",
    wantsUa: "Студії потрібні кольори і шрифти, які виглядають якісно, чисто і жіночно.",
    orderDe: "Erstelle ein kleines Corporate Design Sheet mit Farbpalette und Typografie.",
    orderUa: "Створи маленький corporate design sheet з палітрою і типографікою.",
    deliverables: ["Farbpalette", "Schriftsystem", "Mini-CD-Manual", "Anwendungsbeispiel"]
  },
  "module-4": {
    company: "Physio Aktiv Wien",
    industry: "Physiotherapie / фізіотерапія",
    wantsDe: "Die Praxis braucht eine professionelle Visitenkarte und einen einfachen Briefkopf für Patientinnen und Partner.",
    wantsUa: "Практиці потрібна професійна візитка і простий бланк для пацієнтів та партнерів.",
    orderDe: "Gestalte eine druckfertige Visitenkarte und einen A4-Briefkopf.",
    orderUa: "Створи візитку для друку і A4 фірмовий бланк.",
    deliverables: ["Visitenkarte Vorderseite", "Visitenkarte Rückseite", "A4 Briefkopf", "PDF/X"]
  },
  "module-5": {
    company: "Kinderatelier Farbenfroh",
    industry: "Kreativschule für Kinder / творча школа для дітей",
    wantsDe: "Das Atelier bewirbt einen Ferien-Workshop und braucht einen freundlichen A5 Flyer.",
    wantsUa: "Ательє рекламує канікулярний воркшоп і потребує дружній A5 flyer.",
    orderDe: "Gestalte einen A5 Flyer mit Datum, Uhrzeit, Preis, Ort und Anmeldung.",
    orderUa: "Створи A5 flyer з датою, часом, ціною, місцем і записом.",
    deliverables: ["A5 Flyer", "Print PDF", "Web PNG", "Before/After Layout"]
  },
  "module-6": {
    company: "Nova Raum Immobilien",
    industry: "Immobilienfirma / агенція нерухомості",
    wantsDe: "Die Firma braucht eine 8-seitige Broschüre für eine neue Wohnanlage.",
    wantsUa: "Фірмі потрібна брошура на 8 сторінок для нового житлового комплексу.",
    orderDe: "Erstelle eine Broschüre mit Projektinfo, Grundrissen, Vorteilen und Kontaktseite.",
    orderUa: "Створи брошуру з інформацією про проєкт, планами, перевагами і контактами.",
    deliverables: ["8-Seiten-Broschüre", "3 polierte Doppelseiten", "PDF Preview"]
  },
  "module-7": {
    company: "FitMeal Catering",
    industry: "Healthy Food Catering / healthy food доставка",
    wantsDe: "Das Catering bewirbt neue Lunch-Boxen für Büros und braucht eine Social-Media-Kampagne.",
    wantsUa: "Catering рекламує нові lunch boxes для офісів і потребує social media кампанію.",
    orderDe: "Entwickle 3 Instagram Posts und 2 Story-Slides in einem einheitlichen Stil.",
    orderUa: "Розроби 3 Instagram posts і 2 story slides в одному стилі.",
    deliverables: ["3 Feed Posts", "2 Stories", "Caption Texte", "Mockup"]
  },
  "module-8": {
    company: "WaldPapier Studio",
    industry: "nachhaltige Papeterie / екологічна поліграфія",
    wantsDe: "Das Studio möchte Printprodukte zeigen und braucht eine kleine Case Study mit Druckdaten-Erklärung.",
    wantsUa: "Студія хоче показати друковані продукти і потребує mini case study з поясненням Druckdaten.",
    orderDe: "Erstelle Druckdaten-Checkliste und Mini Case Study mit 6 Slides.",
    orderUa: "Створи checklist для Druckdaten і mini case study на 6 слайдів.",
    deliverables: ["Druckdaten-Checkliste", "6-Slide Case Study", "PDF/PNG Export"]
  },
  "module-9": {
    company: "AlpenBike Verleih",
    industry: "Fahrradverleih und Touren / оренда велосипедів",
    wantsDe: "Der Kunde möchte eine übersichtliche Website mit fünf Seiten für Verleih, Touren und Kontakt.",
    wantsUa: "Клієнт хоче зрозумілий сайт на п'ять сторінок для оренди, турів і контакту.",
    orderDe: "Entwirf Sitemap, Wireframe und Startseite in Figma.",
    orderUa: "Створи sitemap, wireframe і головну сторінку у Figma.",
    deliverables: ["Sitemap", "Desktop Wireframe", "Startseite Design", "Mobile Preview"]
  },
  "module-10": {
    company: "Urban Yoga Studio",
    industry: "Yoga Studio / йога студія",
    wantsDe: "Das Studio braucht ein konsistentes UI-System für Desktop, Tablet und Smartphone.",
    wantsUa: "Студії потрібна послідовна UI-система для desktop, tablet і smartphone.",
    orderDe: "Erstelle UI Kit, Komponenten und responsive Varianten.",
    orderUa: "Створи UI kit, компоненти і responsive варіанти.",
    deliverables: ["UI Kit", "Buttons", "Cards", "Navigation", "Responsive Screens"]
  },
  "module-11": {
    company: "Bistro Mare",
    industry: "Restaurant / ресторан",
    wantsDe: "Das Restaurant möchte eine 5-seitige WordPress-Website mit Elementor.",
    wantsUa: "Ресторан хоче WordPress-сайт на 5 сторінок через Elementor.",
    orderDe: "Baue die Seitenstruktur und die Startseite in WordPress mit Elementor.",
    orderUa: "Побудуй структуру сторінок і головну сторінку у WordPress через Elementor.",
    deliverables: ["5 WordPress-Seiten", "Elementor Startseite", "Navigation", "Mobile Check"]
  },
  "module-12": {
    company: "Lichtwerk Eventraum",
    industry: "Eventlocation / простір для подій",
    wantsDe: "Die Location braucht Formular, Kalender, Cookie-Banner, SEO und Backup für die Website.",
    wantsUa: "Локації потрібні форма, календар, cookie banner, SEO і backup для сайту.",
    orderDe: "Richte kostenlose WordPress-Plugins ein und dokumentiere die wichtigsten Einstellungen.",
    orderUa: "Налаштуй безкоштовні WordPress-плагіни і задокументуй головні налаштування.",
    deliverables: ["Kontaktformular", "Cookie Banner", "Event Kalender", "SEO Liste", "Handoff Checklist"]
  },
  "module-13": {
    company: "PfotenGlück Tierpraxis",
    industry: "Tierarztpraxis / ветеринарна практика",
    wantsDe: "Die Praxis braucht eine professionelle Behance Case Study für ein kleines Branding-Projekt.",
    wantsUa: "Практиці потрібен професійний Behance case study для маленького branding-проєкту.",
    orderDe: "Baue eine Case Study mit Problem, Zielgruppe, Moodboard, Logo, Print und Ergebnis.",
    orderUa: "Збери case study з problem, target group, moodboard, logo, print і результатом.",
    deliverables: ["Behance Draft", "Case Structure", "Mockups"]
  },
  "module-14": {
    company: "EcoHome Cleaning",
    industry: "nachhaltige Reinigungsfirma / еко клінінг",
    wantsDe: "Die Firma möchte ein zusammenhängendes Paket aus Print, Social Media und Website.",
    wantsUa: "Фірма хоче цілісний пакет з print, social media і website.",
    orderDe: "Verbinde Logo, Visitenkarte, Flyer, Social Posts, Figma Website und WordPress-Notizen zu einer Kampagne.",
    orderUa: "Об'єднай логотип, візитку, flyer, social posts, Figma website і WordPress нотатки в одну кампанію.",
    deliverables: ["Campaign Board", "Finale Assets", "Export-Ordner"]
  },
  "module-15": {
    company: "Krystyna Lozova",
    industry: "Personal Portfolio / особисте портфоліо",
    wantsDe: "Du brauchst eine professionelle Präsentation deiner besten Arbeiten für Bewerbung und Ausbildung.",
    wantsUa: "Тобі потрібна професійна презентація найкращих робіт для Bewerbung і Ausbildung.",
    orderDe: "Erstelle Portfolio PDF, LinkedIn Texte und eine kurze Vorstellung auf Deutsch.",
    orderUa: "Створи portfolio PDF, LinkedIn тексти і коротку презентацію німецькою.",
    deliverables: ["Portfolio PDF", "LinkedIn Texte", "Kurzprofil"]
  },
  "module-16": {
    company: "Prüfungssimulation",
    industry: "Medienfachfrau Grafik und Print / підготовка до іспиту",
    wantsDe: "Du sollst zwei Kundenprojekte sicher erklären und deine Entscheidungen begründen.",
    wantsUa: "Ти маєш впевнено пояснити два клієнтські проєкти і обґрунтувати рішення.",
    orderDe: "Bereite Fachgespräch-Antworten vor und mache einen finalen Portfolio-Check.",
    orderUa: "Підготуй відповіді для Fachgespräch і зроби фінальну перевірку portfolio.",
    deliverables: ["Fachgespräch Sheet", "Portfolio Checklist", "Next Steps"]
  }
};

export const modulePlans: Record<string, ModulePlan> = {
  "module-1": {
    brief: moduleOneBrief,
    ausbildungFocus: [
      "Kundenbriefing verstehen und in ein Logo-Konzept übersetzen.",
      "Skizzen, Moodboard und mehrere Entwürfe entwickeln.",
      "Vektorgrafik, Dateiformate, RGB/CMYK und Export für Web und Print erklären.",
      "Urheberrecht beachten: keine fremden Logos, Fonts oder Bilder ohne Lizenz verwenden."
    ],
    theory: [
      "Ein Logo muss einfach, wiedererkennbar und skalierbar sein.",
      "Eine Vektorgrafik bleibt beim Vergrößern scharf. Eine Rastergrafik kann pixelig werden.",
      "RGB ist für Bildschirm und Web. CMYK ist für Druck.",
      "Ein Moodboard zeigt Stil, Farben, Typografie und Bildsprache vor dem Design.",
      "Eine gute Ordnerstruktur hilft, die finalen Kundendateien sauber abzugeben."
    ],
    fachwoerter: [
      "das Logo - логотип - Ein Logo ist ein Zeichen für eine Marke.",
      "die Wortmarke - словесний логотип - Sie besteht vor allem aus Text.",
      "die Bildmarke - графічний знак - Sie ist ein Symbol ohne Text.",
      "die Bild-Wort-Marke - знак + текст - Sie kombiniert Symbol und Schrift.",
      "die Vektorgrafik - векторна графіка - Sie bleibt beim Skalieren scharf.",
      "das Farbmodell - кольорова модель - RGB oder CMYK.",
      "der Export - експорт - Die Datei wird für Web oder Print gespeichert.",
      "die Reinzeichnung - чистова фінальна версія - Die finale saubere Datei."
    ],
    fachgespraech: [
      "Ich habe das Logo als Vektorgrafik erstellt, weil es ohne Qualitätsverlust skalierbar ist.",
      "Für digitale Medien exportiere ich RGB-Dateien. Für Druck bereite ich CMYK-Dateien vor.",
      "Ich habe zuerst Skizzen und ein Moodboard erstellt, damit die Gestaltung zur Zielgruppe passt.",
      "Ich prüfe die Dateiformate, damit der Kunde das Logo für Web und Print verwenden kann."
    ],
    practice: [
      "Erstelle 10 schnelle Logo-Skizzen für Lune Bakery.",
      "Wähle 3 Richtungen aus: elegant, minimalistisch, warm.",
      "Baue 1-3 Logo-Versionen in Illustrator als Vektor nach.",
      "Erstelle ein kleines Brand Board mit Farben, Schriften und Logo-Varianten.",
      "Erstelle Mockups: Coffee Cup, Paper Bag, Shop Sign und Instagram Post."
    ],
    drawing: [
      "15-30 Minuten Handzeichnung: Croissants, Tasse, Mondformen und kleine Icons skizzieren.",
      "15-30 Minuten iPad: eine saubere Linienversion deiner besten Logo-Skizze zeichnen.",
      "Mini-Training Charakter: eine Kundin mit Coffee Cup als einfache Figur skizzieren."
    ],
    report: reportTemplate,
    deliverables: moduleOneDeliverables,
    quality: moduleOneQualityChecks
  },
  "module-2": {
    brief: {
      company: "Medicus Praxis",
      industry: "Arztpraxis",
      targetGroup: "Patientinnen und Patienten jeden Alters, besonders Familien und ältere Menschen.",
      request: "Ein seriöses, ruhiges Corporate Design mit Logo, Visitenkarte, Briefpapier und Social Preview.",
      avoid: "Zu verspielte Farben, unlesbare Schrift, medizinische Klischees ohne Konzept."
    },
    ausbildungFocus: [
      "Corporate Identity und Corporate Design Manual lesen und anwenden.",
      "Typografie, Farbe, Barrierefreiheit und Zielgruppe begründen.",
      "Printprodukte mit korrektem Format, Beschnitt und PDF-Export vorbereiten.",
      "Kundenfeedback aufnehmen und Korrekturen sauber dokumentieren."
    ],
    theory: [
      "Corporate Identity ist das gesamte Selbstbild eines Unternehmens.",
      "Corporate Design ist der visuelle Teil: Logo, Farben, Schriften, Bildsprache und Layoutregeln.",
      "Barrierefreiheit bedeutet: Gestaltung soll für möglichst viele Menschen gut nutzbar und lesbar sein.",
      "Bei Printdaten müssen Endformat, Beschnitt, Farbmodus und Schriften geprüft werden.",
      "Ein CD Manual hilft, dass alle Medien gleich und professionell aussehen."
    ],
    fachwoerter: [
      "die Corporate Identity - фірмова ідентичність - Das Gesamtbild eines Unternehmens.",
      "das Corporate Design - візуальний стиль - Logo, Farben, Schriften und Gestaltung.",
      "das CD Manual - брендбук - Regeln für die visuelle Darstellung.",
      "die Barrierefreiheit - доступність - Gestaltung ist gut lesbar und nutzbar.",
      "die Visitenkarte - візитка - Kleine Karte mit Kontaktdaten.",
      "das Briefpapier - фірмовий бланк - Papier mit Logo und Kontaktdaten.",
      "der Kontrast - контраст - Unterschied zwischen hell und dunkel.",
      "die Lesbarkeit - читабельність - Text kann gut gelesen werden."
    ],
    fachgespraech: [
      "Ich habe eine ruhige Farbpalette gewählt, weil eine Arztpraxis Vertrauen vermitteln soll.",
      "Ich achte auf gute Lesbarkeit und genug Kontrast, damit die Gestaltung barriereärmer ist.",
      "Die Visitenkarte wird mit Beschnitt und CMYK für den Druck vorbereitet.",
      "Das Corporate Design Manual erklärt, wie Logo, Farben und Schriften verwendet werden."
    ],
    practice: [
      "Erstelle ein Logo für Medicus Praxis in 1-3 Varianten.",
      "Erstelle eine Visitenkarte Vorder- und Rückseite in InDesign.",
      "Erstelle ein Briefpapier A4 mit Logo, Kontaktdaten und ruhigem Satzspiegel.",
      "Erstelle eine kleine CD-Manual-Seite: Logo, Farben, Schriften, Bildsprache.",
      "Simuliere eine Kundenkorrektur: Logo weniger klinisch, Schrift freundlicher."
    ],
    drawing: [
      "15 Minuten Handzeichnung: einfache medizinische Icons wie Herz, Kreuz, Blatt, Hand.",
      "15-30 Minuten iPad: 6 saubere Piktogramme im gleichen Stil zeichnen.",
      "Figurentraining: einfache Handhaltung zeichnen, die eine Visitenkarte hält."
    ],
    report: reportTemplate,
    deliverables: ["Logo Set", "Business Card Vorderseite", "Business Card Rückseite", "A4 Briefpapier", "Mini CD Manual", "PDF/X Export", "Mockup"],
    quality: [
      "Logo wirkt seriös und funktioniert klein.",
      "Visitenkarte hat korrekte Maße und Beschnitt.",
      "Schriften und Farben sind im CD Manual dokumentiert.",
      "Kontrast und Lesbarkeit wurden geprüft.",
      "Druck-PDF wurde mit CMYK und Schnittmarken exportiert."
    ]
  },
  "module-3": {
    brief: {
      company: "Nova Jobs",
      industry: "Jobvermittlung",
      targetGroup: "Junge Erwachsene, Berufseinsteigerinnen und Menschen, die sich beruflich neu orientieren.",
      request: "Ein modernes Recruiting-Branding mit klarer Zielgruppenansprache, Landing Page und LinkedIn Banner.",
      avoid: "Zu kalte Business-Optik, unklare Call-to-Actions, austauschbare Stockbilder."
    },
    ausbildungFocus: [
      "Zielgruppenanalyse, Persona und Kundenbedürfnisse erarbeiten.",
      "Marketinginstrumente und Kommunikationskanäle passend auswählen.",
      "Above the Line / Below the Line und Social Media Grundlagen verstehen.",
      "Konzeptentwicklung und einfache Präsentation für Kundinnen und Kunden."
    ],
    theory: [
      "Eine Zielgruppe beschreibt, für wen ein Produkt oder eine Kampagne gestaltet wird.",
      "Eine Persona ist eine fiktive Person, die eine Zielgruppe greifbarer macht.",
      "Ein Call-to-Action zeigt, was die Nutzerin als Nächstes tun soll.",
      "LinkedIn braucht klare Texte, professionelles Bildmaterial und ein seriöses Layout.",
      "Eine Landing Page soll schnell erklären, welches Problem gelöst wird."
    ],
    fachwoerter: [
      "die Zielgruppe - цільова аудиторія - Menschen, die erreicht werden sollen.",
      "die Persona - персона - Eine Beispielperson aus der Zielgruppe.",
      "das Briefing - бриф - Informationen und Anforderungen vom Kunden.",
      "das Rebriefing - уточнення брифу - Rückfrage, ob alles richtig verstanden wurde.",
      "der Call-to-Action - заклик до дії - Eine klare Handlungsaufforderung.",
      "die Conversion Rate - коефіцієнт конверсії - Anteil der Nutzer, die eine Aktion machen.",
      "die Positionierung - позиціонування - Wie sich eine Marke im Markt zeigt.",
      "die Konkurrenzanalyse - аналіз конкурентів - Vergleich mit anderen Anbietern."
    ],
    fachgespraech: [
      "Ich habe zuerst die Zielgruppe definiert, damit die Gestaltung passend und verständlich ist.",
      "Die Persona hilft mir, Bedürfnisse und Erwartungen der Nutzer besser zu verstehen.",
      "Der Call-to-Action ist deutlich sichtbar, damit Nutzer schnell handeln können.",
      "Ich habe LinkedIn als Kanal gewählt, weil die Zielgruppe dort berufliche Inhalte sucht."
    ],
    practice: [
      "Erstelle eine Persona für Nova Jobs mit Alter, Ziel, Problem und Bedürfnissen.",
      "Erstelle eine Konkurrenzanalyse mit 3 Jobplattformen.",
      "Entwerfe ein Logo oder Wordmark-Konzept.",
      "Gestalte einen LinkedIn Banner und einen Social Post.",
      "Gestalte eine Landing Page in Figma mit Hero, Benefits, Ablauf und Formularbereich."
    ],
    drawing: [
      "15 Minuten Handzeichnung: 6 einfache Büro- und Job-Icons skizzieren.",
      "15-30 Minuten iPad: eine freundliche Bewerber-Figur als einfache Character-Skizze.",
      "Körpertraining: stehende Person mit Laptop-Tasche in einfachen Formen zeichnen."
    ],
    report: reportTemplate,
    deliverables: ["Persona", "Konkurrenzanalyse", "Logo / Wordmark", "LinkedIn Banner", "Social Post", "Figma Landing Page", "Mini Presentation"],
    quality: [
      "Persona und Zielgruppe sind klar beschrieben.",
      "Landing Page hat klare Leserführung und CTA.",
      "Texte sind kurz, verständlich und zielgruppenorientiert.",
      "LinkedIn Banner funktioniert auch klein.",
      "Designentscheidungen können auf Deutsch begründet werden."
    ]
  },
  "module-4": {
    brief: {
      company: "Atelier Flora",
      industry: "Blumengeschäft",
      targetGroup: "Menschen, die hochwertige Blumen, kleine Geschenke und liebevolle Verpackung suchen.",
      request: "Ein natürliches Branding mit Verpackungssticker, Etikett und kleinem CD Manual.",
      avoid: "Billige Deko-Optik, zu viele Farben, schwer druckbare Details."
    },
    ausbildungFocus: [
      "Grundlagen von Verpackungs- und Produktdesign beschreiben.",
      "Grafische Elemente und Etiketten mit Illustrator/InDesign erstellen.",
      "Bedruckmaterialien und Druckproduktion zielgruppenorientiert auswählen.",
      "Druckdaten mit Beschnitt, CMYK und Endformat vorbereiten."
    ],
    theory: [
      "Verpackungsdesign verbindet Funktion, Information und Markenwirkung.",
      "Ein Etikett muss lesbar sein und auf dem Material gut funktionieren.",
      "Pantone und RAL sind Farbsysteme für genaue Farbangaben in bestimmten Bereichen.",
      "Für Sticker sind Form, Beschnitt und Konturlinie besonders wichtig.",
      "Unterschiedliche Papiere wirken unterschiedlich: gestrichen, ungestrichen, matt oder glänzend."
    ],
    fachwoerter: [
      "das Etikett - етикетка - Kleine Fläche mit Information oder Marke.",
      "der Sticker - наліпка - Klebendes Druckprodukt.",
      "die Verpackung - упаковка - Schützt Produkt und zeigt Marke.",
      "die Konturlinie - контурна лінія - Linie für die Schnittform.",
      "der Beschnitt / Anschnitt - виліт під обріз - Extra Rand für den Schnitt.",
      "das Endformat - кінцевий формат - Die finale Größe nach dem Schneiden.",
      "das Bedruckmaterial - матеріал для друку - Papier, Karton, Folie oder anderes Material.",
      "die Endverarbeitung - післядрукарська обробка - Schneiden, Falzen, Stanzen, Kleben."
    ],
    fachgespraech: [
      "Ich habe Beschnitt angelegt, damit nach dem Schneiden keine weißen Blitzer entstehen.",
      "Das Etikett muss gut lesbar sein, auch wenn es klein gedruckt wird.",
      "Ich wähle das Material passend zur Marke und zur Nutzung des Produkts.",
      "Für den Druck prüfe ich CMYK, Auflösung, Endformat und Exportprofil."
    ],
    practice: [
      "Erstelle ein Logo oder Monogramm für Atelier Flora.",
      "Gestalte einen runden Sticker und ein längliches Etikett.",
      "Erstelle eine kleine Verpackungsserie: Sticker, Danke-Karte, Pflegehinweis.",
      "Erstelle ein Mini CD Manual mit Farben, Schriften, Logo-Regeln.",
      "Exportiere druckfertige PDFs mit Beschnitt und Schnittmarken."
    ],
    drawing: [
      "15 Minuten Handzeichnung: Blätter, Blumenformen und Schleifen skizzieren.",
      "15-30 Minuten iPad: 3 florale Icons als Linienillustration zeichnen.",
      "Tier/Character-Training: kleine Katze im Blumengeschäft als einfache Figur skizzieren."
    ],
    report: reportTemplate,
    deliverables: ["Logo / Monogramm", "Sticker", "Etikett", "Danke-Karte", "Pflegehinweis", "Mini CD Manual", "PDF/X Druckdaten", "Mockup"],
    quality: [
      "Sticker und Etikett haben Beschnitt.",
      "Konturlinie ist klar markiert.",
      "Texte sind auch klein lesbar.",
      "Farben und Material passen zur Marke.",
      "Druckdaten wurden vor der Abgabe geprüft."
    ]
  },
  "module-5": {
    brief: {
      company: "Kunstnacht Wien",
      industry: "Kulturveranstaltung",
      targetGroup: "Kunstinteressierte Erwachsene, Studierende, Touristinnen und lokale Kulturfans.",
      request: "Ein A5-Flyer mit starker Typografie, Bildbearbeitung und druckfertigem PDF.",
      avoid: "Chaotische Hierarchie, zu kleine Informationen, fehlender Beschnitt."
    },
    ausbildungFocus: [
      "Layout, Typografie, Satzspiegel und Raster anwenden.",
      "Bildkomposition und Leserführung erklären.",
      "Druckvorstufe: Auflösung, CMYK, Beschnitt, Schnittmarken und PDF/X.",
      "Printprodukt prüfen und bei Bedarf überarbeiten."
    ],
    theory: [
      "Ein Flyer muss schnell informieren: Was, wann, wo und warum.",
      "Typografische Hierarchie zeigt, welche Information am wichtigsten ist.",
      "Der Satzspiegel definiert, wo Inhalte auf der Seite platziert werden.",
      "Weißraum macht Layouts ruhiger und besser lesbar.",
      "PDF/X ist ein Standard für zuverlässige Druckdaten."
    ],
    fachwoerter: [
      "das Layout - макет - Anordnung von Text, Bild und Elementen.",
      "der Satzspiegel - область контенту - Bereich, in dem Inhalt steht.",
      "das Raster - сітка - Hilft beim ordentlichen Platzieren.",
      "der Weißraum - вільний простір - Freier Bereich zwischen Elementen.",
      "die Leserführung - напрямок погляду - Führt den Blick durch das Layout.",
      "die Schnittmarken - мітки обрізу - Zeigen, wo geschnitten wird.",
      "das PDF/X-Format - стандарт для друку - Sicheres Format für Druckdaten.",
      "die Auflösung - роздільна здатність - Wichtig für scharfe Bilder."
    ],
    fachgespraech: [
      "Ich habe ein Raster verwendet, damit das Layout ordentlich und professionell wirkt.",
      "Die Überschrift ist groß, weil sie als Blickfang funktionieren soll.",
      "Für den Druck exportiere ich ein PDF/X mit Beschnitt und Schnittmarken.",
      "Ich prüfe die Auflösung der Bilder, damit sie im Druck scharf sind."
    ],
    practice: [
      "Erstelle einen A5-Flyer Vorder- und Rückseite in InDesign.",
      "Baue eine klare Hierarchie: Titel, Datum, Ort, Programm, CTA.",
      "Bearbeite ein Bild in Photoshop und setze es passend ein.",
      "Erstelle eine Instagram Story als digitale Variante.",
      "Exportiere ein PDF/X und prüfe Beschnitt, Schnittmarken und Schriften."
    ],
    drawing: [
      "15 Minuten Handzeichnung: kleine Kunstsymbole und Rahmenformen skizzieren.",
      "15-30 Minuten iPad: eine einfache Event-Illustration oder Pattern für den Flyer.",
      "Körpertraining: Besuchergruppe im Museum als schnelle Silhouetten zeichnen."
    ],
    report: reportTemplate,
    deliverables: ["A5 Flyer Vorderseite", "A5 Flyer Rückseite", "Photoshop Bildbearbeitung", "PDF/X", "Print Preview", "Instagram Story"],
    quality: [
      "Alle Pflichtinformationen sind sichtbar.",
      "Typografie hat klare Hierarchie.",
      "Bilder haben passende Auflösung.",
      "PDF/X enthält Beschnitt und Schnittmarken.",
      "Flyer ist auf Lesbarkeit und Rechtschreibung geprüft."
    ]
  },
  "module-6": {
    brief: {
      company: "Green Studio",
      industry: "Interior Design",
      targetGroup: "Privatkundinnen und kleine Büros, die nachhaltiges Interior Design suchen.",
      request: "Eine 8-seitige Broschüre mit Satzspiegel, Bildkonzept, sauberem Raster und Druckvorstufe.",
      avoid: "Zu volle Seiten, schlechte Bildqualität, uneinheitliche Abstände."
    },
    ausbildungFocus: [
      "Mehrseitiges Layout mit Raster, Satzspiegel und Absatzformaten erstellen.",
      "Textelemente typografisch gestalten und Bilder medienneutral bearbeiten.",
      "Druckdaten kontrollieren und Datenübergabe vorbereiten.",
      "Projektplanung: Seitenumfang, Bildmaterial, Deadline und Korrekturschleife."
    ],
    theory: [
      "Eine Broschüre braucht eine klare Seitenstruktur und wiederkehrende Layoutregeln.",
      "Absatzformate sparen Zeit und sorgen für ein einheitliches Erscheinungsbild.",
      "Bildrhythmus bedeutet: Bilder und Text wechseln harmonisch.",
      "Falzarten und Bindung beeinflussen die Gestaltung.",
      "Eine Preflight-Prüfung findet technische Fehler vor dem Druck."
    ],
    fachwoerter: [
      "die Broschüre - брошура - Mehrseitiges Printprodukt.",
      "der Satzspiegel - область набору - Fläche für Text und Bilder.",
      "das Absatzformat - стиль абзацу - Gespeicherte Textformatierung.",
      "die Musterseite - майстер-сторінка - Vorlage für wiederkehrende Elemente.",
      "der Bildrahmen - рамка зображення - Platz für Bilder in InDesign.",
      "der Preflight - перевірка перед друком - Prüft technische Fehler.",
      "die Falzart - тип фальцювання - Art, wie Papier gefaltet wird.",
      "die Druckdaten - друкарські дані - Finale Dateien für die Druckerei."
    ],
    fachgespraech: [
      "Ich habe Absatzformate verwendet, damit die Broschüre einheitlich bleibt.",
      "Der Satzspiegel hilft, Text und Bilder ruhig zu platzieren.",
      "Vor dem Export prüfe ich Bilder, Schriften, Beschnitt und Preflight.",
      "Die Broschüre wird als druckfähiges PDF an die Druckerei übergeben."
    ],
    practice: [
      "Plane eine 8-seitige Broschüre mit Deckblatt, Leistungen, Projektbeispielen und Kontakt.",
      "Erstelle Musterseiten, Raster und Absatzformate in InDesign.",
      "Bearbeite 4-6 Bilder in Photoshop.",
      "Setze Text, Bildunterschriften und Seitenzahlen sauber ein.",
      "Erstelle ein PDF/X und eine kleine Print-Checkliste."
    ],
    drawing: [
      "15 Minuten Handzeichnung: Möbel, Pflanzen und Raum-Icons skizzieren.",
      "15-30 Minuten iPad: 3 einfache Interior-Spot-Illustrationen.",
      "Perspektive üben: einfacher Raum mit Sofa und Pflanze."
    ],
    report: reportTemplate,
    deliverables: ["8-page Brochure", "Musterseiten", "Absatzformate", "Bildbearbeitung", "PDF/X", "Image Package", "Print Checklist"],
    quality: [
      "Alle Seiten folgen einem klaren Raster.",
      "Absatzformate sind konsistent.",
      "Bilder sind scharf und passend bearbeitet.",
      "Preflight zeigt keine kritischen Fehler.",
      "PDF/X und offene Datei sind ordentlich abgelegt."
    ]
  },
  "module-7": {
    brief: {
      company: "Mellow Yoga",
      industry: "Yoga Studio",
      targetGroup: "Menschen, die Ruhe, Gesundheit und einen achtsamen Alltag suchen.",
      request: "Ein editorialer Magazin-Spread mit Textstilen, Bildrhythmus und ruhiger Leserführung.",
      avoid: "Überladene Seiten, zu dekorative Schrift, schlechte Lesbarkeit."
    },
    ausbildungFocus: [
      "Mikrotypografie und Makrotypografie verstehen.",
      "Schriftfamilien, Schriftschnitte, Laufweite, Kerning und Zeilenabstand anwenden.",
      "Bild und Text in einem ruhigen Layout kombinieren.",
      "Typografie im Fachgespräch einfach erklären."
    ],
    theory: [
      "Mikrotypografie betrifft Buchstaben, Wörter, Laufweite, Kerning und Zeilenabstand.",
      "Makrotypografie betrifft Gesamtaufbau, Satzspiegel, Layout und Verhältnis von Schrift zu Bild.",
      "Zeilenabstand beeinflusst, ob ein Text angenehm lesbar ist.",
      "Eine Schriftfamilie enthält mehrere Schriftschnitte wie Regular, Bold oder Italic.",
      "Flattersatz wirkt oft natürlicher als schlechter Blocksatz."
    ],
    fachwoerter: [
      "die Typografie - типографіка - Gestaltung und Anordnung von Schrift.",
      "die Schriftfamilie - сімейство шрифтів - Zusammengehörende Schriftschnitte.",
      "der Schriftschnitt - накреслення - Regular, Bold, Italic.",
      "das Kerning - кернінг - Abstand zwischen zwei Buchstaben.",
      "die Laufweite - трекінг - Abstand zwischen allen Buchstaben.",
      "der Zeilenabstand - міжрядковий інтервал - Abstand zwischen Textzeilen.",
      "der Fließtext - основний текст - Längerer Lesetext.",
      "der Flattersatz - вирівнювання з нерівним краєм - Text mit freiem rechten Rand."
    ],
    fachgespraech: [
      "Typografie macht Texte lesbar und ästhetisch.",
      "Ich habe den Zeilenabstand erhöht, damit der Fließtext leichter zu lesen ist.",
      "Kerning betrifft einzelne Buchstaben, Laufweite betrifft den ganzen Text.",
      "Die typografische Hierarchie zeigt, welche Information wichtig ist."
    ],
    practice: [
      "Erstelle einen Magazin-Spread mit Überschrift, Lead, Fließtext und Bild.",
      "Teste 3 Schriftkombinationen und begründe die beste Wahl.",
      "Erstelle Absatzformate für Titel, Untertitel, Fließtext und Zitat.",
      "Vergleiche Blocksatz und Flattersatz.",
      "Exportiere PDF Preview und beschrifte deine typografischen Entscheidungen."
    ],
    drawing: [
      "15 Minuten Handzeichnung: Yoga-Posen als einfache Linienfiguren.",
      "15-30 Minuten iPad: eine ruhige Yoga-Illustration für den Magazin-Spread.",
      "Körpertraining: 3 einfache Körperhaltungen mit Proportionen zeichnen."
    ],
    report: reportTemplate,
    deliverables: ["Magazine Spread", "Typografie Tests", "Style Sheet", "PDF Export", "Mockup"],
    quality: [
      "Text ist gut lesbar.",
      "Zeilenabstand und Laufweite sind bewusst gewählt.",
      "Hierarchie ist klar.",
      "Bild und Text haben gutes Gleichgewicht.",
      "Typografie kann auf Deutsch erklärt werden."
    ]
  },
  "module-8": {
    brief: {
      company: "Craft Market",
      industry: "Handmade Markt",
      targetGroup: "Kreative Menschen, Familien und Besucherinnen lokaler Märkte.",
      request: "Eine zusammenhängende Printkampagne mit Plakat, Flyer und Roll-up.",
      avoid: "Uneinheitliche Gestaltung, zu viele Schriftarten, unklare Druckformate."
    },
    ausbildungFocus: [
      "Medien auswählen und Einsatz argumentieren.",
      "Printkampagne mit mehreren Formaten konsistent gestalten.",
      "Drucktechniken, Bedruckmaterialien und Endverarbeitung grundlegend erklären.",
      "Produktionsdateien und Datenübergabe vorbereiten."
    ],
    theory: [
      "Eine Kampagne braucht Wiedererkennung über mehrere Medien.",
      "Ein Plakat muss aus der Distanz funktionieren.",
      "Ein Roll-up braucht große Schrift, klare Botschaft und starke Hierarchie.",
      "Druckverfahren unterscheiden sich nach Material, Auflage und Qualität.",
      "Endverarbeitung umfasst Schneiden, Falzen, Kaschieren oder Stanzen."
    ],
    fachwoerter: [
      "die Printkampagne - друкована кампанія - Mehrere Printmedien im gleichen Stil.",
      "das Plakat - плакат - Großes Werbemittel für Aufmerksamkeit.",
      "der Flyer - флаєр - Kleines Informations- oder Werbemittel.",
      "das Roll-up - ролап - Aufsteller für Events.",
      "das Druckverfahren - спосіб друку - Offsetdruck, Digitaldruck, Siebdruck usw.",
      "die Auflage - тираж - Anzahl der gedruckten Exemplare.",
      "die Endverarbeitung - післядрукарська обробка - Arbeiten nach dem Druck.",
      "die Produktionsdatei - виробничий файл - Finale Datei für Umsetzung."
    ],
    fachgespraech: [
      "Ich habe die Gestaltung über alle Formate konsistent gehalten.",
      "Das Plakat hat große Schrift, weil es aus der Distanz gelesen werden muss.",
      "Für kleine Auflagen eignet sich oft Digitaldruck, für größere Auflagen kann Offsetdruck sinnvoll sein.",
      "Vor der Abgabe prüfe ich Endformat, Beschnitt, Farbmodus und Auflösung."
    ],
    practice: [
      "Entwickle ein Key Visual für Craft Market.",
      "Gestalte ein A2-Plakat, einen A5-Flyer und ein Roll-up.",
      "Passe Layout und Hierarchie pro Format an.",
      "Erstelle Druck-PDFs mit korrekten Formaten.",
      "Erstelle eine kurze Präsentation: Warum passen diese Medien zur Zielgruppe?"
    ],
    drawing: [
      "15 Minuten Handzeichnung: Marktstände, Produkte und Icons skizzieren.",
      "15-30 Minuten iPad: ein Key Visual mit Händen, die ein Handmade-Produkt halten.",
      "Tier/Character-Training: kleine Marktbesucher-Figur oder Tiermaskottchen skizzieren."
    ],
    report: reportTemplate,
    deliverables: ["Poster", "Flyer", "Roll-up", "Key Visual", "PDF/X Files", "Production Files", "Presentation"],
    quality: [
      "Alle Formate wirken zusammengehörig.",
      "Schriftgrößen passen zum Medium.",
      "Druckdaten sind vollständig.",
      "Beschnitt und Endformat sind korrekt.",
      "Medienauswahl kann begründet werden."
    ]
  },
  "module-9": {
    brief: {
      company: "Maison Lune",
      industry: "Boutique Hotel",
      targetGroup: "Reisende, Paare und Design-interessierte Gäste, die ein besonderes Hotel suchen.",
      request: "Eine responsive One-Page Website in Figma mit Wireframe, UI-Komponenten und Prototyp.",
      avoid: "Unklare Navigation, zu kleine Buttons, rein dekorative Elemente ohne Funktion.",
      pages: "One Page: Start, Zimmer, Galerie, Angebote, Kontakt."
    },
    ausbildungFocus: [
      "Digitalprodukte mit Layout-, Grafik- und Bildbearbeitungsprogrammen gestalten.",
      "Zielgruppe, Informationsarchitektur und Responsive Design berücksichtigen.",
      "Prototypen und Anschauungsmaterial erstellen.",
      "Barrierefreiheit, Leserführung und UI-Grundlagen erklären."
    ],
    theory: [
      "Ein Wireframe zeigt Struktur ohne fertiges Design.",
      "UI Design betrifft sichtbare Elemente wie Buttons, Karten, Navigation und Formulare.",
      "Responsive Design bedeutet, dass eine Website auf Desktop, Tablet und Mobile funktioniert.",
      "Barrierefreiheit bedeutet auch: genug Kontrast, klare Beschriftung und gute Bedienbarkeit.",
      "Ein Prototyp zeigt, wie Nutzer durch die Seite klicken."
    ],
    fachwoerter: [
      "das Wireframe - вайрфрейм - Grobe Struktur einer Seite.",
      "das UI Design - дизайн інтерфейсу - Gestaltung der sichtbaren Oberfläche.",
      "der Prototyp - прототип - Klickbares Modell eines Designs.",
      "die Navigation - навігація - Menü und Orientierung auf der Website.",
      "der Button - кнопка - Element für eine Aktion.",
      "das Responsive Design - адаптивний дизайн - Funktioniert auf verschiedenen Bildschirmgrößen.",
      "die Barrierefreiheit - доступність - Gut nutzbar für viele Menschen.",
      "die Informationsarchitektur - структура інформації - Ordnung der Inhalte."
    ],
    fachgespraech: [
      "Ich habe zuerst ein Wireframe erstellt, um die Struktur zu planen.",
      "Das Design ist responsive gedacht, damit es auf Desktop und Mobile funktioniert.",
      "Ich achte auf Kontrast und klare Buttons, damit die Seite leichter bedienbar ist.",
      "Der Prototyp hilft, die Navigation und den Nutzerfluss zu testen."
    ],
    practice: [
      "Erstelle eine Sitemap für die One-Page Website.",
      "Erstelle Wireframes für Desktop und Mobile.",
      "Gestalte UI-Komponenten: Header, Button, Zimmerkarte, Kontaktbereich.",
      "Gestalte die finale Website in Figma.",
      "Erstelle einen klickbaren Prototyp und Design Specs."
    ],
    drawing: [
      "15 Minuten Handzeichnung: kleine Hotel-Icons und Zimmer-Symbole skizzieren.",
      "15-30 Minuten iPad: eine einfache Illustration für Hero oder Zimmerkarte.",
      "Perspektive üben: Bett oder Fenster in einfachen Formen zeichnen."
    ],
    report: reportTemplate,
    deliverables: ["Sitemap", "Desktop Wireframe", "Mobile Wireframe", "UI Design", "Prototype", "Design Specs"],
    quality: [
      "Navigation ist klar.",
      "Desktop und Mobile sind gestaltet.",
      "Buttons sind gut erkennbar.",
      "Kontrast und Lesbarkeit sind geprüft.",
      "Figma Datei ist sauber benannt und strukturiert."
    ]
  },
  "module-10": {
    brief: {
      company: "Lernraum Kids",
      industry: "Nachhilfeinstitut",
      targetGroup: "Eltern von Schulkindern und Jugendliche, die Nachhilfe suchen.",
      request: "Eine WordPress Website mit Elementor, Kontaktformular, Cookie Banner und SEO Basics.",
      avoid: "Unklare Seitenstruktur, fehlendes Impressum/Datenschutz, zu langsame Bilder.",
      pages: "5 Seiten: Start, Kurse, Preise, Über uns, Kontakt."
    },
    ausbildungFocus: [
      "Digitale Medien planen und mit WordPress/Elementor umsetzen.",
      "Kundenbriefing, Seitenstruktur und Zielgruppe beachten.",
      "Datenschutz, Cookie Banner, Kontaktformular und SEO-Grundlagen anwenden.",
      "Website auf Desktop, Tablet und Mobile prüfen."
    ],
    theory: [
      "WordPress ist ein CMS, mit dem Inhalte und Seiten verwaltet werden.",
      "Elementor ist ein Page Builder für visuelle Seitengestaltung.",
      "Plugins erweitern WordPress, müssen aber sinnvoll und sparsam eingesetzt werden.",
      "Ein Cookie Banner informiert über Cookies und Einwilligung.",
      "SEO Basics helfen, dass Seiten besser gefunden werden."
    ],
    fachwoerter: [
      "das CMS - CMS - System zur Verwaltung von Website-Inhalten.",
      "das Theme - тема сайту - Grunddesign einer WordPress Website.",
      "das Plugin - плагін - Erweiterung für zusätzliche Funktionen.",
      "das Kontaktformular - контактна форма - Formular für Anfragen.",
      "der Cookie Banner - банер cookies - Hinweis und Einwilligung zu Cookies.",
      "die Datenschutzerklärung - політика приватності - Text zum Datenschutz.",
      "der Meta Title - SEO-заголовок - Titel für Suchmaschinen.",
      "der Alt-Text - альтернативний текст - Beschreibung für Bilder."
    ],
    fachgespraech: [
      "Ich habe die Website mit WordPress und Elementor aufgebaut, weil der Kunde Inhalte später einfacher pflegen kann.",
      "Ich nutze Plugins nur, wenn sie wirklich eine Funktion erfüllen.",
      "Das Kontaktformular hilft, Anfragen direkt über die Website zu bekommen.",
      "Ich prüfe Datenschutz, Cookie Banner, SEO Titel und mobile Darstellung."
    ],
    practice: [
      "Plane 5 Seiten: Start, Kurse, Preise, Über uns, Kontakt.",
      "Baue Header, Footer und Menü in WordPress.",
      "Erstelle die Seiten mit Elementor-Containern.",
      "Richte Kontaktformular, Cookie Plugin, SEO Plugin und Backup Plugin ein.",
      "Prüfe responsive Ansicht und Bildgrößen."
    ],
    drawing: [
      "15 Minuten Handzeichnung: Lern-Icons wie Buch, Stift, Stern, Kalender.",
      "15-30 Minuten iPad: freundliche Kinder-/Lernfigur als einfache Character-Skizze.",
      "Körpertraining: sitzende Person am Schreibtisch zeichnen."
    ],
    report: reportTemplate,
    deliverables: ["5 WordPress Pages", "Elementor Templates", "Contact Form", "Cookie Banner", "SEO Setup", "Backup Setup", "Responsive Check"],
    quality: [
      "Alle 5 Seiten sind erreichbar.",
      "Menü, Header und Footer funktionieren.",
      "Cookie Banner und Datenschutzseite sind vorhanden.",
      "Kontaktformular wurde getestet.",
      "SEO Titel, Meta Description und Alt-Texte sind eingetragen."
    ]
  },
  "module-11": {
    brief: {
      company: "Studio Frame",
      industry: "Fotostudio",
      targetGroup: "Privatpersonen, Paare und kleine Unternehmen, die professionelle Fotos brauchen.",
      request: "Eine einfache responsive Landing Page mit HTML, CSS, klaren Sections und sauberem Asset-Ordner.",
      avoid: "Komplizierter JavaScript-Fokus, unstrukturierter Code, zu schwere Bilder.",
      pages: "One Page: Hero, Leistungen, Galerie, Preise, Kontakt."
    },
    ausbildungFocus: [
      "Grundlagen digitaler Anwendungen und Dateistruktur anwenden.",
      "Weblayout, Responsive Design und Bildoptimierung verstehen.",
      "HTML/CSS nur als Basis lernen, nicht als Hauptfokus.",
      "Digitale Produkte prüfen und verständlich dokumentieren."
    ],
    theory: [
      "HTML strukturiert Inhalte wie Überschriften, Absätze, Bilder und Links.",
      "CSS gestaltet Farben, Abstände, Schrift und Layout.",
      "Responsive Design passt Layouts an verschiedene Bildschirmgrößen an.",
      "Bildoptimierung verbessert Ladezeit und Nutzererlebnis.",
      "Semantische HTML-Elemente helfen Struktur und Barrierefreiheit."
    ],
    fachwoerter: [
      "das HTML - HTML - Struktur einer Webseite.",
      "das CSS - CSS - Gestaltung einer Webseite.",
      "die Section - секція - Inhaltlicher Bereich einer Seite.",
      "der Header - шапка сайту - Oberer Seitenbereich.",
      "der Footer - футер - Unterer Seitenbereich.",
      "die Ladezeit - час завантаження - Wie schnell eine Seite lädt.",
      "das Asset - файл ресурсу - Bild, Icon oder Font für ein Projekt.",
      "die Semantik - семантика - Sinnvolle HTML-Struktur."
    ],
    fachgespraech: [
      "HTML ist für die Struktur der Inhalte zuständig.",
      "CSS ist für die visuelle Gestaltung zuständig.",
      "Ich optimiere Bilder, damit die Website schneller lädt.",
      "Die Landing Page ist responsive, damit sie auch auf dem Smartphone gut funktioniert."
    ],
    practice: [
      "Erstelle ein Figma-Wireframe für die Landing Page.",
      "Baue eine HTML-Struktur mit Header, Hero, Leistungen, Galerie, Preise und Kontakt.",
      "Gestalte die Seite mit CSS: Farben, Abstände, Schrift, responsive Grid.",
      "Ordne Bilder und Icons in einem Asset-Ordner.",
      "Teste Desktop und Mobile."
    ],
    drawing: [
      "15 Minuten Handzeichnung: Kamera, Rahmen, Blitz und Galerie-Icons.",
      "15-30 Minuten iPad: ein einfaches Kamera-Icon-Set im gleichen Stil.",
      "Körpertraining: stehende Person mit Kamera zeichnen."
    ],
    report: reportTemplate,
    deliverables: ["Figma Wireframe", "HTML Landing Page", "CSS Layout", "Responsive Layout", "Asset Folder", "Code Review Notes"],
    quality: [
      "HTML-Struktur ist logisch.",
      "CSS ist sauber und wiederverwendbar.",
      "Bilder sind optimiert.",
      "Mobile Ansicht ist geprüft.",
      "Kein unnötig komplizierter JavaScript-Fokus."
    ]
  },
  "module-12": {
    brief: {
      company: "Bella Casa",
      industry: "Immobilienagentur",
      targetGroup: "Menschen, die Immobilien kaufen, verkaufen oder mieten möchten.",
      request: "Ein Website-Relaunch mit Informationsarchitektur, Figma-Wireframes, Elementor-Umsetzung und Plugin Setup.",
      avoid: "Unklare Objektstruktur, fehlende Suchfunktion, schlechte Performance.",
      pages: "6 Seiten: Start, Immobilien, Kaufen, Verkaufen, Über uns, Kontakt."
    },
    ausbildungFocus: [
      "Kundenbriefing prüfen, Rückfragen formulieren und Rebriefing nutzen.",
      "Informationsarchitektur und Website-Konzept entwickeln.",
      "WordPress Plugins passend auswählen und korrekt einrichten.",
      "Performance, Datenschutz, SEO und responsive Qualität prüfen."
    ],
    theory: [
      "Ein Relaunch verbessert eine bestehende Website in Struktur, Design und Technik.",
      "Informationsarchitektur ordnet Inhalte so, dass Nutzer schnell finden, was sie suchen.",
      "Ein Rebriefing klärt, ob das Briefing richtig verstanden wurde.",
      "Performance bedeutet, dass eine Website schnell und stabil lädt.",
      "Plugins sollen einen klaren Zweck haben und regelmäßig aktualisiert werden."
    ],
    fachwoerter: [
      "der Relaunch - перезапуск сайту - Überarbeitung einer bestehenden Website.",
      "die Sitemap - карта сайту - Übersicht der Seitenstruktur.",
      "das Rebriefing - уточнення брифу - Rückversicherung nach dem Briefing.",
      "die Performance - продуктивність - Geschwindigkeit und Stabilität.",
      "das Plugin Setup - налаштування плагінів - Installation und Konfiguration.",
      "das Immobilienobjekt - об'єкт нерухомості - Wohnung, Haus oder Grundstück.",
      "die Suchfunktion - пошук - Funktion zum Finden von Inhalten.",
      "die Datensicherung - резервна копія - Backup der Website."
    ],
    fachgespraech: [
      "Ich habe zuerst die Sitemap geplant, damit die Seitenstruktur logisch ist.",
      "Beim Rebriefing prüfe ich, ob ich die Kundenwünsche richtig verstanden habe.",
      "Ich wähle Plugins nach Funktion, Sicherheit und Wartbarkeit aus.",
      "Nach der Umsetzung prüfe ich Performance, Datenschutz, SEO und responsive Darstellung."
    ],
    practice: [
      "Schreibe 8 Rückfragen an den Kunden.",
      "Erstelle eine Sitemap für 6 Seiten.",
      "Gestalte Wireframes für Startseite und Immobilien-Übersicht in Figma.",
      "Baue die Struktur in WordPress/Elementor.",
      "Richte Cookie Plugin, SEO Plugin, Formular Plugin, Backup Plugin und optional Kalender/Buchung ein."
    ],
    drawing: [
      "15 Minuten Handzeichnung: Haus, Schlüssel, Karte, Kalender-Icons.",
      "15-30 Minuten iPad: kleine Haus-Illustration oder Icon-Set.",
      "Perspektive üben: einfaches Haus mit Dach und Fenstern zeichnen."
    ],
    report: reportTemplate,
    deliverables: ["Rebriefing Questions", "Sitemap", "Figma Wireframes", "WordPress Pages", "Plugin Setup", "Performance Check", "SEO Checklist"],
    quality: [
      "Sitemap beantwortet Kundenbedarf.",
      "Wireframes zeigen klare Nutzerführung.",
      "Plugins sind sinnvoll und dokumentiert.",
      "Cookie, Formular, Backup und SEO sind geprüft.",
      "Website funktioniert auf Desktop, Tablet und Mobile."
    ]
  },
  "module-13": {
    brief: {
      company: "Sound & Motion",
      industry: "Eventagentur",
      targetGroup: "Unternehmen und Veranstalter, die kurze Eventvideos und Social Clips brauchen.",
      request: "Ein 30-Sekunden-Video mit Storyboard, Schnitt, Exportformaten und Thumbnail.",
      avoid: "Zu lange Clips, schlechte Audioqualität, falsches Format für Social Media."
    },
    ausbildungFocus: [
      "Audiovisuelle Grundlagen nur praxisnah und kompakt lernen.",
      "Storyboard, Timeline, Schnitt und Exportformate erklären.",
      "Mediendateien für unterschiedliche Ausgabetechniken aufbereiten.",
      "Dateiformate, Komprimierung und Speicherstruktur verstehen."
    ],
    theory: [
      "Ein Storyboard zeigt die geplanten Szenen vor dem Schnitt.",
      "Die Timeline ist der Arbeitsbereich für Video und Audio.",
      "Exportformat und Seitenverhältnis hängen vom Ausgabekanal ab.",
      "Komprimierung reduziert Dateigröße, kann aber Qualität beeinflussen.",
      "Ein Thumbnail muss schnell Aufmerksamkeit erzeugen."
    ],
    fachwoerter: [
      "das Storyboard - сторіборд - Planung der Szenen.",
      "die Timeline - таймлайн - Arbeitsbereich im Schnittprogramm.",
      "die Sequenz - секвенція - Projekteinstellung für Video.",
      "der Schnitt - монтаж - Kürzen und Ordnen von Clips.",
      "das Exportformat - формат експорту - Datei für Ausgabe.",
      "die Komprimierung - стиснення - Reduziert Dateigröße.",
      "das Seitenverhältnis - співвідношення сторін - 16:9, 9:16 oder 1:1.",
      "das Thumbnail - прев'ю - Vorschaubild für Video."
    ],
    fachgespraech: [
      "Ich habe ein Storyboard erstellt, damit der Ablauf vor dem Schnitt klar ist.",
      "Das Exportformat wähle ich passend zum Kanal, zum Beispiel 9:16 für Stories.",
      "Ich komprimiere das Video, damit die Datei kleiner wird, aber die Qualität noch passt.",
      "Premiere ist hier nur ein Grundlagenmodul, weil Grafik und Print mein Hauptfokus bleiben."
    ],
    practice: [
      "Erstelle ein Storyboard mit 6 Szenen.",
      "Schneide einen 30-Sekunden-Clip in Premiere Pro.",
      "Erstelle Titel, Bauchbinde oder einfache Motion-Elemente.",
      "Exportiere 16:9 und 9:16 Versionen.",
      "Erstelle ein Thumbnail in Photoshop oder Figma."
    ],
    drawing: [
      "15 Minuten Handzeichnung: 6 Storyboard-Kästchen skizzieren.",
      "15-30 Minuten iPad: einfache Event-Character-Posen zeichnen.",
      "Körpertraining: Person mit Mikrofon oder Kamera in Bewegung zeichnen."
    ],
    report: reportTemplate,
    deliverables: ["Storyboard", "30s Video", "16:9 Export", "9:16 Export", "Export Presets", "Thumbnail"],
    quality: [
      "Storyboard ist verständlich.",
      "Video ist kurz und klar.",
      "Audio und Titel sind geprüft.",
      "Exportformat passt zum Kanal.",
      "Dateien sind ordentlich benannt."
    ]
  },
  "module-14": {
    brief: {
      company: "Café Nord",
      industry: "Gastronomie",
      targetGroup: "Lokale Gäste, Studierende und Menschen, die ein ruhiges Café zum Arbeiten suchen.",
      request: "Ein kompletter Mini-Auftrag: Branding, Menü, Website Mockup, Kundendateien und Abschlusspräsentation.",
      avoid: "Unvollständige Dateien, fehlende Begründung, nicht zusammenpassende Medien."
    },
    ausbildungFocus: [
      "Kompletten Auftrag von Briefing bis Abgabe organisieren.",
      "Projektplan, Deadline, Korrekturschleife und Kundendateien dokumentieren.",
      "Print und Digital konsistent gestalten.",
      "Eigene Designentscheidungen fachlich präsentieren."
    ],
    theory: [
      "Ein Projektplan zeigt Aufgaben, Reihenfolge, Zeitpuffer und Deadline.",
      "Eine Korrekturschleife ist eine geplante Runde für Kundenfeedback.",
      "Ein Kundenpaket enthält offene Dateien, Exportdateien und kurze Hinweise.",
      "Kostenvoranschlag und Budget helfen, Aufwand und Umfang zu klären.",
      "Eine Präsentation erklärt Problem, Prozess und Ergebnis."
    ],
    fachwoerter: [
      "der Projektplan - план проєкту - Aufgaben und Zeitablauf.",
      "die Deadline - дедлайн - Spätester Abgabetermin.",
      "die Korrekturschleife - раунд правок - Geplante Feedbackrunde.",
      "der Zeitpuffer - запас часу - Reserve für Probleme.",
      "der Kostenvoranschlag - кошторис - Geschätzte Kosten.",
      "das Kundenpaket - пакет для клієнта - Finale Dateien und Hinweise.",
      "die Präsentation - презентація - Vorstellung von Prozess und Ergebnis.",
      "die Freigabe - підтвердження - Zustimmung vom Kunden."
    ],
    fachgespraech: [
      "Ich plane zuerst Aufgaben, Deadline und Zeitpuffer.",
      "Nach dem ersten Entwurf hole ich Kundenfeedback ein und dokumentiere die Korrekturen.",
      "Das Kundenpaket enthält offene Dateien und Exportdateien für Web und Print.",
      "In der Präsentation begründe ich Zielgruppe, Gestaltung und technische Umsetzung."
    ],
    practice: [
      "Erstelle ein Briefing und einen einfachen Projektplan.",
      "Gestalte Logo, Menükarte und Social Post.",
      "Erstelle ein Website Mockup in Figma.",
      "Simuliere eine Korrekturschleife und passe die Dateien an.",
      "Packe alle finalen Dateien als Client ZIP mit README."
    ],
    drawing: [
      "15 Minuten Handzeichnung: Tasse, Menü-Icons, kleine Café-Szene.",
      "15-30 Minuten iPad: Café-Illustration für Menü oder Website.",
      "Character-Training: sitzende Person mit Kaffee und Laptop."
    ],
    report: reportTemplate,
    deliverables: ["Briefing", "Projektplan", "Brand Set", "Menu", "Social Post", "Website Mockup", "Client ZIP", "Final Presentation"],
    quality: [
      "Alle Medien wirken zusammengehörig.",
      "Projektplan und Korrekturen sind dokumentiert.",
      "Printdaten und digitale Dateien sind getrennt.",
      "Client ZIP ist verständlich strukturiert.",
      "Präsentation erklärt Prozess und Entscheidungen."
    ]
  },
  "module-15": {
    brief: {
      company: "Krystyna Lozova",
      industry: "Personal Branding",
      targetGroup: "Ausbilder, Prüfungskommission, Agenturen und mögliche Arbeitgeber.",
      request: "Ein Portfolio-Sprint mit Behance Case Studies, LinkedIn Profil, Portfolio PDF und Bewerbungsunterlagen.",
      avoid: "Nur schöne Bilder ohne Prozess, fehlende Erklärungen, unklare Projektstruktur."
    },
    ausbildungFocus: [
      "Eigene Arbeit reflektieren und professionell präsentieren.",
      "Portfolio-Projekte mit Problem, Research, Prozess und Ergebnis dokumentieren.",
      "Deutsch für Fachgespräch und Bewerbung festigen.",
      "Stärken, Lernstand und nächste Schritte sichtbar machen."
    ],
    theory: [
      "Eine Behance Case Study zeigt nicht nur das Ergebnis, sondern auch den Weg dorthin.",
      "Ein gutes Portfolio erklärt Problem, Zielgruppe, Moodboard, Skizzen, Prozess und finale Anwendung.",
      "LinkedIn sollte klar zeigen, was du machst und welche Programme du kannst.",
      "Ein Portfolio PDF braucht klare Auswahl, gute Reihenfolge und kurze Erklärungen.",
      "Selbstreflexion zeigt, dass du bewusst lernst und dich verbessern kannst."
    ],
    fachwoerter: [
      "das Portfolio - портфоліо - Sammlung deiner besten Arbeiten.",
      "die Case Study - кейс - Darstellung von Problem, Prozess und Ergebnis.",
      "das Mockup - мокап - Realistische Darstellung des Designs.",
      "der Designprozess - дизайн-процес - Weg von Briefing bis Ergebnis.",
      "die Bewerbung - заявка на роботу - Unterlagen für Job oder Praktikum.",
      "das Profil - профіль - Deine öffentliche Darstellung.",
      "die Selbstreflexion - саморефлексія - Nachdenken über die eigene Arbeit.",
      "die Projektbeschreibung - опис проєкту - Kurzer Text zum Projekt."
    ],
    fachgespraech: [
      "In meiner Case Study zeige ich Problem, Research, Moodboard, Skizzen, Prozess und Ergebnis.",
      "Ich erkläre nicht nur, was ich gestaltet habe, sondern auch warum.",
      "Mein Portfolio zeigt Print, Branding, Web und meine Entwicklung.",
      "Ich reflektiere jedes Projekt, damit ich beim nächsten Projekt besser arbeite."
    ],
    practice: [
      "Wähle 3 beste Projekte aus den Modulen aus.",
      "Erstelle für jedes Projekt eine Case-Study-Struktur.",
      "Schreibe kurze deutsche Projektbeschreibungen.",
      "Erstelle LinkedIn Banner und verbessere Profiltext.",
      "Erstelle ein Portfolio PDF mit klarer Reihenfolge."
    ],
    drawing: [
      "15 Minuten Handzeichnung: kleine Icons für Skills und Projektkategorien.",
      "15-30 Minuten iPad: persönliches Avatar/Character für Portfolio optional.",
      "Hände üben: Hand mit Stift oder iPad für Portfolio-Illustration."
    ],
    report: reportTemplate,
    deliverables: ["3 Behance Case Outlines", "LinkedIn Banner", "Portfolio PDF", "CV Visual", "Project Descriptions DE/UA", "Skill Overview"],
    quality: [
      "Jede Case Study zeigt Prozess und Ergebnis.",
      "Texte sind kurz und verständlich.",
      "Portfolio hat klare visuelle Ordnung.",
      "LinkedIn Profil wirkt professionell.",
      "Deutsch ist einfach, aber fachlich korrekt."
    ]
  },
  "module-16": {
    brief: {
      company: "Prüfungsvorbereitung",
      industry: "Medienfachfrau LAP",
      targetGroup: "Prüfungskommission und Krystyna als Prüfungskandidatin.",
      request: "Eine LAP Simulation mit Fachgespräch, Druckdatenprüfung, Projektpräsentation und finaler Prüfungsmappe.",
      avoid: "Nur auswendig lernen ohne Erklärung, unsichere Druckbegriffe, fehlende Beispiele aus eigenen Projekten."
    },
    ausbildungFocus: [
      "Fachgespräch auf Deutsch trainieren.",
      "Druckvorstufe, Druckverfahren, Layout, Typografie, CD, Datenschutz und Urheberrecht wiederholen.",
      "Eigene Projekte mit Fachbegriffen präsentieren.",
      "Prüfungsmappe und Lernberichte als Nachweis vorbereiten."
    ],
    theory: [
      "Im Fachgespräch ist wichtig, Begriffe einfach und sicher zu erklären.",
      "Druckdaten müssen auf CMYK, Auflösung, Beschnitt, Schnittmarken, Schriften und PDF/X geprüft werden.",
      "Urheberrecht bedeutet, dass fremde Bilder, Fonts und Logos nicht ohne Lizenz verwendet werden dürfen.",
      "Datenschutz betrifft personenbezogene Daten, Formulare, Kundendaten und Website-Tracking.",
      "Projektmanagement zeigt, dass du strukturiert planen, umsetzen und reflektieren kannst."
    ],
    fachwoerter: [
      "CMYK - кольорова модель для друку - Für Printprodukte.",
      "RGB - кольорова модель для екранів - Für digitale Medien.",
      "der Beschnitt - виліт - Extra Rand für den Schnitt.",
      "die Schnittmarken - мітки обрізу - Zeigen die Schnittposition.",
      "das PDF/X - PDF для друку - Standard für Druckdaten.",
      "das Urheberrecht - авторське право - Schutz von kreativen Werken.",
      "der Datenschutz - захист даних - Schutz personenbezogener Daten.",
      "das Projektmanagement - управління проєктом - Planung und Steuerung eines Projekts."
    ],
    fachgespraech: [
      "Ich verwende CMYK, weil das Produkt für den Druck vorbereitet wird.",
      "Der Beschnitt verhindert weiße Blitzer nach dem Zuschneiden.",
      "RGB ist für digitale Medien geeignet, CMYK für Printprodukte.",
      "Ich prüfe Druckdaten vor der Abgabe auf Auflösung, Beschnitt, Farbmodus und PDF/X.",
      "Ich beachte Urheberrecht und Datenschutz, weil ich rechtlich sauber arbeiten muss."
    ],
    practice: [
      "Wähle 2 fertige Projekte und bereite eine 5-Minuten-Präsentation vor.",
      "Prüfe eine Druckdatei mit Checkliste: CMYK, Beschnitt, Auflösung, PDF/X.",
      "Trainiere 20 Fachgespräch-Fragen mit einfachen deutschen Antworten.",
      "Erstelle eine Prüfungsmappe mit Projekten, Lernberichten und Fachwörterliste.",
      "Simuliere eine Prüfung: Frage, Antwort, Korrektur, Wiederholung."
    ],
    drawing: [
      "15 Minuten Handzeichnung: schnelle Skizze für ein Projekt erklären.",
      "15-30 Minuten iPad: eine kleine Prozessgrafik oder Icon-Legende für die Prüfungsmappe.",
      "Wiederholung: Hände, einfache Körper und ein Tier/Character als lockeres Warm-up."
    ],
    report: reportTemplate,
    deliverables: ["Prüfungsmappe", "Fachwörterliste", "Druckdaten Check", "Mock Exam Notes", "Final Presentation", "Reflection"],
    quality: [
      "20 Fachbegriffe können einfach erklärt werden.",
      "Druckdaten-Checkliste ist verstanden.",
      "Eigene Projekte können mit Fachwörtern erklärt werden.",
      "Präsentation ist kurz, klar und strukturiert.",
      "Offene Unsicherheiten sind als Wiederholung markiert."
    ]
  }
};

export const timeCategories: TimeCategory[] = [
  "Research",
  "Moodboard",
  "Sketches",
  "Hand Drawing",
  "iPad Drawing",
  "Illustrator",
  "InDesign",
  "Figma",
  "Photoshop",
  "WordPress",
  "Elementor",
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
    options: ["Für Druckprodukte", "Für reine Bildschirmdarstellung", "Für Audioexport", "Für WordPress-Plugins"],
    answer: "Für Druckprodukte",
    help: "CMYK wird für Druckdaten verwendet."
  },
  {
    id: "q2",
    type: "article",
    question: "Welcher Artikel passt zu Wortmarke?",
    options: ["der", "die", "das", "ein"],
    answer: "die",
    help: "Es heißt: die Wortmarke."
  },
  {
    id: "q3",
    type: "trueFalse",
    question: "Eine Vektorgrafik bleibt beim Vergrößern scharf.",
    options: ["richtig", "falsch"],
    answer: "richtig",
    help: "Vektorgrafiken bestehen aus Linien, Kurven und Flächen."
  },
  {
    id: "q4",
    type: "translation",
    question: "Was bedeutet der Entwurf?",
    options: ["дизайн-варіант / чернетка", "кінцевий формат", "колірний профіль", "друкарня"],
    answer: "дизайн-варіант / чернетка",
    help: "Der Entwurf ist eine erste Design-Idee oder Version."
  },
  {
    id: "q5",
    type: "single",
    question: "Warum ist Weißraum wichtig?",
    options: [
      "Er verbessert die Lesbarkeit und macht das Design ruhiger.",
      "Er macht jede Datei kleiner.",
      "Er ersetzt den Beschnitt.",
      "Er ist nur für Animation wichtig."
    ],
    answer: "Er verbessert die Lesbarkeit und macht das Design ruhiger.",
    help: "Weißraum schafft Ordnung, Ruhe und bessere Leserführung."
  },
  {
    id: "q6",
    type: "single",
    question: "Was ist ein Beschnitt?",
    options: [
      "Ein zusätzlicher Rand außerhalb des Endformats.",
      "Ein anderes Wort für RGB.",
      "Eine Animation im Logo.",
      "Ein Plugin für Cookie Banner."
    ],
    answer: "Ein zusätzlicher Rand außerhalb des Endformats.",
    help: "Beschnitt verhindert weiße Blitzer nach dem Zuschneiden."
  },
  {
    id: "q7",
    type: "single",
    question: "Welche Datei ist besonders gut für ein Weblogo geeignet?",
    options: ["SVG", "MP3", "DOCX", "WAV"],
    answer: "SVG",
    help: "SVG ist skalierbar und bleibt als Vektorgrafik scharf."
  },
  {
    id: "q8",
    type: "single",
    question: "Was gehört zu einem Kundenbriefing?",
    options: [
      "Ziel, Zielgruppe, Stil, Budget und technische Anforderungen.",
      "Nur die Lieblingsfarbe des Designers.",
      "Nur der finale Export.",
      "Nur ein Screenshot ohne Erklärung."
    ],
    answer: "Ziel, Zielgruppe, Stil, Budget und technische Anforderungen.",
    help: "Ein Briefing erklärt, was der Kunde braucht und worauf man achten muss."
  },
  {
    id: "q9",
    type: "translation",
    question: "Was bedeutet die Zielgruppe?",
    options: ["цільова аудиторія", "візитка", "роздільна здатність", "шрифт без засічок"],
    answer: "цільова аудиторія",
    help: "Die Zielgruppe sind die Menschen, die erreicht werden sollen."
  },
  {
    id: "q10",
    type: "article",
    question: "Welcher Artikel passt zu Vektorgrafik?",
    options: ["der", "die", "das", "den"],
    answer: "die",
    help: "Es heißt: die Vektorgrafik."
  },
  {
    id: "q11",
    type: "fachgespraech",
    question: "Welche Antwort passt im Fachgespräch zu: Warum haben Sie RGB verwendet?",
    options: [
      "Ich habe RGB verwendet, weil das Medium digital auf dem Bildschirm gezeigt wird.",
      "Ich habe RGB verwendet, weil es immer für Druck besser ist.",
      "Ich habe RGB verwendet, weil Beschnitt dann nicht nötig ist.",
      "Ich habe RGB verwendet, weil es ein Dateiformat ist."
    ],
    answer: "Ich habe RGB verwendet, weil das Medium digital auf dem Bildschirm gezeigt wird.",
    help: "RGB ist für digitale Medien und Bildschirmdarstellung."
  },
  {
    id: "q12",
    type: "fachgespraech",
    question: "Welche Antwort erklärt ein Moodboard richtig?",
    options: [
      "Ein Moodboard zeigt Stil, Farben, Typografie und Bildsprache vor dem Design.",
      "Ein Moodboard ist nur ein fertiges PDF/X für die Druckerei.",
      "Ein Moodboard ist ein anderes Wort für Schnittmarken.",
      "Ein Moodboard ist nur eine Liste mit Preisen."
    ],
    answer: "Ein Moodboard zeigt Stil, Farben, Typografie und Bildsprache vor dem Design.",
    help: "Ein Moodboard hilft, die visuelle Richtung mit dem Kunden zu klären."
  },
  {
    id: "q13",
    type: "single",
    question: "Was bedeutet PDF/X?",
    options: [
      "Ein PDF-Standard für druckfertige Daten.",
      "Ein Videoformat für Social Media.",
      "Ein WordPress Theme.",
      "Ein Farbname von Pantone."
    ],
    answer: "Ein PDF-Standard für druckfertige Daten.",
    help: "PDF/X wird für die sichere Übergabe an die Druckerei genutzt."
  },
  {
    id: "q14",
    type: "single",
    question: "Was ist eine Bild-Wort-Marke?",
    options: [
      "Eine Kombination aus Symbol und Schrift.",
      "Nur ein Foto ohne Text.",
      "Nur eine lange Broschüre.",
      "Ein Plugin für Formulare."
    ],
    answer: "Eine Kombination aus Symbol und Schrift.",
    help: "Bild-Wort-Marke kombiniert Bildzeichen und Text."
  },
  {
    id: "q15",
    type: "trueFalse",
    question: "Für Druckdaten sollte man Auflösung, CMYK, Beschnitt und Schriften prüfen.",
    options: ["richtig", "falsch"],
    answer: "richtig",
    help: "Diese Punkte gehören zur Druckvorstufe."
  },
  {
    id: "q16",
    type: "translation",
    question: "Was bedeutet die Druckdatei?",
    options: ["файл для друку", "цільова група", "мультимедійний монтаж", "головна сторінка сайту"],
    answer: "файл для друку",
    help: "Eine Druckdatei ist für die Produktion in der Druckerei vorbereitet."
  }
];
