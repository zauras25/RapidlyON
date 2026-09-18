import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import type { ReactNode } from 'react';

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
};

export function Button({
  href,
  children,
  variant = 'primary',
  size = 'md',
  className = '',
}: ButtonProps) {
  const variants = {
    primary:
      'bg-white text-black hover:bg-zinc-200 border border-white',
    secondary:
      'bg-transparent text-white border border-white/15 hover:bg-white/[.06]',
    ghost:
      'bg-transparent text-zinc-300 hover:text-white',
  };

  const sizes = {
    sm: 'px-4 py-2 text-xs rounded-lg',
    md: 'px-5 py-3 text-sm rounded-xl',
    lg: 'px-6 py-3.5 text-sm rounded-xl',
  };

  return (
    <Link
      href={href}
      className={[
        'inline-flex items-center justify-center gap-2',
        'font-semibold',
        'transition-all duration-200',
        'focus:outline-none focus-visible:ring-2',
        'focus-visible:ring-violet-400',
        variants[variant],
        sizes[size],
        className,
      ].join(' ')}
    >
      {children}

      <ArrowUpRight
        size={16}
        aria-hidden="true"
      />
    </Link>
  );
}
