import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://yanko.cl"),
  title: {
    default: "Yanko | Construccion de casas y remodelaciones",
    template: "%s | Yanko",
  },
  description:
    "Construccion de casas, ampliaciones, remodelaciones y proyectos de alcantarillado rural con calidad, claridad y acompanamiento profesional.",
  openGraph: {
    title: "Yanko | Construccion de casas y remodelaciones",
    description:
      "Construimos, ampliamos y remodelamos hogares en Chile con foco en calidad, confianza y diseno.",
    type: "website",
    locale: "es_CL",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-CL" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
