import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { projects } from "@/data/projects";
export default function Projects() {
    return (<section id="projects" className="border-y border-black/10 bg-white py-24 dark:border-white/10 dark:bg-[#080b12]">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mb-12 max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-widest text-blue-600 dark:text-blue-400">Selected work</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">From software foundations to local AI.</h2>
          <p className="mt-5 text-base leading-7 text-gray-600 dark:text-gray-400">Practical projects, the decisions behind them, and what I learned along the way.</p>
        </div>
        <div className="space-y-8">
          {projects.map((project, index) => (<article key={project.id} className="overflow-hidden rounded-3xl border border-black/10 bg-[#fafafa] dark:border-white/10 dark:bg-[#0d1118]">
              <div className={project.pipeline ? "grid lg:grid-cols-[1.15fr_0.85fr]" : ""}>
                <div className="p-7 sm:p-10">
                  <div className="flex flex-wrap items-center gap-3 text-sm">
                    <span className="font-mono text-gray-500">{String(index + 1).padStart(2, "0")}</span>
                    <span className="font-medium text-blue-600 dark:text-blue-400">{project.version ? "Featured AI Project" : project.type}</span>
                    {project.version && <span className="rounded-full border border-black/10 px-3 py-1 dark:border-white/15">{project.version}</span>}
                  </div>
                  <h3 className="mt-6 text-3xl font-semibold tracking-tight sm:text-4xl">{project.title}</h3>
                  <p className="mt-5 max-w-2xl text-base leading-8 text-gray-600 dark:text-gray-400">{project.description}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.technologies.map((technology) => <span key={technology} className="rounded-lg border border-black/10 px-3 py-1.5 text-sm text-gray-600 dark:border-white/10 dark:text-gray-300">{technology}</span>)}
                  </div>
                  <ul className="mt-7 space-y-2 text-base leading-7 text-gray-600 dark:text-gray-400">
                    {project.highlights.slice(0, 3).map((item) => <li key={item} className="flex gap-3"><span aria-hidden="true" className="text-blue-600 dark:text-blue-400">✓</span>{item}</li>)}
                  </ul>
                  <div className="mt-8 flex flex-wrap gap-3">
                    <Link href={`/projects/${project.id}`} className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-5 py-3 text-sm font-medium text-white hover:bg-blue-700">Read case study<ArrowUpRight size={17} aria-hidden="true"/></Link>
                    {project.github && <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-black/15 px-5 py-3 text-sm font-medium hover:bg-black/5 dark:border-white/20 dark:hover:bg-white/5"><FaGithub size={17} aria-hidden="true"/>View source</a>}
                    {project.demo && <a href={project.demo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-3 text-sm font-medium">Live demo<ArrowUpRight size={17}/></a>}
                  </div>
                </div>
                {project.pipeline && <aside aria-label="RAG pipeline overview" className="flex flex-col justify-center bg-[#101c32] p-7 text-white sm:p-10">
                  <p className="text-sm uppercase tracking-widest text-blue-300">Inside the RAG pipeline</p>
                  <ol className="mt-8 space-y-7">
                    {project.pipeline.map((step, stepIndex) => <li key={step.name} className="grid grid-cols-[2rem_1fr] gap-4"><span className="pt-1 font-mono text-sm text-blue-300">0{stepIndex + 1}</span><div><h4 className="text-lg font-medium">{step.name}</h4><p className="mt-2 text-base leading-7 text-slate-300">{step.description}</p></div></li>)}
                  </ol>
                  <p className="mt-9 border-t border-white/15 pt-5 text-sm leading-6 text-slate-300">Runs locally with Ollama. No paid AI API required. Setup instructions are available on GitHub.</p>
                </aside>}
              </div>
            </article>))}
        </div>
      </div>
    </section>);
}
