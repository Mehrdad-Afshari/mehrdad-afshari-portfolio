import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
  Code2,
  GitBranch,
  Target,
} from "lucide-react";

import { projects } from "@/data/projects";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.id,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const { slug } = await params;

  const project = projects.find((item) => item.id === slug);

  if (!project) {
    return {
      title: "Project Not Found | Mehrdad Afshari",
    };
  }

  return {
    title: `${project.title} | Mehrdad Afshari`,
    description: project.shortDescription,
  };
}

export default async function ProjectPage({
  params,
}: ProjectPageProps) {
  const { slug } = await params;

  const project = projects.find((item) => item.id === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#fafafa] text-[#111111] dark:bg-[#080b12] dark:text-white">
      {/* Hero */}
      <section className="border-b border-black/10 dark:border-white/10">
        <div className="mx-auto max-w-6xl px-6 pb-20 pt-32 lg:px-8">
          <Link
            href="/#projects"
            className="mb-10 inline-flex items-center gap-2 text-sm text-gray-500 transition hover:text-black dark:text-gray-400 dark:hover:text-white"
          >
            <ArrowLeft size={16} />
            Back to projects
          </Link>

          <div className="max-w-4xl">
            <span className="inline-flex rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-xs font-medium uppercase tracking-wide text-blue-600 dark:text-blue-400">
              {project.type}
            </span>

            <h1 className="mt-6 text-5xl font-bold tracking-tight sm:text-6xl">
              {project.title}
            </h1>

            <p className="mt-8 max-w-3xl text-xl leading-9 text-gray-600 dark:text-gray-400">
              {project.description}
            </p>

            <div className="mt-10 flex flex-wrap gap-2">
              {project.technologies.map((technology) => (
                <span
                  key={technology}
                  className="rounded-full border border-black/10 bg-white px-4 py-2 text-sm text-gray-700 dark:border-white/10 dark:bg-white/5 dark:text-gray-300"
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-[1fr_300px]">
            <div>
              <div className="mb-8 flex items-center gap-3">
                <div className="rounded-xl bg-black/5 p-2 dark:bg-white/10">
                  <Code2 size={20} />
                </div>

                <h2 className="text-2xl font-semibold">
                  Project Overview
                </h2>
              </div>

              <div className="space-y-6">
                {project.overview.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="text-lg leading-8 text-gray-600 dark:text-gray-400"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <aside className="lg:sticky lg:top-28 lg:self-start">
              <div className="rounded-3xl border border-black/10 bg-white p-6 dark:border-white/10 dark:bg-white/5">
                <p className="text-xs uppercase tracking-[0.2em] text-gray-500">
                  Project Focus
                </p>

                <div className="mt-6 space-y-6">
                  <div>
                    <p className="text-xs text-gray-500">Problem</p>
                    <p className="mt-1 text-sm font-medium">
                      Search-space reduction
                    </p>
                  </div>

                  <div>
                    <p className="text-xs text-gray-500">Main Algorithm</p>
                    <p className="mt-1 text-sm font-medium">
                      Depth-Limited DFS
                    </p>
                  </div>

                  <div>
                    <p className="text-xs text-gray-500">Planning Model</p>
                    <p className="mt-1 text-sm font-medium">
                      PDDL
                    </p>
                  </div>

                  <div>
                    <p className="text-xs text-gray-500">Implementation</p>
                    <p className="mt-1 text-sm font-medium">
                      Python
                    </p>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Technical Highlights */}
      <section className="border-y border-black/10 bg-white py-20 dark:border-white/10 dark:bg-white/[0.02]">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="mb-12">
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-blue-600 dark:text-blue-400">
              Technical Highlights
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight">
              Incremental algorithmic improvements.
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {project.highlights.map((highlight) => (
              <div
                key={highlight}
                className="flex items-start gap-3 rounded-2xl border border-black/10 bg-[#fafafa] p-5 dark:border-white/10 dark:bg-white/5"
              >
                <CheckCircle2
                  size={19}
                  className="mt-0.5 shrink-0 text-blue-600 dark:text-blue-400"
                />

                <span className="text-sm leading-6 text-gray-700 dark:text-gray-300">
                  {highlight}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Algorithms */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="mb-12">
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-blue-600 dark:text-blue-400">
              Approach
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight">
              From basic search to deadlock-aware DFS.
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {project.algorithms.map((algorithm, index) => (
              <article
                key={algorithm.name}
                className="rounded-3xl border border-black/10 bg-white p-7 dark:border-white/10 dark:bg-white/5"
              >
                <div className="mb-5 flex items-center gap-4">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-black/5 text-sm font-semibold dark:bg-white/10">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <h3 className="text-lg font-semibold">
                    {algorithm.name}
                  </h3>
                </div>

                <p className="leading-7 text-gray-600 dark:text-gray-400">
                  {algorithm.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="border-y border-black/10 bg-white py-20 dark:border-white/10 dark:bg-white/[0.02]">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="mb-12">
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-blue-600 dark:text-blue-400">
              Evaluation
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight">
              Final DFS evaluation
            </h2>

            <p className="mt-5 max-w-3xl leading-7 text-gray-600 dark:text-gray-400">
              The final implementation was evaluated on three different
              Sokoban maps. Each map used a depth limit appropriate to its
              complexity.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {project.results.map((result) => (
              <article
                key={result.map}
                className="rounded-3xl border border-black/10 bg-[#fafafa] p-7 dark:border-white/10 dark:bg-white/5"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold">
                    {result.map}
                  </h3>

                  <span className="rounded-full bg-green-500/10 px-3 py-1 text-xs font-medium text-green-600 dark:text-green-400">
                    Solved
                  </span>
                </div>

                <div className="mt-7 space-y-4">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-500">
                      Max Depth
                    </span>
                    <strong>{result.maxDepth}</strong>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-sm text-gray-500">
                      Visited
                    </span>
                    <strong>
                      {result.visited.toLocaleString()}
                    </strong>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-sm text-gray-500">
                      Generated
                    </span>
                    <strong>
                      {result.generated.toLocaleString()}
                    </strong>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-sm text-gray-500">
                      Skipped
                    </span>
                    <strong>
                      {result.skipped.toLocaleString()}
                    </strong>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-sm text-gray-500">
                      Corner Deadlocks
                    </span>
                    <strong>{result.cornerDeadlocks}</strong>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-sm text-gray-500">
                      Wall Deadlocks
                    </span>
                    <strong>{result.wallDeadlocks}</strong>
                  </div>

                  <div className="flex justify-between border-t border-black/10 pt-4 dark:border-white/10">
                    <span className="text-sm text-gray-500">
                      Runtime
                    </span>
                    <strong>{result.runtime}</strong>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Key Result */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="rounded-[2rem] border border-black/10 bg-white p-8 dark:border-white/10 dark:bg-white/5 md:p-12">
            <div className="flex items-start gap-5">
              <div className="rounded-2xl bg-blue-500/10 p-3 text-blue-600 dark:text-blue-400">
                <Target size={24} />
              </div>

              <div>
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
                  Key Result
                </p>

                <h2 className="mt-3 text-2xl font-bold">
                  Deadlock-aware pruning reduced the search space.
                </h2>

                <p className="mt-5 max-w-3xl leading-8 text-gray-600 dark:text-gray-400">
                  On the final evaluation maps, adding goal checking,
                  corner-deadlock detection and wall-deadlock detection
                  consistently reduced the number of visited and generated
                  states compared with less-informed DFS variants.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Limitations */}
      <section className="border-t border-black/10 py-20 dark:border-white/10">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <h2 className="text-2xl font-semibold">
            Limitations & Scope
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {project.limitations.map((limitation) => (
              <div
                key={limitation}
                className="flex gap-3 rounded-2xl border border-black/10 p-5 dark:border-white/10"
              >
                <GitBranch
                  size={18}
                  className="mt-1 shrink-0 text-gray-400"
                />

                <p className="text-sm leading-7 text-gray-600 dark:text-gray-400">
                  {limitation}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Navigation */}
      <section className="border-t border-black/10 py-12 dark:border-white/10">
        <div className="mx-auto flex max-w-6xl justify-between px-6 lg:px-8">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 transition hover:text-black dark:text-gray-400 dark:hover:text-white"
          >
            <ArrowLeft size={16} />
            All projects
          </Link>

          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 transition hover:text-black dark:text-gray-400 dark:hover:text-white"
          >
            Contact
            <ArrowUpRight size={16} />
          </Link>
        </div>
      </section>
    </main>
  );
}