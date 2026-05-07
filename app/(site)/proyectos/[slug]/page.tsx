import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BeforeAfterSlider } from "@/components/site/before-after-slider";
import { categoryLabels, projects } from "@/lib/data/projects";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  return { title: project?.title || "Proyecto", description: project?.excerpt };
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();

  return (
    <section className="u-section">
      <div className="u-container max-w-6xl">
        <p className="text-sm font-bold uppercase tracking-[0.25em] text-construction-secondary">Caso de estudio | {categoryLabels[project.category]} | {project.location}</p>
        <h1 className="mt-4 text-5xl font-black text-construction-neutral">{project.title}</h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-construction-muted">
          Proyecto planificado para maximizar funcionalidad, calidad de terminaciones y control de presupuesto desde el diseno hasta la entrega final.
        </p>
        <div className="mt-8 grid gap-3 sm:grid-cols-3">
          <div className="rounded-2xl border border-construction-primary/10 bg-white/80 p-4">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-construction-muted">Tiempo estimado</p>
            <p className="mt-2 text-2xl font-black text-construction-neutral">5-7 meses</p>
          </div>
          <div className="rounded-2xl border border-construction-primary/10 bg-white/80 p-4">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-construction-muted">Superficie referencial</p>
            <p className="mt-2 text-2xl font-black text-construction-neutral">140-210 m2</p>
          </div>
          <div className="rounded-2xl border border-construction-primary/10 bg-white/80 p-4">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-construction-muted">Modalidad</p>
            <p className="mt-2 text-2xl font-black text-construction-neutral">Llave en mano</p>
          </div>
        </div>
        <div className="mt-10 rounded-[2.5rem] bg-[radial-gradient(circle_at_top_left,#3cb8cb,#0d3f64)] p-4 md:p-6">
          <BeforeAfterSlider
            beforeImage="https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?auto=format&fit=crop&w=1600&q=80"
            afterImage={project.coverImageUrl ?? "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80"}
          />
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          <article className="u-card">
            <h2 className="text-lg font-black text-construction-neutral">Desafio del cliente</h2>
            <p className="mt-3 text-sm leading-7 text-construction-muted">
              Resolver distribucion, tiempos y presupuesto en un terreno con requerimientos especificos de implantacion y terminaciones.
            </p>
          </article>
          <article className="u-card">
            <h2 className="text-lg font-black text-construction-neutral">Nuestra solucion</h2>
            <p className="mt-3 text-sm leading-7 text-construction-muted">
              Planificacion por etapas, coordinacion de especialidades y control tecnico semanal para anticipar desajustes y mantener el ritmo de obra.
            </p>
          </article>
          <article className="u-card">
            <h2 className="text-lg font-black text-construction-neutral">Resultado</h2>
            <p className="mt-3 text-sm leading-7 text-construction-muted">
              Proyecto entregado con alto estandar de terminaciones, trazabilidad completa y un proceso claro para la familia en cada decision.
            </p>
          </article>
        </div>
        <div className="mt-6 grid gap-3 md:grid-cols-3">
          {project.features.map((feature) => (
            <div key={feature} className="rounded-xl border border-construction-primary/10 bg-construction-surface px-4 py-3 text-sm font-semibold text-construction-neutral">
              {feature}
            </div>
          ))}
        </div>
        <Link href="/contacto" className="u-btn-primary mt-10">Cotizar un proyecto similar</Link>
      </div>
    </section>
  );
}
