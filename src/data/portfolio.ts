import type { Portfolio } from "@/types/portfolio";

// Todo o conteúdo do site fica aqui.
// Dados pessoais do CV (gênero, CNH, telefone) ficaram de fora de propósito.
export const portfolio: Portfolio = {
  site: {
    title: "Karin Elizabeth · Desenvolvedora full-stack",
    description:
      "Desenvolvedora full-stack focada em performance, otimização e segurança. Criei o backoffice e os pagamentos da Supernova Bet, um coletor que acompanhou 150 mil impressoras num servidor só e o kezz, meu ecossistema de apps em Rust.",
    lang: "pt-BR",
    url: "https://karinzitta.dev",
    ogImage: "/og/home.jpg",
    keywords: [
      "Karin Elizabeth",
      "desenvolvedora full-stack",
      "portfólio",
      "TypeScript",
      "Rust",
      "NestJS",
      "Next.js",
      "React",
      "Vue",
      "Linux",
      "AWS",
      "pagamentos",
      "backoffice",
      "performance",
      "otimização",
      "segurança",
    ],
  },

  nav: [
    { label: "Sobre", href: "/sobre/" },
    { label: "Skills", href: "/#skills" },
    { label: "Projetos", href: "/#projetos" },
    { label: "Contato", href: "/#contato" },
  ],

  profile: {
    wordmark: "KARIN",
    eyebrow: "● PORTFOLIO · 2026",
    greeting: "Olá, eu sou",
    name: "KARIN ELIZABETH",
    tagline: "Desenvolvedora full-stack // performance · otimização · segurança",
    lead: "Programo desde os 12 anos, quando criava coisas por hobby e curiosidade. Hoje construo sistemas que aguentam produção: o backoffice e os pagamentos de uma plataforma de apostas com várias casas, um coletor que acompanhou 150 mil impressoras num servidor só e o kezz, meu conjunto de apps em Rust.",
    status: { label: "Online", detail: "Aberta a propostas" },
    primaryCta: { label: "Entre em contato", href: "#contato" },
    secondaryCta: { label: "Ver projetos", href: "#projetos" },
    portrait: {
      initials: "KE",
      captionName: "Karin Elizabeth",
      captionRole: "// fullstack dev",
      tag: "@karinzitta",
      image: "/me.png",
    },
    focusCards: [
      {
        num: "01",
        title: "Performance",
        chips: ["Rust", "Redis", "Batching", "Cache"],
        description:
          "Sistema que aguenta carga sem cair. O PrinterCollector recebia dados de mais de 150 mil impressoras num servidor só, e o agente rodava com 2 a 3 MB de RAM.",
      },
      {
        num: "02",
        title: "Otimização",
        chips: ["Postgres", "JSONB", "Queries", "Custo"],
        description:
          "Fazer o mesmo gastando menos máquina e menos banco. Uma linha por impressora por dia em vez de uma por leitura, e telas de backoffice que pararam de repetir consulta.",
      },
      {
        num: "03",
        title: "Segurança",
        chips: ["RBAC", "2FA", "Bloqueio por IP", "AES-256"],
        description:
          "Permissões por papel, 2FA, regras que bloqueiam IP sozinhas e credenciais criptografadas na Supernova. No PrinterCollector, um agente dentro da rede dos clientes que só enviava o necessário.",
      },
    ],
    metrics: [
      { value: "5 anos", label: "programando profissionalmente, 11 contando os anos por diversão" },
      { value: "3.500+", label: "commits meus só em 2026" },
      { value: "3", label: "empresas, e dezenas de projetos profissionais executados" },
      { value: "12 países", label: "com pagamentos que eu integrei, num projeto internacional" },
    ],
  },

  about: {
    marker: { code: "//01.00 SEC_SOBRE", index: "[01 / 04]" },
    eyebrow: "SOBRE",
    title: "Um pouco sobre mim",
    paragraphs: [
      "Programo desde os 12 anos, mas aprendi a programar de verdade construindo o PrinterCollector, na Copynorte. Quando saí de lá, em 2025, já conseguia fazer quase qualquer coisa: interface, API, banco, servidor e deploy.",
      "Depois vieram a Ana Gaming e a PGX, onde eu me divido entre a Supernova Bet e os meus projetos. O fio que liga tudo é performance, otimização e segurança, e por onde passei virei a pessoa de confiança pra código e pra decisão técnica.",
    ],
    quote: "Meu foco sempre foi ser a melhor no que eu faço, e pra mim isso é entender o sistema inteiro.",
    principles: [
      {
        code: "P1",
        title: "Ponta a ponta",
        body: "Pego a tarefa inteira: interface, API, banco, servidor e deploy.",
      },
      {
        code: "P2",
        title: "Até estar no ar",
        body: "Só considero pronto quando está rodando em produção.",
      },
      {
        code: "P3",
        title: "Aprendo o que falta",
        body: "Se a ferramenta certa é uma que eu ainda não sei usar, eu aprendo. Foi assim com Rust.",
      },
    ],
    more: { label: "Meu caminho até aqui", href: "/sobre/" },
  },

  aboutPage: {
    seo: {
      title: "Sobre mim",
      description:
        "Quem é a Karin Elizabeth: dos primeiros jogos aos 12 anos ao PrinterCollector, à Ana Gaming e à PGX, e o jeito que eu trabalho.",
    },
    eyebrow: "SOBRE MIM",
    title: "Karin Elizabeth",
    lead: [
      "Sou desenvolvedora full-stack e cuido de infra também. Programo desde os 12 anos, quando criava coisas por hobby e curiosidade, mas aprendi a programar de verdade construindo sistema em produção. É assim que eu continuo aprendendo.",
      "Consigo construir praticamente qualquer API, mas onde eu mais me aprofundei foi em performance, otimização e segurança. Meu foco sempre foi ser a melhor no que eu faço, e pra mim isso começa por entender o sistema inteiro.",
    ],
    facts: [
      { value: "11 anos", label: "mexendo com código" },
      { value: "2021", label: "meu primeiro emprego como dev" },
      { value: "2", label: "sistemas meus que rodaram fora do Brasil" },
      { value: "3.500+", label: "commits meus só em 2026" },
    ],
    pillarsTitle: "Onde eu sou mais forte",
    how: {
      title: "Como eu trabalho",
      paragraphs: [
        "Programo full-stack e cuido de servidor, mas nunca quis ser só \"a do front\" ou \"a do back\". Quero entender cada parte o bastante pra decidir bem, mesmo quando quem executa é outra pessoa ou, hoje em dia, a minha IA, que escreve o código. Tudo o que ela escreve passa pela minha revisão, pra nada errado ou mal feito chegar em produção.",
        "Em todas as empresas por onde passei, acabei sendo a pessoa de confiança pro código e pras decisões técnicas. Quando algo precisava funcionar sem quebrar, chegava em mim.",
      ],
    },
    roadmap: {
      title: "Meu caminho",
      steps: [
        {
          place: "12 anos",
          title: "Os primeiros jogos",
          compact: true,
          body: ["Me interessei por desenvolvimento de jogos e fiz uns cursos com engines de arrastar e soltar."],
        },
        {
          place: "14 anos",
          title: "Linux e hacking",
          compact: true,
          body: [
            "Aprendi Linux por dois motivos: queria ganhar dinheiro como hacker ética, e queria jogar. Meu pai bloqueava o computador quando saía pra trabalhar, então eu dava boot num Linux pelo pendrive e jogava Minecraft e The Sims sem precisar da senha do Windows.",
          ],
        },
        {
          place: "16 anos",
          title: "Bots pro Discord",
          compact: true,
          body: [
            "Nessa época eu já entendia como a internet funciona por baixo e comecei a escrever bots pro Discord em Python: um pra tocar música, outros pra moderar e organizar o meu servidor. O código ainda era cru, mas eles funcionavam.",
          ],
        },
        {
          place: "17 anos",
          title: "De volta aos jogos",
          compact: true,
          body: [
            "Voltei pros jogos, agora escrevendo C# na Unity e usando o GameMaker. Não cheguei a publicar nenhum: eu travava nos sprites e acabava desistindo.",
            "Hoje, na Kezz Game Forge, sprite não me trava mais: faço parte com IA e parte na mão. E o visual dos meus jogos, que ainda não publiquei, se apoia em partículas, luz e sombra. É a ambientação que deixa a cena bonita, então até um sprite simples fica bem dentro do jogo.",
          ],
        },
        {
          place: "Copynorte",
          period: "18 anos · 2021 a mai 2025",
          title: "Onde eu aprendi a programar de verdade",
          body: [
            "Já estava melhor em Python e consegui meu primeiro emprego como programadora, na Copynorte. Lá comecei o PrinterCollector e aprendi a programar de verdade construindo ele: o agente em Rust que roda nos clientes, a API, o dashboard, o banco e o servidor da empresa. No fim ele acompanhava mais de 150 mil impressoras e nunca caiu.",
            "Foi lá que performance e segurança viraram meu foco. O sistema tinha que aguentar todas aquelas impressoras sem cair, e se alguém invadisse, poderia chegar em informações dos clientes.",
            "No mesmo período, a Copynorte pegou vários projetos pro governo, e eu estava sempre à frente do desenvolvimento.",
            "Saí de lá uma profissional pronta pra construir quase qualquer coisa.",
          ],
          links: [{ label: "PrinterCollector", href: "/projetos/printercollector/" }],
        },
        {
          place: "Ana Gaming",
          title: "Indo pros jogos online",
          body: ["Da Copynorte fui pra Ana Gaming, já no mercado de jogos online."],
          links: [{ label: "o desafio técnico que eu fiz", href: "/projetos/anagaming-desafio-frontend/" }],
        },
        {
          place: "PGX",
          period: "hoje",
          title: "Onde o caminho se divide",
          body: ["Na PGX eu me divido em duas frentes."],
          branches: [
            {
              title: "Supernova Bet",
              body: "Uma plataforma de apostas com várias casas, que rodou em produção. Criei o backoffice do zero e fiquei com pagamentos, alarmes e segurança.",
              links: [{ label: "ver o projeto", href: "/projetos/supernova-bet/" }],
            },
            {
              title: "Meus projetos",
              body: "O kezz, meu ecossistema de apps em Rust com uma conta só pra todos, e a Kezz Game Forge, minha engine de jogos 2D.",
              links: [
                { label: "kezz", href: "/projetos/kezz/" },
                { label: "Kezz Game Forge", href: "/projetos/kezz-game-forge/" },
              ],
            },
          ],
        },
      ],
    },
    study: {
      title: "E a faculdade?",
      paragraphs: [
        "Comecei Engenharia de Software na época da Copynorte, mas parei. Naquele momento o curso me ensinava coisas que eram bem menos úteis pra mim do que aprender construindo sistema de verdade, e eu queria ficar muito boa em programação.",
      ],
    },
    principlesTitle: "No dia a dia",
    cta: {
      title: "Quer construir alguma coisa comigo?",
      body: "Tô aberta a propostas. Me manda um e-mail ou dá uma olhada nos projetos.",
      primary: { label: "falar comigo →", href: "/#contato" },
      secondary: { label: "ver projetos", href: "/#projetos" },
    },
  },

  skills: {
    marker: { code: "//02.00 SEC_SKILLS", index: "[02 / 04]" },
    eyebrow: "CAIXA DE FERRAMENTAS",
    title: "Com o que eu trabalho",
    groups: [
      {
        label: "FRONT-END",
        items: ["React", "Next.js", "Vue", "Nuxt", "TypeScript", "Sass"],
      },
      {
        label: "BACK-END",
        items: ["NestJS", "Rust", "Python", "Ruby on Rails", "Java", "C# / .NET"],
      },
      {
        label: "INFRA / DEVOPS",
        items: ["Linux", "Docker", "Nginx", "AWS", "PostgreSQL", "Redis", "RabbitMQ", "MongoDB"],
      },
    ],
  },

  projects: {
    marker: { code: "//03.00 SEC_PROJETOS", index: "[03 / 04]" },
    eyebrow: "PROJETOS",
    title: "O que eu construí",
    moreLabel: "OUTROS PROJETOS",
    ui: {
      open: "ver projeto →",
      back: "← voltar pros projetos",
      next: "próximo projeto",
      period: "período",
      role: "o que eu fiz",
      stack: "stack",
      links: "links",
      ctaTitle: "Quer conversar sobre algum projeto?",
      ctaBody: "Me manda um e-mail que eu respondo.",
      ctaButton: "falar comigo →",
      shots: {
        hint: "clique para ampliar",
        open: "Ampliar o print",
        esc: "esc para fechar",
        close: "Fechar o print",
      },
    },
    list: [
      {
        slug: "kezz",
        ogImage: "/og/kezz.jpg",
        name: "Ecossistema kezz",
        featured: true,
        badge: "PROJETO PESSOAL · NO AR",
        tagline: "quatro apps, uma conta só // Rust · axum · SQLite",
        summary:
          "Meu projeto pessoal: quatro apps em Rust que usam a mesma conta. O Kezz Core faz o login de todos e cada app roda no seu próprio deploy.",
        tags: ["Rust", "axum", "SQLite", "Tauri"],
        metrics: [
          { value: "4", label: "apps" },
          { value: "1", label: "conta pra todos" },
          { value: "Rust", label: "em todos os serviços" },
          { value: "MCP", label: "a IA mexe no board" },
        ],
        period: "desde agosto de 2026",
        role: "Tudo. É um projeto solo.",
        stack: ["Rust", "axum", "SQLite", "Vue", "Tauri", "MCP", "Square Cloud"],
        intro: [
          "O kezz começou como um assistente pra mim e foi crescendo. Hoje são quatro apps: o Kezz Core (o servidor central), o Kezz AI (app de desktop e celular), a Security DB e o Kezz Board.",
          "O que amarra tudo é ter uma conta só. O Kezz Core guarda os usuários e decide quem pode usar cada app. Os outros apps não têm cadastro próprio: recebem o login, perguntam pro Core e guardam só um token. Cada um roda no seu deploy, com o seu banco SQLite.",
          "Fiz tudo sozinha, do desenho dos serviços ao deploy na Square Cloud.",
        ],
        visual: {
          kind: "kezz-map",
          caption: "fig. 01 · como os apps do kezz se conectam",
          zoom: {
            path: "~/kezz/infra/mapa",
            title: "Mapa do ecossistema kezz",
            hint: "clique para ampliar",
            open: "Ampliar o mapa do kezz",
            esc: "esc para fechar",
            close: "Fechar o mapa",
          },
          data: {
            legend: {
              data: "dados",
              login: "login pela conta kezz",
              external: "serviço externo",
            },
            zones: {
              devices: "APARELHOS",
              cloud: "SQUARE CLOUD",
              cloudNote: "cada app é um deploy, com o seu SQLite",
              external: "SERVIÇOS EXTERNOS",
              board: "KEZZ BOARD",
              boardNote: "servidor próprio",
              logins: "QUEM FAZ O LOGIN",
            },
            devices: {
              browser: { name: "Navegador", text: "dashboard do kezz" },
              kezzAi: {
                name: "Kezz AI",
                text: "app desktop e celular, mais o conector que roda em cada máquina. Também usa o Kezz Board por MCP.",
              },
            },
            core: {
              name: "Kezz Core",
              aside: "(o kezz)",
              meta: "kezz-ai.squareweb.app · Rust/axum + SQLite",
              points: [
                "Servidor central: assistente, monitor, dashboard, coding, security e workflows",
                "**Conta única de todos os apps:** `users` + `module_grants`",
                "Permissão por pessoa e por app (`securitydb` · `kezzboard`), ligada e desligada na tela Usuários",
                "Dashboard em Vue embutido, já com as telas da Security DB",
              ],
            },
            securityDb: {
              name: "Security DB",
              meta: "kezzsecuritydb.squareweb.app · Rust/axum + SQLite",
              points: [
                "Domínios, rede e ameaças pros apps kezz",
                "**Sem contas próprias:** entra pela conta kezz",
                "Guarda só o escopo de aparelhos de cada pessoa",
                "As telas ficam no dashboard do kezz",
              ],
            },
            board: {
              name: "Kezz Board",
              meta: "Rust/axum + SQLite + Vue · canvas de notas",
              wip: "em andamento",
              points: [
                "Canvas de notas estilo Milanote",
                "Login pela conta kezz e multiplayer com os usuários do kezz",
                "MCP pra IA, com um token por conta",
                "WebSocket sincroniza quem está no mesmo board",
              ],
            },
            boardBrowser: { name: "Navegador", text: "a interface do board" },
            externals: {
              ai: {
                name: "Modelos de IA & APIs",
                text: "provedores compatíveis com OpenAI, GitHub, X, Brave, Tavily e bases de malware",
              },
              dns: {
                name: "NextDNS",
                text: "de onde vêm os logs de DNS; recebe os bloqueios e liberações",
              },
              rdap: {
                name: "RDAP · Cloudflare Radar",
                text: "coleta em segundo plano sobre cada domínio novo",
              },
            },
            wires: {
              browser: "HTTPS",
              kezzAi: "HTTPS · WS",
              api: "API",
              secData: "`/api` lê e grava",
              secLogin: "login · securitydb",
              boardLogin: "login · kezzboard",
              mcp: "MCP",
              boardBrowser: "HTTP · WS",
            },
            logins: [
              { name: "Kezz Core", how: "a conta única", accent: "magenta" },
              { name: "Kezz AI", how: "conta kezz", accent: "pink" },
              { name: "Security DB", how: "conta kezz", accent: "teal" },
              { name: "Kezz Board", how: "conta kezz", accent: "amber" },
            ],
            foot: {
              title: "Como funciona o login pela conta kezz.",
              body: "O app recebe usuário e senha e repassa ao kezz (`/auth/module/login`, com a chave secreta do módulo). O kezz confere a senha e se a pessoa tem permissão pra aquele app, e devolve um token. A cada pedido o app confirma o token (`/auth/module/introspect`, guardado por 30 s). Tirou a permissão no kezz → o acesso cai em até 30 s. Se o kezz estiver fora do ar, o app recusa quem não estiver no cache.",
            },
          },
        },
        highlights: {
          title: "Como funciona",
          items: [
            {
              title: "Uma conta só",
              body: "Só o Kezz Core guarda senha. Os apps mandam o login pra ele e conferem o token a cada pedido, com cache de 30 segundos. Se eu tiro a permissão de alguém, o acesso cai em até 30 s.",
            },
            {
              title: "Um deploy por app",
              body: "Cada app é um serviço separado na Square Cloud, com o seu SQLite. Se um cai, os outros continuam funcionando.",
            },
            {
              title: "IA no meio",
              body: "O Kezz AI conversa com o Kezz Board por MCP, então a IA consegue ler e escrever no canvas de notas.",
            },
            {
              title: "Security DB",
              body: "Coleta domínios e ameaças em segundo plano (NextDNS, RDAP, Cloudflare Radar) e mostra tudo no dashboard do kezz.",
            },
          ],
        },
        showcase: {
          title: "Por dentro",
          note: "Os prints usam dados de demonstração (domínios e conversas inventados), então nada pessoal aparece.",
          items: [
            {
              eyebrow: "WORKFLOWS",
              title: "Um domínio suspeito vira bloqueio sozinho",
              body: "Os workflows são desenhados num canvas e rodam no servidor, mesmo sem ninguém olhando. Esse recebe um alerta da Security DB e lê o alerta com IA. Se o domínio aparece em 2 listas de ameaça ou mais, ele bloqueia no DNS e me avisa. Se não, me pergunta antes.",
              points: [
                "Antes de ligar, o kezz lista tudo o que o workflow pode mudar, e ele só roda depois de aprovado",
                "Cada execução fica registrada com o caminho que percorreu",
                "IA, DNS, scripts, perguntas pra uma pessoa e avisos entram no mesmo desenho",
              ],
              shot: {
                src: "/projetos/kezz/kezz-workflow.webp",
                alt: "Workflow do kezz que bloqueia domínios suspeitos, com a lista do que ele pode mudar e as últimas execuções",
                label: "kezz / workflows / Domínio suspeito na Security DB",
                ratio: "2400 / 2086",
              },
            },
            {
              eyebrow: "KEZZ AI · CHAT",
              title: "O resumo da semana, com o bloqueio já feito",
              body: "Pedi pro Kezz AI olhar a Security DB da semana. Ele cruzou os logs de DNS dos aparelhos com as listas de ameaça, montou a tabela do que valia atenção e bloqueou no NextDNS só o que era perigoso de verdade. O resto ficou pra eu decidir.",
              points: [
                "Pastas, abas e modos de conversa: chat, voz, código e segurança",
                "Cada resposta mostra o raciocínio, os tokens e o modelo usado",
                "O mesmo app roda no desktop e no celular",
              ],
              shot: {
                src: "/projetos/kezz/kezz-ai-chat.webp",
                alt: "Kezz AI no desktop, com o resumo da semana da Security DB e a tabela de domínios suspeitos",
                label: "Kezz AI / Semana na Security DB",
                ratio: "3 / 2",
              },
              phone: {
                src: "/projetos/kezz/kezz-ai-celular-chat.webp",
                alt: "Kezz AI no celular, explicando por que o celular ficou offline",
                label: "Kezz AI no celular",
                ratio: "1109 / 2400",
                device: "mobile",
              },
            },
            {
              eyebrow: "KEZZ CODE",
              title: "Uma mudança pronta pra revisar",
              body: "No Kezz Code eu peço uma mudança e o Kezz planeja, lê o código, escreve e roda os testes. Nada entra antes de eu ler: aqui ele terminou a busca nas notas do Kezz Board e está esperando a minha revisão.",
              points: [
                "O plano é aprovado antes de qualquer arquivo mudar",
                "Diff lado a lado de cada arquivo, com o histórico de tudo o que ele fez",
                "`cargo test` e `pnpm test` rodam sozinhos antes do pedido de revisão",
              ],
              shot: {
                src: "/projetos/kezz/kezz-code.webp",
                alt: "Kezz Code com o diff lado a lado, os testes passando e a mudança esperando revisão",
                label: "Kezz Code / kezz-board / busca nas notas",
                ratio: "16 / 10",
              },
            },
          ],
        },
        gallery: {
          title: "Galeria",
          desktopLabel: "DESKTOP",
          mobileLabel: "CELULAR",
          items: [
            {
              src: "/projetos/kezz/kezz-workflow.webp",
              alt: "Workflow do kezz que bloqueia domínios suspeitos",
              label: "kezz / workflows / Domínio suspeito na Security DB",
              caption: "O workflow, a lista do que ele pode mudar e as últimas 18 execuções.",
              ratio: "16 / 10",
            },
            {
              src: "/projetos/kezz/kezz-ai-chat.webp",
              alt: "Kezz AI com o resumo da semana da Security DB",
              label: "Kezz AI / Semana na Security DB",
              caption: "O resumo da semana da Security DB no Kezz AI.",
              ratio: "16 / 10",
            },
            {
              src: "/projetos/kezz/kezz-code.webp",
              alt: "Kezz Code esperando revisão",
              label: "Kezz Code / kezz-board / busca nas notas",
              caption: "O Kezz Code esperando revisão, com os testes passando.",
              ratio: "16 / 10",
            },
            {
              src: "/projetos/kezz/kezz-workflows-list.webp",
              alt: "Lista de workflows do kezz, ligados e desligados",
              label: "kezz / workflows",
              caption: "Os workflows da conta, ligados e desligados.",
              ratio: "2400 / 714",
            },
            {
              src: "/projetos/kezz/kezz-ai-celular-chat.webp",
              alt: "Kezz AI no celular, explicando por que o celular ficou offline",
              label: "Kezz AI no celular / chat",
              caption: "Por que o celular ficou offline.",
              ratio: "1109 / 2400",
              device: "mobile",
            },
            {
              src: "/projetos/kezz/kezz-ai-celular-pastas.webp",
              alt: "Pastas e conversas do Kezz AI no celular",
              label: "Kezz AI no celular / pastas",
              caption: "As pastas e as conversas.",
              ratio: "1109 / 2400",
              device: "mobile",
            },
          ],
        },
      },

      {
        slug: "supernova-bet",
        ogImage: "/og/supernova-bet.jpg",
        name: "Supernova Bet",
        featured: true,
        badge: "PRODUÇÃO · 2026 · FORA DO AR",
        tagline: "plataforma de apostas com várias casas // NestJS · Next.js · Postgres",
        summary:
          "Plataforma de apostas (casino e esportes) que rodou em produção em 2026. Criei o backoffice e cuidei dos pagamentos, dos alarmes e da segurança.",
        tags: ["NestJS", "Next.js", "PostgreSQL", "AWS"],
        metrics: [
          { value: "~62%", label: "do código do backoffice é meu" },
          { value: "~57%", label: "do código do back-end é meu" },
          { value: "11", label: "gateways de pagamento integrados" },
          { value: "153", label: "telas no backoffice" },
        ],
        period: "março a novembro de 2026",
        role: "Dev full-stack. Criei o backoffice e fiquei com pagamentos, alarmes e segurança.",
        stack: [
          "NestJS",
          "TypeScript",
          "PostgreSQL",
          "Redis",
          "RabbitMQ",
          "Socket.IO",
          "Next.js",
          "React",
          "AWS ECS",
          "GitHub Actions",
        ],
        intro: [
          "A Supernova Bet é uma plataforma de apostas com casino e esportes, feita pra rodar várias casas ao mesmo tempo. Cada casa tem o seu domínio, tema, moedas e meios de pagamento, mas tudo roda na mesma API. Ela foi feita pra operar em vários países: integrei pagamentos de 12 deles, e o site do jogador tem 32 idiomas. Foi pra produção de verdade em 2026 e hoje está fora do ar por causa da proibição das bets.",
          "O projeto é grande: são três repositórios (API, site do jogador e backoffice) com quase 9 mil commits somados. Mexi em quase tudo, mas as partes que ficaram comigo foram o **backoffice**, os **pagamentos**, os **alarmes** e a **segurança**.",
        ],
        visual: {
          kind: "supernova-map",
          caption: "fig. 01 · a plataforma, com as partes que eu fiz em destaque",
          zoom: {
            path: "~/supernova/arquitetura",
            title: "Arquitetura da Supernova Bet",
            hint: "clique para ampliar",
            open: "Ampliar o mapa da Supernova Bet",
            esc: "esc para fechar",
            close: "Fechar o mapa",
          },
          data: {
            legend: { data: "dados", external: "serviço externo" },
            zones: {
              clients: "CLIENTES",
              api: "API",
              apiNote: "NestJS na AWS (ECS)",
              external: "EXTERNOS",
              mine: "O QUE FICOU COMIGO",
            },
            clients: {
              site: {
                name: "Site do jogador",
                text: "Next.js, 32 idiomas. Fiz o depósito, o saque e o checkout de cada país.",
              },
              backoffice: {
                name: "Backoffice",
                text: "153 telas pra operar cada casa. Comecei do zero.",
              },
            },
            core: {
              name: "API",
              aside: "(28 contextos)",
              meta: "NestJS · PostgreSQL · Redis · RabbitMQ · Socket.IO",
              points: [
                "Várias casas na mesma API, cada uma com domínio, tema, moedas e pagamentos",
                "Casino, esportes, loteria, bônus, CRM e afiliados",
                "189 controllers e 568 migrações",
              ],
            },
            security: {
              name: "Segurança",
              points: [
                "RBAC/ABAC com 133 permissões",
                "2FA no admin",
                "Regras por IP com bloqueio automático",
                "Turnstile e bloqueio por país",
              ],
            },
            alarms: {
              name: "Alarmes",
              points: [
                "Testa cada módulo a cada minuto",
                "Avisa no Telegram ou por e-mail quando algo cai",
                "Alerta quando um consumer do RabbitMQ falha",
                "Aviso de viagem impossível no login",
              ],
            },
            payments: {
              name: "Pagamentos",
              points: [
                "11 gateways, 13+ moedas",
                "Webhooks com assinatura e retry",
                "Conciliação e liquidação idempotente",
                "Saque automático até um teto",
              ],
            },
            externals: {
              games: { name: "Provedores de jogo", text: "casino, esportes e loteria" },
              gateways: {
                name: "Gateways de pagamento",
                text: "PIX, PSE, Nequi, Khipu, SPEI, JazzCash, Airtel/MTN e outros",
              },
              lists: { name: "Listas de ameaça", text: "Spamhaus, AbuseIPDB e Cloudflare Turnstile" },
              alerts: { name: "Telegram e e-mail", text: "pra onde vão os alertas" },
            },
            wires: {
              site: "HTTPS",
              backoffice: "API admin",
              games: "integração",
              security: "guards",
              alarms: "status",
              payments: "depósito · saque",
              gateways: "API · webhook",
              alerts: "alertas",
              lists: "listas",
            },
            mine: [
              { name: "Backoffice", how: "criei o repo · ~62% do código", accent: "magenta" },
              { name: "Pagamentos", how: "os 11 gateways e o fluxo de dinheiro", accent: "teal" },
              { name: "Alarmes", how: "monitor dos módulos + Telegram", accent: "amber" },
              { name: "Segurança", how: "permissões, 2FA, regras por IP", accent: "pink" },
            ],
            foot: {
              title: "Mapa simplificado.",
              body: "A API tem 28 contextos (casino, esportes, bônus, CRM, afiliados e outros). Aqui aparecem só as partes que ficaram comigo.",
            },
          },
        },
        highlights: {
          title: "O que ficou comigo",
          items: [
            {
              title: "Backoffice",
              body: "Comecei o repositório do zero (o primeiro commit é meu) e fui a única pessoa nele até o fim de abril. Hoje são 153 telas, 92 itens no menu, e uns 62% do código que está lá é meu.",
              points: [
                "Um painel por casa e um painel de plataforma, acima de todas",
                "Permissões por papel: 10 papéis prontos e papéis customizados",
                "PT e EN, com 11.728 chaves de tradução",
                "Mapa-múndi mostrando de onde vem o tráfego de cada casa",
              ],
              tags: ["Next.js", "React", "next-intl", "Recharts"],
            },
            {
              title: "Pagamentos",
              body: "Integrei os 11 gateways da plataforma, desde o primeiro commit de cada um. Cobrem PIX no Brasil e meios locais na Colômbia, Chile, México, Peru, Bolívia, Argentina, Paquistão, Zâmbia e outros países.",
              points: [
                "Webhooks de depósito e saque com assinatura, processamento assíncrono e retry",
                "Conciliação com o gateway e liquidação idempotente",
                "Limites de saque e saque automático até um teto; acima disso vai pra revisão manual",
                "No backoffice, a perícia de cada depósito (com dados criptografados) e o request/response de cada webhook",
                "No site, o fluxo de depósito e saque e o checkout de cada país",
              ],
              tags: ["NestJS", "PostgreSQL", "Redis"],
            },
            {
              title: "Alarmes",
              body: "Montei o monitor dos módulos: a cada minuto a API testa gateways, meios de pagamento, SMS, e-mail, storage, cache e casino, e guarda o histórico.",
              points: [
                "Assinaturas por módulo que avisam no Telegram ou por e-mail quando algo cai e quando volta",
                "Severidade e limite de envio, pra não virar spam",
                "Alerta quando um consumer do RabbitMQ falha",
                "Aviso de viagem impossível no login",
              ],
              tags: ["RabbitMQ", "Telegram"],
            },
            {
              title: "Segurança",
              body: "Fiz o sistema de permissões (RBAC/ABAC, com 133 permissões e papel por casa) e boa parte das proteções da API.",
              points: [
                "2FA com app autenticador e códigos de recuperação",
                "Regras por IP pra sondagem de arquivos (`.env`, `.git`), rotas desconhecidas, rajada de erros e falha de login, com bloqueio automático e aviso num bot do Telegram",
                "Listas públicas de ameaça, Cloudflare Turnstile e bloqueio por país",
                "Credenciais dos gateways criptografadas (AES-256-GCM) e log de auditoria que não grava segredo",
              ],
              tags: ["Redis", "Cloudflare"],
            },
          ],
        },
        showcase: {
          title: "Por dentro",
          note: "A Supernova saiu do ar, então subi a plataforma no meu computador com uma casa de exemplo, a Karin Bet. Ela não existe: logo, banners, jogos, jogadores e alertas foram inventados por mim só pra estes prints.",
          items: [
            {
              eyebrow: "SEGURANÇA · ALARMES",
              title: "Quem está sondando a API, em tempo real",
              body: "Essa é a tela de segurança da plataforma. Cada regra observa todas as casas ao mesmo tempo: sondagem de arquivos como `.env` e `.git`, rotas que não existem, rajada de erros e falha de login. Quando um IP passa do limite, sai um alerta no Telegram e ele pode ser bloqueado automaticamente.",
              points: [
                "Limite, janela e tempo de espera por regra, com bloqueio automático por algumas horas",
                "O IP aparece marcado quando está em listas públicas de ameaça",
                "Bloquear direto da linha do alerta, no site e na API",
              ],
              shot: {
                src: "/projetos/supernova-bet/seguranca.webp",
                alt: "Tela de segurança do backoffice com alertas de IPs sondando arquivos e rotas, e as regras de alerta",
                label: "backoffice / plataforma / segurança",
                ratio: "2400 / 1650",
              },
            },
            {
              eyebrow: "BACKOFFICE · VÁRIAS CASAS",
              title: "Todas as casas num painel só",
              body: "Acima das casas existe um painel de plataforma. Ele mostra cada casa com os erros e avisos das últimas 24 horas e um mapa de onde vem o tráfego de cada uma. Daqui também se cria casa nova, com domínio, moeda e país.",
              points: [
                "Mapa-múndi com as requisições por país, por casa ou de todas juntas",
                "Status de cada casa e atalho pra ver os eventos que deram erro",
                "153 telas no backoffice, em português e inglês",
              ],
              shot: {
                src: "/projetos/supernova-bet/casas-mapa.webp",
                alt: "Painel de plataforma com três casas e o mapa-múndi de onde vem o tráfego",
                label: "backoffice / plataforma / casas",
                ratio: "2400 / 1650",
              },
            },
            {
              eyebrow: "SITE DO JOGADOR",
              title: "Cada casa com a sua cara",
              body: "O site do jogador muda de tema, logo, banners e jogos conforme o domínio. A Karin Bet ganhou um tema rosa e um catálogo de jogos de mentira, e o resto (depósito por PIX, carteira, bônus) é o fluxo de verdade, no desktop e no celular.",
              points: [
                "Tema, logo e banners vêm do backoffice, sem precisar de deploy",
                "Depósito e saque com os meios de pagamento de cada país",
                "32 idiomas no site",
              ],
              shot: {
                src: "/projetos/supernova-bet/site-home.webp",
                alt: "Página inicial da Karin Bet logada, com banner de rodadas grátis e a lista de jogos",
                label: "karinbet.localhost",
                ratio: "2400 / 1500",
              },
              phone: {
                src: "/projetos/supernova-bet/celular-home.webp",
                alt: "Página inicial da Karin Bet no celular",
                label: "karinbet.localhost (celular)",
                ratio: "1109 / 2400",
                device: "mobile",
              },
            },
          ],
        },
        notes: [
          {
            title: "Também mexi em",
            paragraphs: [
              "Integração com provedores de casino, CRM com popups em tempo real, multi-moeda e o deploy na AWS (GitHub Actions + ECS, com as migrações rodando antes da troca de versão). No site do jogador também fiz gamificação, temas, KYC e bloqueio de acesso.",
            ],
          },
          {
            title: "Em números",
            paragraphs: [
              "**API:** cerca de 57% do código que está lá hoje é meu, e 1.399 dos 2.497 commits (sem contar merges). 77 dos 111 controllers do admin começaram comigo, e 381 das 568 migrações são minhas.",
              "**Backoffice:** 487 commits e cerca de 107 mil linhas que continuam lá. Também revisei e fiz merge de 249 PRs.",
              "**Site do jogador:** 482 commits, puxando principalmente depósito e saque.",
            ],
          },
        ],
        gallery: {
          title: "Galeria",
          desktopLabel: "DESKTOP",
          mobileLabel: "CELULAR",
          items: [
            {
              src: "/projetos/supernova-bet/seguranca.webp",
              alt: "Alertas de segurança da plataforma",
              label: "backoffice / plataforma / segurança",
              caption: "Alertas por IP, com as listas de ameaça marcadas.",
              ratio: "2400 / 1650",
            },
            {
              src: "/projetos/supernova-bet/casas-mapa.webp",
              alt: "Casas e mapa de tráfego",
              label: "backoffice / plataforma / casas",
              caption: "As casas e de onde vem o tráfego de cada uma.",
              ratio: "2400 / 1650",
            },
            {
              src: "/projetos/supernova-bet/dashboard.webp",
              alt: "Dashboard da casa",
              label: "backoffice / dashboard",
              caption: "Dashboard da casa: usuários, depósitos e saldos do dia.",
              ratio: "2400 / 1650",
            },
            {
              src: "/projetos/supernova-bet/jogador.webp",
              alt: "Ficha de um jogador",
              label: "backoffice / jogadores / ficha",
              caption: "Ficha do jogador: conta, documento e regra de saque.",
              ratio: "2400 / 1650",
            },
            {
              src: "/projetos/supernova-bet/transacao.webp",
              alt: "Detalhe de uma transação de depósito",
              label: "backoffice / transações / detalhe",
              caption: "Detalhe de um depósito por PIX.",
              ratio: "2400 / 1650",
            },
            {
              src: "/projetos/supernova-bet/transacoes.webp",
              alt: "Lista de transações",
              label: "backoffice / transações",
              caption: "Todas as transações, com filtros.",
              ratio: "2400 / 1650",
            },
            {
              src: "/projetos/supernova-bet/jogadores.webp",
              alt: "Lista de jogadores",
              label: "backoffice / jogadores",
              caption: "Jogadores com saldo, cargo e última sessão.",
              ratio: "2400 / 1650",
            },
            {
              src: "/projetos/supernova-bet/inspecao.webp",
              alt: "Inspeção de requisições por rota",
              label: "backoffice / plataforma / inspeção",
              caption: "Inspeção: o que bate na API, por rota, com erros e tempo.",
              ratio: "2400 / 1650",
            },
            {
              src: "/projetos/supernova-bet/site-home.webp",
              alt: "Página inicial da Karin Bet",
              label: "karinbet.localhost",
              caption: "Página inicial, logada.",
              ratio: "2400 / 1500",
            },
            {
              src: "/projetos/supernova-bet/site-deposito.webp",
              alt: "Depósito por PIX no site",
              label: "karinbet.localhost / depositar",
              caption: "Depósito por PIX.",
              ratio: "2400 / 1500",
            },
            {
              src: "/projetos/supernova-bet/site-jogo.webp",
              alt: "Página de um jogo",
              label: "karinbet.localhost / nova-fortune",
              caption: "Página do jogo, com estatísticas e jogos parecidos.",
              ratio: "2400 / 1500",
            },
            {
              src: "/projetos/supernova-bet/celular-home.webp",
              alt: "Página inicial no celular",
              label: "karinbet.localhost (celular)",
              caption: "Início.",
              ratio: "1109 / 2400",
              device: "mobile",
            },
            {
              src: "/projetos/supernova-bet/celular-deposito.webp",
              alt: "Depósito no celular",
              label: "karinbet.localhost / depositar (celular)",
              caption: "Depósito.",
              ratio: "1109 / 2400",
              device: "mobile",
            },
            {
              src: "/projetos/supernova-bet/celular-jogo.webp",
              alt: "Página de um jogo no celular",
              label: "karinbet.localhost / nova-fortune (celular)",
              caption: "Jogo.",
              ratio: "1109 / 2400",
              device: "mobile",
            },
          ],
        },
      },

      {
        slug: "kezz-game-forge",
        ogImage: "/og/kezz-game-forge.jpg",
        name: "Kezz Game Forge",
        badge: "HOBBY · EM ANDAMENTO",
        tagline: "minha engine de jogos 2D // Rust · wgpu · Lua",
        summary:
          "Uma engine de jogos 2D em Rust, com editor próprio, que eu faço por hobby. O cyber-rune, um roguelike cyberpunk em pixel art, é o jogo que roda nela.",
        tags: ["Rust", "wgpu", "Lua"],
        period: "desde dezembro de 2025",
        role: "Projeto pessoal, nas horas vagas.",
        stack: ["Rust", "wgpu", "winit", "Lua (mlua)", "ECS próprio"],
        intro: [
          "Comecei a Kezz Game Forge pra entender como uma engine funciona por dentro, e acabei ficando. É uma engine 2D em Rust, com renderização em wgpu, ECS próprio e o conteúdo dos jogos escrito em Lua. Tem plugins de combate, inventário, crafting e outros, e um editor com uns 10 painéis, incluindo um editor de pixels que grava direto no PNG.",
          "O jogo que eu faço nela é o cyber-rune. Uma androide inacabada acorda num laboratório destruído e sai pro Distrito Neon, um bairro aberto com trânsito, NPCs e contratos, antes de descer pros andares de baixo.",
        ],
        showcase: {
          title: "No jogo e no editor",
          note: "Prints tirados com o comando `shot` da própria engine, numa cópia do projeto.",
          items: [
            {
              eyebrow: "CYBER-RUNE",
              title: "O Distrito Neon",
              body: "Um cruzamento do bairro aberto do jogo. Os carros andam pelas ruas, os pedestres circulam nas calçadas e a chuva não para. O traçado das ruas é sempre o mesmo, e o que tem em cada lote sai da seed.",
              points: [
                "Pixel art na paleta Viva 32, sempre em zoom inteiro",
                "Câmaras no estilo Hades, com a recompensa aparecendo na porta",
                "Uns 1.470 sprites, a maioria gerada por scripts",
              ],
              shot: {
                src: "/projetos/kezz-game-forge/cyber-rune-cidade.webp",
                alt: "cyber-rune: um cruzamento do Distrito Neon com carros, pedestres e chuva",
                label: "cyber-rune / Distrito Neon",
                ratio: "1752 / 1486",
              },
            },
            {
              eyebrow: "KEZZ GAME FORGE",
              title: "O mesmo lugar, no editor",
              body: "O editor abre o mundo do jogo e deixa jogar ali mesmo. Aqui a personagem está selecionada, e o Inspector mostra os componentes dela: posição, sprite, animação, colisão e vida.",
              points: [
                "Painéis de mundo, conteúdo, pixels e profiler, cada um numa doca",
                "\"Play here\" joga a partir do ponto em que você está no mapa",
                "O comando `shot` tira prints sem abrir janela",
              ],
              shot: {
                src: "/projetos/kezz-game-forge/forge-editor-cidade.webp",
                alt: "Editor da Kezz Game Forge no Distrito Neon, com a personagem selecionada no Inspector",
                label: "Kezz Game Forge / editor",
                ratio: "16 / 10",
              },
            },
          ],
        },
        notes: [
          {
            title: "Em números",
            paragraphs: [
              "**Engine:** cerca de 135 mil linhas de Rust, contando o editor e os plugins.",
              "**cyber-rune:** uns 25 mil linhas de Lua, 57 mil de Rust e perto de 1.150 testes.",
            ],
          },
        ],
        gallery: {
          title: "Galeria",
          desktopLabel: "PRINTS",
          mobileLabel: "CELULAR",
          items: [
            {
              src: "/projetos/kezz-game-forge/cyber-rune-titulo.webp",
              alt: "Tela de título do cyber-rune: a cidade neon à noite, com a personagem na rua",
              label: "cyber-rune / tela de título",
              caption: "A tela de título.",
              ratio: "16 / 9",
            },
            {
              src: "/projetos/kezz-game-forge/cyber-rune-cidade.webp",
              alt: "cyber-rune: um cruzamento do Distrito Neon",
              label: "cyber-rune / Distrito Neon",
              caption: "Um cruzamento do Distrito Neon, com trânsito e pedestres.",
              ratio: "16 / 9",
            },
            {
              src: "/projetos/kezz-game-forge/forge-editor-cidade.webp",
              alt: "Editor da Kezz Game Forge no Distrito Neon",
              label: "Kezz Game Forge / editor",
              caption: "O mesmo cruzamento no editor, com a personagem no Inspector.",
              ratio: "16 / 9",
            },
          ],
        },
      },

      {
        slug: "printercollector",
        ogImage: "/og/printercollector.jpg",
        name: "PrinterCollector",
        badge: "COPYNORTE · 2023–2025",
        tagline: "coleta de contadores de impressora // Rust · NestJS · Next.js",
        summary:
          "Meu primeiro projeto grande, feito na Copynorte: um agente em Rust lê contadores e toner das impressoras nos clientes, e o sistema gera os relatórios e o faturamento sozinho. Trabalhei nele até maio de 2025.",
        tags: ["Rust", "NestJS", "Next.js"],
        metrics: [
          { value: "150 mil+", label: "impressoras mandando dados todo dia" },
          { value: "100+", label: "clientes cadastrados" },
          { value: "0", label: "quedas do servidor" },
          { value: "1 semana → 1 dia", label: "na coleta de contadores" },
        ],
        period: "2023 a maio de 2025",
        role: "Fiz sozinha: agente, API, dashboard, deploy.",
        stack: [
          "Rust",
          "Tokio",
          "SQLite",
          "NestJS",
          "Next.js",
          "Prisma",
          "CockroachDB",
          "Redis",
          "RabbitMQ",
          "MongoDB",
          "Docker",
          "Nginx",
        ],
        intro: [
          "O PrinterCollector foi meu primeiro projeto grande. Ele cuidava das impressoras que a Copynorte aluga: lia os contadores de página e o nível de toner direto na rede de cada cliente, mostrava quando o toner estava acabando, avisava quando uma impressora sumia e gerava os relatórios e o arquivo de faturamento. A maior parte dos clientes era do Brasil, mas ele também rodava pra alguns clientes de fora.",
          "Aprendi a programar de verdade fazendo ele, e escrevi tudo na mão, praticamente sem IA (na época ela ainda era bem fraca e eu nem conhecia). O agente, a API, o dashboard e o deploy foram feitos por mim.",
          "O maior requisito era performance, junto com o sistema nunca parar e o custo baixo, porque tudo rodava numa máquina só, que a empresa comprou. Chegamos a mais de 100 clientes e mais de 150 mil impressoras mandando dados todo dia, o servidor nunca caiu, e a coleta de contadores, que levava uma semana com quase a empresa toda, passou a levar um dia. Trabalhei nele até maio de 2025.",
        ],
        visual: {
          kind: "printer-map",
          caption: "fig. 01 · da impressora no cliente até o relatório",
          zoom: {
            path: "~/printercollector/arquitetura",
            title: "Arquitetura do PrinterCollector",
            hint: "clique para ampliar",
            open: "Ampliar o mapa do PrinterCollector",
            esc: "esc para fechar",
            close: "Fechar o mapa",
          },
          data: {
            legend: { data: "dados", external: "fora do sistema" },
            zones: {
              client: "REDE DO CLIENTE",
              clientNote: "um agente por local",
              server: "SERVIDOR",
              serverNote: "Docker com Nginx na frente",
              data: "DADOS",
              out: "SAÍDAS",
              panel: "COMO NÃO QUEBRA",
            },
            printers: {
              name: "Impressoras",
              points: [
                "11 marcas: HP, Ricoh, Canon, Brother, Xerox, Konica e outras",
                "Contador de páginas e nível de toner",
              ],
            },
            agent: {
              name: "Agente",
              aside: "(Windows)",
              meta: "Rust · Tokio · SQLite",
              points: [
                "Varre as faixas de IP em paralelo",
                "Guarda as leituras até o servidor confirmar",
                "Se atualiza sozinho, com checksum SHA-256",
              ],
            },
            dashboard: {
              name: "Dashboard",
              meta: "Next.js",
              points: [
                "Impressoras, suprimentos e contadores de 30 dias",
                "Status online e offline de cada licença",
              ],
            },
            tasker: {
              name: "Tasker",
              meta: "NestJS · RabbitMQ · MongoDB",
              points: [
                "Relatórios agendados por cron",
                "Trava pra um job não rodar em cima do outro",
              ],
            },
            api: {
              name: "API",
              meta: "NestJS · Redis",
              points: [
                "Recebe os lotes do agente e mescla cada contador pelo horário",
                "Autenticação e permissões em cache no Redis",
                "Respostas com gzip",
              ],
            },
            admin: {
              name: "Admin",
              meta: "NestJS · Next.js",
              points: [
                "Grupos, licenças e permissões",
                "OID packs: modelo novo de impressora sem versão nova do agente",
              ],
            },
            db: {
              name: "CockroachDB",
              aside: "(3 nós)",
              meta: "HAProxy · Prisma",
              points: [
                "Uma linha por impressora por dia, com as leituras em JSONB",
                "O HAProxy confere a saúde de cada nó",
              ],
            },
            out: {
              email: { name: "E-mail (SMTP)", text: "contadores, suprimentos e impressoras offline" },
              erp: { name: "ERP", text: "CSV de contadores no formato Databit" },
            },
            wires: {
              snmp: "SNMP v2/v1",
              https: "HTTPS · lotes",
              rest: "REST",
              email: "relatórios",
              erp: "CSV",
              db: "Prisma",
            },
            panel: [
              { name: "Offline", how: "leitura fica no SQLite até o servidor confirmar", accent: "pink" },
              { name: "Reenvio", how: "nunca apaga leitura mais nova", accent: "magenta" },
              { name: "Heartbeat", how: "a cada minuto, com aviso de offline", accent: "teal" },
              { name: "Legado", how: "agente antigo continua sendo aceito", accent: "amber" },
            ],
            foot: {
              title: "Tudo num servidor só.",
              body: "API, tasker, dashboard e admin rodam em Docker atrás do Nginx, e o banco fica em 3 nós do CockroachDB atrás do HAProxy. Tudo numa máquina da empresa, que aguentou mais de 150 mil impressoras e ainda tinha folga.",
            },
          },
        },
        highlights: {
          title: "O que eu cuidei",
          items: [
            {
              title: "O agente nos clientes",
              body: "Um serviço Windows em Rust que roda na rede de cada cliente, acha as impressoras e lê os contadores e o toner por SNMP.",
              points: [
                "Tenta SNMP v2 e cai pro v1 quando a impressora é antiga",
                "Os OIDs de cada modelo vêm do servidor, então modelo novo não precisa de versão nova do agente",
                "Varre a rede em paralelo, com até 6 threads",
                "Se atualiza sozinho: confere o SHA-256, roda o instalador e reinicia o serviço",
              ],
              tags: ["Rust", "Tokio", "SQLite"],
            },
            {
              title: "Segurança e privacidade",
              body: "Era onde eu mais sentia o peso: o agente fica dentro da rede do cliente e enxerga tudo o que responde nela, e uma invasão poderia chegar em informações dos clientes. A regra era: só sai de lá o que for mesmo uma impressora.",
              points: [
                "Só varre as faixas de IP configuradas pra aquele local, com controle de quais faixas entram",
                "Um aparelho só conta como impressora se responder a marca e o número de série; o resto é descartado ali mesmo",
                "Só leitura: o agente nunca muda nada na impressora",
                "Sobe só IP, número de série, marca, contadores e toner, sempre por HTTPS",
                "No dashboard, cada cliente só vê as impressoras do próprio grupo",
              ],
              tags: ["SNMP", "HTTPS"],
            },
            {
              title: "Sem quebrar",
              body: "Leitura não podia sumir e agente antigo não podia parar de funcionar.",
              points: [
                "As leituras ficam no SQLite do agente até o servidor dizer quais recebeu",
                "O servidor mescla cada contador pelo horário, então um reenvio nunca apaga leitura mais nova",
                "Um registro com problema não derruba o lote inteiro",
                "Agentes de versões antigas continuaram funcionando na rota e no formato antigos",
                "Heartbeat a cada minuto e e-mail quando impressora ou licença fica offline",
              ],
            },
            {
              title: "Tempo e custo",
              body: "O sistema cuidava de tudo sozinho: lia os contadores e o toner, mostrava quando o toner estava acabando, avisava quando uma impressora sumia e gerava os relatórios. A coleta de contadores, que levava uma semana e ocupava quase todos os funcionários, caiu pra um dia, com poucas pessoas indo só nas máquinas que ele não suportava. Com isso, a empresa pôde focar em atender e alugar mais máquinas.",
              points: [
                "Relatórios agendados por e-mail: contadores, suprimentos e impressoras ou licenças offline",
                "No dashboard, o toner fica vermelho abaixo de 10% e amarelo até 40%",
                "Faturamento: o CSV dos contadores ia pro ERP no formato Databit e era só importar. Milhares de impressoras faturadas em poucos minutos",
                "O servidor era uma máquina da própria empresa: quanto menos ele gastasse, mais cliente cabia",
              ],
            },
            {
              title: "Performance",
              wide: true,
              body: "Chegamos a mais de 100 clientes e mais de 150 mil impressoras mandando dados o dia todo, a cada minuto, pra um servidor só. Ele foi feito pra aguentar pancada e não caiu nenhuma vez. E ainda sobrava processamento e memória pra mais alguns milhares de impressoras. Pra isso, quase tudo foi feito na mão em vez de usar lib pronta.",
              points: [
                "O agente gastava uns 2 a 3 MB de RAM e quase nada de rede: só manda o que ainda não foi sincronizado",
                "Uma linha por impressora por dia, com as leituras em JSONB",
                "O agente manda 60 leituras por requisição",
                "Autenticação e permissões em cache no Redis",
                "gzip na ida e na volta, e um binário pequeno no agente",
              ],
              tags: ["CockroachDB", "Redis"],
            },
          ],
        },
        showcase: {
          title: "Por dentro",
          note: "Não dá pra mostrar a produção, que tem dados de clientes. Então subi o sistema no meu computador com dados inventados: os clientes, as impressoras e os números destes prints não existem.",
          items: [
            {
              eyebrow: "SUPRIMENTOS",
              title: "O toner de cada impressora, num relance",
              body: "Marcando \"Mostrar suprimentos\", a lista troca os contadores por uma barra por cor de toner. Vermelho é o que está acabando, então dá pra ver numa tela só quais impressoras precisam de visita.",
              points: [
                "Vermelho abaixo de 10%, laranja até 40% e verde acima disso",
                "Preto, ciano, magenta e amarelo nas coloridas",
                "Filtro por impressoras monitoradas ou não",
              ],
              shot: {
                src: "/projetos/printercollector/suprimentos.webp",
                alt: "Lista de impressoras com barras de nível de toner por cor",
                label: "printer collector / licença / impressoras",
                ratio: "2400 / 1530",
              },
            },
            {
              eyebrow: "IMPRESSORA",
              title: "Tudo de uma impressora numa página",
              body: "A página da impressora junta o que o agente leu: serial, IP, modelo, local, patrimônio, quando ela foi vista online, o toner de cada cor e os contadores dos últimos 30 dias.",
              points: [
                "Patrimônio, local e modelo editáveis pelo cliente",
                "Contador mono, cor e total de cada dia",
                "Dá pra tirar uma impressora do monitoramento sem apagar o histórico",
              ],
              shot: {
                src: "/projetos/printercollector/impressora.webp",
                alt: "Página de uma impressora com suprimentos e contadores dos últimos 30 dias",
                label: "printer collector / impressora",
                ratio: "2400 / 1875",
              },
            },
            {
              eyebrow: "CONTADORES",
              title: "Os contadores que antes eram lidos na mão",
              body: "A mesma lista com os contadores ligados: mono, cor, total e a hora da última varredura de cada impressora. É daqui que saía o CSV pro ERP.",
              points: [
                "11 marcas na mesma tabela",
                "Busca e filtros na própria lista",
                "Última varredura de cada impressora, pra saber se ela está respondendo",
              ],
              shot: {
                src: "/projetos/printercollector/contadores.webp",
                alt: "Lista de impressoras com contadores mono, cor e total",
                label: "printer collector / licença / impressoras",
                ratio: "2400 / 1530",
              },
            },
          ],
        },
        notes: [
          {
            title: "Em números",
            paragraphs: [
              "**Monorepo:** 41 commits, todos meus, com umas 34,5 mil linhas de TypeScript entre API, tasker, admin e dashboard.",
              "**Agente:** 33 commits e umas 6,4 mil linhas de Rust, da versão 1.0 até a 1.2.",
              "Ninguém mais commitou nos dois repositórios.",
            ],
          },
        ],
        gallery: {
          title: "Galeria",
          desktopLabel: "DESKTOP",
          mobileLabel: "CELULAR",
          items: [
            { src: "/projetos/printercollector/suprimentos.webp", alt: "Lista com o toner de cada impressora", label: "printer collector / impressoras / suprimentos", caption: "Toner de cada impressora, por cor.", ratio: "2400 / 1530" },
            { src: "/projetos/printercollector/impressora.webp", alt: "Página de uma impressora", label: "printer collector / impressora", caption: "Uma impressora: dados, toner e 30 dias de contadores.", ratio: "2400 / 1875" },
            { src: "/projetos/printercollector/contadores.webp", alt: "Lista com os contadores", label: "printer collector / impressoras / contadores", caption: "Contadores mono, cor e total.", ratio: "2400 / 1530" },
            { src: "/projetos/printercollector/licencas.webp", alt: "Licenças de um cliente com status online", label: "printer collector / licenças", caption: "Os locais de um cliente, com o status do agente.", ratio: "2400 / 570" },
          ],
        },
      },
      {
        slug: "anagaming-desafio-frontend",
        name: "anagaming-desafio-frontend",
        badge: "DESAFIO TÉCNICO",
        tagline: "front-end // TypeScript · React",
        summary: "O desafio técnico de front-end da Ana Gaming, feito em TypeScript e React.",
        tags: ["TypeScript", "React"],
        intro: ["O desafio técnico de front-end que eu fiz pra Ana Gaming, em TypeScript e React. O código está no meu GitHub."],
        links: [
          {
            label: "código no GitHub",
            href: "https://github.com/karinzitta/anagaming-desafio-frontend",
          },
        ],
      },
      {
        slug: "translated-taekim",
        name: "translated-taekim",
        badge: "PROJETO PESSOAL",
        tagline: "estudo de japonês",
        summary:
          "Tradução do guia de gramática japonesa do Tae Kim, que eu fiz enquanto estudava japonês.",
        tags: ["JavaScript", "Japonês"],
        intro: [
          "Tradução do guia de gramática japonesa do Tae Kim. Fiz enquanto estudava japonês, pra ter o material em português.",
        ],
        links: [
          { label: "código no GitHub", href: "https://github.com/karinzitta/translated-taekim" },
        ],
      },
    ],
  },

  contact: {
    marker: { code: "//04.00 SEC_CONTATO", index: "[04 / 04]" },
    eyebrow: "DISPONÍVEL PARA PROJETOS",
    headlineLead: "Vamos ",
    headlineHighlight: "conversar?",
    body: "Tem um projeto ou uma vaga? Me manda um e-mail que eu respondo.",
    email: "hikarin.elizabeth@gmail.com",
    socials: [
      { platform: "github", label: "github.com/karinzitta", href: "https://github.com/karinzitta" },
      { platform: "linkedin", label: "in/karinzitta", href: "https://www.linkedin.com/in/karinzitta" },
      { platform: "instagram", label: "@karinfoyu", href: "https://instagram.com/karinfoyu" },
      { platform: "site", label: "karinzitta.dev", href: "https://karinzitta.dev" },
    ],
  },

  footer: {
    copyright: "© 2026 Karin Elizabeth Ramos",
    signature: "feito com código & ☕ // SEC_FIM",
  },
};

export default portfolio;
