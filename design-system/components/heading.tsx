import type { ElementType, HTMLAttributes } from "react";

type HeadingProps = HTMLAttributes<HTMLHeadingElement> & {
  as?: "h1" | "h2" | "h3" | "h4";
  size?: "display" | "h1" | "h2" | "h3" | "h4";
};

const sizes = {
  display:
    "text-[clamp(3.5rem,9vw,8rem)] leading-[0.92] tracking-[-0.06em] font-bold",
  h1: "text-[clamp(2.75rem,7vw,6rem)] leading-[0.98] tracking-[-0.05em] font-bold",
  h2: "text-[clamp(2.25rem,5vw,4.5rem)] leading-none tracking-[-0.04em] font-bold",
  h3: "text-[clamp(1.5rem,3vw,2.5rem)] leading-[1.1] tracking-[-0.025em] font-semibold",
  h4: "text-xl leading-tight tracking-[-0.015em] font-semibold",
};

export function Heading({
  as,
  size = "h2",
  className = "",
  children,
  ...props
}: HeadingProps) {
  const Component = (as ?? size) as ElementType;

  return (
    <Component
      className={[sizes[size], "text-neutral-950", className].join(" ")}
      {...props}
    >
      {children}
    </Component>
  );
}
