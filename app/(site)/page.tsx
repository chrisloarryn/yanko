import Link from "next/link";
import { ProjectCard, ServiceCard } from "@/components/site/cards";
import { SectionHeading } from "@/components/site/section-heading";
import { projects } from "@/lib/data/projects";
import { services } from "@/lib/data/services";
import { metrics, siteCopy, values } from "@/lib/data/site";

export default function HomePage() {
  const featuredProjects = projects.filter((project) => project.isFeatured).slice(0, 6);

  return (
    <>
      <section className="relative overflow-hidden bg-[linear-gradient(135deg,#fbfaf5_0%,#edf7ef_48%,#d7eadb_100%)]">
        <div className="u-container grid min-h-[680px] items-center gap-12 py-20 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="mb-5 inline-flex rounded-full bg-white/80 px-4 py-2 text-sm font-bold text-construction-primary shadow-sm">Construccion de casas, ampliaciones y remodelaciones</p>
            <h1 className="max-w-4xl text-5xl font-black tracking-tight text-construction-neutral md:text-7xl">{siteCopy.heroTitle}</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-construction-muted">{siteCopy.heroSubtitle}</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href="/contacto" className="u-btn-primary">Cotiza tu proyecto</Link>
              <Link href="/proyectos" className="u-btn-secondary">Ver proyectos</Link>
            </div>
          </div>
          <div className="rounded-[2.5rem] bg-construction-primary p-6 text-white shadow-2xl shadow-emerald-950/20">
            <div className="rounded-[2rem] border border-white/20 bg-white/10 p-8 backdrop-blur">
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-emerald-100">Nuestro compromiso</p>
              <h2 className="mt-5 text-4xl font-black">Cada hogar lleva nuestra firma de calidad.</h2>
              <p className="mt-5 leading-8 text-white/80">No solo construimos casas. Construimos confianza, relaciones duraderas y espacios preparados para vivir mejor.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="u-section">
        <div className="u-container">
          <SectionHeading eyebrow="Servicios" title="Soluciones integrales para tu hogar" description="Desde construir desde cero hasta transformar espacios existentes, trabajamos con orden, criterio tecnico y terminaciones bien resueltas." align="center" />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => <ServiceCard key={service.slug} service={service} />)}
          </div>
        </div>
      </section>

      <section className="bg-white u-section">
        <div className="u-container grid gap-12 lg:grid-cols-2 lg:items-center">
          <SectionHeading eyebrow="Sobre nosotros" title="Calidad y confianza en cada construccion" description={siteCopy.about} />
          <div className="grid gap-4 sm:grid-cols-2">
            {values.map((value) => (
              <div key={value.title} className="rounded-3xl bg-construction-surface p-6">
                <h3 className="font-bold text-construction-primary">{value.title}</h3>
                <p className="mt-2 text-sm leading-7 text-construction-muted">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="u-section">
        <div className="u-container">
          <SectionHeading eyebrow="Proyectos" title="Obras realizadas con seriedad" description="Una seleccion de proyectos residenciales ejecutados en distintos contextos, terrenos y necesidades." />
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project) => <ProjectCard key={project.slug} project={project} />)}
          </div>
          <div className="mt-10 text-center"><Link href="/proyectos" className="u-btn-secondary">Ver todos los proyectos</Link></div>
        </div>
      </section>

      <section className="bg-construction-primary py-12 text-white">
        <div className="u-container grid gap-6 text-center md:grid-cols-3">
          {metrics.map((metric) => (
            <div key={metric.label}>
              <div className="text-5xl font-black">{metric.value}</div>
              <div className="mt-2 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-100">{metric.label}</div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
