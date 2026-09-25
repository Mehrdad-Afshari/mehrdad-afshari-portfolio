"use client";

import Link from "next/link";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useState } from "react";
import { localePath, type Locale } from "@/lib/i18n";

export default function Navbar({
  locale = "en",
  path = "/",
}: {
  locale?: Locale;
  path?: string;
}) {
  const [mobileMenu, setMobileMenu] = useState(false);
  const de = locale === "de";
  const navigation = [
    ["projects", de ? "Projekte" : "Projects"],
    ["about", de ? "Über mich" : "About"],
    ["skills", de ? "Kompetenzen" : "Skills"],
    ["certifications", de ? "Zertifikate" : "Certifications"],
    ["experience", de ? "Berufserfahrung" : "Experience"],
    ["education", de ? "Ausbildung" : "Education"],
    ["contact", de ? "Kontakt" : "Contact"],
  ];
  const home = localePath(locale);
  const toggleTheme = () => {
    const dark = document.documentElement.classList.toggle("dark");
    try {
      localStorage.setItem("theme", dark ? "dark" : "light");
    } catch {}
  };
  const themeLabel = de ? "Farbschema wechseln" : "Toggle color theme";

  return (
    <nav
      aria-label={de ? "Hauptnavigation" : "Main navigation"}
      onKeyDown={(event) => {
        if (event.key === "Escape") {
          setMobileMenu(false);
          document.getElementById("menu-toggle")?.focus();
        }
      }}
      className="fixed top-0 z-50 w-full border-b border-black/10 bg-white/90 backdrop-blur-xl dark:border-white/10 dark:bg-black/80"
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-3 px-5 lg:px-8">
        <Link
          href={`${home}#home`}
          onClick={() => setMobileMenu(false)}
          className="text-xl font-bold tracking-tight"
          aria-label={
            de ? "Mehrdad Afshari – Startseite" : "Mehrdad Afshari – Home"
          }
        >
          MA
        </Link>
        <div className="hidden items-center gap-5 xl:flex">
          {navigation.map(([id, label]) => (
            <Link key={id} href={`${home}#${id}`} className="nav-link">
              {label}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <div
            aria-label={de ? "Sprache" : "Language"}
            className="flex rounded-full border border-black/15 p-1 text-sm dark:border-white/20"
          >
            {(["en", "de"] as const).map((language) => (
              <a
                key={language}
                href={localePath(language, path)}
                hrefLang={language}
                lang={language}
                aria-label={language === "en" ? "English" : "Deutsch"}
                aria-current={locale === language ? "page" : undefined}
                onClick={(event) => {
                  // Keep section links and query parameters when changing language.
                  event.currentTarget.href =
                    localePath(language, path) +
                    window.location.search +
                    window.location.hash;
                }}
                className={`rounded-full px-3 py-2 ${locale === language ? "bg-blue-600 text-white" : "hover:bg-black/5 dark:hover:bg-white/10"}`}
              >
                <span className="sm:hidden">{language.toUpperCase()}</span>
                <span className="hidden sm:inline">{language === "en" ? "English" : "Deutsch"}</span>
              </a>
            ))}
          </div>
          <button
            type="button"
            onClick={toggleTheme}
            className="rounded-full p-3 hover:bg-black/5 dark:hover:bg-white/10"
            aria-label={themeLabel}
            title={themeLabel}
          >
            <Sun size={18} className="hidden dark:block" aria-hidden="true" />
            <Moon size={18} className="dark:hidden" aria-hidden="true" />
          </button>
          <button
            type="button"
            id="menu-toggle"
            onClick={() => setMobileMenu(!mobileMenu)}
            className="rounded-full p-3 hover:bg-black/5 dark:hover:bg-white/10 xl:hidden"
            aria-label={
              mobileMenu
                ? de
                  ? "Menü schließen"
                  : "Close menu"
                : de
                  ? "Menü öffnen"
                  : "Open menu"
            }
            aria-expanded={mobileMenu}
            aria-controls="mobile-navigation"
          >
            {mobileMenu ? (
              <X size={18} aria-hidden="true" />
            ) : (
              <Menu size={18} aria-hidden="true" />
            )}
          </button>
        </div>
      </div>
      {mobileMenu && (
        <div
          id="mobile-navigation"
          className="max-h-[calc(100dvh-5rem)] overflow-y-auto border-t border-black/10 bg-white px-6 py-6 dark:border-white/10 dark:bg-[#080b12] xl:hidden"
        >
          <div className="flex flex-col gap-5">
            {navigation.map(([id, label]) => (
              <Link
                key={id}
                href={`${home}#${id}`}
                onClick={() => setMobileMenu(false)}
                className="text-base font-medium"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
