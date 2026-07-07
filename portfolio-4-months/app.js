const storageKey = "portfolio-4-months-progress-v1";
const selectedWeekKey = "portfolio-4-months-selected-week-v1";
const learningStorageKey = "portfolio-4-months-learning-progress-v1";

const videos = {
  illustratorStart: {
    title: "Adobe Illustrator for Beginners: Get Started in 10 Minutes",
    channel: "Andy Tells Things",
    duration: "9:43",
    url: "https://www.youtube.com/watch?v=3NBKRywEbNs",
  },
  illustratorLogo: {
    title: "How to Design a Logo in Illustrator | Graphic Design Basics",
    channel: "Envato Tuts+",
    duration: "35:24",
    url: "https://www.youtube.com/watch?v=6jQxI06lM4k",
  },
  illustratorLogoShort: {
    title: "Logo Design Super Easy Techniques - Adobe Illustrator Tutorial",
    channel: "Graphic Station",
    duration: "9:19",
    url: "https://www.youtube.com/watch?v=6vmJ2xRfJfQ",
  },
  indesignStart: {
    title: "Learn Adobe InDesign in 11 MINUTES",
    channel: "LYH Studio",
    duration: "11:26",
    url: "https://www.youtube.com/watch?v=wF_fu1wcT0Y",
  },
  businessCard: {
    title: "Create a business card in Adobe InDesign",
    channel: "Creativity Garage",
    duration: "9:08",
    url: "https://www.youtube.com/watch?v=j29nZ5J4joU",
  },
  businessCardDeep: {
    title: "How to Make a Business Card in InDesign",
    channel: "Pixel & Bracket",
    duration: "31:23",
    url: "https://www.youtube.com/watch?v=OZUhMYHCFQU",
  },
  brochure: {
    title: "How to make Tri-fold Brochure in InDesign",
    channel: "LYH Studio",
    duration: "15:32",
    url: "https://www.youtube.com/watch?v=Dge6p4tJvPA",
  },
  brochurePages: {
    title: "Designing Multi Page Brochures in Adobe InDesign",
    channel: "Faisal Mohammad",
    duration: "20:18",
    url: "https://www.youtube.com/watch?v=UZKNBfjSlws",
  },
  figmaLanding: {
    title: "Figma Tutorial For Beginners 2024 | Landing Page",
    channel: "Steven Steward",
    duration: "17:46",
    url: "https://www.youtube.com/watch?v=sUM0IUURMqM",
  },
  figmaWebsite: {
    title: "Figma tutorial for Beginners: Complete Website",
    channel: "Flux Academy",
    duration: "43:21",
    url: "https://www.youtube.com/watch?v=HZuk6Wkx_Eg",
  },
  elementorBasics: {
    title: "Elementor Wordpress Tutorial - The Basics in 10 Minutes",
    channel: "Rino de Boer",
    duration: "11:04",
    url: "https://www.youtube.com/watch?v=E15iQEm9KF8",
  },
  elementorLanding: {
    title: "How to Build an EFFECTIVE Landing Page with WordPress",
    channel: "Hostinger Academy",
    duration: "8:38",
    url: "https://www.youtube.com/watch?v=wXr3fhPcZTY",
  },
  photoshopSocial: {
    title: "Social Media Post Design Photoshop Tutorial",
    channel: "3 Step Studio",
    duration: "19:09",
    url: "https://www.youtube.com/watch?v=lgbn2q8TTSI",
  },
  printPdf: {
    title: "How to Export a PDF for Print in InDesign in UNDER 2 mins",
    channel: "Paul Greenwood",
    duration: "1:36",
    url: "https://www.youtube.com/watch?v=s4FX9T0Dq54",
  },
  printPdfDeep: {
    title: "Export a Print-Ready PDF from InDesign",
    channel: "Print Design Academy",
    duration: "16:31",
    url: "https://www.youtube.com/watch?v=_yMYl0yWEfU",
  },
  behance: {
    title: "Create a Behance case study + FREE layout template",
    channel: "Made by Fran",
    duration: "12:56",
    url: "https://www.youtube.com/watch?v=NnG4fg9xlWc",
  },
};

