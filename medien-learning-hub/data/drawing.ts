export interface DrawingWeek {
  id: string;
  week: number;
  title: string;
  ausbildungLink: string;
  tasks: DrawingTask[];
}

export interface DrawingTask {
  id: string;
  title: string;
  medium: "Hand + Aquarell" | "iPad optional";
  style: string;
  referenceQuery: string;
  searchUrl: string;
  steps: string[];
  postIdea: string;
}

function imageSearch(query: string) {
  return `https://www.google.com/search?tbm=isch&q=${encodeURIComponent(query)}`;
}

function youtubeSearch(query: string) {
  return `https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`;
}

export const drawingTutorialLinks = [
  {
    title: "Procreate beginner basics",
    url: youtubeSearch("Procreate beginner tutorial iPad drawing simple")
  },
  {
    title: "How to draw hands for beginners",
    url: youtubeSearch("how to draw hands for beginners simple shapes")
  },
  {
    title: "How to draw cartoon body poses",
    url: youtubeSearch("how to draw cartoon body poses beginner")
  },
  {
    title: "Simple watercolor sketchbook ideas",
    url: youtubeSearch("simple watercolor sketchbook ideas beginner")
  },
  {
    title: "Simple logo animation beginner",
    url: youtubeSearch("simple logo animation beginner After Effects Figma")
  }
];

