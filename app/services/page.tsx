import Link from "next/link";

import {
  Container,
  Grid,
  Section,
} from "@/design-system";

import { SectionHeading } from "@/components/patterns";
import { services } from "@/components/services";

export const metadata = {
  title: "Services",
  description:
    "RapidlyON offers product strategy, UX/UI design, web development, and digital product development.",
};

export default function ServicesPage() {
  return (
    <main>
      <Section spacing="lg">
        <Container>
          <SectionHeading
            eyebrow="Services"
            title="Everything you need to move a digital product forward."
            description="From early product thinking to design and development, our services can be combined around the needs of your project."
          />

          <Grid columns={2} className="mt-14 lg:mt-20">
            {services.map((service, index) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group border-t border-neutral-200 py-8"
              >
                <div className="flex items-start justify-between gap-6">
                  <span className="text-sm text-neutral-400">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span
                    aria-hidden="true"
                    className="text-xl transition-transform duration-200 group-hover:translate-x-1"
                  >
                    ↗
                  </span>
                </div>

                <h2 className="mt-10 text-3xl font-semibold tracking-tight text-neutral-950">
                  {service.title}
                </h2>

                <p className="mt-4 max-w-xl text-sm leading-6 text-neutral-500">
                  {service.description}
                </p>

                <span className="mt-6 inline-flex text-sm font-medium text-neutral-950">
                  Explore service
                </span>
              </Link>
            ))}
          </Grid>
        </Container>
      </Section>
    </main>
  );
}
