import type { Metadata } from "next";
import { ProjectCard } from "@/components/site/cards";
import { SectionHeading } from "@/components/site/section-heading";
import { categoryLabels, projects } from "@/lib/data/projects";
import type { ContentCategory } from "@/lib/types/content";

export const metadata: Metadata = {
  title: "Proyectos",
  description: "Proyectos realizados de construccion, remodelaciones y ampliaciones de viviendas.",
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
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {visibleProjects.map((project) => <ProjectCard key={project.slug} project={project} />)}
        </div>
      </div>
    </section>
  );
}
