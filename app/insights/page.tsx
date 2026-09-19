import Link from "next/link";

import {
  Container,
  Grid,
  Section,
} from "@/design-system";

import { SectionHeading } from "@/components/patterns";
import { insights } from "@/components/insights";

export const metadata = {
  title: "Insights",
  description:
    "Ideas and practical perspectives from RapidlyON on product strategy, UX/UI design, web development, and digital products.",
};

export default function InsightsPage() {
  return (
    <main>
      <Section spacing="lg">
        <Container>
          <SectionHeading
            eyebrow="Insights"
            title="Ideas about products, design and digital experiences."
            description="Practical perspectives from the work we do across product strategy, design and development."
          />

          <Grid columns={2} className="mt-14 lg:mt-20">
            {insights.map((insight, index) => (
              <Link
                key={insight.slug}
                href={`/insights/${insight.slug}`}
                className="group border-t border-neutral-200 py-8"
              >
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <span className="text-sm text-neutral-400">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <p className="mt-3 text-xs font-medium uppercase tracking-wider text-neutral-400">
                      {insight.category}
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
                  {insight.title}
                </h2>

                <p className="mt-4 max-w-xl text-sm leading-6 text-neutral-500">
                  {insight.excerpt}
                </p>

                <span className="mt-6 inline-flex text-sm font-medium text-neutral-950">
                  Read insight
                </span>
              </Link>
            ))}
          </Grid>
        </Container>
      </Section>
    </main>
  );
}
