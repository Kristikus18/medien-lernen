"use client";

import Link from "next/link";
import { ArrowRight, BookOpen, CheckCircle2, Clock3, Languages, Trophy } from "lucide-react";
import { useCallback, useMemo } from "react";
import { alternativeClientBriefs, modules } from "@/data/modules";
import { PageHeader, Panel, ProgressBar, Badge } from "@/components/shared/ui";
import { useAuth } from "@/lib/auth";
import { subscribeUserCollection } from "@/lib/firestore";
import { useSnapshotSubscription } from "@/lib/hooks";
import type { LearningModule, TimeEntry, VocabularyWord } from "@/lib/types";

export function DashboardView() {
  const { user } = useAuth();
  const userId = user?.uid ?? "";

  const moduleSubscription = useCallback(
    (onData: (items: LearningModule[]) => void, onError: (error: Error) => void) => {
      return subscribeUserCollection<LearningModule>(userId, "modules", onData, onError);
    },
    [userId]
  );
  const vocabSubscription = useCallback(
    (onData: (items: VocabularyWord[]) => void, onError: (error: Error) => void) => {
      return subscribeUserCollection<VocabularyWord>(userId, "vocabulary", onData, onError);
    },
    [userId]
  );
  const timeSubscription = useCallback(
    (onData: (items: TimeEntry[]) => void, onError: (error: Error) => void) => {
      return subscribeUserCollection<TimeEntry>(userId, "timeEntries", onData, onError);
    },
    [userId]
  );

  const { items: userModules } = useSnapshotSubscription(moduleSubscription, [moduleSubscription]);
  const { items: words } = useSnapshotSubscription(vocabSubscription, [vocabSubscription]);
  const { items: timeEntries } = useSnapshotSubscription(timeSubscription, [timeSubscription]);

  const moduleList = userModules.length ? mergeModuleProgress(userModules) : modules;
  const currentModule = moduleList.find((module) => Number(module.progress ?? 0) < 100) ?? moduleList[0];
  const learnedWords = words.filter((word) => word.status === "Gelernt").length;
  const completedModules = moduleList.filter((module) => Number((module as unknown as { progress?: number }).progress ?? 0) >= 100).length;
  const totalProgress = moduleList.reduce((sum, module) => sum + Number((module as unknown as { progress?: number }).progress ?? 0), 0) / moduleList.length;
  const weeklyMinutes = timeEntries.reduce((sum, entry) => sum + entry.actualMinutes, 0);

  const chart7 = useMemo(() => makeChart(7, weeklyMinutes), [weeklyMinutes]);
  const chart30 = useMemo(() => makeChart(30, weeklyMinutes), [weeklyMinutes]);

  return (
    <>
      <PageHeader
        eyebrow="Dashboard"
        title={`Привіт, ${user?.displayName?.split(" ")[0] ?? "Krystyna"}`}
        description="Тут видно, що вже зроблено, що варто продовжити і де ти рухаєшся до LAP, портфоліо та роботи дизайнеркою."
        action={
          <Link
            href={`/module?id=${currentModule?.id ?? "module-1"}`}
            className="inline-flex items-center gap-2 rounded-md bg-brand-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-700"
          >
            Продовжити навчання
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
        }
      />

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <Metric
          icon={BookOpen}
          label="Поточний модуль"
          value={currentModule ? dashboardModuleTitle(currentModule) : "Module 1"}
          detail={currentModule ? dashboardModuleDetail(currentModule) : "Variante A / B"}
        />
        <Metric icon={CheckCircle2} label="Загальний прогрес" value={`${Math.round(totalProgress)}%`} detail="по всіх модулях" />
        <Metric icon={Languages} label="Вивчені слова" value={`${learnedWords}/${words.length || 40}`} detail="німецькі Fachwörter" />
        <Metric icon={Clock3} label="Час за тиждень" value={`${Math.round(weeklyMinutes / 60)}h ${weeklyMinutes % 60}m`} detail="фактичний час" />
      </div>

      <div className="mt-6 grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
        <Panel title="Прогрес модулів" description="Перші 16 модулів для Grafik, Print, Publishing und audiovisuelle Medien.">
          <div className="space-y-4">
            {moduleList.map((module) => {
              const progress = Number(module.progress ?? 0);
              return (
                <Link key={module.id} href={`/module?id=${module.id}`} className="block rounded-md border border-transparent p-2 transition hover:border-line hover:bg-neutral-50 dark:hover:border-neutral-800 dark:hover:bg-neutral-950">
                  <div className="mb-2 flex items-center justify-between gap-3">
                    <div>
                      <p className="text-sm font-semibold">{module.number}. {dashboardModuleTitle(module)}</p>
                      <p className="text-xs text-neutral-500 dark:text-neutral-400">{dashboardModuleDetail(module)}</p>
                    </div>
                    <Badge tone={progress >= 100 ? "green" : progress > 0 ? "amber" : "neutral"}>{progress}%</Badge>
                  </div>
                  <ProgressBar value={progress} />
                </Link>
              );
            })}
          </div>
        </Panel>

        <Panel title="Найближчі завдання" description="Сфокусуйся на тому, що дає портфоліо і допомагає на Fachgespräch.">
          <ul className="space-y-3 text-sm">
            {[
              "Lune Bakery: 3 конкурентів і короткий висновок.",
              "Moodboard: 5 зображень, 3 кольори, 2 шрифти.",
              "Illustrator: 3 логотипні напрямки.",
              "Deutsch: пояснити Wortmarke / Bildmarke / Bild-Wort-Marke."
            ].map((task) => (
              <li key={task} className="rounded-md border border-line p-3 dark:border-neutral-800">
                {task}
              </li>
            ))}
          </ul>
        </Panel>
      </div>

      <div className="mt-6 grid gap-6 xl:grid-cols-2">
        <Panel title="Графік за 7 днів" description="М’який огляд активності.">
          <BarChart values={chart7} />
        </Panel>
        <Panel title="Графік за 30 днів" description="Загальна тенденція навчання.">
          <BarChart values={chart30} compact />
        </Panel>
      </div>

      <div className="mt-6 grid gap-6 xl:grid-cols-3">
        <Panel title="Серія навчальних днів">
          <div className="flex items-center gap-3">
            <Trophy className="text-honey" aria-hidden="true" />
            <div>
              <p className="text-2xl font-semibold">1 день</p>
              <p className="text-sm text-neutral-500 dark:text-neutral-400">Старт уже є. Далі головне ритм, не ідеальність.</p>
            </div>
          </div>
        </Panel>
        <Panel title="Завершені проєкти">
          <p className="text-2xl font-semibold">{completedModules}</p>
          <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">Модулі з прогресом 100%.</p>
        </Panel>
        <Panel title="Остання активність">
          <p className="text-sm text-neutral-600 dark:text-neutral-300">Після входу та роботи в модулях тут оновлюватиметься твій прогрес.</p>
        </Panel>
      </div>
    </>
  );
}

