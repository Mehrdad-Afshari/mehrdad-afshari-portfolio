import { getTranslator } from "@/lib/translations";
import { type LocaleProps } from "@/lib/i18n";
const skillGroups = [
  {
    title: "AI & Generative AI",
    description:
      "Modern AI technologies for building intelligent applications and AI-powered workflows.",
    skills: [
      "Generative AI",
      "LLMs",
      "Prompt Engineering",
      "AI Agents",
      "Agent Workflows",
      "MCP",
      "AI Application Development",
      "Responsible AI",
    ],
  },
  {
    title: "Software Engineering",
    description:
      "Professional experience in application development and enterprise software.",
    skills: [
      "C#",
      "VB.NET",
      "Python",
      "JavaScript",
      ".NET",
      "REST APIs",
      "Software Architecture",
    ],
  },
  {
    title: "Databases",
    description:
      "Database development, design, optimization and data analysis.",
    skills: [
      "SQL Server",
      "Database Design",
      "Query Optimization",
      "SQL",
      "Data Analysis",
    ],
  },
  {
    title: "Web & Tools",
    description:
      "Web technologies and development tools used across professional and personal projects.",
    skills: [
      "WordPress",
      "HTML",
      "CSS",
      "Git",
      "GitHub",
      "Visual Studio",
      "VS Code",
    ],
  },
];

export default function Skills({ locale = "en" }: LocaleProps) {
  const t = getTranslator(locale);
  return (
    <section
      id="skills"
      className="bg-white py-24 text-[#111111] dark:bg-[#0d1017] dark:text-white"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-16">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-blue-600 dark:text-blue-400">
            {t("02 — Skills")}
          </p>

          <h2 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">
            {t("Technologies I work with.")}
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {skillGroups.map((group) => (
            <div
              key={t(group.title)}
              className="rounded-3xl border border-black/10 bg-[#fafafa] p-8 transition duration-300 hover:-translate-y-1 hover:border-black/20 dark:border-white/10 dark:bg-white/5 dark:hover:border-white/20"
            >
              <h3 className="text-xl font-semibold">{t(group.title)}</h3>

              <p className="mt-3 text-sm leading-6 text-gray-600 dark:text-gray-400">
                {t(group.description)}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={t(skill)}
                    className="rounded-full border border-black/10 bg-white px-3 py-1.5 text-sm text-gray-700 dark:border-white/10 dark:bg-white/5 dark:text-gray-300"
                  >
                    {t(skill)}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
