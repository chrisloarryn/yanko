import Link from "next/link";
import type { Project, Service } from "@/lib/types/content";
import { categoryLabels } from "@/lib/data/projects";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <Link href={`/servicios/${service.slug}`} className="u-card group block transition hover:-translate-y-1 hover:shadow-xl hover:shadow-emerald-950/10">
      <div className="mb-5 inline-flex rounded-md bg-construction-surface px-4 py-2 text-sm font-bold text-construction-primary">{service.icon}</div>
      <h3 className="text-xl font-bold text-construction-neutral">{service.title}</h3>
      <p className="mt-3 text-sm leading-7 text-construction-muted">{service.excerpt}</p>
      <span className="mt-6 inline-block text-sm font-bold text-construction-primary">Ver servicio</span>
    </Link>
  );
}

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link href={`/proyectos/${project.slug}`} className="group overflow-hidden rounded-lg border border-emerald-950/10 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-emerald-950/10">
      <div
        className="relative aspect-[4/3] bg-cover bg-center"
        style={{ backgroundImage: `url('${project.coverImageUrl}')` }}
      >
        <span className="absolute left-4 top-4 rounded-sm bg-white/90 px-3 py-2 text-xs font-bold uppercase tracking-[0.14em] text-construction-primary">{project.location}</span>
      </div>
      <div className="p-6">
        <div className="mb-3 flex flex-wrap gap-2 text-xs font-bold uppercase tracking-[0.18em] text-construction-secondary">
          <span>{categoryLabels[project.category]}</span>
        </div>
        <h3 className="text-xl font-bold text-construction-neutral">{project.title}</h3>
        <p className="mt-3 text-sm leading-7 text-construction-muted">{project.excerpt}</p>
      </div>
    </Link>
  );
}
