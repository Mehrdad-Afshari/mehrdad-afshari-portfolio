import { ArrowRight, Download, Mail } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import Image from "next/image";

export default function Hero() {
  return (
      <section
        id="home"
        className="relative min-h-screen overflow-hidden bg-[#fafafa] text-[#111111] dark:bg-[#080b12] dark:text-white"
      >
      {/* Background glow */}
      <div className="absolute inset-0 -z-0">
        <div className="absolute left-1/3 top-1/4 h-96 w-96 rounded-full bg-blue-600/20 blur-[120px]" />
        <div className="absolute right-1/4 top-1/3 h-80 w-80 rounded-full bg-purple-600/15 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6 pt-20 lg:px-8">
        <div className="grid w-full items-center gap-12 lg:grid-cols-2">

          {/* Text */}
          <div>
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-blue-600 dark:text-blue-400">
              AI Developer · Software & Database Developer
            </p>

            <h1 className="text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              Software engineering.
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Generative AI.
              </span>
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-gray-600 dark:text-gray-400">
              MSc Computer Science student at the University of Rostock, Germany,
              with 13+ years of experience in software development, databases,
              web development, and enterprise applications.
            </p>

            {/* Buttons */}
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 font-medium transition hover:bg-blue-500"
              >
                View Projects
                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>

              <a
                href="/cv/mehrdad-afshari-cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-black/10 px-6 py-3 font-medium text-[#111111] transition hover:bg-black/5 dark:border-white/20 dark:text-white dark:hover:bg-white/10"
              >
                <Download size={18} />
                Download CV
              </a>
            </div>

            {/* Social Links */}
            <div className="mt-10 flex items-center gap-6 text-gray-600 dark:text-gray-400">
              <a
                href="https://github.com/Mehrdad-Afshari"
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-black dark:hover:text-white"
                aria-label="GitHub"
              >
                <FaGithub size={20} />
              </a>

              <a
                href="https://linkedin.com/in/mehrdadafshari"
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-black dark:hover:text-white"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn size={20} />
              </a>

              <a
                href="mailto:afshari@outlook.com"
                className="transition hover:text-black dark:hover:text-white"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Photo */}
          <div className="relative mx-auto w-full max-w-md overflow-hidden rounded-[2rem] border border-black/10 bg-white shadow-2xl shadow-black/10 dark:border-white/10 dark:bg-white/5 dark:shadow-black/30">
            <div className="relative aspect-[4/5]">
              <Image
                src="/images/mehrdad-afshari.jpg"
                alt="Mehrdad Afshari, AI Developer and MSc Computer Science student at the University of Rostock"
                fill
                priority
                sizes="(max-width: 768px) 90vw, 420px"
                className="object-cover object-[center_35%]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}