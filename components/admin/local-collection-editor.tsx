"use client";

import { useEffect, useMemo, useState } from "react";

export type AdminField<T extends Record<string, string | boolean>> = {
  key: keyof T;
  label: string;
  type?: "text" | "textarea" | "select" | "checkbox";
  options?: string[];
};

type LocalCollectionEditorProps<T extends Record<string, string | boolean>> = {
  title: string;
  storageKey: string;
  initialItems: T[];
  fields: AdminField<T>[];
  newItem: T;
};

export function LocalCollectionEditor<T extends Record<string, string | boolean>>({
  title,
  storageKey,
  initialItems,
  fields,
  newItem,
}: LocalCollectionEditorProps<T>) {
  const [items, setItems] = useState<T[]>(() => {
    if (typeof window === "undefined") {
      return initialItems;
    }

    const stored = window.localStorage.getItem(storageKey);
    return stored ? (JSON.parse(stored) as T[]) : initialItems;
  });
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem(storageKey, JSON.stringify(items));
    }
  }, [items, storageKey]);

  const selectedItem = items[selectedIndex] ?? items[0];

  const exportValue = useMemo(() => JSON.stringify(items, null, 2), [items]);

  function updateItem(key: keyof T, value: string | boolean) {
    setItems((current) =>
      current.map((item, index) => (index === selectedIndex ? { ...item, [key]: value } : item)),
    );
  }

  function addItem() {
    setItems((current) => [...current, newItem]);
    setSelectedIndex(items.length);
  }

  function deleteItem() {
    setItems((current) => current.filter((_, index) => index !== selectedIndex));
    setSelectedIndex(0);
  }

  function resetItems() {
    setItems(initialItems);
    setSelectedIndex(0);
    window.localStorage.removeItem(storageKey);
  }

  return (
    <div>
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <h1 className="text-4xl font-black">{title}</h1>
          <p className="mt-2 text-sm text-white/50">Cambios guardados en este navegador. Para publicarlos definitivamente se conecta Supabase o se exporta el JSON.</p>
        </div>
        <div className="flex flex-wrap gap-2">
          <button type="button" onClick={addItem} className="rounded-xl bg-emerald-600 px-4 py-3 text-sm font-bold text-white">
            Nuevo
          </button>
          <button type="button" onClick={resetItems} className="rounded-xl bg-white/10 px-4 py-3 text-sm font-bold text-white">
            Restaurar
          </button>
        </div>
      </div>

      <div className="mt-8 grid gap-6 xl:grid-cols-[0.9fr_1.1fr]">
        <div className="overflow-hidden rounded-3xl border border-white/10">
          {items.map((item, index) => {
            const label = String(item.title || item.label || item.name || `Item ${index + 1}`);
            const secondary = String(item.slug || item.category || item.excerpt || "");

            return (
              <button
                key={`${label}-${index}`}
                type="button"
                onClick={() => setSelectedIndex(index)}
                className={`grid w-full gap-2 border-b border-white/10 p-4 text-left text-sm transition last:border-b-0 ${
                  selectedIndex === index ? "bg-white/14 text-white" : "text-white/70 hover:bg-white/8 hover:text-white"
                }`}
              >
                <span className="font-bold">{label}</span>
                {secondary ? <span className="text-xs text-white/45">{secondary}</span> : null}
              </button>
            );
          })}
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/6 p-5">
          {selectedItem ? (
            <div className="grid gap-4">
              {fields.map((field) => {
                const value = selectedItem[field.key];

                if (field.type === "checkbox") {
                  return (
                    <label key={String(field.key)} className="flex items-center gap-3 rounded-2xl bg-slate-950/50 p-4 text-sm font-bold">
                      <input
                        type="checkbox"
                        checked={Boolean(value)}
                        onChange={(event) => updateItem(field.key, event.target.checked)}
                        className="h-5 w-5 accent-emerald-600"
                      />
                      {field.label}
                    </label>
                  );
                }

                if (field.type === "select") {
                  return (
                    <label key={String(field.key)} className="grid gap-2 text-sm font-bold text-white/70">
                      {field.label}
                      <select
                        value={String(value)}
                        onChange={(event) => updateItem(field.key, event.target.value)}
                        className="rounded-2xl border border-white/10 bg-slate-950 px-4 py-3 text-white outline-none focus:border-emerald-500"
                      >
                        {field.options?.map((option) => <option key={option}>{option}</option>)}
                      </select>
                    </label>
                  );
                }

                if (field.type === "textarea") {
                  return (
                    <label key={String(field.key)} className="grid gap-2 text-sm font-bold text-white/70">
                      {field.label}
                      <textarea
                        value={String(value)}
                        onChange={(event) => updateItem(field.key, event.target.value)}
                        className="min-h-28 rounded-2xl border border-white/10 bg-slate-950 px-4 py-3 text-white outline-none focus:border-emerald-500"
                      />
                    </label>
                  );
                }

                return (
                  <label key={String(field.key)} className="grid gap-2 text-sm font-bold text-white/70">
                    {field.label}
                    <input
                      value={String(value)}
                      onChange={(event) => updateItem(field.key, event.target.value)}
                      className="rounded-2xl border border-white/10 bg-slate-950 px-4 py-3 text-white outline-none focus:border-emerald-500"
                    />
                  </label>
                );
              })}

              <button type="button" onClick={deleteItem} className="rounded-xl bg-red-500/16 px-4 py-3 text-sm font-bold text-red-200">
                Eliminar seleccionado
              </button>
            </div>
          ) : (
            <p className="text-white/60">No hay elementos. Crea uno nuevo.</p>
          )}
        </div>
      </div>

      <details className="mt-6 rounded-3xl border border-white/10 bg-white/6 p-5">
        <summary className="cursor-pointer text-sm font-bold text-white">Ver JSON exportable</summary>
        <pre className="mt-4 max-h-80 overflow-auto rounded-2xl bg-slate-950 p-4 text-xs text-emerald-100">{exportValue}</pre>
      </details>
    </div>
  );
}
