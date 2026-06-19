import type { MetadataRoute } from "next";
import { services } from "@/lib/services";
import { coverages } from "@/lib/coverages";
import { blogPosts } from "@/lib/blog-posts";

const BASE = "https://excavationcontractorinsurance.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes = [
    "",
    "/about",
    "/contact",
    "/quote",
    "/blog",
    "/services",
    "/coverages",
    "/privacy",
    "/terms",
  ].map((path) => ({
    url: `${BASE}${path}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.7,
  }));

  const serviceRoutes = services.map((s) => ({
    url: `${BASE}/services/${s.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const coverageRoutes = coverages.map((c) => ({
    url: `${BASE}/coverages/${c.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const blogRoutes = blogPosts.map((p) => ({
    url: `${BASE}/blog/${p.slug}`,
    lastModified: new Date(p.dateISO),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...serviceRoutes, ...coverageRoutes, ...blogRoutes];
}
