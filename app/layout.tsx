import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

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
    <html
      lang="es-CL"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
