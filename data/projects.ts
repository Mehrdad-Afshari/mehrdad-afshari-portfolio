export type Project = {
  id: string;
  title: string;
  shortDescription: string;
  description: string;
  type: string;
  technologies: string[];
  featured?: boolean;
  github?: string;
  overview: string[];
  highlights: string[];
};

export const projects: Project[] = [
  {
    id: "sokoban-solver",
    title: "Sokoban Solver",
    shortDescription:
      "An academic project exploring search-based problem solving for Sokoban using Python, PDDL, BFS, DFS, and deadlock handling.",
    description:
      "An academic project developed as part of Algorithms in Game Environments, focused on applying classical search techniques to the Sokoban puzzle.",
    type: "Academic Project",
    technologies: [
      "Python",
      "PDDL",
      "BFS",
      "DFS",
      "Search Algorithms",
      "Deadlock Handling",
    ],
    featured: true,

    overview: [
      "Sokoban is a state-space search problem in which an agent must push boxes to their target positions while respecting movement and environmental constraints.",
      "The project investigates how different search strategies can be applied to systematically explore possible game states and find solutions.",
      "Python was used for the implementation and PDDL was used to represent the planning problem.",
    ],

    highlights: [
      "Breadth-First Search (BFS)",
      "Depth-First Search (DFS)",
      "PDDL-based problem representation",
      "State-space exploration",
      "Deadlock handling",
      "Algorithmic problem solving",
    ],
  },
];