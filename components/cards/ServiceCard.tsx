import type { LucideIcon } from 'lucide-react';
import { ArrowUpRight } from 'lucide-react';
import { Card } from './Card';

type ServiceCardProps = {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
  items: string[];
  featured?: boolean;
};

export function ServiceCard({
  number,
  title,
  description,
  icon: Icon,
  items,
  featured = false,
}: ServiceCardProps) {
  return (
    <Card
      variant={featured ? 'gradient' : 'glass'}
      className="group relative overflow-hidden p-7"
    >
      <div className="flex items-start justify-between">
        <span className="font-mono text-xs text-zinc-600">
          {number}
        </span>

        <div className="flex size-10 items-center justify-center rounded-xl border border-white/10 bg-white/[.035]">
          <Icon
            size={18}
            className="text-violet-300"
          />
        </div>
      </div>

      <h3 className="display mt-12 text-3xl font-semibold">
        {title}
      </h3>

      <p className="mt-3 leading-7 text-zinc-500">
        {description}
      </p>

      <div className="mt-7 border-t border-white/10 pt-5">
        <div className="space-y-0">
          {items.map((item) => (
            <div
              key={item}
              className="flex items-center justify-between border-b border-white/5 py-3 text-sm text-zinc-300 last:border-0"
            >
              <span>{item}</span>

              <ArrowUpRight
                size={14}
                className="text-zinc-700 transition group-hover:text-violet-300"
              />
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}
