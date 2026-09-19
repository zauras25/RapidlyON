import type { HTMLAttributes } from "react";

type StackProps = HTMLAttributes<HTMLDivElement> & {
  gap?: "sm" | "md" | "lg" | "xl";
};

const gaps = {
  sm: "gap-2",
  md: "gap-4",
  lg: "gap-8",
  xl: "gap-12",
} as const;

export function Stack({
  gap = "md",
  className = "",
  children,
  ...props
}: StackProps) {
  return (
    <div
      className={`flex flex-col ${gaps[gap]} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
