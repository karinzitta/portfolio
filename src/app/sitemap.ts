import type { MetadataRoute } from "next";
import { portfolio } from "@/data/portfolio";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = portfolio.site.url;
  const now = new Date();
  return [
    { url: `${base}/`, lastModified: now, changeFrequency: "monthly", priority: 1 },
    { url: `${base}/sobre/`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    ...portfolio.projects.list.map((p) => ({
      url: `${base}/projetos/${p.slug}/`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: p.featured ? 0.9 : 0.6,
    })),
  ];
}
