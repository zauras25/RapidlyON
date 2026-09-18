import Link from 'next/link';

const services = [
  {
    number: '01',
    title: 'UX Research',
    description:
      'Understand the people, problems, behaviours, and opportunities behind the product before making design decisions.',
    deliverables: [
      'User interviews',
      'Competitive analysis',
      'User journeys',
      'Problem definition',
      'Research synthesis',
    ],
  },
  {
    number: '02',
    title: 'UX Strategy',
    description:
      'Turn research and business requirements into a clear product direction, structure, and experience strategy.',
    deliverables: [
      'Information architecture',
      'User flows',
      'Experience strategy',
      'Feature prioritisation',
      'Product direction',
    ],
  },
  {
    number: '03',
    title: 'Product Design',
    description:
      'Design the actual experience across flows, interfaces, interactions, prototypes, and scalable design systems.',
    deliverables: [
      'Wireframes',
      'UI design',
      'Interaction design',
      'Prototypes',
      'Design systems',
    ],
  },
  {
    number: '04',
    title: 'Web Experience',
    description:
      'Create websites that make information easier to understand, navigate, trust, and act on.',
    deliverables: [
      'Website UX',
      'Content structure',
      'Responsive design',
      'Conversion journeys',
      'Landing pages',
    ],
  },
  {
    number: '05',
    title: 'Product Prototyping',
    description:
      'Turn ideas into realistic prototypes that allow teams to test important decisions before development.',
    deliverables: [
      'Interactive prototypes',
      'Concept validation',
      'User testing',
      'Interaction patterns',
      'Prototype refinement',
    ],
  },
  {
    number: '06',
    title: 'Development',
    description:
      'Bring validated experiences to life with maintainable, responsive, production-ready development.',
    deliverables: [
      'Next.js',
      'React',
      'TypeScript',
      'Tailwind CSS',
      'WordPress',
    ],
  },
];

const principles = [
  [
    '01',
    'Start with the problem',
    'We do not begin by designing screens. We begin by understanding what needs to be solved.',
  ],
  [
    '02',
    'Design the experience',
    'Flows, structure, content, interaction, and interface work together as one experience.',
  ],
  [
    '03',
    'Build with purpose',
    'Development follows the experience so the final product stays aligned with the original thinking.',
  ],
];

