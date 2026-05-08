"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import Link from "next/link";

const projectTypes = [
  {
    id: "casa",
    label: "Casa nueva",
    baseUf: 24,
    baseWeeks: 18,
    summary: "Ideal para partir desde cero con diseno, obra gruesa y terminaciones coordinadas.",
  },
  {
    id: "ampliacion",
    label: "Ampliacion",
    baseUf: 16,
    baseWeeks: 10,
    summary: "Para sumar metros utiles, dormitorios, cocina ampliada o segundo piso.",
  },
  {
    id: "remodelacion",
    label: "Remodelacion",
    baseUf: 11,
    baseWeeks: 7,
    summary: "Para renovar distribucion, banos, cocina, terminaciones o espacios exteriores.",
  },
] as const;

const finishLevels = [
  { id: "funcional", label: "Funcional", multiplier: 0.92 },
  { id: "equilibrado", label: "Equilibrado", multiplier: 1 },
  { id: "premium", label: "Premium", multiplier: 1.18 },
] as const;

function formatUf(value: number) {
  return new Intl.NumberFormat("es-CL", {
    maximumFractionDigits: 0,
  }).format(value);
}

function parseUfNumber(raw: unknown): number | null {
  if (typeof raw === "number" && Number.isFinite(raw)) return raw;
  if (typeof raw === "string") {
    const cleaned = raw.replace(/\$/g, "").replace(/\./g, "").replace(/,/g, ".").replace(/\s/g, "");
    const parsed = Number(cleaned);
    return Number.isFinite(parsed) ? parsed : null;
  }
  return null;
}

function extractUfValue(payload: unknown): number | null {
  if (!payload || typeof payload !== "object") return null;

  const queue: unknown[] = [payload];
  while (queue.length > 0) {
    const current = queue.shift();
    if (!current || typeof current !== "object") continue;

    for (const [key, value] of Object.entries(current as Record<string, unknown>)) {
      const normalized = key.toLowerCase();
      if (["value", "valor", "uf", "price", "amount"].includes(normalized)) {
        const parsed = parseUfNumber(value);
        if (parsed) return parsed;
      }

      if (value && typeof value === "object") queue.push(value);
      if (Array.isArray(value)) queue.push(...value);
    }
  }

  return null;
}

