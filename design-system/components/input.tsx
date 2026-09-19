import type { InputHTMLAttributes } from "react";

export function Input({
  className = "",
  ...props
}: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={[
        "min-h-12 w-full rounded-xl border border-neutral-300 bg-white px-4",
        "text-neutral-950 placeholder:text-neutral-400",
        "outline-none transition-colors",
        "focus:border-neutral-950 focus:ring-2 focus:ring-neutral-950/10",
        "disabled:cursor-not-allowed disabled:bg-neutral-100",
        className,
      ].join(" ")}
      {...props}
    />
  );
}
