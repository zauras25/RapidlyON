export function UmerMobileVisual() {
  return (
    <div className="min-h-[420px] bg-[#0b0b10] p-6 md:p-10">
      <div className="mx-auto max-w-5xl">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <p className="text-xs uppercase tracking-[.2em] text-violet-300">
              Umer Mobile Parts
            </p>
            <h3 className="mt-2 text-xl font-semibold text-white">
              Digital commerce experience
            </h3>
          </div>

          <div className="rounded-full border border-white/10 px-3 py-1 text-xs text-zinc-500">
            E-commerce
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-[1.4fr_.8fr]">
          <div className="rounded-3xl border border-white/10 bg-white/[.03] p-5">
            <div className="flex gap-2">
              <div className="h-2 w-20 rounded-full bg-violet-400/60" />
              <div className="h-2 w-12 rounded-full bg-white/10" />
              <div className="h-2 w-16 rounded-full bg-white/10" />
            </div>

            <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-3">
              {['Displays', 'Batteries', 'Charging', 'Screens', 'Cameras', 'Accessories'].map(
                (item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/10 bg-black/20 p-4"
                  >
                    <div className="mb-4 aspect-square rounded-xl bg-gradient-to-br from-violet-400/20 to-white/[.03]" />
                    <p className="text-sm text-zinc-300">{item}</p>
                    <p className="mt-1 text-xs text-zinc-600">
                      View products
                    </p>
                  </div>
                )
              )}
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[.03] p-5">
            <p className="text-xs text-zinc-600">Order flow</p>

            <div className="mt-6 space-y-3">
              {[
                ['01', 'Discover product'],
                ['02', 'Compare information'],
                ['03', 'Add to order'],
                ['04', 'Complete request'],
              ].map(([number, label]) => (
                <div
                  key={number}
                  className="flex items-center gap-4 rounded-2xl border border-white/10 p-4"
                >
                  <span className="text-xs text-violet-300">{number}</span>
                  <span className="text-sm text-zinc-300">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
