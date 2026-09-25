import type { LocaleProps } from "@/lib/i18n";
import { HomeStructuredData } from "@/components/StructuredData";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Certifications from "@/components/Certifications";
export default function HomePage({ locale = "en" }: LocaleProps) {
  return (
    <>
      <HomeStructuredData locale={locale} />
      <Navbar locale={locale} />
      <main id="main-content">
        <Hero locale={locale} />

        <Projects locale={locale} />

        <About locale={locale} />

        <Skills locale={locale} />

        <Certifications locale={locale} />

        <Experience locale={locale} />

        <Education locale={locale} />

        <Contact locale={locale} />
      </main>
      <Footer locale={locale} />
    </>
  );
}
