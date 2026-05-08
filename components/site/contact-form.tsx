"use client";

import { useState } from "react";
import { trackEvent } from "@/lib/analytics";
import { createBrowserSupabaseClient } from "@/lib/supabase/client";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "local" | "error">("idle");

  return (
    <form
      className="u-card grid gap-4"
      onSubmit={async (event) => {
        event.preventDefault();
        setStatus("submitting");

        const formData = new FormData(event.currentTarget);
        const lead = {
          name: String(formData.get("name") || ""),
          email: String(formData.get("email") || ""),
          phone: String(formData.get("phone") || ""),
          project_type: String(formData.get("projectType") || ""),
          message: String(formData.get("message") || ""),
          source: "website",
        };

        const supabase = createBrowserSupabaseClient();
        trackEvent("contact_form_submit", { source: "website", project_type: lead.project_type || "sin_tipo" });

        if (!supabase) {
          window.localStorage.setItem("yanko-last-lead", JSON.stringify({ ...lead, created_at: new Date().toISOString() }));
          trackEvent("contact_form_saved_local", { reason: "no_supabase_client" });
          setStatus("local");
          return;
        }

        const { error } = await supabase.from("leads").insert(lead);

        if (error) {
          window.localStorage.setItem("yanko-last-lead", JSON.stringify({ ...lead, created_at: new Date().toISOString(), error: error.message }));
          trackEvent("contact_form_saved_local", { reason: "supabase_error" });
          setStatus("local");
          return;
        }

        event.currentTarget.reset();
        trackEvent("contact_form_success", { source: "website" });
        setStatus("success");
      }}
    >
      <input required name="name" className="u-input" placeholder="Nombre" />
      <div className="grid gap-4 md:grid-cols-2">
        <input name="email" type="email" className="u-input" placeholder="Email" />
        <input required name="phone" className="u-input" placeholder="Teléfono" />
      </div>
      <select name="projectType" className="u-input" defaultValue="">
        <option value="" disabled>Tipo de proyecto</option>
        <option>Construcción de casa</option>
        <option>Ampliación</option>
        <option>Remodelación</option>
        <option>Alcantarillado rural</option>
      </select>
      <textarea required name="message" className="u-input min-h-36" placeholder="Cuéntanos qué necesitas construir o mejorar" />
      <button className="u-btn-primary" type="submit" disabled={status === "submitting"}>
        {status === "submitting" ? "Enviando..." : "Enviar solicitud"}
      </button>
      {status === "success" ? <p className="text-sm font-semibold text-construction-primary">Solicitud enviada correctamente.</p> : null}
      {status === "local" ? <p className="text-sm font-semibold text-construction-secondary">Solicitud guardada localmente. Revisa la configuracion de Supabase/RLS para persistirla.</p> : null}
      {status === "error" ? <p className="text-sm font-semibold text-red-600">No pudimos registrar la solicitud. Intenta por Whatsapp.</p> : null}
    </form>
  );
}
