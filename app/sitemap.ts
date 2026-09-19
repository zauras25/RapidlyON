import type { MetadataRoute } from "next";

import { services } from "@/components/services";
import { caseStudies } from "@/components/work";

const siteUrl = "https://rapidlyon.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    {
      path: "",
      priority: 1,
      changeFrequency: "weekly" as const,
    },
    {
      path: "/services",
      priority: 0.9,
      changeFrequency: "monthly" as const,
    },
    {
      path: "/work",
      priority: 0.9,
      changeFrequency: "monthly" as const,
    },
    {
      path: "/about",
      priority: 0.7,
      changeFrequency: "monthly" as const,
    },
    {
      path: "/insights",
      priority: 0.8,
      changeFrequency: "weekly" as const,
    },
    {
      path: "/start-a-project",
      priority: 0.9,
      changeFrequency: "monthly" as const,
    },
  ];

  const serviceRoutes = services.map((service) => ({
    path: `/services/${service.slug}`,
    priority: 0.8,
    changeFrequency: "monthly" as const,
  }));

  const workRoutes = caseStudies.map((project) => ({
    path: `/work/${project.slug}`,
    priority: project.featured ? 0.8 : 0.7,
    changeFrequency: "monthly" as const,
  }));

  return [
    ...staticRoutes,
    ...serviceRoutes,
    ...workRoutes,
  ].map((route) => ({
    url: `${siteUrl}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
