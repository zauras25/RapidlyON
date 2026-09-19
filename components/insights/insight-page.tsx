import Link from "next/link";

import {
  Container,
  Section,
} from "@/design-system";

import { CTA } from "@/components/patterns";

import type { Insight } from "./insight-data";
import { InsightContent } from "./insight-content";
import { InsightHero } from "./insight-hero";

type InsightPageProps = {
  insight: Insight;
};

export function InsightPage({
  insight,
}: InsightPageProps) {
  return (
    <>
      <InsightHero insight={insight} />

      <InsightContent insight={insight} />

      <Section>
        <Container>
          <div className="border-t border-neutral-200 pt-8">
            <Link
              href="/insights"
              className="text-sm font-medium text-neutral-950 hover:text-neutral-600"
            >
              ← Back to Insights
            </Link>
          </div>
        </Container>
      </Section>

      <CTA />
    </>
  );
}
