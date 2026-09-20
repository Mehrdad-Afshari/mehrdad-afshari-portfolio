export type Project = {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  featured?: boolean;
};

export const projects: Project[] = [
  {
    id: "sokoban-solver",
    title: "Sokoban Solver",
    description:
      "An academic project focused on solving Sokoban levels using search algorithms, PDDL, and Python. The project explores BFS, DFS, and deadlock handling.",
    technologies: [
      "Python",
      "BFS",
      "DFS",
      "PDDL",
      "Algorithms",
    ],
    featured: true,
  },
];