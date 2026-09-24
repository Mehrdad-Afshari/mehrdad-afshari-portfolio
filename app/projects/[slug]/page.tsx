import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
type ProjectPageProps = {
    params: Promise<{
        slug: string;
    }>;
};
export function generateStaticParams() { return projects.map(({ id }) => ({ slug: id })); }
export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
    const { slug } = await params;
    const project = projects.find((item) => item.id === slug);
    if (!project)
        return { title: "Project not found", robots: { index: false } };
    return {
        title: project.title,
        description: project.shortDescription,
        alternates: { canonical: `/projects/${project.id}` },
        openGraph: { type: "article", url: `/projects/${project.id}`, title: `${project.title} | Mehrdad Afshari`, description: project.shortDescription },
        twitter: { card: "summary_large_image", title: project.title, description: project.shortDescription },
    };
}
export default async function ProjectPage({ params }: ProjectPageProps) {
    const { slug } = await params;
    const project = projects.find((item) => item.id === slug);
    if (!project)
        notFound();
    return (<>
      <Navbar />
      <main id="main-content" className="mx-auto max-w-6xl px-6 pb-20 pt-32 lg:px-8">
        <Link href="/#projects" className="inline-flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400"><ArrowLeft size={16}/>All projects</Link>
        <header className="border-b border-black/10 pb-12 pt-10 dark:border-white/10">
          <p className="text-sm font-medium text-blue-600 dark:text-blue-400">{project.type}{project.version ? ` / ${project.version}` : ""}</p>
          <h1 className="mt-5 text-4xl font-semibold tracking-tight sm:text-6xl">{project.title}</h1>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-gray-600 dark:text-gray-400">{project.description}</p>
          <div className="mt-7 flex flex-wrap gap-2">{project.technologies.map((tech) => <span key={tech} className="rounded-lg border border-black/10 px-3 py-2 text-sm dark:border-white/15">{tech}</span>)}</div>
          <div className="mt-8 flex flex-wrap gap-4">
            {project.github && <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-5 py-3 text-sm font-medium text-white hover:bg-blue-700">View source on GitHub<ArrowUpRight size={16}/></a>}
            {project.demo && <a href={project.demo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border px-5 py-3 text-sm">Live demo<ArrowUpRight size={16}/></a>}
          </div>
        </header>
        {project.problem && <section className="grid gap-10 border-b border-black/10 py-14 dark:border-white/10 md:grid-cols-2">
          <div><h2 className="text-2xl font-semibold">The problem</h2><p className="mt-5 text-base leading-8 text-gray-600 dark:text-gray-400">{project.problem}</p></div>
          <div><h2 className="text-2xl font-semibold">My approach</h2><p className="mt-5 text-base leading-8 text-gray-600 dark:text-gray-400">{project.solution}</p></div>
        </section>}
        <section className="grid gap-10 py-14 lg:grid-cols-[1.4fr_1fr]">
          <div><h2 className="text-2xl font-semibold">Project overview</h2><div className="mt-6 space-y-4">{project.overview.map((text) => <p key={text} className="text-base leading-8 text-gray-600 dark:text-gray-400">{text}</p>)}</div></div>
          <aside className="rounded-2xl bg-[#101c32] p-7 text-white"><h2 className="text-xl font-semibold">What I built</h2><ul className="mt-5 space-y-4">{project.highlights.map((text) => <li key={text} className="text-base leading-7 text-slate-200">{text}</li>)}</ul></aside>
        </section>
        {project.algorithms?.length && <section className="border-t border-black/10 py-14 dark:border-white/10"><h2 className="text-2xl font-semibold">Engineering decisions</h2><div className="mt-8 grid gap-5 md:grid-cols-2">{project.algorithms.map((item) => <article key={item.name} className="rounded-2xl border border-black/10 p-7 dark:border-white/10"><h3 className="text-lg font-semibold">{item.name}</h3><p className="mt-4 text-base leading-8 text-gray-600 dark:text-gray-400">{item.description}</p></article>)}</div></section>}
        {project.challenges && <section className="border-t border-black/10 py-14 dark:border-white/10"><h2 className="text-2xl font-semibold">Challenges and fixes</h2><div className="mt-8 grid gap-8 md:grid-cols-2">{project.challenges.map((item) => <article key={item.name}><h3 className="text-lg font-semibold">{item.name}</h3><p className="mt-3 text-base leading-8 text-gray-600 dark:text-gray-400">{item.description}</p></article>)}</div></section>}
        {project.results && project.results.length > 0 && <section className="py-14"><h2 className="text-2xl font-semibold">Evaluation results</h2><div className="mt-8 grid gap-5 md:grid-cols-3">{project.results.map((result) => <article key={result.map} className="rounded-2xl border p-6"><h3 className="text-lg font-semibold">{result.map}</h3><dl className="mt-4 space-y-3">{Object.entries(result).filter(([key]) => key !== "map").map(([key, value]) => <div key={key} className="flex justify-between gap-4"><dt>{key}</dt><dd>{value.toLocaleString()}</dd></div>)}</dl></article>)}</div></section>}
        {project.outcome && <section className="rounded-2xl border border-blue-500/20 bg-blue-500/5 p-8"><h2 className="text-2xl font-semibold">Result and learning</h2><p className="mt-5 text-base leading-8 text-gray-600 dark:text-gray-400">{project.outcome}</p><p className="mt-4 text-base leading-8 text-gray-600 dark:text-gray-400">A useful RAG application depends on the whole system: ingestion, chunking, retrieval, persistence, meaningful sources, and a clear interface.</p></section>}
        {project.limitations?.length && <section className="py-14"><h2 className="text-2xl font-semibold">Scope and limitations</h2><ul className="mt-6 list-disc space-y-3 pl-5 text-base leading-8 text-gray-600 dark:text-gray-400">{project.limitations.map((text) => <li key={text}>{text}</li>)}</ul></section>}
        {project.documentation && <section className="border-t border-black/10 py-10 dark:border-white/10"><h2 className="text-2xl font-semibold">Explore the implementation</h2><p className="mt-4 text-base leading-7 text-gray-600 dark:text-gray-400">This case study is based on the project’s own documentation.</p><div className="mt-6 flex flex-wrap gap-4">{project.documentation.map((item) => <a key={item.href} href={item.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-black/10 px-4 py-3 text-sm hover:bg-black/5 dark:border-white/15 dark:hover:bg-white/5">{item.label}<ArrowUpRight size={16}/></a>)}</div></section>}
        <Link href="/#contact" className="inline-flex items-center gap-2 font-medium text-blue-600 dark:text-blue-400">Let’s talk about AI and software development<ArrowUpRight size={17}/></Link>
      </main>
      <Footer />
    </>);
}
