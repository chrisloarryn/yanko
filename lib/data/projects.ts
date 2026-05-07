import type { ContentCategory, Project } from "@/lib/types/content";

const categoryByIndex: ContentCategory[] = ["construccion", "remodelaciones", "ampliaciones"];

const names = [
  ["pirque", "Proyecto Pirque", "Pirque", "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80"],
  ["el-duraznal", "Proyecto El Duraznal", "El Duraznal", "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80"],
  ["papagayo", "Proyecto Papagayo", "Papagayo", "https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&w=1200&q=80"],
  ["el-oliveto", "Proyecto El Oliveto", "El Oliveto", "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80"],
  ["peninsula-el-quisco", "Proyecto Peninsula El Quisco", "El Quisco", "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1200&q=80"],
  ["laguna-de-aculeo", "Proyecto Laguna de Aculeo", "Laguna de Aculeo", "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?auto=format&fit=crop&w=1200&q=80"],
  ["lonquimay", "Proyecto Lonquimay", "Lonquimay", "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=80"],
  ["pucon", "Proyecto Pucon", "Pucon", "https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=1200&q=80"],
  ["fundo-el-principal", "Proyecto Fundo El Principal", "Pirque", "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1200&q=80"],
  ["codigua", "Proyecto Codigua", "Codigua", "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1200&q=80"],
] as const;

export const projects: Project[] = names.map(([slug, title, location, coverImageUrl], index) => ({
  id: slug,
  title,
  slug,
  category: categoryByIndex[index % categoryByIndex.length],
  location,
  excerpt: "Proyecto residencial ejecutado con foco en calidad, funcionalidad y terminaciones duraderas.",
  description:
    "Este proyecto refleja una solucion habitacional pensada para adaptarse al terreno, las necesidades familiares y una ejecucion responsable en cada etapa de obra.",
  coverImageUrl,
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
