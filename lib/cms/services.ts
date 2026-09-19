import type { CMSService } from "./types";

export const cmsServices: CMSService[] = [
  {
    id: "service-product-strategy",
    slug: "product-strategy",
    title: "Product Strategy",
    shortTitle: "Product Strategy",
    category: "Strategy",
    description:
      "Turn an early product idea into a clearer, more actionable digital product direction.",
    content:
      "We help define product goals, users, priorities, features, and a practical direction for moving from idea to execution.",
    deliverables: [
      "Product direction",
      "User and business requirements",
      "Feature priorities",
      "Product roadmap",
    ],
    process: [
      "Understand",
      "Define",
      "Prioritize",
      "Plan",
    ],
    faqs: [
      {
        question: "When should I involve RapidlyON in a project?",
        answer:
          "You can involve us at the idea stage, during product planning, or when an existing product needs a clearer direction.",
      },
      {
        question: "Can strategy be combined with design and development?",
        answer:
          "Yes. Strategy can be followed by UX/UI design and development as part of one project.",
      },
    ],
    status: "published",
    featured: true,
    seo: {
      title: "Product Strategy — RapidlyON",
      description:
        "Product strategy services for turning digital product ideas into clear, actionable plans.",
    },
    createdAt: "2026-09-18",
    updatedAt: "2026-09-18",
  },

  {
    id: "service-ux-ui-design",
    slug: "ux-ui-design",
    title: "UX / UI Design",
    shortTitle: "UX / UI Design",
    category: "Design",
    description:
      "Design clear, useful and responsive digital experiences around real user needs.",
    content:
      "From user flows and information architecture to polished responsive interfaces, we design experiences that are practical and scalable.",
    deliverables: [
      "User flows",
      "Wireframes",
      "Interface design",
      "Design system",
      "Responsive screens",
    ],
    process: [
      "Research",
      "Structure",
      "Design",
      "Refine",
    ],
    faqs: [
      {
        question: "Do you design mobile experiences?",
        answer:
          "Yes. Responsive behavior and mobile usability are considered throughout the design process.",
      },
      {
        question: "Can you work with an existing design system?",
        answer:
          "Yes. We can extend an existing system or establish a new reusable design foundation.",
      },
    ],
    status: "published",
    featured: true,
    seo: {
      title: "UX / UI Design — RapidlyON",
      description:
        "UX and UI design services for websites and digital products.",
    },
    createdAt: "2026-09-18",
    updatedAt: "2026-09-18",
  },

  {
    id: "service-web-development",
    slug: "web-development",
    title: "Web Development",
    shortTitle: "Web Development",
    category: "Development",
    description:
      "Build fast, responsive and scalable websites with a strong technical foundation.",
    content:
      "We turn approved designs into production-ready websites with reusable components, responsive layouts and SEO-friendly architecture.",
    deliverables: [
      "Frontend development",
      "Responsive implementation",
      "CMS integration",
      "SEO foundations",
      "Performance optimization",
    ],
    process: [
      "Plan",
      "Build",
      "Test",
      "Launch",
    ],
    faqs: [
      {
        question: "Can you build a website from an existing design?",
        answer:
          "Yes. We can work from an existing design system or design files and turn them into a production website.",
      },
      {
        question: "Can the website use a CMS?",
        answer:
          "Yes. The architecture can support a CMS so content can be managed without editing the frontend code.",
      },
    ],
    status: "published",
    featured: true,
    seo: {
      title: "Web Development — RapidlyON",
      description:
        "Modern responsive web development with scalable architecture and SEO foundations.",
    },
    createdAt: "2026-09-18",
    updatedAt: "2026-09-18",
  },

  {
    id: "service-product-development",
    slug: "product-development",
    title: "Product Development",
    shortTitle: "Product Development",
    category: "Development",
    description:
      "Design and develop digital products from validated direction to working software.",
    content:
      "We combine product thinking, UX/UI design and engineering to create digital products that can evolve over time.",
    deliverables: [
      "Product architecture",
      "Frontend development",
      "Backend integration",
      "Responsive experience",
      "Launch support",
    ],
    process: [
      "Define",
      "Design",
      "Develop",
      "Iterate",
    ],
    faqs: [
      {
        question: "Can RapidlyON handle both design and development?",
        answer:
          "Yes. Product strategy, UX/UI design and development can be combined according to the project's requirements.",
      },
      {
        question: "Can an MVP be developed first?",
        answer:
          "Yes. A project can be structured around a focused first release and expanded through later iterations.",
      },
    ],
    status: "published",
    featured: true,
    seo: {
      title: "Product Development — RapidlyON",
      description:
        "End-to-end digital product development from strategy and design to engineering.",
    },
    createdAt: "2026-09-18",
    updatedAt: "2026-09-18",
  },
];

export function getCMSServiceBySlug(
  slug: string,
): CMSService | undefined {
  return cmsServices.find(
    (service) => service.slug === slug,
  );
}

export function getPublishedServices(): CMSService[] {
  return cmsServices.filter(
    (service) => service.status === "published",
  );
}
