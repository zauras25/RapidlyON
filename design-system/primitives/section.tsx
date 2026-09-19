import type { HTMLAttributes } from "react";

type SectionProps = HTMLAttributes<HTMLElement> & {
  spacing?: "sm" | "md" | "lg" | "xl";
};

const spacingStyles = {
  sm: "py-12 sm:py-16",
  md: "py-16 sm:py-24",
  lg: "py-20 sm:py-32",
  xl: "py-24 sm:py-40",
} as const;

export function Section({
  spacing = "lg",
  className = "",
  children,
  ...props
}: SectionProps) {
  return (
    <section
      className={`${spacingStyles[spacing]} ${className}`}
      {...props}
    >
      {children}
    </section>
  );
}
