import { getTranslator } from "@/lib/translations";
import { type LocaleProps } from "@/lib/i18n";
const experiences = [
  {
    period: "03/2011 – Present",
    role: "Freelance Web Developer",
    company: "Self-Employed",
    location: "",
    description:
      "Developed websites and online business solutions, customized WordPress systems and plugins, and delivered web solutions for small and medium-sized businesses.",
  },
  {
    period: "12/2016 – 03/2024",
    role: "Senior Software Developer & Database Developer",
    company: "Namaad Iran Co.",
    location: "Tehran, Iran",
    description:
      "Developed enterprise business applications using .NET technologies, designed and maintained SQL Server databases, implemented HR, payroll, attendance management and quality control systems, and built reporting and data analysis solutions.",
  },
  {
    period: "01/2010 – 03/2011",
    role: "IT Specialist",
    company: "Abniye Naghshe Alborz",
    location: "",
    description:
      "Managed IT infrastructure and support operations, solved hardware and software issues, and supported technical documentation and AutoCAD projects.",
  },
];

export default function Experience({ locale = "en" }: LocaleProps) {
  const t = getTranslator(locale);
  return (
    <section
      id="experience"
      className="bg-white py-24 text-[#111111] dark:bg-[#0d1017] dark:text-white"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-16">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-blue-600 dark:text-blue-400">
            {t("05 — Experience")}
          </p>

          <h2 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">
            {t("Building software and solving technical problems.")}
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-600 dark:text-gray-400">
            {t(
              "Professional experience across software development, database engineering, web development, and IT.",
            )}
          </p>
        </div>

        <div className="max-w-4xl">
          {experiences.map((experience) => (
            <div
              key={`${t(experience.company)}-${t(experience.period)}`}
              className="grid gap-6 border-t border-black/10 py-8 dark:border-white/10 md:grid-cols-[180px_1fr]"
            >
              <div className="text-sm font-medium text-gray-500">
                {t(experience.period)}
              </div>

              <div>
                <h3 className="text-xl font-semibold">{t(experience.role)}</h3>

                <p className="mt-1 text-blue-600 dark:text-blue-400">
                  {t(experience.company)}
                </p>

                {experience.location && (
                  <p className="mt-1 text-sm text-gray-500">
                    {t(experience.location)}
                  </p>
                )}

                <p className="mt-4 max-w-2xl leading-7 text-gray-600 dark:text-gray-400">
                  {t(experience.description)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
