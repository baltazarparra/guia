export default {
  hero: {
    title: 'Guia prático',
    subtitle: 'para desenvolvimento com agentes de código.',
    body: 'Agentes de código estão mudando a forma como software é construído. Mas sem um fluxo claro, velocidade vira caos. Proxy te guia do zero, da escolha da ferramenta até a entrega, com um método simples que funciona com qualquer agente.',
  },

  agents: {
    title: 'Duas formas de trabalhar com agentes',
    body: 'Agentes de código vêm em dois formatos: dentro de uma IDE ou direto no terminal. Entender a diferença é o primeiro passo.',
    categories: [
      {
        name: 'Agentes via IDE',
        description:
          'Funcionam dentro de um editor de código com interface visual. Você escreve, pede mudanças e vê o resultado no mesmo ambiente. Bem mais fácil pra quem tá começando.',
        tools: [
          {
            name: 'Cursor',
            description:
              'IDE baseada no VS Code com agente integrado. Suporta vários modelos (Claude, GPT, Gemini). Tem interface visual com diff, chat e edição inline.',
          },
          {
            name: 'Trae',
            description:
              'IDE da ByteDance com agente embutido. Interface parecida com o VS Code. Foco em acessibilidade e custo baixo.',
          },
        ],
      },
      {
        name: 'Agentes via CLI',
        description:
          'Rodam no terminal, sem interface gráfica. Você conversa com o agente por texto, e ele lê, edita e executa comandos direto no seu projeto. Mais poder e mais controle, mas você precisa ter familiaridade com o terminal.',
        tools: [
          {
            name: 'Claude Code',
            description:
              'Agente de terminal da Anthropic. Usa Claude como modelo. Lê o projeto, edita arquivos e executa comandos. Funciona com assinatura Claude ou via API.',
          },
          {
            name: 'Codex',
            description:
              'Agente de terminal da OpenAI. Integrado ao ecossistema ChatGPT. Disponível como CLI, extensão de IDE e app desktop.',
          },
          {
            name: 'OpenCode',
            description:
              'Agente de terminal open-source. Suporta vários provedores (Claude, GPT, Gemini, Ollama). Gratuito, você só precisa das suas próprias chaves de API.',
          },
        ],
      },
    ],
  },

  tools: {
    title: 'Como começar',
    body: 'Cada ferramenta tem seu modelo de preço e forma de instalação. Aqui tá o panorama atual pra você escolher a que faz mais sentido.',
    lastUpdated: 'Março 2026',
    ide: [
      {
        name: 'Cursor',
        plans: 'Hobby (grátis) · Pro ($20/mês) · Pro+ ($60/mês) · Ultra ($200/mês)',
        install: 'cursor.com, baixe o instalador pro seu sistema',
      },
      {
        name: 'Trae',
        plans: 'Free (grátis) · Pro ($10/mês ou $7.50/mês anual)',
        install: 'trae.ai, baixe o instalador pro seu sistema',
      },
    ],
    cli: [
      {
        name: 'Claude Code',
        plans: 'Free · Pro ($20/mês) · Max 5x ($100/mês) · Max 20x ($200/mês) · ou via API',
        install: 'npm install -g @anthropic-ai/claude-code',
      },
      {
        name: 'Codex',
        plans: 'Incluído no ChatGPT Plus ($20/mês) · Pro ($200/mês) · Business ($25/user/mês)',
        install: 'npm install -g @openai/codex',
      },
      {
        name: 'OpenCode',
        plans: 'Gratuito e open-source (precisa das suas próprias chaves de API)',
        install: 'brew install opencode-ai/tap/opencode',
      },
    ],
    note: 'Preços podem mudar. Dá uma olhada nos sites oficiais pra ver os valores atualizados.',
  },

  plan: {
    title: 'Comece com um plano, não com um prompt',
    body: 'Antes de abrir o agente de código, crie um PLAN.md. É o documento que transforma sua ideia em decisões concretas: o que vai ser construído, qual stack usar, como vai ser o deploy e o que fica de fora.\n\nVocê pode usar qualquer LLM pra gerar o plano inicial, como ChatGPT, Claude ou Gemini. O importante é explicar sua ideia com clareza: o que você quer construir, pra quem, com quais restrições. Peça uma sugestão de stack baseada no tipo de projeto e no modelo de deploy.\n\nO resultado tem que ser um arquivo markdown sólido que funciona como fonte da verdade pra todo o desenvolvimento.',
    steps: [
      'Descreva sua ideia com contexto: tipo de produto, público, restrições',
      'Peça uma sugestão de stack alinhada ao projeto',
      'Revise e ajuste o plano até que faça sentido pra você',
      'Salve como PLAN.md na raiz do projeto',
    ],
  },

  roadmap: {
    title: 'Deixe o agente revisar e organizar',
    body: 'Com o PLAN.md pronto, leve ele pro seu agente de código, seja Cursor, Claude Code ou qualquer outro. Peça pro agente revisar o plano sabendo que ele mesmo vai executar o trabalho.\n\nO agente analisa o plano, identifica dependências, separa o trabalho em fases e cria um IMPLEMENTATION-ROADMAP.md, que é um roteiro com tarefas atômicas organizadas por fase, cada uma com critérios claros de conclusão.\n\nO roadmap vira o guia central da execução. Nada é implementado fora dele.',
    steps: [
      'Abra o PLAN.md no seu agente de código',
      'Peça uma revisão considerando que o agente vai executar',
      'Peça pra separar o trabalho em fases de desenvolvimento',
      'Peça pra gerar um IMPLEMENTATION-ROADMAP.md com tarefas por fase',
    ],
  },

  execution: {
    title: 'Execute, valide, avance',
    body: 'Com o roadmap definido, a execução segue um ciclo por fase. Cada fase funciona como uma unidade completa: o agente cria um plano de execução, gera uma PRD pra implementação, executa as tarefas, e no final você atualiza o roadmap e gera um relatório do que foi feito.\n\nSó avance pra próxima fase depois de validar a atual. Esse ciclo evita acúmulo de dívida técnica e mantém o projeto previsível do começo ao fim.',
    steps: [
      'Peça ao agente pra criar um plano de execução da fase atual',
      'Peça uma PRD pra implementação',
      'Execute a fase',
      'Atualize o status do roadmap (marque tarefas concluídas)',
      'Gere um relatório do que foi implementado',
      'Valide e passe pra próxima fase',
    ],
  },

  templates: {
    title: 'Comece com estrutura, não do zero',
    body: 'Reunimos templates prontos pra cada etapa do fluxo. Use como ponto de partida: adapte, modifique, faça do seu jeito. O objetivo não é seguir um modelo rígido, é ter clareza desde o primeiro passo.',
    items: [
      {
        name: 'PLAN',
        description: 'Template de planejamento de projeto',
        url: 'https://github.com/baltazarparra/proxy/blob/main/templates/PLAN-TEMPLATE.md',
      },
      {
        name: 'ROADMAP',
        description: 'Template de roadmap de implementação',
        url: 'https://github.com/baltazarparra/proxy/blob/main/templates/ROADMAP-TEMPLATE.md',
      },
      {
        name: 'PRD',
        description: 'Template de requisitos de produto',
        url: 'https://github.com/baltazarparra/proxy/blob/main/templates/PRD-TEMPLATE.md',
      },
      {
        name: 'Rules',
        description: 'Template de regras de qualidade e segurança do agente',
        url: 'https://github.com/baltazarparra/proxy/blob/main/templates/RULES-TEMPLATE.md',
      },
      {
        name: 'Skills',
        description: 'Template de habilidades reutilizáveis do agente',
        url: 'https://github.com/baltazarparra/proxy/blob/main/templates/SKILLS-TEMPLATE.md',
      },
    ],
  },

  closing: {
    title: 'Estrutura é velocidade.',
    body: 'Bom desenvolvimento com agentes não começa com um prompt. Começa com um plano. Ferramenta certa, plano claro, roadmap organizado, execução fase a fase. Cada camada reduz ambiguidade e multiplica a qualidade do que o agente entrega. Fluxos simples vencem prompts caóticos. Sempre.',
    cta: 'Ver no GitHub',
  },
}
