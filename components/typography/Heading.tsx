import type { ReactNode } from 'react';

type HeadingProps = {
  children: ReactNode;
  as?: 'h1' | 'h2' | 'h3' | 'h4';
  size?: 'xl' | 'lg' | 'md' | 'sm';
  className?: string;
};

export function Heading({
  children,
  as: Tag = 'h2',
  size = 'lg',
  className = '',
}: HeadingProps) {
  const sizes = {
    xl: 'text-5xl md:text-7xl',
    lg: 'text-4xl md:text-5xl',
    md: 'text-2xl md:text-3xl',
    sm: 'text-xl md:text-2xl',
  };

  return (
    <Tag
      className={[
        'display',
        'font-semibold',
        'leading-[.95]',
        sizes[size],
        className,
      ].join(' ')}
    >
      {children}
    </Tag>
  );
}
