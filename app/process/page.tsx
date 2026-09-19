import Link from 'next/link';

const steps = [
  {
    number: '01',
    title: 'Discover',
    description:
      'We understand the business, the people, the problem, and the constraints before making assumptions about the solution.',
    outputs: [
      'Goals & requirements',
      'User understanding',
      'Research findings',
      'Problem definition',
    ],
  },
  {
    number: '02',
    title: 'Define',
    description:
      'We turn what we have learned into a clearer product direction, structure, and set of priorities.',
    outputs: [
      'Product direction',
      'Information architecture',
      'User flows',
      'Experience priorities',
    ],
  },
  {
    number: '03',
    title: 'Design',
    description:
      'We shape the experience from structure to interface, creating flows and interactions that make the product easier to use.',
    outputs: [
      'Wireframes',
      'UI design',
      'Interaction design',
      'Design system',
    ],
  },
  {
    number: '04',
    title: 'Validate',
    description:
      'Important decisions are tested before they become expensive decisions. We learn, refine, and remove uncertainty.',
    outputs: [
      'Interactive prototypes',
      'Usability testing',
      'Design iterations',
      'Decision validation',
    ],
  },
  {
    number: '05',
    title: 'Build',
    description:
      'Once the experience is ready, we translate the design into a responsive, maintainable working product.',
    outputs: [
      'Frontend development',
      'Responsive implementation',
      'CMS integration',
      'Technical refinement',
    ],
  },
  {
    number: '06',
    title: 'Launch & Learn',
    description:
      'The product goes into the real world. We use feedback and evidence to identify what should improve next.',
    outputs: [
      'Launch support',
      'Performance review',
      'User feedback',
      'Future improvements',
    ],
  },
];

const principles = [
  [
    'Flexible',
    'The process adapts to the project. A new product and a website redesign do not need the same path.',
  ],
  [
    'Evidence-led',
    'We use research, testing, and real feedback to make important experience decisions.',
  ],
  [
    'Collaborative',
    'The best work happens when product, business, design, and development stay connected.',
  ],
];

