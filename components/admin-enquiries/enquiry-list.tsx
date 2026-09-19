"use client";

import { useState } from "react";

import type { DatabaseProjectEnquiry } from "@/lib/db";

type EnquiryListProps = {
  enquiries: DatabaseProjectEnquiry[];
};

const statuses = [
  "new",
  "reviewing",
  "contacted",
  "closed",
] as const;

type EnquiryStatus = (typeof statuses)[number];

function formatStatus(status: string) {
  return status.charAt(0).toUpperCase() + status.slice(1);
}

function formatDate(value: string) {
  return new Date(value).toLocaleString();
}

export function EnquiryList({
  enquiries: initialEnquiries,
}: EnquiryListProps) {
  const [enquiries, setEnquiries] =
    useState(initialEnquiries);

  const [updatingId, setUpdatingId] =
    useState<string | null>(null);

  const [error, setError] = useState("");

  async function updateStatus(
    id: string,
    status: EnquiryStatus,
  ) {
    setUpdatingId(id);
    setError("");

    try {
      const response = await fetch(
        `/api/project-enquiries/${id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ status }),
        },
      );

      if (!response.ok) {
        throw new Error(
          "Unable to update enquiry status.",
        );
      }

      const data = (await response.json()) as {
        enquiry: DatabaseProjectEnquiry;
      };

      setEnquiries((current) =>
        current.map((enquiry) =>
          enquiry.id === id
            ? data.enquiry
            : enquiry,
        ),
      );
    } catch {
      setError(
        "Unable to update the enquiry. Please try again.",
      );
    } finally {
      setUpdatingId(null);
    }
  }

  if (enquiries.length === 0) {
    return (
      <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-8">
        <p className="text-sm font-medium text-neutral-950">
          No project enquiries yet.
        </p>

        <p className="mt-2 text-sm leading-6 text-neutral-500">
          New project enquiries will appear here after
          someone submits the project discussion form.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {error && (
        <div
          role="alert"
          className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
        >
          {error}
        </div>
      )}

      {enquiries.map((enquiry) => {
        const isUpdating =
          updatingId === enquiry.id;

        return (
          <article
            key={enquiry.id}
            className="rounded-2xl border border-neutral-200 bg-white p-6 sm:p-8"
          >
            <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <p className="text-lg font-semibold tracking-tight text-neutral-950">
                  {enquiry.name}
                </p>

                <p className="mt-1 text-sm text-neutral-500">
                  {enquiry.email}
                </p>

                {enquiry.company && (
                  <p className="mt-1 text-sm text-neutral-500">
                    {enquiry.company}
                  </p>
                )}
              </div>

              <div className="flex items-center gap-3">
                <label
                  htmlFor={`status-${enquiry.id}`}
                  className="sr-only"
                >
                  Enquiry status
                </label>

                <select
                  id={`status-${enquiry.id}`}
                  value={enquiry.status}
                  disabled={isUpdating}
                  onChange={(event) =>
                    updateStatus(
                      enquiry.id,
                      event.target
                        .value as EnquiryStatus,
                    )
                  }
                  className="min-h-10 rounded-full border border-neutral-200 bg-neutral-50 px-4 text-xs font-medium text-neutral-800 outline-none transition focus:border-neutral-950 focus:ring-2 focus:ring-neutral-950/10 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {statuses.map((status) => (
                    <option
                      key={status}
                      value={status}
                    >
                      {formatStatus(status)}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-neutral-400">
                  Project
                </p>

                <p className="mt-2 text-sm text-neutral-900">
                  {enquiry.projectType}
                </p>
              </div>

              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-neutral-400">
                  Stage
                </p>

                <p className="mt-2 text-sm text-neutral-900">
                  {enquiry.stage}
                </p>
              </div>

              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-neutral-400">
                  Budget
                </p>

                <p className="mt-2 text-sm text-neutral-900">
                  {enquiry.budget ||
                    "Prefer to discuss"}
                </p>
              </div>

              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-neutral-400">
                  Timeline
                </p>

                <p className="mt-2 text-sm text-neutral-900">
                  {enquiry.timeline}
                </p>
              </div>

              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-neutral-400">
                  Services
                </p>

                <p className="mt-2 text-sm text-neutral-900">
                  {enquiry.services.length > 0
                    ? enquiry.services.join(", ")
                    : "Not specified"}
                </p>
              </div>

              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-neutral-400">
                  Submitted
                </p>

                <p className="mt-2 text-sm text-neutral-900">
                  {formatDate(
                    enquiry.createdAt,
                  )}
                </p>
              </div>
            </div>

            <div className="mt-6 border-t border-neutral-100 pt-6">
              <p className="text-xs font-medium uppercase tracking-wider text-neutral-400">
                Project details
              </p>

              <p className="mt-3 whitespace-pre-wrap text-sm leading-6 text-neutral-600">
                {enquiry.details}
              </p>
            </div>

            {isUpdating && (
              <p className="mt-4 text-xs text-neutral-400">
                Updating status...
              </p>
            )}
          </article>
        );
      })}
    </div>
  );
}
