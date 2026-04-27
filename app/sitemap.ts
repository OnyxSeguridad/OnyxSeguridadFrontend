import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const SITE_URL = "https://www.onyxseguridad.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  // Single-page app — declaramos la home y secciones ancla principales
  const sections = [
    { path: "", priority: 1.0, changeFrequency: "monthly" as const },
    { path: "#servicios", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "#vigilantes", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "#altimpacto", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "#capacitacion", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "#reclutamiento", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "#protocolos", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "#tecnologia", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "#contacto", priority: 0.9, changeFrequency: "monthly" as const },
  ];

  return sections.map(({ path, priority, changeFrequency }) => ({
    url: `${SITE_URL}/${path}`,
    lastModified,
    changeFrequency,
    priority,
  }));
}
