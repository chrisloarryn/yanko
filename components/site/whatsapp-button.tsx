"use client";

import { contact } from "@/lib/data/site";
import { trackEvent } from "@/lib/analytics";

export function WhatsAppButton() {
  return (
    <a
      href={contact.whatsapp}
      target="_blank"
      rel="noreferrer"
      onClick={() => trackEvent("whatsapp_click", { placement: "floating_button" })}
      className="fixed bottom-5 right-5 z-50 rounded-full bg-[#25d366] px-5 py-3 text-sm font-bold text-white shadow-2xl shadow-emerald-950/30 transition hover:scale-105"
      aria-label="Cotizar por WhatsApp"
    >
      Whatsapp
    </a>
  );
}
