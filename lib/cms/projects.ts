import type { CMSProject } from "./types";

export const cmsProjects: CMSProject[] = [
  {
    id: "project-saas-product-experience",
    slug: "saas-product-experience",
    title: "SaaS Product Experience",
    category: "Digital Product",
    summary:
      "A clearer product experience designed around complex workflows and everyday users.",
    client: "Confidential",
    services: [
      "Product Strategy",
      "UX / UI Design",
      "Product Development",
    ],
    challenge:
      "The product needed a simpler experience for users working through multiple workflows while keeping the underlying functionality intact.",
    approach:
      "We focused on understanding the main user journeys, reducing unnecessary friction, and creating a reusable interface structure.",
    solution:
      "The solution combined clearer navigation, structured workflows, reusable UI patterns, and responsive product screens.",
    outcome:
      "A more consistent product foundation that can evolve as new features and requirements are introduced.",
    featured: true,
    status: "published",
    seo: {
      title: "SaaS Product Experience — RapidlyON",
      description:
        "A RapidlyON case study covering product strategy, UX/UI design and product development.",
    },
    createdAt: "2026-09-18",
    updatedAt: "2026-09-18",
  },

  {
    id: "project-modern-business-website",
    slug: "modern-business-website",
    title: "Modern Business Website",
    category: "Web Design & Development",
    summary:
      "A conversion-focused website designed to communicate a business clearly and generate qualified enquiries.",
    client: "Confidential",
    services: [
      "UX / UI Design",
      "Web Development",
    ],
    challenge:
      "The existing digital presence did not clearly communicate the company's value or provide visitors with a straightforward path toward enquiry.",
    approach:
      "We reorganized the information architecture around user intent and created a visual system that prioritizes clarity.",
    solution:
      "A responsive website with focused landing pages, reusable components, clear calls to action, and a scalable content structure.",
    outcome:
      "A stronger digital foundation for communicating services, publishing content, and generating project enquiries.",
    featured: true,
    status: "published",
    seo: {
      title: "Modern Business Website — RapidlyON",
      description:
        "A RapidlyON case study covering UX/UI design and modern web development.",
    },
    createdAt: "2026-09-18",
    updatedAt: "2026-09-18",
  },
];

export function getCMSProjectBySlug(
  slug: string,
): CMSProject | undefined {
  return cmsProjects.find(
    (project) => project.slug === slug,
  );
}

export function getPublishedProjects(): CMSProject[] {
  return cmsProjects.filter(
    (project) => project.status === "published",
  );
}
