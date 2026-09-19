export type ContentStatus = "draft" | "published";

export type SEOData = {
  title?: string;
  description?: string;
  keywords?: string[];
  ogImage?: string;
  canonical?: string;
};

export type CMSService = {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  category: string;
  description: string;
  content: string;
  deliverables: string[];
  process: string[];
  faqs: {
    question: string;
    answer: string;
  }[];
  status: ContentStatus;
  featured: boolean;
  seo?: SEOData;
  createdAt: string;
  updatedAt: string;
};

export type CMSProject = {
  id: string;
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
  status: ContentStatus;
  coverImage?: string;
  seo?: SEOData;
  createdAt: string;
  updatedAt: string;
};

export type CMSInsight = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author: string;
  coverImage?: string;
  status: ContentStatus;
  featured: boolean;
  seo?: SEOData;
  publishedAt?: string;
  createdAt: string;
  updatedAt: string;
};
