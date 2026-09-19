import Link from 'next/link';

const models = [
  {
    number: '01',
    title: 'Discovery Sprint',
    description:
      'A focused engagement for teams that need clarity before committing to a larger product or design project.',
    includes: [
      'Problem definition',
      'UX research direction',
      'User and business goals',
      'Experience opportunities',
    ],
  },
  {
    number: '02',
    title: 'Product Design',
    description:
      'A structured design engagement from user flows and wireframes through high-fidelity product experiences.',
    includes: [
      'Information architecture',
      'User flows',
      'Wireframes',
      'UI and interaction design',
      'Prototype',
    ],
  },
  {
    number: '03',
    title: 'Design + Development',
    description:
      'An end-to-end engagement for teams that want the designed experience turned into a working digital product.',
    includes: [
      'UX strategy',
      'Product design',
      'Responsive implementation',
      'Next.js / React development',
      'Launch support',
    ],
  },
];

const process = [
  ['01', 'Understand', 'We start by understanding the product, people, goals, and constraints.'],
  ['02', 'Define', 'We turn the information into a clear problem and practical direction.'],
  ['03', 'Design', 'We shape the journey, interactions, interface, and prototype.'],
  ['04', 'Build', 'When needed, we develop the approved experience into a working product.'],
];

export default function BusinessModelPage() {
  return (
    <main>
      {/* HERO */}
      <section className="container pt-28 pb-16 md:pt-36 md:pb-20">
        <div className="max-w-4xl">
          <p className="eyebrow text-violet-300">Business model</p>

          <h1 className="display mt-5 text-balance text-5xl font-semibold leading-[0.98] tracking-[-0.045em] text-white sm:text-6xl md:text-7xl">
            Flexible ways to build the right product.
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-8 text-zinc-400 md:text-lg">
            Not every product needs the same engagement. Start with clarity,
            bring us in for product design, or work with us from strategy
            through development.
          </p>
        </div>
      </section>

      {/* MODELS */}
      <section className="container pb-20 md:pb-28">
        <div className="grid gap-5 lg:grid-cols-3">
          {models.map((model) => (
            <article
              key={model.number}
              className="group rounded-[30px] border border-white/10 bg-white/[0.02] p-7 transition duration-300 hover:-translate-y-1 hover:border-violet-400/25 hover:bg-white/[0.035] md:p-8"
            >
              <span className="text-xs text-violet-300">
                {model.number}
              </span>

              <h2 className="display mt-8 text-2xl font-semibold text-white md:text-3xl">
                {model.title}
              </h2>

              <p className="mt-4 text-sm leading-7 text-zinc-500">
                {model.description}
              </p>

              <div className="mt-7 border-t border-white/[0.07] pt-6">
                <p className="text-[10px] uppercase tracking-[0.18em] text-zinc-600">
                  Typically includes
                </p>

                <ul className="mt-4 space-y-3">
                  {model.includes.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-sm text-zinc-400"
                    >
                      <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-violet-400" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* HOW WE WORK */}
      <section className="border-y border-white/[0.06] bg-white/[0.015]">
        <div className="container py-20 md:py-24">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div>
              <p className="eyebrow text-violet-300">How it works</p>

              <h2 className="display mt-3 text-4xl font-semibold tracking-[-0.035em] text-white md:text-5xl">
                One clear process. Different levels of engagement.
              </h2>

              <p className="mt-5 max-w-lg leading-7 text-zinc-500">
                The scope can change depending on the product. The thinking
                stays focused on understanding the problem before deciding
                what to build.
              </p>
            </div>

            <div className="space-y-3">
              {process.map(([number, title, text]) => (
                <div
                  key={number}
                  className="rounded-2xl border border-white/10 bg-white/[0.025] p-5 md:p-6"
                >
                  <div className="flex gap-5">
                    <span className="flex size-9 shrink-0 items-center justify-center rounded-full border border-violet-400/20 bg-violet-500/[0.07] text-[10px] text-violet-300">
                      {number}
                    </span>

                    <div>
                      <h3 className="text-base font-semibold text-zinc-100">
                        {title}
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-zinc-500">
                        {text}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ENGAGEMENT */}
      <section className="container py-20 md:py-24">
        <div className="grid gap-5 md:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-6">
            <span className="text-xs text-violet-300">01</span>
            <h3 className="display mt-6 text-2xl font-semibold text-white">
              Fixed scope
            </h3>
            <p className="mt-3 text-sm leading-7 text-zinc-500">
              Useful when the problem and deliverables are clear from the
              beginning.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-6">
            <span className="text-xs text-violet-300">02</span>
            <h3 className="display mt-6 text-2xl font-semibold text-white">
              Flexible engagement
            </h3>
            <p className="mt-3 text-sm leading-7 text-zinc-500">
              Useful when the product needs to evolve as research and design
              reveal new information.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-6">
            <span className="text-xs text-violet-300">03</span>
            <h3 className="display mt-6 text-2xl font-semibold text-white">
              Design to build
            </h3>
            <p className="mt-3 text-sm leading-7 text-zinc-500">
              Useful when you want one team to carry the experience from
              product thinking into implementation.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container pb-12 md:pb-16">
        <div className="relative overflow-hidden rounded-[34px] border border-white/10 bg-gradient-to-br from-violet-600/20 via-blue-600/[0.08] to-transparent px-7 py-12 md:px-12 md:py-14">
          <div className="absolute -right-24 -top-24 size-72 rounded-full bg-violet-500/10 blur-3xl" />

          <div className="relative max-w-3xl">
            <p className="eyebrow text-violet-200">Start with clarity</p>

            <h2 className="display mt-3 text-4xl font-semibold tracking-[-0.035em] text-white md:text-5xl">
              Not sure which engagement fits?
            </h2>

            <p className="mt-5 max-w-2xl leading-7 text-zinc-400">
              You do not need to choose the right model before getting in
              touch. Tell us what you are trying to solve and we can shape the
              engagement around the actual problem.
            </p>

            <Link
              href="/start-a-project"
              className="mt-7 inline-flex items-center justify-center gap-2 rounded-xl bg-violet-500 px-5 py-3.5 text-sm font-semibold text-white shadow-[0_8px_30px_rgba(139,92,246,0.22)] transition duration-300 hover:bg-violet-400"
            >
              Start a project
              <span>â†’</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
