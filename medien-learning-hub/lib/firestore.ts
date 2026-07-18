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
  await updateDoc(userDocPath(userId, collectionName, documentId), {
    ...data,
    updatedAt: serverTimestamp()
  });
}

export async function removeUserDocument(userId: string, collectionName: string, documentId: string) {
  await deleteDoc(userDocPath(userId, collectionName, documentId));
}

export function subscribeUserCollection<T>(
  userId: string,
  collectionName: string,
  onData: (items: T[]) => void,
  onError: (error: Error) => void
): Unsubscribe {
  const ref = collection(getFirebaseDb(), "users", userId, collectionName);
  const orderedQuery = query(ref, orderBy("updatedAt", "desc"));

  return onSnapshot(
    orderedQuery,
    (snapshot) => {
      onData(snapshot.docs.map((item) => mapSnapshot<T>(item)));
    },
    (error) => onError(error)
  );
}

export async function exportCollection(userId: string, collectionName: string) {
  const ref = collection(getFirebaseDb(), "users", userId, collectionName);
  const snapshot = await getDocs(ref);
  return snapshot.docs.map((item) => item.data());
}

function mapSnapshot<T>(snapshot: QueryDocumentSnapshot<DocumentData>): T {
  return {
    id: snapshot.id,
    ...snapshot.data()
  } as T;
}