export function InteractiveProjectPlanner() {
  const [projectType, setProjectType] = useState<(typeof projectTypes)[number]["id"]>("casa");
  const [finishLevel, setFinishLevel] = useState<(typeof finishLevels)[number]["id"]>("equilibrado");
  const [squareMeters, setSquareMeters] = useState(120);
  const [ufValue, setUfValue] = useState(39000);
  const [ufSource, setUfSource] = useState<"api" | "fallback">("fallback");
  const [comparison, setComparison] = useState(54);

  useEffect(() => {
    let active = true;

    const loadUf = async () => {
      try {
        const response = await fetch("https://api.boostr.cl/economy/indicator/uf.json", { cache: "no-store" });
        if (!response.ok) return;
        const payload = (await response.json()) as unknown;
        const extracted = extractUfValue(payload);
        if (active && extracted && extracted > 10000) {
          setUfValue(extracted);
          setUfSource("api");
        }
      } catch {
        // fallback keeps default UF
      }
    };

    void loadUf();
    return () => {
      active = false;
    };
  }, []);

  const selectedType = projectTypes.find((item) => item.id === projectType) ?? projectTypes[0];
  const selectedFinish = finishLevels.find((item) => item.id === finishLevel) ?? finishLevels[1];

  const estimate = useMemo(() => {
    const ufFrom = squareMeters * selectedType.baseUf * selectedFinish.multiplier;
    const ufTo = ufFrom * 1.22;
    const weeks = Math.round(selectedType.baseWeeks + squareMeters / 18 + (selectedFinish.id === "premium" ? 3 : 0));
    const clpFrom = ufFrom * ufValue;
    const clpTo = ufTo * ufValue;
    const clpPerM2From = clpFrom / squareMeters;
    const clpPerM2To = clpTo / squareMeters;

    return {
      ufFrom,
      ufTo,
      weeks,
      clpFrom,
      clpTo,
      clpPerM2From,
      clpPerM2To,
    };
  }, [squareMeters, selectedFinish, selectedType, ufValue]);

  const formatClp = (value: number) =>
    new Intl.NumberFormat("es-CL", { style: "currency", currency: "CLP", maximumFractionDigits: 0 }).format(value);

  return (
    <section className="bg-construction-neutral py-16 text-white">
      <div className="u-container grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-stretch">
        <div className="rounded-lg border border-white/10 bg-white/6 p-6 md:p-8">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-100">Planificador interactivo</p>
          <h2 className="mt-4 text-4xl font-black tracking-tight">Explora tu proyecto antes de cotizar</h2>
          <p className="mt-4 max-w-2xl leading-8 text-white/72">Ajusta tipo de obra, metros y nivel de terminaciones para tener una primera referencia. La cotizacion final siempre se define con visita a terreno.</p>

          <div className="mt-8 grid gap-5">
            <div>
              <div className="mb-3 text-sm font-bold text-white/80">Tipo de proyecto</div>
              <div className="grid gap-2 sm:grid-cols-3">
                {projectTypes.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setProjectType(item.id)}
                    className={`rounded-lg border px-4 py-3 text-left text-sm font-bold transition ${
                      item.id === projectType
                        ? "border-construction-secondary bg-construction-secondary text-white"
                        : "border-white/12 bg-white/8 text-white/72 hover:bg-white/12"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="rounded-lg bg-white p-5 text-construction-neutral">
              <div className="flex items-center justify-between gap-4">
                <label htmlFor="squareMeters" className="text-sm font-bold">Metros aproximados</label>
                <span className="text-2xl font-black text-construction-primary">{squareMeters} m2</span>
              </div>
              <input
                id="squareMeters"
                type="range"
                min="30"
                max="260"
                step="5"
                value={squareMeters}
                onChange={(event) => setSquareMeters(Number(event.target.value))}
                className="u-range mt-4"
              />
            </div>

            <div>
              <div className="mb-3 text-sm font-bold text-white/80">Nivel de terminaciones</div>
              <div className="grid gap-2 sm:grid-cols-3">
                {finishLevels.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setFinishLevel(item.id)}
                    className={`rounded-lg border px-4 py-3 text-center text-sm font-bold transition ${
                      item.id === finishLevel
                        ? "border-white bg-white text-construction-primary"
                        : "border-white/12 bg-white/8 text-white/72 hover:bg-white/12"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="rounded-lg bg-white p-5 text-construction-neutral">
              <p className="text-sm font-bold">Valor UF referencial</p>
              <p className="mt-2 text-2xl font-black text-construction-primary">{formatClp(ufValue)}</p>
              <p className="mt-1 text-xs font-semibold uppercase tracking-[0.12em] text-construction-muted">
                {ufSource === "api" ? "Fuente: API Boostr (UF hoy)" : "Fuente: Valor de respaldo local"}
              </p>
            </div>
          </div>
        </div>

        <div className="grid gap-4">
          <div className="rounded-lg bg-white p-6 text-construction-neutral shadow-xl shadow-emerald-950/20">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-construction-secondary">Referencia inicial</p>
            <div className="mt-4 text-4xl font-black text-construction-primary">UF {formatUf(estimate.ufFrom)} - {formatUf(estimate.ufTo)}</div>
            <div className="mt-2 text-lg font-bold text-construction-neutral">{formatClp(estimate.clpFrom)} - {formatClp(estimate.clpTo)}</div>
            <p className="mt-3 text-sm leading-7 text-construction-muted">{selectedType.summary}</p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <div className="rounded-lg bg-construction-surface p-4">
                <div className="text-2xl font-black">{estimate.weeks}</div>
                <div className="text-xs font-bold uppercase tracking-[0.14em] text-construction-muted">Semanas estimadas</div>
              </div>
              <div className="rounded-lg bg-construction-surface p-4">
                <div className="text-2xl font-black">{selectedFinish.label}</div>
                <div className="text-xs font-bold uppercase tracking-[0.14em] text-construction-muted">Terminacion</div>
              </div>
            </div>
            <div className="mt-3 rounded-lg bg-construction-surface p-4">
              <div className="text-sm font-bold text-construction-neutral">Costo estimado por m2</div>
              <div className="mt-1 text-lg font-black text-construction-primary">
                {formatClp(estimate.clpPerM2From)} - {formatClp(estimate.clpPerM2To)}
              </div>
            </div>
            <Link href="/contacto" className="u-btn-primary mt-6 w-full">Solicitar visita</Link>
          </div>

          <div className="overflow-hidden rounded-lg border border-white/10 bg-white/6">
            <div className="relative h-[300px]">
              <Image
                src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80"
                alt="Vista después de proyecto de construcción"
                fill
                className="object-cover"
                sizes="100vw"
              />
              <div
                className="absolute inset-y-0 left-0 overflow-hidden border-r-2 border-white"
                style={{ width: `${comparison}%` }}
              >
                <div className="relative h-full w-[min(88vw,520px)] overflow-hidden grayscale">
                  <Image
                    src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80"
                    alt="Vista antes de remodelación"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="absolute left-4 top-4 rounded-sm bg-black/55 px-3 py-2 text-xs font-bold uppercase tracking-[0.14em]">Antes</div>
              <div className="absolute right-4 top-4 rounded-sm bg-white px-3 py-2 text-xs font-bold uppercase tracking-[0.14em] text-construction-primary">Despues</div>
            </div>
            <div className="p-4">
              <label htmlFor="comparison" className="sr-only">Comparar antes y despues</label>
              <input
                id="comparison"
                type="range"
                min="8"
                max="92"
                value={comparison}
                onChange={(event) => setComparison(Number(event.target.value))}
                className="u-range"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
