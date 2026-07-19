"use client";

import { Check, Languages, Volume2 } from "lucide-react";
import { useCallback, useMemo, useState } from "react";
import { hungarianTopics } from "@/data/hungarian";
import { Badge, PageHeader, Panel, ProgressBar } from "@/components/shared/ui";
import { useAuth } from "@/lib/auth";
import { saveUserDocument, subscribeUserCollection } from "@/lib/firestore";
import { useSnapshotSubscription } from "@/lib/hooks";
import type { HungarianQuizQuestion, HungarianTopic } from "@/data/hungarian";

interface HungarianTaskProgress {
  id: string;
  topicId: string;
  taskIndex: number;
  done: boolean;
  createdAt?: unknown;
  updatedAt?: unknown;
  userId?: string;
}

interface HungarianQuizResult {
  id: string;
  topicId: string;
  score: number;
  total: number;
  percent: number;
  createdAt?: unknown;
  updatedAt?: unknown;
  userId?: string;
}

export function HungarianView() {
  const { user } = useAuth();
  const userId = user?.uid ?? "";
  const [selectedTopicId, setSelectedTopicId] = useState(hungarianTopics[0].id);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [quizResult, setQuizResult] = useState<HungarianQuizResult | null>(null);
  const [quizSaveStatus, setQuizSaveStatus] = useState<"idle" | "saving" | "saved" | "error">("idle");
  const [quizNotice, setQuizNotice] = useState("");

  const subscribe = useCallback(
    (onData: (items: HungarianTaskProgress[]) => void, onError: (error: Error) => void) =>
      subscribeUserCollection<HungarianTaskProgress>(userId, "hungarianProgress", onData, onError),
    [userId]
  );
  const { items: progressItems } = useSnapshotSubscription(subscribe, [subscribe]);
  const quizSubscribe = useCallback(
    (onData: (items: HungarianQuizResult[]) => void, onError: (error: Error) => void) =>
      subscribeUserCollection<HungarianQuizResult>(userId, "hungarianQuizResults", onData, onError),
    [userId]
  );
  const { items: quizResults } = useSnapshotSubscription(quizSubscribe, [quizSubscribe]);

  const selectedTopic = useMemo(
    () => hungarianTopics.find((topic) => topic.id === selectedTopicId) ?? hungarianTopics[0],
    [selectedTopicId]
  );

  const progressById = useMemo(
    () => new Map(progressItems.map((item) => [item.id, item])),
    [progressItems]
  );
  const latestQuizResultByTopic = useMemo(() => {
    const results = new Map<string, HungarianQuizResult>();

    quizResults.forEach((item) => {
      if (!results.has(item.topicId)) {
        results.set(item.topicId, item);
      }
    });

    if (quizResult) {
      results.set(quizResult.topicId, quizResult);
    }

    return results;
  }, [quizResult, quizResults]);
  const allTaskIds = useMemo(
    () => hungarianTopics.flatMap((topic) => topic.tasks.map((_, index) => taskId(topic.id, index))),
    []
  );
  const taskDoneCount = allTaskIds.filter((id) => progressById.get(id)?.done).length;
  const quizDoneCount = hungarianTopics.filter((topic) => latestQuizResultByTopic.has(topic.id)).length;
  const doneCount = taskDoneCount + quizDoneCount;
  const totalCount = allTaskIds.length + hungarianTopics.length;
  const progress = totalCount ? Math.round((doneCount / totalCount) * 100) : 0;

  const topicDoneCount = selectedTopic.tasks.filter((_, index) => progressById.get(taskId(selectedTopic.id, index))?.done).length;
  const selectedTopicHasNewAnswers = selectedTopic.quiz.some((question) => answers[question.id]);
  const savedSelectedQuizResult = latestQuizResultByTopic.get(selectedTopic.id) ?? null;
  const visibleQuizResult = quizResult?.topicId === selectedTopic.id ? quizResult : selectedTopicHasNewAnswers ? null : savedSelectedQuizResult;

  const toggleTask = async (topic: HungarianTopic, index: number) => {
    const id = taskId(topic.id, index);
    const current = progressById.get(id);
    await saveUserDocument<HungarianTaskProgress>(userId, "hungarianProgress", id, {
      id,
      topicId: topic.id,
      taskIndex: index,
      done: !current?.done
    });
  };

  const submitQuiz = async () => {
    const missingAnswers = selectedTopic.quiz.filter((question) => !answers[question.id]).length;

    if (missingAnswers) {
      setQuizSaveStatus("idle");
      setQuizNotice(`Ще потрібно вибрати відповідь: ${missingAnswers}.`);
      return;
    }

    const score = selectedTopic.quiz.reduce((sum, question) => (answers[question.id] === question.answer ? sum + 1 : sum), 0);
    const result: HungarianQuizResult = {
      id: crypto.randomUUID(),
      topicId: selectedTopic.id,
      score,
      total: selectedTopic.quiz.length,
      percent: Math.round((score / selectedTopic.quiz.length) * 100)
    };

    setQuizResult(result);
    setQuizSaveStatus("saving");
    setQuizNotice("Тест завершено. Результат показано, зараз зберігаю.");

    try {
      await saveUserDocument<HungarianQuizResult>(userId, "hungarianQuizResults", result.id, result);
      setQuizSaveStatus("saved");
      setQuizNotice("Тест завершено і збережено.");
    } catch {
      setQuizSaveStatus("error");
      setQuizNotice("Результат видно, але зараз не вдалося зберегти. Перевір вхід через Google або інтернет.");
    }
  };

  const handleQuizAnswer = (questionId: string, answer: string) => {
    setAnswers((current) => ({ ...current, [questionId]: answer }));
    setQuizResult(null);
    setQuizSaveStatus("idle");
    setQuizNotice("");
  };

  const selectTopic = (topicId: string) => {
    setSelectedTopicId(topicId);
    setAnswers({});
    setQuizResult(null);
    setQuizSaveStatus("idle");
    setQuizNotice("");
  };

  return (
    <>
      <PageHeader
        eyebrow="Ungarisch"
        title="Угорська мова легко"
        description="Маленька окрема вкладка для 10-15 хвилин. Це не впливає на Ausbildung-прогрес і не змішується з Medienfachfrau."
        action={<Badge tone={progress >= 70 ? "green" : progress > 20 ? "amber" : "neutral"}>{progress}%</Badge>}
      />

      <div className="mb-6 grid gap-4 lg:grid-cols-[1fr_320px]">
        <Panel title="Як користуватись" description="Без тиску. Просто відкриваєш одну тему і робиш 1-2 маленькі дії.">
          <div className="grid gap-3 md:grid-cols-3">
            <InfoTile title="Ритм" text="2-3 рази на тиждень або 10 хвилин у дорозі." />
            <InfoTile title="Фокус" text="Не граматика, а слова і фрази для життя." />
            <InfoTile title="Правило" text="Не відкривати всі теми одразу, тільки одну." />
          </div>
        </Panel>

        <Panel title="Progress">
          <div className="space-y-3">
            <div className="flex items-center justify-between text-sm">
              <span className="text-neutral-500 dark:text-neutral-400">Маленькі завдання</span>
              <span className="font-semibold">{doneCount}/{totalCount}</span>
            </div>
            <ProgressBar value={progress} />
            <p className="text-sm text-neutral-600 dark:text-neutral-300">Це додаткова вкладка. Основний пріоритет лишається Ausbildung.</p>
          </div>
        </Panel>
      </div>

      <div className="grid gap-6 xl:grid-cols-[280px_1fr]">
        <Panel title="Themen" description="Обери одну тему.">
          <div className="grid gap-2">
            {hungarianTopics.map((topic) => {
              const active = topic.id === selectedTopic.id;
              const completed = topic.tasks.filter((_, index) => progressById.get(taskId(topic.id, index))?.done).length;
              const topicQuizResult = latestQuizResultByTopic.get(topic.id);
              return (
                <button
                  key={topic.id}
                  type="button"
                  onClick={() => selectTopic(topic.id)}
                  className={`rounded-md border p-3 text-left transition ${
                    active
                      ? "border-brand-400 bg-brand-50 dark:border-brand-700 dark:bg-brand-700/20"
                      : "border-line hover:border-brand-300 hover:bg-neutral-50 dark:border-neutral-800 dark:hover:border-brand-700 dark:hover:bg-neutral-900"
                  }`}
                >
                  <span className="flex items-center justify-between gap-2">
                    <span className="text-sm font-semibold">{topic.title}</span>
                    <Badge tone={completed === topic.tasks.length ? "green" : "neutral"}>{completed}/{topic.tasks.length}</Badge>
                  </span>
                  {topicQuizResult ? (
                    <span className="mt-2 inline-flex">
                      <Badge tone={topicQuizResult.percent >= 80 ? "green" : "amber"}>Test {topicQuizResult.percent}%</Badge>
                    </span>
                  ) : null}
                  <span className="mt-1 block text-xs text-neutral-500 dark:text-neutral-400">{topic.subtitle}</span>
                </button>
              );
            })}
          </div>
        </Panel>

        <div className="space-y-6">
          <Panel title={`${selectedTopic.title} - ${selectedTopic.subtitle}`} description={selectedTopic.goal}>
            <div className="mb-4 flex flex-wrap items-center gap-2">
              <Badge tone="blue">A1</Badge>
              <Badge tone={topicDoneCount === selectedTopic.tasks.length ? "green" : "amber"}>
                {topicDoneCount}/{selectedTopic.tasks.length} done
              </Badge>
              {visibleQuizResult ? (
                <Badge tone={visibleQuizResult.percent >= 80 ? "green" : "amber"}>Test {visibleQuizResult.percent}%</Badge>
              ) : (
                <Badge tone="neutral">Test offen</Badge>
              )}
            </div>

            <div className="overflow-x-auto">
              <table className="w-full min-w-[680px] border-separate border-spacing-0 text-sm">
                <thead>
                  <tr className="text-left text-xs uppercase tracking-normal text-neutral-500 dark:text-neutral-400">
                    <th className="border-b border-line py-2 pr-3 dark:border-neutral-800">Magyar</th>
                    <th className="border-b border-line px-3 py-2 dark:border-neutral-800">Вимова</th>
                    <th className="border-b border-line px-3 py-2 dark:border-neutral-800">Українська</th>
                    <th className="border-b border-line py-2 pl-3 dark:border-neutral-800">Deutsch</th>
                  </tr>
                </thead>
                <tbody>
                  {selectedTopic.words.map((word) => (
                    <tr key={word.id}>
                      <td className="border-b border-line py-3 pr-3 font-semibold dark:border-neutral-800">{word.hungarian}</td>
                      <td className="border-b border-line px-3 py-3 text-neutral-600 dark:border-neutral-800 dark:text-neutral-300">{word.pronunciation}</td>
                      <td className="border-b border-line px-3 py-3 dark:border-neutral-800">{word.ukrainian}</td>
                      <td className="border-b border-line py-3 pl-3 text-neutral-600 dark:border-neutral-800 dark:text-neutral-300">{word.german}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Panel>

          <div className="grid gap-6 lg:grid-cols-2">
            <Panel title="Фрази" description="Просто прочитати вголос.">
              <div className="space-y-3">
                {selectedTopic.phrases.map((phrase) => (
                  <div key={phrase.id} className="rounded-md border border-line p-3 dark:border-neutral-800">
                    <div className="flex items-start gap-3">
                      <Volume2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" aria-hidden="true" />
                      <div>
                        <p className="font-semibold">{phrase.hungarian}</p>
                        <p className="mt-1 text-xs text-neutral-500 dark:text-neutral-400">{phrase.pronunciation}</p>
                        <p className="mt-2 text-sm">{phrase.ukrainian}</p>
                        <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-300">{phrase.german}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Panel>

            <Panel title="Завдання з галочками" description="Можна зробити не все. Зірочка optional.">
              <div className="space-y-2">
                {selectedTopic.tasks.map((task, index) => {
                  const id = taskId(selectedTopic.id, index);
                  const checked = progressById.get(id)?.done;
                  const optional = task.startsWith("★");
                  return (
                    <label key={id} className="flex cursor-pointer items-start gap-3 rounded-md border border-line p-3 text-sm dark:border-neutral-800">
                      <input
                        type="checkbox"
                        checked={Boolean(checked)}
                        onChange={() => void toggleTask(selectedTopic, index)}
                        className="mt-1 h-4 w-4 accent-brand-600"
                      />
                      <span className="flex flex-wrap items-center gap-2">
                        <span>{task}</span>
                        {optional ? <Badge tone="amber">optional</Badge> : null}
                      </span>
                    </label>
                  );
                })}
              </div>
            </Panel>
          </div>

          <Panel title="Mini-Test" description="Тільки вибір. Не треба писати самій.">
            <div className="grid gap-4 lg:grid-cols-[1fr_260px]">
              <div className="space-y-4">
                {selectedTopic.quiz.map((question, index) => (
                  <QuizCard
                    key={question.id}
                    question={question}
                    index={index}
                    selectedAnswer={answers[question.id]}
                    onAnswer={(answer) => handleQuizAnswer(question.id, answer)}
                  />
                ))}
                <button type="button" onClick={() => void submitQuiz()} className="rounded-md bg-brand-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-brand-700">
                  Test prüfen
                </button>
                {quizNotice ? (
                  <p
                    className={`rounded-md border p-3 text-sm ${
                      quizSaveStatus === "error"
                        ? "border-red-200 bg-red-50 text-red-700 dark:border-red-900/60 dark:bg-red-950 dark:text-red-200"
                        : "border-line bg-neutral-50 text-neutral-600 dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-300"
                    }`}
                  >
                    {quizNotice}
                  </p>
                ) : null}
              </div>

              <div className="rounded-md border border-line p-4 dark:border-neutral-800">
                <div className="flex items-center gap-2">
                  <Languages className="h-4 w-4 text-brand-600" aria-hidden="true" />
                  <h3 className="text-sm font-semibold">Ergebnis</h3>
                </div>
                {visibleQuizResult ? (
                  <div className="mt-4">
                    <p className="text-4xl font-semibold">{visibleQuizResult.percent}%</p>
                    <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">
                      {visibleQuizResult.score} / {visibleQuizResult.total} правильні відповіді.
                    </p>
                    <p className="mt-4 text-sm text-neutral-600 dark:text-neutral-300">
                      {visibleQuizResult.percent >= 80 ? "Sehr gut. Цю тему можна повторити пізніше." : "Нормально. Просто повтори слова ще раз."}
                    </p>
                  </div>
                ) : (
                  <p className="mt-4 text-sm text-neutral-500 dark:text-neutral-400">Після тесту тут буде результат.</p>
                )}
              </div>
            </div>
          </Panel>
        </div>
      </div>
    </>
  );
}

function InfoTile({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-md border border-line bg-neutral-50 p-3 dark:border-neutral-800 dark:bg-neutral-950">
      <p className="text-sm font-semibold">{title}</p>
      <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-300">{text}</p>
    </div>
  );
}

function QuizCard({
  question,
  index,
  selectedAnswer,
  onAnswer
}: {
  question: HungarianQuizQuestion;
  index: number;
  selectedAnswer?: string;
  onAnswer: (answer: string) => void;
}) {
  return (
    <div className="rounded-md border border-line p-4 dark:border-neutral-800">
      <p className="text-sm font-semibold">{index + 1}. {question.question}</p>
      <div className="mt-3 grid gap-2">
        {question.options.map((option, optionIndex) => {
          const selected = selectedAnswer === option;
          return (
            <label
              key={option}
              className={`flex cursor-pointer items-start gap-3 rounded-md border p-3 text-sm transition ${
                selected
                  ? "border-brand-500 bg-brand-50 text-brand-900 dark:border-brand-500 dark:bg-brand-700/20 dark:text-brand-50"
                  : "border-line hover:border-brand-300 hover:bg-neutral-50 dark:border-neutral-800 dark:hover:border-brand-700 dark:hover:bg-neutral-900"
              }`}
            >
              <input type="radio" checked={selected} onChange={() => onAnswer(option)} className="mt-1 accent-brand-600" />
              <span className="font-semibold">{String.fromCharCode(65 + optionIndex)}.</span>
              <span>{option}</span>
              {selected ? <Check className="ml-auto h-4 w-4 shrink-0 text-brand-600" aria-hidden="true" /> : null}
            </label>
          );
        })}
      </div>
    </div>
  );
}

function taskId(topicId: string, index: number) {
  return `${topicId}-task-${index + 1}`;
}
