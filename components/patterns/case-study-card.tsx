import Link from "next/link";

import { Badge, Card, Heading, Text } from "@/design-system";

type CaseStudyCardProps = {
  title: string;
  description: string;
  category: string;
  href: string;
};

export function CaseStudyCard({
  title,
  description,
  category,
  href,
}: CaseStudyCardProps) {
  return (
    <Link href={href} className="group block">
      <Card
        interactive
        className="overflow-hidden p-0"
      >
        <div className="aspect-[16/10] bg-neutral-100" />

        <div className="p-6">
          <Badge>{category}</Badge>

          <Heading as="h3" size="h3" className="mt-5">
            {title}
          </Heading>

          <Text muted className="mt-3">
            {description}
          </Text>

          <span className="mt-6 inline-flex text-sm font-medium">
            View case study
            <span
              aria-hidden="true"
              className="ml-2 transition-transform duration-200 group-hover:translate-x-1"
            >
              →
            </span>
          </span>
        </div>
      </Card>
    </Link>
  );
}
