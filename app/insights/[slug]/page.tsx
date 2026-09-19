import type { Metadata } from "next";
import { notFound } from "next/navigation";

import {
  getInsightBySlug,
  insights,
  InsightPage,
} from "@/components/insights";

type InsightRouteProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return insights.map((insight) => ({
    slug: insight.slug,
  }));
}

export async function generateMetadata({
  params,
}: InsightRouteProps): Promise<Metadata> {
  const { slug } = await params;

  const insight = getInsightBySlug(slug);

  if (!insight) {
    return {
      title: "Insight Not Found",
    };
  }

  return {
    title: insight.title,
    description: insight.excerpt,
    alternates: {
      canonical: `/insights/${insight.slug}`,
    },
    openGraph: {
      title: `${insight.title} — RapidlyON`,
      description: insight.excerpt,
      type: "article",
      publishedTime: insight.publishedAt,
    },
  };
}

export default async function InsightRoute({
  params,
}: InsightRouteProps) {
  const { slug } = await params;

  const insight = getInsightBySlug(slug);

  if (!insight) {
    notFound();
  }

  return <InsightPage insight={insight} />;
}