const plan = [
  {
    id: "w01",
    title: "Briefing, Zielgruppe und Moodboard",
    month: "Monat 1",
    pdf: "Marketing, Zielgruppe, Moodboard, Corporate Identity",
    goal: "Створити основу для бренду, щоб усі наступні роботи виглядали як один реальний клієнтський проєкт.",
    project: "Moodboard und Briefing für Arztpraxis",
    tools: ["Figma", "Illustrator"],
    days: [
      {
        id: "w01a",
        label: "Tag A",
        title: "Briefing und Zielgruppe",
        time: "75-90 Min",
        light: "35 Min",
        focus: "Не дизайнити одразу. Спочатку зрозуміти клієнта, цільову групу і тон бренду.",
        theory: ["Briefing", "Zielgruppe", "Persona", "Moodboard", "Corporate Identity"],
        fach: ["das Briefing", "die Zielgruppe", "die Persona", "das Moodboard", "die Corporate Identity"],
        practice: ["Напиши короткий Kundenbriefing на 8-10 речень.", "Створи 1 Persona: вік, потреби, стиль, бюджет, страхи.", "Збери Moodboard з 12 референсів: кольори, типографіка, фото, стиль."],
        portfolio: ["PDF/Slide: Briefing + Persona + Moodboard"],
        adobe: "Illustrator: зроби простий Moodboard з кольоровими прямокутниками і ключовими словами.",
        figma: "Figma: зроби той самий Moodboard як editable board.",
        videos: [videos.illustratorStart],
      },
      {
        id: "w01b",
        label: "Tag B",
        title: "Markenrichtung festlegen",
        time: "75-90 Min",
        light: "40 Min",
        focus: "Перетворити хаотичні ідеї у зрозумілу Richtung: modern, freundlich, premium, laut, ruhig.",
        theory: ["Corporate Design", "Bildsprache", "Farbwirkung", "Tonalität"],
        fach: ["die Bildsprache", "die Farbwirkung", "die Tonalität", "der Stil", "die Markenwirkung"],
        practice: ["Вибери 3 brand attributes.", "Підбери 2 шрифтові напрями.", "Створи 2 різні mood directions і вибери одну."],
        portfolio: ["Brand Direction Page з поясненням: Warum diese Richtung?"],
        adobe: "Illustrator: склади Brand Direction Sheet.",
        figma: "Figma: зроби альтернативний Brand Direction Sheet для сайту.",
        videos: [videos.illustratorStart],
      },
    ],
  },
  {
    id: "w02",
    title: "Logo-Projekt in Illustrator",
    month: "Monat 1",
    pdf: "Schriftwahl, Mikrotypografie, Corporate Design",
    goal: "Зробити логотип, який можна поставити в портфоліо: не копія з уроку, а власна система.",
    project: "Logo + Logo-Varianten",
    tools: ["Illustrator", "Figma"],
    days: [
      {
        id: "w02a",
        label: "Tag A",
        title: "Logo-Skizzen und Vektorformen",
        time: "75-90 Min",
        light: "35 Min",
        focus: "Зробити 12 маленьких ідей, а не зависнути на одному логотипі.",
        theory: ["Vektor", "Form", "Kontrast", "Schriftwahl"],
        fach: ["die Vektorgrafik", "die Form", "der Kontrast", "die Schriftwahl", "die Wortmarke"],
        practice: ["Намалюй 12 thumbnails на папері.", "Вибери 3 варіанти.", "Побудуй 1-2 варіанти у Illustrator з базових форм."],
        portfolio: ["Logo process: sketches + 2 vector drafts"],
        adobe: "Illustrator: Shape Builder, Pathfinder, Align, Outline Stroke.",
        figma: "Figma: повтори один варіант логотипу в vector tools як UI-ready SVG.",
        videos: [videos.illustratorStart, videos.illustratorLogoShort],
      },
      {
        id: "w02b",
        label: "Tag B",
        title: "Logo finalisieren",
        time: "75-90 Min",
        light: "45 Min",
        focus: "Довести один знак до чистого вигляду і показати, де він працює.",
        theory: ["Schutzzone", "Skalierbarkeit", "Lesbarkeit", "Logo-Varianten"],
        fach: ["die Schutzzone", "die Skalierbarkeit", "die Lesbarkeit", "die Logo-Variante"],
        practice: ["Створи Hauptlogo, Icon, Schwarz-Weiß-Version.", "Перевір розмір 24 px і 30 mm.", "Експортуй SVG, PDF, PNG."],
        portfolio: ["Logo Board з фінальним логотипом і 3 застосуваннями"],
        adobe: "Illustrator: clean paths, export assets.",
        figma: "Figma: logo component + variants.",
        videos: [videos.illustratorLogo],
      },
    ],
  },
  {
    id: "w03",
    title: "Typografie und Farbpalette",
    month: "Monat 1",
    pdf: "Typografie, Schriftfamilie, Farbkreis, RGB/CMYK",
    goal: "Зробити typographic + color system для бренду, щоб не вибирати випадкові шрифти й кольори.",
    project: "Mini Corporate Design Sheet",
    tools: ["Illustrator", "Figma"],
    days: [
      {
        id: "w03a",
        label: "Tag A",
        title: "Schriftsystem",
        time: "75-90 Min",
        light: "35 Min",
        focus: "Підібрати шрифти для заголовка, підзаголовка і тексту, пояснити вибір німецькою.",
        theory: ["Serif/Sans Serif", "Schriftfamilie", "Hierarchie", "Lesbarkeit"],
        fach: ["die Schriftfamilie", "die Hierarchie", "die Lesbarkeit", "der Fließtext", "die Überschrift"],
        practice: ["Створи 3 typographic pairs.", "Порівняй читабельність.", "Вибери фінальну пару і напиши коротке Warum."],
        portfolio: ["Typography Sheet з H1, H2, Fließtext і прикладом застосування"],
        adobe: "Illustrator: typography board.",
        figma: "Figma: text styles H1/H2/body/buttons.",
        videos: [videos.illustratorStart],
      },
      {
        id: "w03b",
        label: "Tag B",
        title: "Farbpalette RGB/CMYK",
        time: "75-90 Min",
        light: "40 Min",
        focus: "Зробити кольори, які працюють і для екрана, і для друку.",
        theory: ["Farbkreis", "Farbkontrast", "RGB", "CMYK", "Farbprofil"],
        fach: ["der Farbkreis", "der Farbkontrast", "RGB", "CMYK", "das Farbprofil"],
        practice: ["Створи 1 primary, 2 secondary, 2 neutral colors.", "Перевір контраст для тексту.", "Зроби RGB і CMYK нотатки."],
        portfolio: ["Color System Sheet + Anwendung auf logo background"],
        adobe: "Illustrator: swatches + color guide.",
        figma: "Figma: color styles + accessibility note.",
        videos: [videos.illustratorStart],
      },
    ],
  },
  {
    id: "w04",
    title: "Visitenkarte und Brand Stationery",
    month: "Monat 1",
    pdf: "Satzspiegel, Rand, Druckdaten, Beschnitt",
    goal: "Зробити перший реальний print deliverable: візитка і маленький stationery set.",
    project: "Visitenkarte + Briefkopf",
    tools: ["InDesign", "Illustrator", "Figma"],
    days: [
      {
        id: "w04a",
        label: "Tag A",
        title: "Visitenkarte Layout",
        time: "75-90 Min",
        light: "35 Min",
        focus: "Побудувати правильний документ: формат, поля, Beschnitt, Raster.",
        theory: ["Satzspiegel", "Rand", "Beschnitt", "Schnittmarken"],
        fach: ["der Satzspiegel", "der Rand", "der Beschnitt", "die Schnittmarken"],
        practice: ["Створи документ 85 x 55 mm + 3 mm Beschnitt.", "Розмісти логотип, ім'я, контакти.", "Зроби 2 варіанти Vorderseite/Rückseite."],
        portfolio: ["Business card mockup або PDF preview"],
        adobe: "InDesign: document setup, margins, bleed.",
        figma: "Figma: digital preview version для portfolio case.",
        videos: [videos.indesignStart, videos.businessCard],
      },
      {
        id: "w04b",
        label: "Tag B",
        title: "Print-ready Check",
        time: "75-90 Min",
        light: "45 Min",
        focus: "Підготувати візитку так, ніби її можна відправити в друкарню.",
        theory: ["PDF/X", "CMYK", "Druckdaten", "Preflight"],
        fach: ["das PDF/X", "die Druckdaten", "die Druckerei", "die Qualitätskontrolle"],
        practice: ["Перевір 3 mm Beschnitt.", "Експортуй PDF print.", "Зроби checklist: fonts, images, CMYK, bleed."],
        portfolio: ["Export PDF + screenshot preflight checklist"],
        adobe: "InDesign: export PDF, marks and bleed.",
        figma: "Figma: show final stationery board.",
        videos: [videos.printPdf, videos.printPdfDeep],
      },
    ],
  },
  {
    id: "w05",
    title: "Flyer oder Poster",
    month: "Monat 2",
    pdf: "Layout, Raster, Weißraum, Leserführung",
    goal: "Зробити A5 flyer/poster, де видно типографіку, ієрархію і не хаотичний layout.",
    project: "A5 Flyer für Event oder Angebot",
    tools: ["InDesign", "Photoshop", "Figma"],
    days: [
      {
        id: "w05a",
        label: "Tag A",
        title: "Raster und Leserführung",
        time: "75-90 Min",
        light: "35 Min",
        focus: "Спочатку побудова, потім стиль. Ти маєш знати, куди дивиться читач.",
        theory: ["Raster", "Weißraum", "Blickfang", "Leserführung"],
        fach: ["das Raster", "der Weißraum", "der Blickfang", "die Leserführung"],
        practice: ["Створи A5 document з 3-column grid.", "Познач Blickfang.", "Зроби два варіанти: crowded vs clean."],
        portfolio: ["Before/After: поганий і професійний layout"],
        adobe: "InDesign: grid, columns, baseline rhythm.",
        figma: "Figma: той самий flyer як digital layout.",
        videos: [videos.indesignStart],
      },
      {
        id: "w05b",
        label: "Tag B",
        title: "Final Flyer",
        time: "75-90 Min",
        light: "45 Min",
        focus: "Зібрати готовий flyer з текстом, фото, call-to-action і print export.",
        theory: ["Typografische Hierarchie", "Kontrast", "Call-to-Action", "Bildrechte"],
        fach: ["die Hierarchie", "der Kontrast", "der Call-to-Action", "das Bildrecht"],
        practice: ["Постав H1, Untertitel, Fließtext, CTA.", "Оброби фото або mockup.", "Експортуй print PDF і web PNG."],
        portfolio: ["Final A5 Flyer + mockup + short explanation"],
        adobe: "InDesign + Photoshop image adjustment.",
        figma: "Figma preview board.",
        videos: [videos.photoshopSocial, videos.printPdf],
      },
    ],
  },
  {
    id: "w06",
    title: "Broschüre mit mehreren Seiten",
    month: "Monat 2",
    pdf: "Satzarten, Satzspiegel, Print-Formate, Papier",
    goal: "Зробити 6-8 сторінок, щоб показати, що ти можеш працювати з InDesign, Master Pages і текстом.",
    project: "Mini-Broschüre 6-8 Seiten",
    tools: ["InDesign", "Illustrator"],
    days: [
      {
        id: "w06a",
        label: "Tag A",
        title: "Broschürenstruktur",
        time: "75-90 Min",
        light: "40 Min",
        focus: "Побудувати структуру: cover, intro, service pages, contact.",
        theory: ["Satzspiegel", "Spalten", "Master Page", "Papierformat"],
        fach: ["die Broschüre", "die Musterseite", "die Spalte", "das Papierformat"],
        practice: ["Створи document 8 pages.", "Зроби Master Page з page number.", "Розклади rough content без деталей."],
        portfolio: ["Wireframe spread preview"],
        adobe: "InDesign: pages, parent/master, grids.",
        figma: "Figma: зроби digital wireframe для тих самих сторінок.",
        videos: [videos.brochure, videos.indesignStart],
      },
      {
        id: "w06b",
        label: "Tag B",
        title: "Broschüre finalisieren",
        time: "75-90 Min",
        light: "45 Min",
        focus: "Довести 2-3 ключові розвороти до рівня портфоліо, не мучити всі сторінки ідеально.",
        theory: ["Textgestaltung", "Bild-Text-Verhältnis", "Papierwahl", "Endverarbeitung"],
        fach: ["das Verhältnis", "die Papierwahl", "die Endverarbeitung", "der Falz"],
        practice: ["Зроби cover, one service spread, contact page.", "Постав real image treatment.", "Експортуй PDF preview."],
        portfolio: ["3 polished spreads + PDF preview"],
        adobe: "InDesign: styles, links, PDF export.",
        figma: "Figma presentation board.",
        videos: [videos.brochurePages, videos.printPdf],
      },
    ],
  },
  {
    id: "w07",
    title: "Social Media Kampagne",
    month: "Monat 2",
    pdf: "Marketing, Werbung, Farbwirkung, Bildformate",
    goal: "Зробити маленьку кампанію, а не один random post.",
    project: "3 Social Media Posts + Kampagnenidee",
    tools: ["Photoshop", "Illustrator", "Figma"],
    days: [
      {
        id: "w07a",
        label: "Tag A",
        title: "Kampagnenidee und Format",
        time: "75-90 Min",
        light: "35 Min",
        focus: "Сформулювати повідомлення і зробити систему для 3 постів.",
        theory: ["AIDA", "Zielgruppe", "Format", "Bildsprache"],
        fach: ["die Kampagne", "die Botschaft", "das Format", "die Bildsprache"],
        practice: ["Напиши Kampagnenziel.", "Створи 3 post ideas: awareness, offer, trust.", "Вибери формат 1080 x 1080 або 1080 x 1350."],
        portfolio: ["Campaign concept + content plan"],
        adobe: "Photoshop: artboard setup, image crop.",
        figma: "Figma: post templates as components.",
        videos: [videos.photoshopSocial],
      },
      {
        id: "w07b",
        label: "Tag B",
        title: "3 Posts gestalten",
        time: "75-90 Min",
        light: "45 Min",
        focus: "Зробити 3 пости в одному стилі: фото, заголовок, CTA, бренд-елементи.",
        theory: ["Kontrast", "Lesbarkeit", "CTA", "Serie"],
        fach: ["der Kontrast", "die Lesbarkeit", "die Serie", "der Call-to-Action"],
        practice: ["Створи 3 posts.", "Перевір читабельність на mobile.", "Експортуй PNG/JPG і зроби mockup."],
        portfolio: ["3-post social media campaign board"],
        adobe: "Photoshop + Illustrator brand elements.",
        figma: "Figma alternative: same campaign board.",
        videos: [videos.photoshopSocial],
      },
    ],
  },
  {
    id: "w08",
    title: "Print Workflow und Mini Case Study",
    month: "Monat 2",
    pdf: "Druckverfahren, Druckmarken, PDF, Farbmanagement",
    goal: "Підсумувати print-проєкти й показати не тільки дизайн, а й процес.",
    project: "Print Case Study",
    tools: ["InDesign", "Behance/Figma"],
    days: [
      {
        id: "w08a",
        label: "Tag A",
        title: "Druckdaten erklären",
        time: "75-90 Min",
        light: "35 Min",
        focus: "Навчитися пояснювати Druckdaten німецькою коротко і правильно.",
        theory: ["Druckdaten", "PDF/X", "Beschnitt", "Druckmarken", "Farbprofil"],
        fach: ["die Druckdaten", "das PDF/X", "der Beschnitt", "die Druckmarken", "das Farbprofil"],
        practice: ["Напиши 8-sentence Erklärung: how you prepared print files.", "Зроби checklist для Druckerei.", "Перевір один старий PDF."],
        portfolio: ["Druckdaten checklist page"],
        adobe: "InDesign: export settings screenshot.",
        figma: "Figma: presentation slide with process.",
        videos: [videos.printPdf, videos.printPdfDeep],
      },
      {
        id: "w08b",
        label: "Tag B",
        title: "Mini Case Study bauen",
        time: "75-90 Min",
        light: "45 Min",
        focus: "Зібрати перший портфоліо-кейс з проєктів місяця 1-2.",
        theory: ["Problem", "Research", "Design Process", "Final Result"],
        fach: ["das Problem", "die Recherche", "der Entwurfsprozess", "das Endergebnis"],
        practice: ["Збери 6 slides: problem, moodboard, logo, flyer, brochure, final.", "Напиши короткі пояснення DE/UA.", "Познач next improvements."],
        portfolio: ["Mini Behance-style case study"],
        adobe: "Export assets from Illustrator/InDesign.",
        figma: "Figma case study layout.",
        videos: [videos.behance],
      },
    ],
  },
  {
    id: "w09",
    title: "Figma Landing Page",
    month: "Monat 3",
    pdf: "Internet, HTML, CSS, Bildformate, Webtypografie",
    goal: "Перенести бренд у веб: одна сторінка з hero, services, proof, CTA.",
    project: "One-page Website Design",
    tools: ["Figma", "Illustrator"],
    days: [
      {
        id: "w09a",
        label: "Tag A",
        title: "Wireframe und Struktur",
        time: "75-90 Min",
        light: "35 Min",
        focus: "Спочатку структура сайту, не декор.",
        theory: ["Website-Zweck", "Informationsarchitektur", "CTA", "Responsive"],
        fach: ["die Webseite", "die Struktur", "der Call-to-Action", "responsive"],
        practice: ["Створи wireframe: hero, services, about, testimonials, contact.", "Напиши 1 Hauptziel.", "Познач primary CTA."],
        portfolio: ["Landing page wireframe"],
        adobe: "Illustrator: icons or logo refinements.",
        figma: "Figma: desktop wireframe.",
        videos: [videos.figmaLanding],
      },
      {
        id: "w09b",
        label: "Tag B",
        title: "Visual Design",
        time: "75-90 Min",
        light: "45 Min",
        focus: "Зробити красиву desktop версію, яка виглядає як реальний сайт.",
        theory: ["UI Hierarchie", "Weißraum", "Buttons", "Webtypografie"],
        fach: ["die Benutzeroberfläche", "der Button", "der Weißraum", "die Webtypografie"],
        practice: ["Зроби polished desktop design.", "Створи buttons, cards, section spacing.", "Підготуй mobile rough version."],
        portfolio: ["Landing Page Design desktop + mobile preview"],
        adobe: "Illustrator assets.",
        figma: "Figma components and auto layout.",
        videos: [videos.figmaWebsite],
      },
    ],
  },
  {
    id: "w10",
    title: "UI System und Responsive Varianten",
    month: "Monat 3",
    pdf: "Webformate, CSS, Lesbarkeit am Bildschirm",
    goal: "Показати, що ти не просто малюєш картинку, а думаєш про UI system.",
    project: "Responsive UI Kit für Landing Page",
    tools: ["Figma"],
    days: [
      {
        id: "w10a",
        label: "Tag A",
        title: "Komponenten bauen",
        time: "75-90 Min",
        light: "35 Min",
        focus: "Зібрати повторювані елементи: buttons, cards, nav, form fields.",
        theory: ["Komponenten", "Zustände", "Konsistenz", "Accessibility"],
        fach: ["die Komponente", "der Zustand", "die Konsistenz", "die Barrierefreiheit"],
        practice: ["Створи button primary/secondary.", "Створи service card.", "Створи form field і navigation."],
        portfolio: ["Mini UI Kit page"],
        adobe: "Illustrator: icons in same style.",
        figma: "Figma component variants.",
        videos: [videos.figmaLanding],
      },
      {
        id: "w10b",
        label: "Tag B",
        title: "Mobile und Tablet",
        time: "75-90 Min",
        light: "45 Min",
        focus: "Зробити сайт не тільки desktop. Mobile має бути читабельним.",
        theory: ["Responsive Design", "Breakpoints", "Lesbarkeit", "Touch Targets"],
        fach: ["responsive Design", "der Breakpoint", "die Lesbarkeit", "die Bedienbarkeit"],
        practice: ["Зроби mobile hero + services.", "Перевір font sizes.", "Зроби коротку note: what changes on mobile."],
        portfolio: ["Responsive preview: desktop/tablet/mobile"],
        adobe: "Export logo/icons as SVG.",
        figma: "Responsive variants.",
        videos: [videos.figmaWebsite],
      },
    ],
  },
  {
    id: "w11",
    title: "WordPress und Elementor Aufbau",
    month: "Monat 3",
    pdf: "Internet, Dateiformate, Web Workflow",
    goal: "Перетворити Figma landing page у WordPress/Elementor завдання.",
    project: "Elementor Landing Page Setup",
    tools: ["WordPress", "Elementor"],
    days: [
      {
        id: "w11a",
        label: "Tag A",
        title: "WordPress Grundsetup",
        time: "75-90 Min",
        light: "35 Min",
        focus: "Не просто ставити плагіни, а зрозуміти базу: theme, plugins, pages, backup.",
        theory: ["Domain", "Hosting", "Theme", "Plugin", "Backup"],
        fach: ["die Domain", "das Hosting", "das Theme", "das Plugin", "das Backup"],
        practice: ["Створи page structure.", "Перевір permalink.", "Запиши список потрібних plugins: Elementor, SEO, forms, backup."],
        portfolio: ["WordPress setup checklist"],
        adobe: "Export final assets from Adobe/Figma.",
        figma: "Prepare assets for implementation.",
        videos: [videos.elementorBasics],
      },
      {
        id: "w11b",
        label: "Tag B",
        title: "Elementor Struktur",
        time: "75-90 Min",
        light: "45 Min",
        focus: "Побудувати сторінку секціями: hero, services, about, CTA, contact.",
        theory: ["Container", "Responsive", "Template", "Global Styles"],
        fach: ["der Container", "die Vorlage", "die globalen Stile", "das Formular"],
        practice: ["Побудуй hero + services в Elementor.", "Налаштуй spacing і typography.", "Перевір mobile."],
        portfolio: ["Screenshot Elementor structure + live preview"],
        adobe: "Use optimized images.",
        figma: "Compare with Figma design.",
        videos: [videos.elementorBasics, videos.elementorLanding],
      },
    ],
  },
  {
    id: "w12",
    title: "Elementor Plugins, Forms und SEO",
    month: "Monat 3",
    pdf: "Internet, Dateiformate, digitale Medien",
    goal: "Зробити сайт не тільки красивим, а й практично правильним.",
    project: "Functional Landing Page",
    tools: ["WordPress", "Elementor"],
    days: [
      {
        id: "w12a",
        label: "Tag A",
        title: "Forms und Plugins",
        time: "75-90 Min",
        light: "35 Min",
        focus: "Додати функції обережно: форма, SEO, backup, performance.",
        theory: ["Formular", "Datenschutz", "SEO", "Plugin-Auswahl"],
        fach: ["das Formular", "der Datenschutz", "die Suchmaschinenoptimierung", "die Ladezeit"],
        practice: ["Створи contact form.", "Додай privacy note.", "Перевір потрібні/зайві plugins."],
        portfolio: ["Functional checklist + screenshot"],
        adobe: "Optimize images.",
        figma: "Check form design consistency.",
        videos: [videos.elementorLanding],
      },
      {
        id: "w12b",
        label: "Tag B",
        title: "SEO und Übergabe",
        time: "75-90 Min",
        light: "45 Min",
        focus: "Оформити сайт так, ніби ти передаєш клієнту.",
        theory: ["Meta Title", "Meta Description", "Alt-Text", "Client Handoff"],
        fach: ["der Meta Title", "die Meta Description", "der Alt-Text", "die Übergabe"],
        practice: ["Напиши meta title/description.", "Додай alt texts.", "Зроби handoff checklist для клієнта."],
        portfolio: ["Landing page case: design + implementation notes"],
        adobe: "Export final web assets.",
        figma: "Update case study with WordPress section.",
        videos: [videos.elementorBasics],
      },
    ],
  },
  {
    id: "w13",
    title: "Portfolio Case Study aufbauen",
    month: "Monat 4",
    pdf: "Projektprozess, Kundenkommunikation, Präsentation",
    goal: "Зібрати все в портфоліо-історію: проблема, процес, рішення, результат.",
    project: "Behance Case Study",
    tools: ["Figma", "Behance", "Adobe"],
    days: [
      {
        id: "w13a",
        label: "Tag A",
        title: "Case Struktur",
        time: "75-90 Min",
        light: "35 Min",
        focus: "Зібрати матеріали і не губитися: що показати, що прибрати.",
        theory: ["Problem", "Research", "Moodboard", "Design Process", "Mockups"],
        fach: ["das Problem", "die Recherche", "der Prozess", "das Mockup", "das Ergebnis"],
        practice: ["Створи outline case study.", "Вибери 8-12 найсильніших зображень.", "Напиши короткі captions."],
        portfolio: ["Case study outline"],
        adobe: "Export logo/flyer/brochure assets.",
        figma: "Design Behance-style layout.",
        videos: [videos.behance],
      },
      {
        id: "w13b",
        label: "Tag B",
        title: "Case Design",
        time: "75-90 Min",
        light: "45 Min",
        focus: "Зробити презентацію кейсу красивою, але читабельною.",
        theory: ["Storytelling", "Hierarchy", "Mockup-Auswahl", "Textlänge"],
        fach: ["das Storytelling", "die Hierarchie", "die Präsentation", "die Fallstudie"],
        practice: ["Зроби cover, process, final result sections.", "Додай 1 коротке німецьке пояснення.", "Перевір, щоб кейс не був перевантажений."],
        portfolio: ["Behance-ready case study draft"],
        adobe: "Photoshop mockups.",
        figma: "Final case layout.",
        videos: [videos.behance],
      },
    ],
  },
  {
    id: "w14",
    title: "LinkedIn, CV und Portfolio PDF",
    month: "Monat 4",
    pdf: "Medienproduktion, digitale Formate, Präsentation",
    goal: "Підготувати себе як Junior Designer/Medienfachfrau: не тільки роботи, а й нормальна подача.",
    project: "Portfolio PDF + LinkedIn Update",
    tools: ["InDesign", "Figma", "LinkedIn"],
    days: [
      {
        id: "w14a",
        label: "Tag A",
        title: "Portfolio PDF Struktur",
        time: "75-90 Min",
        light: "35 Min",
        focus: "Зробити короткий PDF, який можна показати Ausbilder або роботодавцю.",
        theory: ["Portfolio-Auswahl", "Dateiformat", "PDF", "Reihenfolge"],
        fach: ["das Portfolio", "die Reihenfolge", "das Dateiformat", "die Auswahl"],
        practice: ["Вибери 3 проєкти.", "Створи 6-8 page PDF structure.", "Напиши one-sentence role per project."],
        portfolio: ["Portfolio PDF draft"],
        adobe: "InDesign portfolio layout.",
        figma: "Alternative portfolio deck.",
        videos: [videos.indesignStart],
      },
      {
        id: "w14b",
        label: "Tag B",
        title: "LinkedIn und Präsentation",
        time: "75-90 Min",
        light: "45 Min",
        focus: "Оновити професійний профіль і навчитися коротко презентувати себе.",
        theory: ["Kurzprofil", "Skills", "Projektbeschreibung", "Kontakt"],
        fach: ["das Kurzprofil", "die Fähigkeiten", "die Projektbeschreibung", "der Kontakt"],
        practice: ["Напиши LinkedIn headline.", "Опиши 2 проєкти коротко.", "Підготуй 45-second self intro Deutsch."],
        portfolio: ["LinkedIn text + portfolio PDF v1"],
        adobe: "Export portfolio PDF.",
        figma: "Presentation version.",
        videos: [videos.behance],
      },
    ],
  },
  {
    id: "w15",
    title: "Finale Crossmedia Kampagne",
    month: "Monat 4",
    pdf: "Marketing, Print, Digital, Web, Druckdaten",
    goal: "Зробити фінальний проєкт, який об'єднує Adobe, Figma, WordPress і Prüfung-терміни.",
    project: "Final Campaign: Logo, Print, Social, Landing Page",
    tools: ["Illustrator", "InDesign", "Photoshop", "Figma", "Elementor"],
    days: [
      {
        id: "w15a",
        label: "Tag A",
        title: "Campaign Konzept",
        time: "75-90 Min",
        light: "40 Min",
        focus: "Не робити все заново, а об'єднати найкраще в одну кампанію.",
        theory: ["Kampagnenziel", "Kanäle", "Zielgruppe", "Corporate Design"],
        fach: ["das Kampagnenziel", "der Kanal", "die Zielgruppe", "das Corporate Design"],
        practice: ["Використай клієнта EcoHome Cleaning.", "Напиши campaign goal.", "Склади asset list: logo, flyer, posts, landing page."],
        portfolio: ["Final campaign plan"],
        adobe: "Collect final assets.",
        figma: "Campaign overview board.",
        videos: [videos.behance],
      },
      {
        id: "w15b",
        label: "Tag B",
        title: "Finale Assets",
        time: "75-90 Min",
        light: "45 Min",
        focus: "Доробити найсильніші частини, не намагатися зробити ідеально все.",
        theory: ["Qualitätskontrolle", "Konsistenz", "Export", "Präsentation"],
        fach: ["die Qualitätskontrolle", "die Konsistenz", "der Export", "die Präsentation"],
        practice: ["Перевір логотип, flyer, 1 post, landing page hero.", "Експортуй потрібні формати.", "Зроби final board."],
        portfolio: ["Final campaign presentation board"],
        adobe: "AI/INDD/PSD final cleanup.",
        figma: "Final presentation board.",
        videos: [videos.printPdf, videos.figmaLanding],
      },
    ],
  },
  {
    id: "w16",
    title: "Prüfungssimulation und Portfolio Review",
    month: "Monat 4",
    pdf: "Alle Hauptthemen: Typografie, Druck, Farbe, Digital, Marketing",
    goal: "Закрити 4 місяці: підготувати портфоліо і потренувати Fachgespräch.",
    project: "Final Review + Fachgespräch",
    tools: ["Figma", "Adobe", "WordPress"],
    days: [
      {
        id: "w16a",
        label: "Tag A",
        title: "Fachgespräch vorbereiten",
        time: "75-90 Min",
        light: "35 Min",
        focus: "Пояснити свої рішення німецькою простими, правильними реченнями.",
        theory: ["Typografie", "CMYK/RGB", "Beschnitt", "Raster", "Zielgruppe", "PDF/X"],
        fach: ["Ich habe ... verwendet, weil ...", "Für den Druck brauche ich ...", "Die Zielgruppe ist ..."],
        practice: ["Підготуй 12 Fragen-Antworten до свого final project.", "Запиши 5 речень Warum.", "Проговори вголос 10 хвилин."],
        portfolio: ["Fachgespräch crib sheet"],
        adobe: "Open final files and explain settings.",
        figma: "Presentation mode rehearsal.",
        videos: [videos.printPdfDeep],
      },
      {
        id: "w16b",
        label: "Tag B",
        title: "Portfolio Review",
        time: "75-90 Min",
        light: "45 Min",
        focus: "Вибрати найкраще і зробити наступний план без перевантаження.",
        theory: ["Selbstbewertung", "Portfolio-Auswahl", "Next Steps"],
        fach: ["die Selbstbewertung", "die Verbesserung", "der nächste Schritt"],
        practice: ["Оціни кожен проєкт 1-5.", "Вибери 2 кейси для Behance.", "Запиши, що переробити пізніше."],
        portfolio: ["Final portfolio checklist + next action list"],
        adobe: "Archive final exports.",
        figma: "Final presentation cleanup.",
        videos: [videos.behance],
      },
    ],
  },
];

