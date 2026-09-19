'use client';

import Link from 'next/link';
import { FormEvent, useState } from 'react';
import { useSearchParams } from 'next/navigation';

const ratingAreas = [
  {
    number: '01',
    title: 'Communication',
    description:
      'Was the project communication clear, timely, and easy to work with?',
  },
  {
    number: '02',
    title: 'Understanding',
    description:
      'Did we understand your business, users, goals, and the problem you needed to solve?',
  },
  {
    number: '03',
    title: 'Design quality',
    description:
      'How satisfied are you with the clarity, usability, and overall quality of the delivered experience?',
  },
  {
    number: '04',
    title: 'Process',
    description:
      'How was your experience with our research, strategy, design, and collaboration process?',
  },
  {
    number: '05',
    title: 'Outcome',
    description:
      'Did the final work move your product or business in the direction you needed?',
  },
];

const ratingOptions = ['1', '2', '3', '4', '5'];

export default function ClientRatingForm() {
  const searchParams = useSearchParams();
  const projectId = searchParams.get('project');

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!projectId) {
      setError('This rating link is missing a project ID.');
      return;
    }

    setIsSubmitting(true);
    setSubmitted(false);
    setError('');

    const form = event.currentTarget;
    const formData = new FormData(form);

    const data = {
      projectId,
      overallRating: Number(formData.get('overall-rating')),

      communication: Number(formData.get('rating-01')),
      understanding: Number(formData.get('rating-02')),
      designQuality: Number(formData.get('rating-03')),
      process: Number(formData.get('rating-04')),
      outcome: Number(formData.get('rating-05')),

      feedback: String(formData.get('feedback') || '').trim(),
      testimonial: String(formData.get('testimonial') || '').trim(),
      testimonialConsent: formData.get('testimonial-consent') === 'on',
    };

    if (!data.overallRating) {
      setError('Please select your overall rating.');
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch('/api/rating', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || 'Unable to submit feedback.');
      }

      setSubmitted(true);
      form.reset();
    } catch (submitError) {
      setError(
        submitError instanceof Error
          ? submitError.message
          : 'Something went wrong. Please try again.',
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <main className="min-h-screen">
      <section className="container pb-16 pt-28 md:pb-20 md:pt-36">
        <div className="max-w-4xl">
          <p className="eyebrow text-violet-300">Client feedback</p>

          <h1 className="display mt-5 text-balance text-5xl font-semibold leading-[0.98] tracking-[-0.045em] text-white sm:text-6xl md:text-7xl">
            Help us make the next experience better.
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-8 text-zinc-400 md:text-lg">
            Your feedback helps us understand what worked, what could be
            improved, and how we can create a better experience for the next
            project.
          </p>
        </div>
      </section>

      <section className="container pb-24 md:pb-32">
        <div className="grid gap-6 lg:grid-cols-[1.2fr_.8fr] lg:gap-8">
          <div className="rounded-[30px] border border-white/10 bg-white/[0.02] p-6 md:p-8">
            <div className="mb-8">
              <p className="text-xs uppercase tracking-[0.18em] text-zinc-600">
                Your experience
              </p>

              <h2 className="display mt-3 text-2xl font-semibold text-white md:text-3xl">
                Tell us how we did.
              </h2>
            </div>

            {!projectId && (
              <div className="mb-6 rounded-xl border border-amber-400/20 bg-amber-500/[0.06] px-4 py-3 text-sm leading-6 text-amber-300">
                This page needs a valid project link to save your feedback.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="text-sm font-medium text-zinc-300"
                  >
                    Your name
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your name"
                    className="mt-2 w-full rounded-xl border border-white/10 bg-white/[0.025] px-4 py-3 text-sm text-white outline-none transition placeholder:text-zinc-700 focus:border-violet-400/40 focus:bg-white/[0.04]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="text-sm font-medium text-zinc-300"
                  >
                    Email
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@company.com"
                    className="mt-2 w-full rounded-xl border border-white/10 bg-white/[0.025] px-4 py-3 text-sm text-white outline-none transition placeholder:text-zinc-700 focus:border-violet-400/40 focus:bg-white/[0.04]"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="company"
                  className="text-sm font-medium text-zinc-300"
                >
                  Company or project
                </label>

                <input
                  id="company"
                  name="company"
                  type="text"
                  placeholder="Company or project name"
                  className="mt-2 w-full rounded-xl border border-white/10 bg-white/[0.025] px-4 py-3 text-sm text-white outline-none transition placeholder:text-zinc-700 focus:border-violet-400/40 focus:bg-white/[0.04]"
                />
              </div>

              <fieldset>
                <legend className="text-sm font-medium text-zinc-300">
                  How would you rate your overall experience?
                </legend>

                <div className="mt-4 grid grid-cols-5 gap-2">
                  {ratingOptions.map((rating) => (
                    <label
                      key={rating}
                      className="group flex cursor-pointer flex-col items-center rounded-xl border border-white/10 bg-white/[0.02] px-3 py-4 transition hover:border-violet-400/25 hover:bg-violet-500/[0.04] has-[:checked]:border-violet-400/40 has-[:checked]:bg-violet-500/[0.08]"
                    >
                      <input
                        type="radio"
                        name="overall-rating"
                        value={rating}
                        required
                        className="sr-only"
                      />

                      <span className="text-lg font-semibold text-zinc-300 group-has-[:checked]:text-violet-200">
                        {rating}
                      </span>

                      <span className="mt-1 text-[9px] uppercase tracking-[0.12em] text-zinc-700">
                        {rating === '1'
                          ? 'Poor'
                          : rating === '2'
                            ? 'Fair'
                            : rating === '3'
                              ? 'Good'
                              : rating === '4'
                                ? 'Great'
                                : 'Excellent'}
                      </span>
                    </label>
                  ))}
                </div>
              </fieldset>

              <div>
                <div className="mb-5">
                  <p className="text-sm font-medium text-zinc-300">
                    Rate specific parts of the experience
                  </p>

                  <p className="mt-1.5 text-xs leading-5 text-zinc-600">
                    Select a rating from 1 to 5 for each area.
                  </p>
                </div>

                <div className="space-y-3">
                  {ratingAreas.map((area) => (
                    <div
                      key={area.number}
                      className="rounded-2xl border border-white/10 bg-white/[0.02] p-4 sm:p-5"
                    >
                      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                        <div className="flex gap-3">
                          <span className="flex size-8 shrink-0 items-center justify-center rounded-full border border-violet-400/20 bg-violet-500/[0.06] text-[10px] text-violet-300">
                            {area.number}
                          </span>

                          <div>
                            <h3 className="text-sm font-semibold text-zinc-200">
                              {area.title}
                            </h3>

                            <p className="mt-1 text-xs leading-5 text-zinc-600">
                              {area.description}
                            </p>
                          </div>
                        </div>

                        <div className="flex shrink-0 gap-1.5">
                          {ratingOptions.map((rating) => (
                            <label
                              key={`${area.number}-${rating}`}
                              className="flex cursor-pointer"
                            >
                              <input
                                type="radio"
                                name={`rating-${area.number}`}
                                value={rating}
                                required
                                className="peer sr-only"
                              />

                              <span className="flex size-8 items-center justify-center rounded-lg border border-white/10 bg-white/[0.02] text-[11px] text-zinc-600 transition hover:border-violet-400/25 hover:text-zinc-300 peer-checked:border-violet-400/40 peer-checked:bg-violet-500/10 peer-checked:text-violet-200">
                                {rating}
                              </span>
                            </label>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <label
                  htmlFor="feedback"
                  className="text-sm font-medium text-zinc-300"
                >
                  What could we improve?
                </label>

                <textarea
                  id="feedback"
                  name="feedback"
                  rows={5}
                  placeholder="Tell us what worked well, what was difficult, or what you would change."
                  className="mt-2 w-full resize-none rounded-xl border border-white/10 bg-white/[0.025] px-4 py-3 text-sm leading-7 text-white outline-none transition placeholder:text-zinc-700 focus:border-violet-400/40 focus:bg-white/[0.04]"
                />
              </div>

              <div>
                <label
                  htmlFor="testimonial"
                  className="text-sm font-medium text-zinc-300"
                >
                  Anything you would like us to share?
                </label>

                <textarea
                  id="testimonial"
                  name="testimonial"
                  rows={4}
                  placeholder="Optional: a short comment about your experience that we could use as a testimonial."
                  className="mt-2 w-full resize-none rounded-xl border border-white/10 bg-white/[0.025] px-4 py-3 text-sm leading-7 text-white outline-none transition placeholder:text-zinc-700 focus:border-violet-400/40 focus:bg-white/[0.04]"
                />
              </div>

              <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-white/10 bg-white/[0.02] p-4">
                <input
                  type="checkbox"
                  name="testimonial-consent"
                  className="mt-0.5 size-4 accent-violet-500"
                />

                <span className="text-xs leading-5 text-zinc-500">
                  You may contact me about my feedback and, if I have provided
                  a testimonial, ask for permission before publishing it.
                </span>
              </label>

              {error && (
                <div
                  role="alert"
                  className="rounded-xl border border-red-400/20 bg-red-500/[0.06] px-4 py-3 text-sm leading-6 text-red-300"
                >
                  {error}
                </div>
              )}

              {submitted && (
                <div
                  role="status"
                  className="rounded-xl border border-emerald-400/20 bg-emerald-500/[0.06] px-4 py-3 text-sm leading-6 text-emerald-300"
                >
                  Thank you. Your feedback has been submitted successfully.
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting || !projectId}
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-violet-500 px-5 py-3.5 text-sm font-semibold text-white shadow-[0_8px_30px_rgba(139,92,246,.18)] transition hover:bg-violet-400 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSubmitting ? 'Submitting...' : 'Submit feedback'}
                {!isSubmitting && <span>?</span>}
              </button>

              <p className="text-center text-xs leading-5 text-zinc-700">
                Thank you for taking a few minutes to help us improve.
              </p>
            </form>
          </div>

          <aside className="space-y-4">
            <div className="rounded-[30px] border border-white/10 bg-white/[0.02] p-7">
              <p className="eyebrow text-violet-300">Why feedback matters</p>

              <h2 className="display mt-4 text-2xl font-semibold text-white">
                Better work starts with better understanding.
              </h2>

              <p className="mt-4 text-sm leading-7 text-zinc-500">
                Every project teaches us something. Honest feedback helps us
                improve our process, communication, and the experiences we
                create.
              </p>

              <div className="mt-7 space-y-4">
                {[
                  ['01', 'Improve the process'],
                  ['02', 'Understand what worked'],
                  ['03', 'Find areas to improve'],
                ].map(([number, text]) => (
                  <div
                    key={number}
                    className="flex items-center gap-3 border-t border-white/[0.06] pt-4"
                  >
                    <span className="text-[10px] text-violet-300">
                      {number}
                    </span>

                    <span className="text-sm text-zinc-400">{text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[30px] border border-white/10 bg-gradient-to-br from-violet-500/[0.08] to-transparent p-7">
              <p className="text-xs uppercase tracking-[0.18em] text-zinc-600">
                Something went wrong?
              </p>

              <h2 className="display mt-4 text-2xl font-semibold text-white">
                Prefer to talk directly?
              </h2>

              <p className="mt-3 text-sm leading-7 text-zinc-500">
                If your feedback needs a conversation, you can always tell us
                directly what happened and what you need.
              </p>

              <Link
                href="/start-a-project"
                className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-violet-300 transition hover:text-violet-200"
              >
                Contact us
                <span>?</span>
              </Link>
            </div>

            <Link
              href="/work"
              className="group flex items-center justify-between rounded-[30px] border border-white/10 bg-white/[0.02] p-7 transition hover:border-violet-400/20 hover:bg-white/[0.035]"
            >
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-zinc-600">
                  Explore
                </p>

                <p className="mt-2 text-sm font-medium text-zinc-300">
                  See our work
                </p>
              </div>

              <span className="text-zinc-600 transition group-hover:translate-x-1 group-hover:text-white">
                ?
              </span>
            </Link>
          </aside>
        </div>
      </section>

      <section className="container pb-12 md:pb-16">
        <div className="relative overflow-hidden rounded-[34px] border border-white/10 bg-gradient-to-br from-violet-600/20 via-blue-600/[0.08] to-transparent px-7 py-12 md:px-12 md:py-14">
          <div className="absolute -right-24 -top-24 size-72 rounded-full bg-violet-500/10 blur-3xl" />

          <div className="relative max-w-3xl">
            <p className="eyebrow text-violet-200">Keep improving</p>

            <h2 className="display mt-3 text-4xl font-semibold tracking-[-0.035em] text-white md:text-5xl">
              Your feedback becomes part of how we work.
            </h2>

            <p className="mt-5 max-w-2xl leading-7 text-zinc-400">
              We care about the final interface, but we also care about the
              experience of getting there.
            </p>

            <Link
              href="/"
              className="mt-7 inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-5 py-3.5 text-sm font-semibold text-zinc-200 transition hover:border-white/20 hover:bg-white/[0.07] hover:text-white"
            >
              Back to home
              <span>?</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

