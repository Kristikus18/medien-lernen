"use client";

import { CheckCircle2, ChevronDown, Loader2, Save, TriangleAlert } from "lucide-react";
import { useState } from "react";
import type { SaveStatus } from "@/lib/types";

export function PageHeader({
  eyebrow,
  title,
  description,
  action
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  action?: React.ReactNode;
}) {
  return (
    <div className="mb-6 flex flex-col gap-4 border-b border-line pb-6 dark:border-neutral-800 md:flex-row md:items-end md:justify-between">
      <div>
        {eyebrow ? <p className="text-sm font-semibold text-brand-700 dark:text-brand-100">{eyebrow}</p> : null}
        <h1 className="mt-1 text-2xl font-semibold tracking-normal sm:text-3xl">{title}</h1>
        {description ? <p className="mt-2 max-w-3xl text-sm leading-6 text-neutral-600 dark:text-neutral-300">{description}</p> : null}
      </div>
      {action ? <div className="shrink-0">{action}</div> : null}
    </div>
  );
}

export function Panel({
  title,
  description,
  children,
  className = ""
}: {
  title?: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={`rounded-md border border-line bg-white p-5 shadow-panel dark:border-neutral-800 dark:bg-neutral-900 ${className}`}>
      {title ? (
        <div className="mb-4">
          <h2 className="text-base font-semibold tracking-normal">{title}</h2>
          {description ? <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">{description}</p> : null}
        </div>
      ) : null}
      {children}
    </section>
  );
}

export function CollapsibleCard({
  title,
  eyebrow,
  children,
  defaultOpen = false
}: {
  title: string;
  eyebrow?: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <section className="rounded-md border border-line bg-white shadow-panel dark:border-neutral-800 dark:bg-neutral-900">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-600"
      >
        <span>
          {eyebrow ? <span className="block text-xs font-semibold uppercase tracking-normal text-brand-700 dark:text-brand-100">{eyebrow}</span> : null}
          <span className="mt-1 block text-base font-semibold">{title}</span>
        </span>
        <ChevronDown className={`shrink-0 transition ${open ? "rotate-180" : ""}`} size={18} aria-hidden="true" />
      </button>
      {open ? <div className="border-t border-line px-5 py-4 dark:border-neutral-800">{children}</div> : null}
    </section>
  );
}

export function ProgressBar({ value }: { value: number }) {
  const safeValue = Math.max(0, Math.min(100, Math.round(value)));
  return (
    <div className="h-2 w-full overflow-hidden rounded-sm bg-neutral-200 dark:bg-neutral-800" aria-label={`Progress ${safeValue}%`}>
      <div className="h-full rounded-sm bg-brand-600 transition-all" style={{ width: `${safeValue}%` }} />
    </div>
  );
}

export function SaveStatusBadge({ status }: { status: SaveStatus }) {
  const label = {
    idle: "Очікує",
    saving: "Збереження...",
    saved: "Збережено",
    error: "Помилка збереження"
  }[status];

  const Icon = status === "saving" ? Loader2 : status === "error" ? TriangleAlert : status === "saved" ? CheckCircle2 : Save;

  return (
    <span
      className={`inline-flex items-center gap-1 rounded-md border px-2 py-1 text-xs font-medium ${
        status === "error"
          ? "border-red-200 bg-red-50 text-red-700 dark:border-red-900 dark:bg-red-950 dark:text-red-200"
          : "border-line bg-neutral-50 text-neutral-600 dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-300"
      }`}
    >
      <Icon size={13} className={status === "saving" ? "animate-spin" : ""} aria-hidden="true" />
      {label}
    </span>
  );
}

export function Badge({ children, tone = "neutral" }: { children: React.ReactNode; tone?: "neutral" | "green" | "amber" | "blue" | "red" }) {
  const styles = {
    neutral: "border-line bg-neutral-50 text-neutral-700 dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-300",
    green: "border-green-200 bg-green-50 text-green-700 dark:border-green-900 dark:bg-green-950 dark:text-green-200",
    amber: "border-amber-200 bg-amber-50 text-amber-800 dark:border-amber-900 dark:bg-amber-950 dark:text-amber-200",
    blue: "border-sky-200 bg-sky-50 text-sky-700 dark:border-sky-900 dark:bg-sky-950 dark:text-sky-200",
    red: "border-red-200 bg-red-50 text-red-700 dark:border-red-900 dark:bg-red-950 dark:text-red-200"
  }[tone];

  return <span className={`inline-flex items-center rounded-md border px-2 py-1 text-xs font-medium ${styles}`}>{children}</span>;
}

export function EmptyState({ title, description }: { title: string; description: string }) {
  return (
    <div className="rounded-md border border-dashed border-line p-8 text-center dark:border-neutral-800">
      <p className="font-semibold">{title}</p>
      <p className="mt-2 text-sm text-neutral-500 dark:text-neutral-400">{description}</p>
    </div>
  );
}

export const inputClass =
  "w-full rounded-md border border-line bg-white px-3 py-2 text-sm text-ink shadow-sm transition placeholder:text-neutral-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-600 dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-100";
