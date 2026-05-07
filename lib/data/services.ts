import type { Service } from "@/lib/types/content";

export const services: Service[] = [
  {
    id: "construccion-casas",
    title: "Construccion de Casas",
    slug: "construccion-de-casas",
    excerpt: "Viviendas personalizadas, desde obra gruesa hasta terminaciones.",
    description:
      "Construimos casas seguras, funcionales y adaptadas al terreno, presupuesto y estilo de vida de cada familia.",
    benefits: ["Proyecto a medida", "Materiales de calidad", "Gestion tecnica integral"],
    process: ["Levantamiento", "Planificacion", "Construccion", "Entrega"],
    icon: "Casa",
    isPublished: true,
    sortOrder: 1,
  },
  {
    id: "ampliaciones-remodelaciones",
    title: "Ampliaciones y Remodelaciones",
    slug: "ampliaciones-y-remodelaciones",
    excerpt: "Modernizamos espacios existentes para ganar comodidad y valor.",
    description:
      "Ejecutamos ampliaciones, redistribuciones, mejoras estructurales y terminaciones para renovar viviendas con criterio tecnico.",
    benefits: ["Mejor uso del espacio", "Terminaciones cuidadas", "Intervenciones planificadas"],
    process: ["Diagnostico", "Propuesta", "Ejecucion", "Recepcion"],
    icon: "Plano",
    isPublished: true,
    sortOrder: 2,
  },
  {
    id: "asesorias",
    title: "Asesorias para Construccion",
    slug: "asesorias",
    excerpt: "Acompanamiento tecnico para decidir mejor antes de construir.",
    description:
      "Orientamos en factibilidad, presupuestos, etapas, materiales y criterios tecnicos para reducir riesgos del proyecto.",
    benefits: ["Decisiones informadas", "Menos incertidumbre", "Mejor control de costos"],
    process: ["Revision", "Recomendaciones", "Carta de ruta"],
    icon: "Guia",
    isPublished: true,
    sortOrder: 3,
  },
  {
    id: "alcantarillado-rural",
    title: "Alcantarillado Rural",
    slug: "alcantarillado-rural",
    excerpt: "Proyectos e instalaciones para soluciones sanitarias rurales.",
    description:
      "Desarrollamos instalaciones y proyectos de alcantarillado rural con foco en cumplimiento normativo y funcionamiento seguro.",
    benefits: ["Solucion sanitaria", "Ejecucion responsable", "Criterio normativo"],
    process: ["Evaluacion", "Proyecto", "Instalacion", "Pruebas"],
    icon: "Agua",
    isPublished: true,
    sortOrder: 4,
  },
  {
    id: "obras-menores",
    title: "Obras Menores",
    slug: "obras-menores",
    excerpt: "Trabajos puntuales con respuesta rapida y buena terminacion.",
    description:
      "Realizamos pintura, cierres, reparaciones, gasfiteria, cambios de ventanas y mejoras especificas para tu vivienda.",
    benefits: ["Rapidez", "Orden en obra", "Soluciones concretas"],
    process: ["Visita", "Cotizacion", "Ejecucion"],
    icon: "Herramienta",
    isPublished: true,
    sortOrder: 5,
  },
];
