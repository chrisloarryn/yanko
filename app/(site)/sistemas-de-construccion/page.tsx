import type { Metadata } from "next";
import Link from "next/link";
import { SectionHeading } from "@/components/site/section-heading";
import { constructionSystems } from "@/lib/data/systems";

export const metadata: Metadata = {
  title: "Sistemas de Construccion",
  description: "Conoce sistemas de construccion y revestimientos para casas, ampliaciones y remodelaciones.",
};

export default function SystemsPage() {
  return (
    <section className="u-section">
      <div className="u-container">
        <SectionHeading eyebrow="Sistemas" title="Materialidad y terminaciones para cada proyecto" description="Opciones constructivas y revestimientos para lograr hogares resistentes, funcionales y con identidad." />
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {constructionSystems.map((system) => <Link key={system.slug} href={`/sistemas-de-construccion/${system.slug}`} className="u-card"><h2 className="text-xl font-bold text-construction-neutral">{system.title}</h2><p className="mt-3 text-sm leading-7 text-construction-muted">{system.excerpt}</p></Link>)}
        </div>
      </div>
    </section>
  );
}
