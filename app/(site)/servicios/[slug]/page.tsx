import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { services } from "@/lib/data/services";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) return {};
  return {
    title: `${service.title} | Yanko`,
    description: service.description,
    keywords: [
      `${service.title}`,
      "servicios construcción",
      "Yanko Talca"
    ],
    openGraph: {
      images: [
        {
          url: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=85",
          width: 1200,
          height: 630,
          alt: service.title,
        },
      ],
      type: "article",
    },
    twitter: {
      images: ["https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=85"],
      card: "summary_large_image",
    },
    alternates: {
      canonical: `/servicios/${slug}/`,
    },
  };
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) notFound();

  return (
    <section className="u-section">
      <div className="u-container max-w-5xl">
        <p className="text-sm font-bold uppercase tracking-[0.25em] text-construction-secondary">Servicio</p>
        <h1 className="mt-4 text-5xl font-black text-construction-neutral">{service.title}</h1>
        <p className="mt-6 text-lg leading-8 text-construction-muted">{service.description}</p>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="u-card"><h2 className="text-2xl font-bold">Beneficios</h2><ul className="mt-5 grid gap-3 text-construction-muted">{service.benefits.map((item) => <li key={item}>- {item}</li>)}</ul></div>
          <div className="u-card"><h2 className="text-2xl font-bold">Proceso</h2><ol className="mt-5 grid gap-3 text-construction-muted">{service.process.map((item, index) => <li key={item}>{index + 1}. {item}</li>)}</ol></div>
        </div>
      </div>
    </section>
  );
}
