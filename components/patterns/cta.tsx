import Link from "next/link";

import {
  Container,
  Heading,
  Section,
  Text,
} from "@/design-system";

export function CTA() {
  return (
    <Section>
      <Container>
        <div className="rounded-3xl bg-neutral-950 px-6 py-16 text-white sm:px-10 sm:py-20 lg:px-16">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-neutral-400">
              Have a project in mind?
            </p>

            <Heading
              as="h2"
              size="h2"
              className="mt-5 text-white"
            >
              Let&apos;s turn your idea into something real.
            </Heading>

            <Text
              size="large"
              className="mt-6 text-neutral-300"
            >
              Tell us what you&apos;re building, what you need, and where you
              want to go next.
            </Text>

            <Link
              href="/start-a-project"
              className="mt-8 inline-flex min-h-12 items-center justify-center rounded-full bg-white px-6 text-sm font-medium text-neutral-950 transition-colors hover:bg-neutral-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950"
            >
              Start a Project
            </Link>
          </div>
        </div>
      </Container>
    </Section>
  );
}
