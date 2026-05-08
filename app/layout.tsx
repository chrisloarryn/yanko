import type { Metadata } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";
import { LocalBusinessJsonLd } from "@/components/site/local-business-json-ld";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://yanko.cl"),
  title: {
    default: "Yanko | Construccion de casas y remodelaciones",
    template: "%s | Yanko",
  },
  description:
    "Construccion de casas, ampliaciones, remodelaciones y proyectos de alcantarillado rural con calidad, claridad y acompanamiento profesional.",
  keywords: [
    "construcción casas Chile",
    "remodelaciones Talca",
    "ampliaciones Maule",
    "constructoras calidad",
    "Yanko",
    "alcantarillado rural",
    "construcción rural",
    "llave en mano"
  ],
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
  applicationName: "Yanko",
  generator: "Next.js",
  icons: {
    icon: "/favicon.ico",
  },
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f8fafc" },
    { media: "(prefers-color-scheme: dark)", color: "#0f172a" },
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Yanko | Construccion de casas y remodelaciones",
    description:
      "Construimos, ampliamos y remodelamos hogares en Chile con foco en calidad, confianza y diseno.",
    type: "website",
    locale: "es_CL",
    siteName: "Yanko",
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-CL" className="h-full antialiased">
      <body className={`${manrope.variable} ${spaceGrotesk.variable} min-h-full flex flex-col`}>
        <LocalBusinessJsonLd />
        {children}
      </body>
    </html>
  );
}
