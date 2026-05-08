import { Footer } from "@/components/site/footer";
import { Header } from "@/components/site/header";
import { SmartCta } from "@/components/site/smart-cta";
import { BreadcrumbsJsonLd } from "@/components/site/breadcrumbs-json-ld";
import { WhatsAppButton } from "@/components/site/whatsapp-button";

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <BreadcrumbsJsonLd />
      <main className="flex-1">{children}</main>
      <Footer />
      <SmartCta />
      <WhatsAppButton />
    </>
  );
}
