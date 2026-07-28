"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { ArrowRight, Check, Download, FileText } from "lucide-react";
import { useCallback, useEffect, useMemo, useState } from "react";
import {
  moduleOneQualityChecks,
  alternativeClientBriefs,
  coreAusbildungProjectFlow,
  coreAusbildungDeliverables,
  modulePlans,
  primaryClientBriefTranslations,
  modules
} from "@/data/modules";
import { AutosaveTextarea } from "@/components/shared/autosave-textarea";
import { Badge, CollapsibleCard, PageHeader, Panel, ProgressBar } from "@/components/shared/ui";
import { useAuth } from "@/lib/auth";
import { exportModulePdf } from "@/lib/export";
import { saveUserDocument, subscribeUserCollection } from "@/lib/firestore";
import type { ChecklistItem, CustomerBrief, LearningModule, ModuleBlock, ModuleProgressState } from "@/lib/types";

type TaskRecord = ChecklistItem & { type: "deliverable" | "quality" };

export function ModuleView() {
  const { user } = useAuth();
  const searchParams = useSearchParams();
  const userId = user?.uid ?? "";
  const selectedModuleId = searchParams.get("id") ?? "module-1";
  const selectedModule = modules.find((module) => module.id === selectedModuleId) ?? modules[0];
  const isModuleOne = selectedModule.id === "module-1";
  const selectedBrief = useMemo(() => createBrief(selectedModule), [selectedModule]);
  const selectedBlocks = useMemo(() => createBlocks(selectedModule), [selectedModule]);
  const { primaryBlocks, extraBlocks } = useMemo(
    () => splitModuleBlocks(selectedModule, selectedBlocks),
    [selectedBlocks, selectedModule]
  );
  const selectedPlan = modulePlans[selectedModule.id];
  const selectedAlternative = alternativeClientBriefs[selectedModule.id];
  const selectedPrimaryTranslation = primaryClientBriefTranslations[selectedModule.id];
  const fallbackDeliverables = coreAusbildungDeliverables;
  const fallbackQualityChecks = selectedPlan?.quality ?? (selectedModule.id === "module-1" ? moduleOneQualityChecks : createQualityChecks(selectedModule));
  const [moduleState, setModuleState] = useState<ModuleProgressState>({
    moduleId: "module-1",
    checkedTasks: {},
    blockNotes: {},
    reflection: {},
    learned: "",
    selfAssessment: {}
  });
  const [tasks, setTasks] = useState<TaskRecord[]>([]);

  useEffect(() => {
    setModuleState(createEmptyModuleState(selectedModule.id));
    setTasks([]);

    const unsubscribeModule = subscribeUserCollection<ModuleProgressState & { id?: string; progress?: number }>(
      userId,
      "modules",
      (items) => {
        const data = items.find((item) => item.id === selectedModule.id || item.moduleId === selectedModule.id);
        if (data) {
          setModuleState((current) => ({
            ...current,
            ...data,
            moduleId: selectedModule.id,
            checkedTasks: (data.checkedTasks as Record<string, boolean>) ?? {},
            blockNotes: (data.blockNotes as Record<string, string>) ?? {},
            reflection: (data.reflection as Record<string, string>) ?? {},
            selfAssessment: (data.selfAssessment as Record<string, number>) ?? {}
          }));
        }
      },
      () => undefined
    );

    const unsubscribeTasks = subscribeUserCollection<TaskRecord>(
      userId,
      moduleTaskCollection(selectedModule.id),
      setTasks,
      () => undefined
    );

    return () => {
      unsubscribeModule();
      unsubscribeTasks();
    };
  }, [selectedModule.id, userId]);

  const deliverableTasks = useMemo(
    () =>
      mergeTaskRecords(tasks.filter((task) => task.type === "deliverable"), fallbackDeliverables, "deliverable"),
    [fallbackDeliverables, tasks]
  );
  const qualityTasks = useMemo(
    () =>
      mergeTaskRecords(tasks.filter((task) => task.type === "quality"), fallbackQualityChecks, "quality"),
    [fallbackQualityChecks, tasks]
  );

  const requiredProgressTasks = useMemo(
    () => deliverableTasks.filter((task) => !isOptionalTask(task)),
    [deliverableTasks]
  );
  const checkedCount = requiredProgressTasks.filter((task) => task.done || moduleState.checkedTasks[task.id]).length;
  const totalCount = requiredProgressTasks.length;
  const progress = totalCount ? Math.round((checkedCount / totalCount) * 100) : 0;

  const saveModulePatch = useCallback(
    async (patch: Partial<ModuleProgressState>, nextProgress = progress) => {
      try {
        await saveUserDocument<Partial<ModuleProgressState> & { id: string; moduleId: string; progress: number }>(
          userId,
          "modules",
          selectedModule.id,
          {
            ...patch,
            id: selectedModule.id,
            moduleId: selectedModule.id,
            progress: nextProgress
          }
        );
      } catch {
        // A local copy is saved first, so progress survives refresh even if cloud sync fails.
      }
    },
    [progress, selectedModule.id, userId]
  );

  const saveBlockNote = useCallback(
    async (key: string, value: string) => {
      await saveModulePatch({ blockNotes: { ...moduleState.blockNotes, [key]: value } });
    },
    [moduleState.blockNotes, saveModulePatch]
  );

  const toggleTask = async (task: TaskRecord) => {
    const nextDone = !(task.done || moduleState.checkedTasks[task.id]);
    const nextCheckedTasks = {
      ...moduleState.checkedTasks,
      [task.id]: nextDone
    };
    const nextProgress = calculateProgress(deliverableTasks, nextCheckedTasks, task.id, nextDone);

    try {
      await saveUserDocument<TaskRecord & { moduleId: string; ready: boolean }>(
        userId,
        moduleTaskCollection(selectedModule.id),
        task.id,
        {
          ...task,
          done: nextDone,
          ready: nextDone,
          moduleId: selectedModule.id
        }
      );
    } catch {
      // A local copy is saved first, so progress survives refresh even if cloud sync fails.
    }

    await saveModulePatch({
      checkedTasks: nextCheckedTasks
    }, nextProgress);
  };

  return (
    <>
      <PageHeader
        eyebrow={`Module ${selectedModule.number}`}
        title={`${selectedModule.client} - ${selectedModule.field}`}
        description={selectedModule.summary}
        action={<Badge tone={progress >= 70 ? "green" : progress > 20 ? "amber" : "neutral"}>{progress}% готово</Badge>}
      />

      <div className="mb-6 grid gap-4 xl:grid-cols-[1fr_320px]">
        <Panel
          title="Kundenbrief"
          description={
            isModuleOne
              ? "Обери тільки Variante A або Variante B. Галочки під варіантом - це твій головний список на модуль."
              : "Те, що треба тримати перед очима під час дизайну."
          }
        >
          <div className="grid gap-4 lg:grid-cols-2">
            <VariantCard
              label="Variante A"
              title={selectedBrief.company}
              industry={selectedBrief.industry}
              industryUa={selectedPrimaryTranslation?.industry}
              description={selectedBrief.request}
              ukrainian={selectedPrimaryTranslation?.request}
              targetGroup={selectedBrief.targetGroup}
              targetGroupUa={selectedPrimaryTranslation?.targetGroup}
              avoid={selectedBrief.avoid}
              avoidUa={selectedPrimaryTranslation?.avoid}
              pages={selectedBrief.pages}
              pagesUa={selectedPrimaryTranslation?.pages}
              tasks={deliverableTasks}
              checkedTasks={moduleState.checkedTasks}
              onToggleTask={toggleTask}
            />
            {selectedAlternative ? (
              <VariantCard
                label="Variante B"
                title={selectedAlternative.company}
                industry={selectedAlternative.industry}
                description={`${selectedAlternative.wantsDe} ${selectedAlternative.orderDe}`}
                ukrainian={`${selectedAlternative.wantsUa} ${selectedAlternative.orderUa}`}
                tasks={deliverableTasks}
                checkedTasks={moduleState.checkedTasks}
                onToggleTask={toggleTask}
              />
            ) : null}
          </div>
        </Panel>

        <Panel title="Progress">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-neutral-500 dark:text-neutral-400">Tasks</span>
              <span className="text-sm font-semibold">{checkedCount}/{totalCount}</span>
            </div>
            <ProgressBar value={progress} />
            <p className="text-sm text-neutral-600 dark:text-neutral-300">
              {isModuleOne
                ? "Прогрес рахується по основних LAP-завданнях, включно з Animation і WordPress/Elementor Website. Додаткові тільки Plakat і Rollup."
                : "Мета: зробити LAP-пакет, який можна покласти у портфоліо."}
            </p>
            <button
              type="button"
              onClick={() => void exportModulePdf(userId, selectedModule.id)}
              className="inline-flex w-full items-center justify-center gap-2 rounded-md border border-line px-3 py-2 text-sm font-semibold text-brand-700 transition hover:bg-brand-50 dark:border-neutral-800 dark:text-brand-100 dark:hover:bg-brand-700/10"
            >
              <Download size={15} aria-hidden="true" />
              ★ Export PDF для аналізу
            </button>
          </div>
        </Panel>
      </div>

      <div className="grid gap-4">
        {isModuleOne ? (
          <CollapsibleCard title="Lernmaterial" eyebrow="теорія, слова, питання - відкривати тільки коли треба">
            <div className="grid gap-4">
              {[...primaryBlocks, ...extraBlocks].map((block) => (
                <ModuleBlockInline
                  key={block.key}
                  block={block}
                  note={moduleState.blockNotes[block.key] ?? ""}
                  onSaveNote={saveBlockNote}
                />
              ))}
              <ReflectionInline
                learned={moduleState.learned ?? ""}
                onSave={(value) => saveModulePatch({ learned: value })}
              />
            </div>
          </CollapsibleCard>
        ) : (
          <>
            {primaryBlocks.map((block, index) => (
              <ModuleBlockCard
                key={block.key}
                block={block}
                defaultOpen={index < 2}
                note={moduleState.blockNotes[block.key] ?? ""}
                onSaveNote={saveBlockNote}
              />
            ))}

            {extraBlocks.length ? (
              <CollapsibleCard title="Zusatzmaterial" eyebrow="Сховано, якщо потрібно пізніше">
                <div className="grid gap-4">
                  {extraBlocks.map((block) => (
                    <ModuleBlockInline
                      key={block.key}
                      block={block}
                      note={moduleState.blockNotes[block.key] ?? ""}
                      onSaveNote={saveBlockNote}
                    />
                  ))}
                </div>
              </CollapsibleCard>
            ) : null}

            <CollapsibleCard title="Aufgaben" eyebrow="Prüfungssimulation + ★ optional" defaultOpen>
              <TaskList tasks={deliverableTasks} checkedTasks={moduleState.checkedTasks} onToggle={toggleTask} />
            </CollapsibleCard>

            <CollapsibleCard title="Quality Check" eyebrow="Before delivery" defaultOpen>
              <TaskList tasks={qualityTasks} checkedTasks={moduleState.checkedTasks} onToggle={toggleTask} />
            </CollapsibleCard>

            <CollapsibleCard title="Was habe ich gelernt?" eyebrow="Reflection">
              <AutosaveTextarea
                label="Meine Zusammenfassung"
                initialValue={moduleState.learned ?? ""}
                placeholder="Ich habe gelernt, dass..."
                rows={6}
                onSave={(value) => saveModulePatch({ learned: value })}
              />
            </CollapsibleCard>
          </>
        )}
      </div>

      <div className="mt-6">
        <Panel title="16 Module Überblick" description="Усі модулі відкриті. Вибирай будь-який клієнтський проєкт, а прогрес зберігається окремо.">
          <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
            {modules.map((module) => (
              <Link
                key={module.id}
                href={`/module?id=${module.id}`}
                className={`rounded-md border p-3 transition hover:border-brand-300 hover:bg-brand-50 dark:hover:border-brand-700 dark:hover:bg-brand-700/10 ${
                  module.id === selectedModule.id ? "border-brand-400 bg-brand-50 dark:border-brand-700 dark:bg-brand-700/10" : "border-line dark:border-neutral-800"
                }`}
              >
                <div className="flex items-center gap-2">
                  <FileText size={15} className="text-brand-600" aria-hidden="true" />
                  <p className="text-sm font-semibold">{module.number}. {module.client}</p>
                </div>
                <p className="mt-1 text-xs text-neutral-500 dark:text-neutral-400">{module.field}</p>
                <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-brand-700 dark:text-brand-100">
                  {module.id === selectedModule.id ? "Зараз відкрито" : "Відкрити"}
                  <ArrowRight size={13} aria-hidden="true" />
                </span>
              </Link>
            ))}
          </div>
        </Panel>
      </div>
    </>
  );
}

