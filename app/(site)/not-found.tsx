import Link from "next/link";

export default function NotFound() {
  return (
    <section className="u-section">
      <div className="u-container">
        <div className="mx-auto max-w-2xl rounded-3xl border border-construction-primary/15 bg-white/80 p-10 text-center shadow-xl shadow-cyan-900/10 backdrop-blur">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-construction-secondary">Error 404</p>
          <h1 className="mt-4 text-4xl font-black tracking-tight text-construction-neutral md:text-5xl">Esta pagina no existe</h1>
          <p className="mt-5 text-base leading-8 text-construction-muted md:text-lg">
            Puede que el enlace este desactualizado o que la URL este mal escrita.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/" className="u-btn-primary">
              Volver al inicio
            </Link>
            <Link href="/contacto" className="u-btn-secondary">
              Ir a contacto
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
