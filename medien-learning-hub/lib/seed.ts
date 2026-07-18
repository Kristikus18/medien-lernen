"use client";

import { collection, doc, getDocs, serverTimestamp, setDoc, writeBatch } from "firebase/firestore";
import { moduleOneDeliverables, moduleOneQualityChecks, modules, seedVocabulary } from "@/data/modules";
import { getFirebaseDb } from "@/lib/firebase";

export async function ensureInitialUserData(userId: string) {
  const db = getFirebaseDb();
  const modulesRef = collection(db, "users", userId, "modules");
  const modulesSnapshot = await getDocs(modulesRef);

  if (modulesSnapshot.empty) {
    const batch = writeBatch(db);
    modules.forEach((module) => {
      batch.set(doc(db, "users", userId, "modules", module.id), {
        ...module,
        userId,
        checkedTasks: {},
        blockNotes: {},
        reflection: {},
        learned: "",
        selfAssessment: {},
        progress: 0,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp()
      });
    });

    moduleOneDeliverables.forEach((label, index) => {
      const id = `deliverable-${index + 1}`;
      batch.set(doc(db, "users", userId, "modules", "module-1", "tasks", id), {
        id,
        label,
        type: "deliverable",
        done: false,
        ready: false,
        note: "",
        moduleId: "module-1",
        userId,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp()
      });
    });

    moduleOneQualityChecks.forEach((label, index) => {
      const id = `quality-${index + 1}`;
      batch.set(doc(db, "users", userId, "modules", "module-1", "tasks", id), {
        id,
        label,
        type: "quality",
        done: false,
        ready: false,
        note: "",
        moduleId: "module-1",
        userId,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp()
      });
    });

    await batch.commit();
  }

  const vocabRef = collection(db, "users", userId, "vocabulary");
  const vocabSnapshot = await getDocs(vocabRef);
  if (vocabSnapshot.empty) {
    const batch = writeBatch(db);
    seedVocabulary.forEach((word) => {
      batch.set(doc(db, "users", userId, "vocabulary", word.id), {
        ...word,
        userId,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp()
      });
    });
    await batch.commit();
  }
}

export async function updateUserHeartbeat(userId: string) {
  const db = getFirebaseDb();
  await setDoc(
    doc(db, "users", userId),
    {
      userId,
      lastActivityAt: serverTimestamp(),
      updatedAt: serverTimestamp()
    },
    { merge: true }
  );
}
