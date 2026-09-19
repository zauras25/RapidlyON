'use client';

import Link from 'next/link';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';

const links = [
  ['Our Approach', '/about'],
  ['Our Process', '/process'],
  ['Our Capabilities', '/services'],
  ['Our Work', '/work'],
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false);
      }
    };

    onScroll();

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('keydown', onKeyDown);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('keydown', onKeyDown);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="container pt-3 sm:pt-4">
        <div
          className={[
            'flex h-16 items-center justify-between rounded-2xl border px-4 transition-all duration-300 sm:px-5',
            scrolled
              ? 'border-white/15 bg-[#0b0b11]/90 shadow-2xl shadow-black/20 backdrop-blur-xl'
              : 'border-white/10 bg-white/[0.035] backdrop-blur-md',
          ].join(' ')}
        >
          {/* Logo */}
          <Link
            href="/"
            aria-label="RapidlyOn home"
            onClick={() => setOpen(false)}
            className="group shrink-0 text-lg font-bold tracking-[-0.03em] text-white"
          >
            Rapidly
            <span className="text-violet-400 transition-colors group-hover:text-violet-300">
              On
            </span>
          </Link>

          {/* Desktop navigation */}
          <nav
            className="hidden items-center gap-1 md:flex"
            aria-label="Primary navigation"
          >
            {links.map(([label, href]) => (
              <Link
                key={href}
                href={href}
                className="rounded-lg px-3 py-2 text-sm text-zinc-400 transition hover:bg-white/[0.05] hover:text-white"
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <Link
            href="/start-a-project"
            className="hidden items-center gap-2 rounded-xl bg-violet-600 px-4 py-2.5 text-sm font-semibold text-white shadow-[0_6px_24px_rgba(139,92,246,0.28)] transition-colors hover:bg-violet-500 md:inline-flex"
          >
            <span>Start a project</span>
            <ArrowUpRight size={15} strokeWidth={2} />
          </Link>

          {/* Mobile trigger */}
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            className="rounded-xl border border-white/10 p-2.5 text-zinc-300 transition hover:border-white/20 hover:bg-white/[0.05] hover:text-white md:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-navigation"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile navigation */}
        {open && (
          <div
            id="mobile-navigation"
            className="mt-2 overflow-hidden rounded-2xl border border-white/10 bg-[#0b0b11]/95 p-2 shadow-2xl backdrop-blur-xl md:hidden"
          >
            <nav
              className="flex flex-col"
              aria-label="Mobile navigation"
            >
              {links.map(([label, href]) => (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-4 py-3.5 text-sm text-zinc-300 transition hover:bg-white/[0.05] hover:text-white"
                >
                  {label}
                </Link>
              ))}

              <div className="my-2 h-px bg-white/[0.06]" />

              <Link
                href="/start-a-project"
                onClick={() => setOpen(false)}
                className="flex items-center justify-between rounded-xl bg-violet-600 px-4 py-3.5 text-sm font-semibold text-white shadow-[0_6px_24px_rgba(139,92,246,0.28)] transition-colors hover:bg-violet-500"
              >
                <span>Start a project</span>
                <ArrowUpRight size={16} strokeWidth={2} />
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}