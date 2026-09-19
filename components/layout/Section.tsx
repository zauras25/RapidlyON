import type { ReactNode } from 'react';

type SectionProps = {
  children: ReactNode;
  className?: string;
  id?: string;
  size?: 'sm' | 'default' | 'lg' | 'none';
};

export function Section({
  children,
  className = '',
  id,
  size = 'default',
}: SectionProps) {
  const spacing = {
    sm: 'section-sm',
    default: 'section',
    lg: 'section-lg',
    none: '',
  };

  return (
    <section
      id={id}
      className={`${spacing[size]} ${className}`}
    >
      {children}
    </section>
  );
}
