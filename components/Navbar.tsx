"use client";

import { Menu, Moon, Sun, X } from "lucide-react";
import { useEffect, useState } from "react";

const navigation = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(true);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "light") {
      setDarkMode(false);
    } else if (savedTheme === "dark") {
      setDarkMode(true);
    }
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode((current) => !current);
  };

  const closeMobileMenu = () => {
    setMobileMenu(false);
  };

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-black/10 bg-white/80 backdrop-blur-xl dark:border-white/10 dark:bg-black/70">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* Logo */}
        <a
          href="#home"
          onClick={closeMobileMenu}
          className="text-xl font-bold tracking-tight text-black dark:text-white"
          aria-label="Mehrdad Afshari - Home"
        >
          MA
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navigation.map((item) => (
            <a key={item.href} href={item.href} className="nav-link">
              {item.name}
            </a>
          ))}
        </div>

        {/* Desktop Theme Button */}
        <button
          type="button"
          onClick={toggleTheme}
          className="hidden rounded-full border border-black/10 p-2 text-gray-700 transition hover:bg-black/5 dark:border-white/10 dark:text-gray-300 dark:hover:bg-white/10 md:block"
          aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
          title={darkMode ? "Light mode" : "Dark mode"}
        >
          {darkMode ? <Sun size={18} /> : <Moon size={18} />}
        </button>

        {/* Mobile Controls */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            type="button"
            onClick={toggleTheme}
            className="rounded-full border border-black/10 p-2 text-gray-700 transition hover:bg-black/5 dark:border-white/10 dark:text-gray-300 dark:hover:bg-white/10"
            aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            title={darkMode ? "Light mode" : "Dark mode"}
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <button
            type="button"
            onClick={() => setMobileMenu((current) => !current)}
            className="rounded-full border border-black/10 p-2 text-gray-700 transition hover:bg-black/5 dark:border-white/10 dark:text-gray-300 dark:hover:bg-white/10"
            aria-label={mobileMenu ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenu}
            aria-controls="mobile-navigation"
          >
            {mobileMenu ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenu && (
        <div
          id="mobile-navigation"
          className="border-t border-black/10 bg-white/95 px-6 py-6 backdrop-blur-xl dark:border-white/10 dark:bg-black/95 md:hidden"
        >
          <div className="flex flex-col gap-5">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={closeMobileMenu}
                className="text-sm font-medium text-gray-700 transition hover:text-black dark:text-gray-300 dark:hover:text-white"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}