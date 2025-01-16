export interface Repository {
  name: string;
  url: string;
  description: string | null;
}

interface RepositoryGroups {
  tools: Repository[];
  topics: Repository[];
  languages: Repository[];
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
      description: "...branch of mathematics that deals with linear equations, matrices, vectors, and vector spaces, focusing on how these structures interact and transform through operations like addition and multiplication."
    },
    {
      name: "Calculus",
      url: "https://www.youtube.com/watch?v=xvFZjo5PgG0",
      description: "...branch of mathematics that deals with change. It has two main branches: differential calculus and integral calculus. Differential calculus is concerned with the instantaneous rate of change of a function, while integral calculus is concerned with the accumulation of quantities."
    },
    {
      name: "Probability & Statistics",
      url: "https://www.youtube.com/watch?v=xvFZjo5PgG0",
      description: "...two related branches of mathematics that deal with the analysis and interpretation of data. Probability is the study of chance and randomness, while statistics is the study of how to collect, organize, and analyze data."
    },
  ],
  languages: [
    {
      name: "JavaScript",
      url: "https://github.com/Learn-Like-Me-LLM/JavaScript",
      description: "A high-level, interpreted programming language that conforms to the ECMAScript specification"
    },
    {
      name: "Python",
      url: "https://github.com/Learn-Like-Me-LLM/Python",
      description: "A high-level programming language known for its simplicity and readability"
    },
    {
      name: "Zig",
      url: "https://github.com/Learn-Like-Me-LLM/Zig",
      description: "A general-purpose programming language designed for robustness, optimality, and maintainability"
    }
  ]
} 