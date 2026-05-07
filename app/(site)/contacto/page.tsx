import type { Metadata } from "next";
import { ContactForm } from "@/components/site/contact-form";
import { SectionHeading } from "@/components/site/section-heading";
import { contact } from "@/lib/data/site";

export const metadata: Metadata = {
  title: "Contacto",
  description: "Cotiza tu proyecto de construccion, ampliacion o remodelacion con Yanko.",
};

export default function ContactPage() {
  return (
    <section className="u-section">
      <div className="u-container grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          <SectionHeading eyebrow="Contacto" title="Cotiza tu proyecto de construccion" description="Cuéntanos que necesitas construir, ampliar o remodelar. Te orientaremos con claridad para dar el siguiente paso." />
          <div className="mt-8 grid gap-4 text-construction-muted">
            <a href={contact.phoneHref}>{contact.phone}</a>
            <a href={contact.emailHref}>{contact.email}</a>
            <p>{contact.address}</p>
            <a href={contact.whatsapp} className="u-btn-primary w-fit" target="_blank" rel="noreferrer">Hablar por Whatsapp</a>
          </div>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
