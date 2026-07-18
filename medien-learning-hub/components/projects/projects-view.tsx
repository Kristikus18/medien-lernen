"use client";

import { Download, FileUp, Link2, Plus, Trash2 } from "lucide-react";
import { useCallback, useState } from "react";
import { Badge, EmptyState, PageHeader, Panel, inputClass } from "@/components/shared/ui";
import { useAuth } from "@/lib/auth";
import { deleteProjectFile, uploadProjectFile } from "@/lib/storage";
import { removeUserDocument, saveUserDocument, subscribeUserCollection } from "@/lib/firestore";
import { useConfirm, useSnapshotSubscription } from "@/lib/hooks";
import type { MoodboardItem, ProjectFile, ResearchCompetitor } from "@/lib/types";

const emptyCompetitor: ResearchCompetitor = {
  id: "",
  name: "",
  link: "",
  logo: "",
  colors: "",
  fonts: "",
  targetGroup: "",
  likes: "",
  dislikes: "",
  inspiration: "",
  difference: ""
};

const fileUploadsEnabled = process.env.NEXT_PUBLIC_ENABLE_FILE_UPLOADS === "true";

export function ProjectsView() {
  const { user } = useAuth();
  const userId = user?.uid ?? "";
  const [competitor, setCompetitor] = useState(emptyCompetitor);
  const [moodboardValue, setMoodboardValue] = useState("");
  const [moodboardType, setMoodboardType] = useState<MoodboardItem["type"]>("note");
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploadError, setUploadError] = useState<string | null>(null);
  const confirm = useConfirm();

  const competitorSubscribe = useCallback(
    (onData: (items: ResearchCompetitor[]) => void, onError: (error: Error) => void) =>
      subscribeUserCollection<ResearchCompetitor>(userId, "competitors", onData, onError),
    [userId]
  );
  const moodboardSubscribe = useCallback(
    (onData: (items: MoodboardItem[]) => void, onError: (error: Error) => void) =>
      subscribeUserCollection<MoodboardItem>(userId, "moodboard", onData, onError),
    [userId]
  );
  const filesSubscribe = useCallback(
    (onData: (items: ProjectFile[]) => void, onError: (error: Error) => void) =>
      subscribeUserCollection<ProjectFile>(userId, "files", onData, onError),
    [userId]
  );

  const { items: competitors } = useSnapshotSubscription(competitorSubscribe, [competitorSubscribe]);
  const { items: moodboard } = useSnapshotSubscription(moodboardSubscribe, [moodboardSubscribe]);
  const { items: files } = useSnapshotSubscription(filesSubscribe, [filesSubscribe]);

  const addCompetitor = async () => {
    if (!competitor.name.trim()) {
      return;
    }
    const id = competitor.id || crypto.randomUUID();
    await saveUserDocument<ResearchCompetitor>(userId, "competitors", id, {
      ...competitor,
      id
    });
    setCompetitor(emptyCompetitor);
  };

  const addMoodboardItem = async () => {
    if (!moodboardValue.trim()) {
      return;
    }
    const id = crypto.randomUUID();
    await saveUserDocument<MoodboardItem>(userId, "moodboard", id, {
      id,
      type: moodboardType,
      title: moodboardType === "color" ? "Color" : moodboardType === "font" ? "Font" : "Moodboard item",
      value: moodboardValue,
      order: moodboard.length + 1
    });
    setMoodboardValue("");
  };

  const onUpload = async (fileList: FileList | null) => {
    const file = fileList?.[0];
    if (!file) {
      return;
    }
    if (!fileUploadsEnabled) {
      setUploadError("Upload вимкнено, бо Firebase Storage потребує тариф Blaze. Поки зберігай посилання у Moodboard.");
      return;
    }
    setUploadError(null);
    setUploadProgress(0);
    try {
      const uploaded = await uploadProjectFile(userId, "module-1", file, setUploadProgress);
      const id = crypto.randomUUID();
      await saveUserDocument<ProjectFile>(userId, "files", id, {
        id,
        name: file.name,
        type: file.type || file.name.split(".").pop() || "file",
        size: file.size,
        moduleId: "module-1",
        downloadUrl: uploaded.downloadUrl,
        storagePath: uploaded.storagePath
      });
    } catch (error) {
      setUploadError(error instanceof Error ? error.message : "Файл не вдалося завантажити.");
    }
  };

  const removeFile = async (file: ProjectFile) => {
    if (!confirm(`Видалити файл ${file.name}?`)) {
      return;
    }
    if (fileUploadsEnabled) {
      await deleteProjectFile(file.storagePath);
    }
    await removeUserDocument(userId, "files", file.id);
  };

  return (
    <>
      <PageHeader
        eyebrow="Projects"
        title="Lune Bakery Project Workspace"
        description="Тут збираються всі матеріали клієнтського проєкту: аналіз конкурентів, moodboard, ескізи, PDF, SVG, ZIP, AI/EPS файли та робочі нотатки."
        action={<Badge tone="blue">Module 1</Badge>}
      />

      <div className="grid gap-6 xl:grid-cols-[420px_1fr]">
        <div className="space-y-6">
          <Panel title="Konkurrenzanalyse" description="Додай необмежену кількість конкурентів.">
            <div className="space-y-3">
              <input className={inputClass} placeholder="Назва конкурента" value={competitor.name} onChange={(event) => setCompetitor({ ...competitor, name: event.target.value })} />
              <input className={inputClass} placeholder="Посилання" value={competitor.link} onChange={(event) => setCompetitor({ ...competitor, link: event.target.value })} />
              <input className={inputClass} placeholder="Логотип / опис" value={competitor.logo} onChange={(event) => setCompetitor({ ...competitor, logo: event.target.value })} />
              <div className="grid grid-cols-2 gap-2">
                <input className={inputClass} placeholder="Кольори" value={competitor.colors} onChange={(event) => setCompetitor({ ...competitor, colors: event.target.value })} />
                <input className={inputClass} placeholder="Шрифти" value={competitor.fonts} onChange={(event) => setCompetitor({ ...competitor, fonts: event.target.value })} />
              </div>
              <textarea className={inputClass} rows={2} placeholder="Цільова аудиторія" value={competitor.targetGroup} onChange={(event) => setCompetitor({ ...competitor, targetGroup: event.target.value })} />
              <textarea className={inputClass} rows={2} placeholder="Що подобається" value={competitor.likes} onChange={(event) => setCompetitor({ ...competitor, likes: event.target.value })} />
              <textarea className={inputClass} rows={2} placeholder="Що не подобається" value={competitor.dislikes} onChange={(event) => setCompetitor({ ...competitor, dislikes: event.target.value })} />
              <textarea className={inputClass} rows={2} placeholder="Ідея для натхнення" value={competitor.inspiration} onChange={(event) => setCompetitor({ ...competitor, inspiration: event.target.value })} />
              <textarea className={inputClass} rows={2} placeholder="Чим мій бренд буде відрізнятися" value={competitor.difference} onChange={(event) => setCompetitor({ ...competitor, difference: event.target.value })} />
              <button type="button" onClick={() => void addCompetitor()} className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-brand-600 px-4 py-2.5 text-sm font-semibold text-white">
                <Plus size={16} aria-hidden="true" />
                Додати конкурента
              </button>
            </div>
          </Panel>

          <Panel title="Upload Sketches & Files" description="PDF, JPG, PNG, SVG, ZIP, AI та EPS до 25 MB.">
            {fileUploadsEnabled ? (
              <label className="flex cursor-pointer flex-col items-center justify-center rounded-md border border-dashed border-line p-6 text-center dark:border-neutral-800">
                <FileUp className="mb-2 text-brand-600" aria-hidden="true" />
                <span className="text-sm font-semibold">Завантажити файл</span>
                <span className="mt-1 text-xs text-neutral-500">Firebase Storage</span>
                <input type="file" className="hidden" onChange={(event) => void onUpload(event.target.files)} />
              </label>
            ) : (
              <div className="flex flex-col items-center justify-center rounded-md border border-dashed border-line bg-neutral-50 p-6 text-center text-neutral-500 dark:border-neutral-800 dark:bg-neutral-900/50">
                <FileUp className="mb-2 text-neutral-400" aria-hidden="true" />
                <span className="text-sm font-semibold text-neutral-700 dark:text-neutral-200">Upload вимкнено</span>
                <span className="mt-1 text-xs">Firebase Storage потребує тариф Blaze. Посилання можна зберігати у Moodboard.</span>
              </div>
            )}
            {uploadProgress > 0 ? (
              <div className="mt-3 h-2 overflow-hidden rounded-sm bg-neutral-200 dark:bg-neutral-800">
                <div className="h-full bg-brand-600" style={{ width: `${uploadProgress}%` }} />
              </div>
            ) : null}
            {uploadError ? <p className="mt-3 text-sm text-red-600">{uploadError}</p> : null}
          </Panel>
        </div>

        <div className="space-y-6">
          <Panel title="Competitors Table" description={`${competitors.length} competitors`}>
            {competitors.length ? (
              <div className="overflow-x-auto">
                <table className="min-w-full text-left text-sm">
                  <thead className="text-xs uppercase tracking-normal text-neutral-500">
                    <tr>
                      <th className="px-3 py-2">Name</th>
                      <th className="px-3 py-2">Colors</th>
                      <th className="px-3 py-2">Fonts</th>
                      <th className="px-3 py-2">Difference</th>
                      <th className="px-3 py-2">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {competitors.map((item) => (
                      <tr key={item.id} className="border-t border-line dark:border-neutral-800">
                        <td className="px-3 py-3 font-medium">
                          {item.link ? (
                            <a href={item.link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-brand-700 dark:text-brand-100">
                              {item.name}
                              <Link2 size={13} aria-hidden="true" />
                            </a>
                          ) : (
                            item.name
                          )}
                        </td>
                        <td className="px-3 py-3">{item.colors}</td>
                        <td className="px-3 py-3">{item.fonts}</td>
                        <td className="px-3 py-3">{item.difference}</td>
                        <td className="px-3 py-3">
                          <button type="button" onClick={() => void removeUserDocument(userId, "competitors", item.id)} className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-line text-red-600 dark:border-neutral-800" aria-label="Delete competitor">
                            <Trash2 size={15} aria-hidden="true" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <EmptyState title="Поки немає конкурентів" description="Додай перший приклад кав'ярні або пекарні для аналізу." />
            )}
          </Panel>

          <Panel title="Moodboard" description="Зображення можна завантажити як файли, а тут фіксувати посилання, кольори, шрифти і нотатки.">
            <div className="mb-4 grid gap-2 md:grid-cols-[160px_1fr_auto]">
              <select value={moodboardType} onChange={(event) => setMoodboardType(event.target.value as MoodboardItem["type"])} className={inputClass}>
                <option value="note">Note</option>
                <option value="link">Link</option>
                <option value="color">Color</option>
                <option value="font">Font</option>
              </select>
              <input value={moodboardValue} onChange={(event) => setMoodboardValue(event.target.value)} className={inputClass} placeholder="Наприклад #C98F55 або https://..." />
              <button type="button" onClick={() => void addMoodboardItem()} className="rounded-md bg-brand-600 px-4 py-2 text-sm font-semibold text-white">Додати</button>
            </div>
            <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
              {moodboard.map((item) => (
                <div key={item.id} className="rounded-md border border-line p-3 dark:border-neutral-800">
                  <div className="mb-2 flex items-center justify-between gap-2">
                    <Badge>{item.type}</Badge>
                    <button type="button" onClick={() => void removeUserDocument(userId, "moodboard", item.id)} className="text-red-600" aria-label="Delete moodboard item">
                      <Trash2 size={15} aria-hidden="true" />
                    </button>
                  </div>
                  {item.type === "color" ? <div className="mb-2 h-12 rounded-md border border-line dark:border-neutral-800" style={{ background: item.value }} /> : null}
                  <p className="break-words text-sm">{item.value}</p>
                </div>
              ))}
              {!moodboard.length ? <EmptyState title="Moodboard порожній" description="Додай колір, шрифт, посилання або нотатку." /> : null}
            </div>
          </Panel>

          <Panel title="Files" description={`${files.length} uploaded`}>
            <div className="grid gap-3">
              {files.map((file) => (
                <div key={file.id} className="flex flex-col gap-3 rounded-md border border-line p-3 dark:border-neutral-800 md:flex-row md:items-center md:justify-between">
                  <div>
                    <p className="font-medium">{file.name}</p>
                    <p className="text-xs text-neutral-500 dark:text-neutral-400">{file.type} - {formatBytes(file.size)}</p>
                  </div>
                  <div className="flex gap-2">
                    <a href={file.downloadUrl} target="_blank" rel="noreferrer" className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-line dark:border-neutral-800" aria-label="Download file">
                      <Download size={16} aria-hidden="true" />
                    </a>
                    <button type="button" onClick={() => void removeFile(file)} className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-line text-red-600 dark:border-neutral-800" aria-label="Delete file">
                      <Trash2 size={16} aria-hidden="true" />
                    </button>
                  </div>
                </div>
              ))}
              {!files.length ? <EmptyState title="Файлів ще немає" description="Завантаж ескіз, PDF або ZIP з клієнтським пакетом." /> : null}
            </div>
          </Panel>
        </div>
      </div>
    </>
  );
}

function formatBytes(bytes: number) {
  if (bytes < 1024) {
    return `${bytes} B`;
  }
  if (bytes < 1024 * 1024) {
    return `${Math.round(bytes / 1024)} KB`;
  }
  return `${(bytes / 1024 / 1024).toFixed(1)} MB`;
}
