import { getTranslator } from "@/lib/translations";
import { type LocaleProps, localePath } from "@/lib/i18n";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { getProjects } from "@/data/localized-projects";

export default function Projects({ locale = "en" }: LocaleProps) {
  const t = getTranslator(locale);
  const projects = getProjects(locale);
  return (
    <section id="projects" className="border-y border-black/10 bg-white py-24 dark:border-white/10 dark:bg-[#080b12]">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mb-12 max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-widest text-blue-600 dark:text-blue-400">{t("Selected work")}</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">{t("From software foundations to local AI.")}</h2>
          <p className="mt-5 text-base leading-7 text-gray-600 dark:text-gray-400">{t("Practical projects, the decisions behind them, and what I learned along the way.")}</p>
        </div>
        <div className="space-y-8">
          {projects.map((project, index) => {
            const hasVisualPanel = Boolean(project.pipeline) || project.id === "sokoban-solver";
            const panelTitle = project.id === "sokoban-solver"
              ? (locale === "de" ? "Im Suchraum" : "Inside the search space")
              : project.id === "ai-meeting-assistant"
                ? (locale === "de" ? "Von Sprache zu Wissen" : "From speech to knowledge")
                : project.id === "ai-job-application-assistant"
                  ? (locale === "de" ? "Von Evidenz zur Bewerbung" : "From evidence to application")
                  : t("Inside the RAG pipeline");
            const panelSteps = project.pipeline ?? project.algorithms?.slice(0, 3) ?? [];
            const isSokoban = project.id === "sokoban-solver";
            const isMeeting = project.id === "ai-meeting-assistant";
            const panelBg = isSokoban ? "bg-[#241b35]" : isMeeting ? "bg-[#102421]" : "bg-[#101c32]";
            const accent = isSokoban ? "text-violet-300" : isMeeting ? "text-emerald-300" : "text-blue-300";
            const panelFooter = isSokoban
              ? (locale === "de" ? "Klassische Zustandsraumsuche mit Deadlock-Erkennung, entwickelt als Universitätsprojekt an der Universität Rostock." : "Classical state-space search with deadlock detection, developed as a university project at the University of Rostock.")
              : isMeeting
                ? (locale === "de" ? "Lokale Transkription mit faster-whisper, lokale Analyse mit Ollama und persistenter Meeting-Verlauf mit SQLite." : "Local transcription with faster-whisper, local analysis with Ollama, and persistent meeting history with SQLite.")
                : t("Runs locally with Ollama. No paid AI API required. Setup instructions are available on GitHub.");
            return (
              <article key={project.id} className="overflow-hidden rounded-3xl border border-black/10 bg-[#fafafa] dark:border-white/10 dark:bg-[#0d1118]">
                <div className={hasVisualPanel ? "grid lg:grid-cols-[1.15fr_0.85fr]" : ""}>
                  <div className="p-7 sm:p-10">
                    <div className="flex flex-wrap items-center gap-3 text-sm">
                      <span className="font-mono text-gray-500">{String(index + 1).padStart(2, "0")}</span>
                      <span className="font-medium text-blue-600 dark:text-blue-400">{project.version ? t("Featured AI Project") : project.type}</span>
                      {project.version && <span className="rounded-full border border-black/10 px-3 py-1 dark:border-white/15">{project.version}</span>}
                    </div>
                    <h3 className="mt-6 text-3xl font-semibold tracking-tight sm:text-4xl">{project.title}</h3>
                    <p className="mt-5 max-w-2xl text-base leading-8 text-gray-600 dark:text-gray-400">{project.description}</p>
                    <div className="mt-6 flex flex-wrap gap-2">{project.technologies.map((technology) => <span key={technology} className="rounded-lg border border-black/10 px-3 py-1.5 text-sm text-gray-600 dark:border-white/10 dark:text-gray-300">{technology}</span>)}</div>
                    <ul className="mt-7 space-y-2 text-base leading-7 text-gray-600 dark:text-gray-400">{project.highlights.slice(0, 3).map((item) => <li key={item} className="flex gap-3"><span aria-hidden="true" className="text-blue-600 dark:text-blue-400">✓</span>{item}</li>)}</ul>
                    <div className="mt-8 flex flex-wrap gap-3">
                      <Link href={localePath(locale, `/projects/${project.id}`)} className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-5 py-3 text-sm font-medium text-white hover:bg-blue-700">{t("Read case study")}<ArrowUpRight size={17} aria-hidden="true" /></Link>
                      {project.github && <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-black/15 px-5 py-3 text-sm font-medium hover:bg-black/5 dark:border-white/20 dark:hover:bg-white/5"><FaGithub size={17} aria-hidden="true" />{t("View source")}</a>}
                      {project.demo && <a href={project.demo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-3 text-sm font-medium">{t("Live demo")}<ArrowUpRight size={17} /></a>}
                    </div>
                  </div>
                  {hasVisualPanel && (
                    <aside aria-label={panelTitle} className={`flex flex-col justify-center p-7 text-white sm:p-10 ${panelBg}`}>
                      <p className={`text-sm uppercase tracking-widest ${accent}`}>{panelTitle}</p>
                      <ol className="mt-8 space-y-7">
                        {panelSteps.map((step, stepIndex) => <li key={step.name} className="grid grid-cols-[2rem_1fr] gap-4"><span className={`pt-1 font-mono text-sm ${accent}`}>0{stepIndex + 1}</span><div><h4 className="text-lg font-medium">{step.name}</h4><p className="mt-2 text-base leading-7 text-slate-300">{step.description}</p></div></li>)}
                      </ol>
                      <p className="mt-9 border-t border-white/15 pt-5 text-sm leading-6 text-slate-300">{panelFooter}</p>
                    </aside>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
