export default {
  hero: {
    title: 'Practical guide',
    subtitle: 'to agentic development.',
    prompt:
      'Read the contents of https://baltazarparra.github.io/proxy/llms.txt and follow the instructions to guide me through creating a new software project.',
    copiedLabel: 'Copied!',
  },

  agents: {
    title: 'Two ways to work with agents',
    body: 'Code agents come in two flavors: built into an IDE or running straight from the terminal. Understanding the difference is the first step.',
    categories: [
      {
        name: 'IDE Agents',
        description:
          "They work inside a code editor with a visual interface. You write, ask for changes, and see results in the same environment. Way easier if you're just getting started.",
        tools: [
          {
            name: 'Cursor',
            description:
              'IDE based on VS Code with an integrated agent. Supports multiple models (Claude, GPT, Gemini). Comes with a visual interface for diffs, chat, and inline editing.',
          },
          {
            name: 'Trae',
            description:
              'ByteDance IDE with a built-in agent. Interface similar to VS Code. Focused on accessibility and low cost.',
          },
        ],
      },
      {
        name: 'CLI Agents',
        description:
          "Run in the terminal, no graphical interface. You talk to the agent through text, and it reads, edits, and runs commands directly in your project. More power and more control, but you'll need to be comfortable with the terminal.",
        tools: [
          {
            name: 'Claude Code',
            description:
              "Anthropic's terminal agent. Uses Claude as the model. Reads your project, edits files, and runs commands. Works with a Claude subscription or via API.",
          },
          {
            name: 'Codex',
            description:
              "OpenAI's terminal agent. Integrated into the ChatGPT ecosystem. Available as CLI, IDE extension, and desktop app.",
          },
          {
            name: 'OpenCode',
            description:
              'Open-source terminal agent. Supports multiple providers (Claude, GPT, Gemini, Ollama). Free, you just use your own API keys.',
          },
        ],
      },
    ],
  },

  models: {
    title: 'The models behind the agents',
    body: 'Every code agent runs on an LLM. The model you choose changes the cost, speed, and quality of the generated code. Here are the 10 most used today.',
    lastUpdated: 'March 2026',
    note: 'Prices and specs change frequently. Check official websites for the latest numbers.',
    filters: [
      { id: 'all', label: 'All' },
      { id: 'anthropic', label: 'Anthropic' },
      { id: 'openai', label: 'OpenAI' },
      { id: 'google', label: 'Google' },
      { id: 'opensource', label: 'Open-source' },
    ],
    items: [
      {
        name: 'Claude Sonnet 4.6',
        family: 'anthropic',
        costLabel: 'Mid-range',
        pricing: '$3 / $15 per 1M tokens',
        description: 'Best balance of speed and intelligence for code.',
        context: '1M tokens',
        strengths: ['Complex refactoring', 'Multi-file editing', 'Detailed code review'],
        availableIn: ['Cursor', 'Claude Code', 'OpenCode'],
      },
      {
        name: 'Claude Opus 4.6',
        family: 'anthropic',
        costLabel: 'Premium',
        pricing: '$5 / $25 per 1M tokens',
        description: 'Most capable model for complex and critical tasks.',
        context: '1M tokens',
        strengths: ['Complex architecture', 'Hard bug debugging', 'Deep reasoning'],
        availableIn: ['Cursor', 'Claude Code'],
      },
      {
        name: 'Claude Haiku 4.5',
        family: 'anthropic',
        costLabel: 'Affordable',
        pricing: '$1 / $5 per 1M tokens',
        description: 'Fast and cheap, with surprisingly good coding quality.',
        context: '200K tokens',
        strengths: ['Quick tasks', 'High request volume', 'Simple edits'],
        availableIn: ['Cursor', 'Claude Code', 'OpenCode'],
      },
      {
        name: 'GPT-5.4',
        family: 'openai',
        costLabel: 'Mid-range',
        pricing: '$2.50 / $15 per 1M tokens',
        description: "OpenAI's latest flagship, strong at professional tasks.",
        context: '1M tokens',
        strengths: ['Advanced reasoning', 'Professional tasks', 'Code generation'],
        availableIn: ['Cursor', 'Codex', 'ChatGPT'],
      },
      {
        name: 'GPT-4.1',
        family: 'openai',
        costLabel: 'Affordable',
        pricing: '$2 / $8 per 1M tokens',
        description: 'Reliable workhorse, great cost-performance for code.',
        context: '1M tokens',
        strengths: ['Cost-effective', 'Instruction following', 'Consistent coding'],
        availableIn: ['Cursor', 'Codex', 'OpenCode'],
      },
      {
        name: 'o3',
        family: 'openai',
        costLabel: 'Mid-range',
        pricing: '$2 / $8 per 1M tokens',
        description: 'Advanced reasoning model. Internal reasoning tokens increase real cost.',
        context: '200K tokens',
        strengths: ['Complex logic', 'Multi-step problems', 'Mathematical reasoning'],
        availableIn: ['Cursor', 'ChatGPT'],
      },
      {
        name: 'Gemini 3.1 Pro',
        family: 'google',
        costLabel: 'Mid-range',
        pricing: '$2 / $12 per 1M tokens',
        description: "Google's most advanced model. Leads 12 of 18 benchmarks.",
        context: '1M tokens',
        strengths: ['Large codebase analysis', 'Multimodal reasoning', 'Massive context'],
        availableIn: ['Cursor', 'Google AI Studio'],
      },
      {
        name: 'Gemini 3 Flash',
        family: 'google',
        costLabel: 'Affordable',
        pricing: '$0.50 / $3 per 1M tokens',
        description: '3x faster than Gemini 2.5 Pro, excellent value for the price.',
        context: '1M tokens',
        strengths: ['Speed', 'Low cost', '1M token context'],
        availableIn: ['Cursor', 'Google AI Studio'],
      },
      {
        name: 'DeepSeek R1',
        family: 'opensource',
        costLabel: 'Most affordable',
        pricing: '$0.55 / $2.19 per 1M tokens',
        description: 'Open-source reasoning model, competitive with o1 at a fraction of the cost.',
        context: '128K tokens',
        strengths: ['Open-source', 'Cheap reasoning', 'Active community'],
        availableIn: ['Cursor', 'OpenCode'],
      },
      {
        name: 'Qwen3 Coder',
        family: 'opensource',
        costLabel: 'Most affordable',
        pricing: '$0.22 / $1 per 1M tokens',
        description: 'Cheapest coding specialist. Open-weight, runs locally via Ollama.',
        context: '262K tokens',
        strengths: ['Cheapest on the market', 'Runs locally', 'Code specialist'],
        availableIn: ['Cursor', 'OpenCode', 'Ollama'],
      },
    ],
  },

  tools: {
    title: 'How to get started',
    body: "Each tool has its own pricing and installation method. Here's the current landscape so you can pick what makes the most sense for you.",
    lastUpdated: 'March 2026',
    ide: [
      {
        name: 'Cursor',
        plans: 'Hobby (free) · Pro ($20/mo) · Pro+ ($60/mo) · Ultra ($200/mo)',
        install: 'cursor.com, download the installer for your system',
      },
      {
        name: 'Trae',
        plans: 'Free · Pro ($10/mo or $7.50/mo annual)',
        install: 'trae.ai, download the installer for your system',
      },
    ],
    cli: [
      {
        name: 'Claude Code',
        plans: 'Free · Pro ($20/mo) · Max 5x ($100/mo) · Max 20x ($200/mo) · or via API',
        install: 'npm install -g @anthropic-ai/claude-code',
      },
      {
        name: 'Codex',
        plans: 'Included in ChatGPT Plus ($20/mo) · Pro ($200/mo) · Business ($25/user/mo)',
        install: 'npm install -g @openai/codex',
      },
      {
        name: 'OpenCode',
        plans: 'Free and open-source (you just need your own API keys)',
        install: 'brew install opencode-ai/tap/opencode',
      },
    ],
    note: 'Prices can change. Check the official websites for the latest numbers.',
  },

  plan: {
    title: 'Start with a plan, not a prompt',
    body: "Before opening the code agent, create a PLAN.md. This is the document that turns your idea into concrete decisions: what gets built, which stack to use, how it'll be deployed, and what stays out of scope.\n\nYou can use any LLM to generate the initial plan, like ChatGPT, Claude, or Gemini. What matters is explaining your idea clearly: what you want to build, who it's for, and what the constraints are. Ask for a stack suggestion based on the project type and deployment model.\n\nThe result should be a solid markdown file that works as the source of truth for all development.",
    steps: [
      'Describe your idea with context: product type, audience, constraints',
      'Ask for a stack suggestion aligned to the project',
      'Review and tweak the plan until it makes sense to you',
      'Save it as PLAN.md at the project root',
    ],
  },

  roadmap: {
    title: 'Let the agent review and organize',
    body: "With the PLAN.md ready, take it to your code agent, whether that's Cursor, Claude Code, or whatever you prefer. Ask the agent to review the plan knowing that it'll be the one doing the work.\n\nThe agent analyzes the plan, identifies dependencies, breaks the work into phases, and creates an IMPLEMENTATION-ROADMAP.md, a roadmap with atomic tasks organized by phase, each with clear completion criteria.\n\nThe roadmap becomes the central guide for execution. Nothing gets built outside of it.",
    steps: [
      'Open PLAN.md in your code agent',
      'Ask for a review considering the agent will be the one executing it',
      'Ask it to break the work into development phases',
      'Ask it to generate an IMPLEMENTATION-ROADMAP.md with tasks per phase',
    ],
  },

  execution: {
    title: 'Execute, validate, advance',
    body: 'With the roadmap set, execution follows a per-phase cycle. Each phase works as a complete unit: the agent creates an execution plan, generates a PRD for the implementation, runs the tasks, and at the end you update the roadmap and generate a report of what got done.\n\nOnly move to the next phase after validating the current one. This cycle prevents technical debt from piling up and keeps the project predictable from start to finish.',
    steps: [
      'Ask the agent to create an execution plan for the current phase',
      'Ask for a PRD for the implementation',
      'Execute the phase',
      'Update the roadmap status (mark completed tasks)',
      'Generate a report of what was implemented',
      'Validate and move on to the next phase',
    ],
  },

  bootstrap: {
    title: 'Let the agent start for you',
    body: "You just learned the full workflow. Now the good part: you don't have to do all of this manually. Paste the URL below into your code agent and it will guide you through each step, ask the right questions, and create your project files automatically.",
    instruction:
      'Copy the URL below and paste it into your code agent chat (Cursor, Claude Code, or any other). The agent will read the instructions and walk you through the process.',
    urlLabel: 'Copy URL',
    copiedLabel: 'Copied!',
  },

  templates: {
    title: 'Start with structure, not from scratch',
    body: "We put together ready-made templates for each stage of the flow. Use them as a starting point: adapt, modify, make them yours. The goal isn't to follow a rigid template, it's to have clarity from the very first step.",
    items: [
      {
        name: 'PLAN',
        description: 'Project planning template',
        url: 'https://github.com/baltazarparra/proxy/blob/main/templates/PLAN-TEMPLATE.md',
      },
      {
        name: 'ROADMAP',
        description: 'Implementation roadmap template',
        url: 'https://github.com/baltazarparra/proxy/blob/main/templates/ROADMAP-TEMPLATE.md',
      },
      {
        name: 'PRD',
        description: 'Product requirements template',
        url: 'https://github.com/baltazarparra/proxy/blob/main/templates/PRD-TEMPLATE.md',
      },
      {
        name: 'Rules',
        description: 'Template for agent quality and safety rules',
        url: 'https://github.com/baltazarparra/proxy/blob/main/templates/RULES-TEMPLATE.md',
      },
      {
        name: 'Skills',
        description: 'Template for reusable agent skills',
        url: 'https://github.com/baltazarparra/proxy/blob/main/templates/SKILLS-TEMPLATE.md',
      },
    ],
  },

  glossary: {
    title: 'AI Native Glossary',
    body: "The 10 terms you'll hear all the time. No fluff.",
    terms: [
      {
        term: 'LLM',
        definition:
          'The "brain" of AI. A massive model trained on the entire internet\'s text. It generates code, text, and hallucinations too.',
      },
      {
        term: 'Prompt',
        definition:
          'The instruction you send to the AI. The clearer it is, the better the output. The vaguer it is, the more surprises you get.',
      },
      {
        term: 'AI Agent',
        definition:
          "An AI that doesn't just answer, it acts. Reads your files, edits code, runs commands. Like a junior dev that never sleeps.",
      },
      {
        term: 'Context Window',
        definition:
          'The AI\'s "working memory." Everything it can consider at once. Once the window\'s full, it forgets the start of the conversation.',
      },
      {
        term: 'Token',
        definition:
          'The unit of text the AI processes. Not exactly a word, more like a piece of one. You pay per token, so yes, every comma counts.',
      },
      {
        term: 'Hallucination',
        definition:
          "When the AI makes stuff up with total confidence. Looks right, sounds logical, but it's completely wrong. Always double-check.",
      },
      {
        term: 'RAG',
        definition:
          'Retrieval-Augmented Generation. Instead of making stuff up, the AI looks up real info first, then answers. Like cheating on a test, but with sources.',
      },
      {
        term: 'MCP',
        definition:
          'Model Context Protocol. A standard that connects AI to external tools (databases, APIs, files). Like a universal USB adapter for AI.',
      },
      {
        term: 'Vibe Coding',
        definition:
          'Programming by describing what you want in plain language and letting the AI write the code. Works great until it breaks. Then you need a method.',
      },
      {
        term: 'Fine-tuning',
        definition:
          'Training a base model on your own data so it gets good at a specific task. Like teaching a generalist chef to only make sushi.',
      },
    ],
  },

  closing: {
    title: 'Structure is speed.',
    body: "Good agentic development doesn't start with a prompt. It starts with a plan. Right tool, clear plan, organized roadmap, phase-by-phase execution. Each layer cuts ambiguity and multiplies the quality of what the agent delivers. Simple flows beat chaotic prompts. Every time.",
    cta: 'View on GitHub',
  },
}
