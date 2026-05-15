import { LocalCollectionEditor } from "@/components/admin/local-collection-editor";
import { constructionSystems } from "@/lib/data/systems";

type AdminSystem = {
  title: string;
  slug: string;
  excerpt: string;
  description: string;
  icon: string;
  isPublished: boolean;
};

export default function AdminSystemsPage() {
  const initialItems: AdminSystem[] = constructionSystems.map((system) => ({
    title: system.title,
    slug: system.slug,
    excerpt: system.excerpt,
    description: system.description,
    icon: system.icon,
    isPublished: system.isPublished,
  }));

  return (
    <LocalCollectionEditor
      title="Sistemas"
      storageKey="yanko-admin-systems"
      initialItems={initialItems}
      newItem={{
        title: "Nuevo sistema",
        slug: "nuevo-sistema",
        excerpt: "Resumen breve del sistema constructivo.",
        description: "Descripción completa del sistema constructivo.",
        icon: "Sistema",
        isPublished: true,
      }}
      fields={[
        { key: "title", label: "Título" },
        { key: "slug", label: "Slug" },
        { key: "excerpt", label: "Resumen", type: "textarea" },
        { key: "description", label: "Descripción", type: "textarea" },
        { key: "icon", label: "Etiqueta icono" },
        { key: "isPublished", label: "Publicado", type: "checkbox" },
      ]}
    />
  );
}
