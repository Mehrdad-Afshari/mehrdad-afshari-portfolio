import { Award, ExternalLink } from "lucide-react";
import { certifications } from "@/data/certifications";

const categories = [
  "AI & Generative AI",
  "Cloud & Azure",
  "AI Foundations",
] as const;

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="bg-white py-24 text-[#111111] dark:bg-[#080b12] dark:text-white"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-16 max-w-3xl">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-blue-600 dark:text-blue-400">
            04 — Certifications & Credentials
          </p>

          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Continuous learning in AI.
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400">
            Selected credentials and learning achievements across Generative
            AI, LLMs, AI agents, responsible AI, and cloud AI platforms.
          </p>
        </div>

        <div className="space-y-16">
          {categories.map((category) => {
            const items = certifications.filter(
              (certification) => certification.category === category,
            );

            return (
              <div key={category}>
                <div className="mb-6 flex items-center gap-4">
                  <h3 className="text-xl font-semibold">
                    {category}
                  </h3>

                  <div className="h-px flex-1 bg-black/10 dark:bg-white/10" />
                </div>

                <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                  {items.map((certification) => (
                    <article
                      key={certification.id}
                      className="group relative rounded-3xl border border-black/10 bg-[#fafafa] p-6 transition duration-300 hover:-translate-y-1 hover:border-black/20 hover:shadow-xl hover:shadow-black/5 dark:border-white/10 dark:bg-white/5 dark:hover:border-white/20"
                    >
                      {certification.featured && (
                        <div className="absolute right-5 top-5">
                          <span className="rounded-full bg-blue-500/10 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wide text-blue-600 dark:text-blue-400">
                            Featured
                          </span>
                        </div>
                      )}

                      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-black/5 dark:bg-white/10">
                        <Award
                          size={21}
                          className="text-blue-600 dark:text-blue-400"
                        />
                      </div>

                      <p className="mt-6 text-xs font-medium uppercase tracking-[0.18em] text-gray-500">
                        {certification.issuer}
                      </p>

                      <h4 className="mt-2 pr-16 text-lg font-semibold leading-7">
                        {certification.name}
                      </h4>

                      <div className="mt-5 flex items-center justify-between gap-4 text-sm text-gray-500 dark:text-gray-400">
                        {certification.date ? (
                          <span>{certification.date}</span>
                        ) : (
                          <span>Credential</span>
                        )}

                        {certification.status && (
                          <span className="rounded-full border border-green-500/20 bg-green-500/10 px-2.5 py-1 text-xs text-green-600 dark:text-green-400">
                            {certification.status}
                          </span>
                        )}
                      </div>

                      {certification.credentialId && (
                        <div className="mt-5 border-t border-black/10 pt-4 dark:border-white/10">
                          <p className="text-[11px] uppercase tracking-wide text-gray-400">
                            Credential ID
                          </p>

                          <p className="mt-1 font-mono text-xs text-gray-500 dark:text-gray-400">
                            {certification.credentialId}
                          </p>
                        </div>
                      )}
                    </article>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 rounded-3xl border border-blue-500/20 bg-blue-500/5 p-7 dark:bg-blue-500/5">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="text-lg font-semibold">
                Focused on practical AI development
              </h3>

              <p className="mt-2 max-w-2xl text-sm leading-6 text-gray-600 dark:text-gray-400">
                These credentials complement hands-on software engineering
                experience and ongoing academic work in Computer Science.
              </p>
            </div>

            <a
              href="https://github.com/Mehrdad-Afshari"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-[#111111] px-5 py-3 text-sm font-medium text-white transition hover:bg-black/80 dark:bg-white dark:text-black dark:hover:bg-gray-200"
            >
              View my work
              <ExternalLink size={15} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}