# Mehrdad Afshari — Portfolio

Personal portfolio and CV website for **Mehrdad Afshari**, an MSc Computer Science student at the University of Rostock and software developer focused on applied AI, local-first AI systems, full-stack development, .NET, and databases.

**Live site:** https://mehrdad-afshari.de

## Purpose

This repository is both my public professional portfolio and a practical learning project for modern AI-assisted web development. It presents my background, experience, education, certifications, CV, and selected software/AI projects as detailed case studies rather than simple project links.

## Selected projects

- **AI Meeting Assistant** — local multilingual transcription, structured meeting analysis, grounded transcript Q&A, SQLite history, and exports using faster-whisper, Ollama, FastAPI, and Next.js.
- **AI Job Application Assistant** — evidence-based CV/job matching with deterministic scoring and guarded local AI generation.
- **AI Knowledge Assistant** — local RAG document assistant with Ollama, FAISS, streaming responses, and visible sources.
- **Sokoban Solver** — university search project using Python, PDDL, BFS/DFS, and deadlock handling.

## Stack

- Next.js
- TypeScript
- Tailwind CSS
- React
- Vercel
- GitHub

The portfolio is bilingual (English/German), responsive, dark-mode-first, and uses the Next.js App Router.

## SEO and discoverability

The site includes:

- canonical URLs
- English/German `hreflang` alternates
- generated sitemap and robots metadata
- Open Graph and Twitter metadata
- dynamic project social cards
- JSON-LD for the profile, website, projects, and breadcrumbs
- project-specific metadata and static project routes

Primary domain: `mehrdad-afshari.de`

## Local development

Requirements: a current Node.js LTS release and npm.

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

Production verification:

```bash
npm run build
```

## Deployment

The `main` branch is connected to Vercel. Production deployments are created from repository updates and served over HTTPS on the primary domain.

## Content architecture

Project data lives in `data/projects.ts`. German project copy is maintained in `data/localized-projects.ts` and projects are resolved by stable project IDs rather than array positions. Shared portfolio sections live in `components/`, while localized routes are provided through the App Router.

## Design principles

- Professional and recruiter-friendly rather than template-heavy
- Evidence-oriented project case studies
- Clear separation between software experience and newer applied-AI work
- Responsive layout with dark mode as the default appearance
- Accessible navigation and skip-to-content support
- Honest project limitations and engineering trade-offs

## Author

Mehrdad Afshari  
MSc Computer Science — University of Rostock, Germany
