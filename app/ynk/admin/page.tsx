import { metrics } from "@/lib/data/site";
import { projects } from "@/lib/data/projects";
import { services } from "@/lib/data/services";

export default function AdminPage() {
  return (
    <div>
      <h1 className="text-3xl font-black sm:text-4xl">Dashboard</h1>
      <p className="mt-2 text-white/60">Resumen de contenido visible en el sitio.</p>
      <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        <div className="rounded-2xl bg-white/10 p-5 sm:rounded-3xl sm:p-6"><div className="text-3xl font-black sm:text-4xl">{projects.length}</div><p className="text-white/60">Proyectos</p></div>
        <div className="rounded-2xl bg-white/10 p-5 sm:rounded-3xl sm:p-6"><div className="text-3xl font-black sm:text-4xl">{services.length}</div><p className="text-white/60">Servicios</p></div>
        <div className="rounded-2xl bg-white/10 p-5 sm:rounded-3xl sm:p-6"><div className="text-3xl font-black sm:text-4xl">{metrics.length}</div><p className="text-white/60">Metricas</p></div>
      </div>
    </div>
  );
}
