import Link from "next/link";
import Image from "next/image";
import { DraftingCompass, Droplets, Hammer, Home, Ruler, Trees, Wrench } from "lucide-react";
import type { Project, Service } from "@/lib/types/content";
import { categoryLabels } from "@/lib/data/projects";

const serviceIcons = {
  Casa: Home,
  Plano: DraftingCompass,
  Guia: Ruler,
  Agua: Droplets,
  Exterior: Trees,
  Logia: Hammer,
  Herramienta: Wrench,
} as const;

export function ServiceCard({ service }: { service: Service }) {
  const Icon = serviceIcons[service.icon as keyof typeof serviceIcons] ?? Hammer;

  return (
    <Link
      href={`/servicios/${service.slug}`}
      className="group block border-t border-construction-neutral/12 py-6 transition duration-300 hover:border-construction-primary/55"
    >
      <div className="flex items-start gap-4">
        <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-construction-neutral/10 bg-white text-construction-primary transition duration-300 group-hover:border-construction-primary/35">
          <Icon aria-hidden="true" className="h-5 w-5" strokeWidth={1.8} />
        </span>
        <div>
          <h3 className="text-xl font-bold text-construction-neutral">{service.title}</h3>
          <p className="mt-3 text-sm leading-7 text-construction-muted">{service.excerpt}</p>
          <span className="mt-5 inline-block text-sm font-bold text-construction-primary">Ver servicio</span>
        </div>
      </div>
    </Link>
  );
}

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link href={`/proyectos/${project.slug}`} className="group block overflow-hidden rounded-[1.5rem] border border-construction-neutral/10 bg-white transition duration-300 hover:-translate-y-1 hover:border-construction-primary/30">
      <div className="relative aspect-[4/3] overflow-hidden bg-construction-surface">
        <Image
          src={project.coverImageUrl!}
          alt={`Imagen de portada del proyecto ${project.title}`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition duration-500 group-hover:scale-[1.03]"
        />
        <span className="absolute left-4 top-4 rounded-full bg-white/92 px-3 py-2 text-xs font-bold uppercase tracking-[0.14em] text-construction-neutral">{project.location}</span>
      </div>
      <div className="p-6">
        <div className="mb-3 flex flex-wrap gap-2 text-xs font-bold uppercase tracking-[0.18em] text-construction-primary">
          <span>{categoryLabels[project.category]}</span>
        </div>
        <h3 className="text-xl font-bold text-construction-neutral">{project.title}</h3>
        <p className="mt-3 text-sm leading-7 text-construction-muted">{project.excerpt}</p>
      </div>
    </Link>
  );
}
