import { Card } from './Card';

type StatCardProps = {
  value: string;
  label: string;
  description?: string;
};

export function StatCard({
  value,
  label,
  description,
}: StatCardProps) {
  return (
    <Card
      variant="glass"
      className="p-6"
    >
      <div className="display text-3xl font-semibold">
        {value}
      </div>

      <div className="mt-2 text-sm font-medium text-zinc-300">
        {label}
      </div>

      {description && (
        <p className="mt-2 text-sm leading-6 text-zinc-600">
          {description}
        </p>
      )}
    </Card>
  );
}
