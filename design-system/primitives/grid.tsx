import type { HTMLAttributes } from "react";

type GridProps = HTMLAttributes<HTMLDivElement> & {
  columns?: 1 | 2 | 3 | 4;
};

const columns = {
  1: "grid-cols-1",
  2: "grid-cols-1 md:grid-cols-2",
  3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
  4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
} as const;

export function Grid({
  columns: columnCount = 3,
  className = "",
  children,
  ...props
}: GridProps) {
  return (
    <div
      className={`grid ${columns[columnCount]} gap-6 lg:gap-8 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