function createEmptyModuleState(moduleId: string): ModuleProgressState {
  return {
    moduleId,
    checkedTasks: {},
    blockNotes: {},
    reflection: {},
    learned: "",
    selfAssessment: {}
  };
}

function moduleTaskCollection(moduleId: string) {
  return `modules/${moduleId}/tasks`;
}

function splitModuleBlocks(module: LearningModule, blocks: ModuleBlock[]) {
  if (module.id !== "module-1") {
    return { primaryBlocks: blocks, extraBlocks: [] };
  }

  const primaryKeys = new Set<ModuleBlock["key"]>(["theorie", "quiz", "fachwoerter", "phrases"]);
  return {
    primaryBlocks: blocks.filter((block) => primaryKeys.has(block.key)),
    extraBlocks: blocks.filter((block) => !primaryKeys.has(block.key))
  };
}

function ModuleBlockCard({
  block,
  defaultOpen = false,
  note,
  onSaveNote
}: {
  block: ModuleBlock;
  defaultOpen?: boolean;
  note: string;
  onSaveNote: (key: string, value: string) => Promise<void>;
}) {
  return (
    <CollapsibleCard title={block.title} eyebrow={block.eyebrow} defaultOpen={defaultOpen}>
      <ul className="mb-4 grid gap-2 text-sm text-neutral-700 dark:text-neutral-300">
        {block.items.map((item) => (
          <li key={item} className="flex gap-2">
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" aria-hidden="true" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <AutosaveTextarea
        label="Моя нотатка до цього блоку"
        initialValue={note}
        placeholder="Напиши свої висновки, приклади речень або що треба повторити."
        onSave={(value) => onSaveNote(block.key, value)}
      />
    </CollapsibleCard>
  );
}

function ModuleBlockInline({
  block,
  note,
  onSaveNote
}: {
  block: ModuleBlock;
  note: string;
  onSaveNote: (key: string, value: string) => Promise<void>;
}) {
  return (
    <section className="border-t border-line pt-4 first:border-t-0 first:pt-0 dark:border-neutral-800">
      <div className="mb-3">
        {block.eyebrow ? <p className="text-xs font-semibold uppercase tracking-normal text-brand-700 dark:text-brand-100">{block.eyebrow}</p> : null}
        <h3 className="mt-1 text-sm font-semibold">{block.title}</h3>
      </div>
      <ul className="mb-4 grid gap-2 text-sm text-neutral-700 dark:text-neutral-300">
        {block.items.map((item) => (
          <li key={item} className="flex gap-2">
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" aria-hidden="true" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <AutosaveTextarea
        label="Моя нотатка"
        initialValue={note}
        placeholder="Можеш записати тільки якщо це справді потрібно."
        onSave={(value) => onSaveNote(block.key, value)}
      />
    </section>
  );
}

function ReflectionInline({
  learned,
  onSave
}: {
  learned: string;
  onSave: (value: string) => Promise<void>;
}) {
  return (
    <section className="border-t border-line pt-4 dark:border-neutral-800">
      <div className="mb-3">
        <p className="text-xs font-semibold uppercase tracking-normal text-brand-700 dark:text-brand-100">Reflection</p>
        <h3 className="mt-1 text-sm font-semibold">Was habe ich gelernt?</h3>
      </div>
      <AutosaveTextarea
        label="Meine Zusammenfassung"
        initialValue={learned}
        placeholder="Ich habe gelernt, dass..."
        rows={6}
        onSave={onSave}
      />
    </section>
  );
}

function createBrief(module: LearningModule): CustomerBrief {
  const plan = modulePlans[module.id];

  if (plan) {
    return plan.brief;
  }

  const websiteScope = module.finalDeliverables.find((item) => item.toLowerCase().includes("page"));

  return {
    company: module.client,
    industry: module.field,
    targetGroup: "wird im Research-Teil definiert: Alter, Bedürfnisse, Stil und Nutzungssituation.",
    request: websiteScope
      ? `${module.summary} Der Kunde erwartet außerdem einen klaren Seitenumfang: ${websiteScope}.`
      : module.summary,
    avoid: "Unklare Gestaltung, schlechte Lesbarkeit, unpassende Farben, chaotische Dateien."
  };
}

function createBlocks(module: LearningModule): ModuleBlock[] {
  const plan = modulePlans[module.id];
  const alternative = alternativeClientBriefs[module.id];
  const primaryTranslation = primaryClientBriefTranslations[module.id];

  if (plan) {
    return [
      {
        key: "lernziele",
        title: "Ausbildung-Bezug",
        eyebrow: "Warum dieses Modul wichtig ist",
        items: plan.ausbildungFocus
      },
      {
        key: "kundenbrief",
        title: "Variante A/B",
        eyebrow: "Client choice",
        items: [
          `Variante A: ${plan.brief.company} - ${plan.brief.industry}.`,
          `Auftrag A: ${plan.brief.request}`,
          primaryTranslation ? `Переклад A: ${primaryTranslation.request}` : "Переклад A: прочитай німецький бриф і запиши коротко українською.",
          primaryTranslation ? `Цільова група A: ${primaryTranslation.targetGroup}` : `Zielgruppe A: ${plan.brief.targetGroup}`,
          alternative
            ? `Variante B: ${alternative.company} - ${alternative.industry}.`
            : "Variante B: optional später ergänzen.",
          alternative ? `Auftrag B: ${alternative.orderDe} / ${alternative.orderUa}` : "Wähle A, wenn du an deinem gestarteten Projekt weiterarbeiten möchtest."
        ]
      },
      {
        key: "theorie",
        title: "Theorie einfach",
        eyebrow: "DE + UA lernen",
        items: plan.theory
      },
      {
        key: "quiz",
        title: "Theorie-Check mit Auswahl",
        eyebrow: "Nicht frei schreiben",
        items: createTheoryChoices(module)
      },
      {
        key: "fachwoerter",
        title: "Fachwörter",
        eyebrow: "Deutsch, Ukrainisch, einfache Bedeutung",
        items: plan.fachwoerter
      },
      {
        key: "phrases",
        title: "Fachgespräch Sätze",
        eyebrow: "Kurz und prüfungstauglich",
        items: plan.fachgespraech
      },
      {
        key: "project",
        title: "Praktischer Kundenauftrag",
        eyebrow: "Portfolio + Ausbildung",
        items: coreProjectItems(module)
      },
      {
        key: "drawing",
        title: "Optional: iPad und Hand-Sketch",
        eyebrow: "★ freiwillig, aber gut für deinen Stil",
        items: plan.drawing
      },
      {
        key: "software",
        title: "Software Workflow",
        eyebrow: module.software.join(" + "),
        items: createSoftwareWorkflow(module)
      },
      {
        key: "quality",
        title: "Quality Check",
        eyebrow: "Before delivery",
        items: plan.quality
      },
      {
        key: "ausbildungsnachweis",
        title: "Lernbericht / Ausbildungsnachweis",
        eyebrow: "So sehe ich später deinen Fortschritt",
        items: [
          ...plan.report,
          "★ Optional: Nach Abschluss PDF exportieren und mir hier schicken, dann kann ich den Bericht analysieren und dir Korrekturen geben.",
          "Wenn du nichts exportierst, sehe ich deine Arbeit nicht automatisch im Chat. Die App speichert sie nur in deinem Google/Firebase-Konto."
        ]
      }
    ];
  }

  return [
    {
      key: "lernziele",
      title: "Lernziele",
      eyebrow: "Was du nach dem Modul kannst",
      items: [
        `Ein reales Kundenprojekt für ${module.client} planen und sauber umsetzen.`,
        `In ${module.software.join(", ")} arbeiten und die Dateien ordentlich vorbereiten.`,
        "Designentscheidungen einfach auf Deutsch erklären.",
        "Ein Ergebnis erstellen, das in dein Portfolio passt."
      ]
    },
    {
      key: "kundenbrief",
      title: "Kundenbrief",
      eyebrow: "Client context",
      items: [
        `Firmenname: ${module.client}.`,
        `Branche: ${module.field}.`,
        `Auftrag: ${module.summary}`,
        `Programme: ${module.software.join(", ")}.`,
        `Abgabe: ${module.finalDeliverables.join(", ")}.`
      ]
    },
    {
      key: "theorie",
      title: "Theorie",
      eyebrow: "Prüfungsrelevante Grundlagen",
      items: [
        "Ein Kundenbriefing erklärt Ziel, Zielgruppe, Stil, Budget, Zeitrahmen und technische Anforderungen.",
        "Ein Moodboard hilft, Farben, Typografie, Bildsprache und Stimmung festzulegen.",
        "Ein Gestaltungsraster sorgt für Ordnung, klare Abstände und gute Leserführung.",
        "Für Print müssen Beschnitt, CMYK, Auflösung und PDF-Export geprüft werden.",
        "Für Web müssen Struktur, Responsive Design, Barrierefreiheit und Ladezeit geprüft werden."
      ]
    },
    {
      key: "research",
      title: "Research",
      eyebrow: "Konkurrenzanalyse",
      items: [
        "3 passende Konkurrenzbeispiele sammeln.",
        "Farben, Schriften, Bildstil, Tonalität und Zielgruppe vergleichen.",
        "Notieren, was professionell wirkt und was du vermeiden möchtest.",
        `Eine klare Designrichtung für ${module.client} formulieren.`
      ]
    },
    {
      key: "moodboard",
      title: "Moodboard",
      eyebrow: "Visual direction",
      items: [
        "5-8 visuelle Referenzen sammeln.",
        "3-5 Farben definieren.",
        "2 passende Schriftkombinationen testen.",
        "In 3 einfachen deutschen Sätzen erklären, warum diese Richtung passt."
      ]
    },
    {
      key: "software",
      title: "Software Workflow",
      eyebrow: module.software.join(" + "),
      items: createSoftwareWorkflow(module)
    },
    {
      key: "project",
      title: "Praktischer Projektauftrag",
      eyebrow: "Portfolio-ready",
      items: coreProjectItems(module)
    },
    {
      key: "quality",
      title: "Quality Check",
      eyebrow: "Before delivery",
      items: createQualityChecks(module)
    },
    {
      key: "lap",
      title: "Fachgespräch",
      eyebrow: "Deutsch einfach sprechen",
      items: [
        `Ich habe dieses Projekt für ${module.client} gestaltet.`,
        `Die Zielgruppe ist wichtig, weil das Design zu den Bedürfnissen der Kundinnen und Kunden passen muss.`,
        "Ich habe Farben, Schrift und Layout bewusst gewählt.",
        "Für die Abgabe prüfe ich Dateiformate, Auflösung, Ordnung und technische Anforderungen."
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
        "Was kann ich im nächsten Projekt verbessern? - Що покращити наступного разу?"
      ]
    }
  ];
}

function createSoftwareWorkflow(module: LearningModule) {
  const items = [
    "Erstelle eine klare Ordnerstruktur: 01_Briefing, 02_Research, 03_Working, 04_Export, 05_Client.",
    "Benenne Dateien verständlich mit Kundennamen, Version und Datum.",
    "Speichere Arbeitsdateien und Exportdateien getrennt."
  ];

  if (module.software.includes("Illustrator")) {
    items.push("Illustrator: Logo, Icons oder Vektorelemente sauber mit Ebenen und Artboards aufbauen.");
  }

  if (module.software.includes("InDesign")) {
    items.push("InDesign: Raster, Satzspiegel, Absatzformate und druckfähigen PDF-Export verwenden.");
  }

  if (module.software.includes("Photoshop")) {
    items.push("Photoshop: Bilder bearbeiten, Mockups erstellen und passende Exportgrößen wählen.");
  }

  if (module.software.includes("Figma")) {
    items.push("Figma: Wireframes, UI-Komponenten, Auto Layout und einfache Prototype-Verbindungen nutzen.");
  }

  if (module.software.includes("WordPress")) {
    items.push("WordPress: Seitenstruktur, Menü, Cookie Plugin, Formular, SEO Basics und Backup prüfen.");
  }

  if (module.software.includes("Elementor")) {
    items.push("Elementor: Container, responsive Einstellungen, Templates und Kontaktformular sauber aufbauen.");
  }

  return items;
}

function coreProjectItems(module: LearningModule) {
  const websiteTool = module.software.includes("WordPress") || module.software.includes("Elementor")
    ? "Figma + WordPress/Elementor"
    : module.software.includes("Figma")
      ? "Figma"
      : "Figma als optionaler Zusatz";

  return coreAusbildungProjectFlow.map((item) =>
    item.includes("Website")
      ? `${item} Werkzeug: ${websiteTool}.`
      : item
  );
}

function createTheoryChoices(module: LearningModule) {
  const choices = [
    "Was passt zu Print? A: CMYK + Beschnitt + PDF/X. B: nur RGB + JPG. Richtige Antwort: A.",
    "Was ist ein Moodboard? A: Rechnung. B: Sammlung von Farben, Bildern, Typografie und Stil. Richtige Antwort: B.",
    "Was macht ein Raster? A: Es ordnet Elemente. B: Es ersetzt alle Bilder. Richtige Antwort: A.",
    "Was ist besser für ein Logo? A: Vektorgrafik. B: unscharfes JPG. Richtige Antwort: A.",
    "Was bedeutet Rebriefing? A: Briefing prüfen und Rückfragen klären. B: Datei löschen. Richtige Antwort: A."
  ];

  if (module.software.includes("WordPress") || module.software.includes("Elementor")) {
    choices.push("Was ist ein Plugin? A: Erweiterung für WordPress. B: Papierformat. Richtige Antwort: A.");
    choices.push("Was prüft man bei einer Website? A: Responsive Design, Formular, SEO, Datenschutz. B: nur Logo-Größe. Richtige Antwort: A.");
  }

  if (module.software.includes("InDesign")) {
    choices.push("Wofür nutzt man InDesign? A: Mehrseitige Layouts und Print-PDFs. B: Videoschnitt. Richtige Antwort: A.");
  }

  if (module.software.includes("Figma")) {
    choices.push("Wofür nutzt man einen Prototyp? A: Klickwege testen. B: Druckfarbe mischen. Richtige Antwort: A.");
  }

  return choices;
}

function createQualityChecks(module: LearningModule) {
  const checks = [
    "Briefing wurde gelesen und umgesetzt.",
    "Zielgruppe ist klar beschrieben.",
    "Farben und Schriften passen zur Branche.",
    "Layout ist lesbar und sauber ausgerichtet.",
    "Dateinamen und Ordnerstruktur sind verständlich.",
    "Abgabe-Dateien sind vollständig."
  ];

  if (module.software.includes("InDesign") || module.finalDeliverables.some((item) => item.toLowerCase().includes("pdf"))) {
    checks.push("Druckdaten sind geprüft: CMYK, Beschnitt, Auflösung und PDF-Export.");
  }

  if (module.software.includes("WordPress") || module.software.includes("Elementor")) {
    checks.push("Website ist responsive geprüft: Desktop, Tablet und Mobile.");
    checks.push("Cookie Banner, Formular, SEO Titel und Alt-Texte sind geprüft.");
  }

  if (module.software.includes("Figma")) {
    checks.push("Figma Datei ist sauber benannt und Komponenten sind ordentlich aufgebaut.");
  }

  return checks;
}

function mergeTaskRecords(existingTasks: TaskRecord[], labels: string[], type: TaskRecord["type"]) {
  const existingByLabel = new Map(existingTasks.map((task) => [task.label, task]));
  const existingById = new Map(existingTasks.map((task) => [task.id, task]));

  return labels.map((label, index) => {
    const id = type === "deliverable" ? `core-task-${index + 1}` : `${type}-${index + 1}`;
    const existingTask = existingByLabel.get(label) ?? existingById.get(id);
    return {
      id,
      label,
      type,
      done: existingTask?.done ?? false,
      ready: existingTask?.ready ?? false,
      note: existingTask?.note,
      fileId: existingTask?.fileId
    };
  });
}

function calculateProgress(tasks: TaskRecord[], checkedTasks: Record<string, boolean>, changedTaskId: string, nextDone: boolean) {
  const requiredTasks = tasks.filter((task) => !isOptionalTask(task));

  if (!requiredTasks.length) {
    return 0;
  }

  const checkedCount = requiredTasks.filter((task) => {
    if (task.id === changedTaskId) {
      return nextDone;
    }
    return task.done || checkedTasks[task.id];
  }).length;

  return Math.round((checkedCount / requiredTasks.length) * 100);
}

function isOptionalTask(task: Pick<TaskRecord, "label">) {
  return task.label.trim().startsWith("★");
}

function TaskList({
  tasks,
  checkedTasks,
  onToggle
}: {
  tasks: TaskRecord[];
  checkedTasks: Record<string, boolean>;
  onToggle: (task: TaskRecord) => Promise<void>;
}) {
  return (
    <div className="grid gap-2 md:grid-cols-2">
      {tasks.map((task) => {
        const checked = task.done || checkedTasks[task.id];
        const optional = isOptionalTask(task);
        return (
          <label key={task.id} className="flex cursor-pointer items-start gap-3 rounded-md border border-line p-3 text-sm dark:border-neutral-800">
            <input
              type="checkbox"
              checked={Boolean(checked)}
              onChange={() => void onToggle(task)}
              className="mt-1 h-4 w-4 accent-brand-600"
            />
            <span>
              <span className="flex flex-wrap items-center gap-2">
                <span className="font-medium">{task.label}</span>
                {optional ? <Badge tone="amber">freiwillig</Badge> : null}
              </span>
              {task.note ? <span className="mt-1 block text-xs text-neutral-500">{task.note}</span> : null}
            </span>
          </label>
        );
      })}
    </div>
  );
}

function VariantCard({
  label,
  title,
  industry,
  industryUa,
  description,
  ukrainian,
  targetGroup,
  targetGroupUa,
  avoid,
  avoidUa,
  pages,
  pagesUa,
  tasks,
  checkedTasks,
  onToggleTask
}: {
  label: string;
  title: string;
  industry: string;
  industryUa?: string;
  description: string;
  ukrainian?: string;
  targetGroup?: string;
  targetGroupUa?: string;
  avoid?: string;
  avoidUa?: string;
  pages?: string;
  pagesUa?: string;
  tasks?: TaskRecord[];
  checkedTasks?: Record<string, boolean>;
  onToggleTask?: (task: TaskRecord) => Promise<void>;
}) {
  return (
    <article className="rounded-md border border-line bg-neutral-50 p-4 dark:border-neutral-800 dark:bg-neutral-950">
      <Badge tone={label.includes("B") ? "blue" : "green"}>{label}</Badge>
      <h3 className="mt-3 text-base font-semibold">{title}</h3>
      <p className="mt-1 text-xs font-medium uppercase tracking-normal text-neutral-500 dark:text-neutral-400">{industry}</p>
      {industryUa ? <p className="mt-1 text-xs text-neutral-500 dark:text-neutral-400">{industryUa}</p> : null}
      <p className="mt-3 text-sm leading-6 text-neutral-700 dark:text-neutral-300">{description}</p>
      {ukrainian ? (
        <p className="mt-2 rounded-md border border-line bg-white p-3 text-sm leading-6 text-neutral-700 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-300">
          <span className="font-semibold">Українською:</span> {ukrainian}
        </p>
      ) : null}
      {tasks?.length ? (
        <div className="mt-3 rounded-md border border-line bg-white p-3 dark:border-neutral-800 dark:bg-neutral-900">
          <p className="text-xs font-semibold uppercase tracking-normal text-neutral-500 dark:text-neutral-400">Завдання для цього варіанту</p>
          <div className="mt-2 grid gap-2 text-sm text-neutral-700 dark:text-neutral-300">
            {tasks.map((task) => {
              const optional = isOptionalTask(task);
              const checked = task.done || checkedTasks?.[task.id];
              return (
                <label
                  key={task.id}
                  className={`flex cursor-pointer items-start gap-3 rounded-md border p-2.5 transition ${
                    checked
                      ? "border-brand-400 bg-brand-50 dark:border-brand-700 dark:bg-brand-700/20"
                      : "border-line hover:border-brand-300 hover:bg-neutral-50 dark:border-neutral-800 dark:hover:border-brand-700 dark:hover:bg-neutral-950"
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={Boolean(checked)}
                    onChange={() => void onToggleTask?.(task)}
                    className="mt-1 h-4 w-4 accent-brand-600"
                  />
                  <span className="flex flex-wrap items-center gap-2">
                    <span>{task.label}</span>
                    {optional ? <Badge tone="amber">freiwillig</Badge> : null}
                  </span>
                </label>
              );
            })}
          </div>
        </div>
      ) : null}
      {targetGroup ? <p className="mt-3 text-sm"><span className="font-semibold">Zielgruppe:</span> {targetGroup}</p> : null}
      {targetGroupUa ? <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400"><span className="font-semibold">Цільова група:</span> {targetGroupUa}</p> : null}
      {avoid ? <p className="mt-2 text-sm"><span className="font-semibold">Nicht verwenden:</span> {avoid}</p> : null}
      {avoidUa ? <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400"><span className="font-semibold">Не використовувати:</span> {avoidUa}</p> : null}
      {pages ? <p className="mt-2 text-sm"><span className="font-semibold">Seitenumfang:</span> {pages}</p> : null}
      {pagesUa ? <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400"><span className="font-semibold">Сторінки:</span> {pagesUa}</p> : null}
    </article>
  );
}