const clientBriefs = {
  w01: {
    company: "Luna Kava Studio",
    industry: "kleines Café mit Workshops und Take-away",
    wantsDe: "Die Kundin eröffnet ein kleines Café und braucht zuerst eine klare Markenrichtung.",
    wantsUa: "Клієнтка відкриває маленьку кав'ярню і спочатку потребує чіткого напрямку бренду.",
    orderDe: "Erstelle ein Briefing, eine Persona und ein Moodboard für die neue Marke.",
    orderUa: "Створи бриф, персону і moodboard для нового бренду.",
    deliverables: ["Briefing", "Persona", "Moodboard"],
    today: [
      {
        de: "Kläre, wer die Zielgruppe ist und welches Gefühl die Marke vermitteln soll.",
        ua: "З'ясуй, хто цільова група і яке відчуття має передавати бренд.",
      },
      {
        de: "Lege die erste Markenrichtung fest: freundlich, warm, modern und ruhig.",
        ua: "Визнач перший напрямок бренду: дружній, теплий, сучасний і спокійний.",
      },
    ],
  },
  w02: {
    company: "Luna Kava Studio",
    industry: "Café Branding",
    wantsDe: "Die Kundin braucht ein Logo, das auf Schild, Becher, Visitenkarte und Website funktioniert.",
    wantsUa: "Клієнтці потрібен логотип, який працює на вивісці, стаканчиках, візитці та сайті.",
    orderDe: "Gestalte ein Logo mit Varianten und prüfe, ob es klein und groß gut lesbar ist.",
    orderUa: "Створи логотип з варіантами і перевір, чи він добре читається в малому і великому розмірі.",
    deliverables: ["Hauptlogo", "Icon", "Schwarz-Weiß-Version", "SVG/PDF/PNG"],
    today: [
      {
        de: "Skizziere mehrere Logo-Ideen und baue die besten Varianten in Illustrator nach.",
        ua: "Намалюй кілька ідей логотипу і побудуй найкращі варіанти в Illustrator.",
      },
      {
        de: "Finalisiere das Logo und exportiere die wichtigsten Dateien für Print und Web.",
        ua: "Доведи логотип до фіналу і експортуй основні файли для друку та вебу.",
      },
    ],
  },
  w03: {
    company: "Luna Kava Studio",
    industry: "Corporate Design",
    wantsDe: "Die Marke braucht passende Schriften und Farben, damit alle Materialien einheitlich wirken.",
    wantsUa: "Бренду потрібні правильні шрифти і кольори, щоб усі матеріали виглядали єдино.",
    orderDe: "Erstelle ein kleines Corporate Design Sheet mit Typografie und Farbpalette.",
    orderUa: "Створи маленький Corporate Design Sheet з типографікою і палітрою кольорів.",
    deliverables: ["Typografie-System", "Farbpalette", "RGB/CMYK-Notiz"],
    today: [
      {
        de: "Wähle eine Schriftkombination für Überschrift, Untertitel und Fließtext.",
        ua: "Вибери поєднання шрифтів для заголовка, підзаголовка і основного тексту.",
      },
      {
        de: "Definiere Farben für digitale Medien und Printprodukte.",
        ua: "Визнач кольори для цифрових медіа і друкованої продукції.",
      },
    ],
  },
  w04: {
    company: "Luna Kava Studio",
    industry: "Print Stationery",
    wantsDe: "Die Kundin möchte eine professionelle Visitenkarte und einen einfachen Briefkopf.",
    wantsUa: "Клієнтка хоче професійну візитку і простий фірмовий бланк.",
    orderDe: "Gestalte eine Visitenkarte mit Beschnitt und bereite eine druckfertige PDF-Datei vor.",
    orderUa: "Створи візитку з вильотом під обріз і підготуй PDF для друку.",
    deliverables: ["Visitenkarte Vorderseite", "Visitenkarte Rückseite", "Briefkopf", "PDF/X"],
    today: [
      {
        de: "Lege das Visitenkarten-Dokument mit Rand, Satzspiegel und Beschnitt an.",
        ua: "Створи документ для візитки з полями, Satzspiegel і Beschnitt.",
      },
      {
        de: "Prüfe die Druckdaten und exportiere die Visitenkarte für die Druckerei.",
        ua: "Перевір друкарські дані і експортуй візитку для друкарні.",
      },
    ],
  },
  w05: {
    company: "Luna Kava Studio",
    industry: "Event Promotion",
    wantsDe: "Das Café plant einen Wochenend-Workshop und braucht einen A5 Flyer.",
    wantsUa: "Кав'ярня планує воркшоп на вихідних і потребує A5 flyer.",
    orderDe: "Gestalte einen A5 Flyer mit klarer Leserführung, Blickfang und Call-to-Action.",
    orderUa: "Створи A5 flyer з чіткою Leserführung, Blickfang і call-to-action.",
    deliverables: ["A5 Flyer", "Print PDF", "Web PNG"],
    today: [
      {
        de: "Baue ein Raster und vergleiche eine enge Version mit einer Version mit mehr Weißraum.",
        ua: "Побудуй сітку і порівняй тісну версію з версією з більшим Weißraum.",
      },
      {
        de: "Gestalte den finalen Flyer mit Bild, Headline, Text und Call-to-Action.",
        ua: "Створи фінальний flyer із зображенням, заголовком, текстом і call-to-action.",
      },
    ],
  },
  w06: {
    company: "Luna Kava Studio",
    industry: "Imagebroschüre",
    wantsDe: "Die Kundin möchte eine kleine Broschüre, um Café, Workshops und Angebote vorzustellen.",
    wantsUa: "Клієнтка хоче маленьку брошуру, щоб презентувати кав'ярню, воркшопи і пропозиції.",
    orderDe: "Erstelle eine 6-8-seitige Broschüre mit Cover, Angeboten und Kontaktseite.",
    orderUa: "Створи брошуру на 6-8 сторінок з обкладинкою, пропозиціями і контактною сторінкою.",
    deliverables: ["Broschüre", "3 polierte Doppelseiten", "PDF Preview"],
    today: [
      {
        de: "Plane die Seitenstruktur und lege Musterseiten und Raster in InDesign an.",
        ua: "Сплануй структуру сторінок і створи master pages та сітку в InDesign.",
      },
      {
        de: "Finalisiere die wichtigsten Seiten und bereite eine Portfolio-Vorschau vor.",
        ua: "Доведи найважливіші сторінки до фіналу і підготуй прев'ю для портфоліо.",
      },
    ],
  },
  w07: {
    company: "Luna Kava Studio",
    industry: "Social Media Kampagne",
    wantsDe: "Das Café möchte mehr Besucherinnen für Workshops gewinnen.",
    wantsUa: "Кав'ярня хоче залучити більше відвідувачок на воркшопи.",
    orderDe: "Entwickle eine kleine Social-Media-Kampagne mit drei zusammengehörenden Posts.",
    orderUa: "Розроби маленьку social media кампанію з трьох пов'язаних постів.",
    deliverables: ["3 Instagram Posts", "Kampagnenidee", "Mockup"],
    today: [
      {
        de: "Definiere Kampagnenziel, Botschaft und drei Post-Ideen.",
        ua: "Визнач мету кампанії, повідомлення і три ідеї постів.",
      },
      {
        de: "Gestalte drei Posts in einem einheitlichen visuellen Stil.",
        ua: "Створи три пости в єдиному візуальному стилі.",
      },
    ],
  },
  w08: {
    company: "Luna Kava Studio",
    industry: "Print Case Study",
    wantsDe: "Die Kundin möchte verstehen, welche Dateien sie für Druck und Online bekommt.",
    wantsUa: "Клієнтка хоче розуміти, які файли вона отримує для друку і онлайн.",
    orderDe: "Erstelle eine kurze Case Study mit Druckdaten-Checkliste und finalen Ergebnissen.",
    orderUa: "Створи короткий case study з checklist для друку і фінальними результатами.",
    deliverables: ["Druckdaten-Checkliste", "Mini Case Study", "PDF/PNG Export"],
    today: [
      {
        de: "Erkläre Druckdaten, Beschnitt, PDF/X und Farbprofil in einfachen Sätzen.",
        ua: "Поясни Druckdaten, Beschnitt, PDF/X і Farbprofil простими реченнями.",
      },
      {
        de: "Baue eine kleine Case Study aus Logo, Flyer, Broschüre und Prozess.",
        ua: "Збери маленький case study з логотипу, flyer, брошури і процесу.",
      },
    ],
  },
  w09: {
    company: "Luna Kava Studio",
    industry: "Website Design",
    wantsDe: "Das Café braucht eine moderne One-Page-Website für Angebot, Workshops und Kontakt.",
    wantsUa: "Кав'ярні потрібен сучасний one-page сайт для пропозицій, воркшопів і контакту.",
    orderDe: "Entwirf eine Landing Page in Figma mit Hero, Services, About, Trust und Kontakt.",
    orderUa: "Створи дизайн landing page у Figma з hero, services, about, trust і contact.",
    deliverables: ["Desktop Wireframe", "Landing Page Design", "Mobile Preview"],
    today: [
      {
        de: "Plane die Seitenstruktur und erstelle einen klaren Wireframe.",
        ua: "Сплануй структуру сторінки і створи зрозумілий wireframe.",
      },
      {
        de: "Gestalte die finale Website-Oberfläche in Figma.",
        ua: "Створи фінальний дизайн сайту у Figma.",
      },
    ],
  },
  w10: {
    company: "Luna Kava Studio",
    industry: "UI System",
    wantsDe: "Die Website soll konsistent und auch auf dem Smartphone gut bedienbar sein.",
    wantsUa: "Сайт має бути послідовним і зручним також на смартфоні.",
    orderDe: "Erstelle ein kleines UI Kit und responsive Varianten für die Landing Page.",
    orderUa: "Створи маленький UI Kit і responsive варіанти для landing page.",
    deliverables: ["UI Kit", "Desktop/Tablet/Mobile Preview", "Komponenten"],
    today: [
      {
        de: "Baue wiederverwendbare Komponenten wie Buttons, Cards, Navigation und Formularfelder.",
        ua: "Створи повторювані компоненти: кнопки, cards, навігацію і поля форми.",
      },
      {
        de: "Passe die wichtigsten Bereiche für Mobile und Tablet an.",
        ua: "Адаптуй найважливіші блоки для mobile і tablet.",
      },
    ],
  },
  w11: {
    company: "Luna Kava Studio",
    industry: "WordPress Umsetzung",
    wantsDe: "Die Kundin möchte den Figma-Entwurf als echte WordPress-Seite sehen.",
    wantsUa: "Клієнтка хоче побачити Figma-дизайн як реальну WordPress-сторінку.",
    orderDe: "Baue die Landing Page in WordPress mit Elementor nach.",
    orderUa: "Побудуй landing page у WordPress через Elementor.",
    deliverables: ["WordPress Page", "Elementor Struktur", "Screenshots"],
    today: [
      {
        de: "Richte WordPress, Theme, Plugins und Seitenstruktur ein.",
        ua: "Налаштуй WordPress, theme, plugins і структуру сторінок.",
      },
      {
        de: "Baue Hero und Service-Bereich in Elementor nach.",
        ua: "Побудуй hero і service-блоки в Elementor.",
      },
    ],
  },
  w12: {
    company: "Luna Kava Studio",
    industry: "WordPress Funktionen",
    wantsDe: "Die Seite soll nicht nur schön sein, sondern auch Formular, SEO und mobile Darstellung haben.",
    wantsUa: "Сторінка має бути не тільки красивою, а й мати форму, SEO і mobile-версію.",
    orderDe: "Ergänze Formular, SEO-Basics, Alt-Texte und eine Übergabe-Checkliste.",
    orderUa: "Додай форму, SEO basics, alt-тексти і checklist для передачі клієнту.",
    deliverables: ["Kontaktformular", "SEO Texte", "Handoff Checklist"],
    today: [
      {
        de: "Füge Formular, Datenschutz-Hinweis und sinnvolle Plugins hinzu.",
        ua: "Додай форму, privacy note і потрібні plugins.",
      },
      {
        de: "Schreibe Meta Title, Meta Description, Alt-Texte und eine Übergabe-Notiz.",
        ua: "Напиши meta title, meta description, alt-тексти і нотатку для передачі.",
      },
    ],
  },
  w13: {
    company: "Luna Kava Studio",
    industry: "Portfolio Case",
    wantsDe: "Das Projekt soll professionell als Behance Case Study präsentiert werden.",
    wantsUa: "Проєкт треба професійно показати як Behance case study.",
    orderDe: "Baue eine Case Study mit Problem, Recherche, Prozess, Design und Ergebnis.",
    orderUa: "Збери case study з problem, research, process, design і final result.",
    deliverables: ["Behance Draft", "Case Structure", "Mockups"],
    today: [
      {
        de: "Sortiere alle Materialien und schreibe die Struktur der Case Study.",
        ua: "Відсортуй усі матеріали і напиши структуру case study.",
      },
      {
        de: "Gestalte die Case Study so, dass sie klar und professionell wirkt.",
        ua: "Оформи case study так, щоб він виглядав зрозуміло і професійно.",
      },
    ],
  },
  w14: {
    company: "Krystyna Lozova",
    industry: "Personal Portfolio",
    wantsDe: "Du brauchst eine kurze, professionelle Präsentation deiner besten Arbeiten.",
    wantsUa: "Тобі потрібна коротка професійна презентація найкращих робіт.",
    orderDe: "Erstelle ein Portfolio PDF und aktualisiere deine LinkedIn-Projekttexte.",
    orderUa: "Створи portfolio PDF і онови тексти про проєкти для LinkedIn.",
    deliverables: ["Portfolio PDF", "LinkedIn Texte", "Kurzprofil"],
    today: [
      {
        de: "Wähle die stärksten Projekte und baue eine klare Portfolio-Reihenfolge.",
        ua: "Вибери найсильніші проєкти і побудуй зрозумілий порядок portfolio.",
      },
      {
        de: "Schreibe kurze Projekttexte und eine 45-Sekunden-Vorstellung auf Deutsch.",
        ua: "Напиши короткі тексти про проєкти і 45-секундну самопрезентацію німецькою.",
      },
    ],
  },
  w15: {
    company: "Luna Kava Studio",
    industry: "Finale Crossmedia Kampagne",
    wantsDe: "Die Kundin möchte ein zusammenhängendes Paket aus Print, Social Media und Website.",
    wantsUa: "Клієнтка хоче цілісний пакет з print, social media і website.",
    orderDe: "Verbinde Logo, Visitenkarte, Broschüre, Social Posts, Figma Website und WordPress-Seite zu einer Kampagne.",
    orderUa: "Об'єднай логотип, візитку, брошуру, social posts, Figma website і WordPress-сторінку в одну кампанію.",
    deliverables: ["Campaign Board", "Finale Assets", "Export-Ordner"],
    today: [
      {
        de: "Plane die finale Kampagne und liste alle benötigten Medien auf.",
        ua: "Сплануй фінальну кампанію і випиши всі потрібні медіа.",
      },
      {
        de: "Bereinige die wichtigsten finalen Dateien und erstelle ein Präsentationsboard.",
        ua: "Очисти найважливіші фінальні файли і створи presentation board.",
      },
    ],
  },
  w16: {
    company: "Luna Kava Studio + Krystyna Portfolio",
    industry: "Prüfung und Portfolio Review",
    wantsDe: "Du sollst dein Projekt sicher erklären und die besten Arbeiten für Bewerbung und Prüfung auswählen.",
    wantsUa: "Ти маєш впевнено пояснити проєкт і вибрати найкращі роботи для Bewerbung та Prüfung.",
    orderDe: "Bereite Fachgespräch-Antworten vor und mache einen finalen Portfolio-Check.",
    orderUa: "Підготуй відповіді для Fachgespräch і зроби фінальну перевірку portfolio.",
    deliverables: ["Fachgespräch Sheet", "Portfolio Checklist", "Next Steps"],
    today: [
      {
        de: "Übe 12 Fragen und Antworten zu deinem finalen Projekt auf Deutsch.",
        ua: "Потренуй 12 питань і відповідей до фінального проєкту німецькою.",
      },
      {
        de: "Bewerte deine Projekte und entscheide, welche zwei zuerst auf Behance kommen.",
        ua: "Оціни свої проєкти і виріши, які два першими підуть на Behance.",
      },
    ],
  },
};

