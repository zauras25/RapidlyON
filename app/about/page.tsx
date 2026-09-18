import Link from 'next/link';

const principles = [
  {
    number: '01',
    title: 'Clarity before complexity',
    text:
      'We believe good digital products make difficult things easier to understand. Before adding features or screens, we look for the simplest useful path.',
  },
  {
    number: '02',
    title: 'People before interfaces',
    text:
      'Interfaces are only useful when they help people accomplish something. We start with users, their context, their decisions, and their real needs.',
  },
  {
    number: '03',
    title: 'Design connected to reality',
    text:
      'A beautiful concept is not enough. We think about business goals, technical constraints, content, development, and the real environment where the product will be used.',
  },
];

const capabilities = [
  ['UX Research', 'Understand users, behaviours, needs, and friction.'],
  ['Product Strategy', 'Turn problems and research into clearer direction.'],
  ['Product Design', 'Shape flows, interfaces, interactions, and systems.'],
  ['Web Experiences', 'Design digital experiences that communicate clearly.'],
  ['Prototyping', 'Test important ideas before committing to development.'],
  ['Development', 'Turn validated experiences into working products.'],
];

export default function AboutPage() {
  return (
    <main>
      {/* HERO */}
      <section className="container pt-28 pb-16 md:pt-32 md:pb-20">
        <div className="grid gap-10 lg:grid-cols-[1fr_.75fr] lg:items-end lg:gap-16">
          <div>
            <p className="eyebrow text-violet-300">About RapidlyOn</p>

            <h1 className="display mt-5 max-w-4xl text-5xl font-semibold leading-[1.02] tracking-[-.045em] text-white md:text-7xl">
              We design digital products with clarity.
            </h1>
          </div>

          <div>
            <p className="text-lg leading-8 text-zinc-400">
              RapidlyOn is an experience-first digital product studio. We
              combine UX research, product thinking, design, and development
              to turn complex ideas into useful digital experiences.
            </p>
          </div>
        </div>
      </section>

      {/* POSITIONING */}
      <section className="border-y border-white/[.06] bg-white/[.015]">
        <div className="container py-16 md:py-20">
          <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:gap-16">
            <div>
              <p className="eyebrow text-violet-300">Why we exist</p>

              <h2 className="display mt-3 max-w-xl text-4xl font-semibold tracking-[-.035em] text-white md:text-5xl">
                Good products are not made by adding more screens.
              </h2>
            </div>

            <div className="max-w-2xl">
              <p className="text-lg leading-8 text-zinc-300">
                They are made by understanding what people need to do, what
                gets in their way, and what the product should make easier.
              </p>

              <p className="mt-5 leading-7 text-zinc-500">
                That is why our work starts before the interface. We look at
                the problem, the people, the business context, and the
                decisions the product needs to support. Then we design the
                experience around that understanding.
              </p>

              <p className="mt-5 leading-7 text-zinc-500">
                When development is part of the engagement, we carry the same
                thinking into the build so the final product is not just
                visually consistent, but useful and maintainable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PRINCIPLES */}
      <section className="container py-16 md:py-20">
        <div className="mb-8 max-w-2xl">
          <p className="eyebrow text-violet-300">Our thinking</p>

          <h2 className="display mt-3 text-4xl font-semibold tracking-[-.035em] text-white md:text-5xl">
            The principles behind the work.
          </h2>
        </div>

        <div className="grid gap-3 md:grid-cols-3">
          {principles.map((principle) => (
            <article
              key={principle.number}
              className="rounded-[28px] border border-white/10 bg-white/[.025] p-6 md:p-7"
            >
              <span className="text-xs text-violet-300">
                {principle.number}
              </span>

              <h3 className="display mt-7 text-2xl font-semibold tracking-[-.025em] text-white">
                {principle.title}
              </h3>

              <p className="mt-3 leading-7 text-zinc-500">
                {principle.text}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="border-y border-white/[.06] bg-white/[.015]">
        <div className="container py-16 md:py-20">
          <div className="grid gap-10 lg:grid-cols-[.75fr_1.25fr] lg:gap-16">
            <div>
              <p className="eyebrow text-violet-300">What we bring</p>

              <h2 className="display mt-3 text-4xl font-semibold tracking-[-.035em] text-white md:text-5xl">
                One team across the experience.
              </h2>

              <p className="mt-5 max-w-lg leading-7 text-zinc-500">
                Research, strategy, design, and development can work as
                separate disciplines. We prefer to connect them around the
                same product problem.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {capabilities.map(([title, text], index) => (
                <div
                  key={title}
                  className="rounded-2xl border border-white/10 bg-white/[.025] p-5"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] text-violet-300">
                      0{index + 1}
                    </span>

                    <span className="text-zinc-700">↗</span>
                  </div>

                  <h3 className="mt-5 text-sm font-semibold text-zinc-200">
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
      </section>

      {/* WORKING STYLE */}
      <section className="container py-16 md:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow text-violet-300">How we collaborate</p>

          <h2 className="display mt-3 text-4xl font-semibold tracking-[-.035em] text-white md:text-5xl">
            Small enough to think carefully. Structured enough to deliver.
          </h2>

          <p className="mt-5 leading-8 text-zinc-500">
            We value direct communication, clear decisions, thoughtful
            iteration, and honest conversations about what the product
            actually needs. The goal is not to create more work. The goal is
            to create the right work.
          </p>
        </div>

        <div className="mt-10 grid gap-3 md:grid-cols-3">
          {[
            ['Direct', 'Clear communication without unnecessary layers.'],
            ['Thoughtful', 'Decisions grounded in users, context, and evidence.'],
            ['Practical', 'Ideas designed with real constraints in mind.'],
          ].map(([title, text]) => (
            <div
              key={title}
              className="rounded-2xl border border-white/10 bg-white/[.025] p-6 text-center"
            >
              <h3 className="text-base font-semibold text-zinc-100">
                {title}
              </h3>

              <p className="mt-2 text-sm leading-6 text-zinc-500">
                {text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container pb-10 md:pb-14">
        <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-violet-600/20 via-blue-600/[.07] to-transparent px-7 py-10 md:px-12 md:py-12">
          <div className="absolute -right-24 -top-24 size-72 rounded-full bg-violet-500/10 blur-3xl" />

          <div className="relative max-w-3xl">
            <p className="eyebrow text-violet-200">Work with us</p>

            <h2 className="display mt-3 text-4xl font-semibold tracking-[-.035em] text-white md:text-5xl">
              Have something worth making clearer?
            </h2>

            <p className="mt-5 max-w-2xl leading-7 text-zinc-400">
              Tell us what you are building, what is not working, or what you
              are trying to figure out. We can start from there.
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