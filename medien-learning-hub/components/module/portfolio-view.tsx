"use client";

import { useCallback, useEffect, useState } from "react";
import { collection, doc, onSnapshot, serverTimestamp, setDoc } from "firebase/firestore";
import { AutosaveTextarea } from "@/components/shared/autosave-textarea";
import { Badge, CollapsibleCard, PageHeader, Panel, ProgressBar } from "@/components/shared/ui";
import { alternativeClientBriefs, modulePlans, modules, primaryClientBriefTranslations } from "@/data/modules";
import { useAuth } from "@/lib/auth";
import { getFirebaseDb } from "@/lib/firebase";
import type { LearningModule } from "@/lib/types";

const portfolioDeliverables = [
  {
    id: "moodboard",
    number: "1",
    title: "Moodboard",
    program: "Figma / Pinterest / Adobe",
    clientWishDe: "Der Kunde möchte zuerst sehen, in welche visuelle Richtung das Projekt geht.",
    clientWishUa: "Клієнт хоче спочатку побачити, в якому візуальному напрямку буде проєкт.",
    requirements: [
      "6-10 Referenzen für Stil, Farben, Fotos, Formen und Stimmung sammeln.",
      "3-5 Hauptfarben auswählen und kurz begründen.",
      "2 passende Schriftkombinationen testen.",
      "3 Wörter für die gewünschte Wirkung notieren, zum Beispiel ruhig, modern, freundlich."
    ],
    output: "Moodboard als Figma-Seite oder PDF, plus kurze Erklärung auf Deutsch und Ukrainisch."
  },
  {
    id: "logo",
    number: "2",
    title: "Logo",
    program: "Adobe Illustrator",
    clientWishDe: "Der Kunde braucht ein einfaches, gut erkennbares Logo, das seriös wirkt und in kleinen Größen funktioniert.",
    clientWishUa: "Клієнту потрібен простий, впізнаваний логотип, який виглядає професійно і працює в малому розмірі.",
    requirements: [
      "1-3 Logo-Entwürfe entwickeln.",
      "Eine finale Version sauber als Vektor aufbauen.",
      "Farbige, schwarze und weiße Version vorbereiten.",
      "Prüfen, ob das Logo auch klein lesbar bleibt."
    ],
    output: "AI-Arbeitsdatei, SVG, PDF, PNG in Farbe, Schwarz und Weiß."
  },
  {
    id: "business-card",
    number: "3",
    title: "Visitenkarte",
    program: "Adobe InDesign / Illustrator",
    clientWishDe: "Der Kunde möchte eine professionelle Visitenkarte mit Logo, Kontaktdaten und klarer Typografie.",
    clientWishUa: "Клієнт хоче професійну візитку з логотипом, контактами і чистою типографікою.",
    requirements: [
      "Vorderseite und Rückseite gestalten.",
      "Logo, Name, Beruf, Telefon, E-Mail, Website und Adresse sinnvoll platzieren.",
      "Beschnitt, Rand, CMYK und gute Lesbarkeit beachten.",
      "Schriftgrößen und Abstände sauber kontrollieren."
    ],
    output: "Druckfähiges PDF/X mit Beschnitt und eine PNG/JPG Vorschau für Portfolio."
  },
  {
    id: "flyer",
    number: "4",
    title: "Flyer A5",
    program: "Adobe InDesign / Photoshop",
    clientWishDe: "Der Kunde möchte einen A5-Flyer, der schnell informiert und optisch zur Marke passt.",
    clientWishUa: "Клієнт хоче A5-флаєр, який швидко передає інформацію і підходить до бренду.",
    requirements: [
      "Klare Überschrift, kurze Infos, Bild oder Illustration und Call-to-Action einbauen.",
      "Layout mit Raster, Weißraum, Hierarchie und Kontrast gestalten.",
      "Bilder passend bearbeiten und auf Druckqualität prüfen.",
      "Druckdaten mit Beschnitt und korrektem Farbmodus vorbereiten."
    ],
    output: "A5-Flyer als InDesign-Datei, PDF/X für Druck und Web-PNG für Portfolio."
  },
  {
    id: "website",
    number: "5",
    title: "Website",
    program: "Figma + WordPress / Elementor",
    clientWishDe: "Der Kunde möchte eine moderne Website, die übersichtlich ist und auf Handy und Desktop gut funktioniert.",
    clientWishUa: "Клієнт хоче сучасний сайт, який зрозумілий і добре працює на телефоні та комп'ютері.",
    requirements: [
      "Entscheiden, ob es eine One-Page Website oder 3-5 Seiten werden soll.",
      "Startseite in Figma gestalten: Hero, Leistungen, Über uns, Kontakt.",
      "Responsive Version für Desktop und Mobile prüfen.",
      "Optional in WordPress mit Elementor nachbauen und Formular, Cookie Banner, SEO und Backup beachten."
    ],
    output: "Figma Design, optional WordPress-Link, Screenshots für Behance und kurze Beschreibung."
  }
];

