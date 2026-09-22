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

export const projects: Project[] = [
  {
    id: "sokoban-solver",

    title: "Sokoban Solver",

    shortDescription:
      "An academic search-based Sokoban solver developed using Python and PDDL.",

    description:
      "A university project focused on solving Sokoban levels using classical search algorithms, PDDL-based problem representation, and deadlock handling.",

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
        description:
          "Explores the state space level by level and can find a shortest solution when applicable.",
      },
      {
        name: "Depth-First Search",
        description:
          "Explores solution paths deeply while controlling the search depth.",
      },
      {
        name: "Deadlock Detection",
        description:
          "Handles problematic Sokoban states such as corner and wall deadlocks to avoid unproductive search paths.",
      },
    ],

    limitations: [
      "The project is an academic prototype rather than a production game solver.",
      "Search performance depends strongly on the size and complexity of the Sokoban level.",
      "Depth-limited search introduces practical limits for larger search spaces.",
    ],
  },

  {
    id: "ai-knowledge-assistant",

    title: "AI Knowledge Assistant",

    shortDescription:
      "A RAG-based AI assistant that lets users upload documents and ask grounded questions about their content.",

    description:
      "A full-stack AI knowledge assistant combining document ingestion, semantic retrieval, vector search, Claude, conversation history, source attribution, and streaming responses.",

    type: "AI / Generative AI Project",

    technologies: [
      "Python",
      "FastAPI",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "RAG",
      "Embeddings",
      "FAISS",
      "Claude",
    ],

    featured: true,

    overview: [
      "Users can upload PDF, TXT, and Markdown documents.",
      "Documents are extracted and divided into smaller chunks for retrieval.",
      "Text chunks are converted into vector embeddings using a sentence-transformer model.",
      "FAISS is used for semantic similarity search.",
      "Retrieved document context is passed to Claude to generate grounded answers.",
      "The assistant supports conversation history and source attribution.",
      "Responses are streamed from the backend to the frontend.",
    ],

    highlights: [
      "Retrieval-Augmented Generation (RAG)",
      "PDF / TXT / Markdown ingestion",
      "Semantic vector search",
      "Sentence-transformer embeddings",
      "FAISS vector index",
      "Claude integration",
      "Conversation history",
      "Source attribution",
      "Streaming AI responses",
      "FastAPI backend",
      "Next.js frontend",
    ],

    algorithms: [
      {
        name: "Document Retrieval",
        description:
          "User questions are embedded and compared against indexed document chunks to retrieve the most relevant context.",
      },
      {
        name: "RAG Pipeline",
        description:
          "Relevant document chunks are provided to the language model as context so answers remain grounded in the uploaded material.",
      },
      {
        name: "Semantic Search",
        description:
          "Vector similarity is used to identify document passages that are semantically related to the user's question.",
      },
    ],

    limitations: [
      "The current vector index is stored in memory and is recreated when the backend restarts.",
      "Conversation history is currently maintained on the frontend.",
      "The current version is intended as a portfolio and learning project rather than a production deployment.",
    ],
  },
];