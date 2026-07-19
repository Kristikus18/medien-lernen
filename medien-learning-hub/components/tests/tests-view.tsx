"use client";

import { useCallback, useMemo, useState } from "react";
import { quizQuestions } from "@/data/modules";
import { Badge, PageHeader, Panel } from "@/components/shared/ui";
import { useAuth } from "@/lib/auth";
import { saveUserDocument, subscribeUserCollection } from "@/lib/firestore";
import { useSnapshotSubscription } from "@/lib/hooks";
import type { QuizResult } from "@/lib/types";

export function TestsView() {
  const { user } = useAuth();
  const userId = user?.uid ?? "";
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [result, setResult] = useState<QuizResult | null>(null);
  const [notice, setNotice] = useState("");
  const [saveError, setSaveError] = useState(false);
  const subscribe = useCallback(
    (onData: (items: QuizResult[]) => void, onError: (error: Error) => void) =>
      subscribeUserCollection<QuizResult>(userId, "quizResults", onData, onError),
    [userId]
  );
  const { items: savedResults } = useSnapshotSubscription(subscribe, [subscribe]);
  const hasNewAnswers = Object.keys(answers).length > 0;
  const savedResult = useMemo(() => savedResults[0] ?? null, [savedResults]);
  const visibleResult = result ?? (hasNewAnswers ? null : savedResult);

  const submitQuiz = async () => {
    const missingAnswers = quizQuestions.filter((question) => !answers[question.id]).length;

    if (missingAnswers) {
      setSaveError(false);
      setNotice(`Ще потрібно вибрати відповідь: ${missingAnswers}.`);
      return;
    }

    const mistakes: string[] = [];
    let score = 0;

    quizQuestions.forEach((question) => {
      const answer = normalize(answers[question.id] ?? "");
      const expected = normalize(question.answer);
      const isCorrect = answer === expected;

      if (isCorrect) {
        score += 1;
      } else {
        const givenAnswer = answers[question.id] ? `Deine Antwort: ${answers[question.id]}. ` : "Keine Antwort gewählt. ";
        mistakes.push(`${question.question} - ${givenAnswer}Richtig: ${question.answer}`);
      }
    });

    const nextResult: QuizResult = {
      id: crypto.randomUUID(),
      moduleId: "module-1",
      score,
      total: quizQuestions.length,
      percent: Math.round((score / quizQuestions.length) * 100),
      mistakes
    };

    setResult(nextResult);
    setSaveError(false);
    setNotice("Тест завершено. Результат показано, зараз зберігаю.");

    try {
      await saveUserDocument<QuizResult>(userId, "quizResults", nextResult.id, nextResult);
      setNotice("Тест завершено і збережено.");
    } catch {
      setSaveError(true);
      setNotice("Результат видно, але зараз не вдалося зберегти. Перевір вхід через Google або інтернет.");
    }
  };

  return (
    <>
      <PageHeader
        eyebrow="Tests"
        title="Quiz mit Auswahl"
        description="Тут не треба писати самому. Просто вибирай правильну відповідь і тренуй Fachwörter, артиклі, Druck та Fachgespräch."
        action={visibleResult ? <Badge tone={visibleResult.percent >= 80 ? "green" : "amber"}>{visibleResult.percent}%</Badge> : null}
      />

      <div className="grid gap-6 xl:grid-cols-[1fr_360px]">
        <Panel title="Fragen" description="Усі питання тільки з вибором. Відповіді збережуться як результат тесту у Firestore.">
          <div className="space-y-5">
            {quizQuestions.map((question, index) => (
              <div key={question.id} className="rounded-md border border-line p-4 dark:border-neutral-800">
                <div className="mb-3 flex flex-wrap items-center gap-2">
                  <Badge>{question.type}</Badge>
                  <p className="text-sm font-semibold">{index + 1}. {question.question}</p>
                </div>
                <div className="grid gap-2">
                  {question.options.map((option, optionIndex) => {
                    const selected = answers[question.id] === option;
                    return (
                      <label
                        key={option}
                        className={`flex cursor-pointer items-start gap-3 rounded-md border p-3 text-sm transition ${
                          selected
                            ? "border-brand-500 bg-brand-50 text-brand-900 dark:border-brand-500 dark:bg-brand-700/20 dark:text-brand-50"
                            : "border-line hover:border-brand-300 hover:bg-neutral-50 dark:border-neutral-800 dark:hover:border-brand-700 dark:hover:bg-neutral-900"
                        }`}
                      >
                        <input
                          type="radio"
                          name={question.id}
                          value={option}
                          checked={selected}
                          onChange={(event) => {
                            setAnswers({ ...answers, [question.id]: event.target.value });
                            setNotice("");
                            setSaveError(false);
                          }}
                          className="mt-1 accent-brand-600"
                        />
                        <span className="font-semibold">{String.fromCharCode(65 + optionIndex)}.</span>
                        <span>{option}</span>
                      </label>
                    );
                  })}
                </div>
                <p className="mt-3 text-xs text-neutral-500 dark:text-neutral-400">{question.help}</p>
              </div>
            ))}
            <button type="button" onClick={() => void submitQuiz()} className="rounded-md bg-brand-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-brand-700">
              Test prüfen
            </button>
            {notice ? (
              <p
                className={`rounded-md border p-3 text-sm ${
                  saveError
                    ? "border-red-200 bg-red-50 text-red-700 dark:border-red-900/60 dark:bg-red-950 dark:text-red-200"
                    : "border-line bg-neutral-50 text-neutral-600 dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-300"
                }`}
              >
                {notice}
              </p>
            ) : null}
          </div>
        </Panel>

        <Panel title="Ergebnis">
          {visibleResult ? (
            <div>
              <p className="text-4xl font-semibold">{visibleResult.percent}%</p>
              <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">
                {visibleResult.score} richtige Antworten von {visibleResult.total}.
              </p>
              {visibleResult.mistakes.length ? (
                <div className="mt-5">
                  <h3 className="text-sm font-semibold">Wiederholen:</h3>
                  <ul className="mt-2 space-y-2 text-sm text-neutral-600 dark:text-neutral-300">
                    {visibleResult.mistakes.map((mistake) => (
                      <li key={mistake} className="rounded-md border border-line p-3 dark:border-neutral-800">
                        {mistake}
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <p className="mt-4 text-sm text-brand-700 dark:text-brand-100">Sehr gut. Module 1 ist schon deutlich sicherer.</p>
              )}
            </div>
          ) : (
            <p className="text-sm text-neutral-500 dark:text-neutral-400">Після проходження тесту тут з&apos;явиться результат і помилки.</p>
          )}
        </Panel>
      </div>
    </>
  );
}

function normalize(value: string) {
  return value.trim().toLowerCase().replace(/\s+/g, " ");
}
