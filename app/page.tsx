import Link from 'next/link';

type CaseStudy = {
  slug: string;
  number: string;
  type: string;
  title: string;
  description: string;
  visual: 'saas' | 'commerce' | 'app';
  tags: string[];
};

const caseStudies: CaseStudy[] = [
  {
    slug: 'umer-mobile-parts',
    number: '01',
    type: 'E-commerce',
    title: 'Umer Mobile Parts',
    description:
      'A real digital commerce experience designed to help a Lahore-based mobile parts business reach retailers and customers beyond its local market.',
    visual: 'commerce',
    tags: ['UX Research', 'E-commerce UX', 'UI Design'],
  },
  {
    slug: 'visa-consultant-redesign',
    number: '02',
    type: 'Website Redesign',
    title: 'Visa Consultant',
    description:
      'A responsive website redesign that reorganised visa services, requirements, trust signals, and the consultation journey around user needs.',
    visual: 'saas',
    tags: ['UX Audit', 'Information Architecture', 'Responsive UX'],
  },
  {
    slug: 'smart-trip',
    number: '03',
    type: 'Mobile App',
    title: 'SmartTrip',
    description:
      'A travel product concept that helps people discover a suitable trip by understanding their intent, preferences, and travel needs first.',
    visual: 'app',
    tags: ['Product Strategy', 'Mobile UX', 'Prototype'],
  },
];

