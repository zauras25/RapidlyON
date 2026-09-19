"use client";

import { FormEvent, useState } from "react";

import {
  Button,
  Input,
  Textarea,
} from "@/design-system";

import {
  budgetRanges,
  projectTypes,
  timelines,
} from "./project-fields";

import { ProjectSummary } from "./project-summary";

export function ProjectForm() {
  const [projectType, setProjectType] = useState("");
  const [timeline, setTimeline] = useState("");
  const [budget, setBudget] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [description, setDescription] = useState("");

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const selectedProject =
    projectTypes.find(
      (item) => item.value === projectType,
    )?.label;

  const selectedTimeline =
    timelines.find(
      (item) => item.value === timeline,
    )?.label;

  const selectedBudget =
    budgetRanges.find(
      (item) => item.value === budget,
    )?.label;

  async function handleSubmit(
    event: FormEvent<HTMLFormElement>,
  ) {
    event.preventDefault();

    setError("");
    setSubmitting(true);

    try {
      const response = await fetch(
        "/api/project-enquiries",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            projectType,
            stage: "planning",
            services: [],
            budget,
            timeline,
            details: description,
          }),
        },
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data?.error ||
            "Unable to submit your enquiry.",
        );
      }

      setSubmitted(true);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again.",
      );
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-8 sm:p-10">
        <p className="text-sm font-medium text-neutral-400">
          Project enquiry
        </p>

        <h2 className="mt-4 text-2xl font-semibold tracking-tight text-neutral-950">
          Thanks — we&apos;ve received your project enquiry.
        </h2>

        <p className="mt-4 max-w-xl text-sm leading-6 text-neutral-500">
          Your project details have been submitted successfully.
          We&apos;ll use the information to understand your
          requirements and continue the conversation.
        </p>

        <button
          type="button"
          onClick={() => {
            setProjectType("");
            setTimeline("");
            setBudget("");
            setName("");
            setEmail("");
            setCompany("");
            setDescription("");
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
    <div className="grid gap-10 lg:grid-cols-[1fr_320px] lg:gap-16">
      <form
        onSubmit={handleSubmit}
        className="space-y-10"
      >
        <fieldset className="space-y-4">
          <legend className="text-lg font-semibold text-neutral-950">
            What are you looking to build?
          </legend>

          <div className="grid gap-3 sm:grid-cols-2">
            {projectTypes.map((item) => (
              <label
                key={item.value}
                className={[
                  "cursor-pointer rounded-xl border p-4 transition-colors",
                  projectType === item.value
                    ? "border-neutral-950 bg-neutral-950 text-white"
                    : "border-neutral-200 bg-white hover:border-neutral-400",
                ].join(" ")}
              >
                <input
                  type="radio"
                  name="projectType"
                  value={item.value}
                  checked={
                    projectType === item.value
                  }
                  onChange={(event) =>
                    setProjectType(
                      event.target.value,
                    )
                  }
                  className="sr-only"
                  required
                />

                <span className="text-sm font-medium">
                  {item.label}
                </span>
              </label>
            ))}
          </div>
        </fieldset>

        <div>
          <label
            htmlFor="project-description"
            className="text-lg font-semibold text-neutral-950"
          >
            Tell us about the project
          </label>

          <Textarea
            id="project-description"
            name="description"
            required
            value={description}
            onChange={(event) =>
              setDescription(event.target.value)
            }
            placeholder="What are you trying to achieve? Who is it for? What problem are you solving?"
            className="mt-4"
          />
        </div>

        <div className="grid gap-8 sm:grid-cols-2">
          <div>
            <label
              htmlFor="timeline"
              className="text-sm font-semibold text-neutral-950"
            >
              Timeline
            </label>

            <select
              id="timeline"
              name="timeline"
              required
              value={timeline}
              onChange={(event) =>
                setTimeline(event.target.value)
              }
              className="mt-3 min-h-12 w-full rounded-xl border border-neutral-300 bg-white px-4 text-sm outline-none focus:border-neutral-950 focus:ring-2 focus:ring-neutral-950/10"
            >
              <option value="">
                Select timeline
              </option>

              {timelines.map((item) => (
                <option
                  key={item.value}
                  value={item.value}
                >
                  {item.label}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label
              htmlFor="budget"
              className="text-sm font-semibold text-neutral-950"
            >
              Budget range
            </label>

            <select
              id="budget"
              name="budget"
              value={budget}
              onChange={(event) =>
                setBudget(event.target.value)
              }
              className="mt-3 min-h-12 w-full rounded-xl border border-neutral-300 bg-white px-4 text-sm outline-none focus:border-neutral-950 focus:ring-2 focus:ring-neutral-950/10"
            >
              <option value="">
                Select budget
              </option>

              {budgetRanges.map((item) => (
                <option
                  key={item.value}
                  value={item.value}
                >
                  {item.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid gap-8 sm:grid-cols-2">
          <div>
            <label
              htmlFor="name"
              className="text-sm font-semibold text-neutral-950"
            >
              Your name
            </label>

            <Input
              id="name"
              name="name"
              required
              value={name}
              onChange={(event) =>
                setName(event.target.value)
              }
              placeholder="Your name"
              className="mt-3"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="text-sm font-semibold text-neutral-950"
            >
              Email address
            </label>

            <Input
              id="email"
              name="email"
              type="email"
              required
              value={email}
              onChange={(event) =>
                setEmail(event.target.value)
              }
              placeholder="you@example.com"
              className="mt-3"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="company"
            className="text-sm font-semibold text-neutral-950"
          >
            Company
            <span className="ml-1 font-normal text-neutral-400">
              Optional
            </span>
          </label>

          <Input
            id="company"
            name="company"
            value={company}
            onChange={(event) =>
              setCompany(event.target.value)
            }
            placeholder="Company name"
            className="mt-3"
          />
        </div>

        {error && (
          <div
            role="alert"
            className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
          >
            {error}
          </div>
        )}

        <div className="border-t border-neutral-200 pt-8">
          <Button
            type="submit"
            size="lg"
            disabled={submitting}
          >
            {submitting
              ? "Sending..."
              : "Continue Project Discussion"}
          </Button>

          <p className="mt-3 text-xs leading-5 text-neutral-500">
            Your information will be used to understand
            your project and continue the conversation.
          </p>
        </div>
      </form>

      <ProjectSummary
        projectType={selectedProject}
        timeline={selectedTimeline}
        budget={selectedBudget}
      />
    </div>
  );
}
