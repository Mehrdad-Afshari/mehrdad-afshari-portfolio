import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { getProjects } from "@/data/localized-projects";
import { type Locale, localePath } from "@/lib/i18n";
import { getTranslator } from "@/lib/translations";
import { ProjectStructuredData } from "@/components/StructuredData";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ProjectPage({ locale = "en", slug }: { locale?: Locale; slug: string }) {
  const projects = getProjects(locale);
  const t = getTranslator(locale);
  const project = projects.find((item) => item.id === slug);
  if (!project) notFound();
  const relatedProjects = projects.filter((item) => item.id !== project.id).slice(0, 3);

  const isMeeting = project.id === "ai-meeting-assistant";
  const isSokoban = project.id === "sokoban-solver";
  const highlightPanel = isMeeting ? "bg-[#102421]" : isSokoban ? "bg-[#241b35]" : "bg-[#101c32]";
  const learning = project.id === "ai-meeting-assistant"
    ? (locale === "de"
        ? "Die wichtigste Erkenntnis: Eine nützliche lokale Meeting-KI ist nicht nur ein Transkriptionsmodell. Spracherkennung, robuste strukturierte LLM-Ausgaben, persistenter Verlauf, belegte Antworten und sichtbare Laufzeiten müssen als ein zusammenhängendes System funktionieren."
        : "The key learning: a useful local meeting assistant is more than a transcription model. Speech recognition, robust structured LLM output, persistent history, grounded answers, and visible processing time have to work as one coherent system.")
    : project.id === "ai-job-application-assistant"
      ? (locale === "de"
          ? "Die wichtigste Erkenntnis: Bei KI-gestützten Bewerbungswerkzeugen sollten überprüfbare Evidenz und deterministische Bewertung von generativer Textproduktion getrennt bleiben."
          : "The key learning: in AI-assisted application tools, verifiable evidence and deterministic scoring should remain separate from generative writing.")
      : project.id === "ai-knowledge-assistant"
        ? t("A useful RAG application depends on the whole system: ingestion, chunking, retrieval, persistence, meaningful sources, and a clear interface.")
        : null;

  return (
    <>
      <ProjectStructuredData project={project} locale={locale} />
      <Navbar locale={locale} path={`/projects/${project.id}`} />
      <main id="main-content" className="mx-auto max-w-6xl px-6 pb-20 pt-32 lg:px-8">
        <Link href={`${localePath(locale)}#projects`} className="inline-flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
          <ArrowLeft size={16} />{t("All projects")}
        </Link>

        <header className="border-b border-black/10 pb-12 pt-10 dark:border-white/10">
          <p className="text-sm font-medium text-blue-600 dark:text-blue-400">{project.type}{project.version ? ` / ${project.version}` : ""}</p>
          <h1 className="mt-5 text-4xl font-semibold tracking-tight sm:text-6xl">{project.title}</h1>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-gray-600 dark:text-gray-400">{project.description}</p>
          <div className="mt-7 flex flex-wrap gap-2">
            {project.technologies.map((tech) => <span key={tech} className="rounded-lg border border-black/10 px-3 py-2 text-sm dark:border-white/15">{tech}</span>)}
          </div>
          <div className="mt-8 flex flex-wrap gap-4">
            {project.github && <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-5 py-3 text-sm font-medium text-white hover:bg-blue-700">{t("View source on GitHub")}<ArrowUpRight size={16} /></a>}
            {project.demo && <a href={project.demo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border px-5 py-3 text-sm">{t("Live demo")}<ArrowUpRight size={16} /></a>}
          </div>
        </header>

        {project.problem && <section className="grid gap-10 border-b border-black/10 py-14 dark:border-white/10 md:grid-cols-2">
          <div><h2 className="text-2xl font-semibold">{t("The problem")}</h2><p className="mt-5 text-base leading-8 text-gray-600 dark:text-gray-400">{project.problem}</p></div>
          <div><h2 className="text-2xl font-semibold">{t("My approach")}</h2><p className="mt-5 text-base leading-8 text-gray-600 dark:text-gray-400">{project.solution}</p></div>
        </section>}

        <section className="grid gap-10 py-14 lg:grid-cols-[1.4fr_1fr]">
          <div><h2 className="text-2xl font-semibold">{t("Project overview")}</h2><div className="mt-6 space-y-4">{project.overview.map((text) => <p key={text} className="text-base leading-8 text-gray-600 dark:text-gray-400">{text}</p>)}</div></div>
          <aside className={`rounded-2xl p-7 text-white ${highlightPanel}`}><h2 className="text-xl font-semibold">{t("What I built")}</h2><ul className="mt-5 space-y-4">{project.highlights.map((text) => <li key={text} className="text-base leading-7 text-slate-200">{text}</li>)}</ul></aside>
        </section>

        {project.pipeline?.length && <section className="border-t border-black/10 py-14 dark:border-white/10">
          <h2 className="text-2xl font-semibold">{locale === "de" ? "Systemablauf" : "System workflow"}</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">{project.pipeline.map((item, index) => <article key={item.name} className="rounded-2xl border border-black/10 p-6 dark:border-white/10"><span className="font-mono text-sm text-blue-600 dark:text-blue-400">0{index + 1}</span><h3 className="mt-3 text-lg font-semibold">{item.name}</h3><p className="mt-3 text-sm leading-7 text-gray-600 dark:text-gray-400">{item.description}</p></article>)}</div>
        </section>}

        {project.algorithms?.length && <section className="border-t border-black/10 py-14 dark:border-white/10"><h2 className="text-2xl font-semibold">{t("Engineering decisions")}</h2><div className="mt-8 grid gap-5 md:grid-cols-2">{project.algorithms.map((item) => <article key={item.name} className="rounded-2xl border border-black/10 p-7 dark:border-white/10"><h3 className="text-lg font-semibold">{item.name}</h3><p className="mt-4 text-base leading-8 text-gray-600 dark:text-gray-400">{item.description}</p></article>)}</div></section>}

        {project.challenges && <section className="border-t border-black/10 py-14 dark:border-white/10"><h2 className="text-2xl font-semibold">{t("Challenges and fixes")}</h2><div className="mt-8 grid gap-8 md:grid-cols-2">{project.challenges.map((item) => <article key={item.name}><h3 className="text-lg font-semibold">{item.name}</h3><p className="mt-3 text-base leading-8 text-gray-600 dark:text-gray-400">{item.description}</p></article>)}</div></section>}

        {project.results && project.results.length > 0 && <section className="py-14"><h2 className="text-2xl font-semibold">{t("Evaluation results")}</h2><div className="mt-8 grid gap-5 md:grid-cols-3">{project.results.map((result) => <article key={result.map} className="rounded-2xl border p-6"><h3 className="text-lg font-semibold">{result.map}</h3><dl className="mt-4 space-y-3">{Object.entries(result).filter(([key]) => key !== "map").map(([key, value]) => <div key={key} className="flex justify-between gap-4"><dt>{key}</dt><dd>{value.toLocaleString()}</dd></div>)}</dl></article>)}</div></section>}

        {project.outcome && <section className="rounded-2xl border border-blue-500/20 bg-blue-500/5 p-8"><h2 className="text-2xl font-semibold">{t("Result and learning")}</h2><p className="mt-5 text-base leading-8 text-gray-600 dark:text-gray-400">{project.outcome}</p>{learning && <p className="mt-4 text-base leading-8 text-gray-600 dark:text-gray-400">{learning}</p>}</section>}

        {project.limitations?.length && <section className="py-14"><h2 className="text-2xl font-semibold">{t("Scope and limitations")}</h2><ul className="mt-6 list-disc space-y-3 pl-5 text-base leading-8 text-gray-600 dark:text-gray-400">{project.limitations.map((text) => <li key={text}>{text}</li>)}</ul></section>}

        {project.documentation && <section className="border-t border-black/10 py-10 dark:border-white/10"><h2 className="text-2xl font-semibold">{t("Explore the implementation")}</h2><p className="mt-4 text-base leading-7 text-gray-600 dark:text-gray-400">{t("This case study is based on the project’s own documentation.")}</p><div className="mt-6 flex flex-wrap gap-4">{project.documentation.map((item) => <a key={item.href} href={item.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-black/10 px-4 py-3 text-sm hover:bg-black/5 dark:border-white/15 dark:hover:bg-white/5">{item.label}<ArrowUpRight size={16} /></a>)}</div></section>}

        <section className="border-t border-black/10 py-14 dark:border-white/10">
          <h2 className="text-2xl font-semibold">{locale === "de" ? "Weitere Projekte" : "More projects"}</h2>
          <div className="mt-7 grid gap-4 md:grid-cols-3">
            {relatedProjects.map((item) => (
              <Link key={item.id} href={localePath(locale, `/projects/${item.id}`)} className="group rounded-2xl border border-black/10 p-5 transition hover:border-blue-500/40 hover:bg-blue-500/5 dark:border-white/10">
                <p className="text-sm text-blue-600 dark:text-blue-400">{item.type}</p>
                <h3 className="mt-2 font-semibold group-hover:text-blue-600 dark:group-hover:text-blue-400">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-gray-600 dark:text-gray-400">{item.shortDescription}</p>
              </Link>
            ))}
          </div>
        </section>

        <Link href={`${localePath(locale)}#contact`} className="inline-flex items-center gap-2 font-medium text-blue-600 dark:text-blue-400">{t("Let’s talk about AI and software development")}<ArrowUpRight size={17} /></Link>
      </main>
      <Footer locale={locale} />
    </>
  );
}
