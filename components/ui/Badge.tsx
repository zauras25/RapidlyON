import type { ReactNode } from 'react';

type BadgeProps = {
  children: ReactNode;
  className?: string;
};

export function Badge({
  children,
  className = '',
}: BadgeProps) {
  return (
    <span
      className={[
        'inline-flex items-center gap-2',
        'rounded-full',
        'border border-white/10',
        'bg-white/[.03]',
        'px-3 py-1.5',
        'text-xs text-zinc-400',
        className,
      ].join(' ')}
    >
      {children}
    </span>
  );
}
