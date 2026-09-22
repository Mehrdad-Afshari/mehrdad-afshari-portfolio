"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section
      id="projects"
      className="border-t border-black/10 bg-white py-24 dark:border-white/10 dark:bg-[#080b12]"
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-8">

        {/* Section Header */}
        <div className="mb-16 max-w-2xl">
          <p className="mb-3 text-sm font-medium tracking-widest text-gray-500 uppercase">
            04 — Projects
          </p>

          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Selected work
          </h2>

          <p className="mt-5 text-base leading-7 text-gray-600 dark:text-gray-400">
            A selection of academic and personal projects combining
            software engineering, algorithms, databases, and AI.
          </p>
        </div>

        {/* Projects */}
        <div className="space-y-10">
          {projects.map((project, index) => (
            <article
              key={project.id}
              className="group overflow-hidden rounded-3xl border border-black/10 bg-[#fafafa] transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/5 dark:border-white/10 dark:bg-[#0d1118] dark:hover:shadow-black/20"
            >
              <div className="grid lg:grid-cols-[0.85fr_1.15fr]">

                {/* Project Visual */}
                <div className="relative min-h-[300px] overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-black p-8 sm:min-h-[360px] lg:min-h-full">

                  <div className="absolute inset-0 opacity-20">
                    <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-blue-500 blur-3xl" />
                    <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-purple-500 blur-3xl" />
                  </div>

                  <div className="relative flex h-full flex-col justify-between">

                    <div>
                      <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium text-white/80 backdrop-blur">
                        {project.type}
                      </span>
                    </div>

                    <div className="mt-16">
                      <div className="mb-5 text-sm font-medium tracking-widest text-white/40">
                        {String(index + 1).padStart(2, "0")}
                      </div>

                      <h3 className="max-w-md text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                        {project.title}
                      </h3>

                      <p className="mt-4 max-w-lg text-sm leading-6 text-white/60">
                        {project.shortDescription}
                      </p>
                    </div>

                    <div className="mt-10 flex flex-wrap gap-2">
                      {project.technologies.map((technology) => (
                        <span
                          key={technology}
                          className="rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs text-white/70"
                        >
                          {technology}
                        </span>
                      ))}
                    </div>

                  </div>
                </div>

                {/* Project Content */}
                <div className="flex flex-col p-8 sm:p-10 lg:p-12">

                  <div className="flex-1">

                    <p className="text-base leading-7 text-gray-600 dark:text-gray-400">
                      {project.description}
                    </p>

                    {/* Overview */}
                    {project.overview?.length > 0 && (
                      <div className="mt-8">
                        <h4 className="text-sm font-semibold">
                          Overview
                        </h4>

                        <ul className="mt-4 space-y-3">
                          {project.overview.map((item) => (
                            <li
                              key={item}
                              className="flex gap-3 text-sm leading-6 text-gray-600 dark:text-gray-400"
                            >
                              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-current opacity-40" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Highlights */}
                    {project.highlights?.length > 0 && (
                      <div className="mt-8">
                        <h4 className="text-sm font-semibold">
                          Highlights
                        </h4>

                        <div className="mt-4 grid gap-3 sm:grid-cols-2">
                          {project.highlights.map((highlight) => (
                            <div
                              key={highlight}
                              className="rounded-2xl border border-black/5 bg-black/[0.025] p-4 text-sm leading-6 text-gray-600 dark:border-white/5 dark:bg-white/[0.03] dark:text-gray-400"
                            >
                              {highlight}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Algorithms */}
                    {project.algorithms &&
                      project.algorithms.length > 0 && (
                        <div className="mt-8">
                          <h4 className="text-sm font-semibold">
                            Algorithms & Methods
                          </h4>

                          <div className="mt-4 space-y-3">
                            {project.algorithms.map((algorithm) => (
                              <div
                                key={algorithm.name}
                                className="rounded-2xl border border-black/5 bg-black/[0.025] p-4 dark:border-white/5 dark:bg-white/[0.03]"
                              >
                                <div className="text-sm font-medium">
                                  {algorithm.name}
                                </div>

                                <p className="mt-1 text-sm leading-6 text-gray-500 dark:text-gray-400">
                                  {algorithm.description}
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                  </div>

                  {/* Actions */}
                  <div className="mt-10 flex flex-wrap items-center gap-3 border-t border-black/10 pt-6 dark:border-white/10">

                    <Link
                      href={`/projects/${project.id}`}
                      className="inline-flex items-center gap-2 rounded-xl bg-[#111] px-4 py-2.5 text-sm font-medium text-white transition hover:bg-black/80 dark:bg-white dark:text-black dark:hover:bg-white/90"
                    >
                      Case Study
                      <ArrowUpRight size={16} />
                    </Link>

                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-xl border border-black/10 px-4 py-2.5 text-sm font-medium transition hover:bg-black/5 dark:border-white/10 dark:hover:bg-white/5"
                      >
                        GitHub
                      </a>
                    )}

                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-xl border border-black/10 px-4 py-2.5 text-sm font-medium transition hover:bg-black/5 dark:border-white/10 dark:hover:bg-white/5"
                      >
                        Live Demo
                        <ArrowUpRight size={16} />
                      </a>
                    )}

                  </div>

                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}