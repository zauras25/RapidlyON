'use client';

import Link from 'next/link';
import { FormEvent, useState } from 'react';

const projectTypes = [
  'New product',
  'Website',
  'Mobile app',
  'SaaS / web app',
  'Redesign',
  'Not sure yet',
];

const projectStages = [
  'Just an idea',
  'Early planning',
  'Designing',
  'Already building',
  'Existing product',
];

export default function StartProjectPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setIsSubmitting(true);
    setSubmitted(false);
    setError('');

    const form = event.currentTarget;
    const formData = new FormData(form);

    const data = {
      name: String(formData.get('name') || '').trim(),
      email: String(formData.get('email') || '').trim(),
      company: String(formData.get('company') || '').trim(),
      projectType: String(formData.get('project-type') || ''),
      projectStage: String(formData.get('project-stage') || ''),
      message: String(formData.get('message') || '').trim(),
    };

    try {
      const response = await fetch('/api/project', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || 'Something went wrong.');
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
      {/* HERO */}
      <section className="container pt-28 pb-16 md:pt-36 md:pb-20">
        <p className="eyebrow text-violet-300">Start a project</p>

        <h1 className="display mt-5 max-w-4xl text-5xl font-semibold tracking-[-.045em] text-white md:text-7xl">
          Start with the problem.
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
          You do not need a perfect brief. Tell us what you are trying to
          build, improve, or figure out, and we will help identify the right
          next step.
        </p>
      </section>

      {/* MAIN CONTENT */}
      <section className="container pb-24 md:pb-32">
        <div className="grid gap-6 lg:grid-cols-[1.25fr_.75fr] lg:gap-8">
          {/* FORM */}
          <div className="rounded-[30px] border border-white/10 bg-white/[.02] p-6 md:p-8">
            <div className="mb-8">
              <p className="text-xs uppercase tracking-[.18em] text-zinc-600">
                Project details
              </p>

              <h2 className="display mt-3 text-2xl font-semibold text-white md:text-3xl">
                Tell us a little about what you need.
              </h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* NAME + EMAIL */}
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
                    required
                    placeholder="Your name"
                    className="mt-2 w-full rounded-xl border border-white/10 bg-white/[.025] px-4 py-3 text-sm text-white outline-none placeholder:text-zinc-700 transition focus:border-violet-400/40 focus:bg-white/[.04]"
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
                    required
                    placeholder="you@company.com"
                    className="mt-2 w-full rounded-xl border border-white/10 bg-white/[.025] px-4 py-3 text-sm text-white outline-none placeholder:text-zinc-700 transition focus:border-violet-400/40 focus:bg-white/[.04]"
                  />
                </div>
              </div>

              {/* COMPANY */}
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
                  className="mt-2 w-full rounded-xl border border-white/10 bg-white/[.025] px-4 py-3 text-sm text-white outline-none placeholder:text-zinc-700 transition focus:border-violet-400/40 focus:bg-white/[.04]"
                />
              </div>

              {/* PROJECT TYPE */}
              <fieldset>
                <legend className="text-sm font-medium text-zinc-300">
                  What are you working on?
                </legend>

                <div className="mt-3 grid gap-2 sm:grid-cols-2">
                  {projectTypes.map((type) => (
                    <label
                      key={type}
                      className="flex cursor-pointer items-center gap-3 rounded-xl border border-white/10 bg-white/[.02] px-4 py-3 text-sm text-zinc-500 transition hover:border-white/20 hover:bg-white/[.04] has-[:checked]:border-violet-400/30 has-[:checked]:bg-violet-500/[.06] has-[:checked]:text-zinc-200"
                    >
                      <input
                        type="radio"
                        name="project-type"
                        value={type}
                        required
                        className="accent-violet-500"
                      />

                      {type}
                    </label>
                  ))}
                </div>
              </fieldset>

              {/* PROJECT STAGE */}
              <fieldset>
                <legend className="text-sm font-medium text-zinc-300">
                  Where are you right now?
                </legend>

                <div className="mt-3 grid gap-2 sm:grid-cols-2">
                  {projectStages.map((stage) => (
                    <label
                      key={stage}
                      className="flex cursor-pointer items-center gap-3 rounded-xl border border-white/10 bg-white/[.02] px-4 py-3 text-sm text-zinc-500 transition hover:border-white/20 hover:bg-white/[.04] has-[:checked]:border-violet-400/30 has-[:checked]:bg-violet-500/[.06] has-[:checked]:text-zinc-200"
                    >
                      <input
                        type="radio"
                        name="project-stage"
                        value={stage}
                        required
                        className="accent-violet-500"
                      />

                      {stage}
                    </label>
                  ))}
                </div>
              </fieldset>

              {/* MESSAGE */}
              <div>
                <label
                  htmlFor="message"
                  className="text-sm font-medium text-zinc-300"
                >
                  What are you trying to solve?
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={7}
                  required
                  placeholder="Tell us about the product, problem, goal, or anything else that would help us understand the project."
                  className="mt-2 w-full resize-none rounded-xl border border-white/10 bg-white/[.025] px-4 py-3 text-sm leading-7 text-white outline-none placeholder:text-zinc-700 transition focus:border-violet-400/40 focus:bg-white/[.04]"
                />
              </div>

              {/* ERROR */}
              {error && (
                <div
                  role="alert"
                  className="rounded-xl border border-red-400/20 bg-red-500/[.06] px-4 py-3 text-sm leading-6 text-red-300"
                >
                  {error}
                </div>
              )}

              {/* SUCCESS */}
              {submitted && (
                <div
                  role="status"
                  className="rounded-xl border border-emerald-400/20 bg-emerald-500/[.06] px-4 py-3 text-sm leading-6 text-emerald-300"
                >
                  Thanks. Your project enquiry has been received.
                </div>
              )}

              {/* SUBMIT */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-violet-500 px-5 py-3.5 text-sm font-semibold text-white shadow-[0_8px_30px_rgba(139,92,246,.18)] transition hover:bg-violet-400 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSubmitting ? 'Sending...' : 'Send project enquiry'}

                {!isSubmitting && <span>→</span>}
              </button>

              <p className="text-center text-xs leading-5 text-zinc-700">
                No pressure and no commitment. This first conversation is
                simply about understanding what you need.
              </p>
            </form>
          </div>

          {/* SIDEBAR */}
          <aside className="space-y-4">
            <div className="rounded-[30px] border border-white/10 bg-white/[.02] p-7">
              <p className="eyebrow text-violet-300">What happens next</p>

              <div className="mt-7 space-y-6">
                {[
                  [
                    '01',
                    'We review',
                    'We look at your message and the problem you are trying to solve.',
                  ],
                  [
                    '02',
                    'We clarify',
                    'If needed, we ask a few questions to understand the scope.',
                  ],
                  [
                    '03',
                    'We recommend',
                    'We suggest the most useful next step for the project.',
                  ],
                ].map(([number, title, text]) => (
                  <div key={number} className="flex gap-4">
                    <span className="flex size-8 shrink-0 items-center justify-center rounded-full border border-violet-400/20 bg-violet-500/[.07] text-[10px] text-violet-300">
                      {number}
                    </span>

                    <div>
                      <h3 className="text-sm font-semibold text-zinc-200">
                        {title}
                      </h3>

                      <p className="mt-1.5 text-sm leading-6 text-zinc-500">
                        {text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[30px] border border-white/10 bg-gradient-to-br from-violet-500/[.08] to-transparent p-7">
              <p className="text-xs uppercase tracking-[.18em] text-zinc-600">
                Not sure what you need?
              </p>

              <h2 className="display mt-4 text-2xl font-semibold text-white">
                That is completely fine.
              </h2>

              <p className="mt-3 text-sm leading-7 text-zinc-500">
                You do not need to decide whether you need UX research,
                product design, or development before contacting us. We can
                figure that out together.
              </p>
            </div>

            <Link
              href="/work"
              className="group flex items-center justify-between rounded-[30px] border border-white/10 bg-white/[.02] p-7 transition hover:border-violet-400/20 hover:bg-white/[.035]"
            >
              <div>
                <p className="text-xs uppercase tracking-[.18em] text-zinc-600">
                  Before you start
                </p>

                <p className="mt-2 text-sm font-medium text-zinc-300">
                  Explore our work
                </p>
              </div>

              <span className="text-zinc-600 transition group-hover:translate-x-1 group-hover:text-white">
                →
              </span>
            </Link>
          </aside>
        </div>
      </section>
    </main>
  );
}