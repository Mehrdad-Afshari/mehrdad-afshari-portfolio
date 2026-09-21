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

  overview: string[];
  highlights: string[];

  algorithms: {
    name: string;
    description: string;
  }[];

  results: ProjectResult[];

  limitations: string[];
};

export const projects: Project[] = [
  {
    id: "sokoban-solver",

    title: "Sokoban Solver",

    shortDescription:
      "A search-based Sokoban project exploring PDDL modelling, Python implementation, DFS optimisation, and deadlock detection.",

    description:
      "An academic project focused on modelling Sokoban as a planning and search problem and reducing the search space of depth-limited DFS through incremental improvements.",

    type: "Academic Project",

    technologies: [
      "Python",
      "PDDL",
      "BFS",
      "DFS",
      "Search Algorithms",
      "State-Space Search",
      "Deadlock Detection",
    ],

    featured: true,

    overview: [
      "Sokoban is a single-agent puzzle in which a player must push boxes onto predefined goal positions. Because boxes can be pushed but not pulled, an incorrect push can make a level unsolvable.",

      "The project models Sokoban as a planning and search problem. The game rules, actions, states and goals were first described using PDDL and then implemented manually in Python.",

      "The main focus of the project was reducing the search space of depth-limited DFS. The algorithm was improved incrementally by introducing a visited set, goal checking, corner-deadlock detection and wall-deadlock detection.",

      "The final evaluation compared different DFS variants on multiple Sokoban maps to investigate how each improvement affected the number of explored states and the overall search behaviour.",
    ],

    highlights: [
      "Formal Sokoban modelling with PDDL",
      "Python-based Sokoban environment",
      "Breadth-First Search investigation",
      "Depth-limited Depth-First Search",
      "Visited-state detection",
      "Goal-state detection",
      "Corner-deadlock detection",
      "Wall-deadlock detection",
      "Search-space evaluation",
      "Evaluation across multiple maps",
    ],

    algorithms: [
      {
        name: "Breadth-First Search",
        description:
          "BFS was investigated as an initial search strategy. The experiments showed that the number of generated states grows very quickly, making it impractical for the later stages of this project.",
      },
      {
        name: "Depth-First Search",
        description:
          "The project therefore focused on DFS, particularly depth-limited DFS, to provide better control over the search space and execution depth.",
      },
      {
        name: "Visited-State Detection",
        description:
          "A visited set was introduced to prevent the algorithm from repeatedly exploring the same states through different action sequences.",
      },
      {
        name: "Goal Checking",
        description:
          "A goal check was added so that the search could terminate immediately after reaching a solution instead of continuing to explore unnecessary branches.",
      },
      {
        name: "Corner-Deadlock Detection",
        description:
          "States where a non-goal box becomes trapped in a corner are detected and pruned before successor states are generated.",
      },
      {
        name: "Wall-Deadlock Detection",
        description:
          "The final version also detects wall-based deadlocks where a box cannot reach a goal along the relevant wall segment.",
      },
    ],

    results: [
      {
        map: "Map 1",
        maxDepth: 21,
        visited: 275,
        generated: 575,
        skipped: 294,
        cornerDeadlocks: 8,
        wallDeadlocks: 9,
        goal: "Yes",
        runtime: "0.004388 s",
      },
      {
        map: "Map 2",
        maxDepth: 70,
        visited: 1274,
        generated: 3048,
        skipped: 1696,
        cornerDeadlocks: 5,
        wallDeadlocks: 4,
        goal: "Yes",
        runtime: "0.023234 s",
      },
      {
        map: "Map 3",
        maxDepth: 20,
        visited: 726,
        generated: 1608,
        skipped: 877,
        cornerDeadlocks: 6,
        wallDeadlocks: 5,
        goal: "Yes",
        runtime: "0.004731 s",
      },
    ],

    limitations: [
      "The final implementation was evaluated with one box and one goal per test environment.",
      "The search used depth limits that were selected according to the complexity of each evaluation map.",
      "The implemented deadlock rules cover corner and wall deadlocks but do not represent complete deadlock detection for all possible Sokoban situations.",
      "The project demonstrates the effect of incremental pruning techniques rather than providing a complete general-purpose Sokoban solver.",
    ],
  },
];