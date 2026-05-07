import Link from "next/link";
import type { Project, Service } from "@/lib/types/content";
import { categoryLabels } from "@/lib/data/projects";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <Link href={`/servicios/${service.slug}`} className="u-card group block transition hover:-translate-y-1 hover:shadow-xl hover:shadow-emerald-950/10">
      <div className="mb-5 inline-flex rounded-2xl bg-construction-surface px-4 py-2 text-sm font-bold text-construction-primary">{service.icon}</div>
      <h3 className="text-xl font-bold text-construction-neutral">{service.title}</h3>
      <p className="mt-3 text-sm leading-7 text-construction-muted">{service.excerpt}</p>
      <span className="mt-6 inline-block text-sm font-bold text-construction-primary">Ver servicio</span>
    </Link>
  );
}

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link href={`/proyectos/${project.slug}`} className="group overflow-hidden rounded-3xl border border-emerald-950/10 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-emerald-950/10">
      <div className="grid aspect-[4/3] place-items-center bg-[radial-gradient(circle_at_top_left,#d5f0df,#0f6848)] p-6 text-center text-white">
        <span className="text-2xl font-black tracking-tight">{project.title.replace("Proyecto ", "")}</span>
      </div>
      <div className="p-6">
        <div className="mb-3 flex flex-wrap gap-2 text-xs font-bold uppercase tracking-[0.18em] text-construction-secondary">
          <span>{categoryLabels[project.category]}</span>
          <span>{project.location}</span>
        </div>
        <h3 className="text-xl font-bold text-construction-neutral">{project.title}</h3>
        <p className="mt-3 text-sm leading-7 text-construction-muted">{project.excerpt}</p>
      </div>
    </Link>
  );
}
