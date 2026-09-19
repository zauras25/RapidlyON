import type { ReactNode } from 'react';
import { ArrowRight } from 'lucide-react';
import { Card } from './Card';

type ProcessCardProps = {
  number: string;
  title: string;
  description: string;
  children?: ReactNode;
};

export function ProcessCard({
  number,
  title,
  description,
  children,
}: ProcessCardProps) {
  return (
    <Card
      variant="glass"
      className="group p-6"
    >
      <div className="flex items-start justify-between gap-6">
        <span className="font-mono text-sm text-violet-300">
          {number}
        </span>

        <ArrowRight
          size={18}
          className="text-zinc-700 transition duration-200 group-hover:translate-x-1 group-hover:text-violet-300"
        />
      </div>

      <h3 className="display mt-10 text-2xl font-semibold">
        {title}
      </h3>

      <p className="mt-3 leading-7 text-zinc-500">
        {description}
      </p>

      {children && (
        <div className="mt-6">
          {children}
        </div>
      )}
    </Card>
  );
}
