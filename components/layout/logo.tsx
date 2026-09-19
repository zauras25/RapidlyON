import Link from "next/link";

export function Logo() {
  return (
    <Link
      href="/"
      aria-label="RapidlyON home"
      className="inline-flex items-center gap-2 text-xl font-bold tracking-[-0.04em] text-neutral-950"
    >
      <span
        aria-hidden="true"
        className="flex h-8 w-8 items-center justify-center rounded-lg bg-neutral-950 text-sm text-white"
      >
        R
      </span>

      <span>RapidlyON</span>
    </Link>
  );
}
