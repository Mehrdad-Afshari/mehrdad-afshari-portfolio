import RootDocument from "@/components/RootDocument";
export { baseMetadata as metadata } from "@/lib/seo";
export default function Layout({ children }: { children: React.ReactNode }) {
  return <RootDocument locale="de">{children}</RootDocument>;
}
