export default {
  hero: {
    title: 'Practical guide',
    subtitle: 'to agentic development.',
    body: 'Code agents are changing how software gets built. But without a clear flow, speed turns into chaos. Proxy walks you through from zero, from picking your tool to shipping, with a simple method that works with any agent.',
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

  closing: {
    title: 'Structure is speed.',
    body: "Good agentic development doesn't start with a prompt. It starts with a plan. Right tool, clear plan, organized roadmap, phase-by-phase execution. Each layer cuts ambiguity and multiplies the quality of what the agent delivers. Simple flows beat chaotic prompts. Every time.",
    cta: 'View on GitHub',
  },
}
