import Link from 'next/link';

import { caseStudies } from '@/lib/case-studies';

export default function WorkPage() {
  return (
    <main>
      {/* HERO */}
      <section className="container pt-28 pb-16 md:pt-36 md:pb-20">
        <div className="max-w-4xl">
          <p className="eyebrow text-violet-300">Selected work</p>

          <h1 className="display mt-5 text-balance text-5xl font-semibold leading-[0.98] tracking-[-0.045em] sm:text-6xl md:text-7xl">
            Work built around the experience.
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-8 text-zinc-400 md:text-lg">
            Real projects and product concepts shaped through research,
            strategy, UX thinking, and interface design.
          </p>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="container pb-20 md:pb-28">
        <div className="space-y-5">
          {caseStudies.map((project, index) => (
            <Link
              key={project.slug}
              href={`/work/${project.slug}`}
              className="group block overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.02] transition duration-300 hover:-translate-y-1 hover:border-violet-400/25 hover:bg-white/[0.035]"
            >
              <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
                {/* PROJECT VISUAL */}
                <div className="relative min-h-[300px] overflow-hidden border-b border-white/10 bg-[#0d0d14] lg:min-h-[430px] lg:border-b-0 lg:border-r">
                  <div className="absolute inset-0 bg-gradient-to-br from-violet-500/[0.08] via-transparent to-blue-500/[0.04]" />

                  <div className="absolute left-8 right-8 top-10 bottom-10 rounded-[24px] border border-white/10 bg-[#111119] p-5 shadow-2xl transition duration-500 group-hover:scale-[1.015]">
                    <div className="flex items-center justify-between border-b border-white/10 pb-4">
                      <div className="flex gap-1.5">
                        <span className="size-2 rounded-full bg-white/15" />
                        <span className="size-2 rounded-full bg-white/15" />
                        <span className="size-2 rounded-full bg-white/15" />
                      </div>

                      <span className="text-[9px] uppercase tracking-[0.18em] text-zinc-600">
                        {String(index + 1).padStart(2, '0')} / Product
                      </span>
                    </div>

                    {project.slug === 'umer-mobile-parts' && (
                      <div className="mt-5">
                        <div className="h-9 rounded-xl border border-white/10 bg-white/[0.035] px-3 flex items-center">
                          <span className="text-[10px] text-zinc-600">
                            Search model, brand, part code...
                          </span>
                        </div>

                        <div className="mt-3 grid grid-cols-3 gap-2">
                          <div className="h-10 rounded-xl bg-white/[0.04]" />
                          <div className="h-10 rounded-xl bg-white/[0.04]" />
                          <div className="h-10 rounded-xl bg-violet-500/10" />
                        </div>

                        <div className="mt-3 grid grid-cols-2 gap-2">
                          {[1, 2, 3, 4].map((item) => (
                            <div
                              key={item}
                              className="rounded-xl border border-white/10 bg-white/[0.025] p-2"
                            >
                              <div className="h-20 rounded-lg bg-gradient-to-br from-white/[0.07] to-white/[0.015]" />
                              <div className="mt-2 h-2 w-14 rounded bg-white/10" />
                              <div className="mt-1 h-2 w-20 rounded bg-white/5" />
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {project.slug === 'visa-consultant-redesign' && (
                      <div className="mt-5 grid grid-cols-[0.35fr_1fr] gap-3">
                        <div className="rounded-xl border border-white/10 bg-white/[0.025] p-3">
                          <div className="space-y-2">
                            <div className="h-7 rounded-lg bg-violet-500/15" />
                            <div className="h-7 rounded-lg bg-white/5" />
                            <div className="h-7 rounded-lg bg-white/5" />
                            <div className="h-7 rounded-lg bg-white/5" />
                          </div>
                        </div>

                        <div>
                          <div className="h-16 rounded-xl border border-white/10 bg-white/[0.025]" />

                          <div className="mt-3 grid grid-cols-3 gap-2">
                            <div className="h-24 rounded-xl border border-white/10 bg-white/[0.025]" />
                            <div className="h-24 rounded-xl border border-violet-400/20 bg-violet-500/10" />
                            <div className="h-24 rounded-xl border border-white/10 bg-white/[0.025]" />
                          </div>
                        </div>
                      </div>
                    )}

                    {project.slug === 'smart-trip' && (
                      <div className="mt-5 grid grid-cols-[0.7fr_1.3fr] gap-3">
                        <div className="rounded-xl border border-white/10 bg-white/[0.025] p-3">
                          <span className="text-[9px] text-zinc-600">
                            Trip constraints
                          </span>

                          <div className="mt-3 space-y-2">
                            <div className="h-7 rounded-lg bg-white/[0.04]" />
                            <div className="h-7 rounded-lg bg-white/[0.04]" />
                            <div className="h-7 rounded-lg bg-white/[0.04]" />
                            <div className="h-7 rounded-lg bg-violet-500/10" />
                          </div>
                        </div>

                        <div className="rounded-xl border border-white/10 bg-gradient-to-br from-violet-500/10 to-blue-500/5 p-3">
                          <span className="text-[9px] text-zinc-600">
                            Recommended route
                          </span>

                          <div className="mt-3 h-20 rounded-lg bg-white/[0.035]" />

                          <div className="mt-2 grid grid-cols-3 gap-2">
                            <div className="h-12 rounded-lg bg-white/[0.035]" />
                            <div className="h-12 rounded-lg bg-white/[0.035]" />
                            <div className="h-12 rounded-lg bg-white/[0.035]" />
                          </div>
                        </div>
                      </div>
                    )}

                    {project.slug === 'whatsapp-order-assistant' && (
                      <div className="mt-5">
                        <div className="rounded-xl border border-emerald-400/10 bg-emerald-400/[0.04] p-4">
                          <span className="text-[9px] uppercase tracking-[0.15em] text-emerald-300/70">
                            Incoming order
                          </span>

                          <div className="mt-3 space-y-2">
                            <div className="h-2 w-32 rounded bg-white/10" />
                            <div className="h-2 w-24 rounded bg-white/5" />
                          </div>
                        </div>

                        <div className="mt-3 grid grid-cols-2 gap-2">
                          <div className="h-24 rounded-xl border border-white/10 bg-white/[0.025]" />
                          <div className="h-24 rounded-xl border border-violet-400/20 bg-violet-500/10" />
                        </div>

                        <div className="mt-3 h-12 rounded-xl border border-white/10 bg-white/[0.035]" />
                      </div>
                    )}
                  </div>
                </div>

                {/* PROJECT INFO */}
                <div className="flex flex-col justify-between p-7 md:p-10">
                  <div>
                    <div className="flex items-center justify-between gap-4">
                      <span className="text-xs uppercase tracking-[0.16em] text-violet-300">
                        {String(index + 1).padStart(2, '0')} / {project.type}
                      </span>

                      <span className="text-sm text-zinc-600 transition group-hover:translate-x-1 group-hover:text-violet-300">
                        →
                      </span>
                    </div>

                    <h2 className="display mt-8 text-3xl font-semibold tracking-[-0.03em] text-white md:text-4xl">
                      {project.title}
                    </h2>

                    <p className="mt-5 max-w-xl leading-7 text-zinc-500">
                      {project.description}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-white/10 px-3 py-1.5 text-[11px] text-zinc-500"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-10 flex items-center justify-between border-t border-white/[0.06] pt-5">
                    <span className="text-xs text-zinc-600">
                      {project.status}
                    </span>

                    <span className="text-sm font-medium text-zinc-400 transition group-hover:text-white">
                      View case study →
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container pb-10 md:pb-14">
        <div className="relative overflow-hidden rounded-[34px] border border-white/10 bg-gradient-to-br from-violet-600/20 via-blue-600/[0.08] to-transparent px-7 py-12 md:px-12 md:py-14">
          <div className="absolute -right-24 -top-24 size-72 rounded-full bg-violet-500/10 blur-3xl" />

          <div className="relative max-w-3xl">
            <p className="eyebrow text-violet-200">
              Start with the problem
            </p>

            <h2 className="display mt-3 text-4xl font-semibold tracking-[-0.035em] text-white md:text-5xl">
              Have a product that needs more than a pretty interface?
            </h2>

            <p className="mt-5 max-w-2xl leading-7 text-zinc-400">
              Tell us what you are trying to solve. We will help you understand
              the experience, identify the right direction, and design
              something people can actually use.
            </p>

            <Link
              href="/start-a-project"
              className="mt-7 inline-flex items-center justify-center gap-2 rounded-xl bg-violet-500 px-5 py-3 text-sm font-semibold text-white shadow-[0_8px_30px_rgba(139,92,246,0.18)] transition hover:bg-violet-400 hover:shadow-[0_10px_34px_rgba(139,92,246,0.25)]"
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
