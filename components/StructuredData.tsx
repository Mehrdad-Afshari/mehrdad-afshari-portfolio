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
    jobTitle: "AI & Software Developer",
    description:
      locale === "de"
        ? "KI- und Softwareentwickler sowie Masterstudent der Informatik an der Universität Rostock mit Schwerpunkt auf Generative AI, RAG und Softwareentwicklung."
        : "AI and software developer and MSc Computer Science student at the University of Rostock, focused on Generative AI, RAG and software development.",
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
      "Artificial Intelligence",
      "Generative AI",
      "Large Language Models",
      "Retrieval-Augmented Generation",
      "AI Agents",
      "Software Development",
      "Python",
      "C#",
      ".NET",
      "SQL Server",
      "Next.js",
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
            name:
              locale === "de"
                ? "Mehrdad Afshari – KI- & Softwareentwickler"
                : "Mehrdad Afshari – AI & Software Developer",
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
  const isSoftwareProject = project.technologies.some((technology) =>
    ["Python", "Next.js", "TypeScript", "C#", "FastAPI"].includes(technology),
  );

  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": isSoftwareProject ? "SoftwareSourceCode" : "CreativeWork",
            "@id": `${url}#project`,
            name: project.title,
            description: project.description,
            url,
            inLanguage: locale,
            ...(isSoftwareProject
              ? {
                  programmingLanguage: project.technologies.filter((technology) =>
                    ["Python", "TypeScript", "JavaScript", "C#"].includes(technology),
                  ),
                  runtimePlatform: project.technologies.filter((technology) =>
                    ["Next.js", "FastAPI", ".NET", "Ollama"].includes(technology),
                  ),
                  codeRepository: project.github,
                }
              : {}),
            keywords: project.technologies.join(", "),
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
