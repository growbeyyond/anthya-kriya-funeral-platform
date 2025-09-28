import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";

  const routes: string[] = [
    "/",
    "/emergency-booking",
    "/plan-ahead",
    "/multi-faith-rituals",
    "/memorials",
    "/vendor",
    "/vendor/onboarding",
    "/vendor/jobs",
    "/vendor/wallet",
    "/admin",
    "/login",
    "/partner",
    "/terms",
    "/privacy",
  ];

  const now = new Date();

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: now,
    changeFrequency: route === "/" ? "daily" : "weekly",
    priority: route === "/" ? 1 : 0.6,
  }));
}