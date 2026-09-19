type CaseStudySectionProps = {
  eyebrow: string;
  title: string;
  text: string;
  points?: string[];
};

export function CaseStudySection({
  eyebrow,
  title,
  text,
  points,
}: CaseStudySectionProps) {
  return (
    <section className="container py-20 md:py-28">
      <div className="grid gap-10 md:grid-cols-[.7fr_1.3fr] md:gap-20">
        <div>
          <p className="eyebrow text-violet-300">{eyebrow}</p>
        </div>

        <div className="max-w-3xl">
          <h2 className="display text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">
            {title}
          </h2>

          <p className="mt-6 text-base leading-8 text-zinc-400 md:text-lg">
            {text}
          </p>

          {points?.length ? (
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {points.map((point, index) => (
                <div
                  key={point}
                  className="rounded-2xl border border-white/10 bg-white/[.02] p-4"
                >
                  <span className="text-[10px] text-violet-300">
                    {String(index + 1).padStart(2, '0')}
                  </span>

                  <p className="mt-3 text-sm leading-6 text-zinc-300">
                    {point}
                  </p>
                </div>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
