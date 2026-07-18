"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { Unsubscribe } from "firebase/firestore";
import type { SaveStatus } from "@/lib/types";

export function useDebouncedAutosave<T>(
  value: T,
  save: (value: T) => Promise<void>,
  delay = 850,
  enabled = true
) {
  const [status, setStatus] = useState<SaveStatus>("idle");
  const firstRender = useRef(true);

  useEffect(() => {
    if (!enabled) {
      return undefined;
    }

    if (firstRender.current) {
      firstRender.current = false;
      return undefined;
    }

    setStatus("saving");
    const timeout = window.setTimeout(async () => {
      try {
        await save(value);
        setStatus("saved");
      } catch {
        setStatus("error");
      }
    }, delay);

    return () => window.clearTimeout(timeout);
  }, [delay, enabled, save, value]);

  return status;
}

export function useSnapshotSubscription<T>(
  subscribe: (onData: (items: T[]) => void, onError: (error: Error) => void) => Unsubscribe,
  dependencies: React.DependencyList
) {
  const [items, setItems] = useState<T[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    const unsubscribe = subscribe(
      (nextItems) => {
        setItems(nextItems);
        setLoading(false);
      },
      (snapshotError) => {
        setError(snapshotError.message);
        setLoading(false);
      }
    );

    return unsubscribe;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencies);

  return { items, loading, error, setItems };
}

export function useConfirm() {
  return useCallback((message: string) => window.confirm(message), []);
}