const clientBriefOverrides = {
  w01: {
    company: "Praxis Dr. Anna Berger",
    industry: "Hausarztpraxis / лікарська практика",
    wantsDe: "Die Ärztin eröffnet eine moderne Hausarztpraxis und braucht eine ruhige, vertrauensvolle visuelle Richtung.",
    wantsUa: "Лікарка відкриває сучасну сімейну практику і потребує спокійного, надійного візуального напрямку.",
    orderDe: "Erstelle Briefing, Zielgruppe, Persona und Moodboard für die Praxis.",
    orderUa: "Створи бриф, цільову групу, персону і moodboard для лікарської практики.",
    deliverables: ["Briefing", "Persona", "Moodboard", "Brand Direction"],
    today: [
      {
        de: "Kläre, welche Patientinnen und Patienten die Praxis erreichen will.",
        ua: "З'ясуй, яких пацієнтів хоче залучити практика.",
      },
      {
        de: "Lege die Markenrichtung fest: ruhig, sauber, professionell und freundlich.",
        ua: "Визнач напрямок бренду: спокійний, чистий, професійний і дружній.",
      },
    ],
  },
  w02: {
    company: "JobBrücke Recruiting",
    industry: "Firma für Jobsuche und Bewerbung / рекрутингова фірма",
    wantsDe: "Die Firma hilft Menschen bei Jobsuche, Bewerbung und Karrierewechsel und braucht ein seriöses Logo.",
    wantsUa: "Фірма допомагає людям з пошуком роботи, резюме і зміною кар'єри та потребує серйозний логотип.",
    orderDe: "Gestalte 1-3 Logo-Versionen und finalisiere eine saubere Logo-Variante.",
    orderUa: "Створи 1-3 версії логотипу і доведи одну чисту фінальну версію.",
    deliverables: ["3 Logo-Entwürfe", "Finales Logo", "Icon", "SVG/PDF/PNG"],
    today: [
      {
        de: "Skizziere Logo-Ideen mit Symbolen für Brücke, Karriere, Verbindung oder Neustart.",
        ua: "Намалюй ідеї логотипу з символами мосту, кар'єри, зв'язку або нового старту.",
      },
      {
        de: "Finalisiere eine Logo-Version und exportiere sie für Print und Web.",
        ua: "Доведи одну версію логотипу до фіналу і експортуй для друку та вебу.",
      },
    ],
  },
  w03: {
    company: "Klara Beauty Studio",
    industry: "Kosmetikstudio / косметологічна студія",
    wantsDe: "Das Studio braucht Farben und Schriften, die hochwertig, sauber und feminin wirken.",
    wantsUa: "Студії потрібні кольори і шрифти, які виглядають якісно, чисто і жіночно.",
    orderDe: "Erstelle ein kleines Corporate Design Sheet mit Farbpalette und Typografie.",
    orderUa: "Створи маленький corporate design sheet з палітрою і типографікою.",
    deliverables: ["Farbpalette", "Schriftsystem", "Mini-CD-Manual", "Anwendungsbeispiel"],
    today: [
      {
        de: "Wähle Schriften für Überschrift, Untertitel und Fließtext.",
        ua: "Вибери шрифти для заголовка, підзаголовка і основного тексту.",
      },
      {
        de: "Definiere Farben für Instagram, Website und Printprodukte.",
        ua: "Визнач кольори для Instagram, сайту і друкованої продукції.",
      },
    ],
  },
  w04: {
    company: "Physio Aktiv Wien",
    industry: "Physiotherapie / фізіотерапія",
    wantsDe: "Die Praxis braucht eine professionelle Visitenkarte und einen einfachen Briefkopf für Patientinnen und Partner.",
    wantsUa: "Практиці потрібна професійна візитка і простий бланк для пацієнтів та партнерів.",
    orderDe: "Gestalte eine druckfertige Visitenkarte und einen A4-Briefkopf.",
    orderUa: "Створи візитку для друку і A4 фірмовий бланк.",
    deliverables: ["Visitenkarte Vorderseite", "Visitenkarte Rückseite", "A4 Briefkopf", "PDF/X"],
    today: [
      {
        de: "Lege das Visitenkarten-Dokument mit Format, Rand und Beschnitt an.",
        ua: "Створи документ візитки з форматом, полями і Beschnitt.",
      },
      {
        de: "Prüfe die Druckdaten und exportiere die PDF-Datei für die Druckerei.",
        ua: "Перевір друкарські файли і експортуй PDF для друкарні.",
      },
    ],
  },
  w05: {
    company: "Kinderatelier Farbenfroh",
    industry: "Kreativschule für Kinder / творча школа для дітей",
    wantsDe: "Das Atelier bewirbt einen Ferien-Workshop und braucht einen freundlichen A5 Flyer.",
    wantsUa: "Ательє рекламує канікулярний воркшоп і потребує дружній A5 flyer.",
    orderDe: "Gestalte einen A5 Flyer mit Datum, Uhrzeit, Preis, Ort und Anmeldung.",
    orderUa: "Створи A5 flyer з датою, часом, ціною, місцем і записом.",
    deliverables: ["A5 Flyer", "Print PDF", "Web PNG", "Before/After Layout"],
    today: [
      {
        de: "Baue ein Raster und vergleiche eine enge Version mit einer luftigen Version.",
        ua: "Побудуй сітку і порівняй тісну версію з більш повітряною.",
      },
      {
        de: "Gestalte den finalen Flyer mit Bild, Headline, Text und Call-to-Action.",
        ua: "Створи фінальний flyer із зображенням, заголовком, текстом і CTA.",
      },
    ],
  },
  w06: {
    company: "Nova Raum Immobilien",
    industry: "Immobilienfirma / агенція нерухомості",
    wantsDe: "Die Firma braucht eine 8-seitige Broschüre für eine neue Wohnanlage.",
    wantsUa: "Фірмі потрібна брошура на 8 сторінок для нового житлового комплексу.",
    orderDe: "Erstelle eine Broschüre mit Projektinfo, Grundrissen, Vorteilen und Kontaktseite.",
    orderUa: "Створи брошуру з інформацією про проєкт, планами, перевагами і контактами.",
    deliverables: ["8-Seiten-Broschüre", "3 polierte Doppelseiten", "PDF Preview"],
    today: [
      {
        de: "Plane Seitenstruktur, Raster und Musterseiten in InDesign.",
        ua: "Сплануй структуру сторінок, сітку і master pages в InDesign.",
      },
      {
        de: "Finalisiere die wichtigsten Seiten und bereite eine Portfolio-Vorschau vor.",
        ua: "Доведи найважливіші сторінки і підготуй прев'ю для портфоліо.",
      },
    ],
  },
  w07: {
    company: "FitMeal Catering",
    industry: "Healthy Food Catering / healthy food доставка",
    wantsDe: "Das Catering bewirbt neue Lunch-Boxen für Büros und braucht eine Social-Media-Kampagne.",
    wantsUa: "Catering рекламує нові lunch boxes для офісів і потребує social media кампанію.",
    orderDe: "Entwickle 3 Instagram Posts und 2 Story-Slides in einem einheitlichen Stil.",
    orderUa: "Розроби 3 Instagram posts і 2 story slides в одному стилі.",
    deliverables: ["3 Feed Posts", "2 Stories", "Caption Texte", "Mockup"],
    today: [
      {
        de: "Definiere Kampagnenziel, Botschaft und drei Post-Ideen.",
        ua: "Визнач мету кампанії, повідомлення і три ідеї постів.",
      },
      {
        de: "Gestalte die Posts mit Foto, Headline, Angebot und CTA.",
        ua: "Створи пости з фото, заголовком, пропозицією і CTA.",
      },
    ],
  },
  w08: {
    company: "WaldPapier Studio",
    industry: "nachhaltige Papeterie / екологічна поліграфія",
    wantsDe: "Das Studio möchte Printprodukte zeigen und braucht eine kleine Case Study mit Druckdaten-Erklärung.",
    wantsUa: "Студія хоче показати друковані продукти і потребує mini case study з поясненням Druckdaten.",
    orderDe: "Erstelle Druckdaten-Checkliste und Mini Case Study mit 6 Slides.",
    orderUa: "Створи checklist для Druckdaten і mini case study на 6 слайдів.",
    deliverables: ["Druckdaten-Checkliste", "6-Slide Case Study", "PDF/PNG Export"],
    today: [
      {
        de: "Erkläre Beschnitt, PDF/X, CMYK und Farbprofil in einfachen Sätzen.",
        ua: "Поясни Beschnitt, PDF/X, CMYK і Farbprofil простими реченнями.",
      },
      {
        de: "Baue eine kleine Case Study mit Prozess und finalen Print-Ergebnissen.",
        ua: "Збери маленький case study з процесом і фінальними print результатами.",
      },
    ],
  },
  w09: {
    company: "AlpenBike Verleih",
    industry: "Fahrradverleih und Touren / оренда велосипедів",
    wantsDe: "Der Kunde möchte eine übersichtliche Website mit fünf Seiten für Verleih, Touren und Kontakt.",
    wantsUa: "Клієнт хоче зрозумілий сайт на п'ять сторінок для оренди, турів і контакту.",
    orderDe: "Entwirf Sitemap, Wireframe und Startseite in Figma.",
    orderUa: "Створи sitemap, wireframe і головну сторінку у Figma.",
    deliverables: ["Sitemap", "Desktop Wireframe", "Startseite Design", "Mobile Preview"],
    today: [
      {
        de: "Plane die fünf Seiten und erstelle einen klaren Wireframe.",
        ua: "Сплануй п'ять сторінок і створи зрозумілий wireframe.",
      },
      {
        de: "Gestalte die finale Website-Oberfläche in Figma.",
        ua: "Створи фінальний дизайн сайту у Figma.",
      },
    ],
  },
  w10: {
    company: "Urban Yoga Studio",
    industry: "Yoga Studio / йога студія",
    wantsDe: "Das Studio braucht ein konsistentes UI-System für Desktop, Tablet und Smartphone.",
    wantsUa: "Студії потрібна послідовна UI-система для desktop, tablet і smartphone.",
    orderDe: "Erstelle UI Kit, Komponenten und responsive Varianten.",
    orderUa: "Створи UI kit, компоненти і responsive варіанти.",
    deliverables: ["UI Kit", "Buttons", "Cards", "Navigation", "Responsive Screens"],
    today: [
      {
        de: "Baue wiederverwendbare Komponenten wie Buttons, Cards, Navigation und Formularfelder.",
        ua: "Створи повторювані компоненти: кнопки, cards, навігацію і поля форми.",
      },
      {
        de: "Passe die wichtigsten Bereiche für Mobile und Tablet an.",
        ua: "Адаптуй найважливіші блоки для mobile і tablet.",
      },
    ],
  },
  w11: {
    company: "Bistro Mare",
    industry: "Restaurant / ресторан",
    wantsDe: "Das Restaurant möchte eine 5-seitige WordPress-Website mit Elementor.",
    wantsUa: "Ресторан хоче WordPress-сайт на 5 сторінок через Elementor.",
    orderDe: "Baue die Seitenstruktur und die Startseite in WordPress mit Elementor.",
    orderUa: "Побудуй структуру сторінок і головну сторінку у WordPress через Elementor.",
    deliverables: ["5 WordPress-Seiten", "Elementor Startseite", "Navigation", "Mobile Check"],
    today: [
      {
        de: "Richte WordPress, Theme, Plugins und Seitenstruktur ein.",
        ua: "Налаштуй WordPress, theme, plugins і структуру сторінок.",
      },
      {
        de: "Baue Hero, Speisekarte-Teaser und Kontaktbereich in Elementor.",
        ua: "Побудуй hero, teaser меню і контактний блок в Elementor.",
      },
    ],
  },
  w12: {
    company: "Lichtwerk Eventraum",
    industry: "Eventlocation / простір для подій",
    wantsDe: "Die Location braucht Formular, Kalender, Cookie-Banner, SEO und Backup für die Website.",
    wantsUa: "Локації потрібні форма, календар, cookie banner, SEO і backup для сайту.",
    orderDe: "Richte kostenlose WordPress-Plugins ein und dokumentiere die wichtigsten Einstellungen.",
    orderUa: "Налаштуй безкоштовні WordPress-плагіни і задокументуй головні налаштування.",
    deliverables: ["Kontaktformular", "Cookie Banner", "Event Kalender", "SEO Liste", "Handoff Checklist"],
    today: [
      {
        de: "Füge Formular, Datenschutz-Hinweis, Kalender und Cookie-Banner hinzu.",
        ua: "Додай форму, Datenschutz Hinweis, календар і cookie banner.",
      },
      {
        de: "Schreibe Meta Title, Meta Description, Alt-Texte und eine Übergabe-Notiz.",
        ua: "Напиши meta title, meta description, alt-тексти і нотатку для передачі.",
      },
    ],
  },
  w13: {
    company: "PfotenGlück Tierpraxis",
    industry: "Tierarztpraxis / ветеринарна практика",
    wantsDe: "Die Praxis braucht eine professionelle Behance Case Study für ein kleines Branding-Projekt.",
    wantsUa: "Практиці потрібен професійний Behance case study для маленького branding-проєкту.",
    orderDe: "Baue eine Case Study mit Problem, Zielgruppe, Moodboard, Logo, Print und Ergebnis.",
    orderUa: "Збери case study з problem, target group, moodboard, logo, print і результатом.",
    deliverables: ["Behance Draft", "Case Structure", "Mockups"],
    today: [
      {
        de: "Sortiere alle Materialien und schreibe die Struktur der Case Study.",
        ua: "Відсортуй матеріали і напиши структуру case study.",
      },
      {
        de: "Gestalte die Case Study klar, ruhig und professionell.",
        ua: "Оформи case study зрозуміло, спокійно і професійно.",
      },
    ],
  },
  w14: {
    company: "Krystyna Lozova",
    industry: "Personal Portfolio / особисте портфоліо",
    wantsDe: "Du brauchst eine professionelle Präsentation deiner besten Arbeiten für Bewerbung und Ausbildung.",
    wantsUa: "Тобі потрібна професійна презентація найкращих робіт для Bewerbung і Ausbildung.",
    orderDe: "Erstelle Portfolio PDF, LinkedIn Texte und eine kurze Vorstellung auf Deutsch.",
    orderUa: "Створи portfolio PDF, LinkedIn тексти і коротку презентацію німецькою.",
    deliverables: ["Portfolio PDF", "LinkedIn Texte", "Kurzprofil"],
    today: [
      {
        de: "Wähle die stärksten Projekte und baue eine klare Portfolio-Reihenfolge.",
        ua: "Вибери найсильніші проєкти і побудуй зрозумілий порядок portfolio.",
      },
      {
        de: "Schreibe kurze Projekttexte und eine 45-Sekunden-Vorstellung auf Deutsch.",
        ua: "Напиши короткі тексти про проєкти і 45-секундну презентацію німецькою.",
      },
    ],
  },
  w15: {
    company: "EcoHome Cleaning",
    industry: "nachhaltige Reinigungsfirma / еко клінінг",
    wantsDe: "Die Firma möchte ein zusammenhängendes Paket aus Print, Social Media und Website.",
    wantsUa: "Фірма хоче цілісний пакет з print, social media і website.",
    orderDe: "Verbinde Logo, Visitenkarte, Flyer, Social Posts, Figma Website und WordPress-Notizen zu einer Kampagne.",
    orderUa: "Об'єднай логотип, візитку, flyer, social posts, Figma website і WordPress нотатки в одну кампанію.",
    deliverables: ["Campaign Board", "Finale Assets", "Export-Ordner"],
    today: [
      {
        de: "Plane die finale Kampagne und liste alle benötigten Medien auf.",
        ua: "Сплануй фінальну кампанію і випиши всі потрібні медіа.",
      },
      {
        de: "Bereinige die wichtigsten finalen Dateien und erstelle ein Präsentationsboard.",
        ua: "Очисти найважливіші фінальні файли і створи presentation board.",
      },
    ],
  },
  w16: {
    company: "Prüfungssimulation",
    industry: "Medienfachfrau Grafik und Print / підготовка до іспиту",
    wantsDe: "Du sollst zwei Kundenprojekte sicher erklären und deine Entscheidungen begründen.",
    wantsUa: "Ти маєш впевнено пояснити два клієнтські проєкти і обґрунтувати рішення.",
    orderDe: "Bereite Fachgespräch-Antworten vor und mache einen finalen Portfolio-Check.",
    orderUa: "Підготуй відповіді для Fachgespräch і зроби фінальну перевірку portfolio.",
    deliverables: ["Fachgespräch Sheet", "Portfolio Checklist", "Next Steps"],
    today: [
      {
        de: "Übe 12 Fragen und Antworten zu deinen Kundenprojekten auf Deutsch.",
        ua: "Потренуй 12 питань і відповідей до клієнтських проєктів німецькою.",
      },
      {
        de: "Bewerte deine Projekte und entscheide, welche zwei zuerst auf Behance kommen.",
        ua: "Оціни проєкти і виріши, які два першими підуть на Behance.",
      },
    ],
  },
};

