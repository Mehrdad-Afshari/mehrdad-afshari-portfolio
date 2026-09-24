import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";
export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://mehrdad-afshari.de";
    return [
        { url: baseUrl, changeFrequency: "monthly", priority: 1 },
        ...projects.map((project) => ({
            url: `${baseUrl}/projects/${project.id}`,
            changeFrequency: "monthly" as const,
            priority: project.featured ? 0.9 : 0.8,
        })),
    ];
}
