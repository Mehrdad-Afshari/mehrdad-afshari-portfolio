"use client";

import { Menu, Moon, Sun, X } from "lucide-react";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(true);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-black/10 bg-white/80 backdrop-blur-xl dark:border-white/10 dark:bg-black/70">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">

        {/* Logo */}
        <a
          href="#home"
          className="text-xl font-bold tracking-tight text-black dark:text-white"
        >
          MA
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          <a href="#about" className="nav-link">
            About
          </a>

          <a href="#skills" className="nav-link">
            Skills
          </a>

          <a href="#projects" className="nav-link">
            Projects
          </a>

          <a href="#experience" className="nav-link">
            Experience
          </a>

          <a href="#education" className="nav-link">
            Education
          </a>

          <a href="#contact" className="nav-link">
            Contact
          </a>
        </div>

        {/* Desktop Theme Button */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="hidden rounded-full border border-black/10 p-2 text-gray-700 transition hover:bg-black/5 dark:border-white/10 dark:text-gray-300 dark:hover:bg-white/10 md:block"
          aria-label="Toggle theme"
        >
          {darkMode ? <Sun size={18} /> : <Moon size={18} />}
        </button>

        {/* Mobile Controls */}
        <div className="flex items-center gap-2 md:hidden">

          <button
            onClick={() => setDarkMode(!darkMode)}
            className="rounded-full border border-black/10 p-2 text-gray-700 dark:border-white/10 dark:text-gray-300"
            aria-label="Toggle theme"
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <button
            onClick={() => setMobileMenu(!mobileMenu)}
            className="rounded-full border border-black/10 p-2 text-gray-700 dark:border-white/10 dark:text-gray-300"
            aria-label="Toggle menu"
          >
            {mobileMenu ? <X size={18} /> : <Menu size={18} />}
          </button>

        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenu && (
        <div className="border-t border-black/10 bg-white px-6 py-6 dark:border-white/10 dark:bg-black md:hidden">
          <div className="flex flex-col gap-5">

            <a href="#about" onClick={() => setMobileMenu(false)}>
              About
            </a>

            <a href="#skills" onClick={() => setMobileMenu(false)}>
              Skills
            </a>

            <a href="#projects" onClick={() => setMobileMenu(false)}>
              Projects
            </a>

            <a href="#experience" onClick={() => setMobileMenu(false)}>
              Experience
            </a>

            <a href="#education" onClick={() => setMobileMenu(false)}>
              Education
            </a>

            <a href="#contact" onClick={() => setMobileMenu(false)}>
              Contact
            </a>

          </div>
        </div>
      )}
    </nav>
  );
}