# Copy Outline — Proxy

**Status:** Draft v2
**Languages:** PT-BR (primary), EN (translation)
**Tone:** conciso, calmo, inteligente, prático, sem hype
**Last updated:** March 2026

---

## PT-BR

### Seção 1 — Hero

**title:** Proxy
**subtitle:** Um guia prático para desenvolvimento com agentes de código.
**body:**
Agentes de código estão mudando a forma como software é construído. Mas sem um fluxo claro, velocidade vira caos. Proxy te guia do zero — da escolha da ferramenta à entrega — com um método simples que funciona com qualquer agente.

---

### Seção 2 — Agentes de Código: IDE vs CLI

**title:** Duas formas de trabalhar com agentes
**body:**
Agentes de código existem em dois formatos: integrados a uma IDE ou rodando direto no terminal. Entender a diferença é o primeiro passo.

**categories:**

**Agentes via IDE**
Funcionam dentro de um editor de código com interface visual. Você escreve, pede mudanças e vê o resultado no mesmo ambiente. São mais acessíveis para quem está começando.

- **Cursor** — IDE baseada no VS Code com agente integrado. Suporta múltiplos modelos (Claude, GPT, Gemini). Interface visual com diff, chat e edição inline.
- **Trae** — IDE da ByteDance com agente embutido. Interface similar ao VS Code. Foco em acessibilidade e custo baixo.

**Agentes via CLI**
Rodam no terminal, sem interface gráfica. Você conversa com o agente por texto, e ele lê, edita e executa comandos diretamente no seu projeto. Mais poder, mais controle — mas exigem familiaridade com o terminal.

- **Claude Code** — Agente de terminal da Anthropic. Usa Claude como modelo. Lê o projeto, edita arquivos e executa comandos. Funciona com assinatura Claude ou via API.
- **Codex** — Agente de terminal da OpenAI. Integrado ao ecossistema ChatGPT. Disponível como CLI, extensão de IDE e app desktop.
- **OpenCode** — Agente de terminal open-source. Suporta múltiplos provedores (Claude, GPT, Gemini, Ollama). Gratuito — você usa suas próprias chaves de API.

---

### Seção 3 — Ferramentas e Preços

**title:** Como começar
**body:**
Cada ferramenta tem seu modelo de preço e forma de instalação. Aqui está o panorama atual para você escolher a que faz mais sentido.

**lastUpdated:** Março 2026

**ide:**

| Ferramenta | Planos                                                             | Como instalar                                    |
| ---------- | ------------------------------------------------------------------ | ------------------------------------------------ |
| Cursor     | Hobby (grátis) · Pro ($20/mês) · Pro+ ($60/mês) · Ultra ($200/mês) | cursor.com — baixe o instalador para seu sistema |
| Trae       | Free (grátis) · Pro ($10/mês ou $7.50/mês anual)                   | trae.ai — baixe o instalador para seu sistema    |

**cli:**

| Ferramenta  | Planos                                                                        | Como instalar                                                                                  |
| ----------- | ----------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| Claude Code | Free · Pro ($20/mês) · Max 5x ($100/mês) · Max 20x ($200/mês) · ou via API    | `npm install -g @anthropic-ai/claude-code`                                                     |
| Codex       | Incluído no ChatGPT Plus ($20/mês) · Pro ($200/mês) · Business ($25/user/mês) | `npm install -g @openai/codex`                                                                 |
| OpenCode    | Gratuito e open-source (requer chaves de API próprias)                        | `brew install opencode-ai/tap/opencode` ou `go install github.com/opencode-ai/opencode@latest` |

**note:** Preços podem mudar. Consulte os sites oficiais para valores atualizados.

---

### Seção 4 — O Plano Inicial

**title:** Comece com um plano, não com um prompt
**body:**
Antes de abrir o agente de código, crie um PLAN.md. Esse é o documento que traduz sua ideia em decisões concretas: o que será construído, qual stack usar, como será o deploy, e o que fica de fora.

Você pode usar qualquer LLM para gerar o plano inicial — ChatGPT, Claude, Gemini. O importante é explicar sua ideia com clareza: o que você quer construir, para quem, com quais restrições. Peça uma sugestão de stack baseada no tipo de projeto e modelo de deploy.

O resultado deve ser um arquivo markdown robusto que serve como fonte da verdade para todo o desenvolvimento.

**steps:**

