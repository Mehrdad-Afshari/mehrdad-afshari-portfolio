import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Mehrdad Afshari | AI Developer",
  description:
    "Mehrdad Afshari — AI Developer, Software & Database Developer and MSc Computer Science student at the University of Rostock.",
  keywords: [
    "Mehrdad Afshari",
    "AI Developer",
    "Software Developer",
    "Generative AI",
    "Computer Science",
    "Rostock",
    "Germany",
  ],
};

const themeScript = `
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
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>

      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}