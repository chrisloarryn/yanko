import { projects } from "@/lib/data/projects";

export default function AdminProjectsPage() {
  return <AdminTable title="Proyectos" rows={projects.map((item) => [item.title, item.category, item.location, item.isPublished ? "Publicado" : "Borrador"])} />;
}

function AdminTable({ title, rows }: { title: string; rows: string[][] }) {
  return <div><h1 className="text-4xl font-black">{title}</h1><div className="mt-8 overflow-hidden rounded-3xl border border-white/10">{rows.map((row) => <div key={row.join("")} className="grid gap-4 border-b border-white/10 p-4 text-sm text-white/75 md:grid-cols-4">{row.map((cell) => <span key={cell}>{cell}</span>)}</div>)}</div><p className="mt-6 text-sm text-white/50">CRUD real se conecta en el slice de Supabase/admin maintainers.</p></div>;
}
