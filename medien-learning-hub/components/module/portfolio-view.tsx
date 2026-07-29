"use client";

import { useCallback, useEffect, useState } from "react";
import { AutosaveTextarea } from "@/components/shared/autosave-textarea";
import { Badge, CollapsibleCard, PageHeader, Panel, ProgressBar } from "@/components/shared/ui";
import { alternativeClientBriefs, modulePlans, modules, primaryClientBriefTranslations } from "@/data/modules";
import { useAuth } from "@/lib/auth";
import { saveUserDocument, subscribeUserCollection } from "@/lib/firestore";
import type { LearningModule } from "@/lib/types";

const portfolioDeliverables = [
  {
    id: "logo-redesign",
    number: "1",
    title: "Logo Redesign",
    program: "Hand-Sketch + Adobe Illustrator",
    clientWishDe: "Der Kunde möchte ein moderneres Logo, das zur Zielgruppe passt und in Print, Web und kleinen Größen funktioniert.",
    clientWishUa: "Клієнт хоче сучасніший логотип, який підходить цільовій групі і працює для друку, вебу та малого розміру.",
    requirements: [
      "3 unterschiedliche Logo-Scribbles erstellen.",
      "Eine Richtung auswählen und kurz auf Deutsch begründen.",
      "Finales Logo in Illustrator sauber als Vektor ausarbeiten.",
      "Versionen vorbereiten: 4-färbig, einfärbig und negativ."
    ],
    output: "Skizzenfoto, AI-Datei, PDF/SVG/PNG und kurzer Begründungssatz für Fachgespräch.",
    example: "Beispiel Lune Bakery: 3 Ideen mit Mond + Croissant, Wortmarke Lune, runde Café-Embleme.",
    photoIdea: "Foto/Beispiel: ein Foto deiner Scribbles auf Papier und ein Mockup auf Coffee Cup oder Bag."
  },
  {
    id: "logo-animation",
    number: "2",
    title: "Logo-/Bildanimation",
    program: "After Effects / Premiere Pro",
    clientWishDe: "Der Kunde möchte eine kurze Logo- oder Bildanimation für Social Media, Website-Intro oder Präsentation.",
    clientWishUa: "Клієнт хоче коротку анімацію логотипу або картинки для соцмереж, сайту чи презентації.",
    requirements: [
      "Logo oder Key Visual in einzelne Ebenen vorbereiten.",
      "3-5 einfache Keyframes planen: Auftauchen, Skalierung, Rotation, Mask Reveal oder Fade.",
      "Animation ruhig halten, 5-8 Sekunden.",
      "Export als MP4 oder GIF testen."
    ],
    output: "Kurzes MP4/GIF, 2-3 Screenshots der Keyframes und ein Satz, warum die Bewegung zur Marke passt.",
    example: "Beispiel Lune Bakery: Der Mond erscheint langsam, danach blendet die Wortmarke weich ein.",
    photoIdea: "Foto/Beispiel: 3 Screenshots aus der Timeline: Start, Mitte, Ende."
  },
  {
    id: "styleguide",
    number: "3",
    title: "Styleguide",
    program: "Adobe InDesign / Figma",
    clientWishDe: "Der Kunde braucht kurze Regeln, damit Logo, Farben, Schriften und Bildsprache später einheitlich verwendet werden.",
    clientWishUa: "Клієнту потрібні короткі правила, щоб логотип, кольори, шрифти і фото-стиль використовувались однаково.",
    requirements: [
      "1-3 Seiten erstellen.",
      "Logo-Versionen zeigen: farbig, einfärbig, negativ.",
      "Farbwerte notieren: CMYK/RGB/HEX.",
      "Schriften, Bildsprache und einfache Anwendungsregeln zeigen."
    ],
    output: "Styleguide als PDF und 1 Screenshot für Behance/LinkedIn.",
    example: "Beispiel Lune Bakery: warme Cremefarbe, dunkles Braun, Serifenschrift für elegant, Sans Serif für Infos.",
    photoIdea: "Foto/Beispiel: Screenshot von einer Styleguide-Seite mit Logo, Farben und Fonts."
  },
  {
    id: "moodboard",
    number: "4",
    title: "Moodboard",
    program: "Figma / InDesign / Pinterest",
    clientWishDe: "Der Kunde möchte vor der Umsetzung die visuelle Richtung sehen: Logo, Farbgebung und Bildsprache.",
    clientWishUa: "Клієнт хоче перед роботою побачити візуальний напрям: логотип, кольори і стиль зображень.",
    requirements: [
      "DIN A3 quer anlegen.",
      "Logo, Farbgebung und Bildsprache zeigen.",
      "5-8 Referenzen sammeln.",
      "3-5 Wörter zur Wirkung notieren, zum Beispiel frisch, hochwertig, ruhig."
    ],
    output: "Moodboard als PDF/JPG, plus kurze Erklärung auf Deutsch und Ukrainisch.",
    example: "Beispiel Lune Bakery: Fotos von Croissants, Kaffee, französischem Café, warmer Verpackung und ruhiger Typografie.",
    photoIdea: "Foto/Beispiel: ein A3-Board mit 6-8 Bildern, 3 Farben und 2 Schriften."
  },
  {
    id: "inserat",
    number: "5",
    title: "Inserat",
    program: "Adobe InDesign / Photoshop",
    clientWishDe: "Der Kunde braucht ein kleines Inserat für eine Anzeige, das druckfertig an die Druckerei gehen kann.",
    clientWishUa: "Клієнту потрібне маленьке оголошення для друку, яке можна віддати в друкарню.",
    requirements: [
      "Format 98 x 135 mm anlegen.",
      "4c / CMYK verwenden.",
      "PDF/X-4 exportieren.",
      "FOGRA 51, Kunstdruckpapier matt und alle erforderlichen Druckmarken beachten."
    ],
    output: "InDesign-Datei, druckfertiges PDF/X-4 und Web-Vorschau für Portfolio.",
    example: "Beispiel Lune Bakery: Inserat für 'Weekend Croissant Box' mit Logo, Produktfoto, Preis und Call-to-Action.",
    photoIdea: "Foto/Beispiel: Mockup als kleine Magazin-Anzeige oder Screenshot vom PDF mit Druckmarken."
  },
  {
    id: "folder",
    number: "6",
    title: "Wickelfalz-Folder",
    program: "Adobe InDesign",
    clientWishDe: "Der Kunde möchte einen 6-seitigen Folder, der das Angebot klar erklärt und professionell gedruckt werden kann.",
    clientWishUa: "Клієнт хоче 6-сторінковий folded flyer, який зрозуміло пояснює пропозицію і готовий до друку.",
    requirements: [
      "Wickelfalz mit 6 Seiten erstellen.",
      "Offenes Format: A4 quer.",
      "4/4c, also beidseitig farbig.",
      "3 mm abfallend und alle Schnittmarken prüfen."
    ],
    output: "Druck-PDF, Screen-PDF und Mockup des gefalteten Folders.",
    example: "Beispiel Lune Bakery: Folder mit Sortiment, Geschichte, Bestellinfo, Karte und Kontakt.",
    photoIdea: "Foto/Beispiel: Mockup eines gefalteten Flyers oder Screenshot der 6 Seiten nebeneinander."
  },
  {
    id: "instagram",
    number: "7",
    title: "Instagram Post",
    program: "Photoshop / Illustrator / Figma",
    clientWishDe: "Der Kunde möchte einen Social-Media-Post, der die Kampagne wiedererkennbar macht.",
    clientWishUa: "Клієнт хоче пост для соцмереж, який повторює стиль кампанії.",
    requirements: [
      "Standardgröße für Instagram erstellen.",
      "Logo, Farbe, Typografie und Bildsprache aus dem Styleguide nutzen.",
      "Kurze Headline und Call-to-Action schreiben.",
      "Export als PNG/JPG."
    ],
    output: "Instagram Post als PNG/JPG und Mockup im Feed.",
    example: "Beispiel Lune Bakery: Post 'Neu: Pistazien-Croissant am Samstag' mit Produktfoto und Logo.",
    photoIdea: "Foto/Beispiel: Feed-Mockup oder Handy-Screenshot mit dem fertigen Post."
  },
  {
    id: "presentation",
    number: "8",
    title: "Präsentation",
    program: "PowerPoint / PDF / Figma",
    clientWishDe: "Der Kunde und die Prüfungskommission sollen den Prozess und die Entscheidungen schnell verstehen.",
    clientWishUa: "Клієнт і комісія мають швидко зрозуміти процес і твої рішення.",
    requirements: [
      "Aufgabe, Zielgruppe und Konzept zeigen.",
      "Moodboard, Logo, Styleguide, Printprodukte und Social Post präsentieren.",
      "2-4 Prüfungssätze auf Deutsch vorbereiten."
    ],
    output: "Präsentation als PowerPoint oder PDF.",
    example: "Beispiel Lune Bakery: 5 Slides: Auftrag, Moodboard, Logo, Printprodukte, Website.",
    photoIdea: "Foto/Beispiel: Screenshot der Titelfolie und einer Ergebnisfolie."
  },
  {
    id: "website",
    number: "9",
    title: "Website in WordPress",
    program: "Figma + WordPress / Elementor",
    clientWishDe: "Der Kunde möchte eine Website, die zur Kampagne passt und in WordPress mit Elementor umgesetzt werden kann.",
    clientWishUa: "Клієнт хоче сайт, який підходить до кампанії і може бути створений у WordPress через Elementor.",
    requirements: [
      "Entscheiden: One-Page oder 3-5 Seiten.",
      "Figma Design erstellen: Hero, Angebot, Über uns, Kontakt.",
      "Startseite oder One-Page-Version in WordPress mit Elementor nachbauen.",
      "Responsive Version für Desktop und Mobile prüfen.",
      "Formular, Cookie Banner, SEO Basics und Backup dokumentieren."
    ],
    output: "Figma Design, WordPress/Elementor Link oder Screenshots, Plugin-Notizen und kurze Beschreibung.",
    example: "Beispiel Lune Bakery: One-Page mit Hero, Angebot, Galerie, Über uns und Kontaktformular.",
    photoIdea: "Foto/Beispiel: Desktop- und Mobile-Screenshot der fertigen Elementor-Seite."
  },
  {
    id: "extras",
    number: "10",
    title: "★ Extras",
    program: "InDesign / Photoshop",
    clientWishDe: "Wenn noch Zeit bleibt, möchte der Kunde ein großes Plakat oder ein Rollup als zusätzliche Werbefläche.",
    clientWishUa: "Якщо залишиться час, клієнт хоче великий плакат або rollup як додаткову рекламу.",
    requirements: [
      "16-Bogen-Plakat oder Rollup auswählen.",
      "Key Visual und Logo groß einsetzen.",
      "Lesbarkeit aus Distanz prüfen.",
      "Druckdaten nur vorbereiten, wenn genug Zeit bleibt."
    ],
    output: "Optionales Mockup für Portfolio.",
    example: "Beispiel Lune Bakery: Rollup vor dem Café mit Logo, Croissant-Foto und kurzer Botschaft.",
    photoIdea: "Foto/Beispiel: Rollup- oder Plakat-Mockup."
  }
];