const finalPortfolioPostChecks = [
  "Alle Mockups wirken wie ein zusammenhängendes Branding.",
  "Texte sind kurz, korrekt und gut lesbar.",
  "Logo, Farben, Typografie und Layout passen zur Zielgruppe.",
  "Keine leeren oder unfertigen Screenshots zeigen.",
  "PDF oder Behance Draft ist sauber exportiert und kann zur Prüfung geschickt werden."
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
  "WordPress",
  "German",
  "English",
  "Typography",
  "Color Theory",
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
    const unsubscribe = onSnapshot(doc(getFirebaseDb(), "users", userId, "selfAssessments", "current"), (snapshot) => {
      const data = snapshot.data();
      if (data?.ratings && typeof data.ratings === "object") {
        setRatings(data.ratings as Record<string, number>);
      }
    });
    return unsubscribe;
  }, [userId]);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(getFirebaseDb(), "users", userId, "portfolio"), (snapshot) => {
      const nextNotes: Record<string, string> = {};
      snapshot.docs.forEach((item) => {
        const data = item.data();
        if (typeof data.content === "string") {
          nextNotes[item.id] = data.content;
        }
      });
      setPortfolioNotes(nextNotes);
    });
    return unsubscribe;
  }, [userId]);

  const saveRatings = useCallback(
    async (nextRatings: Record<string, number>) => {
      setRatings(nextRatings);
      await setDoc(
        doc(getFirebaseDb(), "users", userId, "selfAssessments", "current"),
        {
          id: "current",
          ratings: nextRatings,
          userId,
          updatedAt: serverTimestamp(),
          createdAt: serverTimestamp()
        },
        { merge: true }
      );
    },
    [userId]
  );

  const savePortfolioNote = useCallback(
    async (id: string, title: string, value: string) => {
      await setDoc(
        doc(getFirebaseDb(), "users", userId, "portfolio", id),
        {
          id,
          title,
          content: value,
          userId,
          updatedAt: serverTimestamp(),
          createdAt: serverTimestamp()
        },
        { merge: true }
      );
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
                    <Badge tone={item.id === "website" ? "amber" : "green"}>{item.id === "website" ? "★ optional" : `Pflicht ${item.number}`}</Badge>
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
      deliverables: module.finalDeliverables
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
      deliverables: alternative.deliverables
    });
  }

  return variants;
}

function createModulePortfolioSheetItems(module: LearningModule, variant: PortfolioVariant) {
  const lowerDeliverables = variant.deliverables.join(" ").toLowerCase();
  const lowerSoftware = module.software.join(" ").toLowerCase();
  const items = [
    `Cover / Titelbild: ${variant.title}, Kundenrichtung ${variant.industry} und ein starker Mockup oder Screenshot.`,
    `Kundenauftrag: kurz erklären, was ${variant.company} gebraucht hat und welches Problem gelöst wurde.`,
    "Moodboard / Research: Farben, Typografie, Bildsprache, Zielgruppe und 2-3 wichtige Entscheidungen zeigen.",
    `Finale Ergebnisse: ${variant.deliverables.join(", ")} klar und sauber präsentieren.`
  ];

  if (/logo|brand|identity|corporate|sticker|manual|set/.test(lowerDeliverables)) {
    items.push("Logo / Branding: finales Logo, Varianten, Farben, Typografie und Anwendung auf einem Mockup zeigen.");
  }

  if (/flyer|brochure|brosch|poster|print|pdf|card|visiten|letterhead|menu|roll-up|magazine/.test(lowerDeliverables)) {
    items.push("Print-Mockups: Visitenkarte, Flyer, Broschüre, Menü oder Plakat realistisch zeigen und Beschnitt/PDF/X kurz erwähnen.");
  }

  if (/website|page|landing|wireframe|prototype|wordpress|elementor|ui|sitemap/.test(lowerDeliverables) || /figma|wordpress|elementor|html|css/.test(lowerSoftware)) {
    items.push("Website / UI: Desktop und Mobile zeigen, Navigation kurz erklären und optional WordPress/Elementor Link ergänzen.");
  }

  if (/video|storyboard|motion|thumbnail/.test(lowerDeliverables) || /premiere|after effects/.test(lowerSoftware)) {
    items.push("Video / Motion: Storyboard, Keyframes, Thumbnail und Exportformat zeigen.");
  }

  items.push("Kurztext für Behance/LinkedIn: Problem, Zielgruppe, Lösung, Programme und Ergebnis in einfachen Sätzen.");
  items.push("PDF oder Behance Draft hochladen/verlinken und danach Feedback notieren.");

  return items;
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
