import { localePath, type Locale } from "@/lib/i18n";
import { siteUrl } from "@/lib/seo";
import type { Project } from "@/data/projects";

function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
export function HomeStructuredData({ locale }: { locale: Locale }) {
  const url = siteUrl + localePath(locale);
  const person = {
    "@type": "Person",
    "@id": `${siteUrl}/#person`,
    name: "Mehrdad Afshari",
    url: siteUrl,
    image: `${siteUrl}/images/mehrdad-afshari.png`,
    description:
      locale === "de"
        ? "Softwareentwickler mit Schwerpunkt KI und Masterstudent der Informatik an der Universität Rostock."
        : "Software developer focused on AI and an MSc Computer Science student at the University of Rostock.",
    sameAs: [
      "https://github.com/Mehrdad-Afshari",
      "https://linkedin.com/in/mehrdadafshari",
    ],
    alumniOf: [
      { "@type": "CollegeOrUniversity", name: "Kharazmi University" },
      {
        "@type": "CollegeOrUniversity",
        name: "Islamic Azad University – Qazvin Branch",
      },
    ],
    affiliation: {
      "@type": "CollegeOrUniversity",
      name: "University of Rostock",
      url: "https://www.uni-rostock.de/",
    },
    knowsAbout: [
      "Software Development",
      "Retrieval-Augmented Generation",
      "Python",
      ".NET",
      "SQL Server",
    ],
  };
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@graph": [
          person,
          {
            "@type": "WebSite",
            "@id": `${siteUrl}/#website`,
            name: "Mehrdad Afshari",
            url: siteUrl,
            inLanguage: ["en", "de"],
            author: { "@id": `${siteUrl}/#person` },
          },
          {
            "@type": "ProfilePage",
            "@id": `${url}#profile`,
            url,
            inLanguage: locale,
            mainEntity: { "@id": `${siteUrl}/#person` },
            isPartOf: { "@id": `${siteUrl}/#website` },
          },
        ],
      }}
    />
  );
}
export function ProjectStructuredData({
  project,
  locale,
}: {
  project: Project;
  locale: Locale;
}) {
  const url = siteUrl + localePath(locale, `/projects/${project.id}`);
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "CreativeWork",
            "@id": `${url}#project`,
            name: project.title,
            description: project.description,
            url,
            inLanguage: locale,
            author: {
              "@type": "Person",
              "@id": `${siteUrl}/#person`,
              name: "Mehrdad Afshari",
              url: siteUrl,
            },
            ...(project.github ? { sameAs: project.github } : {}),
          },
          {
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: locale === "de" ? "Startseite" : "Home",
                item: siteUrl + localePath(locale),
              },
              {
                "@type": "ListItem",
                position: 2,
                name: project.title,
                item: url,
              },
            ],
          },
        ],
      }}
    />
  );
}
