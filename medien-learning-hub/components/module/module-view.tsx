"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { ArrowRight, Check, Download, FileText } from "lucide-react";
import { useCallback, useEffect, useMemo, useState } from "react";
import { collection, doc, onSnapshot, serverTimestamp, setDoc } from "firebase/firestore";
import {
  moduleOneDeliverables,
  moduleOneQualityChecks,
  alternativeClientBriefs,
  coreAusbildungProjectFlow,
  coreAusbildungDeliverables,
  modulePlans,
  modules
} from "@/data/modules";
import { AutosaveTextarea } from "@/components/shared/autosave-textarea";
import { Badge, CollapsibleCard, PageHeader, Panel, ProgressBar } from "@/components/shared/ui";
import { useAuth } from "@/lib/auth";
import { exportModulePdf } from "@/lib/export";
import { getFirebaseDb } from "@/lib/firebase";
import type { ChecklistItem, CustomerBrief, LearningModule, ModuleBlock, ModuleProgressState } from "@/lib/types";

type TaskRecord = ChecklistItem & { type: "deliverable" | "quality" };

export function ModuleView() {
  const { user } = useAuth();
  const searchParams = useSearchParams();
  const userId = user?.uid ?? "";
  const selectedModuleId = searchParams.get("id") ?? "module-1";
  const selectedModule = modules.find((module) => module.id === selectedModuleId) ?? modules[0];
  const selectedBrief = useMemo(() => createBrief(selectedModule), [selectedModule]);
  const selectedBlocks = useMemo(() => createBlocks(selectedModule), [selectedModule]);
  const selectedPlan = modulePlans[selectedModule.id];
  const selectedAlternative = alternativeClientBriefs[selectedModule.id];
  const fallbackDeliverables = uniqueTasks([
    ...(selectedPlan?.deliverables ?? (selectedModule.id === "module-1" ? moduleOneDeliverables : selectedModule.finalDeliverables)),
    ...coreAusbildungDeliverables
  ]);
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
    const db = getFirebaseDb();
    setModuleState(createEmptyModuleState(selectedModule.id));
    setTasks([]);

    const unsubscribeModule = onSnapshot(doc(db, "users", userId, "modules", selectedModule.id), (snapshot) => {
      const data = snapshot.data();
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
    });

    const unsubscribeTasks = onSnapshot(collection(db, "users", userId, "modules", selectedModule.id, "tasks"), (snapshot) => {
      setTasks(snapshot.docs.map((item) => ({ id: item.id, ...item.data() }) as TaskRecord));
    });

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

  const checkedCount = [...deliverableTasks, ...qualityTasks].filter((task) => task.done || moduleState.checkedTasks[task.id]).length;
  const totalCount = deliverableTasks.length + qualityTasks.length;
  const progress = totalCount ? Math.round((checkedCount / totalCount) * 100) : 0;

  const saveModulePatch = useCallback(
    async (patch: Partial<ModuleProgressState>, nextProgress = progress) => {
      await setDoc(
        doc(getFirebaseDb(), "users", userId, "modules", selectedModule.id),
        {
          ...patch,
          moduleId: selectedModule.id,
          userId,
          progress: nextProgress,
          updatedAt: serverTimestamp()
        },
        { merge: true }
      );
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
    const nextProgress = calculateProgress([...deliverableTasks, ...qualityTasks], nextCheckedTasks, task.id, nextDone);

    await setDoc(
      doc(getFirebaseDb(), "users", userId, "modules", selectedModule.id, "tasks", task.id),
      {
        ...task,
        done: nextDone,
        ready: nextDone,
        moduleId: selectedModule.id,
        userId,
        updatedAt: serverTimestamp(),
        createdAt: serverTimestamp()
      },
      { merge: true }
    );

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
        <Panel title="Kundenbrief" description="Те, що треба тримати перед очима під час дизайну.">
          <div className="grid gap-4 lg:grid-cols-2">
            <VariantCard
              label="Variante A"
              title={selectedBrief.company}
              industry={selectedBrief.industry}
              description={selectedBrief.request}
              targetGroup={selectedBrief.targetGroup}
              avoid={selectedBrief.avoid}
            />
            {selectedAlternative ? (
              <VariantCard
                label="Variante B"
                title={selectedAlternative.company}
                industry={selectedAlternative.industry}
                description={`${selectedAlternative.wantsDe} ${selectedAlternative.orderDe}`}
                ukrainian={`${selectedAlternative.wantsUa} ${selectedAlternative.orderUa}`}
                deliverables={selectedAlternative.deliverables}
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
            <p className="text-sm text-neutral-600 dark:text-neutral-300">Мета: зробити результат, який можна покласти у портфоліо.</p>
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
        {selectedBlocks.map((block, index) => (
          <CollapsibleCard key={block.key} title={block.title} eyebrow={block.eyebrow} defaultOpen={index < 3}>
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
              initialValue={moduleState.blockNotes[block.key] ?? ""}
              placeholder="Напиши свої висновки, приклади речень або що треба повторити."
              onSave={(value) => saveBlockNote(block.key, value)}
            />
          </CollapsibleCard>
        ))}

        <CollapsibleCard title="Deliverables" eyebrow="Client package" defaultOpen>
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
        items: [...coreProjectItems(module), ...plan.practice]
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
      items: module.finalDeliverables.map((deliverable) => `Erstelle: ${deliverable}.`)
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
  const animationTool = module.software.includes("After Effects") ? "After Effects" : "After Effects, Photoshop oder Figma Smart Animate";
  return coreAusbildungProjectFlow.map((item) =>
    item.startsWith("Logo-Animation")
      ? `${item} Werkzeug: ${animationTool}.`
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
    const id = `${type}-${index + 1}`;
    return existingByLabel.get(label) ?? existingById.get(id) ?? {
      id,
      label,
      type,
      done: false
    };
  });
}

function uniqueTasks(tasks: string[]) {
  return Array.from(new Set(tasks));
}

function calculateProgress(tasks: TaskRecord[], checkedTasks: Record<string, boolean>, changedTaskId: string, nextDone: boolean) {
  if (!tasks.length) {
    return 0;
  }

  const checkedCount = tasks.filter((task) => {
    if (task.id === changedTaskId) {
      return nextDone;
    }
    return task.done || checkedTasks[task.id];
  }).length;

  return Math.round((checkedCount / tasks.length) * 100);
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
        return (
          <label key={task.id} className="flex cursor-pointer items-start gap-3 rounded-md border border-line p-3 text-sm dark:border-neutral-800">
            <input
              type="checkbox"
              checked={Boolean(checked)}
              onChange={() => void onToggle(task)}
              className="mt-1 h-4 w-4 accent-brand-600"
            />
            <span>
              <span className="font-medium">{task.label}</span>
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
  description,
  ukrainian,
  targetGroup,
  avoid,
  deliverables
}: {
  label: string;
  title: string;
  industry: string;
  description: string;
  ukrainian?: string;
  targetGroup?: string;
  avoid?: string;
  deliverables?: string[];
}) {
  return (
    <article className="rounded-md border border-line bg-neutral-50 p-4 dark:border-neutral-800 dark:bg-neutral-950">
      <Badge tone={label.includes("B") ? "blue" : "green"}>{label}</Badge>
      <h3 className="mt-3 text-base font-semibold">{title}</h3>
      <p className="mt-1 text-xs font-medium uppercase tracking-normal text-neutral-500 dark:text-neutral-400">{industry}</p>
      <p className="mt-3 text-sm leading-6 text-neutral-700 dark:text-neutral-300">{description}</p>
      {ukrainian ? <p className="mt-2 text-sm leading-6 text-neutral-600 dark:text-neutral-400">{ukrainian}</p> : null}
      {targetGroup ? <p className="mt-3 text-sm"><span className="font-semibold">Zielgruppe:</span> {targetGroup}</p> : null}
      {avoid ? <p className="mt-2 text-sm"><span className="font-semibold">Nicht verwenden:</span> {avoid}</p> : null}
      {deliverables?.length ? (
        <div className="mt-3 flex flex-wrap gap-2">
          {deliverables.map((item) => (
            <Badge key={item}>{item}</Badge>
          ))}
        </div>
      ) : null}
    </article>
  );
}
