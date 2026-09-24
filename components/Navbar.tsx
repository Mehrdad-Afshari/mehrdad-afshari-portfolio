"use client";
import Link from "next/link";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useState } from "react";
const navigation = [
    { name: "Projects", href: "/#projects" },
    { name: "About", href: "/#about" },
    { name: "Skills", href: "/#skills" },
    { name: "Certifications", href: "/#certifications", },
    { name: "Experience", href: "/#experience" },
    { name: "Education", href: "/#education" },
    { name: "Contact", href: "/#contact" },
];
export default function Navbar() {
    const [mobileMenu, setMobileMenu] = useState(false);
    const toggleTheme = () => {
        const dark = document.documentElement.classList.toggle("dark");
        try {
            localStorage.setItem("theme", dark ? "dark" : "light");
        }
        catch { }
    };
    const closeMobileMenu = () => {
        setMobileMenu(false);
    };
    return (<nav onKeyDown={(event) => { if (event.key === "Escape") {
        setMobileMenu(false);
        document.getElementById("menu-toggle")?.focus();
    } }} className="fixed top-0 z-50 w-full border-b border-black/10 bg-white/80 backdrop-blur-xl dark:border-white/10 dark:bg-black/70">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* Logo */}
        <Link href="/#home" onClick={closeMobileMenu} className="text-xl font-bold tracking-tight text-black dark:text-white" aria-label="Mehrdad Afshari - Home">
          MA
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 lg:flex">
          {navigation.map((item) => (<Link key={item.href} href={item.href} className="nav-link">
              {item.name}
            </Link>))}
        </div>

        {/* Desktop Theme Button */}
        <button type="button" onClick={toggleTheme} className="hidden rounded-full border border-black/10 p-2 text-gray-700 transition hover:bg-black/5 dark:border-white/10 dark:text-gray-300 dark:hover:bg-white/10 lg:block" aria-label="Toggle color theme" title="Toggle color theme">
          <Sun size={18} className="hidden dark:block" aria-hidden="true"/><Moon size={18} className="dark:hidden" aria-hidden="true"/>
        </button>

        {/* Mobile Controls */}
        <div className="flex items-center gap-2 lg:hidden">
          <button type="button" onClick={toggleTheme} className="rounded-full border border-black/10 p-2 text-gray-700 transition hover:bg-black/5 dark:border-white/10 dark:text-gray-300 dark:hover:bg-white/10" aria-label="Toggle color theme" title="Toggle color theme">
            <Sun size={18} className="hidden dark:block" aria-hidden="true"/><Moon size={18} className="dark:hidden" aria-hidden="true"/>
          </button>

          <button type="button" onClick={() => setMobileMenu((current) => !current)} className="rounded-full border border-black/10 p-2 text-gray-700 transition hover:bg-black/5 dark:border-white/10 dark:text-gray-300 dark:hover:bg-white/10" aria-label={mobileMenu ? "Close menu" : "Open menu"} aria-expanded={mobileMenu} aria-controls="mobile-navigation" id="menu-toggle">
            {mobileMenu ? <X size={18}/> : <Menu size={18}/>}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenu && (<div id="mobile-navigation" className="border-t border-black/10 bg-white/95 px-6 py-6 backdrop-blur-xl dark:border-white/10 dark:bg-black/95 lg:hidden">
          <div className="flex flex-col gap-5">
            {navigation.map((item) => (<Link key={item.href} href={item.href} onClick={closeMobileMenu} className="text-sm font-medium text-gray-700 transition hover:text-black dark:text-gray-300 dark:hover:text-white">
                {item.name}
              </Link>))}
          </div>
        </div>)}
    </nav>);
}
