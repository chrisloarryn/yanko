import { services } from "@/lib/data/services";

export default function AdminServicesPage() {
  return <div><h1 className="text-4xl font-black">Servicios</h1><div className="mt-8 grid gap-4">{services.map((service) => <div key={service.slug} className="rounded-3xl bg-white/10 p-5"><h2 className="font-bold">{service.title}</h2><p className="text-sm text-white/60">{service.excerpt}</p></div>)}</div></div>;
}
