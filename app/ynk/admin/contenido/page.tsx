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
        { key: "heroTitle", label: "Titulo hero", type: "textarea" },
        { key: "heroSubtitle", label: "Subtitulo hero", type: "textarea" },
        { key: "mission", label: "Mision", type: "textarea" },
        { key: "vision", label: "Vision", type: "textarea" },
        { key: "about", label: "Sobre nosotros", type: "textarea" },
      ]}
    />
  );
}
