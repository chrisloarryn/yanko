import Link from "next/link";
import Image from "next/image";
import { ProjectCard, ServiceCard } from "@/components/site/cards";
import { InteractiveProjectPlanner } from "@/components/site/interactive-project-planner";
import { SectionHeading } from "@/components/site/section-heading";
import { projects } from "@/lib/data/projects";
import { services } from "@/lib/data/services";
import { metrics, siteCopy, values } from "@/lib/data/site";
import type { Metadata } from "next";

export function generateMetadata(): Metadata {
  return {
    title: `Yanko | ${siteCopy.heroTitle}`,
    description: siteCopy.heroSubtitle,
    keywords: [
      "Yanko inicio",
      "construcción casas",
      "remodelaciones Chile"
    ],
    openGraph: {
      images: [
        {
          url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85",
          width: 1200,
          height: 630,
          alt: siteCopy.heroTitle,
        },
      ],
      type: "website",
    },
    twitter: {
      images: ["https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85"],
    },
    alternates: {
      canonical: "/",
    },
  };
}

export default function HomePage() {
  const featuredProjects = projects.filter((project) => project.isFeatured).slice(0, 6);
  const proofPoints = [
    "Visita técnica inicial en terreno",
    "Propuesta con alcance y presupuesto por partidas",
    "Reporte semanal de avance con próximos hitos",
  ];
  const testimonials = [
    {
      quote:
        "Cumplieron plazo y presupuesto con una coordinacion impecable. Siempre supimos en que etapa iba la obra.",
      author: "Familia Rojas",
      context: "Casa unifamiliar, Talca",
    },
    {
      quote:
        "El nivel de terminaciones y la comunicacion diaria marcaron una diferencia enorme frente a otras constructoras.",
      author: "Carolina M.",
      context: "Remodelación integral, Maule",
    },
    {
      quote:
        "Nos orientaron desde el diseno hasta la recepcion final. Cero improvisacion y decisiones claras todo el tiempo.",
      author: "Jorge y Paula",
      context: "Ampliación y quincho, San Clemente",
    },
  ];
  const processSteps = [
    {
      title: "Visita a terreno",
      description: "Levantamos medidas, condiciones del terreno, necesidades y prioridades para definir un alcance realista.",
    },
    {
      title: "Diseño y presupuesto",
      description: "Ordenamos distribucion, materiales, plazos y costos para que tomes decisiones con informacion clara.",
    },
    {
      title: "Ejecución supervisada",
      description: "Coordinamos obra, compras y terminaciones con seguimiento tecnico hasta la recepcion del proyecto.",
    },
  ];
  const buildSystem = [
    {
      title: "Estándares de obra",
      description: "Usamos criterios repetibles para ordenar partidas, compras, control de avances y terminaciones.",
    },
    {
      title: "Tecnologia practica",
      description: "Documentamos avances, decisiones y pendientes para mantener trazabilidad durante la ejecucion.",
    },
    {
      title: "Control transparente",
      description: "Compartimos estado, proximos pasos y alertas relevantes antes de que afecten plazo o presupuesto.",
    },
    {
      title: "Expertos coordinados",
      description: "Integramos maestros, especialistas y supervisión técnica según la complejidad de cada proyecto.",
    },
  ];

  return (
    <>
      <section className="relative min-h-[760px] overflow-hidden bg-construction-neutral text-white">
        <Image
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2200&q=85"
          alt="Fondo hero de construcción"
          fill
          sizes="100vw"
          priority
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(104deg, rgba(8, 17, 33, 0.92) 0%, rgba(8, 17, 33, 0.7) 38%, rgba(8, 17, 33, 0.22) 100%)",
          }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_12%,rgba(239,131,84,0.28),transparent_28%),radial-gradient(circle_at_30%_70%,rgba(13,118,110,0.22),transparent_30%)]" />
        <div className="u-container relative flex min-h-[760px] items-center py-24">
          <div className="max-w-3xl">
            <p className="mb-5 inline-flex rounded-full border border-white/25 bg-white/12 px-4 py-2 text-sm font-bold uppercase tracking-[0.18em] text-cyan-100">Construcción de casas y remodelaciones</p>
            <h1 className="text-5xl font-black tracking-tight md:text-7xl md:leading-[0.98]">{siteCopy.heroTitle}</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/86">{siteCopy.heroSubtitle}</p>
            <div className="mt-7 flex flex-wrap gap-2">
              {proofPoints.map((point) => (
                <span key={point} className="rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-semibold text-white/90">
                  {point}
                </span>
              ))}
            </div>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href="/contacto" className="u-btn-primary">Cotiza tu proyecto</Link>
              <Link href="/proyectos" className="u-btn-light">Ver proyectos</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-construction-primary/10 bg-white/75 backdrop-blur">
        <div className="u-container grid gap-6 py-8 md:grid-cols-3">
          {metrics.map((metric) => (
            <div key={metric.label} className="rounded-2xl border border-construction-primary/10 bg-white/80 p-5">
              <div className="text-4xl font-black text-construction-primary">{metric.value}</div>
              <div className="mt-1 text-sm font-semibold uppercase tracking-[0.16em] text-construction-muted">{metric.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="u-section">
        <div className="u-container grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <SectionHeading eyebrow="Servicios" title="Disenos modernos para tu espacio" description="Soluciones integrales para construir, ampliar o remodelar tu hogar con propuestas a medida y terminaciones bien resueltas." />
            <Link href="/servicios" className="u-btn-secondary mt-7">Ver todos los servicios</Link>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {services.map((service) => <ServiceCard key={service.slug} service={service} />)}
          </div>
        </div>
      </section>

      <section className="u-section pt-0">
        <div className="u-container">
          <div className="rounded-3xl border border-construction-primary/15 bg-white/80 p-7 shadow-xl shadow-cyan-900/10 backdrop-blur md:p-10">
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <div>
                <SectionHeading
                  eyebrow="Prueba social"
                  title="Clientes que recomiendan por cumplimiento, no por promesas"
                  description="Cada proyecto se ejecuta con hitos medibles, control de presupuesto y comunicacion constante con la familia." 
                />
                <Link href="/contacto" className="u-btn-primary mt-7">Agendar visita tecnica</Link>
              </div>
              <div className="grid gap-4 md:grid-cols-3">
                {testimonials.map((item) => (
                  <article key={item.author} className="rounded-2xl border border-construction-primary/10 bg-white p-5">
                    <p className="text-sm leading-7 text-construction-muted">&ldquo;{item.quote}&rdquo;</p>
                    <p className="mt-4 text-sm font-bold text-construction-neutral">{item.author}</p>
                    <p className="text-xs uppercase tracking-[0.14em] text-construction-secondary">{item.context}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white/70 u-section">
        <div className="u-container grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="relative min-h-[520px] overflow-hidden rounded-3xl shadow-xl shadow-cyan-900/20">
            <Image
              src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1400&q=85"
              alt="Obras de construcción Yanko en terreno"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
            <div className="absolute bottom-6 left-6 max-w-xs rounded-2xl bg-white p-6 shadow-lg">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-construction-secondary">Nuestro compromiso</p>
              <p className="mt-3 text-2xl font-black leading-tight text-construction-neutral">Cada hogar lleva nuestra firma de calidad.</p>
            </div>
          </div>
          <div>
            <SectionHeading eyebrow="Sobre nosotros" title="Entregar calidad y confianza en cada construccion" description={siteCopy.about} />
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {values.map((value) => (
                <div key={value.title} className="rounded-2xl border border-construction-primary/12 bg-construction-surface p-6">
                  <h3 className="font-bold text-construction-primary">{value.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-construction-muted">{value.description}</p>
                </div>
              ))}
            </div>
            <Link href="/nosotros" className="u-btn-primary mt-8">Conoce mas</Link>
          </div>
        </div>
      </section>

      <InteractiveProjectPlanner />

      <section className="bg-[linear-gradient(135deg,#081325_0%,#0b2a46_55%,#0d766e_130%)] py-16 text-white">
        <div className="u-container grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-100">Como trabajamos</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight">Te guiamos desde la idea hasta la entrega</h2>
            <p className="mt-5 leading-8 text-white/72">Cada proyecto se planifica con visita a terreno, presupuesto transparente y acompanamiento tecnico para transformar tu espacio sin improvisar.</p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {processSteps.map((step, index) => (
              <div key={step.title} className="rounded-2xl border border-white/15 bg-white/8 p-6 backdrop-blur-sm">
                <div className="text-sm font-black text-construction-secondary">0{index + 1}</div>
                <h3 className="mt-4 text-xl font-bold">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/68">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white/80 u-section">
        <div className="u-container">
          <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
            <SectionHeading eyebrow="Sistema Yanko" title="Como construimos con orden" description="Integramos planificacion, control y experiencia en terreno para que cada etapa tenga responsables, evidencias y decisiones claras." />
            <div className="grid gap-4 sm:grid-cols-2">
              {buildSystem.map((item) => (
                <div key={item.title} className="rounded-2xl border border-construction-primary/12 bg-construction-cream p-6">
                  <h3 className="text-lg font-black text-construction-neutral">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-construction-muted">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-10 overflow-hidden rounded-3xl bg-construction-neutral text-white shadow-xl shadow-cyan-900/20">
            <div className="grid lg:grid-cols-[1.15fr_0.85fr]">
              <div className="relative min-h-[360px] overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1400&q=85"
                  alt="Control de proyecto en obra de construcción"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 58vw, 100vw"
                />
              </div>
              <div className="p-8 md:p-10">
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-100">Control de proyecto</p>
                <h3 className="mt-4 text-3xl font-black tracking-tight">Menos improvisacion, mas claridad en terreno</h3>
                <p className="mt-5 leading-8 text-white/72">Antes de construir definimos alcance, secuencia y responsables. Durante la obra registramos avances y resolvemos ajustes con informacion concreta.</p>
                <Link href="/contacto" className="u-btn-light mt-7">Agenda una visita</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="u-section">
        <div className="u-container">
          <SectionHeading eyebrow="Proyectos" title="Mas de 25 anos construyendo confianza" description="Una seleccion de obras residenciales ejecutadas en distintos contextos, terrenos y necesidades." align="center" />
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project) => <ProjectCard key={project.slug} project={project} />)}
          </div>
          <div className="mt-10 text-center"><Link href="/proyectos" className="u-btn-secondary">Ver todos los proyectos</Link></div>
        </div>
      </section>

      <section className="bg-[linear-gradient(112deg,#0d766e_0%,#0a5a67_58%,#0d3d66_120%)] py-16 text-white">
        <div className="u-container grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <h2 className="text-4xl font-black tracking-tight">Listo para comenzar tu proyecto?</h2>
            <p className="mt-4 max-w-2xl leading-8 text-white/80">Te ayudamos a construir, ampliar o remodelar tu hogar con una ruta clara desde la primera visita hasta la entrega.</p>
          </div>
          <Link href="/contacto" className="u-btn-light">Solicita tu cotizacion</Link>
        </div>
      </section>
    </>
  );
}
