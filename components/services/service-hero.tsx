import {
  Container,
  Eyebrow,
  Heading,
  Section,
  Text,
} from "@/design-system";

import type { Service } from "./service-data";

type ServiceHeroProps = {
  service: Service;
};

export function ServiceHero({ service }: ServiceHeroProps) {
  return (
    <Section spacing="lg" className="overflow-hidden">
      <Container size="wide">
        <div className="max-w-5xl">
          <Eyebrow>RapidlyON / Services</Eyebrow>

          <Heading
            as="h1"
            size="h1"
            className="mt-6"
          >
            {service.title}
          </Heading>

          <Text
            size="large"
            className="mt-8 max-w-3xl"
          >
            {service.description}
          </Text>
        </div>
      </Container>
    </Section>
  );
}