const projectSpecs = {
  w01: {
    phase: "Phase 01 · Briefing, Zielgruppe und Moodboard",
    directionDe: "Fester Kunde: Luna Kava Studio, ein kleines Café mit Kaffee, ukrainischem Gebäck und kreativen Wochenend-Workshops.",
    directionUa: "Фіксований клієнт: Luna Kava Studio, маленька кав'ярня з кавою, українською випічкою і творчими воркшопами на вихідних.",
    fixedDe: "Du wählst keinen anderen Kunden. Die Marke soll warm, modern, ruhig und freundlich wirken.",
    fixedUa: "Ти не вибираєш іншого клієнта. Бренд має виглядати теплим, сучасним, спокійним і дружнім.",
    scopeDe: "Brand-Start-Paket: 1 Kundenbriefing, 1 Persona, 1 Moodboard mit 12 Referenzen und 1 Brand-Direction-Board.",
    scopeUa: "Стартовий пакет бренду: 1 бриф, 1 персона, 1 moodboard з 12 референсами і 1 brand-direction board.",
    pagesDe: "Keine Website-Seiten. Diese Woche entstehen 4 Grundlagen-Seiten für dein Portfolio.",
    pagesUa: "Без сторінок сайту. Цього тижня створюються 4 базові сторінки для портфоліо.",
    deliverables: ["Briefing-Seite", "Persona-Seite", "Moodboard", "Brand Direction"],
    settings: ["Client Name bleibt Luna Kava Studio", "Farbstimmung: warm, hell, nicht dunkel", "Zielgruppe: 20-40 Jahre, Kaffee, Design, Workshops"],
  },
  w02: {
    phase: "Phase 02 · Logo 1-3 Versionen",
    directionDe: "Logo-Projekt für Luna Kava Studio. Das Logo muss auf Becher, Schild, Visitenkarte, Instagram und Website funktionieren.",
    directionUa: "Проєкт логотипу для Luna Kava Studio. Логотип має працювати на стаканчику, вивісці, візитці, Instagram і сайті.",
    fixedDe: "Stil: einfache Wortmarke mit kleinem Symbol. Kein kompliziertes Illustrationslogo.",
    fixedUa: "Стиль: проста словесна марка з маленьким символом. Без складного ілюстративного логотипу.",
    scopeDe: "12 Skizzen auf Papier, 3 Vektor-Entwürfe in Illustrator, 1 finales Logo-System.",
    scopeUa: "12 ескізів на папері, 3 векторні варіанти в Illustrator, 1 фінальна система логотипу.",
    pagesDe: "Keine Website-Seiten. Du erstellst 1 Logo-Board und 1 Export-Board.",
    pagesUa: "Без сторінок сайту. Ти створюєш 1 logo board і 1 export board.",
    deliverables: ["Hauptlogo", "Icon", "Schwarz-Weiß-Version", "SVG", "PDF", "PNG"],
    settings: ["Mindestgröße testen: 24 px und 30 mm", "Schutzzone zeigen", "Logo auf Becher und Schild mocken"],
  },
  w03: {
    phase: "Phase 03 · Farben, Schriften und Mini-CD-Manual",
    directionDe: "Corporate-Design-Grundlage für Luna Kava Studio: Schriften, Farben und kleine Regeln.",
    directionUa: "Основа corporate design для Luna Kava Studio: шрифти, кольори і маленькі правила.",
    fixedDe: "Die Marke bleibt warm und modern. Keine Neonfarben, keine harte Luxus-Optik.",
    fixedUa: "Бренд залишається теплим і сучасним. Без неонових кольорів і жорсткого luxury-стилю.",
    scopeDe: "Mini-CD-Manual mit 4 Seiten: Logo, Farben, Typografie und Beispielanwendung.",
    scopeUa: "Міні CD manual на 4 сторінки: логотип, кольори, типографіка і приклад застосування.",
    pagesDe: "4 Manual-Seiten: Cover, Logo-Regeln, Farbpalette, Typografie.",
    pagesUa: "4 сторінки manual: обкладинка, правила логотипу, палітра, типографіка.",
    deliverables: ["Typografie-System", "RGB/CMYK-Farbpalette", "Kontrast-Notiz", "Mini-CD-Manual"],
    settings: ["1 Headline-Schrift", "1 Fließtext-Schrift", "1 Primary Color", "2 Secondary Colors", "2 Neutral Colors"],
  },
  w04: {
    phase: "Phase 04 · Visitenkarte und Briefkopf",
    directionDe: "Print-Set für Luna Kava Studio: Visitenkarte und einfacher Briefkopf.",
    directionUa: "Print-набір для Luna Kava Studio: візитка і простий фірмовий бланк.",
    fixedDe: "Die Visitenkarte ist 85 x 55 mm, Vorderseite und Rückseite, mit 3 mm Beschnitt.",
    fixedUa: "Візитка 85 x 55 мм, передня і задня сторона, з 3 мм Beschnitt.",
    scopeDe: "1 Visitenkarte, 1 A4-Briefkopf, 1 Druckdaten-Checkliste.",
    scopeUa: "1 візитка, 1 A4 бланк, 1 checklist для друкарських файлів.",
    pagesDe: "2 Visitenkarten-Seiten plus 1 A4-Seite.",
    pagesUa: "2 сторони візитки плюс 1 A4 сторінка.",
    deliverables: ["Visitenkarte Vorderseite", "Visitenkarte Rückseite", "A4 Briefkopf", "PDF/X Export"],
    settings: ["3 mm Beschnitt", "CMYK für Print", "Schnittmarken beim Export", "Kontaktdaten vollständig"],
  },
  w05: {
    phase: "Phase 05 · A5 Flyer für ein Kunden-Event",
    directionDe: "Event-Flyer für den Workshop 'Latte Art Samstag' im Luna Kava Studio.",
    directionUa: "Event flyer для воркшопу 'Latte Art Samstag' у Luna Kava Studio.",
    fixedDe: "Format A5 hoch. Der Flyer muss Datum, Uhrzeit, Preis, Ort und CTA enthalten.",
    fixedUa: "Формат A5 вертикальний. Flyer має містити дату, час, ціну, місце і CTA.",
    scopeDe: "1 A5 Flyer in zwei Layout-Varianten: crowded vs. clean. Danach 1 finaler Flyer.",
    scopeUa: "1 A5 flyer у двох варіантах: перевантажений і чистий. Потім 1 фінальний flyer.",
    pagesDe: "1 Flyer-Seite, optional 1 Rückseite mit Kurzinfo.",
    pagesUa: "1 сторінка flyer, опційно 1 зворотна сторона з короткою інформацією.",
    deliverables: ["A5 Flyer", "Print PDF", "Web PNG", "Before/After Vergleich"],
    settings: ["Blickfang oben", "klare Leserführung", "CTA: Jetzt Platz reservieren", "viel Weißraum in finaler Version"],
  },
  w06: {
    phase: "Phase 06 · 8-seitige Broschüre in InDesign",
    directionDe: "Imagebroschüre für Luna Kava Studio mit Café, Angebot und Workshops.",
    directionUa: "Іміджева брошура для Luna Kava Studio з кав'ярнею, пропозицією і воркшопами.",
    fixedDe: "Die Broschüre hat genau 8 Seiten und wird in InDesign aufgebaut.",
    fixedUa: "Брошура має рівно 8 сторінок і створюється в InDesign.",
    scopeDe: "8-seitige Broschüre: Cover, Über uns, Kaffee, Gebäck, Workshops, Gutschein, Anfahrt, Kontakt.",
    scopeUa: "Брошура на 8 сторінок: обкладинка, про нас, кава, випічка, воркшопи, подарунковий сертифікат, як дістатися, контакт.",
    pagesDe: "8 Seiten, davon mindestens Cover, 2 Innenseiten und Kontaktseite poliert.",
    pagesUa: "8 сторінок, з них мінімум обкладинка, 2 внутрішні сторінки і контакт мають бути доведені до красивого рівня.",
    deliverables: ["8-Seiten InDesign-Datei", "3 polierte Spreads", "PDF Preview", "Portfolio Mockup"],
    settings: ["Musterseite verwenden", "Seitenzahlen setzen", "einheitliches Raster", "Bild-Text-Verhältnis prüfen"],
  },
  w07: {
    phase: "Phase 07 · Social Media Kampagne",
    directionDe: "Social-Media-Kampagne für den Workshop 'Latte Art Samstag'.",
    directionUa: "Social media кампанія для воркшопу 'Latte Art Samstag'.",
    fixedDe: "Die Kampagne besteht aus 3 Instagram Feed Posts und 2 Story-Slides.",
    fixedUa: "Кампанія складається з 3 Instagram feed posts і 2 story slides.",
    scopeDe: "Post 1: Aufmerksamkeit, Post 2: Angebot, Post 3: Vertrauen. Stories: Reminder und Anmeldung.",
    scopeUa: "Пост 1: увага, пост 2: пропозиція, пост 3: довіра. Stories: нагадування і запис.",
    pagesDe: "3 quadratische Posts 1080 x 1080 px und 2 Stories 1080 x 1920 px.",
    pagesUa: "3 квадратні пости 1080 x 1080 px і 2 stories 1080 x 1920 px.",
    deliverables: ["3 Feed Posts", "2 Stories", "Caption Texte", "Mockup Board"],
    settings: ["gleiche Typografie", "gleiche CTA-Logik", "mobile Lesbarkeit testen", "Brandfarben nutzen"],
  },
  w08: {
    phase: "Phase 08 · Druckdaten und Mini Case Study",
    directionDe: "Print-Workflow und Mini Case Study für die bisherigen Luna-Kava-Arbeiten.",
    directionUa: "Print workflow і mini case study для всіх попередніх робіт Luna Kava.",
    fixedDe: "Du präsentierst nicht nur schöne Bilder, sondern auch Druckdaten, Beschnitt und Export.",
    fixedUa: "Ти показуєш не тільки красиві картинки, а й Druckdaten, Beschnitt і export.",
    scopeDe: "1 Druckdaten-Checkliste und 1 Mini Case Study mit 6 Slides.",
    scopeUa: "1 checklist для Druckdaten і 1 mini case study на 6 слайдів.",
    pagesDe: "6 Case-Slides: Problem, Moodboard, Logo, Print, Social, Ergebnis.",
    pagesUa: "6 case slides: проблема, moodboard, логотип, print, social, результат.",
    deliverables: ["Druckdaten-Checkliste", "6-Slide Case Study", "PDF/PNG Export"],
    settings: ["PDF/X erklären", "Beschnitt erklären", "CMYK erklären", "Preflight-Screenshot einbauen"],
  },
  w09: {
    phase: "Phase 09 · 5-Seiten-Website Design in Figma",
    directionDe: "Website-Konzept für Luna Kava Studio. Der Kunde möchte eine klare kleine Website mit 5 Seiten.",
    directionUa: "Website concept для Luna Kava Studio. Клієнт хоче маленький зрозумілий сайт на 5 сторінок.",
    fixedDe: "Keine andere Branche. Es bleibt Café + Workshops + Kontakt.",
    fixedUa: "Без іншої сфери. Залишається кав'ярня + воркшопи + контакт.",
    scopeDe: "Figma: Sitemap für 5 Seiten, Desktop-Wireframe und visuelles Design für die Startseite.",
    scopeUa: "Figma: sitemap для 5 сторінок, desktop wireframe і візуальний дизайн головної сторінки.",
    pagesDe: "5 Seiten: Startseite, Kaffee & Menü, Workshops, Über uns, Kontakt.",
    pagesUa: "5 сторінок: головна, кава і меню, воркшопи, про нас, контакт.",
    deliverables: ["Sitemap", "Desktop Wireframe", "Startseite Design", "Mobile Preview"],
    settings: ["Hero mit CTA", "Workshop-Teaser", "Kontaktbereich", "Öffnungszeiten", "ruhiger Weißraum"],
  },
  w10: {
    phase: "Phase 10 · Responsive UI Kit",
    directionDe: "Responsive UI-System für die Luna-Kava-Website.",
    directionUa: "Responsive UI system для сайту Luna Kava.",
    fixedDe: "Du arbeitest weiter mit denselben 5 Seiten und machst das Design wiederverwendbar.",
    fixedUa: "Ти далі працюєш з тими самими 5 сторінками і робиш дизайн повторно використовуваним.",
    scopeDe: "UI Kit, Komponenten und responsive Varianten für Startseite und Workshop-Seite.",
    scopeUa: "UI kit, компоненти і responsive варіанти для головної сторінки та сторінки workshops.",
    pagesDe: "Desktop, Tablet und Mobile für die Startseite; Mobile-Skizze für die Workshop-Seite.",
    pagesUa: "Desktop, tablet і mobile для головної; mobile sketch для сторінки workshops.",
    deliverables: ["UI Kit", "Buttons", "Cards", "Navigation", "Responsive Screens"],
    settings: ["Button states", "Form fields", "Breakpoints notieren", "Touch targets prüfen"],
  },
  w11: {
    phase: "Phase 11 · WordPress/Elementor Aufbau",
    directionDe: "WordPress-Aufbau der Luna-Kava-Website mit Elementor.",
    directionUa: "Створення сайту Luna Kava у WordPress через Elementor.",
    fixedDe: "Der Kunde möchte keine große Website. Es bleibt bei 5 Seiten und einer einfachen Pflege.",
    fixedUa: "Клієнт не хоче великий сайт. Залишається 5 сторінок і просте редагування.",
    scopeDe: "WordPress Grundsetup, 5 Seiten anlegen, Startseite mit Elementor bauen.",
    scopeUa: "Базове налаштування WordPress, створити 5 сторінок, побудувати головну в Elementor.",
    pagesDe: "5 WordPress-Seiten: Startseite, Kaffee & Menü, Workshops, Über uns, Kontakt.",
    pagesUa: "5 WordPress сторінок: головна, кава і меню, воркшопи, про нас, контакт.",
    deliverables: ["WordPress Struktur", "Elementor Startseite", "Navigation", "Mobile Check"],
    plugins: ["Elementor", "Hello Elementor Theme", "Rank Math SEO oder Yoast SEO", "UpdraftPlus Backup", "Smush oder ShortPixel Image Optimizer"],
    settings: ["Permalinks prüfen", "Global Colors setzen", "Global Fonts setzen", "Navigation bauen", "Startseite als Homepage setzen"],
  },
  w12: {
    phase: "Phase 12 · WordPress Plugins und Funktionen",
    directionDe: "Funktionen für die Luna-Kava-Website: Kontakt, Cookie-Banner, Kalender, SEO und Backup.",
    directionUa: "Функції для сайту Luna Kava: контакт, cookie banner, календар, SEO і backup.",
    fixedDe: "Du installierst nur kostenlose Plugin-Versionen und dokumentierst, warum du sie brauchst.",
    fixedUa: "Ти встановлюєш тільки безкоштовні версії плагінів і записуєш, навіщо вони потрібні.",
    scopeDe: "Kontaktformular, Workshop-Kalender, Cookie-Hinweis, SEO-Basics, Bildoptimierung und Backup einrichten.",
    scopeUa: "Налаштувати контактну форму, календар воркшопів, cookie notice, SEO basics, оптимізацію зображень і backup.",
    pagesDe: "Kontaktseite mit Formular, Workshop-Seite mit Kalender, alle 5 Seiten mit Meta Title und Alt-Texten.",
    pagesUa: "Контактна сторінка з формою, сторінка workshops з календарем, усі 5 сторінок з meta title і alt-text.",
    deliverables: ["Kontaktformular", "Cookie Banner", "Workshop Kalender", "SEO Liste", "Handoff Checklist"],
    plugins: ["CookieYes oder Complianz", "The Events Calendar", "Fluent Forms oder Contact Form 7", "Rank Math SEO oder Yoast SEO", "UpdraftPlus Backup", "LiteSpeed Cache oder Autoptimize"],
    settings: ["Cookie-Banner aktivieren", "1 Test-Event eintragen", "Kontaktformular testen", "Meta Title schreiben", "Alt-Texte setzen", "Backup erstellen"],
  },
  w13: {
    phase: "Phase 13 · Behance Case Study",
    directionDe: "Behance Case Study für Luna Kava Studio.",
    directionUa: "Behance case study для Luna Kava Studio.",
    fixedDe: "Du baust eine echte Case Study aus deinem Projekt, nicht nur eine Galerie.",
    fixedUa: "Ти створюєш справжній case study зі свого проєкту, не просто галерею.",
    scopeDe: "Case Study mit 10 Abschnitten: Problem, Zielgruppe, Moodboard, Logo, Print, Social, Website, WordPress, Ergebnis, Learnings.",
    scopeUa: "Case study з 10 блоків: проблема, цільова група, moodboard, логотип, print, social, website, WordPress, результат, висновки.",
    pagesDe: "10 Case-Abschnitte als Figma/Behance Layout.",
    pagesUa: "10 блоків case study у Figma/Behance layout.",
    deliverables: ["Behance Draft", "Mockups", "Projekttexte", "Finale Bilder"],
    settings: ["kurze Texte", "klare Reihenfolge", "nur beste Bilder", "DE/UA Notizen für Fachgespräch"],
  },
  w14: {
    phase: "Phase 14 · Portfolio PDF und LinkedIn",
    directionDe: "Persönliches Portfolio von Krystyna Lozova für Bewerbung und Ausbildung.",
    directionUa: "Особисте портфоліо Krystyny Lozova для Bewerbung і Ausbildung.",
    fixedDe: "Der Fokus bleibt Graphic Design, Print, Figma, WordPress und AI. Kein React/Backend.",
    fixedUa: "Фокус залишається Graphic Design, Print, Figma, WordPress і AI. Без React/backend.",
    scopeDe: "Portfolio PDF mit 8 Seiten und LinkedIn-Projekttexte.",
    scopeUa: "Portfolio PDF на 8 сторінок і тексти про проєкти для LinkedIn.",
    pagesDe: "8 PDF-Seiten: Cover, Profil, Skills, Projekt 1, Projekt 2, Projekt 3, Kontakt, Next Steps.",
    pagesUa: "8 PDF сторінок: обкладинка, профіль, skills, проєкт 1, проєкт 2, проєкт 3, контакт, next steps.",
    deliverables: ["Portfolio PDF", "LinkedIn Headline", "2 Projekttexte", "45-Sekunden Vorstellung"],
    settings: ["maximal 3 Projekte", "kurze Texte", "deutsche Fachwörter einbauen", "Kontakt gut sichtbar"],
  },
  w15: {
    phase: "Phase 15 · Finale Crossmedia Kampagne",
    directionDe: "Finales Kundenpaket für Luna Kava Studio: 'Summer Coffee Workshop 2026'.",
    directionUa: "Фінальний клієнтський пакет для Luna Kava Studio: 'Summer Coffee Workshop 2026'.",
    fixedDe: "Alle Medien gehören zu derselben Kampagne und müssen wie eine Marke aussehen.",
    fixedUa: "Усі медіа належать до однієї кампанії і мають виглядати як один бренд.",
    scopeDe: "Finales Paket aus Logo, Visitenkarte, A5 Flyer, 8-Seiten-Broschüre, 3 Posts und 5-Seiten-Website.",
    scopeUa: "Фінальний пакет: логотип, візитка, A5 flyer, брошура на 8 сторінок, 3 пости і сайт на 5 сторінок.",
    pagesDe: "5 Website-Seiten plus Print- und Social-Media-Materialien.",
    pagesUa: "5 сторінок сайту плюс print і social media матеріали.",
    deliverables: ["Campaign Board", "Export-Ordner", "Print PDF", "Web Assets", "Presentation Board"],
    settings: ["alles konsistent prüfen", "Druckdaten kontrollieren", "Website mobile prüfen", "finale Dateien sauber benennen"],
  },
  w16: {
    phase: "Phase 16 · Prüfungssimulation und Portfolio Review",
    directionDe: "Fachgespräch über dein Luna-Kava-Projekt und dein persönliches Portfolio.",
    directionUa: "Fachgespräch про твій Luna Kava проєкт і особисте портфоліо.",
    fixedDe: "Du übst einfache, richtige deutsche Antworten. Nicht perfekt, aber verständlich.",
    fixedUa: "Ти тренуєш прості правильні німецькі відповіді. Не ідеально, але зрозуміло.",
    scopeDe: "12 Prüfungsfragen, 8-Minuten-Präsentation und finaler Portfolio-Check.",
    scopeUa: "12 екзаменаційних питань, презентація на 8 хвилин і фінальна перевірка портфоліо.",
    pagesDe: "1 Fachgespräch Sheet, 1 Portfolio Checklist, 1 Next-Steps-Seite.",
    pagesUa: "1 sheet для Fachgespräch, 1 portfolio checklist, 1 next-steps сторінка.",
    deliverables: ["Fachgespräch Sheet", "Portfolio Checklist", "Next Steps", "Selbstbewertung"],
    settings: ["RGB/CMYK erklären", "Beschnitt erklären", "Typografie begründen", "WordPress Plugins erklären", "Portfolio-Projekte bewerten"],
  },
};

