import type { ReactNode } from 'react';

type DisplayProps = {
  children: ReactNode;
  className?: string;
};

export function Display({
  children,
  className = '',
}: DisplayProps) {
  return (
    <h1
      className={[
        'display',
        'font-semibold',
        'leading-[.91]',
        'text-5xl sm:text-6xl md:text-[5.5rem]',
        className,
      ].join(' ')}
    >
      {children}
    </h1>
  );
}