export default function ServicesPage() {
  return (
    <main>
      {/* HERO */}
      <section className="container pt-28 pb-20 md:pt-36 md:pb-28">
        <div className="max-w-4xl">
          <p className="eyebrow text-violet-300">Services</p>

          <h1 className="display mt-5 text-5xl font-semibold leading-[1.02] tracking-[-.045em] text-white md:text-7xl">
            From understanding the problem to designing the product.
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-zinc-400">
            We combine UX research, strategy, product design, and development
            to create digital experiences that are easier to understand,
            easier to use, and easier to build.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/start-a-project"
              className="inline-flex items-center gap-2 rounded-xl bg-violet-600 px-5 py-3 text-sm font-semibold text-white shadow-[0_8px_30px_rgba(139,92,246,.25)] transition-all duration-200 hover:bg-violet-500 hover:shadow-[0_10px_35px_rgba(139,92,246,.35)]"
            >
              Start a project
              <span aria-hidden="true">→</span>
            </Link>

            <Link
              href="/work"
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[.03] px-5 py-3 text-sm font-medium text-zinc-300 transition-all duration-200 hover:border-white/20 hover:bg-white/[.06] hover:text-white"
            >
              See our work
              <span className="text-zinc-500" aria-hidden="true">
                →
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="border-y border-white/[.06] bg-white/[.015]">
        <div className="container py-20 md:py-24">
          <div className="max-w-2xl">
            <p className="eyebrow text-violet-300">What we do</p>

            <h2 className="display mt-3 text-4xl font-semibold tracking-[-.035em] text-white md:text-5xl">
              The right work at the right stage.
            </h2>

            <p className="mt-5 leading-7 text-zinc-500">
              Not every project needs everything. We can join at the point
              where you need research, direction, design, prototyping, or
              development.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {services.map((service) => (
              <article
                key={service.number}
                className="group flex h-full flex-col rounded-[28px] border border-white/10 bg-white/[.025] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-violet-400/25 hover:bg-white/[.035] md:p-8"
              >
                <div className="flex items-start justify-between gap-6">
                  <span className="text-xs font-medium text-violet-300">
                    {service.number}
                  </span>

                  <span
                    className="text-lg text-zinc-700 transition-colors duration-300 group-hover:text-violet-300"
                    aria-hidden="true"
                  >
                    ↗
                  </span>
                </div>

                <h3 className="display mt-7 text-3xl font-semibold tracking-[-.025em] text-white">
                  {service.title}
                </h3>

                <p className="mt-4 max-w-xl leading-7 text-zinc-400">
                  {service.description}
                </p>

                <div className="mt-auto pt-7">
                  <div className="flex flex-wrap gap-2">
                    {service.deliverables.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/10 bg-white/[.02] px-3 py-1.5 text-[11px] text-zinc-500"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* APPROACH */}
      <section className="container py-20 md:py-24">
        <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:gap-20">
          <div>
            <p className="eyebrow text-violet-300">How we work</p>

            <h2 className="display mt-3 max-w-xl text-4xl font-semibold tracking-[-.035em] text-white md:text-5xl">
              Tools change. Good product thinking does not.
            </h2>

            <p className="mt-5 max-w-lg leading-7 text-zinc-500">
              We choose methods and tools according to the problem, the stage
              of the project, and what the people using the product actually
              need.
            </p>
          </div>

          <div className="space-y-3">
            {principles.map(([number, title, text]) => (
              <div
                key={number}
                className="rounded-2xl border border-white/10 bg-white/[.025] p-6 transition-colors duration-300 hover:border-violet-400/20"
              >
                <div className="flex gap-5">
                  <span className="pt-1 text-xs text-violet-300">
                    {number}
                  </span>

                  <div>
                    <h3 className="text-base font-semibold text-zinc-100">
                      {title}
                    </h3>

                    <p className="mt-2 max-w-xl text-sm leading-7 text-zinc-500">
                      {text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS LINK */}
      <section className="border-y border-white/[.06] bg-white/[.015]">
        <div className="container py-20 md:py-24">
          <div className="flex flex-col gap-8 rounded-[30px] border border-white/10 bg-gradient-to-br from-violet-500/[.12] via-white/[.02] to-transparent p-8 md:flex-row md:items-end md:justify-between md:p-12">
            <div className="max-w-2xl">
              <p className="eyebrow text-violet-300">Our process</p>

              <h2 className="display mt-3 text-4xl font-semibold tracking-[-.035em] text-white md:text-5xl">
                Every project is different. The thinking stays clear.
              </h2>

              <p className="mt-5 leading-7 text-zinc-400">
                We adapt the process to the project instead of forcing every
                client through the same set of deliverables.
              </p>
            </div>

            <Link
              href="/process"
              className="inline-flex shrink-0 items-center gap-2 text-sm font-medium text-zinc-300 transition-colors hover:text-white"
            >
              Explore our process
              <span className="text-violet-400" aria-hidden="true">
                →
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container pb-12 pt-20 md:pb-16 md:pt-24">
        <div className="relative overflow-hidden rounded-[32px] border border-violet-400/15 bg-gradient-to-br from-violet-600/25 via-violet-500/[.10] to-blue-600/[.05] px-7 py-12 shadow-[0_20px_80px_rgba(76,29,149,.12)] md:px-12 md:py-14">
          <div
            className="absolute -right-24 -top-24 size-72 rounded-full bg-violet-500/15 blur-3xl"
            aria-hidden="true"
          />

          <div
            className="absolute -bottom-32 -left-20 size-64 rounded-full bg-blue-500/10 blur-3xl"
            aria-hidden="true"
          />

          <div className="relative max-w-3xl">
            <p className="eyebrow text-violet-200">Start with the problem</p>

            <h2 className="display mt-3 text-4xl font-semibold tracking-[-.035em] text-white md:text-5xl">
              Not sure what your product needs yet?
            </h2>

            <p className="mt-5 max-w-2xl leading-7 text-zinc-300">
              That is usually where we start. Tell us what you are trying to
              achieve, what is not working, or what you are thinking about
              building.
            </p>

            <Link
              href="/start-a-project"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-violet-600 px-5 py-3.5 text-sm font-semibold text-white shadow-[0_8px_30px_rgba(139,92,246,.30)] transition-all duration-200 hover:bg-violet-500 hover:shadow-[0_10px_35px_rgba(139,92,246,.40)]"
            >
              Start a conversation
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}