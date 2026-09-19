import {
  Container,
  Heading,
  Section,
  Text,
} from "@/design-system";

export function ProjectIntro() {
  return (
    <Section spacing="lg">
      <Container>
        <div className="max-w-3xl">
          <p className="text-sm font-medium text-neutral-400">
            Start a project
          </p>

          <Heading
            as="h1"
            size="h1"
            className="mt-5"
          >
            Tell us what you&apos;re building.
          </Heading>

          <Text
            size="large"
            muted
            className="mt-7 max-w-2xl"
          >
            Share a few details about your project. We&apos;ll
            review your requirements and continue the discussion
            around scope, approach, timeline and investment.
          </Text>
        </div>
      </Container>
    </Section>
  );
}