export default function ProcessPage() {
  return (
    <main>
      {/* HERO */}
      <section className="container pt-28 pb-16 md:pt-32 md:pb-20">
        <div className="max-w-4xl">
          <p className="eyebrow text-violet-300">Process</p>

          <h1 className="display mt-5 text-5xl font-semibold leading-[1.02] tracking-[-.045em] text-white md:text-7xl">
            A clear process. Adapted to the problem.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
            We do not force every project through the same checklist. We use
            the right amount of research, strategy, design, validation, and
            development to move the product forward with confidence.
          </p>
        </div>
      </section>

      {/* PROCESS */}
      <section className="border-y border-white/[.06] bg-white/[.015]">
        <div className="container py-16 md:py-20">
          <div className="mb-10 max-w-2xl">
            <p className="eyebrow text-violet-300">The journey</p>

            <h2 className="display mt-3 text-4xl font-semibold tracking-[-.035em] text-white md:text-5xl">
              From uncertainty to something people can use.
            </h2>
          </div>

          <div className="relative">
            <div className="absolute bottom-0 left-[17px] top-0 hidden w-px bg-gradient-to-b from-violet-400/40 via-white/10 to-transparent md:block" />

            <div className="space-y-3">
              {steps.map((step) => (
                <article
                  key={step.number}
                  className="group relative rounded-[28px] border border-white/10 bg-[#0b0b11] p-6 transition duration-300 hover:border-violet-400/25 md:p-7"
                >
                  <div className="grid gap-7 md:grid-cols-[80px_1fr_1fr] md:gap-8">
                    <div className="relative">
                      <div className="flex size-9 items-center justify-center rounded-full border border-violet-400/20 bg-violet-500/[.08] text-[11px] text-violet-300">
                        {step.number}
                      </div>
                    </div>

                    <div>
                      <h3 className="display text-3xl font-semibold tracking-[-.025em] text-white">
                        {step.title}
                      </h3>

                      <p className="mt-3 max-w-xl leading-7 text-zinc-400">
                        {step.description}
                      </p>
                    </div>

                    <div className="border-t border-white/[.06] pt-5 md:border-l md:border-t-0 md:pl-7 md:pt-0">
                      <p className="text-[10px] uppercase tracking-[.2em] text-zinc-600">
                        Typical outputs
                      </p>

                      <div className="mt-3 flex flex-wrap gap-2">
                        {step.outputs.map((output) => (
                          <span
                            key={output}
                            className="rounded-full border border-white/10 bg-white/[.02] px-3 py-1.5 text-[11px] text-zinc-500"
                          >
                            {output}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PRINCIPLES */}
      <section className="container py-16 md:py-20">
        <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:gap-16">
          <div>
            <p className="eyebrow text-violet-300">Our principles</p>

            <h2 className="display mt-3 max-w-xl text-4xl font-semibold tracking-[-.035em] text-white md:text-5xl">
              The process is flexible. The standards are not.
            </h2>

            <p className="mt-5 max-w-lg leading-7 text-zinc-500">
              Every engagement is different, but the way we think about good
              product work stays consistent.
            </p>
          </div>

          <div className="space-y-3">
            {principles.map(([title, text]) => (
              <div
                key={title}
                className="rounded-2xl border border-white/10 bg-white/[.025] p-6"
              >
                <h3 className="text-base font-semibold text-zinc-100">
                  {title}
                </h3>

                <p className="mt-2 max-w-xl text-sm leading-7 text-zinc-500">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COLLABORATION */}
      <section className="border-y border-white/[.06] bg-white/[.015]">
        <div className="container py-16 md:py-20">
          <div className="grid gap-10 lg:grid-cols-[1fr_.8fr] lg:items-center lg:gap-16">
            <div>
              <p className="eyebrow text-violet-300">
                One connected process
              </p>

              <h2 className="display mt-3 text-4xl font-semibold tracking-[-.035em] text-white md:text-5xl">
                Strategy, design, and development stay connected.
              </h2>

              <p className="mt-5 max-w-2xl leading-7 text-zinc-400">
                We do not treat development as something that happens after
                design is finished and forgotten. When we build the product,
                the reasoning behind the experience comes with it.
              </p>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-[#0b0b11] p-6 md:p-7">
              <div className="space-y-3">
                {[
                  ['Research', 'Understand'],
                  ['Strategy', 'Structure'],
                  ['Design', 'Shape'],
                  ['Validation', 'Learn'],
                  ['Development', 'Build'],
                ].map(([left, right], index) => (
                  <div key={left}>
                    <div className="flex items-center justify-between rounded-xl border border-white/[.07] bg-white/[.02] px-4 py-3">
                      <span className="text-sm text-zinc-400">{left}</span>

                      <span className="text-xs text-violet-300">
                        {right}
                      </span>
                    </div>

                    {index < 4 && (
                      <div className="ml-6 h-3 w-px bg-white/10" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container pb-10 pt-16 md:pb-14 md:pt-20">
        <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-violet-600/20 via-blue-600/[.07] to-transparent px-7 py-10 md:px-12 md:py-12">
          <div className="absolute -right-24 -top-24 size-72 rounded-full bg-violet-500/10 blur-3xl" />

          <div className="relative max-w-3xl">
            <p className="eyebrow text-violet-200">Ready when you are</p>

            <h2 className="display mt-3 text-4xl font-semibold tracking-[-.035em] text-white md:text-5xl">
              Have a problem worth solving?
            </h2>

            <p className="mt-5 max-w-2xl leading-7 text-zinc-400">
              Tell us where you are, what you are trying to achieve, and what
              is getting in the way. We can figure out the right next step
              together.
            </p>

            <Link
              href="/start-a-project"
              className="mt-7 inline-flex items-center gap-2 rounded-xl bg-violet-600 px-5 py-3.5 text-sm font-semibold text-white shadow-[0_8px_30px_rgba(139,92,246,0.25)] transition hover:bg-violet-500"
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