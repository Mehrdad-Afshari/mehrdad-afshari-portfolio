export type Certification = {
  id: string;
  name: string;
  issuer: string;
  date: string;
  category: "AI & Generative AI" | "Cloud & Azure" | "AI Foundations";
  credentialId?: string;
  status?: "Completed" | "In Progress";
  featured?: boolean;
};

export const certifications: Certification[] = [
  {
    id: "anthropic-agent-skills",
    name: "Introduction to Agent Skills",
    issuer: "Anthropic",
    date: "June 2026",
    category: "AI & Generative AI",
    credentialId: "mp8cqrshcs4p",
    status: "Completed",
    featured: true,
  },
  {
    id: "anthropic-mcp",
    name: "Introduction to Model Context Protocol",
    issuer: "Anthropic",
    date: "May 2026",
    category: "AI & Generative AI",
    credentialId: "hsvs6mdbgk8x",
    status: "Completed",
    featured: true,
  },
  {
    id: "ai-fluency",
    name: "AI Fluency Framework & Foundations",
    issuer: "Anthropic",
    category: "AI & Generative AI",
    credentialId: "uwzvsfhh4beg",
    status: "Completed",
  },
  {
    id: "claude-code-in-action",
    name: "Claude Code in Action",
    issuer: "Anthropic",
    category: "AI & Generative AI",
    credentialId: "ryjxmqot7hni",
    status: "Completed",
  },
  {
    id: "claude-code-101",
    name: "Claude Code 101",
    issuer: "Anthropic",
    category: "AI & Generative AI",
    credentialId: "hd8osuadsenk",
    status: "Completed",
  },
  {
    id: "claude-101",
    name: "Claude 101",
    issuer: "Anthropic",
    category: "AI & Generative AI",
    credentialId: "c9xfj2caxyq3",
    status: "Completed",
  },

  {
    id: "google-responsible-ai",
    name: "Responsible AI: Applying AI Principles with Google Cloud",
    issuer: "Google Cloud",
    date: "May 2026",
    category: "AI Foundations",
    credentialId: "24391597",
    status: "Completed",
    featured: true,
  },
  {
    id: "google-prompt-design",
    name: "Prompt Design in Agent Platform",
    issuer: "Google Cloud",
    date: "May 2026",
    category: "AI & Generative AI",
    credentialId: "24389449",
    status: "Completed",
  },
  {
    id: "google-responsible-ai-intro",
    name: "Introduction to Responsible AI",
    issuer: "Google Cloud",
    date: "May 2026",
    category: "AI Foundations",
    credentialId: "24371491",
    status: "Completed",
  },
  {
    id: "google-llms",
    name: "Introduction to Large Language Models",
    issuer: "Google Cloud",
    date: "May 2026",
    category: "AI & Generative AI",
    credentialId: "24371210",
    status: "Completed",
  },
  {
    id: "google-generative-ai",
    name: "Introduction to Generative AI",
    issuer: "Google Cloud",
    date: "May 2026",
    category: "AI & Generative AI",
    credentialId: "24158420",
    status: "Completed",
  },

  {
    id: "microsoft-ai-azure",
    name: "Get Started with AI in Azure",
    issuer: "Microsoft",
    date: "May 2026",
    category: "Cloud & Azure",
    status: "Completed",
    featured: true,
  },
  {
    id: "microsoft-text-analysis",
    name: "Get started with text analysis in Azure",
    issuer: "Microsoft",
    date: "May 2026",
    category: "Cloud & Azure",
    status: "Completed",
  },
  {
    id: "microsoft-information-extraction",
    name: "AI-powered information extraction in Azure",
    issuer: "Microsoft",
    date: "May 2026",
    category: "Cloud & Azure",
    status: "Completed",
  },
  {
    id: "microsoft-computer-vision",
    name: "Computer Vision in Azure",
    issuer: "Microsoft",
    date: "May 2026",
    category: "Cloud & Azure",
    status: "Completed",
  },
  {
    id: "microsoft-speech",
    name: "Speech in Azure",
    issuer: "Microsoft",
    date: "May 2026",
    category: "Cloud & Azure",
    status: "Completed",
  },
  {
    id: "microsoft-generative-ai-agents",
    name: "Generative AI and Agents in Azure",
    issuer: "Microsoft",
    date: "May 2026",
    category: "Cloud & Azure",
    status: "Completed",
  },

  {
    id: "nasa-open-science-101",
    name: "Open Science 101",
    issuer: "NASA",
    category: "AI Foundations",
    status: "Completed",
  },
  {
    id: "nasa-open-science-essentials",
    name: "Open Science Essentials",
    issuer: "NASA",
    category: "AI Foundations",
    status: "Completed",
  },
];