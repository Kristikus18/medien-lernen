"use client";

import { BookOpenCheck, Check } from "lucide-react";
import { useCallback, useMemo, useState } from "react";
import { Badge, PageHeader, Panel, ProgressBar } from "@/components/shared/ui";
import { useAuth } from "@/lib/auth";
import { saveUserDocument, subscribeUserCollection } from "@/lib/firestore";
import { useSnapshotSubscription } from "@/lib/hooks";
import type { PracticeQuizQuestion, PracticeTopic } from "@/data/language-practice";

interface LanguagePracticeViewProps {
  eyebrow: string;
  title: string;
  description: string;
  topics: PracticeTopic[];
  progressCollection: string;
  quizCollection: string;
}

interface PracticeTaskProgress {
  id: string;
  topicId: string;
  taskIndex: number;
  done: boolean;
  createdAt?: unknown;
  updatedAt?: unknown;
  userId?: string;
}

interface PracticeQuizResult {
  id: string;
  topicId: string;
  score: number;
  total: number;
  percent: number;
  createdAt?: unknown;
  updatedAt?: unknown;
  userId?: string;
}

export function LanguagePracticeView({
  eyebrow,
  title,
  description,
  topics,
  progressCollection,
  quizCollection
}: LanguagePracticeViewProps) {
  const { user } = useAuth();
  const userId = user?.uid ?? "";
  const [selectedTopicId, setSelectedTopicId] = useState(topics[0].id);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [quizResult, setQuizResult] = useState<PracticeQuizResult | null>(null);

  const subscribe = useCallback(
    (onData: (items: PracticeTaskProgress[]) => void, onError: (error: Error) => void) =>
      subscribeUserCollection<PracticeTaskProgress>(userId, progressCollection, onData, onError),
    [progressCollection, userId]
  );
  const { items: progressItems } = useSnapshotSubscription(subscribe, [subscribe]);

  const selectedTopic = useMemo(
    () => topics.find((topic) => topic.id === selectedTopicId) ?? topics[0],
    [selectedTopicId, topics]
  );
  const progressById = useMemo(() => new Map(progressItems.map((item) => [item.id, item])), [progressItems]);
  const allTaskIds = useMemo(() => topics.flatMap((topic) => topic.tasks.map((_, index) => taskId(topic.id, index))), [topics]);
  const doneCount = allTaskIds.filter((id) => progressById.get(id)?.done).length;
  const totalCount = allTaskIds.length;
  const progress = totalCount ? Math.round((doneCount / totalCount) * 100) : 0;
  const topicDoneCount = selectedTopic.tasks.filter((_, index) => progressById.get(taskId(selectedTopic.id, index))?.done).length;

  const toggleTask = async (topic: PracticeTopic, index: number) => {
    const id = taskId(topic.id, index);
    const current = progressById.get(id);
    await saveUserDocument<PracticeTaskProgress>(userId, progressCollection, id, {
      id,
      topicId: topic.id,
      taskIndex: index,
      done: !current?.done
    });
  };

  const submitQuiz = async () => {
    const score = selectedTopic.quiz.reduce((sum, question) => (answers[question.id] === question.answer ? sum + 1 : sum), 0);
    const result: PracticeQuizResult = {
      id: crypto.randomUUID(),
      topicId: selectedTopic.id,
      score,
      total: selectedTopic.quiz.length,
      percent: Math.round((score / selectedTopic.quiz.length) * 100)
    };

    await saveUserDocument<PracticeQuizResult>(userId, quizCollection, result.id, result);
    setQuizResult(result);
  };

  const selectTopic = (topicId: string) => {
    setSelectedTopicId(topicId);
    setAnswers({});
    setQuizResult(null);
  };

  const levels = Array.from(new Set(topics.map((topic) => topic.level)));

  return (
    <>
      <PageHeader
        eyebrow={eyebrow}
        title={title}
        description={description}
        action={<Badge tone={progress >= 70 ? "green" : progress > 20 ? "amber" : "neutral"}>{progress}%</Badge>}
      />

      <div className="mb-6 grid gap-4 lg:grid-cols-[1fr_320px]">
        <Panel title="Як вчити" description="Одна тема за раз. Спочатку правило, потім приклади, потім тест.">
          <div className="grid gap-3 md:grid-cols-3">
            <InfoTile title="Ритм" text="15-20 хвилин, 2-3 рази на тиждень." />
            <InfoTile title="Без писання" text="У тестах тільки вибір відповіді." />
            <InfoTile title="Рівні" text={`Тут є рівні: ${levels.join(", ")}.`} />
          </div>
        </Panel>

        <Panel title="Progress">
          <div className="space-y-3">
            <div className="flex items-center justify-between text-sm">
              <span className="text-neutral-500 dark:text-neutral-400">Завдання</span>
              <span className="font-semibold">{doneCount}/{totalCount}</span>
            </div>
            <ProgressBar value={progress} />
            <p className="text-sm text-neutral-600 dark:text-neutral-300">Ця вкладка окрема від Medienfachfrau, щоб не змішувати цілі.</p>
          </div>
        </Panel>
      </div>

      <div className="grid gap-6 xl:grid-cols-[300px_1fr]">
        <Panel title="Themen" description="Обери одну тему.">
          <div className="grid gap-2">
            {topics.map((topic) => {
              const active = topic.id === selectedTopic.id;
              const completed = topic.tasks.filter((_, index) => progressById.get(taskId(topic.id, index))?.done).length;
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
                    <span className="flex items-center gap-2">
                      <Badge tone="blue">{topic.level}</Badge>
                      <span className="text-sm font-semibold">{topic.title}</span>
                    </span>
                    <Badge tone={completed === topic.tasks.length ? "green" : "neutral"}>{completed}/{topic.tasks.length}</Badge>
                  </span>
                  <span className="mt-1 block text-xs text-neutral-500 dark:text-neutral-400">{topic.subtitle}</span>
                </button>
              );
            })}
          </div>
        </Panel>

        <div className="space-y-6">
          <Panel title={`${selectedTopic.level} - ${selectedTopic.title}`} description={selectedTopic.goal}>
            <div className="mb-4 flex flex-wrap items-center gap-2">
              <Badge tone="blue">{selectedTopic.level}</Badge>
              <Badge tone={topicDoneCount === selectedTopic.tasks.length ? "green" : "amber"}>
                {topicDoneCount}/{selectedTopic.tasks.length} done
              </Badge>
            </div>

            <div className="grid gap-3 md:grid-cols-2">
              {selectedTopic.rules.map((rule) => (
                <div key={rule} className="flex gap-2 rounded-md border border-line bg-neutral-50 p-3 text-sm dark:border-neutral-800 dark:bg-neutral-950">
                  <BookOpenCheck className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" aria-hidden="true" />
                  <span>{rule}</span>
                </div>
              ))}
            </div>
          </Panel>

          <div className="grid gap-6 lg:grid-cols-2">
            <Panel title="Приклади" description="Прочитати вголос і зрозуміти переклад.">
              <div className="space-y-3">
                {selectedTopic.examples.map((example) => (
                  <div key={example.sentence} className="rounded-md border border-line p-3 dark:border-neutral-800">
                    <p className="font-semibold">{example.sentence}</p>
                    <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">{example.translation}</p>
                  </div>
                ))}
              </div>
            </Panel>

            <Panel title="Завдання з галочками" description="Зірочка optional, якщо немає сил.">
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

          <Panel title="Mini-Test" description="Тільки вибір. Нічого писати не треба.">
            <div className="grid gap-4 lg:grid-cols-[1fr_260px]">
              <div className="space-y-4">
                {selectedTopic.quiz.map((question, index) => (
                  <QuizCard
                    key={question.id}
                    question={question}
                    index={index}
                    selectedAnswer={answers[question.id]}
                    onAnswer={(answer) => setAnswers((current) => ({ ...current, [question.id]: answer }))}
                  />
                ))}
                <button type="button" onClick={() => void submitQuiz()} className="rounded-md bg-brand-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-brand-700">
                  Test prüfen
                </button>
              </div>

              <div className="rounded-md border border-line p-4 dark:border-neutral-800">
                <h3 className="text-sm font-semibold">Ergebnis</h3>
                {quizResult ? (
                  <div className="mt-4">
                    <p className="text-4xl font-semibold">{quizResult.percent}%</p>
                    <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">
                      {quizResult.score} / {quizResult.total} правильні відповіді.
                    </p>
                    <p className="mt-4 text-sm text-neutral-600 dark:text-neutral-300">
                      {quizResult.percent >= 80 ? "Sehr gut. Тему можна повторити пізніше." : "Нормально. Повтори правило і приклади ще раз."}
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
  question: PracticeQuizQuestion;
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
