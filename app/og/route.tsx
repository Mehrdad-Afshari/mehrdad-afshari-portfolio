import { ImageResponse } from "next/og";
import { getProjects } from "@/data/localized-projects";

export const runtime = "nodejs";
export async function GET(request: Request) {
  const query = new URL(request.url).searchParams;
  const locale = query.get("lang") === "de" ? "de" : "en";
  const projectId = query.get("project");
  const project = getProjects(locale).find((item) => item.id === projectId);
  if (projectId && !project) return new Response("Not found", { status: 404 });
  return new ImageResponse(
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: "#101c32",
        color: "#fff",
        width: "100%",
        height: "100%",
        padding: "64px",
        fontFamily: "sans-serif",
      }}
    >
      <div style={{ display: "flex", fontSize: 27, color: "#93c5fd" }}>
        MEHRDAD AFSHARI · PORTFOLIO
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
        <div style={{ fontSize: 66, fontWeight: 700, lineHeight: 1.15 }}>
          {project?.title ??
            (locale === "de"
              ? "KI- & Softwareentwickler"
              : "AI & Software Developer")}
        </div>
        <div style={{ fontSize: 30, color: "#cbd5e1", lineHeight: 1.4 }}>
          {project?.shortDescription ??
            (locale === "de"
              ? "Lokale KI. Praktische Software. Informatik an der Universität Rostock."
              : "Local AI. Practical software. Computer Science at the University of Rostock.")}
        </div>
      </div>
      <div style={{ display: "flex", fontSize: 24, color: "#93c5fd" }}>
        mehrdad-afshari.de{locale === "de" ? "/de" : ""}
      </div>
    </div>,
    {
      width: 1200,
      height: 630,
      headers: { "Cache-Control": "public, max-age=86400, s-maxage=86400" },
    },
  );
}
