import Link from "next/link";

import {
  Container,
  Section,
} from "@/design-system";

import { CTA } from "@/components/patterns";

import type { CaseStudy } from "./work-data";
import { WorkContent } from "./work-content";
import { WorkHero } from "./work-hero";

type WorkPageProps = {
  project: CaseStudy;
};

export function WorkPage({ project }: WorkPageProps) {
  return (
    <>
      <WorkHero
        title={project.title}
        category={project.category}
        summary={project.summary}
      />

      <WorkContent project={project} />

      <Section>
        <Container>
          <div className="flex flex-col gap-6 border-t border-neutral-200 pt-10 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-medium text-neutral-950">
                Have a similar project?
              </p>

              <p className="mt-1 text-sm text-neutral-500">
                Tell us what you&apos;re building and let&apos;s discuss it.
              </p>
            </div>

            <Link
              href="/start-a-project"
              className="inline-flex min-h-11 items-center justify-center rounded-full bg-neutral-950 px-5 text-sm font-medium text-white transition-colors hover:bg-neutral-800"
            >
              Start a Project
            </Link>
          </div>
        </Container>
      </Section>

      <CTA />
    </>
  );
}
