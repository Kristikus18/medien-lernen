"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Check, Pencil, Plus, Search, Trash2 } from "lucide-react";
import { useCallback, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Badge, EmptyState, PageHeader, Panel, inputClass } from "@/components/shared/ui";
import { useAuth } from "@/lib/auth";
import { removeUserDocument, saveUserDocument, subscribeUserCollection } from "@/lib/firestore";
import { useConfirm, useSnapshotSubscription } from "@/lib/hooks";
import type { StudyStatus, VocabularyWord } from "@/lib/types";

const statuses: StudyStatus[] = ["Neu", "Lernen", "Unsicher", "Gelernt"];

const wordSchema = z.object({
  german: z.string().min(2, "Німецьке слово потрібне."),
  article: z.string().min(1, "Артикль потрібний."),
  plural: z.string().min(1, "Множина потрібна."),
  ukrainian: z.string().min(2, "Переклад потрібний."),
  english: z.string().min(2, "English translation потрібний."),
  simpleGerman: z.string().min(8, "Додай просте пояснення німецькою."),
  exampleGerman: z.string().min(8, "Додай приклад речення."),
  exampleUkrainian: z.string().min(4, "Додай переклад прикладу."),
  category: z.string().min(2),
  difficulty: z.enum(["A1", "A2", "B1", "B2"]),
  status: z.enum(["Neu", "Lernen", "Unsicher", "Gelernt"]),
  ownSentence: z.string().optional()
});

type WordFormValues = z.infer<typeof wordSchema>;

const defaultForm: WordFormValues = {
  german: "",
  article: "die",
  plural: "",
  ukrainian: "",
  english: "",
  simpleGerman: "",
  exampleGerman: "",
  exampleUkrainian: "",
  category: "Brand Identity",
  difficulty: "A2",
  status: "Neu",
  ownSentence: ""
};