function CaseStudyVisual({
  type,
}: {
  type: 'saas' | 'commerce' | 'app';
}) {
  if (type === 'commerce') {
    return (
      <div className="relative h-full w-full overflow-hidden rounded-[24px] bg-[#101016] p-5">
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <div className="h-3 w-20 rounded-full bg-white/10" />

          <div className="flex gap-2">
            <div className="size-7 rounded-full bg-white/5" />
            <div className="size-7 rounded-full bg-white/5" />
          </div>
        </div>

        <div className="mt-5 grid grid-cols-[1fr_0.8fr] gap-4">
          <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-4">
            <div className="h-32 rounded-xl bg-gradient-to-br from-violet-500/20 to-blue-500/10" />

            <div className="mt-4 h-3 w-28 rounded-full bg-white/10" />
            <div className="mt-2 h-2 w-20 rounded-full bg-white/5" />

            <div className="mt-5 flex justify-between">
              <div className="h-3 w-12 rounded-full bg-white/10" />
              <div className="h-3 w-14 rounded-full bg-violet-300/30" />
            </div>
          </div>

          <div className="space-y-3">
            <div className="h-20 rounded-2xl border border-white/10 bg-white/[0.025]" />
            <div className="h-20 rounded-2xl border border-white/10 bg-white/[0.025]" />
            <div className="h-20 rounded-2xl border border-violet-400/20 bg-violet-500/10" />
          </div>
        </div>
      </div>
    );
  }

  if (type === 'app') {
    return (
      <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-[24px] bg-[#101016]">
        <div className="absolute size-64 rounded-full bg-violet-500/10 blur-3xl" />

        <div className="relative h-[88%] w-[42%] min-w-[150px] max-w-[210px] rounded-[30px] border border-white/10 bg-[#0b0b11] p-3 shadow-2xl">
          <div className="h-full rounded-[22px] border border-white/5 bg-white/[0.025] p-4">
            <div className="mx-auto h-1 w-12 rounded-full bg-white/10" />

            <div className="mt-7">
              <div className="h-2 w-14 rounded-full bg-white/10" />
              <div className="mt-3 h-6 w-28 rounded-lg bg-white/10" />
            </div>

            <div className="mt-7 rounded-2xl border border-violet-400/20 bg-violet-500/10 p-4">
              <div className="size-8 rounded-xl bg-violet-400/20" />

              <div className="mt-4 h-2 w-20 rounded-full bg-white/10" />
              <div className="mt-2 h-2 w-28 rounded-full bg-white/5" />
            </div>

            <div className="mt-3 space-y-2">
              <div className="h-12 rounded-xl bg-white/[0.035]" />
              <div className="h-12 rounded-xl bg-white/[0.035]" />
              <div className="h-12 rounded-xl bg-white/[0.035]" />
            </div>

            <div className="mt-4 h-10 rounded-xl bg-white/10" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative h-full w-full overflow-hidden rounded-[24px] bg-[#101016] p-5">
      <div className="flex items-center justify-between border-b border-white/10 pb-4">
        <div className="h-3 w-24 rounded-full bg-white/10" />
        <div className="size-7 rounded-full bg-violet-400/10" />
      </div>

      <div className="mt-5 grid grid-cols-[0.35fr_1fr] gap-4">
        <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-3">
          <div className="space-y-3">
            <div className="h-7 rounded-lg bg-violet-500/15" />
            <div className="h-7 rounded-lg bg-white/5" />
            <div className="h-7 rounded-lg bg-white/5" />
            <div className="h-7 rounded-lg bg-white/5" />
          </div>
        </div>

        <div>
          <div className="h-20 rounded-2xl border border-white/10 bg-white/[0.025]" />

          <div className="mt-3 grid grid-cols-3 gap-3">
            <div className="h-28 rounded-2xl border border-white/10 bg-white/[0.025]" />

            <div className="h-28 rounded-2xl border border-violet-400/20 bg-violet-500/10" />

            <div className="h-28 rounded-2xl border border-white/10 bg-white/[0.025]" />
          </div>
        </div>
      </div>
    </div>
  );
}

function PrimaryButton() {
  return (
    <Link
      href="/start-a-project"
      className="inline-flex items-center justify-center gap-2 rounded-lg bg-violet-600 px-4 py-2.5 text-sm font-semibold text-white shadow-[0_6px_24px_rgba(139,92,246,0.25)] transition-colors hover:bg-violet-500"
    >
      Start a project
      <span>→</span>
    </Link>
  );
}

function SecondaryButton() {
  return (
    <Link
      href="/work"
      className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] px-4 py-2.5 text-sm font-medium text-zinc-200 transition hover:border-white/20 hover:bg-white/[0.06]"
    >
      See our work
      <span className="text-zinc-400">→</span>
    </Link>
  );
}

export default function HomePage() {
  return (
    <main>
      {/* HERO */}
      <section className="container pt-24 pb-20 md:pt-32 md:pb-24">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div className="max-w-3xl">
            <p className="eyebrow text-violet-300">
              Experience-first product design
            </p>

            <h1 className="display mt-5 text-balance text-5xl font-semibold leading-[0.98] tracking-[-0.045em] sm:text-6xl md:text-7xl lg:text-[5.2rem]">
              We design the experience before we design the interface.
            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-zinc-400 md:text-lg">
              We research how people think, decide, and move through a
              product — then turn that understanding into clear, useful
              experiences for apps, websites, and SaaS products.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <PrimaryButton />
              <SecondaryButton />
            </div>

            <div className="mt-9 flex flex-wrap gap-x-6 gap-y-2 text-xs text-zinc-600">
              <span>UX Research</span>
              <span>Product Design</span>
              <span>UX Strategy</span>
              <span>Prototyping</span>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-10 rounded-full bg-violet-600/10 blur-[90px]" />

            <div className="relative rounded-[32px] border border-white/10 bg-white/[0.025] p-3 shadow-2xl">
              <div className="rounded-[26px] border border-white/10 bg-[#0b0b11] p-5 md:p-6">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div className="flex gap-1.5">
                    <span className="size-2.5 rounded-full bg-white/10" />
                    <span className="size-2.5 rounded-full bg-white/10" />
                    <span className="size-2.5 rounded-full bg-white/10" />
                  </div>

                  <span className="text-[9px] uppercase tracking-[0.2em] text-zinc-600">
                    Experience map
                  </span>
                </div>

                <div className="mt-6">
                  <div className="text-[10px] uppercase tracking-[0.18em] text-zinc-600">
                    User journey
                  </div>

                  <div className="relative mt-6">
                    <div className="absolute left-[12%] right-[12%] top-5 h-px bg-white/10" />

                    <div className="relative grid grid-cols-4 gap-2">
                      {[
                        ['01', 'Discover'],
                        ['02', 'Understand'],
                        ['03', 'Decide'],
                        ['04', 'Act'],
                      ].map(([number, label], index) => (
                        <div
                          key={number}
                          className="flex flex-col items-center text-center"
                        >
                          <div
                            className={[
                              'flex size-10 items-center justify-center rounded-full border text-[10px]',
                              index === 1
                                ? 'border-violet-300/30 bg-violet-500/15 text-violet-200'
                                : 'border-white/10 bg-[#101018] text-zinc-500',
                            ].join(' ')}
                          >
                            {number}
                          </div>

                          <span className="mt-2 text-[9px] text-zinc-500">
                            {label}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 grid grid-cols-2 gap-3">
                    <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-4">
                      <div className="size-7 rounded-lg bg-violet-400/10" />
                      <div className="mt-4 h-2 w-20 rounded bg-white/10" />
                      <div className="mt-2 h-2 w-28 rounded bg-white/5" />
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-4">
                      <div className="size-7 rounded-lg bg-cyan-400/10" />
                      <div className="mt-4 h-2 w-16 rounded bg-white/10" />
                      <div className="mt-2 h-2 w-24 rounded bg-white/5" />
                    </div>
                  </div>

                  <div className="mt-3 rounded-2xl border border-emerald-400/10 bg-emerald-400/[0.04] p-4">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] text-zinc-500">
                        Experience clarity
                      </span>

                      <span className="text-[10px] text-emerald-300">
                        Improved
                      </span>
                    </div>

                    <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/5">
                      <div className="h-full w-[78%] rounded-full bg-gradient-to-r from-violet-500 to-emerald-400" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -left-3 top-20 rounded-xl border border-white/10 bg-[#111119]/95 px-4 py-3 shadow-xl md:-left-8">
              <div className="text-[8px] uppercase tracking-[0.18em] text-zinc-600">
                Research
              </div>

              <div className="mt-1.5 flex items-center gap-2">
                <span className="size-1.5 rounded-full bg-violet-300" />

                <span className="text-xs text-zinc-200">
                  Understand first
                </span>
              </div>
            </div>

            <div className="absolute -right-3 bottom-16 rounded-xl border border-white/10 bg-[#111119]/95 px-4 py-3 shadow-xl md:-right-8">
              <div className="text-[8px] uppercase tracking-[0.18em] text-zinc-600">
                Outcome
              </div>

              <div className="mt-1.5 flex items-center gap-2">
                <span className="text-sm text-violet-300">→</span>

                <span className="text-xs text-zinc-200">
                  Better decisions
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST / PHILOSOPHY */}
      <section className="border-y border-white/[0.06] bg-white/[0.015]">
        <div className="container py-20 md:py-24">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            <div>
              <p className="eyebrow text-violet-300">The way we think</p>

              <h2 className="display mt-3 max-w-xl text-4xl font-semibold tracking-[-0.035em] md:text-5xl">
                Good products are not made by adding more screens.
              </h2>
            </div>

            <div className="max-w-2xl">
              <p className="text-lg leading-8 text-zinc-300">
                They are made by understanding what people need to do, what
                gets in their way, and what the product should make easier.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {[
                  [
                    '01',
                    'Understand the user',
                    'Research needs, behaviours, motivations, and friction.',
                  ],
                  [
                    '02',
                    'Understand the problem',
                    'Separate real problems from assumptions and feature requests.',
                  ],
                  [
                    '03',
                    'Design the journey',
                    'Create a clear path from intention to outcome.',
                  ],
                  [
                    '04',
                    'Make it useful',
                    'Turn the strategy into an interface people can actually use.',
                  ],
                ].map(([number, title, text]) => (
                  <div
                    key={number}
                    className="rounded-2xl border border-white/10 bg-white/[0.025] p-5"
                  >
                    <span className="text-xs text-violet-300">{number}</span>

                    <h3 className="mt-5 text-base font-semibold text-zinc-100">
                      {title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-zinc-500">
                      {text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="container py-20 md:py-24">
        <div className="max-w-2xl">
          <p className="eyebrow text-violet-300">What we do</p>

          <h2 className="display mt-3 text-4xl font-semibold tracking-[-0.035em] md:text-5xl">
            From understanding the problem to designing the product.
          </h2>

          <p className="mt-5 leading-7 text-zinc-500">
            UX is the core of our work. Development can follow when the
            experience is ready to become a real product.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {[
            [
              '01',
              'UX Research',
              'User interviews, research, competitive analysis, journeys, and problem definition.',
            ],
            [
              '02',
              'UX Strategy',
              'Information architecture, user flows, product direction, and experience strategy.',
            ],
            [
              '03',
              'Product Design',
              'Wireframes, prototypes, interaction design, UI, and scalable design systems.',
            ],
            [
              '04',
              'Web Experience',
              'Experience-led websites that make information easier to understand and act on.',
            ],
            [
              '05',
              'Product Prototyping',
              'High-fidelity prototypes that let teams test ideas before committing to development.',
            ],
            [
              '06',
              'Development',
              'Next.js and WordPress development when the designed experience needs to become real.',
            ],
          ].map(([number, title, text]) => (
            <div
              key={number}
              className="group rounded-3xl border border-white/10 bg-white/[0.02] p-6 transition hover:border-violet-400/20 hover:bg-white/[0.035]"
            >
              <span className="text-xs text-violet-300">{number}</span>

              <h3 className="display mt-8 text-2xl font-semibold">
                {title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-zinc-500">
                {text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* TOOLS */}
      <section className="border-y border-white/[0.06] bg-white/[0.015]">
        <div className="container py-20 md:py-24">
          <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
            <div>
              <p className="eyebrow text-violet-300">Our toolkit</p>

              <h2 className="display mt-3 text-4xl font-semibold tracking-[-0.035em] md:text-5xl">
                Tools serve the experience. Not the other way around.
              </h2>

              <p className="mt-5 max-w-lg leading-7 text-zinc-500">
                We choose tools according to the problem, the stage of the
                project, and what the product actually needs.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {[
                [
                  'UX & Research',
                  'Figma · FigJam · Maze · Notion · User research tools',
                ],
                [
                  'Design',
                  'Figma · Prototyping · Wireframing · Design systems',
                ],
                [
                  'Strategy',
                  'User flows · Journey maps · Information architecture',
                ],
                [
                  'Development',
                  'Next.js · React · TypeScript · Tailwind CSS',
                ],
                [
                  'Web',
                  'WordPress · Custom CMS · Responsive experiences',
                ],
                [
                  'Collaboration',
                  'Notion · Slack · Linear · GitHub',
                ],
              ].map(([title, tools]) => (
                <div
                  key={title}
                  className="rounded-2xl border border-white/10 bg-white/[0.025] p-5"
                >
                  <h3 className="text-sm font-semibold text-zinc-200">
                    {title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-zinc-500">
                    {tools}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CASE STUDIES */}
      <section className="container py-20 md:py-24">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="eyebrow text-violet-300">Selected work</p>

            <h2 className="display mt-3 text-4xl font-semibold tracking-[-0.035em] md:text-5xl">
              Different products. Same experience-first thinking.
            </h2>
          </div>

          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-sm font-medium text-zinc-400 transition hover:text-white"
          >
            View all work
            <span className="text-violet-400">→</span>
          </Link>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {caseStudies.map((project) => (
            <Link
              key={project.slug}
              href={`/work/${project.slug}`}
              className="group overflow-hidden rounded-[28px] border border-white/10 transition hover:border-violet-400/25"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <CaseStudyVisual type={project.visual} />
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-violet-300">
                    {project.number} / {project.type}
                  </span>

                  <span className="text-sm text-zinc-600 transition group-hover:text-violet-300">
                    →
                  </span>
                </div>

                <h3 className="display mt-4 text-2xl font-semibold">
                  {project.title}
                </h3>

                <p className="mt-3 leading-7 text-zinc-500">
                  {project.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 px-2.5 py-1.5 text-[11px] text-zinc-500"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="container pb-10 md:pb-14">
        <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-violet-600/20 via-blue-600/[0.08] to-transparent px-7 py-12 md:px-12 md:py-14">
          <div className="absolute -right-24 -top-24 size-72 rounded-full bg-violet-500/10 blur-3xl" />

          <div className="relative max-w-3xl">
            <p className="eyebrow text-violet-200">
              Start with the problem
            </p>

            <h2 className="display mt-3 text-4xl font-semibold tracking-[-0.035em] md:text-5xl">
              Have a product that needs more than a pretty interface?
            </h2>

            <p className="mt-5 max-w-2xl leading-7 text-zinc-400">
              Tell us what you are trying to solve. We will help you understand
              the experience, identify the right direction, and design
              something people can actually use.
            </p>

            <div className="mt-7">
              <PrimaryButton />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
