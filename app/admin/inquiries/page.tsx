"use client";

import { useEffect, useState } from "react";

type Project = {
  id: string;
  name: string;
  email: string;
  company: string | null;
  projectType: string;
  projectStage: string;
  message: string;
  status: "NEW" | "IN_PROGRESS" | "REVIEW" | "COMPLETED";
  createdAt: string;
};

export default function AdminInquiriesPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadProjects() {
      try {
        const response = await fetch("/api/admin/inquiries");

        if (!response.ok) {
          throw new Error("Unable to load inquiries.");
        }

        const data = await response.json();
        setProjects(data.projects);
      } catch (error) {
        setError(
          error instanceof Error
            ? error.message
            : "Unable to load inquiries."
        );
      } finally {
        setLoading(false);
      }
    }

    loadProjects();
  }, []);

  return (
    <main className="min-h-screen bg-black px-6 py-16 text-white">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10">
          <p className="text-xs uppercase tracking-[0.18em] text-violet-300">
            Admin
          </p>

          <h1 className="mt-3 text-4xl font-semibold">
            Project inquiries
          </h1>

          <p className="mt-3 text-zinc-500">
            View project enquiries submitted through your website.
          </p>
        </div>

        {loading && (
          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 text-zinc-400">
            Loading inquiries...
          </div>
        )}

        {error && (
          <div className="rounded-2xl border border-red-400/20 bg-red-500/[0.06] p-6 text-red-300">
            {error}
          </div>
        )}

        {!loading && !error && projects.length === 0 && (
          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-8 text-center">
            <p className="text-lg font-medium text-zinc-300">
              No inquiries yet.
            </p>

            <p className="mt-2 text-sm text-zinc-600">
              New project enquiries will appear here.
            </p>
          </div>
        )}

        <div className="space-y-4">
          {projects.map((project) => (
            <article
              key={project.id}
              className="rounded-2xl border border-white/10 bg-white/[0.02] p-6"
            >
              <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <h2 className="text-xl font-semibold text-white">
                      {project.name}
                    </h2>

                    <span className="rounded-full border border-violet-400/20 bg-violet-500/[0.08] px-3 py-1 text-xs text-violet-300">
                      {project.status}
                    </span>
                  </div>

                  <p className="mt-2 text-sm text-zinc-500">
                    {project.email}
                    {project.company
                      ? ` · ${project.company}`
                      : ""}
                  </p>
                </div>

                <p className="text-xs text-zinc-600">
                  {new Date(project.createdAt).toLocaleString()}
                </p>
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div>
                  <p className="text-xs uppercase tracking-wider text-zinc-700">
                    Project type
                  </p>

                  <p className="mt-1 text-sm text-zinc-300">
                    {project.projectType}
                  </p>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-wider text-zinc-700">
                    Project stage
                  </p>

                  <p className="mt-1 text-sm text-zinc-300">
                    {project.projectStage}
                  </p>
                </div>
              </div>

              <div className="mt-6 rounded-xl border border-white/[0.06] bg-black/20 p-4">
                <p className="mb-2 text-xs uppercase tracking-wider text-zinc-700">
                  Message
                </p>

                <p className="whitespace-pre-wrap text-sm leading-6 text-zinc-400">
                  {project.message}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
