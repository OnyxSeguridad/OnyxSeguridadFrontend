import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "ONYX Seguridad Privada y Estratégica | Puebla",
  description:
    "Empresa líder en seguridad privada en Puebla. Vigilantes profesionales, tecnología de última generación, monitoreo y custodia. Registro SSP/SUBCOP/DGSP/033-25/530. Contacte por WhatsApp.",
  keywords: [
    "seguridad privada Puebla",
    "vigilancia",
    "ONYX Seguridad",
    "guardias de seguridad",
    "monitoreo",
    "custodia de bienes",
    "seguridad empresarial",
    "seguridad residencial",
    "drones seguridad",
    "geolocalización",
  ],
  authors: [{ name: "ONYX Seguridad Privada y Estratégica S.A. de C.V." }],
  openGraph: {
    title: "ONYX Seguridad Privada y Estratégica | Puebla",
    description:
      "Protección profesional con tecnología de última generación. Vigilantes capacitados, monitoreo 24/7, geolocalización permanente.",
    url: "https://www.onyxseguridad.com",
    siteName: "ONYX Seguridad",
    locale: "es_MX",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  metadataBase: new URL("https://www.onyxseguridad.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${outfit.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
