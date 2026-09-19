import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { Card } from './Card';

type ProjectCardProps = {
  title: string;
  category: string;
  description: string;
  href: string;
  visual: React.ReactNode;
  featured?: boolean;
};

export function ProjectCard({
  title,
  category,
  description,
  href,
  visual,
  featured = false,
}: ProjectCardProps) {
  return (
    <Link
      href={href}
      className="group block"
    >
      <Card
        variant="default"
        className={[
          'overflow-hidden',
          featured
            ? 'lg:grid lg:grid-cols-[1.15fr_.85fr]'
            : '',
        ].join(' ')}
      >
        <div
          className={[
            'overflow-hidden',
            featured ? 'lg:order-2' : '',
          ].join(' ')}
        >
          <div className="aspect-[16/10] transition duration-500 group-hover:scale-[1.02]">
            {visual}
          </div>
        </div>

        <div className="p-7 md:p-8">
          <div className="flex items-center justify-between gap-4">
            <span className="eyebrow">
              {category}
            </span>

            <ArrowUpRight
              size={18}
              className="text-zinc-600 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-violet-300"
            />
          </div>

          <h3 className="display mt-4 text-3xl font-semibold">
            {title}
          </h3>

          <p className="mt-3 max-w-xl leading-7 text-zinc-500">
            {description}
          </p>

          <span className="mt-6 inline-flex text-sm font-semibold text-zinc-300">
            View case study
          </span>
        </div>
      </Card>
    </Link>
  );
}
