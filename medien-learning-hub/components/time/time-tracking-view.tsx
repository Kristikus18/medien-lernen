"use client";

import { Pause, Play } from "lucide-react";
import { useCallback, useEffect, useMemo, useState } from "react";
import { timeCategories } from "@/data/modules";
import { Badge, PageHeader, Panel, inputClass } from "@/components/shared/ui";
import { useAuth } from "@/lib/auth";
import { saveUserDocument, subscribeUserCollection } from "@/lib/firestore";
import { useSnapshotSubscription } from "@/lib/hooks";
import type { TimeCategory, TimeEntry } from "@/lib/types";

const plannedDefaults: Record<TimeCategory, number> = {
  Research: 40,
  Moodboard: 35,
  Sketches: 35,
  Illustrator: 90,
  Photoshop: 45,
  Mockups: 40,
  Presentation: 40,
  "Language Learning": 20,
  Theory: 30,
  Corrections: 25
};

export function TimeTrackingView() {
  const { user } = useAuth();
  const userId = user?.uid ?? "";
  const [tick, setTick] = useState(Date.now());

  const subscribe = useCallback(
    (onData: (items: TimeEntry[]) => void, onError: (error: Error) => void) =>
      subscribeUserCollection<TimeEntry>(userId, "timeEntries", onData, onError),
    [userId]
  );
  const { items: entries } = useSnapshotSubscription(subscribe, [subscribe]);

  useEffect(() => {
    const interval = window.setInterval(() => setTick(Date.now()), 1000);
    return () => window.clearInterval(interval);
  }, []);

  const rows = useMemo(
    () =>
      timeCategories.map((category) => {
        const existing = entries.find((entry) => entry.category === category);
        return (
          existing ?? {
            id: category.toLowerCase().replace(/\s+/g, "-"),
            category,
            plannedMinutes: plannedDefaults[category],
            actualMinutes: 0,
            running: false,
            moduleId: "module-1"
          }
        );
      }),
    [entries]
  );

  const totalPlanned = rows.reduce((sum, entry) => sum + entry.plannedMinutes, 0);
  const totalActual = rows.reduce((sum, entry) => sum + actualWithRunning(entry, tick), 0);
  const runningEntry = rows.find((entry) => entry.running);

  const saveEntry = async (entry: TimeEntry) => {
    await saveUserDocument<TimeEntry>(userId, "timeEntries", entry.id, {
      ...entry,
      moduleId: "module-1"
    });
  };

  const toggleTimer = async (entry: TimeEntry) => {
    if (entry.running) {
      const nextActual = actualWithRunning(entry, Date.now());
      await saveEntry({
        ...entry,
        actualMinutes: nextActual,
        running: false,
        startedAt: undefined
      });
      return;
    }

    if (runningEntry) {
      const nextActual = actualWithRunning(runningEntry, Date.now());
      await saveEntry({ ...runningEntry, actualMinutes: nextActual, running: false, startedAt: undefined });
    }

    await saveEntry({
      ...entry,
      running: true,
      startedAt: new Date().toISOString()
    });
  };

  const updateMinutes = async (entry: TimeEntry, field: "plannedMinutes" | "actualMinutes", value: string) => {
    const minutes = Math.max(0, Number(value) || 0);
    await saveEntry({ ...entry, [field]: minutes });
  };

  return (
    <>
      <PageHeader
        eyebrow="Time Tracking"
        title="Навчальний час"
        description="Тут видно план, фактичний час і різницю. Таймер зберігається у Firestore, тому після перезавантаження сторінки час продовжує рахуватися."
        action={<Badge tone={totalActual <= totalPlanned ? "green" : "amber"}>{formatMinutes(totalActual)} / {formatMinutes(totalPlanned)}</Badge>}
      />

      <Panel title="Module 1 Time Plan" description="Категорії відповідають реальному процесу клієнтського проєкту.">
        <div className="overflow-x-auto">
          <table className="min-w-full text-left text-sm">
            <thead className="text-xs uppercase tracking-normal text-neutral-500">
              <tr>
                <th className="px-3 py-2">Kategorie</th>
                <th className="px-3 py-2">Geplant</th>
                <th className="px-3 py-2">Tatsächlich</th>
                <th className="px-3 py-2">Differenz</th>
                <th className="px-3 py-2">Timer</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((entry) => {
                const actual = actualWithRunning(entry, tick);
                const difference = actual - entry.plannedMinutes;
                return (
                  <tr key={entry.id} className="border-t border-line dark:border-neutral-800">
                    <td className="px-3 py-3 font-medium">{entry.category}</td>
                    <td className="px-3 py-3">
                      <input value={entry.plannedMinutes} onChange={(event) => void updateMinutes(entry, "plannedMinutes", event.target.value)} className={`${inputClass} w-24`} inputMode="numeric" />
                    </td>
                    <td className="px-3 py-3">
                      <input value={actual} onChange={(event) => void updateMinutes(entry, "actualMinutes", event.target.value)} className={`${inputClass} w-24`} inputMode="numeric" />
                    </td>
                    <td className="px-3 py-3">
                      <Badge tone={difference <= 0 ? "green" : "amber"}>{difference > 0 ? "+" : ""}{difference} min</Badge>
                    </td>
                    <td className="px-3 py-3">
                      <button
                        type="button"
                        onClick={() => void toggleTimer(entry)}
                        className={`inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm font-semibold ${
                          entry.running ? "bg-neutral-900 text-white dark:bg-neutral-100 dark:text-neutral-950" : "bg-brand-600 text-white"
                        }`}
                      >
                        {entry.running ? <Pause size={15} aria-hidden="true" /> : <Play size={15} aria-hidden="true" />}
                        {entry.running ? "Stop Timer" : "Start Timer"}
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </Panel>
    </>
  );
}

function actualWithRunning(entry: TimeEntry, now: number) {
  if (!entry.running || !entry.startedAt) {
    return entry.actualMinutes;
  }

  const startedAt = new Date(entry.startedAt).getTime();
  const extraMinutes = Math.floor((now - startedAt) / 60000);
  return entry.actualMinutes + Math.max(0, extraMinutes);
}

function formatMinutes(minutes: number) {
  return `${Math.floor(minutes / 60)}h ${minutes % 60}m`;
}