const projectSpecOverrides = {
  w01: {
    directionDe: "Kunde: Praxis Dr. Anna Berger, moderne Hausarztpraxis. Aufgabe: Moodboard, Briefing und Zielgruppe vorbereiten.",
    directionUa: "Клієнт: Praxis Dr. Anna Berger, сучасна сімейна лікарська практика. Завдання: підготувати moodboard, brief і target group.",
    fixedDe: "Die Richtung ist fest: medizinisch, ruhig, vertrauensvoll, hell und freundlich.",
    fixedUa: "Напрямок фіксований: медичний, спокійний, надійний, світлий і дружній.",
    scopeDe: "1 Kundenbriefing, 1 Persona, 1 Moodboard mit 12 Referenzen und 1 Brand-Direction-Board.",
    scopeUa: "1 клієнтський бриф, 1 персона, 1 moodboard з 12 референсами і 1 brand direction board.",
    pagesDe: "4 Portfolio-Seiten: Briefing, Persona, Moodboard, Brand Direction.",
    pagesUa: "4 portfolio сторінки: brief, persona, moodboard, brand direction.",
    settings: ["Branche: Arztpraxis", "Zielgruppe: Familien, Berufstätige, ältere Menschen", "Stimmung: Vertrauen, Sauberkeit, Ruhe", "Farben: hell, medizinisch, nicht kalt"],
  },
  w02: {
    directionDe: "Kunde: JobBrücke Recruiting. Aufgabe: Logo für eine Firma, die Menschen bei Jobsuche und Bewerbung hilft.",
    directionUa: "Клієнт: JobBrücke Recruiting. Завдання: логотип для фірми, яка допомагає людям з пошуком роботи і Bewerbung.",
    fixedDe: "Du erstellst 1-3 Logo-Versionen. Mindestens eine Version muss als Wortmarke mit kleinem Symbol funktionieren.",
    fixedUa: "Ти створюєш 1-3 версії логотипу. Мінімум одна версія має працювати як словесний логотип з маленьким символом.",
    scopeDe: "12 Skizzen, 3 Vektor-Entwürfe in Illustrator, 1 finale Logo-Version, Export für Print und Web.",
    scopeUa: "12 ескізів, 3 векторні варіанти в Illustrator, 1 фінальна версія логотипу, export для print і web.",
    pagesDe: "2 Portfolio-Seiten: Logo-Prozess und finales Logo-Board.",
    pagesUa: "2 portfolio сторінки: процес логотипу і фінальний logo board.",
    settings: ["Symbolideen: Brücke, Pfeil, Verbindung, Neustart", "Logo klein testen", "SVG, PDF und PNG exportieren", "Schutzzone zeigen"],
  },
  w03: {
    directionDe: "Kunde: Klara Beauty Studio. Aufgabe: Farben, Schriften und ein kleines Corporate Design Manual.",
    directionUa: "Клієнт: Klara Beauty Studio. Завдання: кольори, шрифти і маленький corporate design manual.",
    fixedDe: "Die Marke soll hochwertig, sauber und feminin wirken, aber nicht kitschig.",
    fixedUa: "Бренд має виглядати якісно, чисто і жіночно, але не занадто солодко.",
    scopeDe: "Mini-CD-Manual mit 4 Seiten: Logo-Platzhalter, Farben, Typografie und Beispielanwendung.",
    scopeUa: "Mini CD manual на 4 сторінки: logo placeholder, кольори, типографіка і приклад застосування.",
    pagesDe: "4 Manual-Seiten: Cover, Farben, Typografie, Anwendung.",
    pagesUa: "4 сторінки manual: обкладинка, кольори, типографіка, застосування.",
    settings: ["1 Headline-Schrift", "1 Fließtext-Schrift", "1 Primary Color", "2 Secondary Colors", "Kontrast prüfen"],
  },
  w04: {
    directionDe: "Kunde: Physio Aktiv Wien. Aufgabe: Visitenkarte und Briefkopf für eine Physiotherapie-Praxis.",
    directionUa: "Клієнт: Physio Aktiv Wien. Завдання: візитка і бланк для фізіотерапевтичної практики.",
    fixedDe: "Die Visitenkarte hat 85 x 55 mm, Vorderseite und Rückseite, mit 3 mm Beschnitt.",
    fixedUa: "Візитка має 85 x 55 мм, передню і задню сторону, з 3 мм Beschnitt.",
    scopeDe: "1 Visitenkarte, 1 A4-Briefkopf, 1 Druckdaten-Checkliste.",
    scopeUa: "1 візитка, 1 A4 бланк, 1 checklist для Druckdaten.",
    pagesDe: "2 Visitenkarten-Seiten plus 1 A4-Briefkopf.",
    pagesUa: "2 сторони візитки плюс 1 A4 бланк.",
    settings: ["3 mm Beschnitt", "CMYK", "Schnittmarken", "Kontaktdaten: Name, Telefon, Website, Adresse"],
  },
  w05: {
    directionDe: "Kunde: Kinderatelier Farbenfroh. Aufgabe: A5 Flyer für einen Ferien-Workshop.",
    directionUa: "Клієнт: Kinderatelier Farbenfroh. Завдання: A5 flyer для канікулярного воркшопу.",
    fixedDe: "Der Flyer ist A5 hoch und muss für Eltern schnell verständlich sein.",
    fixedUa: "Flyer A5 вертикальний і має бути швидко зрозумілим для батьків.",
    scopeDe: "1 A5 Flyer in zwei Layout-Versionen und danach 1 finaler Flyer.",
    scopeUa: "1 A5 flyer у двох layout версіях і потім 1 фінальний flyer.",
    pagesDe: "1 Vorderseite, optional 1 Rückseite mit Kursdetails.",
    pagesUa: "1 передня сторона, опційно 1 зворотна сторона з деталями курсу.",
    settings: ["Datum", "Uhrzeit", "Preis", "Ort", "CTA: Jetzt anmelden"],
  },
  w06: {
    directionDe: "Kunde: Nova Raum Immobilien. Aufgabe: 8-seitige Broschüre für eine neue Wohnanlage.",
    directionUa: "Клієнт: Nova Raum Immobilien. Завдання: брошура на 8 сторінок для нового житлового комплексу.",
    fixedDe: "Die Broschüre wird in InDesign aufgebaut und nutzt Musterseiten.",
    fixedUa: "Брошура створюється в InDesign і використовує master pages.",
    scopeDe: "8 Seiten: Cover, Projekt, Lage, Wohnungen, Grundrisse, Vorteile, Finanzierung, Kontakt.",
    scopeUa: "8 сторінок: обкладинка, проєкт, локація, квартири, плани, переваги, фінансування, контакт.",
    pagesDe: "Genau 8 Seiten. Mindestens Cover, 2 Innenseiten und Kontaktseite polieren.",
    pagesUa: "Рівно 8 сторінок. Мінімум обкладинка, 2 внутрішні сторінки і контакт мають бути доведені.",
    settings: ["Musterseite", "Seitenzahlen", "Raster", "Bild-Text-Verhältnis", "PDF Preview"],
  },
  w07: {
    directionDe: "Kunde: FitMeal Catering. Aufgabe: Social-Media-Kampagne für gesunde Lunch-Boxen.",
    directionUa: "Клієнт: FitMeal Catering. Завдання: social media campaign для healthy lunch boxes.",
    fixedDe: "Die Kampagne hat 3 Feed Posts und 2 Story-Slides.",
    fixedUa: "Кампанія має 3 feed posts і 2 story slides.",
    scopeDe: "Post 1 Aufmerksamkeit, Post 2 Angebot, Post 3 Vertrauen; Stories für Reminder und Bestellung.",
    scopeUa: "Пост 1 увага, пост 2 пропозиція, пост 3 довіра; stories для нагадування і замовлення.",
    pagesDe: "3 Posts 1080 x 1080 px und 2 Stories 1080 x 1920 px.",
    pagesUa: "3 пости 1080 x 1080 px і 2 stories 1080 x 1920 px.",
    settings: ["gleiche Typografie", "gleiche Farben", "mobile Lesbarkeit", "CTA: Lunchbox bestellen"],
  },
  w08: {
    directionDe: "Kunde: WaldPapier Studio. Aufgabe: Print Case Study und Druckdaten-Checkliste.",
    directionUa: "Клієнт: WaldPapier Studio. Завдання: print case study і checklist для Druckdaten.",
    fixedDe: "Du erklärst technische Print-Begriffe einfach und zeigst, wie Dateien vorbereitet werden.",
    fixedUa: "Ти пояснюєш технічні print-слова просто і показуєш, як готуються файли.",
    scopeDe: "1 Druckdaten-Checkliste und 1 Mini Case Study mit 6 Slides.",
    scopeUa: "1 checklist для Druckdaten і 1 mini case study на 6 slides.",
    pagesDe: "6 Slides: Problem, Moodboard, Layout, Druckdaten, Export, Ergebnis.",
    pagesUa: "6 slides: проблема, moodboard, layout, Druckdaten, export, результат.",
    settings: ["PDF/X", "Beschnitt", "CMYK", "Farbprofil", "Preflight"],
  },
  w09: {
    directionDe: "Kunde: AlpenBike Verleih. Aufgabe: Website Design in Figma für eine 5-seitige Website.",
    directionUa: "Клієнт: AlpenBike Verleih. Завдання: дизайн сайту у Figma для сайту на 5 сторінок.",
    fixedDe: "Der Kunde möchte 5 Seiten, nicht nur eine Landing Page.",
    fixedUa: "Клієнт хоче 5 сторінок, не тільки landing page.",
    scopeDe: "Sitemap, Desktop Wireframe und visuelles Design für die Startseite.",
    scopeUa: "Sitemap, desktop wireframe і візуальний дизайн головної сторінки.",
    pagesDe: "5 Seiten: Startseite, Fahrräder, Touren, Preise, Kontakt.",
    pagesUa: "5 сторінок: головна, велосипеди, тури, ціни, контакт.",
    settings: ["Hero mit CTA", "Touren-Teaser", "Preise sichtbar", "Kontaktbereich", "mobile Preview"],
  },
  w10: {
    directionDe: "Kunde: Urban Yoga Studio. Aufgabe: Responsive UI Kit für die Website.",
    directionUa: "Клієнт: Urban Yoga Studio. Завдання: responsive UI kit для сайту.",
    fixedDe: "Du erstellst keine neue Branche, sondern ein UI-System für diesen Yoga-Kunden.",
    fixedUa: "Ти не створюєш нову сферу, а UI system саме для цього yoga клієнта.",
    scopeDe: "Buttons, Cards, Navigation, Formularfelder und responsive Varianten.",
    scopeUa: "Buttons, cards, navigation, form fields і responsive варіанти.",
    pagesDe: "Desktop, Tablet und Mobile für Startseite; Mobile-Skizze für Kursplan-Seite.",
    pagesUa: "Desktop, tablet і mobile для головної; mobile sketch для сторінки розкладу.",
    settings: ["Button states", "Form fields", "Breakpoints", "Touch targets", "Lesbarkeit"],
  },
  w11: {
    directionDe: "Kunde: Bistro Mare. Aufgabe: 5-seitige Restaurant-Website in WordPress mit Elementor.",
    directionUa: "Клієнт: Bistro Mare. Завдання: ресторанний сайт на 5 сторінок у WordPress з Elementor.",
    fixedDe: "Der Kunde möchte eine einfache pflegbare Website mit Speisekarte und Kontakt.",
    fixedUa: "Клієнт хоче простий сайт, який можна редагувати, з меню і контактами.",
    scopeDe: "WordPress Grundsetup, 5 Seiten anlegen, Startseite mit Elementor bauen.",
    scopeUa: "WordPress basic setup, створити 5 сторінок, побудувати головну в Elementor.",
    pagesDe: "5 Seiten: Startseite, Speisekarte, Reservierung, Über uns, Kontakt.",
    pagesUa: "5 сторінок: головна, меню, бронювання, про нас, контакт.",
    plugins: ["Elementor", "Hello Elementor Theme", "Rank Math SEO oder Yoast SEO", "UpdraftPlus Backup", "Smush oder ShortPixel Image Optimizer"],
    settings: ["Permalinks", "Global Colors", "Global Fonts", "Navigation", "Startseite als Homepage"],
  },
  w12: {
    directionDe: "Kunde: Lichtwerk Eventraum. Aufgabe: WordPress Plugins für Kalender, Formular, Cookies, SEO und Backup.",
    directionUa: "Клієнт: Lichtwerk Eventraum. Завдання: WordPress plugins для calendar, form, cookies, SEO і backup.",
    fixedDe: "Alle Plugins sollen kostenlose Versionen sein. Du dokumentierst, was jedes Plugin macht.",
    fixedUa: "Усі плагіни мають бути безкоштовні версії. Ти документуєш, що робить кожен plugin.",
    scopeDe: "Kontaktformular, Event-Kalender, Cookie-Hinweis, SEO-Basics, Bildoptimierung und Backup.",
    scopeUa: "Contact form, event calendar, cookie notice, SEO basics, image optimization і backup.",
    pagesDe: "5 Seiten: Startseite, Räume, Events, Preise, Kontakt. Event-Seite mit Kalender.",
    pagesUa: "5 сторінок: головна, зали, події, ціни, контакт. Event page з календарем.",
    plugins: ["CookieYes oder Complianz", "The Events Calendar", "Fluent Forms oder Contact Form 7", "Rank Math SEO oder Yoast SEO", "UpdraftPlus Backup", "LiteSpeed Cache oder Autoptimize"],
    settings: ["Cookie-Banner aktivieren", "1 Test-Event eintragen", "Kontaktformular testen", "Meta Title schreiben", "Alt-Texte setzen", "Backup erstellen"],
  },
  w13: {
    directionDe: "Kunde: PfotenGlück Tierpraxis. Aufgabe: Behance Case Study für ein kleines Branding-Projekt.",
    directionUa: "Клієнт: PfotenGlück Tierpraxis. Завдання: Behance case study для маленького branding-проєкту.",
    fixedDe: "Die Case Study zeigt nicht alles, sondern nur die stärksten Schritte.",
    fixedUa: "Case study показує не все, а тільки найсильніші кроки.",
    scopeDe: "10 Abschnitte: Problem, Zielgruppe, Moodboard, Logo, Farben, Print, Website-Idee, Mockups, Ergebnis, Learnings.",
    scopeUa: "10 блоків: проблема, target group, moodboard, logo, colors, print, website idea, mockups, result, learnings.",
    pagesDe: "10 Case-Abschnitte als Figma/Behance Layout.",
    pagesUa: "10 case blocks як Figma/Behance layout.",
    settings: ["kurze Texte", "klare Reihenfolge", "nur beste Bilder", "DE/UA Notizen"],
  },
  w14: {
    directionDe: "Kunde: Krystyna Lozova. Aufgabe: persönliches Portfolio PDF und LinkedIn.",
    directionUa: "Клієнт: Krystyna Lozova. Завдання: особисте portfolio PDF і LinkedIn.",
    fixedDe: "Der Fokus bleibt Graphic Design, Print, Figma, WordPress und AI.",
    fixedUa: "Фокус залишається Graphic Design, Print, Figma, WordPress і AI.",
    scopeDe: "Portfolio PDF mit 8 Seiten und LinkedIn-Projekttexte.",
    scopeUa: "Portfolio PDF на 8 сторінок і тексти про проєкти для LinkedIn.",
    pagesDe: "8 PDF-Seiten: Cover, Profil, Skills, Projekt 1, Projekt 2, Projekt 3, Kontakt, Next Steps.",
    pagesUa: "8 PDF сторінок: обкладинка, профіль, skills, project 1, project 2, project 3, contact, next steps.",
    settings: ["maximal 3 Projekte", "kurze Texte", "deutsche Fachwörter", "Kontakt sichtbar"],
  },
  w15: {
    directionDe: "Kunde: EcoHome Cleaning. Aufgabe: finales Crossmedia-Paket für eine nachhaltige Reinigungsfirma.",
    directionUa: "Клієнт: EcoHome Cleaning. Завдання: фінальний crossmedia пакет для еко клінінгу.",
    fixedDe: "Das Paket verbindet Logo, Print, Social Media, Figma Website und WordPress-Plan.",
    fixedUa: "Пакет об'єднує logo, print, social media, Figma website і WordPress plan.",
    scopeDe: "Logo, Visitenkarte, A5 Flyer, 3 Posts, Website Design und WordPress-Plugin-Notizen.",
    scopeUa: "Logo, business card, A5 flyer, 3 posts, website design і WordPress plugin notes.",
    pagesDe: "Website-Konzept mit 5 Seiten: Startseite, Leistungen, Preise, Über uns, Kontakt.",
    pagesUa: "Website concept на 5 сторінок: головна, послуги, ціни, про нас, контакт.",
    settings: ["konsistentes Design", "Druckdaten", "mobile Website", "saubere Dateinamen", "finales Board"],
  },
  w16: {
    directionDe: "Kunde: Prüfungssimulation. Aufgabe: zwei Kundenprojekte auf Deutsch erklären.",
    directionUa: "Клієнт: Prüfungssimulation. Завдання: пояснити два клієнтські проєкти німецькою.",
    fixedDe: "Du übst einfache, richtige Antworten für das Fachgespräch.",
    fixedUa: "Ти тренуєш прості правильні відповіді для Fachgespräch.",
    scopeDe: "12 Prüfungsfragen, 8-Minuten-Präsentation und finaler Portfolio-Check.",
    scopeUa: "12 exam questions, 8-minute presentation і final portfolio check.",
    pagesDe: "1 Fachgespräch Sheet, 1 Portfolio Checklist, 1 Next-Steps-Seite.",
    pagesUa: "1 Fachgespräch sheet, 1 portfolio checklist, 1 next steps page.",
    settings: ["RGB/CMYK", "Beschnitt", "Typografie", "WordPress Plugins", "Projekt begründen"],
  },
};

