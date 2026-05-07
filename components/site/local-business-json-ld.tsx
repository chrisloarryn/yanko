import { contact, siteCopy } from "@/lib/data/site";
import { absoluteUrl } from "@/lib/utils";

export function LocalBusinessJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: siteCopy.brand,
    url: absoluteUrl("/"),
    telephone: contact.phone,
    email: contact.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: contact.address,
      addressCountry: "CL",
    },
    areaServed: {
      "@type": "Country",
      name: "Chile",
    },
    sameAs: [contact.facebook, contact.instagram],
    description: "Construccion de casas, ampliaciones, remodelaciones y proyectos de alcantarillado rural.",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
