import {
  Container,
  Grid,
  Section,
} from "@/design-system";

import { SectionHeading } from "./section-heading";
import { ServiceCard } from "./service-card";

const services = [
  {
    number: "01",
    title: "Product Strategy",
    description:
      "Turn an idea, business challenge, or opportunity into a clear digital product direction.",
    href: "/services/product-strategy",
  },
  {
    number: "02",
    title: "UX / UI Design",
    description:
      "Create intuitive user experiences and a visual system that makes the product easy to understand and use.",
    href: "/services/ux-ui-design",
  },
  {
    number: "03",
    title: "Web Development",
    description:
      "Build fast, responsive, maintainable websites and digital products ready for real users.",
    href: "/services/web-development",
  },
  {
    number: "04",
    title: "Product Development",
    description:
      "Take a validated product from design into a scalable technical implementation.",
    href: "/services/product-development",
  },
];

export function ServicesSection() {
  return (
    <Section>
      <Container>
        <SectionHeading
          eyebrow="What we do"
          title="From idea to digital product."
          description="RapidlyON brings strategy, UX/UI design, and development together so your project does not have to move between disconnected teams."
        />

        <Grid columns={2} className="mt-12 lg:mt-16">
          {services.map((service) => (
            <ServiceCard key={service.number} {...service} />
          ))}
        </Grid>
      </Container>
    </Section>
  );
}
