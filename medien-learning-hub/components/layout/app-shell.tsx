"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BookOpen,
  BrainCircuit,
  BriefcaseBusiness,
  Clock3,
  FileQuestion,
  FolderKanban,
  GraduationCap,
  Languages,
  LayoutDashboard,
  LogOut,
  Menu,
  Palette,
  Settings,
  X
} from "lucide-react";
import { useState } from "react";
import { useAuth } from "@/lib/auth";

const navItems = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/module", label: "Module", icon: BookOpen },
  { href: "/fachwoerter", label: "Fachwörter", icon: Languages },
  { href: "/deutsch-grammatik", label: "Deutsch Grammatik", icon: BookOpen },
  { href: "/english", label: "English", icon: Languages },
  { href: "/ungarisch", label: "Ungarisch", icon: Languages },
  { href: "/berufsschule-lap", label: "Berufsschule / LAP", icon: GraduationCap },
  { href: "/projects", label: "Projects", icon: FolderKanban },
  { href: "/portfolio", label: "Portfolio", icon: BriefcaseBusiness },
  { href: "/ipad-drawing", label: "iPad / Sketches", icon: Palette },
  { href: "/time-tracking", label: "Time Tracking", icon: Clock3 },
  { href: "/knowledge-base", label: "Knowledge Base", icon: BrainCircuit },
  { href: "/tests", label: "Tests", icon: FileQuestion },
  { href: "/settings", label: "Settings", icon: Settings }
];

export function AppShell({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const { user, signOut } = useAuth();

  return (
    <div className="min-h-screen bg-paper text-ink dark:bg-neutral-950 dark:text-neutral-100">
      <header className="sticky top-0 z-40 border-b border-line bg-paper/90 backdrop-blur dark:border-neutral-800 dark:bg-neutral-950/90 lg:hidden">
        <div className="flex h-16 items-center justify-between px-4">
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-line bg-white dark:border-neutral-800 dark:bg-neutral-900"
            aria-label="Open menu"
          >
            <Menu size={20} aria-hidden="true" />
          </button>
          <span className="text-sm font-semibold">Learning Hub</span>
          {user?.photoURL ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={user.photoURL} alt="" className="h-9 w-9 rounded-full" />
          ) : (
            <div className="h-9 w-9 rounded-full bg-brand-100" />
          )}
        </div>
      </header>

      <aside
        className={`fixed inset-y-0 left-0 z-50 w-72 border-r border-line bg-white transition-transform dark:border-neutral-800 dark:bg-neutral-900 lg:translate-x-0 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex h-full flex-col">
          <div className="flex h-20 items-center justify-between border-b border-line px-5 dark:border-neutral-800">
            <div>
              <p className="text-sm font-semibold text-brand-700 dark:text-brand-100">Medienfachfrau</p>
              <h1 className="text-lg font-semibold tracking-normal">Learning Hub</h1>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-line lg:hidden dark:border-neutral-800"
              aria-label="Close menu"
            >
              <X size={18} aria-hidden="true" />
            </button>
          </div>

          <nav className="flex-1 space-y-1 overflow-y-auto p-3">
            {navItems.map((item) => {
              const Icon = item.icon;
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`flex items-center gap-3 rounded-md px-3 py-2.5 text-sm font-medium transition ${
                    active
                      ? "bg-brand-50 text-brand-700 dark:bg-brand-700/20 dark:text-brand-100"
                      : "text-neutral-600 hover:bg-neutral-100 dark:text-neutral-300 dark:hover:bg-neutral-800"
                  }`}
                >
                  <Icon size={18} aria-hidden="true" />
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="border-t border-line p-4 dark:border-neutral-800">
            <div className="flex items-center gap-3">
              {user?.photoURL ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={user.photoURL} alt="" className="h-11 w-11 rounded-full" />
              ) : (
                <div className="h-11 w-11 rounded-full bg-brand-100" />
              )}
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-semibold">{user?.displayName ?? "Krystyna"}</p>
                <p className="truncate text-xs text-neutral-500">{user?.email}</p>
              </div>
            </div>
            <button
              type="button"
              onClick={signOut}
              className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-md border border-line px-3 py-2 text-sm font-medium text-neutral-700 transition hover:bg-neutral-100 dark:border-neutral-800 dark:text-neutral-200 dark:hover:bg-neutral-800"
            >
              <LogOut size={16} aria-hidden="true" />
              Вийти
            </button>
          </div>
        </div>
      </aside>

      {open ? <button aria-label="Close menu overlay" className="fixed inset-0 z-40 bg-black/30 lg:hidden" onClick={() => setOpen(false)} /> : null}

      <main className="lg:pl-72">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">{children}</div>
      </main>
    </div>
  );
}