const finalPortfolioPostChecks = [
  "Der Portfolio-Post zeigt die komplette LAP-Simulation, nicht nur einzelne schöne Bilder.",
  "Logo, Styleguide, Moodboard, Inserat, Folder und Instagram Post wirken wie eine Kampagne.",
  "Printdaten werden kurz erwähnt: CMYK/4c, PDF/X-4, Beschnitt, Schnittmarken, FOGRA 51.",
  "Logo-/Bildanimation und WordPress-Website sind als eigene Projektergebnisse sichtbar.",
  "PDF oder Behance Draft ist sauber exportiert und kann zur Prüfung oder Kontrolle geschickt werden."
];

const lapSimulationDeliverables = [
  "Logo Redesign",
  "Logo-/Bildanimation",
  "Styleguide",
  "Moodboard A3",
  "Inserat",
  "Wickelfalz-Folder",
  "Instagram Post",
  "Präsentation",
  "WordPress Website",
  "★ Plakat / Rollup"
];

const caseSteps = [
  "Problem",
  "Research",
  "Moodboard",
  "Sketches",
  "Design Process",
  "Final Result",
  "Mockups"
];

const skills = [
  "Illustrator",
  "Photoshop",
  "InDesign",
  "After Effects",
  "Print Production",
  "WordPress",
  "Figma",
  "German",
  "English",
  "Typography",
  "Presentation",
  "Client Communication",
  "Portfolio",
  "Time Management"
];

