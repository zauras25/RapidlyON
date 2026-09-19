import {
  Container,
  Heading,
  Section,
} from "@/design-system";

import type { Service } from "./service-data";

type ServiceFAQProps = {
  service: Service;
};

export function ServiceFAQ({ service }: ServiceFAQProps) {
  return (
    <Section>
      <Container>
        <div className="max-w-3xl">
          <Heading as="h2" size="h2">
            Frequently asked questions
          </Heading>

          <div className="mt-10 divide-y divide-neutral-200 border-y border-neutral-200">
            {service.faqs.map((faq) => (
              <details
                key={faq.question}
                className="group py-6"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-lg font-semibold tracking-tight text-neutral-950">
                  <span>{faq.question}</span>

                  <span
                    aria-hidden="true"
                    className="text-2xl font-normal text-neutral-400 transition-transform duration-200 group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>

                <p className="mt-4 max-w-2xl pr-10 text-sm leading-6 text-neutral-500">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
