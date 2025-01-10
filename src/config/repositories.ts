export interface Repository {
  name: string;
  url: string;
  description: string | null;
}

interface RepositoryGroups {
  tools: Repository[];
  topics: Repository[];
}

export const repositories: RepositoryGroups = {
  tools: [
    {
      name: "Cursor",
      url: "https://github.com/Learn-Like-Me-LLM/Cursor",
      description: "AI Powered Code Editor"
    },
    {
      name: "Anthropic > Claude",
      url: "https://github.com/Learn-Like-Me-LLM/Anthropic_Claude",
      description: "Large Language Model"
    },
  ],
  topics: [
    {
      name: "Linear Algebra",
      url: "https://github.com/Learn-Like-Me-LLM/Linear-Algebra",
      description: "Linear algebra is the branch of mathematics that deals with linear equations, matrices, vectors, and vector spaces, focusing on how these structures interact and transform through operations like addition and multiplication."
    },
    {
      name: "Calculus",
      url: "https://www.youtube.com/watch?v=xvFZjo5PgG0",
      description: "Coming Soon..."
    },
    {
      name: "Probability & Statistics",
      url: "https://www.youtube.com/watch?v=xvFZjo5PgG0",
      description: "Coming Soon..."
    },
  ]
} 