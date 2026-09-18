import Link from 'next/link';

import { caseStudies } from '@/lib/case-studies';

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;

  const projectIndex = caseStudies.findIndex(
    (project) => project.slug === slug,
  );

  const project = caseStudies[projectIndex];

  if (!project) {
    return (
      <main className="container py-32">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow text-violet-300">404 / Project not found</p>

          <h1 className="display mt-4 text-4xl font-semibold text-white md:text-6xl">
            This project does not exist.
          </h1>

          <p className="mt-5 leading-7 text-zinc-500">
            The case study you are looking for may have been moved or removed.
          </p>

          <Link
            href="/work"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-violet-600 px-5 py-3.5 text-sm font-semibold text-white shadow-[0_8px_30px_rgba(139,92,246,.22)] transition hover:bg-violet-500"
          >
            Back to work
            <span>→</span>
          </Link>
        </div>
      </main>
    );
  }

  const previousProject =
    projectIndex > 0 ? caseStudies[projectIndex - 1] : null;

  const nextProject =
    projectIndex < caseStudies.length - 1
      ? caseStudies[projectIndex + 1]
      : null;

  return (
    <main>
      {/* HERO */}
      <section className="container pt-28 pb-16 md:pt-36 md:pb-24">
        <Link
          href="/work"
          className="inline-flex items-center gap-2 text-sm text-zinc-500 transition hover:text-white"
        >
          <span>←</span>
          Back to work
        </Link>

        <div className="mt-10 grid gap-12 lg:grid-cols-[1fr_.72fr] lg:items-end lg:gap-20">
          <div>
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-[10px] uppercase tracking-[0.2em] text-violet-300 sm:text-xs">
                {project.number} / {project.type}
              </span>

              <span className="h-1 w-1 rounded-full bg-zinc-700" />

              <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-600 sm:text-xs">
                {project.status}
              </span>
            </div>

            <h1 className="display mt-6 max-w-5xl text-5xl font-semibold leading-[0.98] tracking-[-0.045em] text-white sm:text-6xl md:text-7xl">
              {project.title}
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-zinc-400 md:text-lg">
              {project.description}
            </p>

            <div className="mt-7 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/10 bg-white/[0.025] px-3 py-1.5 text-[10px] text-zinc-500 sm:text-[11px]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-[#0b0b11] p-6 md:p-8">
            <div className="absolute -right-20 -top-20 size-56 rounded-full bg-violet-500/10 blur-3xl" />

            <div className="relative">
              <p className="text-[10px] uppercase tracking-[0.2em] text-violet-300">
                Project focus
              </p>

              <h2 className="display mt-4 text-2xl font-semibold tracking-[-0.025em] text-white md:text-3xl">
                {project.heroLabel}
              </h2>

              <div className="mt-7 h-px bg-white/[0.07]" />

              <div className="mt-6 grid grid-cols-2 gap-5">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.16em] text-zinc-600">
                    Type
                  </p>

                  <p className="mt-2 text-sm text-zinc-300">
                    {project.type}
                  </p>
                </div>

                <div>
                  <p className="text-[10px] uppercase tracking-[0.16em] text-zinc-600">
                    Status
                  </p>

                  <p className="mt-2 text-sm text-zinc-300">
                    {project.status}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECT SUMMARY */}
      <section className="border-y border-white/[0.06] bg-white/[0.015]">
        <div className="container py-16 md:py-20">
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-[24px] border border-white/10 bg-[#0b0b11] p-6 md:p-7">
              <p className="text-[10px] uppercase tracking-[0.2em] text-violet-300">
                Context
              </p>

              <p className="mt-4 text-sm leading-7 text-zinc-400">
                {project.context}
              </p>
            </div>

            <div className="rounded-[24px] border border-white/10 bg-[#0b0b11] p-6 md:p-7">
              <p className="text-[10px] uppercase tracking-[0.2em] text-violet-300">
                Problem
              </p>

              <p className="mt-4 text-sm leading-7 text-zinc-400">
                {project.problem}
              </p>
            </div>

            <div className="rounded-[24px] border border-white/10 bg-[#0b0b11] p-6 md:p-7">
              <p className="text-[10px] uppercase tracking-[0.2em] text-violet-300">
                Approach
              </p>

              <p className="mt-4 text-sm leading-7 text-zinc-400">
                {project.approach}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CASE STUDY SECTIONS */}
      <section className="container py-20 md:py-28">
        <div className="mx-auto max-w-5xl">
          {project.sections.map((section, index) => (
            <article
              key={section.eyebrow}
              className={[
                'grid gap-8 py-12 md:grid-cols-[.38fr_1fr] md:gap-16 md:py-16',
                index !== 0 ? 'border-t border-white/[0.06]' : '',
              ].join(' ')}
            >
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-violet-300">
                  {section.eyebrow}
                </p>
              </div>

              <div>
                <h2 className="display max-w-3xl text-3xl font-semibold leading-tight tracking-[-0.03em] text-white md:text-4xl">
                  {section.title}
                </h2>

                <p className="mt-5 max-w-3xl text-base leading-8 text-zinc-400">
                  {section.text}
                </p>

                {section.points && section.points.length > 0 && (
                  <div className="mt-7 grid gap-2 sm:grid-cols-2">
                    {section.points.map((point, pointIndex) => (
                      <div
                        key={point}
                        className="flex items-start gap-3 rounded-xl border border-white/[0.07] bg-white/[0.02] px-4 py-3.5"
                      >
                        <span className="mt-0.5 text-[10px] text-violet-300">
                          {String(pointIndex + 1).padStart(2, '0')}
                        </span>

                        <span className="text-sm leading-6 text-zinc-400">
                          {point}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* OUTCOME */}
      <section className="border-y border-white/[0.06] bg-white/[0.015]">
        <div className="container py-20 md:py-24">
          <div className="mx-auto max-w-4xl rounded-[32px] border border-violet-400/15 bg-gradient-to-br from-violet-600/[0.14] via-white/[0.025] to-transparent p-7 md:p-12">
            <p className="text-[10px] uppercase tracking-[0.2em] text-violet-300">
              Outcome
            </p>

            <h2 className="display mt-4 text-3xl font-semibold leading-tight tracking-[-0.03em] text-white md:text-5xl">
              What the work created.
            </h2>

            <p className="mt-6 max-w-3xl text-base leading-8 text-zinc-300 md:text-lg">
              {project.outcome}
            </p>
          </div>
        </div>
      </section>

      {/* PROJECT NAVIGATION */}
      <section className="container py-16 md:py-20">
        <div className="grid gap-4 md:grid-cols-2">
          {previousProject ? (
            <Link
              href={`/work/${previousProject.slug}`}
              className="group rounded-[24px] border border-white/10 bg-white/[0.02] p-6 transition duration-300 hover:-translate-y-1 hover:border-violet-400/25 hover:bg-white/[0.035] md:p-7"
            >
              <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-600">
                Previous project
              </p>

              <div className="mt-5 flex items-center justify-between gap-4">
                <h3 className="display text-2xl font-semibold tracking-[-0.025em] text-white">
                  {previousProject.shortTitle}
                </h3>

                <span className="flex size-9 shrink-0 items-center justify-center rounded-full border border-white/10 text-zinc-500 transition group-hover:border-violet-400/30 group-hover:bg-violet-500/10 group-hover:text-violet-300">
                  ←
                </span>
              </div>
            </Link>
          ) : (
            <div className="hidden md:block" />
          )}

          {nextProject ? (
            <Link
              href={`/work/${nextProject.slug}`}
              className="group rounded-[24px] border border-white/10 bg-white/[0.02] p-6 text-left transition duration-300 hover:-translate-y-1 hover:border-violet-400/25 hover:bg-white/[0.035] md:p-7 md:text-right"
            >
              <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-600">
                Next project
              </p>

              <div className="mt-5 flex items-center justify-between gap-4 md:justify-end">
                <h3 className="display order-2 text-2xl font-semibold tracking-[-0.025em] text-white md:order-1">
                  {nextProject.shortTitle}
                </h3>

                <span className="order-1 flex size-9 shrink-0 items-center justify-center rounded-full border border-white/10 text-zinc-500 transition group-hover:border-violet-400/30 group-hover:bg-violet-500/10 group-hover:text-violet-300 md:order-2">
                  →
                </span>
              </div>
            </Link>
          ) : null}
        </div>
      </section>

      {/* CTA */}
      <section className="container pb-12 md:pb-16">
        <div className="relative overflow-hidden rounded-[34px] border border-violet-400/15 bg-gradient-to-br from-violet-600/25 via-blue-600/[0.08] to-transparent px-7 py-12 md:px-12 md:py-14">
          <div className="absolute -right-24 -top-24 size-72 rounded-full bg-violet-500/15 blur-3xl" />

          <div className="relative max-w-3xl">
            <p className="eyebrow text-violet-200">
              Start with the problem
            </p>

            <h2 className="display mt-3 text-4xl font-semibold tracking-[-0.035em] text-white md:text-5xl">
              Have something worth making clearer?
            </h2>

            <p className="mt-5 max-w-2xl leading-7 text-zinc-300">
              Tell us what you are building, what is not working, or what you
              are trying to figure out. We can start from there.
            </p>

            <Link
              href="/start-a-project"
              className="mt-7 inline-flex items-center gap-2 rounded-xl bg-violet-600 px-5 py-3.5 text-sm font-semibold text-white shadow-[0_8px_30px_rgba(139,92,246,.28)] transition duration-300 hover:bg-violet-500 hover:shadow-[0_10px_34px_rgba(139,92,246,.36)]"
            >
              Start a project
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
