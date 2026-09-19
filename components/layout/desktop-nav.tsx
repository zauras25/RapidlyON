import Link from "next/link";

import { Button } from "@/design-system";

const navigation = [
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Insights", href: "/insights" },
];

export function DesktopNav() {
  return (
    <nav
      aria-label="Main navigation"
      className="hidden items-center gap-8 lg:flex"
    >
      {navigation.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="text-sm font-medium text-neutral-600 transition-colors hover:text-neutral-950"
        >
          {item.label}
        </Link>
      ))}

      <Link
        href="/start-a-project"
        className="inline-flex min-h-9 items-center justify-center rounded-full bg-neutral-950 px-4 text-sm font-medium text-white transition-colors hover:bg-neutral-800"
      >
        Start a Project
      </Link>
    </nav>
  );
}
