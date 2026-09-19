import Link from "next/link";

import {
  Container,
  Grid,
  Section,
} from "@/design-system";

import { SectionHeading } from "@/components/patterns";
import { caseStudies } from "@/components/work";

export const metadata = {
  title: "Work",
  description:
    "Explore selected digital product, UX/UI, web design, and development work by RapidlyON.",
};

export default function WorkPage() {
  return (
    <main>
      <Section spacing="lg">
        <Container>
          <SectionHeading
            eyebrow="Selected work"
            title="Projects built around real problems."
            description="Explore selected work across product strategy, UX/UI design, web development, and digital product development."
          />

          <Grid columns={2} className="mt-14 lg:mt-20">
            {caseStudies.map((project, index) => (
              <Link
                key={project.slug}
                href={`/work/${project.slug}`}
                className="group border-t border-neutral-200 py-8"
              >
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <span className="text-sm text-neutral-400">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <p className="mt-3 text-xs font-medium uppercase tracking-wider text-neutral-400">
                      {project.category}
                    </p>
                  </div>

                  <span
                    aria-hidden="true"
                    className="text-xl transition-transform duration-200 group-hover:translate-x-1"
                  >
                    ↗
                  </span>
                </div>

                <h2 className="mt-10 text-3xl font-semibold tracking-tight text-neutral-950">
                  {project.title}
                </h2>

                <p className="mt-4 max-w-xl text-sm leading-6 text-neutral-500">
                  {project.summary}
                </p>

                <span className="mt-6 inline-flex text-sm font-medium text-neutral-950">
                  View case study
                </span>
              </Link>
            ))}
          </Grid>
        </Container>
      </Section>
    </main>
  );
}
