"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { trackEvent } from "@/lib/analytics";

type SmartCtaCopy = {
  href: string;
  label: string;
};

export function SmartCta() {
  const pathname = usePathname();
  const currentPath = pathname ?? "";
  const [active, setActive] = useState(false);

  useEffect(() => {
    const onScroll = () => setActive(window.scrollY > 340);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const cta = useMemo<SmartCtaCopy>(() => {
    if (currentPath.startsWith("/proyectos")) {
      return { href: "/contacto", label: "Cotizar proyecto similar" };
    }
    if (currentPath.startsWith("/servicios")) {
      return { href: "/contacto", label: "Solicitar propuesta" };
    }
    if (currentPath.startsWith("/sistemas-de-construccion")) {
      return { href: "/contacto", label: "Evaluar mejor sistema" };
    }
    return { href: "/contacto", label: "Agendar visita tecnica" };
  }, [currentPath]);

  return (
    <div
      className={`fixed bottom-[calc(env(safe-area-inset-bottom,0px)+1rem)] left-1/2 z-50 -translate-x-1/2 transition-all duration-300 md:bottom-[calc(env(safe-area-inset-bottom,0px)+5.25rem)] ${
        active ? "pointer-events-auto translate-y-0 opacity-100" : "pointer-events-none translate-y-5 opacity-0"
      }`}
    >
      <Link
        href={cta.href}
        onClick={() => trackEvent("smart_cta_click", { pathname: currentPath, label: cta.label })}
        className="inline-flex w-[calc(100vw-2rem)] max-w-sm items-center justify-center rounded-full border border-white/40 bg-construction-primary px-6 py-3.5 text-sm font-bold text-white shadow-2xl shadow-cyan-900/35 backdrop-blur md:w-auto md:min-w-64 md:px-7"
      >
        {cta.label}
      </Link>
    </div>
  );
}
