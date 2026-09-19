import Link from 'next/link';
import type { CaseStudy } from '@/lib/case-studies';

type Props = {
  project: CaseStudy;
};

export function CaseStudyHero({ project }: Props) {
  return (
    <section className="container pt-28 pb-20 md:pt-36 md:pb-28">
      <Link
        href="/work"
        className="inline-flex items-center gap-2 text-sm text-zinc-500 transition hover:text-white"
      >
        <span className="transition-transform group-hover:-translate-x-1">
          ←
        </span>
        Back to work
      </Link>

      <div className="mt-12 grid items-start gap-12 lg:grid-cols-[.9fr_1.1fr] lg:gap-16">
        <div>
          <div className="flex items-center gap-3 text-xs uppercase tracking-[.18em]">
            <span className="text-violet-300">
              {project.number}
            </span>

            <span className="size-1 rounded-full bg-zinc-700" />

            <span className="text-zinc-500">
              {project.status}
            </span>
          </div>

          <h1 className="display mt-6 text-5xl font-semibold tracking-[-.04em] text-white sm:text-6xl md:text-7xl">
            {project.title}
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-400">
            {project.description}
          </p>

          <div className="mt-8 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-zinc-500"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="overflow-hidden rounded-[30px] border border-white/10 bg-white/[.02]">
          <div className="aspect-[4/3] bg-gradient-to-br from-violet-500/15 via-white/[.03] to-transparent" />
        </div>
      </div>
    </section>
  );
}
