"use client";

import { useCallback, useEffect, useState } from "react";
import { SaveStatusBadge, inputClass } from "@/components/shared/ui";
import { useDebouncedAutosave } from "@/lib/hooks";

export function AutosaveTextarea({
  label,
  initialValue,
  placeholder,
  onSave,
  rows = 4
}: {
  label: string;
  initialValue: string;
  placeholder?: string;
  onSave: (value: string) => Promise<void>;
  rows?: number;
}) {
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  const save = useCallback((nextValue: string) => onSave(nextValue), [onSave]);
  const status = useDebouncedAutosave(value, save, 900);

  return (
    <label className="block">
      <div className="mb-2 flex items-center justify-between gap-3">
        <span className="text-sm font-medium">{label}</span>
        <SaveStatusBadge status={status} />
      </div>
      <textarea
        rows={rows}
        value={value}
        onChange={(event) => setValue(event.target.value)}
        placeholder={placeholder}
        className={inputClass}
      />
    </label>
  );
}
