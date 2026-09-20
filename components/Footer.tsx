import { FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-black/10 bg-[#fafafa] text-[#111111] dark:border-white/10 dark:bg-[#080b12] dark:text-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 sm:flex-row sm:items-center sm:justify-between lg:px-8">
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} Mehrdad Afshari. All rights reserved.
        </p>

        <a
          href="https://github.com/Mehrdad-Afshari"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm text-gray-500 transition hover:text-black dark:hover:text-white"
        >
          <FaGithub size={16} />
          GitHub
        </a>
      </div>
    </footer>
  );
}