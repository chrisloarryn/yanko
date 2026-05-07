import { Footer } from "@/components/site/footer";
import { Header } from "@/components/site/header";
import { SmartCta } from "@/components/site/smart-cta";
import { WhatsAppButton } from "@/components/site/whatsapp-button";

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <SmartCta />
      <WhatsAppButton />
    </>
  );
}