function mergeModuleProgress(userModules: LearningModule[]) {
  const progressById = new Map(userModules.map((module) => [module.id, Number(module.progress ?? 0)]));
  return modules.map((module) => ({
    ...module,
    progress: progressById.get(module.id) ?? 0
  }));
}

function dashboardModuleTitle(module: LearningModule) {
  const titlePart = module.title.includes(" - ") ? module.title.split(" - ").slice(1).join(" - ") : module.title;
  return `${moduleVariantNames(module)} - ${titlePart}`;
}

function dashboardModuleDetail(module: LearningModule) {
  const alternative = alternativeClientBriefs[module.id];
  return alternative ? `${module.field} / ${alternative.industry}` : module.field;
}

function moduleVariantNames(module: LearningModule) {
  const alternative = alternativeClientBriefs[module.id];
  return alternative ? `${module.client} / ${alternative.company}` : module.client;
}

function Metric({
  icon: Icon,
  label,
  value,
  detail
}: {
  icon: React.ComponentType<{ size?: number; className?: string; "aria-hidden"?: boolean }>;
  label: string;
  value: string;
  detail: string;
}) {
  return (
    <Panel>
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm text-neutral-500 dark:text-neutral-400">{label}</p>
          <p className="mt-2 text-2xl font-semibold tracking-normal">{value}</p>
          <p className="mt-1 text-xs text-neutral-500 dark:text-neutral-400">{detail}</p>
        </div>
        <div className="rounded-md bg-brand-50 p-2 text-brand-700 dark:bg-brand-700/20 dark:text-brand-100">
          <Icon size={20} aria-hidden={true} />
        </div>
      </div>
    </Panel>
  );
}

function BarChart({ values, compact = false }: { values: number[]; compact?: boolean }) {
  const max = Math.max(...values, 1);
  return (
    <div className={`flex items-end gap-1 ${compact ? "h-36" : "h-44"}`}>
      {values.map((value, index) => (
        <div key={`${value}-${index}`} className="flex flex-1 flex-col items-center gap-2">
          <div
            className="w-full rounded-sm bg-brand-600/80"
            style={{ height: `${Math.max(8, (value / max) * 100)}%` }}
            title={`${value} min`}
          />
          {!compact && index % 2 === 0 ? <span className="text-[10px] text-neutral-400">{index + 1}</span> : null}
        </div>
      ))}
    </div>
  );
}

function makeChart(days: number, totalMinutes: number) {
  return Array.from({ length: days }, (_, index) => {
    const wave = Math.abs(Math.sin((index + 1) * 0.72));
    return Math.round((totalMinutes / Math.max(days, 1)) * (0.4 + wave));
  });
}
