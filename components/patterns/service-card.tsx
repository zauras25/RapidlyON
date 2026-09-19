import Link from "next/link";

import { Card, Heading, Text } from "@/design-system";

type ServiceCardProps = {
  number: string;
  title: string;
  description: string;
  href: string;
};

export function ServiceCard({
  number,
  title,
  description,
  href,
}: ServiceCardProps) {
  return (
    <Link href={href} className="group block">
      <Card
        interactive
        className="flex min-h-80 flex-col justify-between"
      >
        <div className="flex items-start justify-between gap-4">
          <span className="text-sm font-medium text-neutral-400">
            {number}
          </span>

          <span
            aria-hidden="true"
            className="text-xl transition-transform duration-200 group-hover:translate-x-1"
          >
            ↗
          </span>
        </div>

        <div>
          <Heading as="h3" size="h3">
            {title}
          </Heading>

          <Text muted className="mt-4">
            {description}
          </Text>
        </div>
      </Card>
    </Link>
  );
}
