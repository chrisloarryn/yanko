import Link from "next/link";
import { navItems, siteCopy } from "@/lib/data/site";
import { TopBar } from "./top-bar";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-construction-neutral/10 bg-construction-cream/92 backdrop-blur-xl">
      <TopBar />
      <div className="u-container flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-3 font-bold tracking-tight text-construction-neutral">
          <span className="grid h-10 w-10 place-items-center rounded-full border border-construction-neutral/15 bg-white text-construction-primary">Y</span>
          <span className="text-xl">{siteCopy.brand}</span>
        </Link>
        <nav className="hidden items-center gap-7 text-sm font-bold text-construction-neutral lg:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="opacity-76 transition hover:text-construction-primary hover:opacity-100">
              {item.label}
            </Link>
          ))}
        </nav>
        <Link href="/contacto" className="u-btn-primary hidden sm:inline-flex">
          Cotiza tu proyecto
        </Link>
      </div>
      <nav className="u-container flex gap-3 overflow-x-auto pb-4 text-sm font-bold text-construction-muted lg:hidden">
        {navItems.map((item) => (
          <Link key={item.href} href={item.href} className="shrink-0 rounded-full border border-construction-neutral/10 bg-white/70 px-3 py-1.5">
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
