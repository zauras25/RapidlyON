type ProductPreviewProps = {
  type: string;
};

function SaaSPreview() {
  return (
    <div className="h-full w-full bg-[#09090f] p-5 md:p-7">
      <div className="flex h-full overflow-hidden rounded-2xl border border-white/10 bg-[#0d0d15]">
        <aside className="hidden w-24 border-r border-white/10 p-3 sm:block">
          <div className="h-5 w-12 rounded bg-white/10" />

          <div className="mt-8 space-y-2">
            <div className="h-7 rounded-lg bg-violet-500/15" />
            <div className="h-7 rounded-lg bg-white/[.035]" />
            <div className="h-7 rounded-lg bg-white/[.035]" />
            <div className="h-7 rounded-lg bg-white/[.035]" />
          </div>
        </aside>

        <div className="flex-1 p-4 md:p-6">
          <div className="flex items-center justify-between">
            <div>
              <div className="h-2 w-20 rounded bg-white/10" />
              <div className="mt-2 h-5 w-32 rounded bg-white/10" />
            </div>

            <div className="size-7 rounded-full border border-white/10 bg-violet-400/10" />
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            <div className="rounded-xl border border-white/10 bg-white/[.025] p-3">
              <div className="h-2 w-12 rounded bg-white/10" />
              <div className="mt-4 h-5 w-16 rounded bg-white/10" />
            </div>

            <div className="rounded-xl border border-white/10 bg-white/[.025] p-3">
              <div className="h-2 w-14 rounded bg-white/10" />
              <div className="mt-4 h-5 w-20 rounded bg-white/10" />
            </div>

            <div className="rounded-xl border border-white/10 bg-white/[.025] p-3">
              <div className="h-2 w-10 rounded bg-white/10" />
              <div className="mt-4 h-5 w-14 rounded bg-emerald-400/20" />
            </div>
          </div>

          <div className="mt-3 rounded-xl border border-white/10 bg-white/[.025] p-4">
            <div className="flex items-center justify-between">
              <div className="h-2 w-24 rounded bg-white/10" />
              <div className="h-2 w-10 rounded bg-violet-400/20" />
            </div>

            <div className="mt-6 flex items-end gap-2">
              <div className="h-16 w-1/6 rounded-t bg-violet-500/20" />
              <div className="h-24 w-1/6 rounded-t bg-violet-500/30" />
              <div className="h-20 w-1/6 rounded-t bg-violet-500/20" />
              <div className="h-32 w-1/6 rounded-t bg-violet-400/40" />
              <div className="h-28 w-1/6 rounded-t bg-violet-500/25" />
              <div className="h-36 w-1/6 rounded-t bg-violet-400/50" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function EcommercePreview() {
  return (
    <div className="h-full w-full bg-[#0a0a0e] p-5 md:p-7">
      <div className="h-full overflow-hidden rounded-2xl border border-white/10 bg-[#101016]">
        <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
          <div className="h-4 w-20 rounded bg-white/10" />

          <div className="hidden gap-3 sm:flex">
            <div className="h-2 w-10 rounded bg-white/10" />
            <div className="h-2 w-10 rounded bg-white/10" />
            <div className="h-2 w-10 rounded bg-white/10" />
          </div>

          <div className="size-6 rounded-full bg-white/10" />
        </div>

        <div className="p-4 md:p-6">
          <div className="h-2 w-28 rounded bg-white/10" />
          <div className="mt-2 h-6 w-44 rounded bg-white/10" />

          <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-3">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="rounded-xl border border-white/10 bg-white/[.025] p-3"
              >
                <div className="aspect-square rounded-lg bg-gradient-to-br from-white/10 to-violet-400/10" />
                <div className="mt-3 h-2 w-16 rounded bg-white/10" />
                <div className="mt-2 h-2 w-24 rounded bg-white/5" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function AppPreview() {
  return (
    <div className="h-full w-full bg-[#08090d] p-6 md:p-10">
      <div className="mx-auto flex h-full max-w-[230px] items-center justify-center">
        <div className="relative h-full max-h-[330px] w-full rounded-[28px] border border-white/10 bg-[#101018] p-3 shadow-2xl">
          <div className="absolute left-1/2 top-2 h-1 w-12 -translate-x-1/2 rounded-full bg-white/10" />

          <div className="mt-7 rounded-2xl bg-gradient-to-br from-violet-500/20 to-blue-500/10 p-4">
            <div className="h-2 w-16 rounded bg-white/15" />
            <div className="mt-3 h-7 w-28 rounded bg-white/10" />
            <div className="mt-5 h-2 w-20 rounded bg-white/10" />
          </div>

          <div className="mt-3 space-y-2">
            <div className="h-12 rounded-xl border border-white/10 bg-white/[.025]" />
            <div className="h-12 rounded-xl border border-white/10 bg-white/[.025]" />
            <div className="h-12 rounded-xl border border-violet-400/10 bg-violet-500/10" />
          </div>

          <div className="mt-3 h-9 rounded-xl bg-white" />
        </div>
      </div>
    </div>
  );
}

export function ProductPreview({ type }: ProductPreviewProps) {
  if (type === 'SaaS') {
    return <SaaSPreview />;
  }

  if (type === 'E-commerce') {
    return <EcommercePreview />;
  }

  return <AppPreview />;
}
