import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";
import { locales, localePath } from "@/lib/i18n";
import { siteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["/", ...projects.map((project) => `/projects/${project.id}`)].flatMap(
    (path) =>
      locales.filter((locale) => path === "/" || locale !== "fa").map((locale) => ({
        url: siteUrl + localePath(locale, path),
        alternates: {
          languages: {
            en: siteUrl + localePath("en", path),
            de: siteUrl + localePath("de", path),
            ...(path === "/" ? { fa: siteUrl + localePath("fa", path) } : {}),
            "x-default": siteUrl + localePath("en", path),
          },
        },
      })),
  );
}
