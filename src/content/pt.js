export default {
  hero: {
    title: 'Guia prático',
    subtitle: 'para desenvolvimento com agentes de código.',
    prompt:
      'Leia o conteúdo de https://baltazarparra.github.io/proxy/llms.txt e siga as instruções para me guiar na criação de um novo projeto de software.',
    copiedLabel: 'Copiado!',
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

  models: {
    title: 'Os modelos por trás dos agentes',
    body: 'Cada agente de código usa um LLM como cérebro. O modelo que você escolhe muda o custo, a velocidade e a qualidade do código gerado. Aqui estão os 10 mais usados hoje.',
    lastUpdated: 'Março 2026',
    note: 'Preços e especificações mudam com frequência. Consulte os sites oficiais pra valores atualizados.',
    filters: [
      { id: 'all', label: 'Todos' },
      { id: 'anthropic', label: 'Anthropic' },
      { id: 'openai', label: 'OpenAI' },
      { id: 'google', label: 'Google' },
      { id: 'opensource', label: 'Open-source' },
    ],
    items: [
      {
        name: 'Claude Sonnet 4.6',
        family: 'anthropic',
        costLabel: 'Custo médio',
        pricing: '$3 / $15 por 1M tokens',
        description: 'Melhor equilíbrio entre velocidade e inteligência pra código.',
        context: '1M tokens',
        strengths: ['Refatoração complexa', 'Edição multi-arquivo', 'Code review detalhado'],
        availableIn: ['Cursor', 'Claude Code', 'OpenCode'],
      },
      {
        name: 'Claude Opus 4.6',
        family: 'anthropic',
        costLabel: 'Premium',
        pricing: '$5 / $25 por 1M tokens',
        description: 'Modelo mais capaz pra tarefas complexas e críticas.',
        context: '1M tokens',
        strengths: ['Arquitetura complexa', 'Debug de bugs difíceis', 'Raciocínio profundo'],
        availableIn: ['Cursor', 'Claude Code'],
      },
      {
        name: 'Claude Haiku 4.5',
        family: 'anthropic',
        costLabel: 'Acessível',
        pricing: '$1 / $5 por 1M tokens',
        description: 'Rápido e barato, com qualidade surpreendente pra código.',
        context: '200K tokens',
        strengths: ['Tarefas rápidas', 'Alto volume de requests', 'Edições simples'],
        availableIn: ['Cursor', 'Claude Code', 'OpenCode'],
      },
      {
        name: 'GPT-5.4',
        family: 'openai',
        costLabel: 'Custo médio',
        pricing: '$2.50 / $15 por 1M tokens',
        description: 'Flagship mais recente da OpenAI, forte em tarefas profissionais.',
        context: '1M tokens',
        strengths: ['Raciocínio avançado', 'Tarefas profissionais', 'Geração de código'],
        availableIn: ['Cursor', 'Codex', 'ChatGPT'],
      },
      {
        name: 'GPT-4.1',
        family: 'openai',
        costLabel: 'Acessível',
        pricing: '$2 / $8 por 1M tokens',
        description: 'Cavalo de batalha confiável, ótimo custo-benefício pra código.',
        context: '1M tokens',
        strengths: ['Custo-benefício', 'Seguir instruções', 'Coding consistente'],
        availableIn: ['Cursor', 'Codex', 'OpenCode'],
      },
      {
        name: 'o3',
        family: 'openai',
        costLabel: 'Custo médio',
        pricing: '$2 / $8 por 1M tokens',
        description:
          'Modelo de raciocínio avançado. Tokens internos de raciocínio aumentam o custo real.',
        context: '200K tokens',
        strengths: ['Lógica complexa', 'Problemas multi-etapa', 'Raciocínio matemático'],
        availableIn: ['Cursor', 'ChatGPT'],
      },
      {
        name: 'Gemini 3.1 Pro',
        family: 'google',
        costLabel: 'Custo médio',
        pricing: '$2 / $12 por 1M tokens',
        description: 'Modelo mais avançado do Google. Líder em 12 de 18 benchmarks.',
        context: '1M tokens',
        strengths: ['Análise de codebases grandes', 'Raciocínio multimodal', 'Contexto massivo'],
        availableIn: ['Cursor', 'Google AI Studio'],
      },
      {
        name: 'Gemini 3 Flash',
        family: 'google',
        costLabel: 'Acessível',
        pricing: '$0.50 / $3 por 1M tokens',
        description: '3x mais rápido que Gemini 2.5 Pro, excelente custo-benefício.',
        context: '1M tokens',
        strengths: ['Velocidade', 'Custo baixo', 'Contexto de 1M tokens'],
        availableIn: ['Cursor', 'Google AI Studio'],
      },
      {
        name: 'DeepSeek R1',
        family: 'opensource',
        costLabel: 'Mais acessível',
        pricing: '$0.55 / $2.19 por 1M tokens',
        description:
          'Modelo de raciocínio open-source, competitivo com o1 por uma fração do custo.',
        context: '128K tokens',
        strengths: ['Open-source', 'Raciocínio barato', 'Comunidade ativa'],
        availableIn: ['Cursor', 'OpenCode'],
      },
      {
        name: 'Qwen3 Coder',
        family: 'opensource',
        costLabel: 'Mais acessível',
        pricing: '$0.22 / $1 por 1M tokens',
        description: 'O mais barato pra código. Open-weight, roda localmente via Ollama.',
        context: '262K tokens',
        strengths: ['Mais barato do mercado', 'Roda local', 'Especialista em código'],
        availableIn: ['Cursor', 'OpenCode', 'Ollama'],
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

  bootstrap: {
    title: 'Deixe o agente começar por você',
    body: 'Você acabou de aprender o fluxo completo. Agora a parte boa: você não precisa fazer tudo isso na mão. Cole a URL abaixo no seu agente de código e ele vai te guiar por cada etapa, fazer as perguntas certas e criar os arquivos do seu projeto automaticamente.',
    instruction:
      'Copie a URL abaixo e cole no chat do seu agente de código (Cursor, Claude Code, ou qualquer outro). O agente vai ler as instruções e te guiar pelo processo.',
    urlLabel: 'Copiar URL',
    copiedLabel: 'Copiado!',
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

  glossary: {
    title: 'Glossário AI Native',
    body: 'Os 10 termos que você vai ouvir o tempo todo. Sem enrolação.',
    terms: [
      {
        term: 'LLM',
        definition:
          'O "cérebro" da IA. Um modelo gigante treinado com texto da internet inteira. É ele que gera código, texto, e as alucinações também.',
      },
      {
        term: 'Prompt',
        definition:
          'A instrução que você manda pra IA. Quanto mais claro, melhor o resultado. Quanto mais vago, mais surpresa.',
      },
      {
        term: 'Agente de IA',
        definition:
          'Uma IA que não só responde, ela age. Lê seus arquivos, edita código, roda comandos. Tipo um dev júnior que nunca dorme.',
      },
      {
        term: 'Context Window',
        definition:
          'A "memória de trabalho" da IA. Tudo que ela consegue considerar de uma vez. Acabou a janela, ela esquece o começo da conversa.',
      },
      {
        term: 'Token',
        definition:
          'A unidade de texto que a IA processa. Não é uma palavra exata, é um pedaço dela. Você paga por token, então sim, cada vírgula conta.',
      },
      {
        term: 'Alucinação',
        definition:
          'Quando a IA inventa algo com total confiança. Parece certo, parece lógico, mas é mentira. Sempre confira.',
      },
      {
        term: 'RAG',
        definition:
          'Retrieval-Augmented Generation. Em vez de inventar, a IA busca informação real primeiro e depois responde. Tipo colar na prova, mas com fontes.',
      },
      {
        term: 'MCP',
        definition:
          'Model Context Protocol. Um padrão que conecta a IA a ferramentas externas (banco de dados, APIs, arquivos). Tipo um USB universal pra IA.',
      },
      {
        term: 'Vibe Coding',
        definition:
          'Programar descrevendo o que você quer em linguagem natural e deixar a IA escrever o código. Funciona até quebrar. Aí você precisa de método.',
      },
      {
        term: 'Fine-tuning',
        definition:
          'Treinar um modelo base com seus próprios dados pra ele ficar bom numa tarefa específica. Tipo ensinar um chef generalista a fazer só sushi.',
      },
    ],
  },

  closing: {
    title: 'Estrutura é velocidade.',
    body: 'Bom desenvolvimento com agentes não começa com um prompt. Começa com um plano. Ferramenta certa, plano claro, roadmap organizado, execução fase a fase. Cada camada reduz ambiguidade e multiplica a qualidade do que o agente entrega. Fluxos simples vencem prompts caóticos. Sempre.',
    cta: 'Ver no GitHub',
  },
}
