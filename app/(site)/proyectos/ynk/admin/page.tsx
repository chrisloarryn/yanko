import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Redireccion admin",
  robots: {
    index: false,
    follow: false,
  },
};

export default function AdminAliasPage() {
  return (
    <section className="u-section">
      <meta httpEquiv="refresh" content="0; url=/ynk/admin/" />
      <div className="u-container max-w-2xl text-center">
        <p className="text-sm font-bold uppercase tracking-[0.25em] text-construction-secondary">Mantenedor</p>
        <h1 className="mt-4 text-4xl font-black text-construction-neutral">Redirigiendo al admin</h1>
        <p className="mt-5 leading-8 text-construction-muted">La ruta correcta del mantenedor es /ynk/admin/.</p>
        <Link href="/ynk/admin/" className="u-btn-primary mt-8">
          Ir al mantenedor
        </Link>
      </div>
    </section>
  );
}
