type ProjectSummaryProps = {
  projectType?: string;
  timeline?: string;
  budget?: string;
};

export function ProjectSummary({
  projectType,
  timeline,
  budget,
}: ProjectSummaryProps) {
  return (
    <aside className="rounded-2xl bg-neutral-950 p-6 text-white lg:sticky lg:top-28">
      <p className="text-xs font-semibold uppercase tracking-[0.08em] text-neutral-400">
        Project discussion
      </p>

      <h2 className="mt-4 text-2xl font-semibold tracking-tight">
        Start with the context.
      </h2>

      <p className="mt-4 text-sm leading-6 text-neutral-400">
        There is no fixed package required at this stage. Your answers help
        us understand the project before discussing scope and pricing.
      </p>

      <div className="mt-8 space-y-5 border-t border-white/10 pt-6">
        <SummaryItem
          label="Project"
          value={projectType || "Not selected"}
        />

        <SummaryItem
          label="Timeline"
          value={timeline || "Not selected"}
        />

        <SummaryItem
          label="Budget"
          value={budget || "Not selected"}
        />
      </div>
    </aside>
  );
}

function SummaryItem({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div>
      <p className="text-xs uppercase tracking-wider text-neutral-500">
        {label}
      </p>

      <p className="mt-1 text-sm text-neutral-200">
        {value}
      </p>
    </div>
  );
}
