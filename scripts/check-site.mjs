import assert from "node:assert/strict";
import { spawn } from "node:child_process";
import http from "node:http";

const origin = "https://mehrdad-afshari.de";
const base = process.env.SITE_URL || "http://127.0.0.1:3105";
let server;
try {
  if (!process.env.SITE_URL) {
    server = spawn(process.execPath, ["node_modules/next/dist/bin/next", "start", "--hostname", "127.0.0.1", "-p", "3105"], { stdio: ["ignore", "pipe", "inherit"] });
    await new Promise((resolve, reject) => {
      const timeout = setTimeout(() => reject(new Error("Server did not start")), 20000);
      server.stdout.on("data", (data) => { if (data.toString().includes("Ready")) { clearTimeout(timeout); resolve(); } });
      server.on("exit", (code) => { clearTimeout(timeout); reject(new Error(`Server exited: ${code}`)); });
    });
  }
  const get = (path) => fetch(base + path, { signal: AbortSignal.timeout(30000) });
  const pages = ["/", "/projects/ai-knowledge-assistant", "/projects/sokoban-solver"];
  for (const path of pages) {
    for (const locale of ["en", "de"]) {
      const localPath = locale === "de" ? `/de${path === "/" ? "" : path}` : path;
      const response = await get(localPath);
      assert.equal(response.status, 200, localPath);
      const html = await response.text();
      assert(html.includes(`<html lang="${locale}"`), `Document language: ${localPath}`);
      const canonical = html.match(/<link rel="canonical" href="([^"]+)"/)[1];
      assert.equal(canonical.replace(/\/$/, ""), (origin + localPath).replace(/\/$/, ""));
      for (const lang of ["en", "de", "x-default"]) assert(html.includes(`hrefLang="${lang}"`), `Missing hreflang ${lang}: ${localPath}`);
      assert.equal((html.match(/<h1\b/g) || []).length, 1, `One H1: ${localPath}`);
      assert(!html.includes('content="noindex"'), `Indexable: ${localPath}`);
      for (const attribute of ["og:image", "twitter:image"]) assert(html.includes(`${attribute}" content="${origin}/og?lang=${locale}`), `Social image: ${localPath}`);
      assert(html.includes(`href="${locale === "de" ? path : `/de${path === "/" ? "" : path}`}" hrefLang="${locale === "de" ? "en" : "de"}"`), `Language switch: ${localPath}`);
      const schemas = [...html.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/gs)].map((m) => JSON.parse(m[1]));
      assert(schemas.length > 0, `Structured data: ${localPath}`);
      if (path === "/") {
        assert(html.indexOf('id="projects"') < html.indexOf('id="about"'));
        const person = schemas[0]["@graph"].find((node) => node["@type"] === "Person");
        assert(!person.alumniOf.some((school) => school.name.includes("Rostock")));
        assert.equal(person.affiliation.name, "University of Rostock");
        if (locale === "de") {
          for (const expected of ["Lebenslauf · Englisch (PDF)", "Berufserfahrung", "Juni 2026", "Abgeschlossen", "Universität Rostock"]) assert(html.includes(expected), expected);
        }
      } else if (path.includes("ai-knowledge")) {
        assert(html.includes("nomic-embed-text"));
        assert(html.includes(locale === "de" ? "Herausforderungen und Lösungen" : "Challenges and fixes"));
        assert(!html.includes("Final DFS evaluation"));
      }
    }
  }
  const sitemap = await (await get("/sitemap.xml")).text();
  assert.equal((sitemap.match(/<loc>/g) || []).length, 6);
  assert(sitemap.includes('hreflang="de"'));
  assert((await (await get("/robots.txt")).text()).includes(`${origin}/sitemap.xml`));
  for (const path of ["/unknown-page", "/de/unknown-page", "/projects/unknown", "/de/projects/unknown"]) {
    const r = await get(path); assert.equal(r.status, 404, path);
    const text = await r.text(); assert(text.includes(path.startsWith("/de") ? "Seite nicht gefunden" : "Page not found"), path);
  }
  const pdf = await get("/cv/mehrdad-afshari-cv.pdf"); assert.equal(pdf.status, 200); assert(pdf.headers.get("content-type").includes("pdf"));
  for (const locale of ["en", "de"]) {
    const image = await get(`/og?lang=${locale}&project=ai-knowledge-assistant`); assert.equal(image.status, 200); assert(image.headers.get("content-type").includes("image/png"));
  }
  if (!process.env.SITE_URL) {
    for (const host of ["www.mehrdad-afshari.de", "mehrdadafshari.de", "www.mehrdadafshari.de"]) {
      const response = await new Promise((resolve, reject) => http.get(base + "/de/projects/ai-knowledge-assistant?source=test", { headers: { host } }, (r) => { r.resume(); resolve(r); }).on("error", reject));
      assert.equal(response.statusCode, 308); assert.equal(response.headers.location, origin + "/de/projects/ai-knowledge-assistant?source=test");
    }
  }
  console.log("PASS: six localized pages, canonical/hreflang, language switch URLs, SEO images, JSON-LD, translated content, sitemap, localized 404s, CV and redirects.");
} finally {
  server?.kill();
}
