import type { Metadata, Viewport } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const SITE_URL = "https://www.onyxseguridad.com";
const SITE_NAME = "ONYX Seguridad";
const LEGAL_NAME = "ONYX Seguridad Privada y Estratégica S.A. de C.V.";

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  colorScheme: "dark",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "ONYX Seguridad Privada y Estratégica | Puebla, México",
    template: "%s | ONYX Seguridad",
  },
  description:
    "Empresa líder en seguridad privada con cobertura nacional desde Puebla. Servicios en Ciudad de México, Monterrey, Tlaxcala, Veracruz, Hidalgo, Morelos, Estado de México y Oaxaca. Vigilantes profesionales, monitoreo 24/7, custodia de bienes, drones y geolocalización. Registro SSP/SUBCOP/DGSP/033-25/530.",
  applicationName: SITE_NAME,
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  keywords: [
    "seguridad privada Puebla",
    "seguridad privada Ciudad de México",
    "seguridad privada CDMX",
    "seguridad privada Monterrey",
    "seguridad privada México",
    "seguridad privada Tlaxcala",
    "seguridad privada Veracruz",
    "seguridad privada Hidalgo",
    "seguridad privada Morelos",
    "seguridad privada Estado de México",
    "seguridad privada Oaxaca",
    "vigilancia privada",
    "ONYX Seguridad",
    "guardias de seguridad Puebla",
    "guardias de seguridad CDMX",
    "guardias de seguridad Monterrey",
    "monitoreo 24/7",
    "custodia de bienes",
    "seguridad empresarial",
    "seguridad residencial",
    "drones de seguridad",
    "geolocalización",
    "vigilantes profesionales",
    "seguridad estratégica",
    "protección ejecutiva",
    "seguridad industrial",
    "empresa de seguridad nacional",
    "cobertura nacional seguridad",
  ],
  authors: [{ name: LEGAL_NAME, url: SITE_URL }],
  creator: LEGAL_NAME,
  publisher: LEGAL_NAME,
  category: "Seguridad Privada",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: SITE_URL,
    languages: {
      "es-MX": SITE_URL,
    },
  },
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: "ONYX Seguridad Privada y Estratégica | Puebla · CDMX · Monterrey",
    description:
      "Cobertura nacional en seguridad privada desde Puebla. Servicios en CDMX, Monterrey, Tlaxcala, Veracruz, Hidalgo, Morelos, Estado de México y Oaxaca. Vigilantes capacitados, monitoreo 24/7 y geolocalización permanente.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "ONYX Seguridad Privada y Estratégica - Cobertura nacional en México",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ONYX Seguridad Privada | Puebla · CDMX · Monterrey",
    description:
      "Cobertura nacional en seguridad privada. Vigilantes profesionales, monitoreo 24/7 y tecnología de última generación en Puebla, CDMX, Monterrey y estados centrales de México.",
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [{ url: "/images/LogoOnyx.svg", type: "image/svg+xml" }],
  },
  verification: {
    // google: "PEGAR-AQUÍ-CÓDIGO-DE-VERIFICACIÓN-GOOGLE-SEARCH-CONSOLE",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "LocalBusiness", "SecurityService"],
      "@id": `${SITE_URL}/#organization`,
      name: SITE_NAME,
      legalName: LEGAL_NAME,
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/images/LogoOnyx.svg`,
        width: 512,
        height: 512,
      },
      image: `${SITE_URL}/opengraph-image`,
      description:
        "Empresa líder en seguridad privada con cobertura nacional desde Puebla, México. Servicios profesionales en CDMX, Monterrey y estados centrales (Tlaxcala, Veracruz, Hidalgo, Morelos, Estado de México, Oaxaca). Vigilantes, monitoreo 24/7, custodia de bienes y tecnología de última generación.",
      slogan: "Protección profesional con tecnología de última generación",
      foundingDate: "2025",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Puebla",
        addressRegion: "Puebla",
        addressCountry: "MX",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 19.0414,
        longitude: -98.2063,
      },
      areaServed: [
        {
          "@type": "Country",
          name: "México",
          "@id": "https://www.wikidata.org/wiki/Q96",
        },
        {
          "@type": "City",
          name: "Puebla de Zaragoza",
          "@id": "https://www.wikidata.org/wiki/Q138518",
          containedInPlace: { "@type": "State", name: "Puebla" },
        },
        {
          "@type": "City",
          name: "Ciudad de México",
          alternateName: "CDMX",
          "@id": "https://www.wikidata.org/wiki/Q1489",
        },
        {
          "@type": "City",
          name: "Monterrey",
          "@id": "https://www.wikidata.org/wiki/Q81033",
          containedInPlace: { "@type": "State", name: "Nuevo León" },
        },
        { "@type": "State", name: "Puebla" },
        { "@type": "State", name: "Tlaxcala" },
        { "@type": "State", name: "Veracruz" },
        { "@type": "State", name: "Hidalgo" },
        { "@type": "State", name: "Morelos" },
        { "@type": "State", name: "Estado de México" },
        { "@type": "State", name: "Oaxaca" },
        { "@type": "State", name: "Guerrero" },
        { "@type": "State", name: "Nuevo León" },
        { "@type": "State", name: "Ciudad de México" },
      ],
      serviceArea: [
        {
          "@type": "AdministrativeArea",
          name: "Cobertura Nacional - México",
        },
        {
          "@type": "GeoCircle",
          name: "Zona centro de México (radio 350 km desde Puebla)",
          geoMidpoint: {
            "@type": "GeoCoordinates",
            latitude: 19.0414,
            longitude: -98.2063,
          },
          geoRadius: "350000",
        },
      ],
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+52-222-503-3916",
          contactType: "customer service",
          areaServed: "MX",
          availableLanguage: ["Spanish"],
          contactOption: "TollFree",
        },
        {
          "@type": "ContactPoint",
          telephone: "+52-221-147-6154",
          contactType: "sales",
          areaServed: "MX",
          availableLanguage: ["Spanish"],
        },
      ],
      email: "contacto@onyxseguridad.com",
      telephone: "+52-222-503-3916",
      identifier: "SSP/SUBCOP/DGSP/033-25/530",
      knowsAbout: [
        "Seguridad Privada",
        "Vigilancia",
        "Custodia de Bienes",
        "Monitoreo 24/7",
        "Geolocalización",
        "Drones de Seguridad",
        "Protocolos de Seguridad",
        "Capacitación en Seguridad",
      ],
      sameAs: [],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Servicios de Seguridad ONYX",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Vigilancia y Custodia",
              description:
                "Vigilantes profesionales capacitados con uniforme homologado y equipo táctico completo.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Monitoreo 24/7",
              description:
                "Centro de monitoreo continuo con geolocalización y respuesta inmediata.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Tecnología de Seguridad",
              description:
                "Drones, geolocalización GPS, biométricos y radiofrecuencia dedicada.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Capacitación Continua",
              description:
                "Programas de capacitación adaptados a las necesidades de cada cliente.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Protocolos de Alto Impacto",
              description:
                "Protocolos especializados de seguridad para situaciones de alto riesgo.",
            },
          },
        ],
      },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      description: "Sitio oficial de ONYX Seguridad Privada y Estratégica",
      publisher: { "@id": `${SITE_URL}/#organization` },
      inLanguage: "es-MX",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-MX" className={`${outfit.variable} h-full antialiased`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
        {children}
      </body>
    </html>
  );
}
