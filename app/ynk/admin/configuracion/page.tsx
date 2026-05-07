import { contact } from "@/lib/data/site";

export default function AdminConfigPage() {
  return <div><h1 className="text-4xl font-black">Configuracion</h1><div className="mt-8 rounded-3xl bg-white/10 p-6 text-white/70"><p>{contact.phone}</p><p>{contact.email}</p><p>{contact.address}</p></div></div>;
}
