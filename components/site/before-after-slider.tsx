"use client";

import { useState } from "react";

type BeforeAfterSliderProps = {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
};

export function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeLabel = "Antes",
  afterLabel = "Despues",
}: BeforeAfterSliderProps) {
  const [comparison, setComparison] = useState(55);

  return (
    <div className="overflow-hidden rounded-[2rem] border border-white/20 bg-white/10">
      <div className="relative h-[340px] md:h-[430px]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${afterImage}')` }}
        />
        <div className="absolute inset-y-0 left-0 overflow-hidden border-r-2 border-white/85" style={{ width: `${comparison}%` }}>
          <div
            className="h-full w-[min(95vw,880px)] bg-cover bg-center"
            style={{ backgroundImage: `url('${beforeImage}')` }}
          />
        </div>

        <div className="absolute left-4 top-4 rounded-full bg-black/60 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-white">
          {beforeLabel}
        </div>
        <div className="absolute right-4 top-4 rounded-full bg-white/92 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-construction-primary">
          {afterLabel}
        </div>
      </div>
      <div className="bg-construction-neutral/85 p-4">
        <label htmlFor="project-comparison" className="sr-only">Comparar antes y despues</label>
        <input
          id="project-comparison"
          type="range"
          min="8"
          max="92"
          value={comparison}
          onChange={(event) => setComparison(Number(event.target.value))}
          className="u-range"
        />
      </div>
    </div>
  );
}
