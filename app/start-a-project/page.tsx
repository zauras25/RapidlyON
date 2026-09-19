import type { Metadata } from "next";

import {
  Container,
  Section,
} from "@/design-system";

import {
  ProjectForm,
  ProjectIntro,
} from "@/components/project-discussion";

export const metadata: Metadata = {
  title: "Start a Project",
  description:
    "Tell RapidlyON about your project, requirements, timeline and goals to start a project discussion.",
  alternates: {
    canonical: "/start-a-project",
  },
  openGraph: {
    title: "Start a Project — RapidlyON",
    description:
      "Start a project discussion with RapidlyON.",
    type: "website",
  },
};

export default function StartAProjectPage() {
  return (
    <main>
      <ProjectIntro />

      <Section>
        <Container size="narrow">
          <ProjectForm />
        </Container>
      </Section>
    </main>
  );
}
