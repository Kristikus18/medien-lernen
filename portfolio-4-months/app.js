const storageKey = "portfolio-4-months-progress-v1";
const selectedWeekKey = "portfolio-4-months-selected-week-v1";

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
    project: "Mini-Brand für fiktives Café, Tattoo-Studio, Kosmetikstudio oder Tierpraxis",
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
        practice: ["Вибери final client.", "Напиши campaign goal.", "Склади asset list: logo, flyer, posts, landing page."],
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

const state = {
  weekIndex: Number(localStorage.getItem(selectedWeekKey) || 0),
  dayIndex: 0,
  lightWeek: false,
};

const progress = loadProgress();

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

function sessionKey(day) {
  return day.id;
}

function isDone(day) {
  return Boolean(progress[sessionKey(day)]);
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
    return `
      <button class="week-button ${index === state.weekIndex ? "active" : ""}" type="button" data-week="${index}">
        <strong>${index + 1}. ${week.title}</strong>
        <span>${week.month} · ${done}/2 erledigt · ${week.tools.join(", ")}</span>
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

function renderDay() {
  const day = currentDay();
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
        <section class="section">
          <h3>Theorie, die du direkt brauchst</h3>
          ${chips(day.theory, "teal")}
        </section>
        <section class="section">
          <h3>Fachwörter für Fachgespräch</h3>
          ${chips(day.fach)}
        </section>
        <section class="section">
          <h3>Praxis-Aufgabe</h3>
          ${list(day.practice)}
        </section>
        <section class="section soft">
          <h3>Portfolio-Ergebnis</h3>
          ${list(day.portfolio)}
        </section>
      </div>

      <aside>
        <section class="project-card">
          <h3>Adobe-Aufgabe</h3>
          <p>${day.adobe}</p>
        </section>
        <section class="project-card">
          <h3>Figma-Variante</h3>
          <p>${day.figma}</p>
        </section>
        <section class="project-card warning">
          <h3>Wenn die Woche schwer ist</h3>
          <p>Nur Minimum machen: öffnen, Struktur anlegen, 1 Entscheidung treffen, speichern. Nicht alles perfektionieren.</p>
        </section>
        <section class="project-card">
          <h3>Kurz-Tutorials</h3>
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
  saveProgress();
  render();
});

lightWeekToggle.addEventListener("change", () => {
  state.lightWeek = lightWeekToggle.checked;
  renderDay();
});

render();
