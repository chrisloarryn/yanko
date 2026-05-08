import type { Metadata } from "next";
import { SectionHeading } from "@/components/site/section-heading";
import { siteCopy, values } from "@/lib/data/site";

export const metadata: Metadata = {
  title: "Nosotros",
  description: "Conoce la misión, visión y valores de Yanko para construcción de casas, ampliaciones y remodelaciones.",
};

export default function NosotrosPage() {
  return (
    <section className="u-section">
      <div className="u-container">
        <SectionHeading eyebrow="Nosotros" title="Entregar calidad y confianza en cada construcción" description={siteCopy.about} />
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <div className="u-card"><h2 className="text-2xl font-bold text-construction-neutral">Misión</h2><p className="mt-4 leading-8 text-construction-muted">{siteCopy.mission}</p></div>
          <div className="u-card"><h2 className="text-2xl font-bold text-construction-neutral">Visión</h2><p className="mt-4 leading-8 text-construction-muted">{siteCopy.vision}</p></div>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-4">
          {values.map((value) => <div key={value.title} className="rounded-3xl bg-white p-6"><h3 className="font-bold text-construction-primary">{value.title}</h3><p className="mt-3 text-sm leading-7 text-construction-muted">{value.description}</p></div>)}
        </div>
      </div>
    </section>
  );
}
