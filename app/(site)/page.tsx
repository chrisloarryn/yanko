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
        "Cumplieron plazo y presupuesto con una coordinación impecable. Siempre supimos en qué etapa iba la obra.",
      author: "Familia Rojas",
      context: "Casa unifamiliar, Talca",
    },
    {
      quote:
        "El nivel de terminaciones y la comunicación diaria marcó una diferencia enorme frente a otras constructoras.",
      author: "Carolina M.",
      context: "Remodelación integral, Maule",
    },
    {
      quote:
        "Nos orientaron desde el diseño hasta la recepción final. Cero improvisación y decisiones claras todo el tiempo.",
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
      description: "Ordenamos distribución, materiales, plazos y costos para que tomes decisiones con información clara.",
    },
    {
      title: "Ejecución supervisada",
      description: "Coordinamos obra, compras y terminaciones con seguimiento técnico hasta la recepción del proyecto.",
    },
  ];
  const buildSystem = [
    {
      title: "Estándares de obra",
      description: "Usamos criterios repetibles para ordenar partidas, compras, control de avances y terminaciones.",
    },
    {
      title: "Tecnología práctica",
      description: "Documentamos avances, decisiones y pendientes para mantener trazabilidad durante la ejecución.",
    },
    {
      title: "Control transparente",
      description: "Compartimos estado, próximos pasos y alertas relevantes antes de que afecten plazo o presupuesto.",
    },
    {
      title: "Expertos coordinados",
      description: "Integramos maestros, especialistas y supervisión técnica según la complejidad de cada proyecto.",
    },
  ];

  return (
    <>
      <section className="border-b border-construction-neutral/10 bg-construction-cream">
        <div className="u-container grid min-h-[calc(100dvh-118px)] gap-10 py-12 md:py-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="max-w-3xl">
            <p className="mb-5 inline-flex rounded-full border border-construction-neutral/12 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-construction-primary">Construcción de casas y remodelaciones</p>
            <h1 className="text-4xl font-black tracking-tight text-construction-neutral sm:text-5xl md:leading-[1.03] xl:text-6xl">{siteCopy.heroTitle}</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-construction-muted">{siteCopy.heroSubtitle}</p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link href="/contacto" className="u-btn-primary">Cotiza tu proyecto</Link>
              <Link href="/proyectos" className="u-btn-secondary">Ver proyectos</Link>
            </div>
            <div className="mt-7 grid max-w-2xl gap-3 sm:grid-cols-3">
              {proofPoints.map((point) => (
                <div key={point} className="border-l border-construction-neutral/14 pl-4 text-sm font-bold leading-6 text-construction-neutral/82">
                  {point}
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="relative min-h-[460px] overflow-hidden rounded-[2rem] border border-construction-neutral/10 bg-white md:min-h-[620px]">
              <Image
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1800&q=85"
                alt="Casa residencial contemporánea construida por equipo profesional"
                fill
                sizes="(min-width: 1024px) 52vw, 100vw"
                priority
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 left-5 right-5 border border-construction-neutral/10 bg-white p-5 shadow-[0_24px_60px_-44px_rgba(21,26,29,0.75)] md:left-auto md:right-8 md:w-[340px]">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-construction-primary">Sistema Yanko</p>
              <p className="mt-2 text-lg font-black leading-tight text-construction-neutral">Plan de obra, control semanal y decisiones documentadas.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-construction-neutral/10 bg-white">
        <div className="u-container grid gap-0 py-0 md:grid-cols-3">
          {metrics.map((metric) => (
            <div key={metric.label} className="border-b border-construction-neutral/10 py-7 md:border-b-0 md:border-r md:px-8 md:last:border-r-0">
              <div className="text-4xl font-black text-construction-neutral">{metric.value}</div>
              <div className="mt-2 text-xs font-bold uppercase tracking-[0.16em] text-construction-muted">{metric.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="u-section">
        <div className="u-container grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <SectionHeading eyebrow="Servicios" title="Diseños modernos para tu espacio" description="Soluciones integrales para construir, ampliar o remodelar tu hogar con propuestas a medida y terminaciones bien resueltas." />
            <Link href="/servicios" className="u-btn-secondary mt-7">Ver todos los servicios</Link>
          </div>
          <div className="grid gap-0 md:grid-cols-2 md:gap-x-10">
            {services.map((service) => <ServiceCard key={service.slug} service={service} />)}
          </div>
        </div>
      </section>

      <section className="u-section pt-0">
        <div className="u-container">
          <div className="border-y border-construction-neutral/12 bg-white px-0 py-10 md:px-8">
            <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
              <div>
                <SectionHeading
                  eyebrow="Prueba social"
                  title="Clientes que recomiendan por cumplimiento, no por promesas"
                  description="Cada proyecto se ejecuta con hitos medibles, control de presupuesto y comunicación constante con la familia."
                />
                <Link href="/contacto" className="u-btn-primary mt-7">Agendar visita tecnica</Link>
              </div>
              <div className="grid gap-0 md:grid-cols-3">
                {testimonials.map((item) => (
                  <article key={item.author} className="border-t border-construction-neutral/10 p-5 md:border-l md:border-t-0">
                    <p className="text-sm leading-7 text-construction-muted">&ldquo;{item.quote}&rdquo;</p>
                    <p className="mt-4 text-sm font-bold text-construction-neutral">{item.author}</p>
                    <p className="text-xs font-bold uppercase tracking-[0.14em] text-construction-primary">{item.context}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white u-section">
        <div className="u-container grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="relative min-h-[520px] overflow-hidden rounded-[1.5rem] border border-construction-neutral/10">
            <Image
              src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1400&q=85"
              alt="Obras de construcción Yanko en terreno"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
            <div className="absolute bottom-6 left-6 max-w-xs bg-white p-6">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-construction-primary">Nuestro compromiso</p>
              <p className="mt-3 text-2xl font-black leading-tight text-construction-neutral">Cada hogar lleva nuestra firma de calidad.</p>
            </div>
          </div>
          <div>
            <SectionHeading eyebrow="Sobre nosotros" title="Entregar calidad y confianza en cada construcción" description={siteCopy.about} />
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {values.map((value) => (
                <div key={value.title} className="border-t border-construction-neutral/12 pt-5">
                  <h3 className="font-bold text-construction-primary">{value.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-construction-muted">{value.description}</p>
                </div>
              ))}
            </div>
            <Link href="/nosotros" className="u-btn-primary mt-8">Conoce más</Link>
          </div>
        </div>
      </section>

      <InteractiveProjectPlanner />

      <section className="border-y border-construction-neutral/10 bg-construction-neutral py-16 text-white">
        <div className="u-container grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-white/60">Cómo trabajamos</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight">Te guiamos desde la idea hasta la entrega</h2>
            <p className="mt-5 leading-8 text-white/72">Cada proyecto se planifica con visita a terreno, presupuesto transparente y acompañamiento técnico para transformar tu espacio sin improvisar.</p>
          </div>
          <div className="grid gap-0 md:grid-cols-3">
            {processSteps.map((step, index) => (
              <div key={step.title} className="border-t border-white/14 p-6 md:border-l md:border-t-0">
                <div className="text-sm font-black text-white/46">0{index + 1}</div>
                <h3 className="mt-4 text-xl font-bold">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/68">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-construction-cream u-section">
        <div className="u-container">
          <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
            <SectionHeading eyebrow="Sistema Yanko" title="Cómo construimos con orden" description="Integramos planificación, control y experiencia en terreno para que cada etapa tenga responsables, evidencias y decisiones claras." />
            <div className="grid gap-4 sm:grid-cols-2">
              {buildSystem.map((item) => (
                <div key={item.title} className="border-t border-construction-neutral/12 pt-5">
                  <h3 className="text-lg font-black text-construction-neutral">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-construction-muted">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-10 overflow-hidden rounded-[1.5rem] border border-construction-neutral/10 bg-construction-neutral text-white">
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
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-white/58">Control de proyecto</p>
                <h3 className="mt-4 text-3xl font-black tracking-tight">Menos improvisación, más claridad en terreno</h3>
                <p className="mt-5 leading-8 text-white/72">Antes de construir definimos alcance, secuencia y responsables. Durante la obra registramos avances y resolvemos ajustes con información concreta.</p>
                <Link href="/contacto" className="u-btn-light mt-7">Agenda una visita</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="u-section">
        <div className="u-container">
          <SectionHeading eyebrow="Proyectos" title="Más de 25 años construyendo confianza" description="Una selección de obras residenciales ejecutadas en distintos contextos, terrenos y necesidades." />
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project) => <ProjectCard key={project.slug} project={project} />)}
          </div>
          <div className="mt-10"><Link href="/proyectos" className="u-btn-secondary">Ver todos los proyectos</Link></div>
        </div>
      </section>

      <section className="border-y border-construction-neutral/10 bg-white py-16">
        <div className="u-container grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <h2 className="text-4xl font-black tracking-tight text-construction-neutral">¿Listo para comenzar tu proyecto?</h2>
            <p className="mt-4 max-w-2xl leading-8 text-construction-muted">Te ayudamos a construir, ampliar o remodelar tu hogar con una ruta clara desde la primera visita hasta la entrega.</p>
          </div>
          <Link href="/contacto" className="u-btn-primary">Solicita tu cotización</Link>
        </div>
      </section>
    </>
  );
}
