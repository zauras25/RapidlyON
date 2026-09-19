import type { CaseStudy } from '@/lib/case-studies';

function BrowserFrame({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="overflow-hidden rounded-[28px] border border-white/10 bg-[#0b0b10] shadow-2xl">
      <div className="flex h-11 items-center justify-between border-b border-white/10 px-4">
        <div className="flex gap-1.5">
          <span className="size-2 rounded-full bg-white/20" />
          <span className="size-2 rounded-full bg-white/10" />
          <span className="size-2 rounded-full bg-white/10" />
        </div>

        <span className="text-[9px] uppercase tracking-[.2em] text-zinc-700">
          Product experience
        </span>
      </div>

      {children}
    </div>
  );
}

export function CaseStudyPreview({
  project,
}: {
  project: CaseStudy;
}) {
  if (project.slug === 'smart-trip') {
    return (
      <BrowserFrame>
        <div className="min-h-[420px] p-6 md:p-10">
          <div className="mx-auto max-w-lg text-center">
            <p className="text-[10px] uppercase tracking-[.2em] text-violet-300">
              SmartTrip
            </p>

            <h3 className="display mt-4 text-3xl font-semibold text-white md:text-5xl">
              Where do you want your next journey to take you?
            </h3>

            <p className="mt-4 text-sm leading-6 text-zinc-500">
              Tell us what matters to you. We will help you discover a trip
              that fits.
            </p>
          </div>

          <div className="mx-auto mt-10 max-w-md space-y-3">
            {[
              'Adventure',
              'Relaxation',
              'Culture & discovery',
            ].map((item, index) => (
              <div
                key={item}
                className={[
                  'rounded-2xl border p-4 transition',
                  index === 0
                    ? 'border-violet-400/30 bg-violet-500/10'
                    : 'border-white/10 bg-white/[.025]',
                ].join(' ')}
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm text-zinc-200">{item}</span>
                  <span className="text-xs text-zinc-600">→</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </BrowserFrame>
    );
  }

  if (project.slug === 'visa-consultant-redesign') {
    return (
      <BrowserFrame>
        <div className="grid min-h-[420px] gap-6 p-6 md:grid-cols-[.8fr_1.2fr] md:p-10">
          <div>
            <p className="text-[10px] uppercase tracking-[.2em] text-violet-300">
              Visa services
            </p>

            <h3 className="display mt-4 text-3xl font-semibold text-white">
              Understand your visa options.
            </h3>

            <p className="mt-4 text-sm leading-6 text-zinc-500">
              Clear categories, requirements and next steps.
            </p>

            <div className="mt-7 h-10 w-32 rounded-xl bg-white" />
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {[
              'UK Visit Visa',
              'Student Visa',
              'Family Visa',
              'Business Visa',
            ].map((item, index) => (
              <div
                key={item}
                className={[
                  'rounded-2xl border p-5',
                  index === 0
                    ? 'border-violet-400/20 bg-violet-500/10'
                    : 'border-white/10 bg-white/[.025]',
                ].join(' ')}
              >
                <div className="size-8 rounded-lg bg-white/10" />
                <p className="mt-5 text-sm text-zinc-200">{item}</p>
                <p className="mt-2 text-xs text-zinc-600">
                  Requirements & process
                </p>
              </div>
            ))}
          </div>
        </div>
      </BrowserFrame>
    );
  }

  return (
    <BrowserFrame>
      <div className="min-h-[420px] p-6 md:p-10">
        <div className="grid gap-4 md:grid-cols-[180px_1fr]">
          <div className="rounded-2xl border border-white/10 bg-white/[.02] p-4">
            <div className="h-6 w-24 rounded bg-white/10" />

            <div className="mt-7 space-y-2">
              {[1, 2, 3, 4].map((item) => (
                <div
                  key={item}
                  className={[
                    'h-9 rounded-xl',
                    item === 1
                      ? 'bg-violet-500/15'
                      : 'bg-white/[.035]',
                  ].join(' ')}
                />
              ))}
            </div>
          </div>

          <div>
            <p className="text-[10px] uppercase tracking-[.2em] text-zinc-600">
              Umer Mobile Parts
            </p>

            <h3 className="display mt-4 text-3xl font-semibold text-white">
              Find the right part. Place the order.
            </h3>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {['Displays', 'Batteries', 'Accessories'].map(
                (item, index) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/10 bg-white/[.025] p-4"
                  >
                    <div
                      className={[
                        'aspect-square rounded-xl',
                        index === 0
                          ? 'bg-gradient-to-br from-violet-500/30 to-blue-500/10'
                          : 'bg-white/[.035]',
                      ].join(' ')}
                    />

                    <p className="mt-3 text-xs text-zinc-300">{item}</p>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </BrowserFrame>
  );
}
