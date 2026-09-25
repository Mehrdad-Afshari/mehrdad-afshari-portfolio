import { getTranslator } from "@/lib/translations";
import { type LocaleProps } from "@/lib/i18n";
export default function About({ locale = "en" }: LocaleProps) {
  const t = getTranslator(locale);
  return (
    <section
      id="about"
      className="bg-[#fafafa] py-24 text-[#111111] dark:bg-[#080b12] dark:text-white"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Heading */}
        <div className="mb-16">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-blue-600 dark:text-blue-400">
            {t("01 — About")}
          </p>

          <h2 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">
            {t("Computer Science, software and AI.")}
          </h2>
        </div>

        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr]">
          {/* Main Text */}
          <div className="space-y-6 text-lg leading-8 text-gray-600 dark:text-gray-400">
            <p>
              {t(
                "I am an MSc Computer Science student at the University of Rostock, Germany, with a growing focus on artificial intelligence and software development.",
              )}
            </p>

            <p>
              {t(
                "My background combines software development experience with academic work in computer science. I enjoy understanding how systems work and turning ideas into practical software.",
              )}
            </p>

            <p>
              {t(
                "Currently, I am focusing on expanding my skills in AI, algorithms, software engineering and modern web technologies while building practical projects alongside my studies.",
              )}
            </p>
          </div>

          {/* Quick Facts */}
          <div className="rounded-3xl border border-black/10 bg-white p-8 dark:border-white/10 dark:bg-white/5">
            <p className="mb-6 text-sm font-medium uppercase tracking-wider text-gray-500">
              {t("Currently")}
            </p>

            <div className="space-y-6">
              <div>
                <p className="text-sm text-gray-500">{t("Education")}</p>
                <p className="mt-1 font-medium">{t("MSc Computer Science")}</p>
              </div>

              <div>
                <p className="text-sm text-gray-500">{t("University")}</p>
                <p className="mt-1 font-medium">{t("University of Rostock")}</p>
              </div>

              <div>
                <p className="text-sm text-gray-500">{t("Location")}</p>
                <p className="mt-1 font-medium">{t("Rostock, Germany")}</p>
              </div>

              <div>
                <p className="text-sm text-gray-500">{t("Focus")}</p>
                <p className="mt-1 font-medium">
                  {t("AI · Software Development")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
