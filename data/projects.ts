export type ProjectResult = {
    map: string;
    maxDepth: number;
    visited: number;
    generated: number;
    skipped: number;
    cornerDeadlocks: number;
    wallDeadlocks: number;
    goal: string;
    runtime: string;
};
export type Project = {
    id: string;
    title: string;
    shortDescription: string;
    description: string;
    type: string;
    technologies: string[];
    featured?: boolean;
    version?: string;
    problem?: string;
    solution?: string;
    outcome?: string;
    pipeline?: {
        name: string;
        description: string;
    }[];
    challenges?: {
        name: string;
        description: string;
    }[];
    documentation?: {
        label: string;
        href: string;
    }[];
    github?: string;
    demo?: string;
    overview: string[];
    highlights: string[];
    algorithms?: {
        name: string;
        description: string;
    }[];
    results?: ProjectResult[];
    limitations?: string[];
};
// AI content reviewed against the source README, PORTFOLIO and CASE_STUDY on 2026-09-24.
export const projects: Project[] = [
    {
        "id": "ai-knowledge-assistant",
        "title": "AI Knowledge Assistant",
        "type": "Local RAG · Full-Stack AI Application",
        "version": "v1.0.0",
        "featured": true,
        "shortDescription": "A privacy-first document assistant with local AI, streaming answers, and visible sources.",
        "description": "A full-stack Retrieval-Augmented Generation application that turns PDF, TXT, and Markdown documents into a persistent, searchable knowledge base. Built with Next.js, FastAPI, Ollama, and FAISS.",
        "github": "https://github.com/Mehrdad-Afshari/ai-knowledge-assistant",
        "problem": "Language models do not automatically know the contents of private or newly uploaded documents. I wanted a document assistant that could retrieve relevant context, show its sources, and retain indexed knowledge without a paid AI API.",
        "solution": "I implemented the RAG pipeline directly: parse documents, create overlapping chunks, embed locally, retrieve relevant context with FAISS, and stream answers from a local Ollama model with source metadata.",
        "outcome": "The v1.0 release supports document ingestion, persistent semantic search, streamed answers, source attribution, and document management. Backend unit tests and frontend lint/build checks run through GitHub Actions. It is a local portfolio application; retrieval accuracy and latency have not been benchmarked here.",
        "technologies": [
            "Next.js",
            "TypeScript",
            "Tailwind CSS",
            "Python",
            "FastAPI",
            "RAG",
            "Ollama",
            "FAISS",
            "PyPDF",
            "SSE",
            "GitHub Actions"
        ],
        "overview": [
            "Built to understand RAG beyond framework abstractions, with separate TypeScript frontend and Python backend layers.",
            "Documents are processed with page-aware PDF extraction and a custom overlapping chunker. Local nomic-embed-text embeddings are normalized and indexed in FAISS.",
            "Retrieved chunks become context for llama3.2. The SSE endpoint emits source metadata before incremental answer tokens, so users can inspect filenames, pages, and relevance.",
            "The index and chunk metadata persist across backend restarts. Users can list and delete documents from the indexed knowledge base."
        ],
        "highlights": [
            "Direct RAG pipeline without LangChain",
            "Local embeddings and generation via Ollama",
            "Persistent FAISS index and metadata",
            "SSE streaming with visible sources",
            "Document listing and deletion",
            "Backend unit tests and GitHub Actions CI"
        ],
        "pipeline": [
            {
                "name": "Ingest",
                "description": "PDF / TXT / Markdown → extraction and overlapping chunks"
            },
            {
                "name": "Index",
                "description": "nomic-embed-text → normalized vectors → persistent FAISS"
            },
            {
                "name": "Retrieve",
                "description": "Question embedding → cosine similarity → relevant context"
            },
            {
                "name": "Answer",
                "description": "llama3.2 → SSE tokens + filenames, pages, and relevance"
            }
        ],
        "algorithms": [
            {
                "name": "Direct SDKs, transparent RAG",
                "description": "Implemented chunking, retrieval, context construction, persistence, and streaming directly rather than using LangChain, making each stage easier to understand and debug."
            },
            {
                "name": "Ollama for local AI",
                "description": "nomic-embed-text produces 768-dimensional embeddings; llama3.2 generates answers. Ollama avoids paid API requirements and resolved the Windows/PyTorch compatibility issues encountered during development."
            },
            {
                "name": "Normalized FAISS retrieval",
                "description": "A normalized IndexFlatIP makes inner-product search equivalent to cosine similarity. This keeps retrieval simple for a local knowledge base without an external vector database."
            },
            {
                "name": "Filesystem persistence",
                "description": "index.faiss stores vectors and chunks.json stores metadata. Both are validated on startup. Document deletion rebuilds the flat index from retained vectors."
            }
        ],
        "challenges": [
            {
                "name": "Windows file locking",
                "description": "Closed named temporary files before PyPDF reopened them, then explicitly removed them after processing."
            },
            {
                "name": "Knowledge lost on reload",
                "description": "Replaced the initial in-memory-only index with persisted vectors and chunk metadata restored at startup."
            },
            {
                "name": "Meaningful source names",
                "description": "Preserved original uploaded filenames through temporary-file processing so citations remain understandable."
            },
            {
                "name": "CI without a running LLM",
                "description": "Tested deterministic backend logic without requiring Ollama in GitHub Actions, alongside frontend lint and build checks."
            }
        ],
        "limitations": [
            "Requires a local Ollama runtime for embeddings and generation; no hosted live demo is offered.",
            "No OCR for scanned or image-only PDFs.",
            "No authentication, user accounts, or multi-tenant isolation.",
            "Local filesystem storage and a flat FAISS index suit small local corpora; deletion rebuilds the retained index."
        ],
        "documentation": [
            {
                "label": "README & local setup",
                "href": "https://github.com/Mehrdad-Afshari/ai-knowledge-assistant/blob/main/README.md"
            },
            {
                "label": "Portfolio source",
                "href": "https://github.com/Mehrdad-Afshari/ai-knowledge-assistant/blob/main/docs/PORTFOLIO.md"
            },
            {
                "label": "Full engineering case study",
                "href": "https://github.com/Mehrdad-Afshari/ai-knowledge-assistant/blob/main/docs/CASE_STUDY.md"
            },
            {
                "label": "Architecture",
                "href": "https://github.com/Mehrdad-Afshari/ai-knowledge-assistant/blob/main/docs/ARCHITECTURE.md"
            },
            {
                "label": "Roadmap",
                "href": "https://github.com/Mehrdad-Afshari/ai-knowledge-assistant/blob/main/docs/ROADMAP.md"
            }
        ]
    },
    {
        id: "sokoban-solver",
        title: "Sokoban Solver",
        shortDescription: "An academic search-based Sokoban solver developed using Python and PDDL.",
        description: "A university project focused on solving Sokoban levels using classical search algorithms, PDDL-based problem representation, and deadlock handling.",
        type: "University Project",
        technologies: [
            "Python",
            "PDDL",
            "BFS",
            "DFS",
            "Search Algorithms",
        ],
        featured: true,
        overview: [
            "Developed as part of the Algorithms in Game Environments course at the University of Rostock.",
            "The project focuses on automatically solving Sokoban levels using classical search techniques.",
            "The problem was represented using PDDL and supported by a Python-based solving workflow.",
            "Different search strategies were evaluated while considering the characteristics of Sokoban states and deadlock situations.",
        ],
        highlights: [
            "Breadth-First Search (BFS)",
            "Depth-First Search (DFS)",
            "PDDL problem representation",
            "Deadlock handling",
            "State-space search",
            "Python implementation",
        ],
        algorithms: [
            {
                name: "Breadth-First Search",
                description: "Explores the state space level by level and can find a shortest solution when applicable.",
            },
            {
                name: "Depth-First Search",
                description: "Explores solution paths deeply while controlling the search depth.",
            },
            {
                name: "Deadlock Detection",
                description: "Handles problematic Sokoban states such as corner and wall deadlocks to avoid unproductive search paths.",
            },
        ],
        limitations: [
            "The project is an academic prototype rather than a production game solver.",
            "Search performance depends strongly on the size and complexity of the Sokoban level.",
            "Depth-limited search introduces practical limits for larger search spaces.",
        ],
    },
];
