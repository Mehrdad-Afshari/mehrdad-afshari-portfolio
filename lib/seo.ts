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
      ? "Mehrdad Afshari | KI- & Softwareentwickler in Rostock"
      : "Mehrdad Afshari | AI & Software Developer in Rostock",
    locale === "de"
      ? "Portfolio von Mehrdad Afshari: KI- und Softwareentwicklung, lokale RAG-Anwendungen mit Python und Next.js sowie .NET und SQL Server. Masterstudent an der Universität Rostock."
      : "Mehrdad Afshari’s portfolio: AI and software development, local RAG applications with Python and Next.js, .NET and SQL Server. MSc student at the University of Rostock.",
  );
}

export const baseMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "Mehrdad Afshari", template: "%s | Mehrdad Afshari" },
  authors: [{ name: "Mehrdad Afshari", url: siteUrl }],
  creator: "Mehrdad Afshari",
  robots: { index: true, follow: true },
  icons: { icon: "/icon.svg", shortcut: "/icon.svg" },
};
