const education = [
  {
    period: "2025 – Present",
    degree: "M.Sc. Computer Science",
    institution: "University of Rostock",
    location: "Rostock, Germany",
    description:
      "Graduate studies in Computer Science with a focus on software engineering, algorithms, artificial intelligence, and modern computing technologies.",
  },
  {
    period: "2016 – 2018",
    degree: "M.Sc. MBA",
    institution: "Kharazmi University",
    location: "Iran",
    description:
      "Master's degree in Business Administration.",
  },
  {
    period: "2009 – 2015",
    degree: "B.Sc. Computer Engineering",
    institution: "Islamic Azad University – Qazvin Branch",
    location: "Iran",
    description:
      "Bachelor's degree in Computer Engineering.",
  },
];

export default function Education() {
  return (
    <section
      id="education"
      className="bg-[#fafafa] py-24 text-[#111111] dark:bg-[#080b12] dark:text-white"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-16">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-blue-600 dark:text-blue-400">
            06 — Education
          </p>

          <h2 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">
            Academic background.
          </h2>
        </div>

        <div className="max-w-4xl">
          {education.map((item) => (
            <div
              key={`${item.institution}-${item.period}`}
              className="grid gap-6 border-t border-black/10 py-8 dark:border-white/10 md:grid-cols-[180px_1fr]"
            >
              <div className="text-sm font-medium text-gray-500">
                {item.period}
              </div>

              <div>
                <h3 className="text-2xl font-semibold">
                  {item.degree}
                </h3>

                <p className="mt-2 text-blue-600 dark:text-blue-400">
                  {item.institution}
                </p>

                <p className="mt-1 text-sm text-gray-500">
                  {item.location}
                </p>

                <p className="mt-4 max-w-2xl leading-7 text-gray-600 dark:text-gray-400">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}