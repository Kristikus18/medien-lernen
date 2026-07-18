"use client";

import { deleteObject, getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { getFirebaseStorage } from "@/lib/firebase";

export const maxUploadSize = 25 * 1024 * 1024;

export const allowedFileExtensions = [
  "pdf",
  "jpg",
  "jpeg",
  "png",
  "svg",
  "zip",
  "ai",
  "eps"
];

export async function uploadProjectFile(
  userId: string,
  moduleId: string,
  file: File,
  onProgress: (progress: number) => void
) {
  const extension = file.name.split(".").pop()?.toLowerCase() ?? "";

  if (file.size > maxUploadSize) {
    throw new Error("Файл занадто великий. Максимальний розмір: 25 MB.");
  }

  if (!allowedFileExtensions.includes(extension)) {
    throw new Error("Цей формат не підтримується. Дозволено PDF, JPG, PNG, SVG, ZIP, AI та EPS.");
  }

  const safeName = file.name.replace(/[^a-zA-Z0-9._-]/g, "-");
  const storagePath = `users/${userId}/modules/${moduleId}/${Date.now()}-${safeName}`;
  const storageRef = ref(getFirebaseStorage(), storagePath);
  const task = uploadBytesResumable(storageRef, file, { contentType: file.type || "application/octet-stream" });

  return new Promise<{ downloadUrl: string; storagePath: string }>((resolve, reject) => {
    task.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
        onProgress(progress);
      },
      (error) => reject(error),
      async () => {
        const downloadUrl = await getDownloadURL(task.snapshot.ref);
        resolve({ downloadUrl, storagePath });
      }
    );
  });
}

export async function deleteProjectFile(storagePath: string) {
  await deleteObject(ref(getFirebaseStorage(), storagePath));
}
