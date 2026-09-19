import {
  Container,
  Section,
  Text,
} from "@/design-system";

import type { Insight } from "./insight-data";

type InsightContentProps = {
  insight: Insight;
};

export function InsightContent({
  insight,
}: InsightContentProps) {
  return (
    <Section>
      <Container>
        <article className="max-w-3xl">
          <div className="space-y-6">
            {insight.content.map((paragraph) => (
              <Text
                key={paragraph}
                size="large"
                muted
              >
                {paragraph}
              </Text>
            ))}
          </div>
        </article>
      </Container>
    </Section>
  );
}