type PortfolioVariant = {
  id: "a" | "b";
  label: "Variante A" | "Variante B";
  company: string;
  industry: string;
  title: string;
  descriptionDe: string;
  descriptionUa?: string;
  deliverables: string[];
};

export function PortfolioView() {
  const { user } = useAuth();
  const userId = user?.uid ?? "";
  const [ratings, setRatings] = useState<Record<string, number>>({});
  const [portfolioNotes, setPortfolioNotes] = useState<Record<string, string>>({});

  useEffect(() => {
    const unsubscribe = subscribeUserCollection<{ id: string; ratings?: Record<string, number> }>(
      userId,
      "selfAssessments",
      (items) => {
        const data = items.find((item) => item.id === "current");
        if (data?.ratings && typeof data.ratings === "object") {
          setRatings(data.ratings as Record<string, number>);
        }
      },
      () => undefined
    );
    return unsubscribe;
  }, [userId]);

  useEffect(() => {
    const unsubscribe = subscribeUserCollection<{ id: string; content?: string }>(
      userId,
      "portfolio",
      (items) => {
        const nextNotes: Record<string, string> = {};
        items.forEach((item) => {
          if (typeof item.content === "string") {
            nextNotes[item.id] = item.content;
          }
        });
        setPortfolioNotes(nextNotes);
      },
      () => undefined
    );
    return unsubscribe;
  }, [userId]);

  const saveRatings = useCallback(
    async (nextRatings: Record<string, number>) => {
      setRatings(nextRatings);
      try {
        await saveUserDocument(userId, "selfAssessments", "current", {
          id: "current",
          ratings: nextRatings
        });
      } catch {
        // A local copy is saved first, so ratings survive refresh even if cloud sync fails.
      }
    },
    [userId]
  );

  const savePortfolioNote = useCallback(
    async (id: string, title: string, value: string) => {
      try {
        await saveUserDocument(userId, "portfolio", id, {
          id,
          title,
          content: value
        });
      } catch {
        // A local copy is saved first, so notes survive refresh even if cloud sync fails.
      }
    },
    [userId]
  );

  const average = Object.values(ratings).length
    ? Math.round((Object.values(ratings).reduce((sum, value) => sum + value, 0) / Object.values(ratings).length) * 20)
    : 0;

  return (
    <>
      <PageHeader
        eyebrow="Portfolio"
        title="Behance + LinkedIn Portfolio"
        description="Тут ти фіксуєш структуру кейсу, оцінюєш навички і поступово збираєш матеріал для Junior Graphic Designer / Medienfachfrau."
        action={<Badge tone="green">{average}% skill confidence</Badge>}
      />

      <section className="mb-6">
        <div className="mb-4">
          <h2 className="text-base font-semibold tracking-normal">Portfolio pro Modul</h2>
          <p className="mt-1 max-w-3xl text-sm leading-6 text-neutral-500 dark:text-neutral-400">
            Для кожного модуля збирай окремий portfolio-лист або Behance Draft: готові роботи, мокапи, короткий опис і посилання на файл для перевірки.
          </p>
        </div>
        <div className="grid gap-4">
          {modules.map((module) => (
            <ModulePortfolioCard
              key={module.id}
              module={module}
              portfolioNotes={portfolioNotes}
              onSaveNote={savePortfolioNote}
            />
          ))}
        </div>
      </section>

      <div className="grid gap-6 xl:grid-cols-[1fr_420px]">
        <Panel
          title="Kundenauftrag für Portfolio"
          description="Кожен пункт описаний як реальне побажання клієнта. Обери клієнта з модуля і зроби ці продукти для одного бренду."
        >
          <div className="grid gap-4">
            {portfolioDeliverables.map((item) => (
              <article key={item.id} className="rounded-md border border-line bg-neutral-50 p-4 dark:border-neutral-800 dark:bg-neutral-950">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <Badge tone={item.title.startsWith("★") ? "amber" : "green"}>{item.title.startsWith("★") ? "★ optional" : `Pflicht ${item.number}`}</Badge>
                    <h2 className="mt-3 text-base font-semibold">{item.number}. {item.title}</h2>
                    <p className="mt-1 text-xs font-medium uppercase tracking-normal text-neutral-500 dark:text-neutral-400">{item.program}</p>
                  </div>
                </div>

                <div className="mt-4 rounded-md border border-line bg-white p-3 dark:border-neutral-800 dark:bg-neutral-900">
                  <p className="text-xs font-semibold uppercase tracking-normal text-brand-700 dark:text-brand-100">Kundenwunsch</p>
                  <p className="mt-2 text-sm leading-6 text-neutral-700 dark:text-neutral-300">{item.clientWishDe}</p>
                  <p className="mt-2 text-sm leading-6 text-neutral-600 dark:text-neutral-400">
                    <span className="font-semibold">Українською:</span> {item.clientWishUa}
                  </p>
                </div>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  <div>
                    <p className="text-sm font-semibold">Was muss gemacht werden?</p>
                    <ul className="mt-2 grid gap-2 text-sm leading-6 text-neutral-700 dark:text-neutral-300">
                      {item.requirements.map((requirement) => (
                        <li key={requirement} className="flex gap-2">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-600" aria-hidden="true" />
                          <span>{requirement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-sm font-semibold">Abgabe / Ergebnis</p>
                    <p className="mt-2 text-sm leading-6 text-neutral-700 dark:text-neutral-300">{item.output}</p>
                    <div className="mt-3 rounded-md border border-line bg-white p-3 dark:border-neutral-800 dark:bg-neutral-900">
                      <p className="text-xs font-semibold uppercase tracking-normal text-brand-700 dark:text-brand-100">Einfaches Beispiel</p>
                      <p className="mt-2 text-sm leading-6 text-neutral-700 dark:text-neutral-300">{item.example}</p>
                      <p className="mt-2 text-sm leading-6 text-neutral-600 dark:text-neutral-400">
                        <span className="font-semibold">Foto/Beispiel:</span> {item.photoIdea}
                      </p>
                    </div>
                  </div>
                </div>

                <AutosaveTextarea
                  label="Meine Datei / Link / Notiz"
                  initialValue={portfolioNotes[item.id] ?? ""}
                  rows={3}
                  placeholder="Наприклад: файл у Figma, назва PDF, що вже зроблено або що треба допрацювати."
                  onSave={(value) => savePortfolioNote(item.id, item.title, value)}
                />
              </article>
            ))}
          </div>
        </Panel>

        <Panel title="Self-Assessment" description="Оцінюй чесно від 1 до 5, щоб бачити розвиток.">
          <div className="space-y-4">
            {skills.map((skill) => {
              const value = ratings[skill] ?? 1;
              return (
                <div key={skill}>
                  <div className="mb-2 flex items-center justify-between gap-3">
                    <span className="text-sm font-medium">{skill}</span>
                    <Badge>{value}/5</Badge>
                  </div>
                  <input
                    type="range"
                    min={1}
                    max={5}
                    value={value}
                    onChange={(event) => void saveRatings({ ...ratings, [skill]: Number(event.target.value) })}
                    className="w-full accent-brand-600"
                  />
                </div>
              );
            })}
            <ProgressBar value={average} />
          </div>
        </Panel>
      </div>

      <div className="mt-6">
        <CollapsibleCard title="Behance Case Study" eyebrow="структура для оформлення готового проєкту">
          <div className="grid gap-3 md:grid-cols-2">
            {caseSteps.map((step) => (
              <div key={step} className="rounded-md border border-line p-4 dark:border-neutral-800">
                <p className="font-semibold">{step}</p>
                <p className="mt-2 text-sm text-neutral-500 dark:text-neutral-400">{caseStepDescription(step)}</p>
              </div>
            ))}
          </div>
        </CollapsibleCard>
      </div>
    </>
  );
}

function ModulePortfolioCard({
  module,
  portfolioNotes,
  onSaveNote
}: {
  module: LearningModule;
  portfolioNotes: Record<string, string>;
  onSaveNote: (id: string, title: string, value: string) => Promise<void>;
}) {
  const variants = createPortfolioVariants(module);

  return (
    <CollapsibleCard
      title={`${module.number}. ${module.client}`}
      eyebrow={`Variante A / B · ${module.field} · ${module.software.join(" + ")}`}
      defaultOpen={module.number === 1}
    >
      <div className="grid gap-4">
        {variants.map((variant) => (
          <PortfolioVariantCard
            key={variant.id}
            module={module}
            variant={variant}
            portfolioNotes={portfolioNotes}
            onSaveNote={onSaveNote}
          />
        ))}
      </div>
    </CollapsibleCard>
  );
}

function PortfolioVariantCard({
  module,
  variant,
  portfolioNotes,
  onSaveNote
}: {
  module: LearningModule;
  variant: PortfolioVariant;
  portfolioNotes: Record<string, string>;
  onSaveNote: (id: string, title: string, value: string) => Promise<void>;
}) {
  const linkId = `${module.id}-${variant.id}-portfolio-link`;
  const feedbackId = `${module.id}-${variant.id}-portfolio-feedback`;
  const sheetItems = createModulePortfolioSheetItems(module, variant);

  return (
    <article className="rounded-md border border-line bg-neutral-50 p-4 dark:border-neutral-800 dark:bg-neutral-950">
      <div className="mb-4 rounded-md border border-line bg-white p-4 dark:border-neutral-800 dark:bg-neutral-900">
        <Badge tone={variant.id === "a" ? "green" : "blue"}>{variant.label}</Badge>
        <p className="mt-3 text-sm font-semibold">{variant.company}</p>
        <p className="mt-1 text-xs font-medium uppercase tracking-normal text-neutral-500 dark:text-neutral-400">{variant.industry}</p>
        <p className="mt-3 text-sm leading-6 text-neutral-700 dark:text-neutral-300">{variant.descriptionDe}</p>
        {variant.descriptionUa ? (
          <p className="mt-2 text-sm leading-6 text-neutral-600 dark:text-neutral-400">
            <span className="font-semibold">Українською:</span> {variant.descriptionUa}
          </p>
        ) : null}
        <div className="mt-3 flex flex-wrap gap-2">
          {variant.deliverables.map((item) => (
            <Badge key={item} tone="blue">{item}</Badge>
          ))}
        </div>
      </div>

      <div className="grid gap-5 xl:grid-cols-[1fr_340px]">
        <div>
          <p className="text-sm font-semibold">Was soll im fertigen Portfolio-Blatt sein?</p>
          <ol className="mt-3 grid gap-2 text-sm leading-6 text-neutral-700 dark:text-neutral-300">
            {sheetItems.map((item, index) => (
              <li key={item} className="grid grid-cols-[28px_1fr] gap-2 rounded-md border border-line bg-neutral-50 p-3 dark:border-neutral-800 dark:bg-neutral-950">
                <span className="flex h-7 w-7 items-center justify-center rounded-md bg-brand-600 text-xs font-semibold text-white">{index + 1}</span>
                <span>{item}</span>
              </li>
            ))}
          </ol>
        </div>

        <div className="space-y-4">
          <div className="rounded-md border border-line bg-neutral-50 p-4 dark:border-neutral-800 dark:bg-neutral-950">
            <p className="text-sm font-semibold">Ready for post?</p>
            <ul className="mt-3 grid gap-2 text-sm leading-6 text-neutral-700 dark:text-neutral-300">
              {finalPortfolioPostChecks.map((check) => (
                <li key={check} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-600" aria-hidden="true" />
                  <span>{check}</span>
                </li>
              ))}
            </ul>
          </div>

          <AutosaveTextarea
            label="PDF / Figma / Behance / Google Drive Link"
            initialValue={portfolioNotes[linkId] ?? ""}
            rows={3}
            placeholder="Встав сюди посилання на готовий документ або напиши назву файлу."
            onSave={(value) => onSaveNote(linkId, `${module.client} ${variant.label} Portfolio Link`, value)}
          />

          <AutosaveTextarea
            label="Feedback nach Prüfung"
            initialValue={portfolioNotes[feedbackId] ?? ""}
            rows={4}
            placeholder="Після перевірки запиши: готово для посту / що ще виправити."
            onSave={(value) => onSaveNote(feedbackId, `${module.client} ${variant.label} Portfolio Feedback`, value)}
          />
        </div>
      </div>
    </article>
  );
}

function createPortfolioVariants(module: LearningModule): PortfolioVariant[] {
  const primaryBrief = modulePlans[module.id]?.brief;
  const primaryTranslation = primaryClientBriefTranslations[module.id];
  const alternative = alternativeClientBriefs[module.id];
  const variants: PortfolioVariant[] = [
    {
      id: "a",
      label: "Variante A",
      company: primaryBrief?.company ?? module.client,
      industry: primaryBrief?.industry ?? module.field,
      title: module.title,
      descriptionDe: primaryBrief?.request ?? module.summary,
      descriptionUa: primaryTranslation?.request,
      deliverables: lapSimulationDeliverables
    }
  ];

  if (alternative) {
    variants.push({
      id: "b",
      label: "Variante B",
      company: alternative.company,
      industry: alternative.industry,
      title: `${module.number}. ${alternative.company}`,
      descriptionDe: `${alternative.wantsDe} ${alternative.orderDe}`,
      descriptionUa: `${alternative.wantsUa} ${alternative.orderUa}`,
      deliverables: lapSimulationDeliverables
    });
  }

  return variants;
}

function createModulePortfolioSheetItems(module: LearningModule, variant: PortfolioVariant) {
  return [
    `Cover / Titelbild: ${variant.company} / ${variant.industry} mit starkem Mockup und kurzer Projektüberschrift.`,
    `Kundenauftrag: kurz erklären, was ${variant.company} braucht und welche Zielgruppe angesprochen wird.`,
    `Software: ${module.software.join(", ")} und die wichtigsten Arbeitsschritte kurz nennen.`,
    "Moodboard DIN A3 quer: Logo, Farbgebung, Bildsprache und 3-5 Wirkungswörter zeigen.",
    "Logo Redesign: 3 Scribbles, finale Entscheidung, Begründung und Illustrator-Ausarbeitung zeigen.",
    "Logo Set: 4-färbig, einfärbig und negativ auf einem sauberen Mockup präsentieren.",
    "Logo-/Bildanimation: 2-3 Keyframes oder kurzes MP4/GIF zeigen und die Bewegung kurz begründen.",
    "Styleguide 1-3 Seiten: Logo-Regeln, Farben, Schriften und Bildsprache zeigen.",
    "Inserat: 98 x 135 mm, 4c, PDF/X-4, FOGRA 51 und Druckmarken kurz sichtbar machen.",
    "Wickelfalz-Folder: 6 Seiten, offen A4 quer, 4/4c, 3 mm Beschnitt und Schnittmarken erwähnen.",
    "Instagram Post: finalen Post und Feed-Mockup zeigen.",
    "Präsentation: 3-6 Slides oder PDF-Seiten zeigen: Aufgabe, Prozess, Ergebnis, Fachbegriffe.",
    "Website: Figma Desktop/Mobile und WordPress/Elementor Umsetzung mit Formular, Cookie Banner, SEO und Backup-Notizen zeigen.",
    "★ Extra: optional 16-Bogen-Plakat oder Rollup als Mockup zeigen.",
    "Kurztext für Behance/LinkedIn: Problem, Zielgruppe, Lösung, Programme und Ergebnis in einfachen Sätzen.",
    "PDF oder Behance Draft hochladen/verlinken und danach Feedback notieren."
  ];
}

function caseStepDescription(step: string) {
  const descriptions: Record<string, string> = {
    Problem: "Яке завдання мав клієнт і чому йому потрібен дизайн.",
    Research: "Кого ти аналізувала: цільова група, конкуренти, стиль.",
    Moodboard: "Які кольори, шрифти, фото і настрій ти обрала.",
    Sketches: "Перші ідеї, варіанти логотипа або композиції.",
    "Design Process": "Як ти прийшла від ідеї до фінального дизайну.",
    "Final Result": "Фінальні макети: logo, visit card, flyer, website.",
    Mockups: "Як дизайн виглядає у реальному використанні."
  };

  return descriptions[step] ?? "";
}
