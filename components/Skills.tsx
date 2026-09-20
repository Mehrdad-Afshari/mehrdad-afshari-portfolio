const skillGroups = [
  {
    title: "AI & Data",
    description: "Exploring intelligent systems and data-driven solutions.",
    skills: ["Python", "Machine Learning", "AI"],
  },
  {
    title: "Software Development",
    description: "Building software with a focus on practical solutions.",
    skills: ["C#", ".NET", "VB.NET", "SQL"],
  },
  {
    title: "Web Development",
    description: "Modern web technologies for responsive applications.",
    skills: ["JavaScript", "React", "Next.js", "TypeScript"],
  },
  {
    title: "Tools & Technologies",
    description: "Tools I use to build, manage and deploy projects.",
    skills: ["Git", "GitHub", "Docker", "Odoo"],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="bg-white py-24 text-[#111111] dark:bg-[#0d1017] dark:text-white"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="mb-16">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-blue-600 dark:text-blue-400">
            02 — Skills
          </p>

          <h2 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">
            Technologies I work with.
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="rounded-3xl border border-black/10 bg-[#fafafa] p-8 transition duration-300 hover:-translate-y-1 hover:border-black/20 dark:border-white/10 dark:bg-white/5 dark:hover:border-white/20"
            >
              <h3 className="text-xl font-semibold">
                {group.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-600 dark:text-gray-400">
                {group.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-black/10 bg-white px-3 py-1.5 text-sm text-gray-700 dark:border-white/10 dark:bg-white/5 dark:text-gray-300"
                  >
                    {skill}
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