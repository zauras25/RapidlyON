import {
  Container,
  Grid,
  Section,
} from "@/design-system";

import { CaseStudyCard } from "./case-study-card";
import { SectionHeading } from "./section-heading";

const projects = [
  {
    title: "Digital Product Experience",
    description:
      "A product experience focused on clarity, conversion, and a simpler user journey.",
    category: "Product Design",
    href: "/work/digital-product-experience",
  },
  {
    title: "Business Website",
    description:
      "A modern web experience designed to communicate value and generate qualified enquiries.",
    category: "Web Design",
    href: "/work/business-website",
  },
  {
    title: "SaaS Platform",
    description:
      "A scalable interface system designed around complex workflows and everyday users.",
    category: "UX / UI",
    href: "/work/saas-platform",
  },
];

export function WorkSection() {
  return (
    <Section className="bg-neutral-50">
      <Container>
        <SectionHeading
          eyebrow="Selected work"
          title="Work that solves a real problem."
          description="Explore how strategy, design, and technology come together across different digital products."
        />

        <Grid columns={3} className="mt-12 lg:mt-16">
          {projects.map((project) => (
            <CaseStudyCard key={project.href} {...project} />
          ))}
        </Grid>
      </Container>
    </Section>
  );
}
