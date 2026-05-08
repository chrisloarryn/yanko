import type { Metadata } from "next";
import Link from "next/link";
import { SectionHeading } from "@/components/site/section-heading";
import { constructionSystems } from "@/lib/data/systems";

export const metadata: Metadata = {
  title: "Sistemas de Construcción | Yanko",
  description: "Conoce sistemas de construccion y revestimientos para casas, ampliaciones y remodelaciones.",
  keywords: [
    "sistemas construcción",
    "materiales casas",
    "revestimientos remodelación",
    "tecnología constructiva"
  ],
  openGraph: {
    images: [
      {
        url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85",
        width: 1200,
        height: 630,
        alt: "Sistemas de construcción Yanko",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    images: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85",
  },
  alternates: {
    canonical: "/sistemas-de-construccion/",
  },
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
