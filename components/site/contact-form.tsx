"use client";

import { useState } from "react";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "success">("idle");

  return (
    <form
      className="u-card grid gap-4"
      onSubmit={(event) => {
        event.preventDefault();
        setStatus("success");
      }}
    >
      <input required name="name" className="u-input" placeholder="Nombre" />
      <div className="grid gap-4 md:grid-cols-2">
        <input name="email" type="email" className="u-input" placeholder="Email" />
        <input required name="phone" className="u-input" placeholder="Telefono" />
      </div>
      <select name="projectType" className="u-input" defaultValue="">
        <option value="" disabled>Tipo de proyecto</option>
        <option>Construccion de casa</option>
        <option>Ampliacion</option>
        <option>Remodelacion</option>
        <option>Alcantarillado rural</option>
      </select>
      <textarea required name="message" className="u-input min-h-36" placeholder="Cuentanos que necesitas construir o mejorar" />
      <button className="u-btn-primary" type="submit">Enviar solicitud</button>
      {status === "success" ? <p className="text-sm font-semibold text-construction-primary">Solicitud registrada localmente. En la integracion final quedara guardada en Supabase.</p> : null}
    </form>
  );
}
