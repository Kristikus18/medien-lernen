"use client";

import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  setDoc,
  updateDoc
} from "firebase/firestore";
import type { DocumentData, QueryDocumentSnapshot, Unsubscribe } from "firebase/firestore";
import { getFirebaseDb } from "@/lib/firebase";

const LOCAL_EVENT_NAME = "mlh-local-store-change";

export function userDocPath(userId: string, collectionName: string, documentId: string) {
  return doc(getFirebaseDb(), "users", userId, collectionName, documentId);
}

export function moduleTaskPath(userId: string, moduleId: string, taskId: string) {
  return doc(getFirebaseDb(), "users", userId, "modules", moduleId, "tasks", taskId);
}

export async function saveUserDocument<T extends object>(
  userId: string,
  collectionName: string,
  documentId: string,
  data: T
) {
  saveLocalUserDocument(userId, collectionName, documentId, data);

  await setDoc(
    userDocPath(userId, collectionName, documentId),
    {
      ...data,
      userId,
      updatedAt: serverTimestamp(),
      createdAt: serverTimestamp()
    },
    { merge: true }
  );
}

export async function patchUserDocument<T extends object>(
  userId: string,
  collectionName: string,
  documentId: string,
  data: T
) {
  saveLocalUserDocument(userId, collectionName, documentId, data);

  await updateDoc(userDocPath(userId, collectionName, documentId), {
    ...data,
    updatedAt: serverTimestamp()
  });
}

export async function removeUserDocument(userId: string, collectionName: string, documentId: string) {
  removeLocalUserDocument(userId, collectionName, documentId);
  await deleteDoc(userDocPath(userId, collectionName, documentId));
}

export function subscribeUserCollection<T extends object>(
  userId: string,
  collectionName: string,
  onData: (items: T[]) => void,
  onError: (error: Error) => void
): Unsubscribe {
  onData(readLocalUserCollection<T>(userId, collectionName));

  const onLocalChange = (event: Event) => {
    const detail = (event as CustomEvent<LocalChangeDetail>).detail;
    if (detail?.userId === userId && detail.collectionName === collectionName) {
      onData(readLocalUserCollection<T>(userId, collectionName));
    }
  };
  window.addEventListener(LOCAL_EVENT_NAME, onLocalChange);

  const ref = collection(getFirebaseDb(), "users", userId, collectionName);
  const orderedQuery = query(ref, orderBy("updatedAt", "desc"));

  const unsubscribeFirestore = onSnapshot(
    orderedQuery,
    (snapshot) => {
      const remoteItems = snapshot.docs.map((item) => mapSnapshot<T>(item));
      remoteItems.forEach((item) => {
        const id = (item as { id?: string }).id;
        if (id) {
          saveLocalUserDocument(userId, collectionName, id, item);
        }
      });
      onData(mergeCollectionItems(readLocalUserCollection<T>(userId, collectionName), remoteItems));
    },
    (error) => onError(error)
  );

  return () => {
    window.removeEventListener(LOCAL_EVENT_NAME, onLocalChange);
    unsubscribeFirestore();
  };
}

export async function exportCollection(userId: string, collectionName: string) {
  const ref = collection(getFirebaseDb(), "users", userId, collectionName);
  const snapshot = await getDocs(ref);
  const remoteItems = snapshot.docs.map((item) => mapSnapshot(item));
  return mergeCollectionItems(readLocalUserCollection(userId, collectionName), remoteItems);
}

function mapSnapshot<T>(snapshot: QueryDocumentSnapshot<DocumentData>): T {
  return {
    id: snapshot.id,
    ...snapshot.data()
  } as T;
}

type LocalDocument = Record<string, unknown>;

interface LocalChangeDetail {
  userId: string;
  collectionName: string;
}

function canUseLocalStorage() {
  return typeof window !== "undefined" && typeof window.localStorage !== "undefined";
}

function localCollectionKey(userId: string, collectionName: string) {
  return `mlh:${userId || "local"}:${collectionName}`;
}

function readLocalMap(userId: string, collectionName: string): Record<string, LocalDocument> {
  if (!canUseLocalStorage()) {
    return {};
  }

  try {
    const value = window.localStorage.getItem(localCollectionKey(userId, collectionName));
    return value ? (JSON.parse(value) as Record<string, LocalDocument>) : {};
  } catch {
    return {};
  }
}

function writeLocalMap(userId: string, collectionName: string, value: Record<string, LocalDocument>) {
  if (!canUseLocalStorage()) {
    return;
  }

  try {
    window.localStorage.setItem(localCollectionKey(userId, collectionName), JSON.stringify(value));
    window.dispatchEvent(
      new CustomEvent<LocalChangeDetail>(LOCAL_EVENT_NAME, {
        detail: { userId, collectionName }
      })
    );
  } catch {
    // Local storage is a fallback. If the browser blocks it, Firestore can still work.
  }
}

function saveLocalUserDocument<T extends object>(userId: string, collectionName: string, documentId: string, data: T) {
  if (!documentId) {
    return;
  }

  const now = new Date().toISOString();
  const current = readLocalMap(userId, collectionName);
  const existing = current[documentId] ?? {};
  current[documentId] = {
    ...existing,
    ...sanitizeLocalData(data),
    id: documentId,
    userId,
    createdAt: existing.createdAt ?? now,
    updatedAt: now
  };
  writeLocalMap(userId, collectionName, current);
}

function removeLocalUserDocument(userId: string, collectionName: string, documentId: string) {
  const current = readLocalMap(userId, collectionName);
  delete current[documentId];
  writeLocalMap(userId, collectionName, current);
}

function readLocalUserCollection<T>(userId: string, collectionName: string): T[] {
  return Object.values(readLocalMap(userId, collectionName))
    .sort((a, b) => timestampValue(b.updatedAt) - timestampValue(a.updatedAt))
    .map((item) => item as T);
}

function mergeCollectionItems<T>(localItems: T[], remoteItems: T[]) {
  const byId = new Map<string, T>();

  localItems.forEach((item) => {
    const id = (item as { id?: string }).id;
    if (id) {
      byId.set(id, item);
    }
  });

  remoteItems.forEach((item) => {
    const id = (item as { id?: string }).id;
    if (id) {
      byId.set(id, item);
    }
  });

  return Array.from(byId.values()).sort((a, b) => timestampValue((b as { updatedAt?: unknown }).updatedAt) - timestampValue((a as { updatedAt?: unknown }).updatedAt));
}

function sanitizeLocalData<T extends object>(data: T): LocalDocument {
  try {
    return JSON.parse(JSON.stringify(data)) as LocalDocument;
  } catch {
    return { ...data } as LocalDocument;
  }
}

function timestampValue(value: unknown) {
  if (typeof value === "string") {
    return Date.parse(value) || 0;
  }

  if (value && typeof value === "object" && "seconds" in value && typeof (value as { seconds: unknown }).seconds === "number") {
    return (value as { seconds: number }).seconds * 1000;
  }

  return 0;
}
