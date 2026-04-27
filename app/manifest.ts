import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "ONYX Seguridad Privada y Estratégica",
    short_name: "ONYX Seguridad",
    description:
      "Empresa líder en seguridad privada con cobertura nacional desde Puebla. Servicios en CDMX, Monterrey y estados centrales de México.",
    start_url: "/",
    display: "standalone",
    background_color: "#0a0a0a",
    theme_color: "#0a0a0a",
    orientation: "portrait",
    lang: "es-MX",
    categories: ["business", "security"],
    icons: [
      {
        src: "/images/LogoOnyx.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "any",
      },
    ],
  };
}
