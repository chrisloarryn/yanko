import type { ContentCategory, Project } from "@/lib/types/content";

const categoryByIndex: ContentCategory[] = ["construccion", "remodelaciones", "ampliaciones"];

const names = [
  ["pirque", "Proyecto Pirque", "Pirque"],
  ["el-duraznal", "Proyecto El Duraznal", "El Duraznal"],
  ["papagayo", "Proyecto Papagayo", "Papagayo"],
  ["el-oliveto", "Proyecto El Oliveto", "El Oliveto"],
  ["peninsula-el-quisco", "Proyecto Peninsula El Quisco", "El Quisco"],
  ["laguna-de-aculeo", "Proyecto Laguna de Aculeo", "Laguna de Aculeo"],
  ["lonquimay", "Proyecto Lonquimay", "Lonquimay"],
  ["pucon", "Proyecto Pucon", "Pucon"],
  ["fundo-el-principal", "Proyecto Fundo El Principal", "Pirque"],
  ["codigua", "Proyecto Codigua", "Codigua"],
] as const;

export const projects: Project[] = names.map(([slug, title, location], index) => ({
  id: slug,
  title,
  slug,
  category: categoryByIndex[index % categoryByIndex.length],
  location,
  excerpt: "Proyecto residencial ejecutado con foco en calidad, funcionalidad y terminaciones duraderas.",
  description:
    "Este proyecto refleja una solucion habitacional pensada para adaptarse al terreno, las necesidades familiares y una ejecucion responsable en cada etapa de obra.",
  gallery: [],
  features: ["Planificacion de obra", "Terminaciones cuidadas", "Acompanamiento tecnico"],
  isFeatured: index < 6,
  isPublished: true,
  sortOrder: index + 1,
}));

export const categoryLabels: Record<ContentCategory | "todos", string> = {
  todos: "Todos",
  construccion: "Construccion",
  remodelaciones: "Remodelaciones",
  ampliaciones: "Ampliaciones",
};
