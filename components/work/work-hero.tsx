import {
  Container,
  Eyebrow,
  Heading,
  Section,
  Text,
} from "@/design-system";

type WorkHeroProps = {
  title: string;
  category: string;
  summary: string;
};

export function WorkHero({
  title,
  category,
  summary,
}: WorkHeroProps) {
  return (
    <Section spacing="lg" className="overflow-hidden">
      <Container size="wide">
        <div className="max-w-5xl">
          <Eyebrow>{category}</Eyebrow>

          <Heading
            as="h1"
            size="h1"
            className="mt-6"
          >
            {title}
          </Heading>

          <Text
            size="large"
            className="mt-8 max-w-3xl"
          >
            {summary}
          </Text>
        </div>
      </Container>
    </Section>
  );
}
