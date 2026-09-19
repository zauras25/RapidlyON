import {
  Container,
  Grid,
  Heading,
  Section,
  Text,
} from "@/design-system";

import type { Service } from "./service-data";

type ServiceContentProps = {
  service: Service;
};

export function ServiceContent({
  service,
}: ServiceContentProps) {
  return (
    <>
      <Section className="bg-neutral-50">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <Heading as="h2" size="h3">
              {service.intro}
            </Heading>

            <div>
              <Heading as="h3" size="h4">
                What you can expect
              </Heading>

              <ul className="mt-6 space-y-4">
                {service.outcomes.map((outcome) => (
                  <li
                    key={outcome}
                    className="flex gap-3 text-neutral-700"
                  >
                    <span className="mt-1 text-sm">✓</span>
                    <span>{outcome}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <Heading as="h2" size="h2">
            What we deliver
          </Heading>

          <Grid columns={3} className="mt-12">
            {service.deliverables.map((deliverable, index) => (
              <div
                key={deliverable}
                className="border-t border-neutral-200 pt-6"
              >
                <span className="text-sm text-neutral-400">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3 className="mt-8 text-xl font-semibold tracking-tight">
                  {deliverable}
                </h3>
              </div>
            ))}
          </Grid>
        </Container>
      </Section>

      <Section className="bg-neutral-50">
        <Container>
          <Heading as="h2" size="h2">
            How we work
          </Heading>

          <div className="mt-12 space-y-0">
            {service.process.map((step, index) => (
              <div
                key={step.title}
                className="grid gap-4 border-t border-neutral-200 py-8 md:grid-cols-[100px_220px_1fr]"
              >
                <span className="text-sm text-neutral-400">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3 className="text-xl font-semibold tracking-tight">
                  {step.title}
                </h3>

                <Text muted>
                  {step.description}
                </Text>
              </div>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
