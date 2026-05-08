import type { Metadata } from "next";
import { DynamicProjectGrid } from "@/components/site/dynamic-project-grid";
import { SectionHeading } from "@/components/site/section-heading";
import { categoryLabels, projects } from "@/lib/data/projects";
import type { ContentCategory } from "@/lib/types/content";

export const metadata: Metadata = {
  title: "Proyectos | Yanko",
  description: "Proyectos realizados de construccion, remodelaciones y ampliaciones de viviendas.",
  keywords: [
    "proyectos construcción",
    "casas terminadas",
    "remodelaciones reales",
    "portafolio Yanko"
  ],
  openGraph: {
    images: [
      {
        url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85",
        width: 1200,
        height: 630,
        alt: "Proyectos Yanko",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    images: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85",
  },
  alternates: {
    canonical: "/proyectos/",
  },
};

export default function ProjectsPage({ searchParams }: { searchParams: { categoria?: ContentCategory } }) {
  const category = searchParams.categoria;
  const visibleProjects = category ? projects.filter((project) => project.category === category) : projects;
  const categories: Array<ContentCategory | "todos"> = ["todos", "construccion", "remodelaciones", "ampliaciones"];

  return (
    <section className="u-section">
      <div className="u-container">
        <SectionHeading eyebrow="Proyectos" title="Mas de 25 anos construyendo hogares" description="Cada casa, ampliacion o remodelacion refleja compromiso con calidad, diseno y satisfaccion del cliente." align="center" />
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {categories.map((item) => <a key={item} href={item === "todos" ? "/proyectos" : `/proyectos?categoria=${item}`} className="u-btn-secondary">{categoryLabels[item]}</a>)}
        </div>
        <DynamicProjectGrid initialProjects={visibleProjects} category={category} />
      </div>
    </section>
  );
}
