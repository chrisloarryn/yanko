import { constructionSystems } from "@/lib/data/systems";

export default function AdminSystemsPage() {
  return <div><h1 className="text-4xl font-black">Sistemas</h1><div className="mt-8 grid gap-4">{constructionSystems.map((system) => <div key={system.slug} className="rounded-3xl bg-white/10 p-5"><h2 className="font-bold">{system.title}</h2><p className="text-sm text-white/60">{system.excerpt}</p></div>)}</div></div>;
}
