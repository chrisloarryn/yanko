import { LocalSettingsEditor } from "@/components/admin/local-settings-editor";
import { siteCopy } from "@/lib/data/site";

export default function AdminContentPage() {
  return (
    <LocalSettingsEditor
      title="Contenido"
      storageKey="yanko-admin-content"
      initialValue={{
        brand: siteCopy.brand,
        heroTitle: siteCopy.heroTitle,
        heroSubtitle: siteCopy.heroSubtitle,
        mission: siteCopy.mission,
        vision: siteCopy.vision,
        about: siteCopy.about,
      }}
      fields={[
        { key: "brand", label: "Marca" },
        { key: "heroTitle", label: "Título hero", type: "textarea" },
        { key: "heroSubtitle", label: "Subtítulo hero", type: "textarea" },
        { key: "mission", label: "Misión", type: "textarea" },
        { key: "vision", label: "Visión", type: "textarea" },
        { key: "about", label: "Sobre nosotros", type: "textarea" },
      ]}
    />
  );
}
