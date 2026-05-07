import type { Metadata } from "next";
import { DynamicServiceGrid } from "@/components/site/dynamic-service-grid";
import { SectionHeading } from "@/components/site/section-heading";
import { services } from "@/lib/data/services";

export const metadata: Metadata = {
  title: "Servicios",
  description: "Servicios de construccion de casas, ampliaciones, remodelaciones, asesorias y alcantarillado rural.",
};

export default function ServiciosPage() {
  return (
    <section className="u-section">
      <div className="u-container">
        <SectionHeading eyebrow="Servicios" title="Construimos, ampliamos y renovamos tu hogar" description="Soluciones integrales para proyectos residenciales con acompanamiento tecnico y ejecucion responsable." align="center" />
        <DynamicServiceGrid initialServices={services} />
      </div>
    </section>
  );
}
