import { metrics } from "@/lib/data/site";
import { projects } from "@/lib/data/projects";
import { services } from "@/lib/data/services";

export default function AdminPage() {
  return (
    <div>
      <h1 className="text-4xl font-black">Dashboard</h1>
      <p className="mt-2 text-white/60">Resumen de contenido visible en el sitio.</p>
      <div className="mt-8 grid gap-4 md:grid-cols-3">
        <div className="rounded-3xl bg-white/10 p-6"><div className="text-4xl font-black">{projects.length}</div><p className="text-white/60">Proyectos</p></div>
        <div className="rounded-3xl bg-white/10 p-6"><div className="text-4xl font-black">{services.length}</div><p className="text-white/60">Servicios</p></div>
        <div className="rounded-3xl bg-white/10 p-6"><div className="text-4xl font-black">{metrics.length}</div><p className="text-white/60">Metricas</p></div>
      </div>
    </div>
  );
}
