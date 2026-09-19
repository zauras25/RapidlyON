import type { TextareaHTMLAttributes } from "react";

export function Textarea({
  className = "",
  ...props
}: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      className={[
        "min-h-32 w-full resize-y rounded-xl border border-neutral-300 bg-white px-4 py-3",
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
