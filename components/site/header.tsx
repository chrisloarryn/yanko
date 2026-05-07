import Link from "next/link";
import { navItems, siteCopy } from "@/lib/data/site";
import { TopBar } from "./top-bar";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-emerald-950/10 bg-construction-cream/90 backdrop-blur-xl">
      <TopBar />
      <div className="u-container flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-3 font-bold tracking-tight text-construction-primary">
          <span className="grid h-11 w-11 place-items-center rounded-2xl bg-construction-primary text-white shadow-lg shadow-emerald-950/20">Y</span>
          <span className="text-xl">{siteCopy.brand}</span>
        </Link>
        <nav className="hidden items-center gap-7 text-sm font-semibold text-construction-neutral lg:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-construction-primary">
              {item.label}
            </Link>
          ))}
        </nav>
        <Link href="/contacto" className="u-btn-primary hidden sm:inline-flex">
          Cotiza tu proyecto
        </Link>
      </div>
      <nav className="u-container flex gap-4 overflow-x-auto pb-4 text-sm font-semibold text-construction-muted lg:hidden">
        {navItems.map((item) => (
          <Link key={item.href} href={item.href} className="shrink-0">
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
