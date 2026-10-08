import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import type { Locale } from "@/lib/i18n";
import "@/app/globals.css";
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export default function RootDocument({
  children,
  locale,
}: {
  children: React.ReactNode;
  locale: Locale;
}) {
  return (
    <html lang={locale} dir={locale === "fa" ? "rtl" : "ltr"} suppressHydrationWarning>
      {/* Shared App Router root layout: a native head element is required here. */}
      {/* eslint-disable-next-line @next/next/no-head-element */}
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(()=>{try{const t=localStorage.getItem("theme");document.documentElement.classList.toggle("dark",t?t==="dark":true)}catch{document.documentElement.classList.add("dark")}})();`,
          }}
        />
      </head>
      <body className={`${inter.variable} antialiased`}>
        <a
          href="#main-content"
          className="sr-only fixed left-4 top-4 z-[100] rounded-lg bg-blue-600 px-5 py-3 text-white focus:not-sr-only"
        >
          {locale === "de" ? "Zum Inhalt springen" : locale === "fa" ? "رفتن به محتوای اصلی" : "Skip to content"}
        </a>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
