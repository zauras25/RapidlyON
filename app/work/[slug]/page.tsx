import type { Metadata } from "next";
import { notFound } from "next/navigation";

import {
  caseStudies,
  WorkPage,
} from "@/components/work";

type WorkRouteProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return caseStudies.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: WorkRouteProps): Promise<Metadata> {
  const { slug } = await params;

  const project = caseStudies.find(
    (item) => item.slug === slug,
  );

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: project.title,
    description: project.summary,
    alternates: {
      canonical: `/work/${project.slug}`,
    },
    openGraph: {
      title: `${project.title} — RapidlyON`,
      description: project.summary,
      type: "article",
    },
  };
}

export default async function WorkRoute({
  params,
}: WorkRouteProps) {
  const { slug } = await params;

  const project = caseStudies.find(
    (item) => item.slug === slug,
  );

  if (!project) {
    notFound();
  }

  return <WorkPage project={project} />;
}
