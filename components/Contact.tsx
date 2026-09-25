import { getTranslator } from "@/lib/translations";
import { type LocaleProps } from "@/lib/i18n";
import { ArrowUpRight, Mail, Phone } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

export default function Contact({ locale = "en" }: LocaleProps) {
  const t = getTranslator(locale);
  return (
    <section
      id="contact"
      className="bg-white py-24 text-[#111111] dark:bg-[#0d1017] dark:text-white"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-blue-600 dark:text-blue-400">
            {t("07 — Contact")}
          </p>

          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            {t("Let's build something useful.")}
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400">
            {t(
              "I'm interested in software development, artificial intelligence, and building practical technology.",
            )}
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="mailto:afshari@outlook.com"
              className="group inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-500"
            >
              <Mail size={18} />
              {t("Get in touch")}
              <ArrowUpRight
                size={17}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>

            <a
              href="tel:+4915754781802"
              className="inline-flex items-center gap-2 rounded-full border border-black/10 px-6 py-3 font-medium transition hover:bg-black/5 dark:border-white/10 dark:hover:bg-white/10"
            >
              <Phone size={18} />
              {t("Call me")}
            </a>
          </div>

          <div className="mt-10 flex items-center gap-6 text-gray-500 dark:text-gray-400">
            <a
              href="https://github.com/Mehrdad-Afshari"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-black dark:hover:text-white"
              aria-label="GitHub"
            >
              <FaGithub size={21} />
            </a>

            <a
              href="https://linkedin.com/in/mehrdadafshari"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-black dark:hover:text-white"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn size={21} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
