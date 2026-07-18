"use client";

import { Download, Moon, Sun, Trash2, Upload } from "lucide-react";
import { collection, deleteDoc, doc, getDocs, writeBatch } from "firebase/firestore";
import { useState } from "react";
import { Badge, PageHeader, Panel, inputClass } from "@/components/shared/ui";
import { useTheme } from "@/components/providers";
import { useAuth } from "@/lib/auth";
import { getFirebaseDb } from "@/lib/firebase";
import {
  createProjectZip,
  downloadTextFile,
  exportModulePdf,
  exportUserBackup,
  importUserBackup,
  toVocabularyCsv
} from "@/lib/export";

export function SettingsView() {
  const { user, signOut } = useAuth();
  const { theme, setTheme } = useTheme();
  const userId = user?.uid ?? "";
  const [goal, setGoal] = useState("LAP bestehen und starkes Design-Portfolio aufbauen");
  const [weeklyHours, setWeeklyHours] = useState(5);
  const [message, setMessage] = useState<string | null>(null);

  const exportJson = async () => {
    const backup = await exportUserBackup(userId);
    downloadTextFile("medien-learning-hub-backup.json", backup, "application/json");
  };

  const exportCsv = async () => {
    const snapshot = await getDocs(collection(getFirebaseDb(), "users", userId, "vocabulary"));
    const csv = toVocabularyCsv(snapshot.docs.map((item) => item.data()));
    downloadTextFile("fachwoerter.csv", csv, "text/csv;charset=utf-8");
  };

  const importJson = async (fileList: FileList | null) => {
    const file = fileList?.[0];
    if (!file) {
      return;
    }
    try {
      await importUserBackup(userId, await file.text());
      setMessage("Імпорт завершено.");
    } catch {
      setMessage("Імпорт не вдався. Перевір, чи це правильний JSON backup.");
    }
  };

  const deleteAllData = async () => {
    const first = window.confirm("Видалити всі твої навчальні дані? Це не можна швидко відмінити.");
    if (!first) {
      return;
    }
    const second = window.prompt("Напиши DELETE, щоб підтвердити повне видалення.");
    if (second !== "DELETE") {
      return;
    }

    const db = getFirebaseDb();
    const collections = [
      "modules",
      "vocabulary",
      "phrases",
      "notes",
      "timeEntries",
      "quizResults",
      "files",
      "selfAssessments",
      "competitors",
      "moodboard"
    ];

    for (const collectionName of collections) {
      const snapshot = await getDocs(collection(db, "users", userId, collectionName));
      const batch = writeBatch(db);
      snapshot.docs.forEach((item) => batch.delete(item.ref));
      await batch.commit();
    }

    await deleteDoc(doc(db, "users", userId));
    await signOut();
  };

  return (
    <>
      <PageHeader
        eyebrow="Settings"
        title="Налаштування"
        description="Профіль, тема, навчальна ціль, експорт, імпорт і контроль даних."
        action={<Badge>{theme === "dark" ? "Dark" : "Light"}</Badge>}
      />

      <div className="grid gap-6 xl:grid-cols-[1fr_420px]">
        <Panel title="Profile">
          <div className="flex items-center gap-4">
            {user?.photoURL ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={user.photoURL} alt="" className="h-16 w-16 rounded-full" />
            ) : (
              <div className="h-16 w-16 rounded-full bg-brand-100" />
            )}
            <div>
              <p className="font-semibold">{user?.displayName}</p>
              <p className="text-sm text-neutral-500 dark:text-neutral-400">{user?.email}</p>
            </div>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <label>
              <span className="mb-1 block text-sm font-medium">Мова інтерфейсу</span>
              <select className={inputClass} defaultValue="uk">
                <option value="uk">Українська</option>
                <option value="de">Deutsch</option>
                <option value="en">English</option>
              </select>
            </label>
            <label>
              <span className="mb-1 block text-sm font-medium">Годин на тиждень</span>
              <input className={inputClass} value={weeklyHours} onChange={(event) => setWeeklyHours(Number(event.target.value) || 0)} inputMode="numeric" />
            </label>
          </div>

          <label className="mt-4 block">
            <span className="mb-1 block text-sm font-medium">Навчальна ціль</span>
            <textarea className={inputClass} rows={3} value={goal} onChange={(event) => setGoal(event.target.value)} />
          </label>

          <div className="mt-5 flex flex-wrap gap-2">
            <button type="button" onClick={() => setTheme("light")} className="inline-flex items-center gap-2 rounded-md border border-line px-3 py-2 text-sm dark:border-neutral-800">
              <Sun size={16} aria-hidden="true" />
              Light
            </button>
            <button type="button" onClick={() => setTheme("dark")} className="inline-flex items-center gap-2 rounded-md border border-line px-3 py-2 text-sm dark:border-neutral-800">
              <Moon size={16} aria-hidden="true" />
              Dark
            </button>
          </div>
        </Panel>

        <Panel title="Data">
          <div className="grid gap-3">
            <button type="button" onClick={() => void exportJson()} className="inline-flex items-center justify-center gap-2 rounded-md bg-brand-600 px-4 py-2.5 text-sm font-semibold text-white">
              <Download size={16} aria-hidden="true" />
              Export JSON backup
            </button>
            <button type="button" onClick={() => void exportCsv()} className="inline-flex items-center justify-center gap-2 rounded-md border border-line px-4 py-2.5 text-sm font-semibold dark:border-neutral-800">
              <Download size={16} aria-hidden="true" />
              Export Fachwörter CSV
            </button>
            <button type="button" onClick={() => void exportModulePdf(userId, "module-1")} className="inline-flex items-center justify-center gap-2 rounded-md border border-line px-4 py-2.5 text-sm font-semibold dark:border-neutral-800">
              <Download size={16} aria-hidden="true" />
              Export Module PDF
            </button>
            <button type="button" onClick={() => void createProjectZip(userId)} className="inline-flex items-center justify-center gap-2 rounded-md border border-line px-4 py-2.5 text-sm font-semibold dark:border-neutral-800">
              <Download size={16} aria-hidden="true" />
              Create Project ZIP
            </button>
            <label className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-md border border-line px-4 py-2.5 text-sm font-semibold dark:border-neutral-800">
              <Upload size={16} aria-hidden="true" />
              Import JSON backup
              <input type="file" accept="application/json" className="hidden" onChange={(event) => void importJson(event.target.files)} />
            </label>
            <button type="button" onClick={() => void deleteAllData()} className="inline-flex items-center justify-center gap-2 rounded-md border border-red-200 px-4 py-2.5 text-sm font-semibold text-red-700 dark:border-red-900 dark:text-red-200">
              <Trash2 size={16} aria-hidden="true" />
              Delete account data
            </button>
            {message ? <p className="text-sm text-neutral-600 dark:text-neutral-300">{message}</p> : null}
          </div>
        </Panel>
      </div>
    </>
  );
}