- Descreva sua ideia com contexto: tipo de produto, público, restrições
- Peça uma sugestão de stack alinhada ao projeto
- Revise e ajuste o plano até que faça sentido
- Salve como PLAN.md na raiz do projeto

---

### Seção 5 — Revisão do Agente e Roadmap

**title:** Deixe o agente revisar e organizar
**body:**
Com o PLAN.md pronto, leve-o ao seu agente de código — Cursor, Claude Code, ou o que preferir. Peça para o agente revisar o plano tendo em mente que ele próprio vai executar o trabalho.

O agente analisa o plano, identifica dependências, separa o trabalho em fases e cria um IMPLEMENTATION-ROADMAP.md — um roteiro com tarefas atômicas organizadas por fase, cada uma com critérios claros de conclusão.

O roadmap se torna a espinha dorsal da execução. Nada é implementado fora dele.

**steps:**

- Abra o PLAN.md no seu agente de código
- Peça revisão considerando que o agente vai executar
- Peça para separar o trabalho em fases de desenvolvimento
- Peça para gerar um IMPLEMENTATION-ROADMAP.md com tarefas por fase

---

### Seção 6 — Execução Fase a Fase

**title:** Execute, valide, avance
**body:**
Com o roadmap definido, a execução segue um ciclo por fase. Cada fase é tratada como uma unidade completa: o agente cria um plano de execução, gera uma PRD para a implementação, executa as tarefas, e ao final você atualiza o roadmap e gera um relatório do que foi feito.

Só avance para a próxima fase depois de validar a atual. Esse ciclo evita acúmulo de dívida técnica e mantém o projeto previsível do início ao fim.

**steps:**

- Peça ao agente para criar um plano de execução da fase atual
- Peça uma PRD para a implementação
- Execute a fase
- Atualize o status do roadmap (marque tarefas concluídas)
- Gere um relatório do que foi implementado
- Valide e passe para a próxima fase

---

### Seção 7 — Templates

**title:** Comece com estrutura, não do zero
**body:**
Reunimos templates prontos para cada etapa do fluxo. Use-os como ponto de partida: adapte, modifique, faça seu. O objetivo não é seguir um modelo rígido — é ter clareza desde o primeiro passo.

**items:**

- PLAN — template de planejamento de projeto
- ROADMAP — template de roadmap de implementação
- PRD — template de requisitos de produto
- Rules — template para regras de qualidade e segurança do agente
- Skills — template para habilidades reutilizáveis do agente

---

### Seção 8 — Fechamento

**title:** Estrutura é velocidade.
**body:**
Bom desenvolvimento com agentes não começa com um prompt. Começa com um plano. Ferramenta certa, plano claro, roadmap organizado, execução fase a fase — cada camada reduz ambiguidade e multiplica a qualidade do que o agente entrega. Fluxos simples vencem prompts caóticos. Sempre.

**cta:** Ver no GitHub

---

## EN

### Section 1 — Hero

**title:** Proxy
**subtitle:** A practical guide to agentic development.
**body:**
Code agents are changing how software is built. But without a clear flow, speed becomes chaos. Proxy walks you through from zero — from choosing your tool to shipping — with a simple method that works with any agent.

---

### Section 2 — Code Agents: IDE vs CLI

**title:** Two ways to work with agents
**body:**
Code agents come in two formats: embedded in an IDE or running directly in the terminal. Understanding the difference is the first step.

**categories:**

**IDE Agents**
Work inside a code editor with a visual interface. You write, request changes, and see results in the same environment. More accessible for beginners.

- **Cursor** — IDE based on VS Code with an integrated agent. Supports multiple models (Claude, GPT, Gemini). Visual interface with diff, chat, and inline editing.
- **Trae** — ByteDance IDE with a built-in agent. Interface similar to VS Code. Focus on accessibility and low cost.

**CLI Agents**
Run in the terminal, no graphical interface. You talk to the agent through text, and it reads, edits, and runs commands directly in your project. More power, more control — but requires terminal familiarity.

- **Claude Code** — Anthropic's terminal agent. Uses Claude as the model. Reads your project, edits files, and runs commands. Works with a Claude subscription or via API.
- **Codex** — OpenAI's terminal agent. Integrated into the ChatGPT ecosystem. Available as CLI, IDE extension, and desktop app.
- **OpenCode** — Open-source terminal agent. Supports multiple providers (Claude, GPT, Gemini, Ollama). Free — you use your own API keys.

