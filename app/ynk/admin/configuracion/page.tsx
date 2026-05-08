import { LocalSettingsEditor } from "@/components/admin/local-settings-editor";
import { contact } from "@/lib/data/site";

export default function AdminConfigPage() {
  return (
    <LocalSettingsEditor
      title="Configuración"
      storageKey="yanko-admin-config"
      initialValue={{
        phone: contact.phone,
        email: contact.email,
        address: contact.address,
        whatsapp: contact.whatsapp,
        facebook: contact.facebook,
        instagram: contact.instagram,
      }}
      fields={[
        { key: "phone", label: "Teléfono" },
        { key: "email", label: "Email" },
        { key: "address", label: "Dirección", type: "textarea" },
        { key: "whatsapp", label: "Whatsapp" },
        { key: "facebook", label: "Facebook" },
        { key: "instagram", label: "Instagram" },
      ]}
    />
  );
}
