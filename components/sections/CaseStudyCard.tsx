import Link from 'next/link';
import type { Project } from '@/lib/real-projects';

type Props = {
  project: Project;
};

export default function CaseStudyCard({ project }: Props) {
  return (
    <Link
      href={`/work/${project.slug}`}
      className="group block overflow-hidden rounded-[30px] border border-white/10 bg-white/[.02] transition duration-300 hover:-translate-y-1 hover:border-violet-400/30"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-[#0d0d14]">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 via-transparent to-blue-500/5" />

        <div className="absolute left-6 top-6 rounded-full border border-white/10 bg-black/30 px-3 py-1.5 text-[10px] uppercase tracking-[.16em] text-zinc-400 backdrop-blur">
          {project.category}
        </div>

        <div className="absolute inset-x-10 bottom-10 top-20 rounded-[22px] border border-white/10 bg-white/[.025] shadow-2xl transition duration-500 group-hover:scale-[1.02]">
          <div className="h-10 border-b border-white/10 px-4 flex items-center gap-1.5">
            <span className="size-2 rounded-full bg-white/10" />
            <span className="size-2 rounded-full bg-white/10" />
            <span className="size-2 rounded-full bg-white/10" />
          </div>

          <div className="p-5">
            <div className="h-3 w-24 rounded bg-white/10" />
            <div className="mt-4 h-8 w-2/3 rounded bg-white/10" />

            <div className="mt-8 grid grid-cols-3 gap-3">
              <div className="h-24 rounded-xl bg-violet-500/10" />
              <div className="h-24 rounded-xl bg-white/[.04]" />
              <div className="h-24 rounded-xl bg-white/[.04]" />
            </div>
          </div>
        </div>
      </div>

      <div className="p-6 md:p-7">
        <div className="flex items-center justify-between gap-4">
          <span className="text-xs uppercase tracking-[.16em] text-violet-300">
            {project.number} / {project.type}
          </span>

          <span className="text-zinc-600 transition group-hover:translate-x-1 group-hover:text-zinc-300">
            →
          </span>
        </div>

        <h3 className="display mt-4 text-2xl font-semibold">
          {project.title}
        </h3>

        <p className="mt-3 leading-7 text-zinc-400">
          {project.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/10 px-2.5 py-1.5 text-[11px] text-zinc-600 transition group-hover:border-white/15 group-hover:text-zinc-500"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
