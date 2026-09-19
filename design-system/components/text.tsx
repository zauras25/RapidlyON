import type { HTMLAttributes } from "react";

type TextProps = HTMLAttributes<HTMLParagraphElement> & {
  size?: "large" | "body" | "small";
  muted?: boolean;
};

const sizes = {
  large: "text-xl leading-[1.55]",
  body: "text-base leading-[1.6]",
  small: "text-sm leading-[1.5]",
};

export function Text({
  size = "body",
  muted = false,
  className = "",
  children,
  ...props
}: TextProps) {
  return (
    <p
      className={[
        sizes[size],
        muted ? "text-neutral-500" : "text-neutral-700",
        className,
      ].join(" ")}
      {...props}
    >
      {children}
    </p>
  );
}
