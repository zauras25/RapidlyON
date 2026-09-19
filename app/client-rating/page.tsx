import { Suspense } from 'react';
import ClientRatingForm from '@/components/ClientRatingForm';

function RatingPageFallback() {
  return (
    <main className="min-h-screen">
      <section className="container pb-16 pt-28 md:pb-20 md:pt-36">
        <div className="max-w-4xl">
          <p className="eyebrow text-violet-300">Client feedback</p>
          <h1 className="display mt-5 text-balance text-5xl font-semibold leading-[0.98] tracking-[-0.045em] text-white sm:text-6xl md:text-7xl">
            Help us make the next experience better.
          </h1>
          <p className="mt-7 max-w-2xl text-base leading-8 text-zinc-400 md:text-lg">
            Your feedback helps us understand what worked, what could be improved, and how we can create a better experience for the next project.
          </p>
        </div>
      </section>

      <section className="container pb-24 md:pb-32">
        <div className="rounded-[30px] border border-white/10 bg-white/[0.02] p-8 text-sm text-zinc-500">
          Loading feedback form...
        </div>
      </section>
    </main>
  );
}

export default function ClientRatingPage() {
  return (
    <Suspense fallback={<RatingPageFallback />}>
      <ClientRatingForm />
    </Suspense>
  );
}
