export type ServiceFAQ = {
  question: string;
  answer: string;
};

export type Service = {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  intro: string;
  outcomes: string[];
  deliverables: string[];
  process: {
    title: string;
    description: string;
  }[];
  faqs: ServiceFAQ[];
};

export const services: Service[] = [
  {
    slug: "product-strategy",
    title: "Product Strategy",
    shortTitle: "Strategy",
    description:
      "Turn an idea, business challenge, or opportunity into a clear digital product direction.",
    intro:
      "Before design and development begin, we help define what should be built, who it is for, and what success should look like.",
    outcomes: [
      "A clearer product direction",
      "Defined user and business goals",
      "Prioritized product requirements",
      "A practical roadmap for the next stage",
    ],
    deliverables: [
      "Product discovery",
      "Requirements definition",
      "User and business goals",
      "Feature prioritization",
      "Product roadmap",
      "Technical direction",
    ],
    process: [
      {
        title: "Discover",
        description:
          "We understand the business context, users, existing product, and opportunity.",
      },
      {
        title: "Define",
        description:
          "We translate the discussion into requirements, priorities, and product direction.",
      },
      {
        title: "Plan",
        description:
          "We create a practical roadmap for design, development, and future iterations.",
      },
    ],
    faqs: [
      {
        question: "Do I need a complete idea before starting?",
        answer:
          "No. Strategy work can start from an early idea, business problem, or product opportunity.",
      },
      {
        question: "Can strategy continue into design and development?",
        answer:
          "Yes. The strategy can become the foundation for UX/UI design and product development.",
      },
      {
        question: "How is pricing decided?",
        answer:
          "Pricing depends on the scope and requirements. These are discussed before a final proposal is prepared.",
      },
    ],
  },

  {
    slug: "ux-ui-design",
    title: "UX / UI Design",
    shortTitle: "UX / UI",
    description:
      "Design intuitive user experiences and visual interfaces that make digital products easier to understand and use.",
    intro:
      "We transform product requirements into clear user journeys, interface structures, and polished visual experiences.",
    outcomes: [
      "Clear user journeys",
      "Consistent interface design",
      "Responsive layouts",
      "Reusable design patterns",
    ],
    deliverables: [
      "User flows",
      "Wireframes",
      "Interface design",
      "Responsive layouts",
      "Design system",
      "Interactive prototypes",
    ],
    process: [
      {
        title: "Understand",
        description:
          "We study the product goals, users, requirements, and existing experience.",
      },
      {
        title: "Structure",
        description:
          "We define the information architecture, user flows, and page structure.",
      },
      {
        title: "Design",
        description:
          "We turn the structure into a consistent and responsive visual interface.",
      },
    ],
    faqs: [
      {
        question: "Can you work with an existing product?",
        answer:
          "Yes. We can improve an existing interface or redesign the experience around new requirements.",
      },
      {
        question: "Do you provide a design system?",
        answer:
          "For projects that require it, we can create reusable components, tokens, and interface guidelines.",
      },
      {
        question: "Can the design be handed to a development team?",
        answer:
          "Yes. The design can be structured around reusable components and clear implementation requirements.",
      },
    ],
  },

  {
    slug: "web-development",
    title: "Web Development",
    shortTitle: "Web Development",
    description:
      "Build fast, responsive, maintainable websites designed around real business goals.",
    intro:
      "We turn approved designs and requirements into responsive websites with a maintainable technical foundation.",
    outcomes: [
      "Responsive web experience",
      "Maintainable frontend architecture",
      "Performance-focused implementation",
      "SEO-ready technical foundation",
    ],
    deliverables: [
      "Frontend development",
      "Responsive implementation",
      "CMS integration",
      "API integration",
      "Technical SEO foundation",
      "Deployment support",
    ],
    process: [
      {
        title: "Prepare",
        description:
          "We review the design, content, requirements, and technical constraints.",
      },
      {
        title: "Build",
        description:
          "We implement the interface using reusable components and responsive patterns.",
      },
      {
        title: "Launch",
        description:
          "We test the experience, prepare deployment, and address launch requirements.",
      },
    ],
    faqs: [
      {
        question: "Can you build from an existing design?",
        answer:
          "Yes. We can work from an existing design system or create the required implementation structure.",
      },
      {
        question: "Can the website use a CMS?",
        answer:
          "Yes. The architecture can be connected to a CMS so content can be managed without editing frontend code.",
      },
      {
        question: "Is SEO considered during development?",
        answer:
          "Yes. Technical foundations such as metadata, semantic structure, sitemap, and crawl controls can be included.",
      },
    ],
  },

  {
    slug: "product-development",
    title: "Product Development",
    shortTitle: "Product Development",
    description:
      "Take a validated digital product from design into a scalable technical implementation.",
    intro:
      "For products that require more than a marketing website, we can take the experience into application development and ongoing iteration.",
    outcomes: [
      "Functional digital product",
      "Scalable application foundation",
      "Reusable interface architecture",
      "Foundation for future iterations",
    ],
    deliverables: [
      "Application frontend",
      "Backend integration",
      "Database integration",
      "Authentication flows",
      "Admin functionality",
      "Deployment architecture",
    ],
    process: [
      {
        title: "Define",
        description:
          "We turn the approved product direction into technical requirements and implementation priorities.",
      },
      {
        title: "Develop",
        description:
          "We build the application using reusable architecture and staged development.",
      },
      {
        title: "Iterate",
        description:
          "We use feedback and real usage to identify the next product improvements.",
      },
    ],
    faqs: [
      {
        question: "Can you build both frontend and backend?",
        answer:
          "Yes. Product development can include the frontend, backend, database, integrations, and admin functionality required by the project.",
      },
      {
        question: "Can an MVP be developed first?",
        answer:
          "Yes. Scope can be structured around an initial MVP and expanded through later iterations.",
      },
      {
        question: "How is the project price determined?",
        answer:
          "The final scope and pricing are discussed after understanding the product requirements and technical complexity.",
      },
    ],
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug);
}
