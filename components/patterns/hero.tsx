import Link from "next/link";

import {
  Button,
  Container,
  Eyebrow,
  Heading,
  Section,
  Text,
} from "@/design-system";

export function Hero() {
  return (
    <Section spacing="xl" className="overflow-hidden">
      <Container size="wide">
        <div className="grid items-end gap-12 lg:grid-cols-[1.3fr_0.7fr] lg:gap-16">
          <div className="max-w-5xl">
            <Eyebrow>Digital Product Studio</Eyebrow>

            <Heading
              as="h1"
              size="display"
              className="mt-6"
            >
              We design and build digital products that move businesses forward.
            </Heading>

            <Text
              size="large"
              className="mt-8 max-w-2xl"
            >
              From product strategy and UX/UI design to development and launch,
              RapidlyON helps turn ambitious ideas into useful digital products.
            </Text>

            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href="/start-a-project"
                className="inline-flex min-h-11 items-center justify-center rounded-full bg-neutral-950 px-5 text-sm font-medium text-white transition-colors hover:bg-neutral-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2"
              >
                Start a Project
              </Link>

              <Link
                href="/work"
                className="inline-flex min-h-11 items-center justify-center rounded-full border border-neutral-300 px-5 text-sm font-medium text-neutral-950 transition-colors hover:bg-neutral-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2"
              >
                Explore Our Work
              </Link>
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="aspect-square rounded-3xl bg-neutral-950 p-8 text-white">
              <div className="flex h-full flex-col justify-between">
                <span className="text-sm text-neutral-400">
                  RAPIDLYON / 01
                </span>

                <p className="text-2xl font-medium leading-tight tracking-tight">
                  Strategy.
                  <br />
                  Design.
                  <br />
                  Development.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
