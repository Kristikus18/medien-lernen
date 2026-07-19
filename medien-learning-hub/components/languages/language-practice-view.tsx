"use client";

import { BookOpenCheck, Check } from "lucide-react";
import { useCallback, useMemo, useState } from "react";
import { Badge, PageHeader, Panel, ProgressBar, inputClass } from "@/components/shared/ui";
import { useAuth } from "@/lib/auth";
import { saveUserDocument, subscribeUserCollection } from "@/lib/firestore";
import { useSnapshotSubscription } from "@/lib/hooks";
import type { DictationTask, IrregularVerb, PracticeQuizQuestion, PracticeResource, PracticeTopic } from "@/data/language-practice";

interface LanguagePracticeViewProps {
  eyebrow: string;
  title: string;
  description: string;
  topics: PracticeTopic[];
  progressCollection: string;
  quizCollection: string;
  resources?: PracticeResource[];
  dictations?: DictationTask[];
  irregularVerbs?: IrregularVerb[];
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

interface PersonalWord {
  id: string;
  word: string;
  translation: string;
  note: string;
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
  quizCollection,
  resources = [],
  dictations = [],
  irregularVerbs = []
}: LanguagePracticeViewProps) {
  const { user } = useAuth();
  const userId = user?.uid ?? "";
  const [selectedTopicId, setSelectedTopicId] = useState(topics[0].id);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [quizResult, setQuizResult] = useState<PracticeQuizResult | null>(null);
  const [quizSaveStatus, setQuizSaveStatus] = useState<"idle" | "saving" | "saved" | "error">("idle");
  const [quizNotice, setQuizNotice] = useState("");
  const [word, setWord] = useState("");
  const [translation, setTranslation] = useState("");
  const [wordNote, setWordNote] = useState("");
  const wordCollection = `${progressCollection}Words`;

  const subscribe = useCallback(
    (onData: (items: PracticeTaskProgress[]) => void, onError: (error: Error) => void) =>
      subscribeUserCollection<PracticeTaskProgress>(userId, progressCollection, onData, onError),
    [progressCollection, userId]
  );
  const { items: progressItems } = useSnapshotSubscription(subscribe, [subscribe]);
  const wordSubscribe = useCallback(
    (onData: (items: PersonalWord[]) => void, onError: (error: Error) => void) =>
      subscribeUserCollection<PersonalWord>(userId, wordCollection, onData, onError),
    [userId, wordCollection]
  );
  const { items: personalWords } = useSnapshotSubscription(wordSubscribe, [wordSubscribe]);
  const quizSubscribe = useCallback(
    (onData: (items: PracticeQuizResult[]) => void, onError: (error: Error) => void) =>
      subscribeUserCollection<PracticeQuizResult>(userId, quizCollection, onData, onError),
    [quizCollection, userId]
  );
  const { items: quizResults } = useSnapshotSubscription(quizSubscribe, [quizSubscribe]);

  const selectedTopic = useMemo(
    () => topics.find((topic) => topic.id === selectedTopicId) ?? topics[0],
    [selectedTopicId, topics]
  );
  const progressById = useMemo(() => new Map(progressItems.map((item) => [item.id, item])), [progressItems]);
  const latestQuizResultByTopic = useMemo(() => {
    const results = new Map<string, PracticeQuizResult>();

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
  const allTaskIds = useMemo(() => topics.flatMap((topic) => topic.tasks.map((_, index) => taskId(topic.id, index))), [topics]);
  const taskDoneCount = allTaskIds.filter((id) => progressById.get(id)?.done).length;
  const quizDoneCount = topics.filter((topic) => latestQuizResultByTopic.has(topic.id)).length;
  const doneCount = taskDoneCount + quizDoneCount;
  const totalCount = allTaskIds.length + topics.length;
  const progress = totalCount ? Math.round((doneCount / totalCount) * 100) : 0;
  const topicDoneCount = selectedTopic.tasks.filter((_, index) => progressById.get(taskId(selectedTopic.id, index))?.done).length;
  const selectedTopicHasNewAnswers = selectedTopic.quiz.some((question) => answers[question.id]);
  const savedSelectedQuizResult = latestQuizResultByTopic.get(selectedTopic.id) ?? null;
  const visibleQuizResult = quizResult?.topicId === selectedTopic.id ? quizResult : selectedTopicHasNewAnswers ? null : savedSelectedQuizResult;

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

  const addPersonalWord = async () => {
    if (!word.trim() || !translation.trim()) {
      return;
    }

    const id = crypto.randomUUID();
    await saveUserDocument<PersonalWord>(userId, wordCollection, id, {
      id,
      word: word.trim(),
      translation: translation.trim(),
      note: wordNote.trim()
    });
    setWord("");
    setTranslation("");
    setWordNote("");
  };

  const submitQuiz = async () => {
    const missingAnswers = selectedTopic.quiz.filter((question) => !answers[question.id]).length;

    if (missingAnswers) {
      setQuizSaveStatus("idle");
      setQuizNotice(`Ще потрібно вибрати відповідь: ${missingAnswers}.`);
      return;
    }

    const score = selectedTopic.quiz.reduce((sum, question) => (answers[question.id] === question.answer ? sum + 1 : sum), 0);
    const result: PracticeQuizResult = {
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
      await saveUserDocument<PracticeQuizResult>(userId, quizCollection, result.id, result);
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

      <div className="mb-6 grid gap-4 xl:grid-cols-[1fr_1fr]">
        <Panel title="Mein Wörterbuch" description="Додавай сюди нові слова з курсу, відео, читання або роботи.">
          <div className="grid gap-3 md:grid-cols-[1fr_1fr]">
            <input
              value={word}
              onChange={(event) => setWord(event.target.value)}
              className={inputClass}
              placeholder="Wort / phrase"
            />
            <input
              value={translation}
              onChange={(event) => setTranslation(event.target.value)}
              className={inputClass}
              placeholder="Переклад"
            />
          </div>
          <textarea
            value={wordNote}
            onChange={(event) => setWordNote(event.target.value)}
            className={`${inputClass} mt-3`}
            rows={2}
            placeholder="Нотатка або приклад речення."
          />
          <button
            type="button"
            onClick={() => void addPersonalWord()}
            className="mt-3 rounded-md bg-brand-600 px-4 py-2 text-sm font-semibold text-white hover:bg-brand-700"
          >
            Додати слово
          </button>

          <div className="mt-4 grid gap-2">
            {personalWords.slice(0, 8).map((item) => (
              <div key={item.id} className="rounded-md border border-line bg-neutral-50 p-3 text-sm dark:border-neutral-800 dark:bg-neutral-950">
                <p className="font-semibold">{item.word}</p>
                <p className="mt-1 text-neutral-600 dark:text-neutral-300">{item.translation}</p>
                {item.note ? <p className="mt-1 text-xs text-neutral-500 dark:text-neutral-400">{item.note}</p> : null}
              </div>
            ))}
            {!personalWords.length ? (
              <p className="rounded-md border border-dashed border-line p-4 text-sm text-neutral-500 dark:border-neutral-800 dark:text-neutral-400">
                Словник поки порожній. Додай перше слово з уроку або курсу.
              </p>
            ) : null}
          </div>
        </Panel>

        {resources.length ? (
          <Panel title="Безкоштовні вправи" description="Посилання для додаткової практики, читання і слухання.">
            <div className="grid gap-3">
              {resources.map((resource) => (
                <a
                  key={resource.url}
                  href={resource.url}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-md border border-line p-3 text-sm transition hover:border-brand-300 hover:bg-brand-50 dark:border-neutral-800 dark:hover:border-brand-700 dark:hover:bg-brand-700/10"
                >
                  <span className="font-semibold text-brand-700 dark:text-brand-100">{resource.title}</span>
                  <span className="mt-1 block leading-6 text-neutral-600 dark:text-neutral-300">{resource.description}</span>
                </a>
              ))}
            </div>
          </Panel>
        ) : null}
      </div>

      {dictations.length ? (
        <Panel title="Diktate 1-2x pro Woche" description="Пиши від руки, потім перевіряй себе. Рівень легкий, приблизно 5-7 клас.">
          <div className="grid gap-4 lg:grid-cols-3">
            {dictations.map((dictation) => (
              <div key={dictation.title} className="rounded-md border border-line bg-neutral-50 p-4 dark:border-neutral-800 dark:bg-neutral-950">
                <Badge tone="amber">{dictation.level}</Badge>
                <h3 className="mt-3 text-sm font-semibold">{dictation.title}</h3>
                <p className="mt-3 text-sm leading-6 text-neutral-700 dark:text-neutral-300">{dictation.text}</p>
                <ul className="mt-3 grid gap-2 text-xs leading-5 text-neutral-500 dark:text-neutral-400">
                  {dictation.selfCheck.map((check) => (
                    <li key={check}>• {check}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Panel>
      ) : null}

      {irregularVerbs.length ? (
        <div className="mt-6">
          <Panel title="Irregular Verbs Table" description="Вчи маленькими групами по 5 дієслів. Для Past Simple потрібна друга колонка, для Present Perfect третя.">
            <div className="overflow-x-auto">
              <table className="min-w-full text-left text-sm">
                <thead className="text-xs uppercase tracking-normal text-neutral-500 dark:text-neutral-400">
                  <tr>
                    <th className="px-3 py-2">Base</th>
                    <th className="px-3 py-2">Past Simple</th>
                    <th className="px-3 py-2">Past Participle</th>
                    <th className="px-3 py-2">Українська</th>
                  </tr>
                </thead>
                <tbody>
                  {irregularVerbs.map((verb) => (
                    <tr key={verb.base} className="border-t border-line dark:border-neutral-800">
                      <td className="px-3 py-2 font-semibold">{verb.base}</td>
                      <td className="px-3 py-2">{verb.past}</td>
                      <td className="px-3 py-2">{verb.participle}</td>
                      <td className="px-3 py-2">{verb.ukrainian}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Panel>
        </div>
      ) : null}

      <div className="grid gap-6 xl:grid-cols-[300px_1fr]">
        <Panel title="Themen" description="Обери одну тему.">
          <div className="grid gap-2">
            {topics.map((topic) => {
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
                    <span className="flex items-center gap-2">
                      <Badge tone="blue">{topic.level}</Badge>
                      <span className="text-sm font-semibold">{topic.title}</span>
                    </span>
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
          <Panel title={`${selectedTopic.level} - ${selectedTopic.title}`} description={selectedTopic.goal}>
            <div className="mb-4 flex flex-wrap items-center gap-2">
              <Badge tone="blue">{selectedTopic.level}</Badge>
              <Badge tone={topicDoneCount === selectedTopic.tasks.length ? "green" : "amber"}>
                {topicDoneCount}/{selectedTopic.tasks.length} done
              </Badge>
              {visibleQuizResult ? (
                <Badge tone={visibleQuizResult.percent >= 80 ? "green" : "amber"}>Test {visibleQuizResult.percent}%</Badge>
              ) : (
                <Badge tone="neutral">Test offen</Badge>
              )}
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
                <h3 className="text-sm font-semibold">Ergebnis</h3>
                {visibleQuizResult ? (
                  <div className="mt-4">
                    <p className="text-4xl font-semibold">{visibleQuizResult.percent}%</p>
                    <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">
                      {visibleQuizResult.score} / {visibleQuizResult.total} правильні відповіді.
                    </p>
                    <p className="mt-4 text-sm text-neutral-600 dark:text-neutral-300">
                      {visibleQuizResult.percent >= 80 ? "Sehr gut. Тему можна повторити пізніше." : "Нормально. Повтори правило і приклади ще раз."}
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
