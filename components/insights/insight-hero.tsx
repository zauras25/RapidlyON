import {
  Container,
  Eyebrow,
  Heading,
  Section,
  Text,
} from "@/design-system";

import type { Insight } from "./insight-data";

type InsightHeroProps = {
  insight: Insight;
};

export function InsightHero({
  insight,
}: InsightHeroProps) {
  return (
    <Section spacing="lg">
      <Container size="wide">
        <div className="max-w-4xl">
          <Eyebrow>{insight.category}</Eyebrow>

          <Heading
            as="h1"
            size="h1"
            className="mt-6"
          >
            {insight.title}
          </Heading>

          <Text
            size="large"
            className="mt-8 max-w-3xl"
          >
            {insight.excerpt}
          </Text>

          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-neutral-400">
            <span>{insight.author}</span>
            <span>{insight.publishedAt}</span>
          </div>
        </div>
      </Container>
    </Section>
  );
}
