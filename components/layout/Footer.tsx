import Link from 'next/link';

const exploreLinks = [
  ['Work', '/work'],
  ['Services', '/services'],
  ['Process', '/process'],
  ['About', '/about'],
] as const;

const startLinks = [
  ['Start a project', '/start-a-project'],
  ['Privacy', '/privacy'],
  ['Terms', '/terms'],
] as const;

export function Footer() {
  return (
    <footer className="mt-28 border-t border-white/[0.06]">
      <div className="container py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-[1.4fr_.6fr_.6fr]">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="text-xl font-bold tracking-[-0.03em] text-white"
            >
              Rapidly
              <span className="text-violet-400">On</span>
            </Link>

            <p className="mt-5 max-w-md leading-7 text-zinc-500">
              We design digital experiences people can understand, use, and
              trust — then build them when you need us to.
            </p>

            <Link
              href="/start-a-project"
              className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-zinc-300 transition hover:text-white"
            >
              Start a conversation
              <span className="text-violet-400">→</span>
            </Link>
          </div>

          {/* Explore */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-600">
              Explore
            </p>

            <nav
              className="mt-5 grid gap-3"
              aria-label="Footer navigation"
            >
              {exploreLinks.map(([label, href]) => (
                <Link
                  key={href}
                  href={href}
                  className="w-fit text-sm text-zinc-500 transition hover:text-white"
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Start */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-600">
              Start
            </p>

            <nav
              className="mt-5 grid gap-3"
              aria-label="Project and legal links"
            >
              {startLinks.map(([label, href]) => (
                <Link
                  key={href}
                  href={href}
                  className="w-fit text-sm text-zinc-500 transition hover:text-white"
                >
                  {label}
                </Link>
              ))}

              <a
                href="mailto:hello@rapidlyon.com"
                className="w-fit text-sm text-zinc-500 transition hover:text-white"
              >
                hello@rapidlyon.com
              </a>
            </nav>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="container border-t border-white/[0.06] py-7">
        <div className="flex flex-col justify-between gap-3 text-xs text-zinc-600 sm:flex-row">
          <span>
            © {new Date().getFullYear()} RapidlyOn. All rights reserved.
          </span>

          <span>UX first. Build when it makes sense.</span>
        </div>
      </div>
    </footer>
  );
}