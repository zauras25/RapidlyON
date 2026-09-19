import type { Metadata } from "next";

import {
  Container,
  Section,
} from "@/design-system";

import { EnquiryList } from "@/components/admin-enquiries";
import { localDatabaseProvider } from "@/lib/db";

export const metadata: Metadata = {
  title: "Project Enquiries",
  description:
    "RapidlyON project enquiry management.",
};

export const dynamic = "force-dynamic";

export default async function AdminEnquiriesPage() {
  const enquiries =
    await localDatabaseProvider.getProjectEnquiries();

  return (
    <main>
      <Section spacing="lg">
        <Container>
          <div className="max-w-3xl">
            <p className="text-sm font-medium text-neutral-400">
              Admin
            </p>

            <h1 className="mt-5 text-4xl font-semibold tracking-tight text-neutral-950 sm:text-5xl">
              Project enquiries
            </h1>

            <p className="mt-5 text-base leading-7 text-neutral-500">
              Review project discussions submitted through
              the RapidlyON website.
            </p>
          </div>

          <div className="mt-12">
            <EnquiryList enquiries={enquiries} />
          </div>
        </Container>
      </Section>
    </main>
  );
}
