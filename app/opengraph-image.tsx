import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt =
  "Mehrdad Afshari — AI Developer & Software Engineer";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#080b12",
          color: "white",
          fontFamily: "Arial",
        }}
      >
        <div
          style={{
            fontSize: 28,
            color: "#60a5fa",
            marginBottom: 24,
            letterSpacing: 3,
          }}
        >
          AI DEVELOPER · SOFTWARE ENGINEER
        </div>

        <div
          style={{
            fontSize: 72,
            fontWeight: 700,
            lineHeight: 1.1,
          }}
        >
          Mehrdad Afshari
        </div>

        <div
          style={{
            marginTop: 28,
            fontSize: 30,
            color: "#a1a1aa",
          }}
        >
          MSc Computer Science · University of Rostock
        </div>

        <div
          style={{
            marginTop: 50,
            fontSize: 22,
            color: "#71717a",
          }}
        >
          Generative AI · Software Engineering · Intelligent Applications
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}