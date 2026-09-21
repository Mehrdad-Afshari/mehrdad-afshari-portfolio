import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const siteUrl = "https://mehrdad-afshari.de";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Mehrdad Afshari | AI Developer & Software Engineer",
    template: "%s | Mehrdad Afshari",
  },

  description:
    "Mehrdad Afshari — AI Developer, Software & Database Developer and MSc Computer Science student at the University of Rostock, Germany.",

  keywords: [
    "Mehrdad Afshari",
    "AI Developer",
    "AI Engineer",
    "Junior AI Engineer",
    "Software Developer",
    "Software Engineer",
    "Generative AI",
    "LLM",
    "AI Agents",
    "Python",
    "C#",
    "SQL",
    "Computer Science",
    "University of Rostock",
    "Rostock",
    "Germany",
  ],

  authors: [
    {
      name: "Mehrdad Afshari",
      url: siteUrl,
    },
  ],

  creator: "Mehrdad Afshari",
  publisher: "Mehrdad Afshari",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Mehrdad Afshari",
    title: "Mehrdad Afshari | AI Developer & Software Engineer",
    description:
      "AI Developer and MSc Computer Science student at the University of Rostock, focused on Generative AI, software engineering and intelligent applications.",
  },

  twitter: {
    card: "summary_large_image",
    title: "Mehrdad Afshari | AI Developer & Software Engineer",
    description:
      "AI Developer and MSc Computer Science student at the University of Rostock.",
  },

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

  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Mehrdad Afshari",
  url: siteUrl,
  email: "mailto:afshari@outlook.com",
  jobTitle: "AI Developer",
  description:
    "AI Developer, Software & Database Developer and MSc Computer Science student at the University of Rostock.",
  alumniOf: [
    {
      "@type": "CollegeOrUniversity",
      name: "University of Rostock",
      url: "https://www.uni-rostock.de/",
    },
    {
      "@type": "CollegeOrUniversity",
      name: "Kharazmi University",
    },
  ],
  sameAs: [
    "https://github.com/Mehrdad-Afshari",
    "https://linkedin.com/in/mehrdadafshari",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Mehrdad Afshari",
  url: siteUrl,
  description:
    "Personal portfolio of Mehrdad Afshari, AI Developer and MSc Computer Science student.",
  author: {
    "@type": "Person",
    name: "Mehrdad Afshari",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (() => {
                try {
                  const savedTheme = localStorage.getItem("theme");
                  const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
                  const isDark = savedTheme
                    ? savedTheme === "dark"
                    : systemDark;

                  document.documentElement.classList.toggle("dark", isDark);
                } catch {}
              })();
            `,
          }}
        />
      </head>

      <body className={`${inter.variable} antialiased`}>
        {children}

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personSchema),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
      </body>
    </html>
  );
}