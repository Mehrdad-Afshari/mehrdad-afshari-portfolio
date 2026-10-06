import { getTranslator } from "@/lib/translations";
import { type LocaleProps } from "@/lib/i18n";
import { Award, ExternalLink } from "lucide-react";
import { certifications } from "@/data/certifications";

function IssuerLogo({ issuer }: { issuer: string }) {
  const base =
    "flex h-12 w-12 items-center justify-center rounded-2xl border border-black/[0.06] bg-white shadow-sm dark:border-white/10 dark:bg-white/[0.08]";

  if (issuer === "Microsoft") {
    return (
      <div className={base} title="Microsoft">
        <span aria-label="Microsoft logo" className="grid h-[22px] w-[22px] grid-cols-2 gap-[2px]">
          <span className="bg-[#f25022]" />
          <span className="bg-[#7fba00]" />
          <span className="bg-[#00a4ef]" />
          <span className="bg-[#ffb900]" />
        </span>
      </div>
    );
  }

  if (issuer === "Google Cloud") {
    return (
      <div className={base} title="Google Cloud">
        <svg aria-label="Google Cloud logo" viewBox="0 0 64 44" className="h-7 w-9" role="img">
          <path fill="#4285F4" d="M40.1 12.1 45 7.2l.3-2.1C36.4-3 22.3-2.1 14.5 7.2A19.3 19.3 0 0 0 10.4 15l1.8-.3 9.8-1.6.8-.8a12.2 12.2 0 0 1 17.3-.2Z" />
          <path fill="#34A853" d="M51.3 15a19.4 19.4 0 0 0-5.9-9.8l-6.9 6.9a12.2 12.2 0 0 1 4.5 9.6v1.2c3.4 0 6.2 2.8 6.2 6.2s-2.8 6.1-6.2 6.1H30.6l-1.2 1.3v7.4l1.2 1.2H43A16 16 0 0 0 51.3 15Z" />
          <path fill="#FBBC05" d="M18.3 45.1h12.3v-9.9H18.3a8.7 8.7 0 0 1-3.6-.8l-1.7.5-5 4.9-.4 1.7a18.4 18.4 0 0 0 10.7 3.6Z" />
          <path fill="#EA4335" d="M18.3 8.2A18.4 18.4 0 0 0 7.6 41.5l7.2-7.1a8.6 8.6 0 1 1 11.4-11.5l7.2-7.2A18.3 18.3 0 0 0 18.3 8.2Z" />
        </svg>
      </div>
    );
  }

  if (issuer === "Anthropic") {
    return (
      <div className={base} title="Anthropic">
        <svg aria-label="Anthropic logo" viewBox="0 0 46 32" className="h-6 w-8 text-[#181818] dark:text-white" role="img">
          <path fill="currentColor" d="M32.73 0h-6.945L38.45 32h6.945L32.73 0ZM13.47 0 0 32h7.09l2.755-7.07h14.12L26.72 32h7.09L20.34 0h-6.87Zm-1.2 18.7 4.635-11.9 4.635 11.9h-9.27Z" />
        </svg>
      </div>
    );
  }

  if (issuer === "NASA") {
    return (
      <div className={base} title="NASA">
        <span
          aria-label="NASA credential issuer"
          className="flex h-8 w-8 items-center justify-center rounded-full bg-[#0b3d91] text-[9px] font-extrabold italic tracking-[-0.06em] text-white shadow-sm"
        >
          NASA
        </span>
      </div>
    );
  }

  return (
    <div className={base}>
      <Award size={21} aria-label="Certification" className="text-blue-600 dark:text-blue-400" />
    </div>
  );
}

const categories = [
  "AI & Generative AI",
  "Cloud & Azure",
  "AI Foundations",
] as const;

export default function Certifications({ locale = "en" }: LocaleProps) {
  const t = getTranslator(locale);
  return (
    <section
      id="certifications"
      className="bg-white py-24 text-[#111111] dark:bg-[#080b12] dark:text-white"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-16 max-w-3xl">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-blue-600 dark:text-blue-400">
            {t("04 — Certifications & Credentials")}
          </p>

          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            {t("Continuous learning in AI.")}
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400">
            {t(
              "Selected credentials and learning achievements across Generative AI, LLMs, AI agents, responsible AI, and cloud AI platforms.",
            )}
          </p>
        </div>

        <div className="space-y-16">
          {categories.map((category) => {
            const items = certifications.filter(
              (certification) => certification.category === category,
            );

            return (
              <div key={t(category)}>
                <div className="mb-6 flex items-center gap-4">
                  <h3 className="text-xl font-semibold">{t(category)}</h3>

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
                            {t("Featured")}
                          </span>
                        </div>
                      )}

                      <IssuerLogo issuer={certification.issuer} />

                      <p className="mt-6 text-xs font-medium uppercase tracking-[0.18em] text-gray-500">
                        {certification.issuer}
                      </p>

                      <h4 className="mt-2 pr-16 text-lg font-semibold leading-7">
                        {certification.name}
                      </h4>

                      <div className="mt-5 flex items-center justify-between gap-4 text-sm text-gray-500 dark:text-gray-400">
                        {certification.date ? (
                          <span>{t(certification.date)}</span>
                        ) : (
                          <span>{t("Credential")}</span>
                        )}

                        {certification.status && (
                          <span className="rounded-full border border-green-500/20 bg-green-500/10 px-2.5 py-1 text-xs text-green-600 dark:text-green-400">
                            {t(certification.status)}
                          </span>
                        )}
                      </div>

                      {certification.credentialId && (
                        <div className="mt-5 border-t border-black/10 pt-4 dark:border-white/10">
                          <p className="text-[11px] uppercase tracking-wide text-gray-400">
                            {t("Credential ID")}
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
                {t("Focused on practical AI development")}
              </h3>

              <p className="mt-2 max-w-2xl text-sm leading-6 text-gray-600 dark:text-gray-400">
                {t(
                  "These credentials complement hands-on software engineering experience and ongoing academic work in Computer Science.",
                )}
              </p>
            </div>

            <a
              href="https://github.com/Mehrdad-Afshari"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-[#111111] px-5 py-3 text-sm font-medium text-white transition hover:bg-black/80 dark:bg-white dark:text-black dark:hover:bg-gray-200"
            >
              {t("View my work")}
              <ExternalLink size={15} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
