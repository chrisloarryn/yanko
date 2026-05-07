import { LocalSettingsEditor } from "@/components/admin/local-settings-editor";
import { contact } from "@/lib/data/site";

export default function AdminConfigPage() {
  return (
    <LocalSettingsEditor
      title="Configuracion"
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
        { key: "phone", label: "Telefono" },
        { key: "email", label: "Email" },
        { key: "address", label: "Direccion", type: "textarea" },
        { key: "whatsapp", label: "Whatsapp" },
        { key: "facebook", label: "Facebook" },
        { key: "instagram", label: "Instagram" },
      ]}
    />
  );
}
