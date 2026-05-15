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
      className={`fixed bottom-[calc(env(safe-area-inset-bottom,0px)+1rem)] right-4 z-50 rounded-full bg-[#25d366] px-4 py-3 text-sm font-bold text-white shadow-lg transition hover:scale-105 md:bottom-[calc(env(safe-area-inset-bottom,0px)+5.25rem)] md:right-5 md:px-5 ${
        hideOnMobile ? "pointer-events-none opacity-0 md:pointer-events-auto md:opacity-100" : "opacity-100"
      }`}
      aria-label="Cotizar por WhatsApp"
    >
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
        <path d="M19.1 4.9A9.94 9.94 0 0 0 12 2C6.5 2 2 6.5 2 12c0 1.8.5 3.6 1.4 5.1L2 22l5.1-1.3A10 10 0 0 0 12 22c5.5 0 10-4.5 10-10 0-2.7-1-5.2-2.9-7.1Zm-7.1 15.4c-1.5 0-2.9-.4-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 0 1 3.8 12c0-4.5 3.7-8.2 8.2-8.2 2.2 0 4.2.9 5.8 2.4a8.2 8.2 0 0 1 2.4 5.8c0 4.6-3.7 8.3-8.2 8.3Zm4.5-6.2c-.2-.1-1.3-.6-1.4-.7-.2-.1-.3-.1-.4.1-.1.2-.5.7-.6.8-.1.1-.2.2-.4.1a6.9 6.9 0 0 1-2-1.2 7.7 7.7 0 0 1-1.4-1.7c-.2-.2 0-.3.1-.4l.3-.3.2-.3v-.3c0-.1-.4-1.1-.6-1.5-.2-.4-.3-.3-.4-.3h-.4c-.1 0-.3 0-.4.2-.1.2-.6.6-.6 1.5s.6 1.8.7 1.9c.1.1 1.3 2 3 2.8.4.2.8.3 1.1.4.5.2 1 .1 1.4.1.4-.1 1.3-.5 1.4-1 .2-.6.2-1 .1-1-.1 0-.2-.1-.4-.2Z" />
      </svg>
    </a>
  );
}
