import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-[#fafafa] py-24 text-[#111111] dark:bg-[#080b12] dark:text-white"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-16">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-blue-600 dark:text-blue-400">
            04 — Projects
          </p>

          <h2 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">
            Things I build and explore.
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-600 dark:text-gray-400">
              A selection of academic and personal work across software engineering,
              algorithms, and artificial intelligence.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((project) => (
            <Link
              key={project.id}
              href={`/projects/${project.id}`}
              className="group block rounded-3xl border border-black/10 bg-white p-8 transition duration-300 hover:-translate-y-1 hover:border-black/20 hover:shadow-xl hover:shadow-black/5 dark:border-white/10 dark:bg-white/5 dark:hover:border-white/20 dark:hover:shadow-black/20"
            >
              <div className="flex items-start justify-between gap-6">
                <div>
                  {project.featured && (
                    <span className="mb-4 inline-block rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-600 dark:text-blue-400">
                      Featured Project
                    </span>
                  )}

                  <p className="mb-2 text-xs font-medium uppercase tracking-[0.2em] text-gray-500 dark:text-gray-500">
                    {project.type}
                  </p>

                  <h3 className="text-2xl font-semibold tracking-tight">
                    {project.title}
                  </h3>
                </div>

                <div className="shrink-0 rounded-full border border-black/10 p-2 dark:border-white/10">
                  <ArrowUpRight
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </div>
              </div>

              <p className="mt-6 leading-7 text-gray-600 dark:text-gray-400">
                {project.shortDescription}
              </p>

              <div className="mt-8 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full border border-black/10 bg-[#fafafa] px-3 py-1.5 text-sm text-gray-700 dark:border-white/10 dark:bg-white/5 dark:text-gray-300"
                  >
                    {technology}
                  </span>
                ))}
              </div>

              <div className="mt-8 text-sm font-medium text-gray-500 transition group-hover:text-black dark:text-gray-400 dark:group-hover:text-white">
                View project →
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}