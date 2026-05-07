import Link from "next/link";
import { contact, navItems, siteCopy } from "@/lib/data/site";
import { services } from "@/lib/data/services";

export function Footer() {
  return (
    <footer className="bg-construction-neutral text-white">
      <div className="u-container grid gap-10 py-14 md:grid-cols-[1.3fr_1fr_1fr]">
        <div>
          <div className="mb-4 text-2xl font-bold">{siteCopy.brand}</div>
          <p className="max-w-md text-sm leading-7 text-white/70">
            Construccion, ampliaciones y remodelaciones con seriedad, calidad y acompanamiento profesional.
          </p>
          <Link href="/contacto" className="u-btn-primary mt-6">
            Solicita tu cotizacion
          </Link>
        </div>
        <div>
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-100">Navegacion</h2>
          <div className="grid gap-3 text-sm text-white/70">
            {navItems.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}
          </div>
        </div>
        <div>
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-100">Servicios</h2>
          <div className="grid gap-3 text-sm text-white/70">
            {services.slice(0, 5).map((service) => (
              <Link key={service.slug} href={`/servicios/${service.slug}`}>{service.title}</Link>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="u-container flex flex-col gap-3 py-5 text-xs text-white/60 md:flex-row md:items-center md:justify-between">
          <span>Copyright {new Date().getFullYear()} {siteCopy.brand}. Todos los derechos reservados.</span>
          <span>{contact.phone} | {contact.email}</span>
        </div>
      </div>
    </footer>
  );
}
