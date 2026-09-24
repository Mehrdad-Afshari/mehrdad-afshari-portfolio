# AI Knowledge Assistant portfolio integration

## Source audit — 24 September 2026

Portfolio baseline: `18178cf36029dcab30ce69bd9d47f6751020d088`.
Existing stack: Next.js 16.3.5, React 19.2.8, TypeScript, Tailwind CSS 4.
Existing Vercel integration reported a successful production deployment.

AI project copy was reviewed against these source files in
[Mehrdad-Afshari/ai-knowledge-assistant](https://github.com/Mehrdad-Afshari/ai-knowledge-assistant):

- README.md — blob `c87258bccc0026ea64f40f4f645ab05c6c519c48`
- docs/PORTFOLIO.md — blob `a0f70a31c91985e9116415cb6fcea86b6dc9c65e`
- docs/CASE_STUDY.md — blob `d73ad6c473d6f21ad246f94bb711b46106f1d4b1`

The portfolio previously described Claude, sentence-transformers, and an
in-memory-only index. Those claims have been replaced with the released Ollama,
FAISS persistence, and SSE implementation. No hosted AI demo or unmeasured
performance claims are presented.

## Content maintenance

`data/projects.ts` supplies both project cards and case studies. Update that data
when the source documentation changes. Optional problem, solution, decisions,
challenges, results, limitations, and documentation sections render only when
present. Existing Sokoban content is retained; unsupported hardcoded evaluation
claims were removed from the shared template.

The attached CVs agree on work history and contact information. Existing CV PDF
and personal details have been preserved; this release does not revise the CV.

## Domains

Canonical URL: https://mehrdad-afshari.de

The application permanently redirects the www variant and both unhyphenated
variants to the canonical host, preserving paths and queries. Vercel domain
redirects can run before application redirects.

At audit time, the apex and www primary domains both served HTTP 200; the
unhyphenated domain redirected to www. The application rule canonicalizes that
www destination. For a single-hop redirect, in the existing Vercel project's
Settings → Domains, point mehrdadafshari.de and any www aliases directly at
https://mehrdad-afshari.de using a permanent redirect. Keep mehrdad-afshari.de
assigned to Production, not redirected back to www. No DNS changes are needed
for domains that are already valid in Vercel. Check Vercel's suggested records
before changing any DNS entries.

## Validation

Run `npm ci`, `npm run lint`, and `npm run build` with Node.js 22.
Check home and both case studies on narrow and wide screens, theme persistence,
mobile navigation, keyboard focus, unknown-project 404, CV download, sitemap,
and canonical redirects. External LLM inference is not needed by this website.

The existing Open Graph image declares the deprecated Edge runtime; this is a
non-blocking upstream migration item, not changed in this release.

### Checks completed in this change

- `npm ci`, ESLint, production build, and TypeScript: passed.
- HTTP smoke checks: home, both case studies, CV, and sitemap returned 200;
  an unknown project returned 404.
- Verified featured section precedes About; AI page contains Ollama model
  details and excludes the old Sokoban evaluation text.
- All three host redirects returned 308 and preserved the path and query string.
- Browser visual/interaction QA remains outstanding: the available environment
  could not download a valid Chromium archive. Responsive styling and theme/menu
  changes have not been visually verified in a running browser.
