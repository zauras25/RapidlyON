import {
  Container,
  Grid,
  Heading,
  Section,
  Text,
} from "@/design-system";

import type { CaseStudy } from "./work-data";

type WorkContentProps = {
  project: CaseStudy;
};

export function WorkContent({
  project,
}: WorkContentProps) {
  return (
    <>
      <Section className="bg-neutral-50">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div>
              <p className="text-sm font-medium text-neutral-400">
                Project overview
              </p>

              <Heading
                as="h2"
                size="h3"
                className="mt-4"
              >
                {project.summary}
              </Heading>
            </div>

            <div className="grid gap-8 sm:grid-cols-2">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
                  Client
                </p>

                <p className="mt-3 text-sm text-neutral-700">
                  {project.client}
                </p>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
                  Services
                </p>

                <ul className="mt-3 space-y-2">
                  {project.services.map((service) => (
                    <li
                      key={service}
                      className="text-sm text-neutral-700"
                    >
                      {service}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <Grid columns={2}>
            <div className="border-t border-neutral-200 pt-6">
              <p className="text-sm font-medium text-neutral-400">
                01
              </p>

              <Heading
                as="h2"
                size="h3"
                className="mt-8"
              >
                The challenge
              </Heading>

              <Text muted className="mt-5">
                {project.challenge}
              </Text>
            </div>

            <div className="border-t border-neutral-200 pt-6">
              <p className="text-sm font-medium text-neutral-400">
                02
              </p>

              <Heading
                as="h2"
                size="h3"
                className="mt-8"
              >
                Our approach
              </Heading>

              <Text muted className="mt-5">
                {project.approach}
              </Text>
            </div>

            <div className="border-t border-neutral-200 pt-6">
              <p className="text-sm font-medium text-neutral-400">
                03
              </p>

              <Heading
                as="h2"
                size="h3"
                className="mt-8"
              >
                The solution
              </Heading>

              <Text muted className="mt-5">
                {project.solution}
              </Text>
            </div>

            <div className="border-t border-neutral-200 pt-6">
              <p className="text-sm font-medium text-neutral-400">
                04
              </p>

              <Heading
                as="h2"
                size="h3"
                className="mt-8"
              >
                Outcome
              </Heading>

              <Text muted className="mt-5">
                {project.outcome}
              </Text>
            </div>
          </Grid>
        </Container>
      </Section>
    </>
  );
}
