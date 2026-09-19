export function SmartTripVisual() {
  return (
    <div className="relative min-h-[420px] overflow-hidden rounded-[28px] border border-white/10 bg-[#0b0b11] p-5 md:p-8">
      <div className="absolute -right-24 -top-24 size-72 rounded-full bg-violet-500/15 blur-3xl" />

      <div className="relative mx-auto max-w-4xl">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs uppercase tracking-[.2em] text-violet-300">
              SmartTrip
            </p>

            <h3 className="mt-2 text-xl font-semibold text-white">
              Trip recommendation experience
            </h3>
          </div>

          <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-zinc-500">
            UX Concept
          </span>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-[.75fr_1.25fr]">
          <div className="rounded-3xl border border-white/10 bg-white/[.03] p-5">
            <p className="text-xs text-zinc-600">
              Understand the traveller
            </p>

            <div className="mt-5 space-y-3">
              {[
                ['01', 'Destination'],
                ['02', 'Purpose'],
                ['03', 'Experience'],
                ['04', 'Preferences'],
              ].map(([number, label], index) => (
                <div
                  key={number}
                  className={[
                    'rounded-2xl border p-4 transition',
                    index === 1
                      ? 'border-violet-400/30 bg-violet-500/10'
                      : 'border-white/10 bg-black/20',
                  ].join(' ')}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xs text-violet-300">
                      {number}
                    </span>

                    <span className="text-sm text-zinc-300">
                      {label}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[.03] p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-zinc-600">
                  Recommended for you
                </p>

                <h4 className="mt-2 text-lg font-semibold text-white">
                  Northern Escape
                </h4>
              </div>

              <div className="rounded-full bg-violet-400/10 px-3 py-1 text-xs text-violet-300">
                94% match
              </div>
            </div>

            <div className="mt-5 aspect-[16/8] rounded-2xl bg-gradient-to-br from-violet-500/25 via-blue-500/10 to-white/[.03]" />

            <div className="mt-5 grid grid-cols-3 gap-2">
              {[
                ['Purpose', 'Relax'],
                ['Duration', '5 days'],
                ['Style', 'Nature'],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="rounded-2xl border border-white/10 bg-black/20 p-3"
                >
                  <p className="text-[10px] uppercase tracking-wider text-zinc-600">
                    {label}
                  </p>

                  <p className="mt-2 text-xs text-zinc-300">
                    {value}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-4 rounded-2xl border border-violet-400/20 bg-violet-500/5 p-4">
              <p className="text-xs leading-5 text-zinc-400">
                A recommendation based on your purpose, preferences and
                travel expectations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
