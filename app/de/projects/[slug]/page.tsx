import ProjectPage from "@/components/ProjectPage";
import { getProjects } from "@/data/localized-projects";
import { pageMetadata } from "@/lib/seo";
import { notFound } from "next/navigation";

type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() {
  return getProjects("de").map((project) => ({ slug: project.id }));
}
export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const project = getProjects("de").find((item) => item.id === slug);
  if (!project) notFound();
  return pageMetadata(
    "de",
    `/projects/${slug}`,
    `${project.title} | Mehrdad Afshari`,
    project.shortDescription,
    slug,
  );
}
export default async function Page({ params }: Props) {
  return <ProjectPage locale="de" slug={(await params).slug} />;
}
