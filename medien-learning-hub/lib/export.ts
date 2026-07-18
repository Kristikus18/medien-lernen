"use client";

import JSZip from "jszip";
import { jsPDF } from "jspdf";
import { collection, doc, getDoc, getDocs, serverTimestamp, writeBatch } from "firebase/firestore";
import { z } from "zod";
import { getFirebaseDb } from "@/lib/firebase";

const backupSchema = z.object({
  exportedAt: z.string(),
  collections: z.record(z.array(z.record(z.unknown())))
});

const exportCollections = [
  "modules",
  "vocabulary",
  "phrases",
  "notes",
  "timeEntries",
  "quizResults",
  "files",
  "selfAssessments"
];

export async function exportUserBackup(userId: string) {
  const db = getFirebaseDb();
  const collections: Record<string, Record<string, unknown>[]> = {};

  for (const collectionName of exportCollections) {
    const snapshot = await getDocs(collection(db, "users", userId, collectionName));
    collections[collectionName] = snapshot.docs.map((item) => ({
      id: item.id,
      ...item.data()
    }));
  }

  return JSON.stringify({ exportedAt: new Date().toISOString(), collections }, null, 2);
}

export async function importUserBackup(userId: string, rawJson: string) {
  const parsed = backupSchema.parse(JSON.parse(rawJson));
  const db = getFirebaseDb();
  const batch = writeBatch(db);

  Object.entries(parsed.collections).forEach(([collectionName, items]) => {
    items.forEach((item) => {
      const id = typeof item.id === "string" ? item.id : crypto.randomUUID();
      batch.set(
        doc(db, "users", userId, collectionName, id),
        {
          ...item,
          id,
          userId,
          updatedAt: serverTimestamp()
        },
        { merge: true }
      );
    });
  });

  await batch.commit();
}

export function downloadTextFile(fileName: string, content: string, type: string) {
  const blob = new Blob([content], { type });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = fileName;
  anchor.click();
  URL.revokeObjectURL(url);
}

export function toVocabularyCsv(rows: Array<Record<string, unknown>>) {
  const headers = [
    "german",
    "article",
    "plural",
    "ukrainian",
    "english",
    "simpleGerman",
    "status",
    "category"
  ];
  const escapeCell = (value: unknown) => `"${String(value ?? "").replace(/"/g, '""')}"`;
  return [headers.join(","), ...rows.map((row) => headers.map((header) => escapeCell(row[header])).join(","))].join("\n");
}

export async function exportModulePdf(userId: string, moduleId: string) {
  const db = getFirebaseDb();
  const moduleSnapshot = await getDoc(doc(db, "users", userId, "modules", moduleId));
  const data = moduleSnapshot.data();
  const pdf = new jsPDF();

  pdf.setFontSize(18);
  pdf.text("Medienfachfrau Learning Hub", 16, 20);
  pdf.setFontSize(12);
  pdf.text(`Module: ${String(data?.title ?? moduleId)}`, 16, 34);
  pdf.text(`Progress: ${String(data?.progress ?? 0)}%`, 16, 44);
  pdf.text("Reflection:", 16, 58);
  pdf.text(String(data?.learned ?? "Noch keine Reflexion."), 16, 68, { maxWidth: 180 });

  pdf.save(`${moduleId}-progress.pdf`);
}

export async function createProjectZip(userId: string) {
  const db = getFirebaseDb();
  const zip = new JSZip();
  const filesSnapshot = await getDocs(collection(db, "users", userId, "files"));
  const files = filesSnapshot.docs.map((item) => item.data());
  zip.file("project-files.json", JSON.stringify(files, null, 2));
  zip.file("README.txt", "This ZIP contains the file metadata from Medienfachfrau Learning Hub.");
  const blob = await zip.generateAsync({ type: "blob" });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = "medien-project-package.zip";
  anchor.click();
  URL.revokeObjectURL(url);
}
