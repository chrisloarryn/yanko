"use client";

import { useEffect, useMemo, useState } from "react";

type SettingsValue = Record<string, string>;

type SettingsField = {
  key: string;
  label: string;
  type?: "text" | "textarea";
};

type LocalSettingsEditorProps = {
  title: string;
  storageKey: string;
  initialValue: SettingsValue;
  fields: SettingsField[];
};

export function LocalSettingsEditor({ title, storageKey, initialValue, fields }: LocalSettingsEditorProps) {
  const [value, setValue] = useState(() => {
    if (typeof window === "undefined") {
      return initialValue;
    }

    const stored = window.localStorage.getItem(storageKey);
    return stored ? (JSON.parse(stored) as SettingsValue) : initialValue;
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem(storageKey, JSON.stringify(value));
    }
  }, [storageKey, value]);

  const exportValue = useMemo(() => JSON.stringify(value, null, 2), [value]);

  return (
    <div>
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <h1 className="text-4xl font-black">{title}</h1>
          <p className="mt-2 text-sm text-white/50">Cambios guardados en este navegador. Para publicarlos definitivamente se conecta Supabase o se exporta el JSON.</p>
        </div>
        <button
          type="button"
          onClick={() => {
            setValue(initialValue);
            window.localStorage.removeItem(storageKey);
          }}
          className="rounded-xl bg-white/10 px-4 py-3 text-sm font-bold text-white"
        >
          Restaurar
        </button>
      </div>

      <div className="mt-8 grid gap-4 rounded-3xl border border-white/10 bg-white/6 p-5">
        {fields.map((field) => (
          <label key={field.key} className="grid gap-2 text-sm font-bold text-white/70">
            {field.label}
            {field.type === "textarea" ? (
              <textarea
                value={value[field.key] ?? ""}
                onChange={(event) => setValue((current) => ({ ...current, [field.key]: event.target.value }))}
                className="min-h-28 rounded-2xl border border-white/10 bg-slate-950 px-4 py-3 text-white outline-none focus:border-emerald-500"
              />
            ) : (
              <input
                value={value[field.key] ?? ""}
                onChange={(event) => setValue((current) => ({ ...current, [field.key]: event.target.value }))}
                className="rounded-2xl border border-white/10 bg-slate-950 px-4 py-3 text-white outline-none focus:border-emerald-500"
              />
            )}
          </label>
        ))}
      </div>

      <details className="mt-6 rounded-3xl border border-white/10 bg-white/6 p-5">
        <summary className="cursor-pointer text-sm font-bold text-white">Ver JSON exportable</summary>
        <pre className="mt-4 max-h-80 overflow-auto rounded-2xl bg-slate-950 p-4 text-xs text-emerald-100">{exportValue}</pre>
      </details>
    </div>
  );
}