---

### Section 3 — Tools and Pricing

**title:** How to get started
**body:**
Each tool has its own pricing model and installation method. Here's the current landscape so you can pick what makes the most sense.

**lastUpdated:** March 2026

**ide:**

| Tool   | Plans                                                         | How to install                                      |
| ------ | ------------------------------------------------------------- | --------------------------------------------------- |
| Cursor | Hobby (free) · Pro ($20/mo) · Pro+ ($60/mo) · Ultra ($200/mo) | cursor.com — download the installer for your system |
| Trae   | Free · Pro ($10/mo or $7.50/mo annual)                        | trae.ai — download the installer for your system    |

**cli:**

| Tool        | Plans                                                                      | How to install                                                                                 |
| ----------- | -------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| Claude Code | Free · Pro ($20/mo) · Max 5x ($100/mo) · Max 20x ($200/mo) · or via API    | `npm install -g @anthropic-ai/claude-code`                                                     |
| Codex       | Included in ChatGPT Plus ($20/mo) · Pro ($200/mo) · Business ($25/user/mo) | `npm install -g @openai/codex`                                                                 |
| OpenCode    | Free and open-source (requires your own API keys)                          | `brew install opencode-ai/tap/opencode` or `go install github.com/opencode-ai/opencode@latest` |

**note:** Prices may change. Check official websites for updated pricing.

---

### Section 4 — The Initial Plan

**title:** Start with a plan, not a prompt
**body:**
Before opening the code agent, create a PLAN.md. This is the document that translates your idea into concrete decisions: what will be built, which stack to use, how it will be deployed, and what stays out of scope.

You can use any LLM to generate the initial plan — ChatGPT, Claude, Gemini. What matters is explaining your idea clearly: what you want to build, for whom, with what constraints. Ask for a stack suggestion based on the project type and deployment model.

The result should be a robust markdown file that serves as the source of truth for all development.

**steps:**

- Describe your idea with context: product type, audience, constraints
- Ask for a stack suggestion aligned to the project
- Review and adjust the plan until it makes sense
- Save as PLAN.md at the project root

---

### Section 5 — Agent Review and Roadmap

**title:** Let the agent review and organize
**body:**
With the PLAN.md ready, take it to your code agent — Cursor, Claude Code, or whichever you prefer. Ask the agent to review the plan knowing that it will be the one executing the work.

The agent analyzes the plan, identifies dependencies, breaks the work into phases, and creates an IMPLEMENTATION-ROADMAP.md — a roadmap with atomic tasks organized by phase, each with clear completion criteria.

The roadmap becomes the execution backbone. Nothing gets implemented outside of it.

**steps:**

- Open PLAN.md in your code agent
- Ask for a review considering the agent will execute it
- Ask it to break the work into development phases
- Ask it to generate an IMPLEMENTATION-ROADMAP.md with tasks per phase

---

### Section 6 — Phase-by-Phase Execution

**title:** Execute, validate, advance
**body:**
With the roadmap defined, execution follows a per-phase cycle. Each phase is treated as a complete unit: the agent creates an execution plan, generates a PRD for the implementation, executes the tasks, and at the end you update the roadmap and generate a report of what was done.

Only move to the next phase after validating the current one. This cycle prevents technical debt buildup and keeps the project predictable from start to finish.

**steps:**

- Ask the agent to create an execution plan for the current phase
- Ask for a PRD for the implementation
- Execute the phase
- Update the roadmap status (mark completed tasks)
- Generate a report of what was implemented
- Validate and move to the next phase

---

### Section 7 — Templates

**title:** Start with structure, not from scratch
**body:**
We've gathered ready-made templates for each stage of the flow. Use them as a starting point: adapt, modify, make them yours. The goal is not to follow a rigid model — it's to have clarity from the very first step.

**items:**

- PLAN — project planning template
- ROADMAP — implementation roadmap template
- PRD — product requirements template
- Rules — template for agent quality and safety rules
- Skills — template for reusable agent skills

---

### Section 8 — Closing

**title:** Structure is speed.
**body:**
Good agentic development doesn't start with a prompt. It starts with a plan. Right tool, clear plan, organized roadmap, phase-by-phase execution — each layer reduces ambiguity and multiplies the quality of what the agent delivers. Simple flows beat chaotic prompts. Always.

**cta:** View on GitHub
