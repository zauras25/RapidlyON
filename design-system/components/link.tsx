import type { AnchorHTMLAttributes } from "react";

type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  underline?: boolean;
};

export function Link({
  underline = false,
  className = "",
  children,
  ...props
}: LinkProps) {
  return (
    <a
      className={[
        "font-medium text-neutral-950",
        "transition-colors duration-200",
        "hover:text-neutral-600",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2",
        underline ? "underline underline-offset-4" : "",
        className,
      ].join(" ")}
      {...props}
    >
      {children}
    </a>
  );
}
