"use client";

import { professionalPhrases } from "@/data/modules";
import { AutosaveTextarea } from "@/components/shared/autosave-textarea";
import { Badge, PageHeader, Panel } from "@/components/shared/ui";
import { useAuth } from "@/lib/auth";
import { saveUserDocument } from "@/lib/firestore";

const examQuestions = [
  {
    question: "Was ist der Unterschied zwischen RGB und CMYK?",
    answer:
      "RGB verwendet Licht und ist für digitale Medien. CMYK verwendet Druckfarben und ist für Printprodukte."
  },
  {
    question: "Warum sollte ein Logo als Vektorgrafik erstellt werden?",
    answer:
      "Eine Vektorgrafik kann ohne Qualitätsverlust vergrößert werden. Deshalb ist sie für Logos sehr gut geeignet."
  },
  {
    question: "Was ist eine Bild-Wort-Marke?",
    answer:
      "Eine Bild-Wort-Marke kombiniert ein Symbol mit Text, zum Beispiel ein Zeichen und den Markennamen."
  },
  {
    question: "Was muss man beim Export für den Kunden beachten?",
    answer:
      "Die Dateien müssen in passenden Formaten exportiert werden, zum Beispiel SVG und PNG für Web und PDF oder EPS für Print."
  }
];

const lapChecklist = [
  "Ich kann Designentscheidungen auf Deutsch begründen.",
  "Ich kann RGB, CMYK, Vektor und Rastergrafik erklären.",
  "Ich kann Druckdaten und Dateiformate nennen.",
  "Ich kann Kundenfeedback höflich beantworten.",
  "Ich kann mein Projekt strukturiert präsentieren."
];

export function BerufsschuleLapView() {
  const { user } = useAuth();
  const userId = user?.uid ?? "";

  return (
    <>
      <PageHeader
        eyebrow="Berufsschule / LAP"
        title="Fachgespräch Training"
        description="Короткі правильні речення німецькою, щоб не просто знати тему, а могти її сказати на іспиті."
        action={<Badge tone="amber">Deutsch aktiv üben</Badge>}
      />

      <div className="grid gap-6 xl:grid-cols-[1fr_380px]">
        <Panel title="Prüfungsfragen" description="Прості відповіді, які можна вивчити і сказати своїми словами.">
          <div className="space-y-4">
            {examQuestions.map((item) => (
              <article key={item.question} className="rounded-md border border-line p-4 dark:border-neutral-800">
                <p className="font-semibold">{item.question}</p>
                <p className="mt-2 text-sm text-neutral-700 dark:text-neutral-300">{item.answer}</p>
                <AutosaveTextarea
                  label="Meine Antwort"
                  initialValue=""
                  rows={2}
                  placeholder="Напиши свою просту відповідь німецькою."
                  onSave={(value) =>
                    saveUserDocument(userId, "lapAnswers", item.question.replace(/[^a-z0-9]/gi, "-"), {
                      id: item.question,
                      question: item.question,
                      answer: value,
                      moduleId: "module-1"
                    })
                  }
                />
              </article>
            ))}
          </div>
        </Panel>

        <div className="space-y-6">
          <Panel title="LAP Checklist">
            <ul className="space-y-2 text-sm">
              {lapChecklist.map((item) => (
                <li key={item} className="rounded-md border border-line p-3 dark:border-neutral-800">{item}</li>
              ))}
            </ul>
          </Panel>

          <Panel title="Professional Phrases">
            <div className="space-y-3">
              {professionalPhrases.map((phrase) => (
                <div key={phrase.id} className="rounded-md border border-line p-3 dark:border-neutral-800">
                  <Badge>{phrase.category}</Badge>
                  <p className="mt-2 text-sm font-semibold">{phrase.german}</p>
                  <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">{phrase.ukrainian}</p>
                  <p className="text-xs text-neutral-400">{phrase.english}</p>
                </div>
              ))}
            </div>
          </Panel>
        </div>
      </div>
    </>
  );
}
