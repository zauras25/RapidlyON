"use client";

import { FormEvent, useState } from "react";

type FormState = {
  name: string;
  email: string;
  company: string;
  projectType: string;
  stage: string;
  services: string[];
  budget: string;
  timeline: string;
  details: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  company: "",
  projectType: "",
  stage: "",
  services: [],
  budget: "",
  timeline: "",
  details: "",
};

const serviceOptions = [
  "Product Strategy",
  "UX / UI Design",
  "Web Development",
  "Product Development",
];

const inputClass =
  "mt-2 w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm text-neutral-950 outline-none transition focus:border-neutral-950";

const labelClass =
  "text-sm font-medium text-neutral-900";

export function ProjectForm() {
  const [form, setForm] = useState<FormState>(
    initialState,
  );

  const [submitted, setSubmitted] =
    useState(false);

  const [isSubmitting, setIsSubmitting] =
    useState(false);

  const [error, setError] = useState("");

  function updateField(
    field: keyof FormState,
    value: string,
  ) {
    setForm((current) => ({
      ...current,
      [field]: value,
    }));
  }

  function toggleService(service: string) {
    setForm((current) => {
      const exists =
        current.services.includes(service);

      return {
        ...current,
        services: exists
          ? current.services.filter(
              (item) => item !== service,
            )
          : [...current.services, service],
      };
    });
  }

  async function handleSubmit(
    event: FormEvent<HTMLFormElement>,
  ) {
    event.preventDefault();

    if (form.services.length === 0) {
      setError(
        "Please select at least one service.",
      );
      return;
    }

    setIsSubmitting(true);
    setError("");

    try {
      const response = await fetch(
        "/api/project-enquiries",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        },
      );

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result?.error ||
            "Unable to submit enquiry.",
        );
      }

      setSubmitted(true);
    } catch (submitError) {
      setError(
        submitError instanceof Error
          ? submitError.message
          : "Something went wrong. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-8 sm:p-10">
        <p className="text-sm font-medium text-neutral-400">
          Project enquiry
        </p>

        <h2 className="mt-4 text-2xl font-semibold tracking-tight text-neutral-950">
          Thanks — we&apos;ve got the details.
        </h2>

        <p className="mt-4 max-w-xl text-sm leading-6 text-neutral-500">
          Your project information has been
          successfully submitted. We&apos;ll review your
          requirements and continue the discussion around
          scope, approach, timeline and investment.
        </p>

        <button
          type="button"
          onClick={() => {
            setForm(initialState);
            setSubmitted(false);
            setError("");
          }}
          className="mt-7 inline-flex min-h-11 items-center justify-center rounded-full bg-neutral-950 px-5 text-sm font-medium text-white transition hover:bg-neutral-800"
        >
          Start another enquiry
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-10"
    >
      <div>
        <label
          htmlFor="name"
          className={labelClass}
        >
          Your name
        </label>

        <input
          id="name"
          name="name"
          required
          value={form.name}
          onChange={(event) =>
            updateField("name", event.target.value)
          }
          placeholder="Your name"
          className={inputClass}
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className={labelClass}
        >
          Email address
        </label>

        <input
          id="email"
          name="email"
          type="email"
          required
          value={form.email}
          onChange={(event) =>
            updateField("email", event.target.value)
          }
          placeholder="you@company.com"
          className={inputClass}
        />
      </div>

      <div>
        <label
          htmlFor="company"
          className={labelClass}
        >
          Company
          <span className="ml-1 font-normal text-neutral-400">
            Optional
          </span>
        </label>

        <input
          id="company"
          name="company"
          value={form.company}
          onChange={(event) =>
            updateField(
              "company",
              event.target.value,
            )
          }
          placeholder="Company name"
          className={inputClass}
        />
      </div>

      <div>
        <label
          htmlFor="projectType"
          className={labelClass}
        >
          What are you building?
        </label>

        <select
          id="projectType"
          name="projectType"
          required
          value={form.projectType}
          onChange={(event) =>
            updateField(
              "projectType",
              event.target.value,
            )
          }
          className={inputClass}
        >
          <option value="">
            Select project type
          </option>
          <option value="website">
            Website
          </option>
          <option value="digital-product">
            Digital Product
          </option>
          <option value="saas">
            SaaS / Web App
          </option>
          <option value="mobile-app">
            Mobile App
          </option>
          <option value="existing-product">
            Existing Product
          </option>
          <option value="other">
            Other
          </option>
        </select>
      </div>

      <div>
        <p className={labelClass}>
          Where are you in the process?
        </p>

        <div className="mt-3 grid gap-3 sm:grid-cols-2">
          {[
            ["idea", "Just an idea"],
            ["planning", "Planning"],
            ["design", "Design started"],
            ["development", "Development started"],
          ].map(([value, label]) => (
            <label
              key={value}
              className="flex cursor-pointer items-center gap-3 rounded-xl border border-neutral-200 p-4 text-sm hover:border-neutral-400"
            >
              <input
                type="radio"
                name="stage"
                value={value}
                required
                checked={form.stage === value}
                onChange={(event) =>
                  updateField(
                    "stage",
                    event.target.value,
                  )
                }
              />

              <span>{label}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <p className={labelClass}>
          What do you need help with?
        </p>

        <div className="mt-3 grid gap-3 sm:grid-cols-2">
          {serviceOptions.map((service) => {
            const selected =
              form.services.includes(service);

            return (
              <label
                key={service}
                className={`flex cursor-pointer items-center gap-3 rounded-xl border p-4 text-sm transition ${
                  selected
                    ? "border-neutral-950 bg-neutral-50"
                    : "border-neutral-200 hover:border-neutral-400"
                }`}
              >
                <input
                  type="checkbox"
                  checked={selected}
                  onChange={() =>
                    toggleService(service)
                  }
                />

                <span>{service}</span>
              </label>
            );
          })}
        </div>
      </div>

      <div>
        <label
          htmlFor="budget"
          className={labelClass}
        >
          Do you have a budget range?
        </label>

        <select
          id="budget"
          name="budget"
          value={form.budget}
          onChange={(event) =>
            updateField(
              "budget",
              event.target.value,
            )
          }
          className={inputClass}
        >
          <option value="">
            Prefer to discuss
          </option>
          <option value="under-5k">
            Under $5k
          </option>
          <option value="5k-10k">
            $5k — $10k
          </option>
          <option value="10k-25k">
            $10k — $25k
          </option>
          <option value="25k-plus">
            $25k+
          </option>
        </select>

        <p className="mt-2 text-xs leading-5 text-neutral-400">
          This is only an initial indication. Final
          pricing will depend on the project scope and
          requirements.
        </p>
      </div>

      <div>
        <label
          htmlFor="timeline"
          className={labelClass}
        >
          Desired timeline
        </label>

        <select
          id="timeline"
          name="timeline"
          required
          value={form.timeline}
          onChange={(event) =>
            updateField(
              "timeline",
              event.target.value,
            )
          }
          className={inputClass}
        >
          <option value="">
            Select timeline
          </option>
          <option value="asap">
            As soon as possible
          </option>
          <option value="1-2-months">
            1–2 months
          </option>
          <option value="3-4-months">
            3–4 months
          </option>
          <option value="flexible">
            Flexible
          </option>
        </select>
      </div>

      <div>
        <label
          htmlFor="details"
          className={labelClass}
        >
          Tell us about the project
        </label>

        <textarea
          id="details"
          name="details"
          required
          rows={7}
          value={form.details}
          onChange={(event) =>
            updateField(
              "details",
              event.target.value,
            )
          }
          placeholder="What are you trying to build? What problem should it solve? Anything else we should know?"
          className={`${inputClass} resize-y`}
        />
      </div>

      {error && (
        <p
          role="alert"
          className="text-sm text-red-600"
        >
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-neutral-950 px-6 text-sm font-medium text-white transition hover:bg-neutral-800 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        {isSubmitting
          ? "Sending enquiry..."
          : "Send project enquiry"}
      </button>

      <p className="max-w-xl text-xs leading-5 text-neutral-400">
        By submitting this form, you&apos;re starting a
        project discussion. Scope, timeline and pricing
        will be discussed based on your requirements.
      </p>
    </form>
  );
}
