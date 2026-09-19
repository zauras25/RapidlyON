import type { ReactNode } from 'react';

type CardProps = {
  children: ReactNode;
  variant?: 'default' | 'glass' | 'gradient';
  className?: string;
};

export function Card({
  children,
  variant = 'default',
  className = '',
}: CardProps) {
  const variants = {
    default:
      'bg-white/[.025] border border-white/10',

    glass:
      'glass',

    gradient:
      'border border-white/10 bg-gradient-to-br from-violet-500/10 via-white/[.025] to-transparent',
  };

  return (
    <div
      className={[
        'rounded-[28px]',
        'transition-colors duration-200',
        variants[variant],
        className,
      ].join(' ')}
    >
      {children}
    </div>
  );
}
