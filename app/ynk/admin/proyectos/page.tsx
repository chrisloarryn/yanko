import { LocalCollectionEditor } from "@/components/admin/local-collection-editor";
import { projects } from "@/lib/data/projects";

type AdminProject = {
  title: string;
  slug: string;
  category: string;
  location: string;
  excerpt: string;
  coverImageUrl: string;
  isPublished: boolean;
};

export default function AdminProjectsPage() {
  const initialItems: AdminProject[] = projects.map((project) => ({
    title: project.title,
    slug: project.slug,
    category: project.category,
    location: project.location,
    excerpt: project.excerpt,
    coverImageUrl: project.coverImageUrl ?? "",
    isPublished: project.isPublished,
  }));

  return (
    <LocalCollectionEditor
      title="Proyectos"
      storageKey="yanko-admin-projects"
      initialItems={initialItems}
      newItem={{
        title: "Nuevo proyecto",
        slug: "nuevo-proyecto",
        category: "construccion",
        location: "Por definir",
        excerpt: "Descripcion breve del proyecto.",
        coverImageUrl: "",
        isPublished: true,
      }}
      fields={[
        { key: "title", label: "Titulo" },
        { key: "slug", label: "Slug" },
        { key: "category", label: "Categoria", type: "select", options: ["construccion", "remodelaciones", "ampliaciones"] },
        { key: "location", label: "Ubicacion" },
        { key: "excerpt", label: "Resumen", type: "textarea" },
        { key: "coverImageUrl", label: "URL imagen" },
        { key: "isPublished", label: "Publicado", type: "checkbox" },
      ]}
    />
  );
}
