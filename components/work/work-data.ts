export type CaseStudy = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  client: string;
  services: string[];
  challenge: string;
  approach: string;
  solution: string;
  outcome: string;
  featured: boolean;
};

export const caseStudies: CaseStudy[] = [
  {
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
  },

  {
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
  },

  {
    slug: "digital-product-strategy",
    title: "Digital Product Strategy",
    category: "Product Strategy",
    summary:
      "A product direction created from an early-stage idea, business goals, and user requirements.",
    client: "Confidential",
    services: [
      "Product Strategy",
      "UX / UI Design",
    ],
    challenge:
      "The initial product idea had potential but required clearer priorities, user definition, and a practical path toward development.",
    approach:
      "We translated the initial idea into a structured product direction by examining users, business objectives, features, and priorities.",
    solution:
      "A defined product structure covering key user journeys, feature priorities, experience direction, and future development stages.",
    outcome:
      "A clearer foundation for moving from an early concept toward a validated digital product.",
    featured: false,
  },
];
