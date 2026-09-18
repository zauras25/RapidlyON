export function WhatsAppOrderVisual() {
  const products = [
    ['Linen Shirt', 'PKR 3,200', 'Sand'],
    ['Relaxed Kurta', 'PKR 4,100', 'Olive'],
    ['Cotton Co-ord', 'PKR 5,600', 'Black'],
  ];

  const orderSteps = [
    ['01', 'Customer message', 'New order received'],
    ['02', 'Product details', 'Size + color captured'],
    ['03', 'Customer info', 'Name + address collected'],
    ['04', 'Order created', 'Ready to process'],
  ];

  return (
    <div className="relative min-h-[440px] overflow-hidden rounded-[30px] border border-white/10 bg-[#090a0f] p-5 md:p-8">
      <div className="absolute -right-24 -top-24 size-72 rounded-full bg-emerald-400/10 blur-3xl" />
      <div className="absolute -bottom-24 -left-24 size-72 rounded-full bg-violet-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-6 flex items-center justify-between">
          <div>
            <p className="text-[10px] uppercase tracking-[.2em] text-emerald-300">
              Thread & Co.
            </p>

            <h3 className="mt-2 text-lg font-semibold text-white md:text-xl">
              WhatsApp Order Assistant
            </h3>
          </div>

          <div className="rounded-full border border-emerald-400/20 bg-emerald-400/5 px-3 py-1.5 text-[10px] uppercase tracking-[.15em] text-emerald-300">
            UX Concept
          </div>
        </div>

        <div className="grid gap-4 lg:grid-cols-[.9fr_1.1fr]">
          {/* WhatsApp conversation */}
          <div className="rounded-[26px] border border-white/10 bg-[#101116] p-4 md:p-5">
            <div className="flex items-center gap-3 border-b border-white/10 pb-4">
              <div className="flex size-9 items-center justify-center rounded-full bg-emerald-400/10 text-xs text-emerald-300">
                T
              </div>

              <div>
                <p className="text-sm font-medium text-zinc-200">
                  Thread & Co.
                </p>
                <p className="text-[10px] text-zinc-600">
                  WhatsApp business
                </p>
              </div>

              <span className="ml-auto size-2 rounded-full bg-emerald-400" />
            </div>

            <div className="space-y-3 pt-5">
              <div className="max-w-[85%] rounded-2xl rounded-tl-md bg-white/[.05] p-3">
                <p className="text-xs leading-5 text-zinc-400">
                  Hi! I want the Linen Shirt in medium.
                </p>
              </div>

              <div className="ml-auto max-w-[85%] rounded-2xl rounded-tr-md bg-emerald-400/10 p-3">
                <p className="text-xs leading-5 text-emerald-100">
                  Sure. Which color would you like?
                </p>
              </div>

              <div className="max-w-[85%] rounded-2xl rounded-tl-md bg-white/[.05] p-3">
                <p className="text-xs leading-5 text-zinc-400">
                  Sand please. I also need delivery to Lahore.
                </p>
              </div>

              <div className="rounded-2xl border border-emerald-400/15 bg-emerald-400/[.04] p-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] uppercase tracking-[.16em] text-emerald-300">
                    Order captured
                  </span>

                  <span className="text-[10px] text-zinc-600">
                    #TC-1048
                  </span>
                </div>

                <div className="mt-3 grid grid-cols-2 gap-2">
                  <div className="rounded-xl bg-black/20 p-2.5">
                    <p className="text-[9px] text-zinc-600">Product</p>
                    <p className="mt-1 text-[11px] text-zinc-300">
                      Linen Shirt
                    </p>
                  </div>

                  <div className="rounded-xl bg-black/20 p-2.5">
                    <p className="text-[9px] text-zinc-600">Size / Color</p>
                    <p className="mt-1 text-[11px] text-zinc-300">
                      M / Sand
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Business dashboard */}
          <div className="rounded-[26px] border border-white/10 bg-[#101116] p-4 md:p-5">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <p className="text-[10px] uppercase tracking-[.18em] text-zinc-600">
                  Business dashboard
                </p>

                <p className="mt-1 text-sm font-medium text-white">
                  Incoming orders
                </p>
              </div>

              <div className="rounded-lg bg-white/[.04] px-2.5 py-1.5 text-[10px] text-zinc-500">
                12 new
              </div>
            </div>

            <div className="mt-4 space-y-2">
              {orderSteps.map(([number, title, text]) => (
                <div
                  key={number}
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[.02] p-3"
                >
                  <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-emerald-400/10 text-[9px] text-emerald-300">
                    {number}
                  </span>

                  <div className="min-w-0">
                    <p className="text-xs text-zinc-300">{title}</p>
                    <p className="mt-0.5 text-[10px] text-zinc-600">
                      {text}
                    </p>
                  </div>

                  <span className="ml-auto text-zinc-700">→</span>
                </div>
              ))}
            </div>

            <div className="mt-4 rounded-2xl border border-white/10 bg-black/20 p-4">
              <div className="flex items-center justify-between">
                <p className="text-[10px] uppercase tracking-[.16em] text-zinc-600">
                  Product catalogue
                </p>

                <span className="text-[10px] text-zinc-600">
                  128 products
                </span>
              </div>

              <div className="mt-3 grid grid-cols-3 gap-2">
                {products.map(([name, price, color]) => (
                  <div
                    key={name}
                    className="rounded-xl border border-white/10 bg-white/[.02] p-2"
                  >
                    <div className="aspect-square rounded-lg bg-gradient-to-br from-zinc-700/30 to-white/[.03]" />

                    <p className="mt-2 truncate text-[10px] text-zinc-400">
                      {name}
                    </p>

                    <p className="mt-1 text-[9px] text-zinc-600">
                      {price} · {color}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Concept statement */}
        <div className="mt-4 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-white/10 bg-white/[.02] px-4 py-3">
          <p className="text-[11px] text-zinc-500">
            Conversation in → structured order out
          </p>

          <div className="flex items-center gap-2 text-[10px] text-zinc-600">
            <span className="size-1.5 rounded-full bg-emerald-400" />
            WhatsApp connected
          </div>
        </div>
      </div>
    </div>
  );
}
