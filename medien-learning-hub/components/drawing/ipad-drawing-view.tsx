"use client";

import { Check, ExternalLink, Palette, Star } from "lucide-react";
import { useCallback, useState } from "react";
import { drawingTutorialLinks, drawingWeeks } from "@/data/drawing";
import { Badge, PageHeader, Panel, inputClass } from "@/components/shared/ui";
import { useAuth } from "@/lib/auth";
import { saveUserDocument, subscribeUserCollection } from "@/lib/firestore";
import { useSnapshotSubscription } from "@/lib/hooks";
import type { DrawingProgress } from "@/lib/types";

export function IpadDrawingView() {
  const { user } = useAuth();
  const userId = user?.uid ?? "";
  const [notes, setNotes] = useState<Record<string, string>>({});

  const progressSubscribe = useCallback(
    (onData: (items: DrawingProgress[]) => void, onError: (error: Error) => void) =>
      subscribeUserCollection<DrawingProgress>(userId, "drawingProgress", onData, onError),
    [userId]
  );

  const { items: progressItems } = useSnapshotSubscription(progressSubscribe, [progressSubscribe]);
  const doneByTask = new Map(progressItems.map((item) => [item.taskId, item]));
  const allTasks = drawingWeeks.flatMap((week) => week.tasks);
  const doneCount = allTasks.filter((task) => doneByTask.get(task.id)?.done).length;

  const toggleTask = async (taskId: string) => {
    const current = doneByTask.get(taskId);
    const next: DrawingProgress = {
      id: taskId,
      taskId,
      done: !current?.done,
      note: notes[taskId] ?? current?.note ?? ""
    };
    await saveUserDocument<DrawingProgress>(userId, "drawingProgress", taskId, next);
  };

  const saveNote = async (taskId: string) => {
    const current = doneByTask.get(taskId);
    const next: DrawingProgress = {
      id: taskId,
      taskId,
      done: Boolean(current?.done),
      note: notes[taskId] ?? current?.note ?? ""
    };
    await saveUserDocument<DrawingProgress>(userId, "drawingProgress", taskId, next);
  };

  return (
    <>
      <PageHeader
        eyebrow="iPad + Hand Drawing"
        title="Optional Sketch Rhythm"
        description="2 прості скетчі на тиждень без конкретних днів. Це не обов'язково для LAP, але допомагає розвивати руку, стиль, персонажів, тварин і маленькі ілюстрації для портфоліо та Instagram."
        action={<Badge tone="amber">★ optional · {doneCount}/{allTasks.length}</Badge>}
      />

      <div className="mb-6 grid gap-6 xl:grid-cols-[1fr_360px]">
        <Panel title="Правило для Instagram" description="Щоб було безпечніше для портфоліо і соцмереж.">
          <div className="space-y-3 text-sm leading-6 text-neutral-700 dark:text-neutral-300">
            <p>Можна брати референс для пози, форми, настрою або акварельної техніки.</p>
            <p>Для посту краще створювати свою оригінальну версію, а не перемальовувати 1:1 чужого персонажа чи кадр з мультфільму.</p>
            <p>Стиль: дивний sci-fi cartoon mood, прості форми, великі очі, лабораторія, портали, смішні предмети, але власні персонажі.</p>
          </div>
        </Panel>

        <Panel title="Короткі уроки / пошук" description="Відкривають YouTube-пошук. Обери коротке відео, яке зрозуміле саме тобі.">
          <div className="grid gap-2">
            {drawingTutorialLinks.map((link) => (
              <a
                key={link.title}
                href={link.url}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between gap-3 rounded-md border border-line p-3 text-sm font-medium transition hover:border-brand-300 hover:bg-brand-50 dark:border-neutral-800 dark:hover:bg-brand-700/10"
              >
                {link.title}
                <ExternalLink size={15} aria-hidden="true" />
              </a>
            ))}
          </div>
        </Panel>
      </div>

      <div className="grid gap-5">
        {drawingWeeks.map((week) => (
          <Panel key={week.id} title={`Woche ${week.week}: ${week.title}`} description={week.ausbildungLink}>
            <div className="grid gap-4 xl:grid-cols-2">
              {week.tasks.map((task) => {
                const saved = doneByTask.get(task.id);
                const done = Boolean(saved?.done);
                return (
                  <article key={task.id} className="rounded-md border border-line p-4 dark:border-neutral-800">
                    <div className="mb-3 flex flex-wrap items-center gap-2">
                      <Badge tone="amber">★ optional</Badge>
                      <Badge>{task.medium}</Badge>
                    </div>
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h3 className="text-base font-semibold">{task.title}</h3>
                        <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">{task.style}</p>
                      </div>
                      <button
                        type="button"
                        onClick={() => void toggleTask(task.id)}
                        className={`inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-md border ${
                          done
                            ? "border-brand-600 bg-brand-600 text-white"
                            : "border-line bg-white text-neutral-600 dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-300"
                        }`}
                        aria-label={done ? "Mark as not done" : "Mark as done"}
                      >
                        <Check size={17} aria-hidden="true" />
                      </button>
                    </div>

                    <a
                      href={task.searchUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-4 inline-flex items-center gap-2 rounded-md border border-line px-3 py-2 text-sm font-semibold text-brand-700 transition hover:bg-brand-50 dark:border-neutral-800 dark:text-brand-100 dark:hover:bg-brand-700/10"
                    >
                      <Palette size={15} aria-hidden="true" />
                      Відкрити референс-пошук
                      <ExternalLink size={14} aria-hidden="true" />
                    </a>
                    <p className="mt-2 text-xs text-neutral-500 dark:text-neutral-400">Search: {task.referenceQuery}</p>

                    <ul className="mt-4 grid gap-2 text-sm text-neutral-700 dark:text-neutral-300">
                      {task.steps.map((step) => (
                        <li key={step} className="flex gap-2">
                          <Star className="mt-0.5 h-4 w-4 shrink-0 text-honey" aria-hidden="true" />
                          <span>{step}</span>
                        </li>
                      ))}
                    </ul>

                    <p className="mt-4 rounded-md bg-neutral-50 p-3 text-sm text-neutral-600 dark:bg-neutral-950 dark:text-neutral-300">{task.postIdea}</p>
                    <div className="mt-4">
                      <label className="text-sm font-medium" htmlFor={`${task.id}-note`}>Нотатка після скетчу</label>
                      <textarea
                        id={`${task.id}-note`}
                        rows={3}
                        className={`${inputClass} mt-2`}
                        value={notes[task.id] ?? saved?.note ?? ""}
                        onChange={(event) => setNotes({ ...notes, [task.id]: event.target.value })}
                        onBlur={() => void saveNote(task.id)}
                        placeholder="Що вийшло? Що повторити? Чи постила в Instagram?"
                      />
                    </div>
                  </article>
                );
              })}
            </div>
          </Panel>
        ))}
      </div>
    </>
  );
}
