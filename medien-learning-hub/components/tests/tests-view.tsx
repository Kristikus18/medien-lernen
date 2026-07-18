"use client";

import { useState } from "react";
import { quizQuestions } from "@/data/modules";
import { Badge, PageHeader, Panel, inputClass } from "@/components/shared/ui";
import { useAuth } from "@/lib/auth";
import { saveUserDocument } from "@/lib/firestore";
import type { QuizResult } from "@/lib/types";

export function TestsView() {
  const { user } = useAuth();
  const userId = user?.uid ?? "";
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [result, setResult] = useState<QuizResult | null>(null);

  const submitQuiz = async () => {
    const mistakes: string[] = [];
    let score = 0;

    quizQuestions.forEach((question) => {
      const answer = normalize(answers[question.id] ?? "");
      const expected = normalize(question.answer);
      const isCorrect = question.type === "short" ? expected.split(" ").some((part) => answer.includes(part)) : answer === expected;

      if (isCorrect) {
        score += 1;
      } else {
        mistakes.push(`${question.question} - richtig: ${question.answer}`);
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

    await saveUserDocument<QuizResult>(userId, "quizResults", nextResult.id, nextResult);
    setResult(nextResult);
  };

  return (
    <>
      <PageHeader
        eyebrow="Tests"
        title="Quiz für Module 1"
        description="Тест тренує Fachwörter, артиклі, переклад і прості відповіді для Fachgespräch."
        action={result ? <Badge tone={result.percent >= 80 ? "green" : "amber"}>{result.percent}%</Badge> : null}
      />

      <div className="grid gap-6 xl:grid-cols-[1fr_360px]">
        <Panel title="Fragen" description="Відповіді збережуться як результат тесту у Firestore.">
          <div className="space-y-5">
            {quizQuestions.map((question, index) => (
              <div key={question.id} className="rounded-md border border-line p-4 dark:border-neutral-800">
                <div className="mb-3 flex flex-wrap items-center gap-2">
                  <Badge>{question.type}</Badge>
                  <p className="text-sm font-semibold">{index + 1}. {question.question}</p>
                </div>
                {question.options ? (
                  <div className="grid gap-2">
                    {question.options.map((option) => (
                      <label key={option} className="flex items-center gap-2 rounded-md border border-line p-3 text-sm dark:border-neutral-800">
                        <input
                          type="radio"
                          name={question.id}
                          value={option}
                          checked={answers[question.id] === option}
                          onChange={(event) => setAnswers({ ...answers, [question.id]: event.target.value })}
                          className="accent-brand-600"
                        />
                        {option}
                      </label>
                    ))}
                  </div>
                ) : question.type === "trueFalse" ? (
                  <select value={answers[question.id] ?? ""} onChange={(event) => setAnswers({ ...answers, [question.id]: event.target.value })} className={inputClass}>
                    <option value="">Bitte wählen</option>
                    <option value="richtig">richtig</option>
                    <option value="falsch">falsch</option>
                  </select>
                ) : (
                  <input
                    value={answers[question.id] ?? ""}
                    onChange={(event) => setAnswers({ ...answers, [question.id]: event.target.value })}
                    placeholder="Antwort..."
                    className={inputClass}
                  />
                )}
                <p className="mt-3 text-xs text-neutral-500 dark:text-neutral-400">{question.help}</p>
              </div>
            ))}
            <button type="button" onClick={() => void submitQuiz()} className="rounded-md bg-brand-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-brand-700">
              Test prüfen
            </button>
          </div>
        </Panel>

        <Panel title="Ergebnis">
          {result ? (
            <div>
              <p className="text-4xl font-semibold">{result.percent}%</p>
              <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">
                {result.score} richtige Antworten von {result.total}.
              </p>
              {result.mistakes.length ? (
                <div className="mt-5">
                  <h3 className="text-sm font-semibold">Wiederholen:</h3>
                  <ul className="mt-2 space-y-2 text-sm text-neutral-600 dark:text-neutral-300">
                    {result.mistakes.map((mistake) => (
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
