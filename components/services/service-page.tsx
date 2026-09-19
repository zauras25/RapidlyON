import Link from "next/link";

import {
  Container,
  Section,
} from "@/design-system";

import { CTA } from "@/components/patterns";

import type { Service } from "./service-data";
import { ServiceContent } from "./service-content";
import { ServiceFAQ } from "./service-faq";
import { ServiceHero } from "./service-hero";

type ServicePageProps = {
  service: Service;
};

export function ServicePage({ service }: ServicePageProps) {
  return (
    <>
      <ServiceHero service={service} />

      <ServiceContent service={service} />

      <ServiceFAQ service={service} />

      <Section>
        <Container>
          <div className="flex flex-col gap-6 border-t border-neutral-200 pt-10 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-medium text-neutral-950">
                Have a project related to {service.shortTitle}?
              </p>

              <p className="mt-1 text-sm text-neutral-500">
                Tell us about it and we&apos;ll discuss the right scope.
              </p>
            </div>

            <Link
              href="/start-a-project"
              className="inline-flex min-h-11 items-center justify-center rounded-full bg-neutral-950 px-5 text-sm font-medium text-white transition-colors hover:bg-neutral-800"
            >
              Start a Project
            </Link>
          </div>
        </Container>
      </Section>

      <CTA />
    </>
  );
}