export const drawingWeeks: DrawingWeek[] = [
  {
    id: "drawing-week-1",
    week: 1,
    title: "Sci-fi café objects",
    ausbildungLink: "Moodboard, Bildsprache, Logo-Ideen und eigene Icons für ein Branding-Projekt.",
    tasks: [
      {
        id: "drawing-week-1-a",
        title: "Portal coffee cup",
        medium: "Hand + Aquarell",
        style: "Original sci-fi cartoon mood, not copied from an existing series.",
        referenceQuery: "simple cartoon sci fi coffee cup portal watercolor sketch",
        searchUrl: imageSearch("simple cartoon sci fi coffee cup portal watercolor sketch"),
        steps: [
          "Zeichne zuerst eine einfache Tasse mit Kreis und Zylinder.",
          "Setze dahinter einen runden Portal-Ring.",
          "Male nur 2-3 Farben mit Aquarell.",
          "Füge kleine Sterne, Dampf oder Tropfen hinzu."
        ],
        postIdea: "Instagram caption: kleine Warm-up-Skizze für ein Café-Branding."
      },
      {
        id: "drawing-week-1-b",
        title: "Tiny lab croissant",
        medium: "Hand + Aquarell",
        style: "Funny original cartoon prop with simple shapes.",
        referenceQuery: "cute cartoon croissant science lab simple watercolor sketch",
        searchUrl: imageSearch("cute cartoon croissant science lab simple watercolor sketch"),
        steps: [
          "Zeichne ein Croissant aus 3-4 gebogenen Formen.",
          "Gib ihm kleine Laborbrille oder Mini-Flasche.",
          "Halte die Linien bewusst locker.",
          "Male Schatten mit einer Farbe."
        ],
        postIdea: "Instagram caption: character prop practice for brand illustration."
      }
    ]
  },
  {
    id: "drawing-week-2",
    week: 2,
    title: "Hands and client props",
    ausbildungLink: "Skizzen, Bildkomposition und kleine Illustrationen für Visitenkarte, Flyer oder Website.",
    tasks: [
      {
        id: "drawing-week-2-a",
        title: "Hand holding business card",
        medium: "Hand + Aquarell",
        style: "Simple portfolio sketch, clean and readable.",
        referenceQuery: "hand holding business card simple drawing reference",
        searchUrl: imageSearch("hand holding business card simple drawing reference"),
        steps: [
          "Zeichne die Karte als Rechteck.",
          "Setze Daumen und vier Finger als einfache Röhrenformen.",
          "Prüfe Proportionen: Finger nicht zu lang.",
          "Male Karte und Schatten sehr leicht."
        ],
        postIdea: "Instagram caption: hand study for print design mockups."
      },
      {
        id: "drawing-week-2-b",
        title: "Cartoon hand with pencil",
        medium: "iPad optional",
        style: "Original cartoon hand, useful for process posts.",
        referenceQuery: "simple cartoon hand holding pencil reference",
        searchUrl: imageSearch("simple cartoon hand holding pencil reference"),
        steps: [
          "Skizziere die Hand als große Grundform.",
          "Zeichne den Stift als einfache Linie mit Spitze.",
          "Reduziere Details, damit es cartoonhaft bleibt.",
          "Optional: saubere iPad-Linie darüber zeichnen."
        ],
        postIdea: "Instagram caption: sketching my design process."
      }
    ]
  },
  {
    id: "drawing-week-3",
    week: 3,
    title: "Original weird characters",
    ausbildungLink: "Eigene Bildsprache entwickeln, ohne fremde Figuren 1:1 zu kopieren.",
    tasks: [
      {
        id: "drawing-week-3-a",
        title: "Sleepy alien student",
        medium: "Hand + Aquarell",
        style: "Absurd sci-fi cartoon, original character.",
        referenceQuery: "simple sleepy alien cartoon character sketch",
        searchUrl: imageSearch("simple sleepy alien cartoon character sketch"),
        steps: [
          "Zeichne Kopf als große Bohnenform.",
          "Setze große Augen und kleine Schultern.",
          "Gib der Figur ein Buch oder Tablet.",
          "Male nur Gesicht, Schatten und ein kleines Detail."
        ],
        postIdea: "Instagram caption: original character practice, study mood."
      },
      {
        id: "drawing-week-3-b",
        title: "Nervous office creature",
        medium: "Hand + Aquarell",
        style: "Funny office character with expressive eyes.",
        referenceQuery: "simple nervous office cartoon character sketch",
        searchUrl: imageSearch("simple nervous office cartoon character sketch"),
        steps: [
          "Zeichne eine kleine Körperform und großen Kopf.",
          "Setze zwei unterschiedliche Augen für Ausdruck.",
          "Füge Laptop, Kaffeebecher oder Bewerbung hinzu.",
          "Male mit 2 Farben und viel Weißraum."
        ],
        postIdea: "Instagram caption: character idea for recruiting brand."
      }
    ]
  },
  {
    id: "drawing-week-4",
    week: 4,
    title: "Animals for cute brands",
    ausbildungLink: "Tierfiguren und Icons für Logos, Sticker, Packaging und Social Posts.",
    tasks: [
      {
        id: "drawing-week-4-a",
        title: "Tiny clinic cat",
        medium: "Hand + Aquarell",
        style: "Cute but simple animal mascot.",
        referenceQuery: "simple cartoon cat mascot sketch watercolor",
        searchUrl: imageSearch("simple cartoon cat mascot sketch watercolor"),
        steps: [
          "Zeichne Katze aus Kreis, Oval und Dreiecken.",
          "Setze ein kleines Pflaster oder Herz-Icon.",
          "Halte Pfoten sehr einfach.",
          "Male nur Fellflecken und Schatten."
        ],
        postIdea: "Instagram caption: animal mascot warm-up."
      },
      {
        id: "drawing-week-4-b",
        title: "Little confused dog",
        medium: "Hand + Aquarell",
        style: "Original cartoon pet with simple expression.",
        referenceQuery: "simple confused cartoon dog sketch reference",
        searchUrl: imageSearch("simple confused cartoon dog sketch reference"),
        steps: [
          "Zeichne Kopf und Körper als einfache Ovale.",
          "Setze schiefe Ohren für Charakter.",
          "Füge große Augen und kleine Nase hinzu.",
          "Male mit lockerer Aquarellfläche."
        ],
        postIdea: "Instagram caption: pet character practice."
      }
    ]
  },
  {
    id: "drawing-week-5",
    week: 5,
    title: "Flyer characters",
    ausbildungLink: "Blickfang, Leserführung und Illustration für Event-Flyer.",
    tasks: [
      {
        id: "drawing-week-5-a",
        title: "Workshop kid with brush",
        medium: "Hand + Aquarell",
        style: "Friendly children workshop illustration.",
        referenceQuery: "simple child holding paint brush cartoon sketch",
        searchUrl: imageSearch("simple child holding paint brush cartoon sketch"),
        steps: [
          "Zeichne Kopf, Körper und Arme aus einfachen Formen.",
          "Setze einen großen Pinsel als Blickfang.",
          "Achte auf klare Silhouette.",
          "Male nur Pinsel, Shirt und Wangen."
        ],
        postIdea: "Instagram caption: flyer illustration study."
      },
      {
        id: "drawing-week-5-b",
        title: "Funny paint monster",
        medium: "iPad optional",
        style: "Original silly monster, not scary.",
        referenceQuery: "simple funny paint monster cartoon sketch",
        searchUrl: imageSearch("simple funny paint monster cartoon sketch"),
        steps: [
          "Zeichne eine unregelmäßige Farbklecks-Form.",
          "Setze Augen und kleine Arme.",
          "Mache 3 Farbvarianten.",
          "Optional: als Sticker-Idee auf dem iPad nachzeichnen."
        ],
        postIdea: "Instagram caption: sticker idea from a paint shape."
      }
    ]
  },
  {
    id: "drawing-week-6",
    week: 6,
    title: "Interior and brochure details",
    ausbildungLink: "Bildrhythmus, Icons und kleine Spot-Illustrationen für Broschüren.",
    tasks: [
      {
        id: "drawing-week-6-a",
        title: "Chair and plant corner",
        medium: "Hand + Aquarell",
        style: "Simple interior watercolor sketch.",
        referenceQuery: "simple chair plant corner watercolor sketch",
        searchUrl: imageSearch("simple chair plant corner watercolor sketch"),
        steps: [
          "Zeichne Stuhl mit wenigen geraden Linien.",
          "Setze Pflanze als weiche organische Form.",
          "Male leichte Schatten unter Möbeln.",
          "Lass viel Weißraum."
        ],
        postIdea: "Instagram caption: interior spot illustration."
      },
      {
        id: "drawing-week-6-b",
        title: "Tiny floorplan icons",
        medium: "iPad optional",
        style: "Clean simple icon practice.",
        referenceQuery: "simple floor plan icons line drawing",
        searchUrl: imageSearch("simple floor plan icons line drawing"),
        steps: [
          "Zeichne 6 Icons: door, window, sofa, plant, lamp, table.",
          "Nutze gleiche Linienstärke.",
          "Prüfe, ob jedes Icon klein lesbar ist.",
          "Optional: exportiere als PNG."
        ],
        postIdea: "Instagram caption: icon practice for brochure layouts."
      }
    ]
  },
  {
    id: "drawing-week-7",
    week: 7,
    title: "Body poses",
    ausbildungLink: "Figuren, Bildkomposition und eigene Social-Media-Illustrationen.",
    tasks: [
      {
        id: "drawing-week-7-a",
        title: "Simple standing pose",
        medium: "Hand + Aquarell",
        style: "Cartoon body with simple proportions.",
        referenceQuery: "simple cartoon standing pose reference",
        searchUrl: imageSearch("simple cartoon standing pose reference"),
        steps: [
          "Zeichne Kopf, Brustkorb und Becken als einfache Formen.",
          "Setze Arme und Beine als Linien mit Volumen.",
          "Übertreibe Kopf oder Augen leicht für Cartoon-Stil.",
          "Male nur Kleidung und Schatten."
        ],
        postIdea: "Instagram caption: body pose practice."
      },
      {
        id: "drawing-week-7-b",
        title: "Walking character",
        medium: "Hand + Aquarell",
        style: "Simple motion pose.",
        referenceQuery: "simple cartoon walking pose reference",
        searchUrl: imageSearch("simple cartoon walking pose reference"),
        steps: [
          "Zeichne eine Aktionslinie.",
          "Setze Beine in entgegengesetzte Richtungen.",
          "Füge Tasche, Kaffee oder Handy hinzu.",
          "Male nur kleine Akzente."
        ],
        postIdea: "Instagram caption: movement study for character design."
      }
    ]
  },
  {
    id: "drawing-week-8",
    week: 8,
    title: "Print and paper objects",
    ausbildungLink: "Druckprodukte, Broschüren, Papier und Präsentationsskizzen.",
    tasks: [
      {
        id: "drawing-week-8-a",
        title: "Stack of printed flyers",
        medium: "Hand + Aquarell",
        style: "Simple object sketch for print portfolio.",
        referenceQuery: "stack of flyers simple sketch watercolor",
        searchUrl: imageSearch("stack of flyers simple sketch watercolor"),
        steps: [
          "Zeichne mehrere leicht versetzte Rechtecke.",
          "Setze kleine Farbbalken als Printdesign.",
          "Male Schatten zwischen den Papieren.",
          "Halte Typografie nur als Linien."
        ],
        postIdea: "Instagram caption: print materials sketch."
      },
      {
        id: "drawing-week-8-b",
        title: "Paper mascot",
        medium: "iPad optional",
        style: "Funny original paper character.",
        referenceQuery: "simple paper mascot cartoon sketch",
        searchUrl: imageSearch("simple paper mascot cartoon sketch"),
        steps: [
          "Zeichne ein Blatt Papier mit Gesicht.",
          "Füge kleine Arme und Beine hinzu.",
          "Gib ihm eine Druckmarke oder Schnittmarke.",
          "Optional: saubere Sticker-Version am iPad."
        ],
        postIdea: "Instagram caption: print mascot for Fachwörter."
      }
    ]
  },
  {
    id: "drawing-week-9",
    week: 9,
    title: "Website hero sketches",
    ausbildungLink: "Figma Website Design, UI Hero, Bildsprache und eigene Visuals.",
    tasks: [
      {
        id: "drawing-week-9-a",
        title: "Tiny hotel lobby scene",
        medium: "Hand + Aquarell",
        style: "Simple cozy scene for web hero inspiration.",
        referenceQuery: "simple hotel lobby watercolor sketch cartoon",
        searchUrl: imageSearch("simple hotel lobby watercolor sketch cartoon"),
        steps: [
          "Zeichne Sofa, Lampe und Fenster als einfache Formen.",
          "Setze eine kleine Figur als Maßstab.",
          "Male nur warme Lichtflächen.",
          "Lass genug Weißraum für mögliche Headline."
        ],
        postIdea: "Instagram caption: hero illustration warm-up for website design."
      },
      {
        id: "drawing-week-9-b",
        title: "Portal door icon",
        medium: "iPad optional",
        style: "Original sci-fi doorway icon.",
        referenceQuery: "simple portal door cartoon icon sketch",
        searchUrl: imageSearch("simple portal door cartoon icon sketch"),
        steps: [
          "Zeichne eine Tür als Rechteck mit Rundung.",
          "Setze einen leuchtenden Ring dahinter.",
          "Erstelle 3 Farbvarianten.",
          "Optional: als Figma/Icon-Idee exportieren."
        ],
        postIdea: "Instagram caption: UI icon idea from sketchbook."
      }
    ]
  },
  {
    id: "drawing-week-10",
    week: 10,
    title: "UI and yoga characters",
    ausbildungLink: "Responsive UI, Komponenten, Körperhaltung und reduzierte Figuren.",
    tasks: [
      {
        id: "drawing-week-10-a",
        title: "Yoga pose silhouette",
        medium: "Hand + Aquarell",
        style: "Simple body pose, calm and readable.",
        referenceQuery: "simple yoga pose silhouette drawing reference",
        searchUrl: imageSearch("simple yoga pose silhouette drawing reference"),
        steps: [
          "Zeichne zuerst Aktionslinie und Kopf.",
          "Setze Arme und Beine als klare Silhouette.",
          "Reduziere Gesicht und Details.",
          "Male mit einer ruhigen Farbe."
        ],
        postIdea: "Instagram caption: body pose study for wellness UI."
      },
      {
        id: "drawing-week-10-b",
        title: "Button mascot",
        medium: "iPad optional",
        style: "Funny UI component character.",
        referenceQuery: "simple button mascot cartoon sketch",
        searchUrl: imageSearch("simple button mascot cartoon sketch"),
        steps: [
          "Zeichne einen Button als runde Form.",
          "Gib ihm Augen und kleine Beine.",
          "Setze ein kleines CTA-Symbol.",
          "Optional: animate hover idea in Figma."
        ],
        postIdea: "Instagram caption: UI component turned into a character."
      }
    ]
  },
  {
    id: "drawing-week-11",
    week: 11,
    title: "Food and WordPress",
    ausbildungLink: "WordPress Seiten, Restaurant/Service Icons, Bildsprache und kleine Illustrationen.",
    tasks: [
      {
        id: "drawing-week-11-a",
        title: "Simple pasta bowl",
        medium: "Hand + Aquarell",
        style: "Loose watercolor food sketch.",
        referenceQuery: "simple pasta bowl watercolor sketch cartoon",
        searchUrl: imageSearch("simple pasta bowl watercolor sketch cartoon"),
        steps: [
          "Zeichne Schüssel als Oval.",
          "Setze Nudeln als lockere Linien.",
          "Male Sauce als eine Farbfläche.",
          "Füge kleine Kräuterpunkte hinzu."
        ],
        postIdea: "Instagram caption: food sketch for restaurant website mood."
      },
      {
        id: "drawing-week-11-b",
        title: "Reservation calendar creature",
        medium: "iPad optional",
        style: "Small calendar character for booking section.",
        referenceQuery: "simple calendar mascot cartoon sketch",
        searchUrl: imageSearch("simple calendar mascot cartoon sketch"),
        steps: [
          "Zeichne Kalender als Rechteck.",
          "Setze Gesicht und kleine Arme.",
          "Markiere ein Datum mit Farbe.",
          "Optional: als Website icon nachzeichnen."
        ],
        postIdea: "Instagram caption: plugin/function idea as a tiny character."
      }
    ]
  },
  {
    id: "drawing-week-12",
    week: 12,
    title: "Event and plugin visuals",
    ausbildungLink: "Formular, Kalender, Cookie Banner, SEO und Handoff visuell erklären.",
    tasks: [
      {
        id: "drawing-week-12-a",
        title: "Cookie banner monster",
        medium: "Hand + Aquarell",
        style: "Funny original cookie notice character.",
        referenceQuery: "simple cookie monster notice cartoon sketch original",
        searchUrl: imageSearch("simple cookie monster notice cartoon sketch original"),
        steps: [
          "Zeichne ein Cookie als Kreis mit Gesicht.",
          "Setze kleines Schild: OK.",
          "Male nur Cookie und Schatten.",
          "Nicht bekannte Figuren kopieren."
        ],
        postIdea: "Instagram caption: learning web plugins through little sketches."
      },
      {
        id: "drawing-week-12-b",
        title: "Event ticket portal",
        medium: "iPad optional",
        style: "Simple sci-fi ticket illustration.",
        referenceQuery: "simple event ticket portal cartoon sketch",
        searchUrl: imageSearch("simple event ticket portal cartoon sketch"),
        steps: [
          "Zeichne Ticket als langes Rechteck.",
          "Füge Portal-Kreis und Sterne hinzu.",
          "Nutze 2 Farben für Kontrast.",
          "Optional: clean lineart on iPad."
        ],
        postIdea: "Instagram caption: tiny event website illustration."
      }
    ]
  },
  {
    id: "drawing-week-13",
    week: 13,
    title: "Animals for portfolio cases",
    ausbildungLink: "Tierfiguren, Case Study Visuals und eigene Illustrationssprache.",
    tasks: [
      {
        id: "drawing-week-13-a",
        title: "Vet alien pet",
        medium: "Hand + Aquarell",
        style: "Original pet creature, simple and cute.",
        referenceQuery: "simple alien pet cartoon watercolor sketch",
        searchUrl: imageSearch("simple alien pet cartoon watercolor sketch"),
        steps: [
          "Kombiniere Katze oder Hund mit kleinen alien Details.",
          "Nutze große Augen und kurze Beine.",
          "Setze ein kleines Herz oder Pflaster.",
          "Male locker, nicht perfekt."
        ],
        postIdea: "Instagram caption: original pet character for case study."
      },
      {
        id: "drawing-week-13-b",
        title: "Behance case icons",
        medium: "iPad optional",
        style: "Clean icon set for case study sections.",
        referenceQuery: "simple case study icons sketch problem research result",
        searchUrl: imageSearch("simple case study icons sketch problem research result"),
        steps: [
          "Zeichne 5 Icons: Problem, Research, Moodboard, Process, Result.",
          "Nutze gleiche Größe und Linienstärke.",
          "Teste, ob sie in klein lesbar bleiben.",
          "Optional: exportiere als PNG."
        ],
        postIdea: "Instagram caption: icons for my design case study."
      }
    ]
  },
  {
    id: "drawing-week-14",
    week: 14,
    title: "Portfolio self-branding",
    ausbildungLink: "Portfolio, Selbstpräsentation, persönliche Bildsprache und Bewerbung.",
    tasks: [
      {
        id: "drawing-week-14-a",
        title: "Designer desk",
        medium: "Hand + Aquarell",
        style: "Cozy sketchbook desk scene.",
        referenceQuery: "simple designer desk watercolor sketch",
        searchUrl: imageSearch("simple designer desk watercolor sketch"),
        steps: [
          "Zeichne Laptop, iPad, Stift und Kaffee von oben.",
          "Nutze einfache Rechtecke und Kreise.",
          "Male 2-3 Akzentfarben.",
          "Füge kleine Notizzettel mit Fachwörtern hinzu."
        ],
        postIdea: "Instagram caption: my learning setup."
      },
      {
        id: "drawing-week-14-b",
        title: "Tiny self avatar",
        medium: "iPad optional",
        style: "Original personal avatar, not realistic.",
        referenceQuery: "simple designer avatar cartoon sketch",
        searchUrl: imageSearch("simple designer avatar cartoon sketch"),
        steps: [
          "Zeichne Kopf und Haare sehr vereinfacht.",
          "Füge iPad oder Stift als Erkennungsmerkmal hinzu.",
          "Teste 2 Gesichtsausdrücke.",
          "Optional: LinkedIn/portfolio sticker version."
        ],
        postIdea: "Instagram caption: tiny designer avatar practice."
      }
    ]
  },
  {
    id: "drawing-week-15",
    week: 15,
    title: "Logo animation frames",
    ausbildungLink: "Grafische Elemente animieren, Storyboard und digitale Ausgabe vorbereiten.",
    tasks: [
      {
        id: "drawing-week-15-a",
        title: "3-frame logo motion",
        medium: "Hand + Aquarell",
        style: "Storyboard for a simple logo animation.",
        referenceQuery: "simple logo animation storyboard sketch",
        searchUrl: imageSearch("simple logo animation storyboard sketch"),
        steps: [
          "Zeichne 3 Kästchen: Start, Bewegung, Endlogo.",
          "Markiere Pfeile für Bewegung.",
          "Halte die Animation sehr kurz.",
          "Nutze das als Plan für After Effects oder Figma."
        ],
        postIdea: "Instagram caption: logo animation planning."
      },
      {
        id: "drawing-week-15-b",
        title: "Spark and portal motion",
        medium: "iPad optional",
        style: "Small animated accent idea.",
        referenceQuery: "simple cartoon sparkle portal animation frames",
        searchUrl: imageSearch("simple cartoon sparkle portal animation frames"),
        steps: [
          "Zeichne 4 kleine Formen: Punkt, Stern, Ring, Glanz.",
          "Ordne sie als Bewegung an.",
          "Optional: Frame-by-frame am iPad testen.",
          "Exportiere nur, wenn es leicht geht."
        ],
        postIdea: "Instagram caption: tiny motion sketch."
      }
    ]
  },
  {
    id: "drawing-week-16",
    week: 16,
    title: "Prüfung warm-up",
    ausbildungLink: "Fachgespräch, Projektmappe und schnelle visuelle Erklärungen.",
    tasks: [
      {
        id: "drawing-week-16-a",
        title: "Druckdaten explained",
        medium: "Hand + Aquarell",
        style: "Tiny visual explanation of print terms.",
        referenceQuery: "simple print marks bleed illustration sketch",
        searchUrl: imageSearch("simple print marks bleed illustration sketch"),
        steps: [
          "Zeichne ein Blatt mit Endformat und Beschnitt.",
          "Markiere Schnittmarken mit Pfeilen.",
          "Schreibe CMYK und PDF/X als kleine Labels.",
          "Nutze es als Lernbild für Fachgespräch."
        ],
        postIdea: "Instagram caption: learning print terms visually."
      },
      {
        id: "drawing-week-16-b",
        title: "Confident exam character",
        medium: "Hand + Aquarell",
        style: "Encouraging original character.",
        referenceQuery: "simple confident cartoon student sketch",
        searchUrl: imageSearch("simple confident cartoon student sketch"),
        steps: [
          "Zeichne eine Figur mit Mappe in der Hand.",
          "Setze ruhige, sichere Körperhaltung.",
          "Füge 3 kleine Symbole hinzu: Logo, Print, Web.",
          "Male leicht und positiv."
        ],
        postIdea: "Instagram caption: exam prep sketch, one small step."
      }
    ]
  }
];
