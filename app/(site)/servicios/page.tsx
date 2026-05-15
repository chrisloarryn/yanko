import type { Metadata } from "next";
import { DynamicServiceGrid } from "@/components/site/dynamic-service-grid";
import { SectionHeading } from "@/components/site/section-heading";
import { services } from "@/lib/data/services";

export const metadata: Metadata = {
  title: "Servicios de construcción | Yanko",
  description: "Construcción de casas, ampliaciones, remodelaciones, piscinas, quinchos, logias y obras menores en Talca y Maule. Calidad, transparencia y ejecución responsable.",
  keywords: [
    "servicios construcción",
    "casas llave en mano",
    "piscinas quinchos",
    "remodelaciones Talca"
  ],
  openGraph: {
    images: [
      {
        url: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=85",
        width: 1200,
        height: 630,
        alt: "Servicios de construcción Yanko",
      },
    ],
    type: "website",
  },
  twitter: {
    images: ["https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=85"],
    card: "summary_large_image",
  },
  alternates: {
    canonical: "/servicios/",
  },
};

export default function ServiciosPage() {
  return (
    <section className="u-section">
      <div className="u-container">
        <SectionHeading eyebrow="Servicios" title="Construimos, ampliamos y renovamos tu hogar" description="Soluciones integrales para proyectos residenciales con acompañamiento técnico y ejecución responsable." align="center" />
        <DynamicServiceGrid initialServices={services} />
      </div>
    </section>
  );
}
