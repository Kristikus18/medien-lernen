"use client";

import { LogIn, ShieldCheck } from "lucide-react";
import { useAuth } from "@/lib/auth";
import { isFirebaseConfigured } from "@/lib/firebase";

export function AuthGate({ children }: { children: React.ReactNode }) {
  const { user, loading, error, signInWithGoogle } = useAuth();

  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-paper p-6 dark:bg-neutral-950">
        <div className="w-full max-w-md rounded-md border border-line bg-white p-6 shadow-panel dark:border-neutral-800 dark:bg-neutral-900">
          <div className="mb-4 h-4 w-32 animate-pulse rounded bg-neutral-200 dark:bg-neutral-800" />
          <div className="space-y-3">
            <div className="h-12 animate-pulse rounded bg-neutral-100 dark:bg-neutral-800" />
            <div className="h-12 animate-pulse rounded bg-neutral-100 dark:bg-neutral-800" />
            <div className="h-12 animate-pulse rounded bg-neutral-100 dark:bg-neutral-800" />
          </div>
        </div>
      </main>
    );
  }

  if (!isFirebaseConfigured) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-paper p-6 dark:bg-neutral-950">
        <section className="w-full max-w-xl rounded-md border border-line bg-white p-8 shadow-panel dark:border-neutral-800 dark:bg-neutral-900">
          <div className="mb-5 inline-flex rounded-md bg-brand-50 p-3 text-brand-700 dark:bg-brand-700/20 dark:text-brand-100">
            <ShieldCheck aria-hidden="true" />
          </div>
          <h1 className="text-2xl font-semibold tracking-normal">Firebase потрібно підключити</h1>
          <p className="mt-3 text-sm leading-6 text-neutral-600 dark:text-neutral-300">
            Застосунок не використовує фіктивний вхід. Створи Firebase проєкт, скопіюй
            `.env.example` у `.env.local`, додай ключі та увімкни Google Authentication.
          </p>
          <div className="mt-5 rounded-md border border-line bg-neutral-50 p-4 text-sm text-neutral-700 dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-300">
            Після цього кнопка Google входу з&apos;явиться автоматично, а дані будуть зберігатися у Firestore.
          </div>
        </section>
      </main>
    );
  }

  if (!user) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-paper p-6 dark:bg-neutral-950">
        <section className="w-full max-w-lg rounded-md border border-line bg-white p-8 shadow-panel dark:border-neutral-800 dark:bg-neutral-900">
          <p className="text-sm font-medium text-brand-700 dark:text-brand-100">Medienfachfrau Learning Hub</p>
          <h1 className="mt-3 text-3xl font-semibold tracking-normal">Твоя система навчання</h1>
          <p className="mt-4 text-sm leading-6 text-neutral-600 dark:text-neutral-300">
            Увійди через Google, щоб модулі, слова, відповіді, файли, тести і прогрес зберігалися у твоєму
            обліковому записі та синхронізувалися між пристроями.
          </p>
          <button
            type="button"
            onClick={signInWithGoogle}
            className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-md bg-brand-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-brand-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-600"
          >
            <LogIn size={18} aria-hidden="true" />
            Увійти через Google
          </button>
          {error ? <p className="mt-4 text-sm text-red-600">{error}</p> : null}
        </section>
      </main>
    );
  }

  return children;
}
