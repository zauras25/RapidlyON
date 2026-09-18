export function VisaAdvisorVisual() {
  return (
    <div className="relative h-full min-h-[360px] overflow-hidden rounded-[28px] border border-white/10 bg-[#0b0b11] p-5">
      <div className="absolute -right-20 -top-20 size-64 rounded-full bg-violet-500/15 blur-3xl" />

      <div className="relative h-full rounded-2xl border border-white/10 bg-[#101017] p-5">
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <div>
            <div className="h-2 w-20 rounded bg-white/20" />
            <div className="mt-2 h-2 w-32 rounded bg-white/10" />
          </div>

          <div className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-[10px] text-emerald-300">
            Trusted advisor
          </div>
        </div>

        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          {[
            ["01", "Visa categories"],
            ["02", "Required documents"],
            ["03", "Application process"],
            ["04", "Book consultation"],
          ].map(([number, label]) => (
            <div
              key={number}
              className="rounded-2xl border border-white/10 bg-white/[.025] p-4"
            >
              <span className="text-[10px] text-violet-300">{number}</span>

              <div className="mt-8 h-2 w-24 rounded bg-white/15" />

              <p className="mt-3 text-xs text-zinc-400">{label}</p>
            </div>
          ))}
        </div>

        <div className="mt-4 rounded-2xl border border-violet-400/20 bg-violet-500/10 p-4">
          <div className="flex items-center justify-between">
            <span className="text-xs text-zinc-300">
              Consultation availability
            </span>

            <span className="text-xs text-violet-300">Available</span>
          </div>

          <div className="mt-4 h-2 w-2/3 rounded bg-white/10" />
        </div>
      </div>
    </div>
  );
}
