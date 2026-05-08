import type { Service } from "@/lib/types/content";

export const services: Service[] = [
  {
    id: "construccion-casas",
    title: "Construcción de Casas",
    slug: "construccion-de-casas",
    excerpt: "Viviendas personalizadas, desde obra gruesa hasta terminaciones.",
    description:
      "Construimos casas seguras, funcionales y adaptadas al terreno, presupuesto y estilo de vida de cada familia.",
    benefits: ["Proyecto a medida", "Materiales de calidad", "Gestión técnica integral"],
    process: ["Levantamiento", "Planificación", "Construcción", "Entrega"],
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
      "Ejecutamos ampliaciones, redistribuciones, mejoras estructurales y terminaciones para renovar viviendas con criterio técnico.",
    benefits: ["Mejor uso del espacio", "Terminaciones cuidadas", "Intervenciones planificadas"],
    process: ["Diagnóstico", "Propuesta", "Ejecución", "Recepción"],
    icon: "Plano",
    isPublished: true,
    sortOrder: 2,
  },
  {
    id: "asesorias",
    title: "Asesorías para Construcción",
    slug: "asesorias",
    excerpt: "Acompañamiento técnico para decidir mejor antes de construir.",
    description:
      "Orientamos en factibilidad, presupuestos, etapas, materiales y criterios técnicos para reducir riesgos del proyecto.",
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
    benefits: ["Solución sanitaria", "Ejecución responsable", "Criterio normativo"],
    process: ["Evaluación", "Proyecto", "Instalación", "Pruebas"],
    icon: "Agua",
    isPublished: true,
    sortOrder: 4,
  },
  {
    id: "piscinas-quinchos",
    title: "Piscinas y Quinchos",
    slug: "piscinas-y-quinchos",
    excerpt: "Espacios exteriores pensados para disfrutar, recibir y sumar valor.",
    description:
      "Diseñamos y ejecutamos piscinas, quinchos, terrazas y zonas exteriores con materiales duraderos y una distribución funcional para cada familia.",
    benefits: ["Diseño a medida", "Terminaciones resistentes", "Integración con la vivienda"],
    process: ["Visita", "Diseño", "Presupuesto", "Construcción"],
    icon: "Exterior",
    isPublished: true,
    sortOrder: 5,
  },
  {
    id: "logias-terrazas",
    title: "Logias y Terrazas",
    slug: "logias-y-terrazas",
    excerpt: "Ambientes complementarios mas ordenados, versatiles y luminosos.",
    description:
      "Transformamos logias, terrazas y espacios de apoyo en areas funcionales, bien iluminadas y adaptadas a la rutina diaria del hogar.",
    benefits: ["Mejor distribucion", "Mayor funcionalidad", "Uso eficiente del espacio"],
    process: ["Diagnóstico", "Propuesta", "Ejecución", "Entrega"],
    icon: "Logia",
    isPublished: true,
    sortOrder: 6,
  },
  {
    id: "obras-menores",
    title: "Obras Menores",
    slug: "obras-menores",
    excerpt: "Trabajos puntuales con respuesta rápida y buena terminación.",},{
    description:
      "Realizamos pintura, cierres, reparaciones, gasfitería, cambios de ventanas y mejoras específicas para tu vivienda.",
    benefits: ["Rapidez", "Orden en obra", "Soluciones concretas"],
    process: ["Visita", "Cotización", "Ejecución"],
    icon: "Herramienta",
    isPublished: true,
    sortOrder: 7,
  },
];
