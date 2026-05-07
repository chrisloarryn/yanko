import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { categoryLabels, projects } from "@/lib/data/projects";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const project = projects.find((item) => item.slug === params.slug);
  return { title: project?.title || "Proyecto", description: project?.excerpt };
}

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const project = projects.find((item) => item.slug === params.slug);
  if (!project) notFound();

  return (
    <section className="u-section">
      <div className="u-container max-w-6xl">
        <p className="text-sm font-bold uppercase tracking-[0.25em] text-construction-secondary">{categoryLabels[project.category]} | {project.location}</p>
        <h1 className="mt-4 text-5xl font-black text-construction-neutral">{project.title}</h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-construction-muted">{project.description}</p>
        <div className="mt-10 grid min-h-96 place-items-center rounded-[2.5rem] bg-[radial-gradient(circle_at_top_left,#d5f0df,#0f6848)] p-10 text-center text-white">
          <span className="text-5xl font-black">{project.title.replace("Proyecto ", "")}</span>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {project.features.map((feature) => <div key={feature} className="u-card"><h2 className="font-bold text-construction-primary">{feature}</h2></div>)}
        </div>
        <Link href="/contacto" className="u-btn-primary mt-10">Cotizar un proyecto similar</Link>
      </div>
    </section>
  );
}