const projectRoadmap = [
  { id: "w01", de: "Arztpraxis: Moodboard", ua: "лікар: moodboard" },
  { id: "w02", de: "Recruiting: Logo", ua: "пошук роботи: логотип" },
  { id: "w03", de: "Beauty Studio: CD", ua: "косметологія: CD" },
  { id: "w04", de: "Physio: Visitenkarte", ua: "фізіо: візитка" },
  { id: "w05", de: "Kinderschule: Flyer", ua: "дитяча школа: flyer" },
  { id: "w06", de: "Immobilien: Broschüre", ua: "нерухомість: брошура" },
  { id: "w07", de: "Catering: Social Media", ua: "catering: соцмережі" },
  { id: "w08", de: "Papeterie: Druckdaten", ua: "поліграфія: Druckdaten" },
  { id: "w09", de: "Bike Verleih: Figma Website", ua: "bike rental: сайт Figma" },
  { id: "w10", de: "Yoga: UI Kit", ua: "йога: UI kit" },
  { id: "w11", de: "Restaurant: WordPress", ua: "ресторан: WordPress" },
  { id: "w12", de: "Eventraum: Plugins", ua: "івент-зал: плагіни" },
  { id: "w13", de: "Tierpraxis: Behance", ua: "ветеринар: Behance" },
  { id: "w14", de: "Du: Portfolio PDF", ua: "ти: portfolio PDF" },
  { id: "w15", de: "Eco Cleaning: Paket", ua: "еко клінінг: пакет" },
  { id: "w16", de: "Prüfung: Fachgespräch", ua: "іспит: Fachgespräch" },
];

const theorySupport = {
  w01: {
    terms: [
      { de: "das Briefing", ua: "бриф", meaning: "kurze Informationen vom Kunden: Ziel, Zielgruppe, Stil, Budget und Zeit" },
      { de: "die Zielgruppe", ua: "цільова група", meaning: "Menschen, die mit dem Design erreicht werden sollen" },
      { de: "das Moodboard", ua: "дошка настрою", meaning: "Sammlung von Bildern, Farben und Stilen als visuelle Richtung" },
      { de: "die Corporate Identity", ua: "ідентичність бренду", meaning: "das gesamte Bild einer Marke nach innen und außen" },
    ],
    questions: [
      { q: "Was steht in einem Briefing?", a: "In einem Briefing stehen Ziel, Zielgruppe, Stil, Budget und Zeitplan.", ua: "У брифі є мета, цільова група, стиль, бюджет і час." },
      { q: "Warum macht man ein Moodboard?", a: "Ein Moodboard hilft, die visuelle Richtung zu zeigen.", ua: "Moodboard допомагає показати візуальний напрямок." },
    ],
  },
  w02: {
    terms: [
      { de: "die Vektorgrafik", ua: "векторна графіка", meaning: "Grafik aus Formen und Pfaden, die ohne Qualitätsverlust skaliert werden kann" },
      { de: "die Wortmarke", ua: "словесний логотип", meaning: "Logo, das hauptsächlich aus Schrift besteht" },
      { de: "die Bildmarke", ua: "знак логотипу", meaning: "grafisches Symbol einer Marke" },
      { de: "die Skalierbarkeit", ua: "масштабованість", meaning: "Logo bleibt klein und groß gut erkennbar" },
    ],
    questions: [
      { q: "Warum nutzt man Vektorgrafiken für Logos?", a: "Vektorgrafiken bleiben beim Vergrößern scharf.", ua: "Векторна графіка залишається чіткою при збільшенні." },
      { q: "Was ist wichtig bei einem Logo?", a: "Ein Logo soll einfach, lesbar und wiedererkennbar sein.", ua: "Логотип має бути простий, читабельний і впізнаваний." },
    ],
  },
  w03: {
    terms: [
      { de: "die Schriftfamilie", ua: "сімейство шрифтів", meaning: "zusammengehörende Schriftschnitte wie Regular, Bold und Italic" },
      { de: "die Hierarchie", ua: "ієрархія", meaning: "zeigt, welche Information am wichtigsten ist" },
      { de: "RGB", ua: "модель кольору для екранів", meaning: "Farbmodell für digitale Medien und Bildschirme" },
      { de: "CMYK", ua: "модель кольору для друку", meaning: "Farbmodell für Printprodukte" },
    ],
    questions: [
      { q: "Wofür verwendet man RGB?", a: "RGB verwendet man für Bildschirme und digitale Medien.", ua: "RGB використовують для екранів і цифрових медіа." },
      { q: "Warum ist typografische Hierarchie wichtig?", a: "Sie zeigt dem Leser, was zuerst wichtig ist.", ua: "Вона показує читачу, що є найважливішим спочатку." },
    ],
  },
  w04: {
    terms: [
      { de: "der Beschnitt", ua: "виліт під обріз", meaning: "zusätzlicher Rand, der nach dem Druck abgeschnitten wird" },
      { de: "das Endformat", ua: "кінцевий формат", meaning: "fertige Größe nach dem Schneiden" },
      { de: "die Schnittmarken", ua: "мітки обрізу", meaning: "Marken, die zeigen, wo geschnitten wird" },
      { de: "das PDF/X", ua: "стандарт PDF для друку", meaning: "PDF-Standard für druckfertige Daten" },
    ],
    questions: [
      { q: "Warum braucht man Beschnitt?", a: "Beschnitt verhindert weiße Blitzer nach dem Schneiden.", ua: "Beschnitt запобігає білим смужкам після обрізання." },
      { q: "Was sind Druckdaten?", a: "Druckdaten sind Dateien, die für die Druckerei vorbereitet sind.", ua: "Druckdaten - це файли, підготовлені для друкарні." },
    ],
  },
  w05: {
    terms: [
      { de: "das Raster", ua: "сітка", meaning: "Hilfssystem, um Elemente ordentlich zu platzieren" },
      { de: "der Weißraum", ua: "вільний простір", meaning: "freier Bereich zwischen Gestaltungselementen" },
      { de: "der Blickfang", ua: "елемент уваги", meaning: "Element, das zuerst Aufmerksamkeit bekommt" },
      { de: "die Leserführung", ua: "ведення погляду", meaning: "lenkt den Blick durch das Layout" },
    ],
    questions: [
      { q: "Wofür braucht man ein Raster?", a: "Ein Raster hilft, ein Layout klar und ordentlich aufzubauen.", ua: "Сітка допомагає зробити макет чітким і охайним." },
      { q: "Warum ist Weißraum wichtig?", a: "Weißraum macht das Design ruhiger und besser lesbar.", ua: "Вільний простір робить дизайн спокійнішим і читабельнішим." },
    ],
  },
  w06: {
    terms: [
      { de: "die Musterseite", ua: "master page", meaning: "Vorlage für wiederkehrende Elemente in InDesign" },
      { de: "die Spalte", ua: "колонка", meaning: "senkrechter Bereich für Text oder Bilder" },
      { de: "der Falz", ua: "згин", meaning: "Stelle, an der Papier gefaltet wird" },
      { de: "die Endverarbeitung", ua: "після друкарська обробка", meaning: "Schneiden, Falzen, Binden oder Veredeln nach dem Druck" },
    ],
    questions: [
      { q: "Was ist eine Musterseite?", a: "Eine Musterseite ist eine Vorlage für gleiche Elemente auf mehreren Seiten.", ua: "Master page - це шаблон для однакових елементів на кількох сторінках." },
      { q: "Warum nutzt man Spalten?", a: "Spalten machen lange Inhalte übersichtlicher.", ua: "Колонки роблять довгий контент зрозумілішим." },
    ],
  },
  w07: {
    terms: [
      { de: "die Kampagne", ua: "кампанія", meaning: "mehrere zusammengehörende Werbemaßnahmen mit einem Ziel" },
      { de: "die Botschaft", ua: "повідомлення", meaning: "Kernaussage, die kommuniziert werden soll" },
      { de: "der Call-to-Action", ua: "заклик до дії", meaning: "Aufforderung, etwas zu tun, zum Beispiel buchen oder kaufen" },
      { de: "die Bildsprache", ua: "візуальна мова", meaning: "Stil der Bilder, Farben und visuellen Stimmung" },
    ],
    questions: [
      { q: "Was ist eine Kampagne?", a: "Eine Kampagne besteht aus mehreren Maßnahmen mit einem gemeinsamen Ziel.", ua: "Кампанія складається з кількох дій з однією спільною метою." },
      { q: "Was ist ein Call-to-Action?", a: "Ein Call-to-Action fordert den Nutzer zu einer Handlung auf.", ua: "Call-to-action закликає користувача до дії." },
    ],
  },
  w08: {
    terms: [
      { de: "das Farbprofil", ua: "колірний профіль", meaning: "beschreibt, wie Farben auf einem Gerät oder im Druck wiedergegeben werden" },
      { de: "der Preflight", ua: "перевірка перед друком", meaning: "Kontrolle, ob Druckdaten korrekt sind" },
      { de: "die Druckmarken", ua: "друкарські мітки", meaning: "Hilfszeichen für Druckerei und Weiterverarbeitung" },
      { de: "die Fallstudie", ua: "case study", meaning: "Präsentation von Problem, Prozess und Ergebnis" },
    ],
    questions: [
      { q: "Was prüft man im Preflight?", a: "Man prüft Beschnitt, Bilder, Schriften, Farben und PDF-Einstellungen.", ua: "Перевіряють Beschnitt, зображення, шрифти, кольори і PDF-налаштування." },
      { q: "Was zeigt eine Case Study?", a: "Eine Case Study zeigt Problem, Prozess und Ergebnis eines Projekts.", ua: "Case study показує проблему, процес і результат проєкту." },
    ],
  },
  w09: {
    terms: [
      { de: "die Landing Page", ua: "посадкова сторінка", meaning: "einzelne Webseite mit einem klaren Ziel" },
      { de: "der Hero-Bereich", ua: "перший екран сайту", meaning: "oberster Bereich mit Hauptaussage und CTA" },
      { de: "die Informationsarchitektur", ua: "структура інформації", meaning: "Ordnung und Aufbau der Inhalte auf einer Website" },
      { de: "responsive", ua: "адаптивний", meaning: "passt sich an verschiedene Bildschirmgrößen an" },
    ],
    questions: [
      { q: "Was ist eine Landing Page?", a: "Eine Landing Page ist eine einzelne Webseite mit einem klaren Ziel.", ua: "Landing page - це одна сторінка з чіткою метою." },
      { q: "Warum ist ein CTA wichtig?", a: "Ein CTA zeigt, was der Nutzer als Nächstes tun soll.", ua: "CTA показує, що користувач має зробити далі." },
    ],
  },
  w10: {
    terms: [
      { de: "die Komponente", ua: "компонент", meaning: "wiederverwendbares UI-Element wie Button oder Card" },
      { de: "der Zustand", ua: "стан", meaning: "Variante eines Elements, zum Beispiel normal, hover oder active" },
      { de: "der Breakpoint", ua: "точка адаптації", meaning: "Bildschirmbreite, bei der sich das Layout ändert" },
      { de: "die Barrierefreiheit", ua: "доступність", meaning: "Design ist für möglichst viele Menschen nutzbar" },
    ],
    questions: [
      { q: "Was ist eine UI-Komponente?", a: "Eine Komponente ist ein wiederverwendbares Element im Design.", ua: "Компонент - це повторюваний елемент у дизайні." },
      { q: "Was bedeutet responsive Design?", a: "Responsive Design passt sich an Desktop, Tablet und Smartphone an.", ua: "Responsive design адаптується до desktop, tablet і smartphone." },
    ],
  },
  w11: {
    terms: [
      { de: "das Theme", ua: "тема WordPress", meaning: "Grunddesign einer WordPress-Website" },
      { de: "das Plugin", ua: "плагін", meaning: "Erweiterung mit zusätzlichen Funktionen" },
      { de: "der Container", ua: "контейнер", meaning: "Elementor-Bereich, der Inhalte strukturiert" },
      { de: "die globalen Stile", ua: "глобальні стилі", meaning: "zentrale Einstellungen für Farben, Schriften und Layout" },
    ],
    questions: [
      { q: "Was ist ein Plugin?", a: "Ein Plugin erweitert WordPress um zusätzliche Funktionen.", ua: "Плагін додає WordPress додаткові функції." },
      { q: "Wofür nutzt man Container in Elementor?", a: "Container strukturieren Inhalte und helfen beim responsive Design.", ua: "Контейнери структурують контент і допомагають з адаптивністю." },
    ],
  },
  w12: {
    terms: [
      { de: "das Formular", ua: "форма", meaning: "Bereich, in dem Nutzer Daten senden können" },
      { de: "der Alt-Text", ua: "альтернативний текст", meaning: "Beschreibung eines Bildes für SEO und Barrierefreiheit" },
      { de: "der Meta Title", ua: "SEO-заголовок", meaning: "Titel einer Seite für Suchmaschinen" },
      { de: "die Ladezeit", ua: "час завантаження", meaning: "Zeit, bis eine Website sichtbar und nutzbar ist" },
    ],
    questions: [
      { q: "Warum braucht ein Bild Alt-Text?", a: "Alt-Text hilft bei SEO und Barrierefreiheit.", ua: "Alt-text допомагає SEO і доступності." },
      { q: "Warum ist Ladezeit wichtig?", a: "Eine schnelle Website ist besser für Nutzer und Suchmaschinen.", ua: "Швидкий сайт кращий для користувачів і пошукових систем." },
    ],
  },
  w13: {
    terms: [
      { de: "die Recherche", ua: "дослідження", meaning: "Sammeln und Auswerten von Informationen vor dem Design" },
      { de: "der Entwurfsprozess", ua: "процес розробки", meaning: "Weg von Idee über Skizzen bis zum finalen Design" },
      { de: "das Mockup", ua: "мокап", meaning: "realistische Darstellung eines Designs auf einem Produkt oder Bildschirm" },
      { de: "die Fallstudie", ua: "case study", meaning: "Portfolio-Präsentation eines Projekts" },
    ],
    questions: [
      { q: "Warum zeigt man den Designprozess?", a: "Der Prozess zeigt, wie Entscheidungen entstanden sind.", ua: "Процес показує, як виникли дизайнерські рішення." },
      { q: "Was gehört in eine Case Study?", a: "Problem, Recherche, Moodboard, Prozess und Endergebnis.", ua: "Проблема, дослідження, moodboard, процес і фінальний результат." },
    ],
  },
  w14: {
    terms: [
      { de: "das Portfolio", ua: "портфоліо", meaning: "Sammlung der besten Arbeiten" },
      { de: "das Kurzprofil", ua: "короткий профіль", meaning: "kurze Vorstellung der Person und Fähigkeiten" },
      { de: "die Projektbeschreibung", ua: "опис проєкту", meaning: "kurzer Text über Ziel, Rolle, Prozess und Ergebnis" },
      { de: "die Bewerbung", ua: "заявка на роботу", meaning: "Unterlagen und Kommunikation für eine Stelle" },
    ],
    questions: [
      { q: "Was zeigt ein gutes Portfolio?", a: "Es zeigt gute Arbeiten, Prozess und klare Ergebnisse.", ua: "Хороше портфоліо показує роботи, процес і чіткі результати." },
      { q: "Was steht in einer Projektbeschreibung?", a: "Ziel, Aufgabe, eigene Rolle, Prozess und Ergebnis.", ua: "Мета, завдання, твоя роль, процес і результат." },
    ],
  },
  w15: {
    terms: [
      { de: "Crossmedia", ua: "кросмедіа", meaning: "eine Kampagne über mehrere Medienkanäle" },
      { de: "der Kanal", ua: "канал", meaning: "Medium wie Print, Social Media, Website oder Newsletter" },
      { de: "die Konsistenz", ua: "послідовність", meaning: "alle Medien wirken zusammengehörend" },
      { de: "die Qualitätskontrolle", ua: "контроль якості", meaning: "Prüfung vor Abgabe oder Veröffentlichung" },
    ],
    questions: [
      { q: "Was ist Crossmedia?", a: "Crossmedia verbindet mehrere Kanäle in einer Kampagne.", ua: "Crossmedia об'єднує кілька каналів в одній кампанії." },
      { q: "Warum ist Konsistenz wichtig?", a: "Konsistenz macht eine Marke wiedererkennbar.", ua: "Послідовність робить бренд впізнаваним." },
    ],
  },
  w16: {
    terms: [
      { de: "das Fachgespräch", ua: "усна професійна розмова", meaning: "Prüfungsgespräch, in dem du deine Arbeit erklärst" },
      { de: "begründen", ua: "обґрунтувати", meaning: "erklären, warum man eine Entscheidung getroffen hat" },
      { de: "die Selbstbewertung", ua: "самооцінка", meaning: "eigene Arbeit prüfen und Verbesserungen erkennen" },
      { de: "der nächste Schritt", ua: "наступний крок", meaning: "konkrete Handlung nach dem Review" },
    ],
    questions: [
      { q: "Warum haben Sie CMYK verwendet?", a: "Ich habe CMYK verwendet, weil das Produkt für den Druck vorbereitet wurde.", ua: "Я використала CMYK, тому що продукт підготовлений для друку." },
      { q: "Wie erklären Sie Ihre Gestaltung?", a: "Ich erkläre Zielgruppe, Layout, Farben, Typografie und technische Vorbereitung.", ua: "Я пояснюю цільову групу, макет, кольори, типографіку і технічну підготовку." },
    ],
  },
};

