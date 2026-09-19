import {
  Container,
  Grid,
  Section,
} from "@/design-system";

import { SectionHeading } from "./section-heading";

const steps = [
  {
    number: "01",
    title: "Discover",
    description:
      "We understand the business, users, goals, constraints, and opportunity before deciding what to build.",
  },
  {
    number: "02",
    title: "Define",
    description:
      "We turn the discussion into a clear scope, product direction, priorities, and delivery plan.",
  },
  {
    number: "03",
    title: "Design",
    description:
      "We shape the user experience and visual interface before development begins.",
  },
  {
    number: "04",
    title: "Build",
    description:
      "We develop the approved product with a focus on performance, maintainability, and responsive behavior.",
  },
  {
    number: "05",
    title: "Launch",
    description:
      "We prepare the product for release and create a foundation that can evolve after launch.",
  },
];

export function ProcessSection() {
  return (
    <Section>
      <Container>
        <SectionHeading
          eyebrow="Our process"
          title="A clearer path from conversation to launch."
          description="Every project starts with a discussion. The scope becomes clearer as we understand the problem, requirements, users, and desired outcome."
        />

        <Grid columns={3} className="mt-12 lg:mt-16">
          {steps.map((step) => (
            <div
              key={step.number}
              className="border-t border-neutral-200 pt-6"
            >
              <span className="text-sm font-medium text-neutral-400">
                {step.number}
              </span>

              <h3 className="mt-8 text-2xl font-semibold tracking-tight text-neutral-950">
                {step.title}
              </h3>

              <p className="mt-4 text-sm leading-6 text-neutral-500">
                {step.description}
              </p>
            </div>
          ))}
        </Grid>
      </Container>
    </Section>
  );
}