export function VocabularyView() {
  const { user } = useAuth();
  const userId = user?.uid ?? "";
  const [query, setQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<StudyStatus | "Alle">("Alle");
  const [categoryFilter, setCategoryFilter] = useState("Alle");
  const [editingId, setEditingId] = useState<string | null>(null);
  const [flashcardIndex, setFlashcardIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const confirm = useConfirm();

  const subscribe = useCallback(
    (onData: (items: VocabularyWord[]) => void, onError: (error: Error) => void) =>
      subscribeUserCollection<VocabularyWord>(userId, "vocabulary", onData, onError),
    [userId]
  );
  const { items: words, loading } = useSnapshotSubscription(subscribe, [subscribe]);

  const categories = useMemo(() => ["Alle", ...Array.from(new Set(words.map((word) => word.category))).sort()], [words]);
  const filteredWords = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    return words
      .filter((word) => (statusFilter === "Alle" ? true : word.status === statusFilter))
      .filter((word) => (categoryFilter === "Alle" ? true : word.category === categoryFilter))
      .filter((word) =>
        normalized
          ? [word.german, word.ukrainian, word.english, word.simpleGerman, word.category]
              .join(" ")
              .toLowerCase()
              .includes(normalized)
          : true
      )
      .sort((first, second) => first.german.localeCompare(second.german, "de"));
  }, [categoryFilter, query, statusFilter, words]);

  const flashcard = filteredWords[flashcardIndex % Math.max(filteredWords.length, 1)];
  const learned = words.filter((word) => word.status === "Gelernt").length;

  const form = useForm<WordFormValues>({
    resolver: zodResolver(wordSchema),
    defaultValues: defaultForm
  });

  const onSubmit = async (values: WordFormValues) => {
    const id = editingId ?? values.german.toLowerCase().replace(/[^a-z0-9äöüß-]/gi, "-");
    await saveUserDocument<VocabularyWord>(userId, "vocabulary", id, {
      id,
      ...values,
      moduleId: "module-1",
      lastReviewedAt: new Date().toISOString()
    });
    setEditingId(null);
    form.reset(defaultForm);
  };

  const editWord = (word: VocabularyWord) => {
    setEditingId(word.id);
    form.reset({
      german: word.german,
      article: word.article,
      plural: word.plural,
      ukrainian: word.ukrainian,
      english: word.english,
      simpleGerman: word.simpleGerman,
      exampleGerman: word.exampleGerman,
      exampleUkrainian: word.exampleUkrainian,
      category: word.category,
      difficulty: word.difficulty,
      status: word.status,
      ownSentence: word.ownSentence ?? ""
    });
  };

  const markLearned = async (word: VocabularyWord) => {
    await saveUserDocument<VocabularyWord>(userId, "vocabulary", word.id, {
      ...word,
      status: "Gelernt",
      lastReviewedAt: new Date().toISOString()
    });
  };

  const deleteWord = async (word: VocabularyWord) => {
    if (confirm(`Видалити слово ${word.article} ${word.german}?`)) {
      await removeUserDocument(userId, "vocabulary", word.id);
    }
  };

  return (
    <>
      <PageHeader
        eyebrow="Fachwörter"
        title="Професійна лексика"
        description="Слова для LAP і реальної роботи: артикль, множина, просте пояснення німецькою, приклад, переклад і власне речення."
        action={<Badge tone="green">{learned}/{words.length || 40} gelernt</Badge>}
      />

      <div className="grid gap-6 xl:grid-cols-[380px_1fr]">
        <Panel title={editingId ? "Редагувати слово" : "Додати слово"} description="React Hook Form + Zod перевіряють, щоб важливі поля не були порожні.">
          <form className="space-y-3" onSubmit={form.handleSubmit(onSubmit)}>
            <div className="grid grid-cols-[88px_1fr] gap-2">
              <Field label="Artikel" error={form.formState.errors.article?.message}>
                <input {...form.register("article")} className={inputClass} />
              </Field>
              <Field label="Deutsch" error={form.formState.errors.german?.message}>
                <input {...form.register("german")} className={inputClass} />
              </Field>
            </div>
            <Field label="Plural" error={form.formState.errors.plural?.message}>
              <input {...form.register("plural")} className={inputClass} />
            </Field>
            <Field label="Українська" error={form.formState.errors.ukrainian?.message}>
              <input {...form.register("ukrainian")} className={inputClass} />
            </Field>
            <Field label="English" error={form.formState.errors.english?.message}>
              <input {...form.register("english")} className={inputClass} />
            </Field>
            <Field label="Einfache Bedeutung" error={form.formState.errors.simpleGerman?.message}>
              <textarea {...form.register("simpleGerman")} rows={3} className={inputClass} />
            </Field>
            <Field label="Beispielsatz" error={form.formState.errors.exampleGerman?.message}>
              <textarea {...form.register("exampleGerman")} rows={2} className={inputClass} />
            </Field>
            <Field label="Переклад прикладу" error={form.formState.errors.exampleUkrainian?.message}>
              <textarea {...form.register("exampleUkrainian")} rows={2} className={inputClass} />
            </Field>
            <div className="grid grid-cols-2 gap-2">
              <Field label="Kategorie">
                <input {...form.register("category")} className={inputClass} />
              </Field>
              <Field label="Niveau">
                <select {...form.register("difficulty")} className={inputClass}>
                  <option>A1</option>
                  <option>A2</option>
                  <option>B1</option>
                  <option>B2</option>
                </select>
              </Field>
            </div>
            <Field label="Status">
              <select {...form.register("status")} className={inputClass}>
                {statuses.map((status) => (
                  <option key={status}>{status}</option>
                ))}
              </select>
            </Field>
            <Field label="Моє речення">
              <textarea {...form.register("ownSentence")} rows={2} className={inputClass} />
            </Field>
            <button type="submit" className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-brand-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-brand-700">
              <Plus size={16} aria-hidden="true" />
              {editingId ? "Зберегти зміни" : "Додати слово"}
            </button>
          </form>
        </Panel>

        <div className="space-y-6">
          <Panel title="Пошук і фільтри">
            <div className="grid gap-3 md:grid-cols-[1fr_180px_180px]">
              <label className="relative">
                <Search className="pointer-events-none absolute left-3 top-2.5 h-4 w-4 text-neutral-400" aria-hidden="true" />
                <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Пошук слова..." className={`${inputClass} pl-9`} />
              </label>
              <select value={statusFilter} onChange={(event) => setStatusFilter(event.target.value as StudyStatus | "Alle")} className={inputClass}>
                <option>Alle</option>
                {statuses.map((status) => (
                  <option key={status}>{status}</option>
                ))}
              </select>
              <select value={categoryFilter} onChange={(event) => setCategoryFilter(event.target.value)} className={inputClass}>
                {categories.map((category) => (
                  <option key={category}>{category}</option>
                ))}
              </select>
            </div>
          </Panel>

          <Panel title="Flashcards" description="Короткий режим повторення перед Fachgespräch.">
            {flashcard ? (
              <div className="rounded-md border border-line p-5 dark:border-neutral-800">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm text-neutral-500 dark:text-neutral-400">Karte {Math.min(flashcardIndex + 1, filteredWords.length)} / {filteredWords.length}</p>
                    <h2 className="mt-2 text-2xl font-semibold">{flashcard.article} {flashcard.german}</h2>
                  </div>
                  <Badge>{flashcard.status}</Badge>
                </div>
                {showAnswer ? (
                  <div className="mt-4 space-y-2 text-sm">
                    <p><strong>UA:</strong> {flashcard.ukrainian}</p>
                    <p><strong>EN:</strong> {flashcard.english}</p>
                    <p><strong>DE einfach:</strong> {flashcard.simpleGerman}</p>
                    <p><strong>Beispiel:</strong> {flashcard.exampleGerman}</p>
                  </div>
                ) : (
                  <p className="mt-4 text-sm text-neutral-500 dark:text-neutral-400">Спробуй сама пояснити слово німецькою, потім відкрий відповідь.</p>
                )}
                <div className="mt-5 flex flex-wrap gap-2">
                  <button type="button" onClick={() => setShowAnswer((value) => !value)} className="rounded-md border border-line px-3 py-2 text-sm dark:border-neutral-800">
                    {showAnswer ? "Сховати відповідь" : "Показати відповідь"}
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setShowAnswer(false);
                      setFlashcardIndex((value) => (value + 1) % Math.max(filteredWords.length, 1));
                    }}
                    className="rounded-md bg-brand-600 px-3 py-2 text-sm font-semibold text-white"
                  >
                    Наступна картка
                  </button>
                </div>
              </div>
            ) : (
              <EmptyState title="Немає слів" description="Зміни фільтр або додай нове слово." />
            )}
          </Panel>

          <Panel title="Список слів" description={loading ? "Завантаження..." : `${filteredWords.length} слів знайдено`}>
            <div className="grid gap-3">
              {filteredWords.map((word) => (
                <article key={word.id} className="rounded-md border border-line p-4 dark:border-neutral-800">
                  <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="text-lg font-semibold">{word.article} {word.german}</h3>
                        <Badge tone={word.status === "Gelernt" ? "green" : word.status === "Unsicher" ? "red" : word.status === "Lernen" ? "amber" : "neutral"}>{word.status}</Badge>
                        <Badge>{word.category}</Badge>
                      </div>
                      <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">{word.simpleGerman}</p>
                      <dl className="mt-3 grid gap-2 text-sm md:grid-cols-3">
                        <Info label="Plural" value={word.plural} />
                        <Info label="UA" value={word.ukrainian} />
                        <Info label="EN" value={word.english} />
                      </dl>
                      <p className="mt-3 text-sm"><strong>Beispiel:</strong> {word.exampleGerman}</p>
                      <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">{word.exampleUkrainian}</p>
                      {word.ownSentence ? <p className="mt-2 text-sm"><strong>Mein Satz:</strong> {word.ownSentence}</p> : null}
                    </div>
                    <div className="flex gap-2 md:flex-col">
                      <button type="button" onClick={() => void markLearned(word)} className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-line text-brand-700 dark:border-neutral-800 dark:text-brand-100" aria-label="Mark learned">
                        <Check size={16} aria-hidden="true" />
                      </button>
                      <button type="button" onClick={() => editWord(word)} className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-line dark:border-neutral-800" aria-label="Edit word">
                        <Pencil size={16} aria-hidden="true" />
                      </button>
                      <button type="button" onClick={() => void deleteWord(word)} className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-line text-red-600 dark:border-neutral-800" aria-label="Delete word">
                        <Trash2 size={16} aria-hidden="true" />
                      </button>
                    </div>
                  </div>
                </article>
              ))}
              {!filteredWords.length ? <EmptyState title="Нічого не знайдено" description="Спробуй інший пошук або фільтр." /> : null}
            </div>
          </Panel>
        </div>
      </div>
    </>
  );
}

function Field({ label, children, error }: { label: string; children: React.ReactNode; error?: string }) {
  return (
    <label className="block">
      <span className="mb-1 block text-sm font-medium">{label}</span>
      {children}
      {error ? <span className="mt-1 block text-xs text-red-600">{error}</span> : null}
    </label>
  );
}

function Info({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-xs font-semibold uppercase tracking-normal text-neutral-400">{label}</dt>
      <dd>{value}</dd>
    </div>
  );
}
