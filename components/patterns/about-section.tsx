import {
  Container,
  Section,
  Text,
} from "@/design-system";

import { SectionHeading } from "./section-heading";

export function AboutSection() {
  return (
    <Section className="border-y border-neutral-200">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <SectionHeading
            eyebrow="Why RapidlyON"
            title="One partner across the digital product journey."
          />

          <div>
            <Text size="large">
              A digital project becomes difficult when strategy, design, and
              development operate as separate conversations.
            </Text>

            <Text className="mt-6">
              RapidlyON is structured around a connected process. We can start
              with an early idea, help define the product, design the
              experience, and build the digital solution.
            </Text>

            <Text className="mt-6">
              For projects that need a custom scope, the conversation can
              continue before a final price is established. That keeps the
              initial enquiry simple while allowing the eventual proposal to
              reflect the actual requirements.
            </Text>
          </div>
        </div>
      </Container>
    </Section>
  );
}
