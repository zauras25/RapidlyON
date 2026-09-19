import Link from "next/link";

import { Container } from "@/design-system";

const navigation = [
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Insights", href: "/insights" },
  { label: "Start a Project", href: "/start-a-project" },
];

export function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-white">
      <Container>
        <div className="grid gap-12 py-12 md:grid-cols-[1fr_auto] md:py-16">
          <div>
            <Link
              href="/"
              className="text-xl font-bold tracking-[-0.04em]"
            >
              RapidlyON
            </Link>

            <p className="mt-4 max-w-sm text-sm leading-6 text-neutral-500">
              Digital product strategy, design, and development for ambitious
              businesses.
            </p>
          </div>

          <nav
            aria-label="Footer navigation"
            className="grid grid-cols-2 gap-x-10 gap-y-4 text-sm"
          >
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-neutral-600 transition-colors hover:text-neutral-950"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex flex-col gap-3 border-t border-neutral-200 py-6 text-xs text-neutral-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} RapidlyON. All rights reserved.</p>

          <p>Digital Product Studio</p>
        </div>
      </Container>
    </footer>
  );
}
