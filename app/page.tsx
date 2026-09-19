import {
  AboutSection,
  CTA,
  Hero,
  ProcessSection,
  ServicesSection,
  WorkSection,
} from "@/components/patterns";

export default function Home() {
  return (
    <main>
      <Hero />
      <ServicesSection />
      <WorkSection />
      <ProcessSection />
      <AboutSection />
      <CTA />
    </main>
  );
}
