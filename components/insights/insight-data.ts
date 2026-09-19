export type Insight = {
  slug: string;
  title: string;
  excerpt: string;
  content: string[];
  category: string;
  author: string;
  publishedAt: string;
  featured: boolean;
};

export const insights: Insight[] = [
  {
    slug: "what-makes-a-digital-product-useful",
    title: "What Makes a Digital Product Useful?",
    excerpt:
      "A useful digital product starts with a clear understanding of people, problems, and outcomes.",
    content: [
      "Good digital products are not defined only by how they look. Their value comes from solving a meaningful problem with as little unnecessary friction as possible.",
      "Before designing screens, teams need to understand who the product is for, what users are trying to accomplish, and what the business needs the product to achieve.",
      "A strong product experience connects these requirements through clear information architecture, useful interactions, and a consistent visual system.",
      "The result is not simply a polished interface. It is a product that people can understand, use, and return to with confidence.",
    ],
    category: "Product",
    author: "RapidlyON",
    publishedAt: "2026-09-18",
    featured: true,
  },
  {
    slug: "why-design-systems-matter",
    title: "Why Design Systems Matter",
    excerpt:
      "A design system creates consistency while making digital products easier to scale and maintain.",
    content: [
      "As a digital product grows, repeating the same interface decisions across different screens creates unnecessary complexity.",
      "A design system establishes reusable foundations for typography, spacing, colors, components, and interaction patterns.",
      "This makes design and development more consistent while reducing the amount of repeated work required for new features.",
      "The most useful design systems are not static libraries. They evolve with the product and remain connected to real user and business requirements.",
    ],
    category: "Design",
    author: "RapidlyON",
    publishedAt: "2026-09-18",
    featured: true,
  },
  {
    slug: "from-idea-to-digital-product",
    title: "From Idea to Digital Product",
    excerpt:
      "Turning an idea into a working digital product requires more than development.",
    content: [
      "An early product idea usually starts with a problem, an opportunity, or a business requirement. The first challenge is turning that idea into something specific enough to build.",
      "Product strategy helps define the users, goals, priorities, and core features that matter most.",
      "UX and UI design then translate that direction into understandable user journeys and interfaces.",
      "Development turns the validated direction into working software, while future iterations improve the product based on real requirements and feedback.",
    ],
    category: "Product Development",
    author: "RapidlyON",
    publishedAt: "2026-09-18",
    featured: false,
  },
];

export function getInsightBySlug(
  slug: string,
): Insight | undefined {
  return insights.find(
    (insight) => insight.slug === slug,
  );
}

export function getPublishedInsights(): Insight[] {
  return insights;
}
