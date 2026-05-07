import { siteCopy, values } from "@/lib/data/site";

export default function AdminContentPage() {
  return <div><h1 className="text-4xl font-black">Contenido</h1><div className="mt-8 grid gap-4"><div className="rounded-3xl bg-white/10 p-5"><h2 className="font-bold">Hero</h2><p className="text-white/60">{siteCopy.heroTitle}</p></div>{values.map((value) => <div key={value.title} className="rounded-3xl bg-white/10 p-5"><h2 className="font-bold">{value.title}</h2><p className="text-white/60">{value.description}</p></div>)}</div></div>;
}
