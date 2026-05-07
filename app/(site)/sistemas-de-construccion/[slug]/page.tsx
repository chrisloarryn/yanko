import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { constructionSystems } from "@/lib/data/systems";

export function generateStaticParams() {
  return constructionSystems.map((system) => ({ slug: system.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const system = constructionSystems.find((item) => item.slug === params.slug);
  return { title: system?.title || "Sistema de construccion", description: system?.excerpt };
}

export default function SystemDetailPage({ params }: { params: { slug: string } }) {
  const system = constructionSystems.find((item) => item.slug === params.slug);
  if (!system) notFound();

  return (
    <section className="u-section">
      <div className="u-container max-w-5xl">
        <p className="text-sm font-bold uppercase tracking-[0.25em] text-construction-secondary">Sistema de construccion</p>
        <h1 className="mt-4 text-5xl font-black text-construction-neutral">{system.title}</h1>
        <p className="mt-6 text-lg leading-8 text-construction-muted">{system.description}</p>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="u-card"><h2 className="text-2xl font-bold">Beneficios</h2><ul className="mt-5 grid gap-3 text-construction-muted">{system.benefits.map((item) => <li key={item}>- {item}</li>)}</ul></div>
          <div className="u-card"><h2 className="text-2xl font-bold">Ideal para</h2><ul className="mt-5 grid gap-3 text-construction-muted">{system.suitableFor.map((item) => <li key={item}>- {item}</li>)}</ul></div>
        </div>
      </div>
    </section>
  );
}
