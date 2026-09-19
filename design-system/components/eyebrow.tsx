import type { HTMLAttributes } from "react";

export function Eyebrow({
  className = "",
  children,
  ...props
}: HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={[
        "text-xs font-semibold uppercase tracking-[0.08em]",
        "text-neutral-500",
        className,
      ].join(" ")}
      {...props}
    >
      {children}
    </p>
  );
}
