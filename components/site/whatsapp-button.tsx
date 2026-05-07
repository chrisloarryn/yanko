"use client";

import { useEffect, useState } from "react";
import { contact } from "@/lib/data/site";
import { trackEvent } from "@/lib/analytics";

export function WhatsAppButton() {
  const [hideOnMobile, setHideOnMobile] = useState(false);

  useEffect(() => {
    const onScroll = () => setHideOnMobile(window.scrollY > 340);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href={contact.whatsapp}
      target="_blank"
      rel="noreferrer"
      onClick={() => trackEvent("whatsapp_click", { placement: "floating_button" })}
      className={`fixed right-4 z-50 rounded-full bg-[#25d366] px-4 py-3 text-sm font-bold text-white shadow-2xl shadow-emerald-950/30 transition hover:scale-105 md:right-5 md:px-5 ${
        hideOnMobile ? "pointer-events-none opacity-0 md:pointer-events-auto md:opacity-100" : "opacity-100"
      }`}
      style={{ bottom: "calc(env(safe-area-inset-bottom, 0px) + 1rem)" }}
      aria-label="Cotizar por WhatsApp"
    >
      Whatsapp
    </a>
  );
}
