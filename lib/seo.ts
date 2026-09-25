import type { Metadata } from "next";
import { localePath, type Locale } from "./i18n";

export const siteUrl = "https://mehrdad-afshari.de";

export function pageMetadata(
  locale: Locale,
  path: string,
  title: string,
  description: string,
  projectId?: string,
): Metadata {
  const canonical = localePath(locale, path);
  const image = `/og?lang=${locale}${projectId ? `&project=${projectId}` : ""}`;

  return {
    metadataBase: new URL(siteUrl),
    title: { absolute: title },
    description,
    alternates: {
      canonical,
      languages: {
        en: localePath("en", path),
        de: localePath("de", path),
        "x-default": localePath("en", path),
      },
    },
    openGraph: {
      type: projectId ? "article" : "website",
      url: canonical,
      siteName: "Mehrdad Afshari",
      title,
      description,
      locale: locale === "de" ? "de_DE" : "en_GB",
      alternateLocale: [locale === "de" ? "en_GB" : "de_DE"],
      images: [{ url: image, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [{ url: image, alt: title }],
    },
  };
}

export function homeMetadata(locale: Locale) {
  return pageMetadata(
    locale,
    "/",
    locale === "de"
      ? "Mehrdad Afshari | KI- & Softwareentwickler in Deutschland"
      : "Mehrdad Afshari | AI & Software Developer in Germany",
    locale === "de"
      ? "Portfolio von Mehrdad Afshari, KI- und Softwareentwickler und Informatik-Masterstudent in Rostock. Projekte zu Generative AI, RAG, Python, Next.js, .NET und SQL Server."
      : "Portfolio of Mehrdad Afshari, an AI and software developer and MSc Computer Science student in Rostock, Germany. Projects in Generative AI, RAG, Python, Next.js, .NET and SQL Server.",
  );
}

export const baseMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "Mehrdad Afshari", template: "%s | Mehrdad Afshari" },
  applicationName: "Mehrdad Afshari Portfolio",
  authors: [{ name: "Mehrdad Afshari", url: siteUrl }],
  creator: "Mehrdad Afshari",
  publisher: "Mehrdad Afshari",
  category: "technology",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: { icon: "/icon.svg", shortcut: "/icon.svg" },
};
