import Link from "next/link";

const adminNav = [
  ["Dashboard", "/ynk/admin"],
  ["Proyectos", "/ynk/admin/proyectos"],
  ["Servicios", "/ynk/admin/servicios"],
  ["Sistemas", "/ynk/admin/sistemas"],
  ["Contenido", "/ynk/admin/contenido"],
  ["Configuracion", "/ynk/admin/configuracion"],
  ["Leads", "/ynk/admin/leads"],
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <aside className="fixed inset-y-0 left-0 hidden w-72 border-r border-white/10 bg-slate-900 p-6 lg:block">
        <Link href="/ynk/admin" className="text-2xl font-black">Yanko Admin</Link>
        <nav className="mt-10 grid gap-2 text-sm text-white/70">
          {adminNav.map(([label, href]) => <Link key={href} href={href} className="rounded-xl px-4 py-3 hover:bg-white/10 hover:text-white">{label}</Link>)}
        </nav>
        <Link href="/ynk/admin/login" className="absolute bottom-6 left-6 right-6 block rounded-xl bg-white/10 px-4 py-3 text-center text-sm font-bold">
          Cerrar sesion
        </Link>
      </aside>
      <header className="sticky top-0 z-30 border-b border-white/10 bg-slate-950/95 px-4 py-4 backdrop-blur lg:hidden">
        <div className="flex items-center justify-between gap-3">
          <Link href="/ynk/admin" className="text-lg font-black">Yanko Admin</Link>
          <Link href="/ynk/admin/login" className="shrink-0 rounded-lg bg-white/10 px-3 py-2 text-xs font-bold">
            Salir
          </Link>
        </div>
        <nav className="mt-4 flex gap-2 overflow-x-auto pb-1 text-sm text-white/70">
          {adminNav.map(([label, href]) => (
            <Link key={href} href={href} className="shrink-0 rounded-lg bg-white/6 px-3 py-2 hover:bg-white/10 hover:text-white">
              {label}
            </Link>
          ))}
        </nav>
      </header>
      <main className="px-4 py-6 sm:px-6 lg:ml-72 lg:p-10">{children}</main>
    </div>
  );
}
