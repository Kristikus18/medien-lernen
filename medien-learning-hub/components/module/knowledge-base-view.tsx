"use client";

import { Plus, Search, Trash2 } from "lucide-react";
import { useCallback, useMemo, useState } from "react";
import { EmptyState, PageHeader, Panel, inputClass } from "@/components/shared/ui";
import { useAuth } from "@/lib/auth";
import { removeUserDocument, saveUserDocument, subscribeUserCollection } from "@/lib/firestore";
import { useConfirm, useSnapshotSubscription } from "@/lib/hooks";
import type { NoteItem } from "@/lib/types";

export function KnowledgeBaseView() {
  const { user } = useAuth();
  const userId = user?.uid ?? "";
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("Theory");
  const [tags, setTags] = useState("");
  const [search, setSearch] = useState("");
  const confirm = useConfirm();

  const subscribe = useCallback(
    (onData: (items: NoteItem[]) => void, onError: (error: Error) => void) =>
      subscribeUserCollection<NoteItem>(userId, "notes", onData, onError),
    [userId]
  );
  const { items: notes } = useSnapshotSubscription(subscribe, [subscribe]);

  const filteredNotes = useMemo(() => {
    const normalized = search.toLowerCase();
    return notes.filter((note) => [note.title, note.content, note.category, note.tags.join(" ")].join(" ").toLowerCase().includes(normalized));
  }, [notes, search]);

  const addNote = async () => {
    if (!title.trim()) {
      return;
    }
    const id = crypto.randomUUID();
    await saveUserDocument<NoteItem>(userId, "notes", id, {
      id,
      title,
      content,
      category,
      tags: tags.split(",").map((tag) => tag.trim()).filter(Boolean)
    });
    setTitle("");
    setContent("");
    setTags("");
  };

  const deleteNote = async (note: NoteItem) => {
    if (confirm(`Видалити нотатку "${note.title}"?`)) {
      await removeUserDocument(userId, "notes", note.id);
    }
  };

  return (
    <>
      <PageHeader
        eyebrow="Knowledge Base"
        title="Нотатки"
        description="Окрема база знань для теорії, фраз, посилань, чек-листів і власних пояснень. Можна писати списки, чек-листи та посилання у Markdown-стилі."
      />

      <div className="grid gap-6 xl:grid-cols-[380px_1fr]">
        <Panel title="Нова нотатка">
          <div className="space-y-3">
            <input value={title} onChange={(event) => setTitle(event.target.value)} placeholder="Заголовок" className={inputClass} />
            <select value={category} onChange={(event) => setCategory(event.target.value)} className={inputClass}>
              <option>Theory</option>
              <option>Fachwörter</option>
              <option>Project</option>
              <option>WordPress</option>
              <option>Portfolio</option>
            </select>
            <input value={tags} onChange={(event) => setTags(event.target.value)} placeholder="Теги через кому" className={inputClass} />
            <textarea
              value={content}
              onChange={(event) => setContent(event.target.value)}
              rows={8}
              placeholder="- список&#10;- [ ] чек-лист&#10;https://..."
              className={inputClass}
            />
            <button type="button" onClick={() => void addNote()} className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-brand-600 px-4 py-2.5 text-sm font-semibold text-white">
              <Plus size={16} aria-hidden="true" />
              Додати нотатку
            </button>
          </div>
        </Panel>

        <Panel title="Мої нотатки">
          <label className="relative mb-4 block">
            <Search className="pointer-events-none absolute left-3 top-2.5 h-4 w-4 text-neutral-400" aria-hidden="true" />
            <input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Пошук..." className={`${inputClass} pl-9`} />
          </label>
          <div className="grid gap-3">
            {filteredNotes.map((note) => (
              <article key={note.id} className="rounded-md border border-line p-4 dark:border-neutral-800">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="font-semibold">{note.title}</p>
                    <p className="mt-1 text-xs text-neutral-500 dark:text-neutral-400">{note.category} - {note.tags.join(", ")}</p>
                  </div>
                  <button type="button" onClick={() => void deleteNote(note)} className="text-red-600" aria-label="Delete note">
                    <Trash2 size={16} aria-hidden="true" />
                  </button>
                </div>
                <pre className="mt-3 whitespace-pre-wrap font-sans text-sm text-neutral-700 dark:text-neutral-300">{note.content}</pre>
              </article>
            ))}
            {!filteredNotes.length ? <EmptyState title="Нотаток ще немає" description="Додай першу нотатку з теорією або фразами для іспиту." /> : null}
          </div>
        </Panel>
      </div>
    </>
  );
}
