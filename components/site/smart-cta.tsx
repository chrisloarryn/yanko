"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";

type SmartCtaCopy = {
  href: string;
  label: string;
};

export function SmartCta() {
  const pathname = usePathname();
  const [active, setActive] = useState(false);

  useEffect(() => {
    const onScroll = () => setActive(window.scrollY > 340);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const cta = useMemo<SmartCtaCopy>(() => {
    if (pathname.startsWith("/proyectos")) {
      return { href: "/contacto", label: "Cotizar proyecto similar" };
    }
    if (pathname.startsWith("/servicios")) {
      return { href: "/contacto", label: "Solicitar propuesta" };
    }
    if (pathname.startsWith("/sistemas-de-construccion")) {
      return { href: "/contacto", label: "Evaluar mejor sistema" };
    }
    return { href: "/contacto", label: "Agendar visita tecnica" };
  }, [pathname]);

  return (
    <div
      className={`fixed bottom-5 left-1/2 z-50 -translate-x-1/2 transition-all duration-300 ${
        active ? "pointer-events-auto translate-y-0 opacity-100" : "pointer-events-none translate-y-5 opacity-0"
      }`}
    >
      <Link
        href={cta.href}
        className="inline-flex min-w-64 items-center justify-center rounded-full border border-white/40 bg-construction-primary px-7 py-3.5 text-sm font-bold text-white shadow-2xl shadow-cyan-900/35 backdrop-blur"
      >
        {cta.label}
      </Link>
    </div>
  );
}
