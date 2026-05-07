import type { SiteMetric, SiteValue } from "@/lib/types/content";

export const contact = {
  phone: "+56 9 6878 7200",
  phoneHref: "tel:+56968787200",
  whatsapp: "https://wa.me/56968787200?text=Hola,%20quiero%20cotizar%20un%20proyecto",
  email: "ventascasasrm@gmail.com",
  emailHref: "mailto:ventascasasrm@gmail.com",
  address: "Av. Lonquen Sur 6300, Parcela 7, Talagante",
  facebook: "https://www.facebook.com/",
  instagram: "https://www.instagram.com/",
};

export const siteCopy = {
  brand: "Yanko",
  heroTitle: "Construye la casa de tus suenos con confianza",
  heroSubtitle:
    "Disenamos, construimos, ampliamos y remodelamos hogares en Chile con materiales de calidad, gestion clara y acompanamiento profesional desde la idea hasta la entrega.",
  mission:
    "Entregar soluciones habitacionales seguras, duraderas y bien ejecutadas, acompanando a cada familia con seriedad, comunicacion clara y altos estandares de construccion.",
  vision:
    "Ser una constructora reconocida por transformar ideas en hogares confiables, funcionales y adaptados a la forma de vivir de cada cliente.",
  about:
    "Nos especializamos en construccion de casas, ampliaciones, remodelaciones, asesorias tecnicas y proyectos de alcantarillado rural. Nuestro trabajo combina experiencia en terreno, planificacion responsable y terminaciones pensadas para durar.",
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
    description: "Trabajamos con criterio tecnico, seguridad y respeto por cada hogar.",
  },
];

export const metrics: SiteMetric[] = [
  { label: "Anos de experiencia", value: "25+" },
  { label: "Casas entregadas", value: "120+" },
  { label: "m2 construidos", value: "18.000+" },
];

export const navItems = [
  { label: "Inicio", href: "/" },
  { label: "Nosotros", href: "/nosotros" },
  { label: "Servicios", href: "/servicios" },
  { label: "Sistemas", href: "/sistemas-de-construccion" },
  { label: "Proyectos", href: "/proyectos" },
  { label: "Contacto", href: "/contacto" },
];
