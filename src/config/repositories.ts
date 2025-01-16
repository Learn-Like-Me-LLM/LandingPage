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
      name: "tmux",
      url: "https://github.com/Learn-Like-Me-LLM/tmux",
      description: "...a terminal multiplexer that allows users to create, access, and control multiple terminal sessions within a single window."
    },
    {
      name: "Cursor",
      url: "https://github.com/Learn-Like-Me-LLM/Cursor",
      description: "...AI Powered Code Editor"
    },
    {
      name: "Neovim",
      url: "https://github.com/Learn-Like-Me-LLM/nvim",
      description: "...a modern, highly extensible text editor built for speed and flexibility."
    },
    {
      name: "Anthropic > Claude",
      url: "https://github.com/Learn-Like-Me-LLM/Anthropic_Claude",
      description: "...Large Language Model"
    },
    {
      name: "Google > Gemini",
      url: "https://gemini.google.com/",
      description: "...Large Language Model / Large Research Model"
    },
    {
      name: "Open AI > ChatGPT",
      url: "https://chatgpt.com/",
      description: "...Large Language Model"
    },
  ],
  topics: [
    {
      name: "Linear Algebra",
      url: "https://github.com/Learn-Like-Me-LLM/Linear-Algebra",
      description: "...a the branch of mathematics that deals with linear equations, matrices, vectors, and vector spaces, focusing on how these structures interact and transform through operations like addition and multiplication."
    },
    {
      name: "Calculus",
      url: "https://www.youtube.com/watch?v=xvFZjo5PgG0",
      description: "...Coming Soon"
    },
    {
      name: "Probability & Statistics",
      url: "https://www.youtube.com/watch?v=xvFZjo5PgG0",
      description: "...Coming Soon"
    },
  ]
} 