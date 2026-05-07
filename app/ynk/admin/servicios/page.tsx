import { LocalCollectionEditor } from "@/components/admin/local-collection-editor";
import { services } from "@/lib/data/services";

type AdminService = {
  title: string;
  slug: string;
  excerpt: string;
  description: string;
  icon: string;
  isPublished: boolean;
};

export default function AdminServicesPage() {
  const initialItems: AdminService[] = services.map((service) => ({
    title: service.title,
    slug: service.slug,
    excerpt: service.excerpt,
    description: service.description,
    icon: service.icon,
    isPublished: service.isPublished,
  }));

  return (
    <LocalCollectionEditor
      title="Servicios"
      storageKey="yanko-admin-services"
      initialItems={initialItems}
      newItem={{
        title: "Nuevo servicio",
        slug: "nuevo-servicio",
        excerpt: "Resumen breve del servicio.",
        description: "Descripcion completa del servicio.",
        icon: "Nuevo",
        isPublished: true,
      }}
      fields={[
        { key: "title", label: "Titulo" },
        { key: "slug", label: "Slug" },
        { key: "excerpt", label: "Resumen", type: "textarea" },
        { key: "description", label: "Descripcion", type: "textarea" },
        { key: "icon", label: "Etiqueta icono" },
        { key: "isPublished", label: "Publicado", type: "checkbox" },
      ]}
    />
  );
}