const termMeaningTranslations = {
  "das Briefing": "Коротка інформація від клієнта: мета, цільова група, стиль, бюджет і час.",
  "die Zielgruppe": "Люди, яких має досягнути дизайн або реклама.",
  "das Moodboard": "Збірка зображень, кольорів і стилю для візуального напрямку.",
  "die Corporate Identity": "Загальний образ бренду всередині компанії і назовні.",
  "die Vektorgrafik": "Графіка з форм і контурів, яку можна збільшувати без втрати якості.",
  "die Wortmarke": "Логотип, який складається переважно з тексту.",
  "die Bildmarke": "Графічний знак або символ бренду.",
  "die Skalierbarkeit": "Логотип або графіка добре працює у малому і великому розмірі.",
  "die Schriftfamilie": "Група шрифтів, наприклад Regular, Bold і Italic.",
  "die Hierarchie": "Показує, яка інформація найважливіша.",
  "RGB": "Колірна модель для екранів і цифрових медіа.",
  "CMYK": "Колірна модель для друкованої продукції.",
  "der Beschnitt": "Додатковий край, який після друку обрізається.",
  "das Endformat": "Готовий розмір після обрізання.",
  "die Schnittmarken": "Мітки, які показують, де треба різати.",
  "das PDF/X": "PDF-стандарт для друкарських файлів.",
  "das Raster": "Допоміжна сітка для охайного розміщення елементів.",
  "der Weißraum": "Вільний простір між елементами дизайну.",
  "der Blickfang": "Елемент, який першим привертає увагу.",
  "die Leserführung": "Веде погляд людини через макет.",
  "die Musterseite": "Шаблон для однакових елементів на кількох сторінках в InDesign.",
  "die Spalte": "Вертикальна область для тексту або зображень.",
  "der Falz": "Місце, де папір згинається.",
  "die Endverarbeitung": "Обрізання, згинання, брошурування або обробка після друку.",
  "die Kampagne": "Кілька рекламних дій з однією спільною метою.",
  "die Botschaft": "Головна думка, яку треба передати.",
  "der Call-to-Action": "Заклик до дії, наприклад забронювати або купити.",
  "die Bildsprache": "Стиль зображень, кольорів і візуального настрою.",
  "das Farbprofil": "Описує, як кольори відображаються на екрані або в друці.",
  "der Preflight": "Перевірка, чи друкарські файли підготовлені правильно.",
  "die Druckmarken": "Допоміжні позначки для друкарні і подальшої обробки.",
  "die Fallstudie": "Показ проєкту: проблема, процес і результат.",
  "die Landing Page": "Одна сторінка сайту з чіткою метою.",
  "der Hero-Bereich": "Перший верхній блок сайту з головною думкою і кнопкою.",
  "die Informationsarchitektur": "Порядок і структура контенту на сайті.",
  "responsive": "Сайт або дизайн адаптується до різних розмірів екрана.",
  "die Komponente": "Повторюваний UI-елемент, наприклад кнопка або card.",
  "der Zustand": "Варіант елемента, наприклад normal, hover або active.",
  "der Breakpoint": "Ширина екрана, на якій змінюється layout.",
  "die Barrierefreiheit": "Дизайн зручний для максимально великої кількості людей.",
  "das Theme": "Базовий дизайн WordPress-сайту.",
  "das Plugin": "Розширення, яке додає WordPress нові функції.",
  "der Container": "Блок Elementor, який структурує контент.",
  "die globalen Stile": "Центральні налаштування кольорів, шрифтів і layout.",
  "das Formular": "Блок, через який користувачі можуть відправити дані.",
  "der Alt-Text": "Опис зображення для SEO і доступності.",
  "der Meta Title": "Заголовок сторінки для пошукових систем.",
  "die Ladezeit": "Час, поки сайт стане видимим і зручним для використання.",
  "die Recherche": "Збір і аналіз інформації перед дизайном.",
  "der Entwurfsprozess": "Шлях від ідеї та ескізів до фінального дизайну.",
  "das Mockup": "Реалістичний показ дизайну на продукті або екрані.",
  "das Portfolio": "Збірка найкращих робіт.",
  "das Kurzprofil": "Коротке представлення людини і її навичок.",
  "die Projektbeschreibung": "Короткий текст про мету, роль, процес і результат.",
  "die Bewerbung": "Документи і комунікація для подання на роботу.",
  "Crossmedia": "Одна кампанія в кількох медіаканалах.",
  "der Kanal": "Медіа, наприклад print, social media, website або newsletter.",
  "die Konsistenz": "Усі матеріали виглядають як частини одного бренду.",
  "die Qualitätskontrolle": "Перевірка перед здачею або публікацією.",
  "das Fachgespräch": "Екзаменаційна розмова, де ти пояснюєш свою роботу.",
  "begründen": "Пояснити, чому було прийняте певне рішення.",
  "die Selbstbewertung": "Перевірити власну роботу і побачити, що можна покращити.",
  "der nächste Schritt": "Конкретна дія після review.",
};

plan.forEach((week) => {
  week.client = { ...clientBriefs[week.id], ...clientBriefOverrides[week.id] };
  week.spec = { ...projectSpecs[week.id], ...projectSpecOverrides[week.id] };
  week.learning = enrichLearning(theorySupport[week.id]);
});

const state = {
  weekIndex: Number(localStorage.getItem(selectedWeekKey) || 0),
  dayIndex: 0,
  lightWeek: false,
};

const progress = loadProgress();
const learningProgress = loadLearningProgress();

const weekList = document.querySelector("#weekList");
const weekTitle = document.querySelector("#weekTitle");
const weekSummary = document.querySelector("#weekSummary");
const dayAButton = document.querySelector("#dayAButton");
const dayBButton = document.querySelector("#dayBButton");
const dayView = document.querySelector("#dayView");
const progressPercent = document.querySelector("#progressPercent");
const progressBar = document.querySelector("#progressBar");
const resetButton = document.querySelector("#resetButton");
const lightWeekToggle = document.querySelector("#lightWeekToggle");

function loadProgress() {
  try {
    return JSON.parse(localStorage.getItem(storageKey)) || {};
  } catch {
    return {};
  }
}

function saveProgress() {
  localStorage.setItem(storageKey, JSON.stringify(progress));
}

function loadLearningProgress() {
  try {
    return JSON.parse(localStorage.getItem(learningStorageKey)) || {};
  } catch {
    return {};
  }
}

function saveLearningProgress() {
  localStorage.setItem(learningStorageKey, JSON.stringify(learningProgress));
}

function enrichLearning(learning) {
  if (!learning) return null;
  return {
    ...learning,
    terms: learning.terms.map((term) => ({
      ...term,
      meaningUa: term.meaningUa || termMeaningTranslations[term.de] || term.ua,
    })),
  };
}

function sessionKey(day) {
  return day.id;
}

function isDone(day) {
  return Boolean(progress[sessionKey(day)]);
}

function learningItemKey(weekId, type, index) {
  return `${weekId}:${type}:${index}`;
}

function isLearned(key) {
  return Boolean(learningProgress[key]);
}

function toggleLearned(key) {
  if (learningProgress[key]) delete learningProgress[key];
  else learningProgress[key] = Date.now();
  saveLearningProgress();
}

function learningStatsForWeek(week) {
  if (!week.learning) return { done: 0, total: 0 };
  const total = week.learning.terms.length + week.learning.questions.length;
  const termDone = week.learning.terms.filter((_, index) => isLearned(learningItemKey(week.id, "term", index))).length;
  const questionDone = week.learning.questions.filter((_, index) => isLearned(learningItemKey(week.id, "question", index))).length;
  return { done: termDone + questionDone, total };
}

function bindLearningToggles() {
  dayView.querySelectorAll(".learn-toggle").forEach((button) => {
    button.addEventListener("click", () => {
      toggleLearned(button.dataset.learnKey);
      render();
    });
  });
}

function currentWeek() {
  return plan[state.weekIndex] || plan[0];
}

function currentDay() {
  return currentWeek().days[state.dayIndex] || currentWeek().days[0];
}

function allDays() {
  return plan.flatMap((week) => week.days);
}

function renderProgress() {
  const days = allDays();
  const done = days.filter(isDone).length;
  const percent = Math.round((done / days.length) * 100);
  progressPercent.textContent = `${percent}%`;
  progressBar.style.width = `${percent}%`;
}

function renderWeeks() {
  weekList.innerHTML = plan.map((week, index) => {
    const done = week.days.filter(isDone).length;
    const learned = learningStatsForWeek(week);
    return `
      <button class="week-button ${index === state.weekIndex ? "active" : ""}" type="button" data-week="${index}">
        <strong>${index + 1}. ${week.title}</strong>
        <span>${week.month} · ${done}/2 Praxis · ${learned.done}/${learned.total} Theorie · ${week.tools.join(", ")}</span>
      </button>
    `;
  }).join("");

  weekList.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => {
      state.weekIndex = Number(button.dataset.week);
      state.dayIndex = 0;
      localStorage.setItem(selectedWeekKey, String(state.weekIndex));
      render();
    });
  });
}

function renderWeekSummary() {
  const week = currentWeek();
  weekTitle.textContent = `${String(state.weekIndex + 1).padStart(2, "0")} · ${week.title}`;
  weekSummary.innerHTML = `
    <div class="summary-block">
      <h3>Portfolio-Ziel</h3>
      <p>${week.goal}</p>
      <p class="timeline-note">PDF-Theorie: ${week.pdf}</p>
    </div>
    <div class="summary-block">
      <h3>Projekt</h3>
      <p><strong>${week.project}</strong></p>
      <div class="chips">${week.tools.map((tool) => `<span class="chip teal">${tool}</span>`).join("")}</div>
    </div>
    ${renderClientBrief(week.client)}
    ${renderProjectRoadmap(week.id)}
    ${renderProjectSpec(week.spec)}
  `;
}

function renderDayTabs() {
  const [dayA, dayB] = currentWeek().days;
  dayAButton.className = state.dayIndex === 0 ? "active" : "";
  dayBButton.className = state.dayIndex === 1 ? "active" : "";
  dayAButton.textContent = `${dayA.label}: ${dayA.title}`;
  dayBButton.textContent = `${dayB.label}: ${dayB.title}`;
  dayAButton.onclick = () => {
    state.dayIndex = 0;
    render();
  };
  dayBButton.onclick = () => {
    state.dayIndex = 1;
    render();
  };
}

function list(items) {
  return `<ul class="list">${items.map((item) => `<li>${item}</li>`).join("")}</ul>`;
}

function chips(items, tone = "") {
  return `<div class="chips">${items.map((item) => `<span class="chip ${tone}">${item}</span>`).join("")}</div>`;
}

function renderVideos(items) {
  return `
    <div class="video-list">
      ${items.map((video) => `
        <a class="video-card" href="${video.url}" target="_blank" rel="noreferrer">
          <strong>${video.title}</strong>
          <span>${video.channel} · ${video.duration} · YouTube kostenlos</span>
        </a>
      `).join("")}
    </div>
  `;
}

function renderClientBrief(brief) {
  if (!brief) return "";
  return `
    <div class="summary-block client-brief">
      <div class="client-head">
        <div>
          <h3>Kundenauftrag / Клієнтське замовлення</h3>
          <p><strong>Firma:</strong> ${brief.company} · ${brief.industry}</p>
        </div>
        <div class="chips">${brief.deliverables.map((item) => `<span class="chip amber">${item}</span>`).join("")}</div>
      </div>
      <div class="bilingual-grid">
        <div>
          <strong>Was will der Kunde?</strong>
          <p>${brief.wantsDe}</p>
          <p class="ua">${brief.wantsUa}</p>
        </div>
        <div>
          <strong>Auftrag</strong>
          <p>${brief.orderDe}</p>
          <p class="ua">${brief.orderUa}</p>
        </div>
      </div>
    </div>
  `;
}

function renderProjectRoadmap(activeId) {
  return `
    <div class="summary-block project-roadmap">
      <h3>16 Wochen · 16 Kundenrichtungen / 16 тижнів · 16 напрямків клієнтів</h3>
      <div class="roadmap-list">
        ${projectRoadmap.map((item, index) => `
          <span class="roadmap-item ${item.id === activeId ? "active" : ""}">
            <b>${index + 1}</b>
            <span>${item.de}</span>
            <small>${item.ua}</small>
          </span>
        `).join("")}
      </div>
    </div>
  `;
}

function renderProjectSpec(spec) {
  if (!spec) return "";
  return `
    <div class="summary-block project-spec">
      <div class="spec-head">
        <div>
          <h3>Konkreter Kundenauftrag / Конкретне замовлення клієнта</h3>
          <p class="phase-label">${spec.phase}</p>
        </div>
        <span class="chip coral">1 Woche · 1 Kunde · klare Abgabe</span>
      </div>
      <div class="spec-grid">
        <article>
          <strong>Kunde und Richtung</strong>
          <p>${spec.directionDe}</p>
          <p class="ua">${spec.directionUa}</p>
        </article>
        <article>
          <strong>Keine Auswahl / Без вибору</strong>
          <p>${spec.fixedDe}</p>
          <p class="ua">${spec.fixedUa}</p>
        </article>
        <article>
          <strong>Umfang</strong>
          <p>${spec.scopeDe}</p>
          <p class="ua">${spec.scopeUa}</p>
        </article>
        <article>
          <strong>Seiten oder Formate</strong>
          <p>${spec.pagesDe}</p>
          <p class="ua">${spec.pagesUa}</p>
        </article>
      </div>
      <div class="spec-columns">
        <div>
          <strong>Abgabe / Що здати</strong>
          ${list(spec.deliverables)}
        </div>
        <div>
          <strong>${spec.plugins ? "Plugins / Плагіни" : "Einstellungen / Налаштування"}</strong>
          ${list(spec.plugins || spec.settings)}
        </div>
      </div>
      ${spec.plugins ? `
        <div class="spec-settings">
          <strong>Plugin-Einstellungen / Налаштування плагінів</strong>
          ${list(spec.settings)}
        </div>
      ` : ""}
    </div>
  `;
}

function renderTodayOrder(brief, dayIndex) {
  if (!brief || !brief.today || !brief.today[dayIndex]) return "";
  const order = brief.today[dayIndex];
  return `
    <section class="section client-task">
      <h3>Aufgabe heute / Завдання на сьогодні</h3>
      <p><strong>DE:</strong> ${order.de}</p>
      <p class="ua"><strong>UA:</strong> ${order.ua}</p>
    </section>
  `;
}

function renderLearningSupport(week) {
  const learning = week.learning;
  if (!learning) return "";
  const stats = learningStatsForWeek(week);
  return `
    <section class="section learning-support">
      <div class="learning-head">
        <div>
          <h3>Theorie lernen / Теорія для вивчення</h3>
          <p class="learning-intro">Основні слова цього тижня: спочатку зрозуміти значення, потім вчити для Fachgespräch.</p>
        </div>
        <span>${stats.done}/${stats.total} gelernt</span>
      </div>
      <div class="term-grid">
        ${learning.terms.map((term, index) => {
          const key = learningItemKey(week.id, "term", index);
          const learned = isLearned(key);
          return `
          <article class="term-card">
            <div class="term-top">
              <div>
                <strong>${term.de}</strong>
                <span>${term.ua}</span>
              </div>
              <button class="learn-toggle ${learned ? "learned" : ""}" type="button" data-learn-key="${key}">
                ${learned ? "Gelernt" : "Lernen"}
              </button>
            </div>
            <p><b>DE einfach:</b> ${term.meaning}</p>
            <p class="ua"><b>UA:</b> ${term.meaningUa}</p>
          </article>
        `}).join("")}
      </div>
      <h4>Beispielfragen / Приклади питань</h4>
      <div class="question-list">
        ${learning.questions.map((item, index) => {
          const key = learningItemKey(week.id, "question", index);
          const learned = isLearned(key);
          return `
          <article class="question-card">
            <div class="question-top">
              <strong>${item.q}</strong>
              <button class="learn-toggle ${learned ? "learned" : ""}" type="button" data-learn-key="${key}">
                ${learned ? "Geübt" : "Üben"}
              </button>
            </div>
            <p><b>Antwort:</b> ${item.a}</p>
            <p class="ua"><b>UA:</b> ${item.ua}</p>
          </article>
        `}).join("")}
      </div>
    </section>
  `;
}

function renderDay() {
  const day = currentDay();
  const week = currentWeek();
  const done = isDone(day);
  const time = state.lightWeek ? day.light : day.time;
  dayView.innerHTML = `
    <div class="day-head">
      <div>
        <div class="chips">
          <span class="chip amber">${time}</span>
          <span class="chip">${currentWeek().month}</span>
          <span class="chip teal">${day.label}</span>
        </div>
        <h3>${day.title}</h3>
        <p>${day.focus}</p>
      </div>
      <button id="completeButton" class="complete-button ${done ? "done" : ""}" type="button">
        ${done ? "Erledigt" : "Als erledigt markieren"}
      </button>
    </div>

    <div class="layout-grid">
      <div>
        ${renderTodayOrder(week.client, state.dayIndex)}
        ${renderLearningSupport(week)}
        <section class="section">
          <h3>Theorie / Теорія</h3>
          ${chips(day.theory, "teal")}
        </section>
        <section class="section">
          <h3>Fachwörter / Фахові слова</h3>
          ${chips(day.fach)}
        </section>
        <section class="section">
          <h3>Praxis-Aufgabe / Практичне завдання</h3>
          ${list(day.practice)}
        </section>
        <section class="section soft">
          <h3>Portfolio-Ergebnis / Результат для портфоліо</h3>
          ${list(day.portfolio)}
        </section>
      </div>

      <aside>
        <section class="project-card">
          <h3>Adobe-Aufgabe / Завдання в Adobe</h3>
          <p>${day.adobe}</p>
        </section>
        <section class="project-card">
          <h3>Figma-Variante / Варіант у Figma</h3>
          <p>${day.figma}</p>
        </section>
        <section class="project-card warning">
          <h3>Wenn die Woche schwer ist / Якщо тиждень важкий</h3>
          <p>Nur Minimum machen: öffnen, Struktur anlegen, 1 Entscheidung treffen, speichern. Nicht alles perfektionieren.</p>
        </section>
        <section class="project-card">
          <h3>Kurz-Tutorials / Короткі уроки</h3>
          ${renderVideos(day.videos)}
        </section>
      </aside>
    </div>
  `;

  document.querySelector("#completeButton").addEventListener("click", () => {
    const key = sessionKey(day);
    if (progress[key]) delete progress[key];
    else progress[key] = Date.now();
    saveProgress();
    render();
  });
  bindLearningToggles();
}

function render() {
  renderProgress();
  renderWeeks();
  renderWeekSummary();
  renderDayTabs();
  renderDay();
}

resetButton.addEventListener("click", () => {
  if (!confirm("Fortschritt wirklich zurücksetzen?")) return;
  Object.keys(progress).forEach((key) => delete progress[key]);
  Object.keys(learningProgress).forEach((key) => delete learningProgress[key]);
  saveProgress();
  saveLearningProgress();
  render();
});

lightWeekToggle.addEventListener("change", () => {
  state.lightWeek = lightWeekToggle.checked;
  renderDay();
});

render();
