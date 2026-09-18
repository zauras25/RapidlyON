import type { ReactNode } from 'react';

type TextProps = {
  children: ReactNode;
  size?: 'lg' | 'md' | 'sm';
  muted?: boolean;
  className?: string;
};

export function Text({
  children,
  size = 'md',
  muted = false,
  className = '',
}: TextProps) {
  const sizes = {
    lg: 'text-lg leading-8',
    md: 'text-base leading-7',
    sm: 'text-sm leading-6',
  };

  return (
    <p
      className={[
        sizes[size],
        muted ? 'text-zinc-500' : 'text-zinc-300',
        className,
      ].join(' ')}
    >
      {children}
    </p>
  );
}
