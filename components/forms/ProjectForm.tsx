'use client';

import { FormEvent, useState } from 'react';

const projectTypes = [
'Website / Web App',
'Mobile App',
'SaaS Product',
'E-commerce',
'UX Research',
'UX/UI Design',
'Website Redesign',
'Other',
];

const projectStages = [
'Just an idea',
'Early planning',
'Existing product',
'Redesign',
'Ready for development',
];

type FormData = {
name: string;
email: string;
company: string;
projectType: string;
projectStage: string;
message: string;
};

const initialForm: FormData = {
name: '',
email: '',
company: '',
projectType: '',
projectStage: '',
message: '',
};

export default function ProjectForm() {
const [form, setForm] = useState<FormData>(initialForm);
const [isSubmitting, setIsSubmitting] = useState(false);
const [successMessage, setSuccessMessage] = useState('');
const [errorMessage, setErrorMessage] = useState('');

function handleChange(
event: React.ChangeEvent<
HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
>,
) {
const { name, value } = event.target;

setForm((current) => ({
  ...current,
  [name]: value,
}));

setErrorMessage('');
setSuccessMessage('');


}

async function handleSubmit(event: FormEvent<HTMLFormElement>) {
event.preventDefault();

setIsSubmitting(true);
setErrorMessage('');
setSuccessMessage('');

try {
  const response = await fetch('/api/project', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(form),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(
      data?.message || 'Unable to submit your project.',
    );
  }

  setSuccessMessage(
    'Thanks. Your project details have been received. We will get back to you soon.',
  );

  setForm(initialForm);
} catch (error) {
  setErrorMessage(
    error instanceof Error
      ? error.message
      : 'Something went wrong. Please try again.',
  );
} finally {
  setIsSubmitting(false);
}


}

return (
<form onSubmit={handleSubmit} className="space-y-8">
<div className="grid gap-5 md:grid-cols-2">
{/* NAME /}
<div>
<label htmlFor="name" className="mb-2.5 block text-sm font-medium text-zinc-200" >
Your name <span className="text-violet-400"></span>
</label>

      <input
        id="name"
        name="name"
        type="text"
        value={form.name}
        onChange={handleChange}
        placeholder="Muhammad Zohaib"
        required
        autoComplete="name"
        className="w-full rounded-xl border border-white/10 bg-white/[0.025] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-zinc-700 focus:border-violet-400/40 focus:bg-white/[0.04] focus:ring-2 focus:ring-violet-500/10"
      />
    </div>

    {/* EMAIL */}
    <div>
      <label
        htmlFor="email"
        className="mb-2.5 block text-sm font-medium text-zinc-200"
      >
        Email address <span className="text-violet-400">*</span>
      </label>

      <input
        id="email"
        name="email"
        type="email"
        value={form.email}
        onChange={handleChange}
        placeholder="you@example.com"
        required
        autoComplete="email"
        className="w-full rounded-xl border border-white/10 bg-white/[0.025] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-zinc-700 focus:border-violet-400/40 focus:bg-white/[0.04] focus:ring-2 focus:ring-violet-500/10"
      />
    </div>

    {/* COMPANY */}
    <div>
      <label
        htmlFor="company"
        className="mb-2.5 block text-sm font-medium text-zinc-200"
      >
        Company
        <span className="ml-1.5 text-xs font-normal text-zinc-600">
          Optional
        </span>
      </label>

      <input
        id="company"
        name="company"
        type="text"
        value={form.company}
        onChange={handleChange}
        placeholder="Company or product name"
        autoComplete="organization"
        className="w-full rounded-xl border border-white/10 bg-white/[0.025] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-zinc-700 focus:border-violet-400/40 focus:bg-white/[0.04] focus:ring-2 focus:ring-violet-500/10"
      />
    </div>

    {/* PROJECT TYPE */}
    <div>
      <label
        htmlFor="projectType"
        className="mb-2.5 block text-sm font-medium text-zinc-200"
      >
        What do you need? <span className="text-violet-400">*</span>
      </label>

      <div className="relative">
        <select
          id="projectType"
          name="projectType"
          value={form.projectType}
          onChange={handleChange}
          required
          className="w-full appearance-none rounded-xl border border-white/10 bg-white/[0.025] px-4 py-3.5 pr-11 text-sm text-white outline-none transition focus:border-violet-400/40 focus:bg-white/[0.04] focus:ring-2 focus:ring-violet-500/10"
        >
          <option value="" disabled className="bg-[#101016] text-zinc-500">
            Select project type
          </option>

          {projectTypes.map((type) => (
            <option
              key={type}
              value={type}
              className="bg-[#101016] text-white"
            >
              {type}
            </option>
          ))}
        </select>

        <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-xs text-zinc-600">
          ↓
        </span>
      </div>
    </div>
  </div>

  {/* PROJECT STAGE */}
  <div>
    <label
      htmlFor="projectStage"
      className="mb-2.5 block text-sm font-medium text-zinc-200"
    >
      Where are you with the project?{' '}
      <span className="text-violet-400">*</span>
    </label>

    <div className="relative">
      <select
        id="projectStage"
        name="projectStage"
        value={form.projectStage}
        onChange={handleChange}
        required
        className="w-full appearance-none rounded-xl border border-white/10 bg-white/[0.025] px-4 py-3.5 pr-11 text-sm text-white outline-none transition focus:border-violet-400/40 focus:bg-white/[0.04] focus:ring-2 focus:ring-violet-500/10"
      >
        <option value="" disabled className="bg-[#101016] text-zinc-500">
          Select project stage
        </option>

        {projectStages.map((stage) => (
          <option
            key={stage}
            value={stage}
            className="bg-[#101016] text-white"
          >
            {stage}
          </option>
        ))}
      </select>

      <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-xs text-zinc-600">
        ↓
      </span>
    </div>
  </div>

  {/* MESSAGE */}
  <div>
    <div className="mb-2.5 flex items-center justify-between gap-4">
      <label
        htmlFor="message"
        className="block text-sm font-medium text-zinc-200"
      >
        Tell us about the project{' '}
        <span className="text-violet-400">*</span>
      </label>

      <span className="text-xs text-zinc-700">
        {form.message.length}/1500
      </span>
    </div>

    <textarea
      id="message"
      name="message"
      value={form.message}
      onChange={handleChange}
      placeholder="What are you building, what problem are you trying to solve, and where do you need help?"
      required
      maxLength={1500}
      rows={7}
      className="w-full resize-y rounded-xl border border-white/10 bg-white/[0.025] px-4 py-4 text-sm leading-7 text-white outline-none transition placeholder:text-zinc-700 focus:border-violet-400/40 focus:bg-white/[0.04] focus:ring-2 focus:ring-violet-500/10"
    />
  </div>

  {/* STATUS */}
  {successMessage && (
    <div className="rounded-xl border border-emerald-400/15 bg-emerald-400/[0.05] px-4 py-3.5">
      <div className="flex items-start gap-3">
        <span className="mt-0.5 text-emerald-300">✓</span>

        <p className="text-sm leading-6 text-emerald-200/80">
          {successMessage}
        </p>
      </div>
    </div>
  )}

  {errorMessage && (
    <div className="rounded-xl border border-red-400/15 bg-red-400/[0.05] px-4 py-3.5">
      <div className="flex items-start gap-3">
        <span className="mt-0.5 text-red-300">!</span>

        <p className="text-sm leading-6 text-red-200/80">
          {errorMessage}
        </p>
      </div>
    </div>
  )}

  {/* SUBMIT */}
  <div className="flex flex-col gap-4 border-t border-white/[0.06] pt-6 sm:flex-row sm:items-center sm:justify-between">
    <p className="max-w-sm text-xs leading-5 text-zinc-600">
      We will review your project details and use them to understand the
      problem before discussing the next step.
    </p>

    <button
      type="submit"
      disabled={isSubmitting}
      className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-violet-600 px-6 py-3.5 text-sm font-semibold text-white shadow-[0_8px_30px_rgba(139,92,246,.22)] transition duration-300 hover:bg-violet-500 hover:shadow-[0_10px_34px_rgba(139,92,246,.3)] disabled:cursor-not-allowed disabled:opacity-60"
    >
      {isSubmitting ? (
        <>
          <span className="size-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
          Sending...
        </>
      ) : (
        <>
          Send project details
          <span>→</span>
        </>
      )}
    </button>
  </div>
</form>


);
}