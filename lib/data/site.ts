import type { SiteMetric, SiteValue } from "@/lib/types/content";

export const contact = {
  phone: "+56 9 2709 1061",
  phoneHref: "tel:+56927091061",
  whatsapp: "https://wa.me/56927091061?text=Hola,%20quiero%20cotizar%20un%20proyecto",
  email: "yanko.valladares@gmail.com",
  emailHref: "mailto:yanko.valladares@gmail.com",
  address: "Talca, Región del Maule, Chile",
  facebook: "https://www.facebook.com/",
  instagram: "https://www.instagram.com/",
};

export const siteCopy = {
  brand: "Yanko",
  heroTitle: "Casas premium en Talca con proceso claro y cero improvisación",
  heroSubtitle:
    "Diseñamos y ejecutamos proyectos residenciales en la Región del Maule con planificación técnica, control de avance semanal y terminaciones de alto estándar.",
  mission:
    "Entregar proyectos residenciales seguros, duraderos y bien gestionados para familias que valoran claridad, cumplimiento y calidad constructiva.",
  vision:
    "Ser la constructora referente en Talca y Maule para obras residenciales premium con trazabilidad total y experiencia de cliente sobresaliente.",
  about:
    "Nos especializamos en construcción de casas, ampliaciones, remodelaciones y asesorías técnicas. Combinamos experiencia en terreno, control de calidad por etapas y comunicación transparente para que cada decisión se tome con datos y no con supuestos.",
};

export const values: SiteValue[] = [
  {
    title: "Calidad",
    description: "Seleccionamos materiales y procesos que sostienen proyectos duraderos.",
  },
  {
    title: "Compromiso",
    description: "Cuidamos plazos, acuerdos y expectativas durante todo el proceso.",
  },
  {
    title: "Transparencia",
    description: "Comunicamos avances, decisiones y alcances con claridad.",
  },
  {
    title: "Responsabilidad",
    description: "Trabajamos con criterio técnico, seguridad y respeto por cada hogar.",
  },
];

export const metrics: SiteMetric[] = [
  { label: "Años de experiencia", value: "25+" },
  { label: "Proyectos entregados", value: "120+" },
  { label: "Tiempo de respuesta", value: "<24h" },
];

export const navItems = [
  { label: "Inicio", href: "/" },
  { label: "Nosotros", href: "/nosotros" },
  { label: "Servicios", href: "/servicios" },
  { label: "Sistemas", href: "/sistemas-de-construccion" },
  { label: "Proyectos", href: "/proyectos" },
  { label: "Contacto", href: "/contacto" },
];
