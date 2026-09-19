"use client";

import Link from "next/link";
import { useState } from "react";

import { Button } from "@/design-system";

const navigation = [
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Insights", href: "/insights" },
];

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <Button
        variant="ghost"
        size="sm"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        <span className="text-xl leading-none">
          {open ? "×" : "☰"}
        </span>
      </Button>

      {open && (
        <div className="absolute inset-x-0 top-full border-t border-neutral-200 bg-white px-5 py-6 shadow-lg sm:px-6">
          <nav
            aria-label="Mobile navigation"
            className="flex flex-col gap-1"
          >
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 text-lg font-medium text-neutral-800 hover:bg-neutral-100"
              >
                {item.label}
              </Link>
            ))}

            <Link
              href="/start-a-project"
              onClick={() => setOpen(false)}
              className="mt-4 flex min-h-12 items-center justify-center rounded-full bg-neutral-950 px-5 font-medium text-white"
            >
              Start a Project
            </Link>
          </nav>
        </div>
      )}
    </div>
  );
}
