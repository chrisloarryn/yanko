import Link from "next/link";
import Image from "next/image";
import type { Project, Service } from "@/lib/types/content";
import { categoryLabels } from "@/lib/data/projects";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <Link href={`/servicios/${service.slug}`} className="u-card group block transition duration-300 hover:-translate-y-1.5 hover:border-construction-primary/30 hover:shadow-xl">
      <div className="mb-5 inline-flex rounded-xl bg-construction-surface px-4 py-2 text-sm font-bold text-construction-primary">{service.icon}</div>
      <h3 className="text-xl font-bold text-construction-neutral">{service.title}</h3>
      <p className="mt-3 text-sm leading-7 text-construction-muted">{service.excerpt}</p>
      <span className="mt-6 inline-block text-sm font-bold text-construction-primary">Ver servicio</span>
    </Link>
  );
}

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link href={`/proyectos/${project.slug}`} className="group overflow-hidden rounded-2xl border border-construction-primary/15 bg-white/95 shadow-sm transition duration-300 hover:-translate-y-1.5 hover:shadow-xl">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={project.coverImageUrl}
          alt={`Imagen de portada del proyecto ${project.title}`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover"
        />
        <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-2 text-xs font-bold uppercase tracking-[0.14em] text-construction-primary">{project.location}</span>
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
