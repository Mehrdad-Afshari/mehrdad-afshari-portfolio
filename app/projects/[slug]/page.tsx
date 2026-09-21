import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowUpRight,
  BookOpen,
  CheckCircle2,
  Code2,
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
      {/* Header */}
      <section className="border-b border-black/10 dark:border-white/10">
        <div className="mx-auto max-w-5xl px-6 pb-20 pt-32 lg:px-8">
          <Link
            href="/#projects"
            className="mb-10 inline-flex items-center gap-2 text-sm font-medium text-gray-500 transition hover:text-black dark:text-gray-400 dark:hover:text-white"
          >
            <ArrowLeft size={16} />
            Back to projects
          </Link>

          <div className="max-w-4xl">
            <div className="mb-5 flex flex-wrap items-center gap-3">
              <span className="rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-xs font-medium uppercase tracking-wide text-blue-600 dark:text-blue-400">
                {project.type}
              </span>

              {project.featured && (
                <span className="rounded-full border border-black/10 px-3 py-1 text-xs font-medium text-gray-600 dark:border-white/10 dark:text-gray-400">
                  Featured
                </span>
              )}
            </div>

            <h1 className="text-5xl font-bold tracking-tight sm:text-6xl">
              {project.title}
            </h1>

            <p className="mt-8 max-w-3xl text-xl leading-9 text-gray-600 dark:text-gray-400">
              {project.description}
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
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

      {/* Main Content */}
      <section className="py-20">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-[1fr_280px]">
            {/* Content */}
            <div>
              <div>
                <div className="mb-6 flex items-center gap-3">
                  <div className="rounded-xl bg-black/5 p-2 dark:bg-white/10">
                    <BookOpen size={20} />
                  </div>

                  <h2 className="text-2xl font-semibold">
                    Project Overview
                  </h2>
                </div>

                <div className="space-y-5">
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

              {/* Technical Approach */}
              <div className="mt-20">
                <div className="mb-6 flex items-center gap-3">
                  <div className="rounded-xl bg-black/5 p-2 dark:bg-white/10">
                    <Code2 size={20} />
                  </div>

                  <h2 className="text-2xl font-semibold">
                    Technical Approach
                  </h2>
                </div>

                <p className="text-lg leading-8 text-gray-600 dark:text-gray-400">
                  The project approaches Sokoban as a search and planning
                  problem. Different search strategies can be used to explore
                  the state space, while deadlock handling helps avoid states
                  from which the puzzle can no longer be solved.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {project.highlights.map((highlight) => (
                    <div
                      key={highlight}
                      className="flex items-start gap-3 rounded-2xl border border-black/10 bg-white p-5 dark:border-white/10 dark:bg-white/5"
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

              {/* Algorithms */}
              <div className="mt-20">
                <h2 className="text-2xl font-semibold">
                  Search Algorithms
                </h2>

                <div className="mt-8 space-y-6">
                  <div className="rounded-2xl border border-black/10 bg-white p-6 dark:border-white/10 dark:bg-white/5">
                    <h3 className="text-lg font-semibold">
                      Breadth-First Search
                    </h3>

                    <p className="mt-3 leading-7 text-gray-600 dark:text-gray-400">
                      BFS explores states level by level and can systematically
                      search for solutions by expanding states according to
                      their distance from the initial state.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-black/10 bg-white p-6 dark:border-white/10 dark:bg-white/5">
                    <h3 className="text-lg font-semibold">
                      Depth-First Search
                    </h3>

                    <p className="mt-3 leading-7 text-gray-600 dark:text-gray-400">
                      DFS follows a path deeper into the state space before
                      backtracking, providing a different search behaviour and
                      memory profile compared with BFS.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-black/10 bg-white p-6 dark:border-white/10 dark:bg-white/5">
                    <h3 className="text-lg font-semibold">
                      Deadlock Handling
                    </h3>

                    <p className="mt-3 leading-7 text-gray-600 dark:text-gray-400">
                      Sokoban contains states where boxes can become trapped
                      and make a solution impossible. Recognising and avoiding
                      such states is therefore an important part of the search
                      process.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="lg:sticky lg:top-28 lg:self-start">
              <div className="rounded-3xl border border-black/10 bg-white p-6 dark:border-white/10 dark:bg-white/5">
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-gray-500">
                  Project
                </p>

                <h3 className="mt-3 text-xl font-semibold">
                  {project.title}
                </h3>

                <div className="my-6 h-px bg-black/10 dark:bg-white/10" />

                <dl className="space-y-5">
                  <div>
                    <dt className="text-xs uppercase tracking-wide text-gray-500">
                      Type
                    </dt>
                    <dd className="mt-1 text-sm">
                      {project.type}
                    </dd>
                  </div>

                  <div>
                    <dt className="text-xs uppercase tracking-wide text-gray-500">
                      Main Language
                    </dt>
                    <dd className="mt-1 text-sm">
                      Python
                    </dd>
                  </div>

                  <div>
                    <dt className="text-xs uppercase tracking-wide text-gray-500">
                      Focus
                    </dt>
                    <dd className="mt-1 text-sm">
                      Search & Planning
                    </dd>
                  </div>
                </dl>

                {project.github && (
                  <>
                    <div className="my-6 h-px bg-black/10 dark:bg-white/10" />

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#111111] px-5 py-3 text-sm font-medium text-white transition hover:bg-black/80 dark:bg-white dark:text-black dark:hover:bg-gray-200"
                    >
                      View on GitHub
                      <ArrowUpRight size={16} />
                    </a>
                  </>
                )}
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Bottom Navigation */}
      <section className="border-t border-black/10 py-12 dark:border-white/10">
        <div className="mx-auto flex max-w-5xl justify-between px-6 lg:px-8">
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
            Get in touch
            <ArrowUpRight size={16} />
          </Link>
        </div>
      </section>
    </main>
  );
}