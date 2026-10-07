import { getTranslator } from "@/lib/translations";
import { type LocaleProps } from "@/lib/i18n";
const skillGroups = [
  {
    title: "Applied AI",
    description: "AI technologies demonstrated in hands-on projects, focused on local LLM applications, retrieval, grounded outputs, and practical AI workflows.",
    skills: ["Agentic AI", "LangGraph", "Tool Calling", "Human-in-the-Loop", "RAG", "LLMs", "Embeddings", "Vector Search", "FAISS", "Ollama", "faster-whisper", "Prompt Engineering", "Grounded Q&A", "Responsible AI"],
  },
  {
    title: "Software Engineering",
    description: "Professional application and enterprise-software experience, extended with modern Python APIs and TypeScript full-stack development.",
    skills: ["C#", "VB.NET", ".NET", "Python", "FastAPI", "Pydantic", "REST APIs", "TypeScript", "JavaScript", "Next.js", "Software Architecture"],
  },
  {
    title: "Databases",
    description: "Database development, design, optimization and data analysis from professional enterprise software work.",
    skills: ["SQL Server", "SQLite", "Database Design", "Query Optimization", "SQL", "Data Analysis"],
  },
  {
    title: "Engineering Workflow",
    description: "Tools and practices used across professional work and current portfolio projects to build, verify, document, and ship software.",
    skills: ["Git", "GitHub", "GitHub Actions", "CI", "Docker", "Terraform", "AWS", "API Documentation", "Vercel", "Tailwind CSS", "WordPress", "Visual Studio", "VS Code"],
  },
];

export default function Skills({ locale = "en" }: LocaleProps) {
  const t = getTranslator(locale);
  return (
    <section id="skills" className="bg-white py-24 text-[#111111] dark:bg-[#0d1017] dark:text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-16">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-blue-600 dark:text-blue-400">{t("02 — Skills")}</p>
          <h2 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">{t("Engineering experience, extended with applied AI.")}</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {skillGroups.map((group) => (
            <div key={t(group.title)} className="rounded-3xl border border-black/10 bg-[#fafafa] p-8 transition duration-300 hover:-translate-y-1 hover:border-black/20 dark:border-white/10 dark:bg-white/5 dark:hover:border-white/20">
              <h3 className="text-xl font-semibold">{t(group.title)}</h3>
              <p className="mt-3 text-sm leading-6 text-gray-600 dark:text-gray-400">{t(group.description)}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {group.skills.map((skill) => <span key={t(skill)} className="rounded-full border border-black/10 bg-white px-3 py-1.5 text-sm text-gray-700 dark:border-white/10 dark:bg-white/5 dark:text-gray-300">{t(skill)}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
