import type { Portfolio } from "@/types/portfolio";

export const portfolio: Portfolio = {
  site: {
    title: "Karin Elizabeth · Desenvolvedora full-stack",
    description:
      "Desenvolvedora full-stack com foco em performance, otimização e segurança. Trabalho do front-end à infraestrutura, com experiência em sistemas de alto volume, pagamentos e backoffice.",
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
    eyebrow: "● PORTFÓLIO · 2026",
    greeting: "Olá, eu sou",
    name: "KARIN ELIZABETH",
    tagline: "Desenvolvedora full-stack // performance · otimização · segurança",
    lead: "Sou desenvolvedora full-stack e construo sistemas que aguentam produção, do front-end à infraestrutura. Há 5 anos trabalho com sistemas de alto volume e pagamentos, e meu forte é deixar software mais rápido, mais barato de rodar e mais difícil de invadir.",
    status: { label: "Online", detail: "Aberta a propostas" },
    primaryCta: { label: "Entre em contato", href: "#contato" },
    secondaryCta: { label: "Ver projetos", href: "#projetos" },
    portrait: {
      initials: "KE",
      captionName: "Karin Elizabeth",
      captionRole: "// dev full-stack",
      tag: "@karinzitta",
      image: "/me.webp",
    },
    focusCards: [
      {
        num: "01",
        title: "Performance",
        chips: ["Rust", "Redis", "Cache", "Filas"],
        description:
          "Encontro gargalos e preparo sistemas para aguentar volume, com cache, processamento em lote, filas e código enxuto onde ele faz diferença. Já mantive mais de 150 mil dispositivos enviando dados a cada minuto para um único servidor, sem nenhuma queda.",
      },
      {
        num: "02",
        title: "Otimização",
        chips: ["PostgreSQL", "Queries", "Modelagem", "Custo"],
        description:
          "Faço o mesmo sistema gastar menos: consultas mais leves, dados modelados para o volume real e menos infraestrutura para a mesma carga. Também automatizo trabalho manual. Num dos projetos, uma tarefa que levava uma semana passou a levar um dia.",
      },
      {
        num: "03",
        title: "Segurança",
        chips: ["RBAC", "2FA", "Bloqueio por IP", "AES-256"],
        description:
          "Trato segurança como parte do projeto desde o começo: permissões por papel, 2FA, credenciais criptografadas e bloqueio automático de IPs suspeitos. Também garanto que cada parte do sistema acesse e envie só o que realmente precisa.",
      },
    ],
    metrics: [
      { value: "5 anos", label: "de experiência profissional" },
      { value: "3.500+", label: "commits só em 2026" },
      { value: "3", label: "empresas e dezenas de projetos entregues" },
      { value: "12 países", label: "com pagamentos que eu integrei" },
    ],
  },

  about: {
    marker: { code: "//01.00 SEC_SOBRE", index: "[01 / 04]" },
    eyebrow: "SOBRE",
    title: "Um pouco sobre mim",
    paragraphs: [
      "Trabalho como desenvolvedora desde 2021. Comecei na Copynorte, onde criei sistemas do zero e liderei o desenvolvimento de projetos para o governo. Depois passei pela Ana Gaming e hoje estou na PGX.",
      "Atuo do front-end à infraestrutura. No dia a dia isso inclui APIs com muito volume, integrações de pagamento, painéis administrativos, controle de acesso, servidores e deploy. Nas empresas por onde passei, acabei sendo a pessoa de confiança para código e decisões técnicas.",
    ],
    quote: "Quero ser a melhor no que faço, e para mim isso começa por entender o sistema inteiro.",
    principles: [
      {
        code: "P1",
        title: "Ponta a ponta",
        body: "Assumo a tarefa inteira, da interface ao deploy.",
      },
      {
        code: "P2",
        title: "Meço antes de otimizar",
        body: "Antes de mexer em performance, descubro com números onde está o gargalo.",
      },
      {
        code: "P3",
        title: "Aprendo o que falta",
        body: "Se a melhor ferramenta é uma que eu ainda não domino, eu aprendo. Foi assim com Rust.",
      },
    ],
    more: { label: "Minha trajetória", href: "/sobre/" },
  },

  aboutPage: {
    seo: {
      title: "Sobre mim",
      description:
        "Minha trajetória como desenvolvedora full-stack, da Copynorte à PGX, as áreas em que sou mais forte e como eu trabalho.",
    },
    eyebrow: "SOBRE MIM",
    title: "Karin Elizabeth",
    lead: [
      "Sou desenvolvedora full-stack e também cuido de infraestrutura. Aprendi a programar de verdade trabalhando em sistemas reais, em produção, e continuo aprendendo assim.",
      "Consigo construir praticamente qualquer tipo de aplicação, do front-end ao servidor, mas onde mais me aprofundei foi em performance, otimização e segurança. São as áreas em que um erro custa caro, e é nelas que eu mais gosto de trabalhar.",
    ],
    facts: [
      { value: "2021", label: "primeiro emprego como desenvolvedora" },
      { value: "11", label: "gateways de pagamento integrados" },
      { value: "2", label: "sistemas meus usados fora do Brasil" },
      { value: "3.500+", label: "commits só em 2026" },
    ],
    pillarsTitle: "Onde sou mais forte",
    how: {
      title: "Como eu trabalho",
      paragraphs: [
        "Trabalho com o sistema inteiro: front-end, back-end, banco de dados e servidor. Nunca quis ser só \"a do front\" ou \"a do back\". Quero entender cada parte o suficiente para decidir bem, mesmo quando quem executa é outra pessoa.",
        "Uso IA no dia a dia para escrever código, mas nada vai para produção sem passar pela minha revisão. A responsabilidade pelo que é entregue continua sendo minha.",
        "Em todas as empresas por onde passei, acabei sendo a pessoa de confiança para código e decisões técnicas. Quando algo precisava funcionar sem quebrar, chegava até mim.",
      ],
    },
    roadmap: {
      title: "Minha trajetória",
      steps: [
        {
          place: "12 anos",
          title: "Os primeiros jogos",
          compact: true,
          body: ["Comecei a me interessar por desenvolvimento de jogos e fiz cursos de engines de arrastar e soltar."],
        },
        {
          place: "14 anos",
          title: "Linux e hacking ético",
          compact: true,
          body: [
            "Aprendi Linux por dois motivos: queria trabalhar com hacking ético e queria jogar. Meu pai bloqueava o computador quando saía para trabalhar, então eu dava boot em um Linux pelo pendrive para jogar Minecraft e The Sims sem a senha do Windows.",
          ],
        },
        {
          place: "16 anos",
          title: "Bots para o Discord",
          compact: true,
          body: [
            "Nessa época eu já entendia como a internet funciona por baixo e comecei a escrever bots para o Discord em Python: um para tocar música e outros para moderar e organizar o meu servidor. O código ainda era simples, mas os bots funcionavam.",
          ],
        },
        {
          place: "17 anos",
          title: "De volta aos jogos",
          compact: true,
          body: [
            "Voltei aos jogos, agora com C# na Unity e com o GameMaker. Não cheguei a publicar nenhum, porque sempre travava na parte dos sprites. Anos depois retomei essa ideia com a Kezz Game Forge, minha própria engine 2D.",
          ],
        },
        {
          place: "Copynorte",
          period: "2021 a maio de 2025",
          title: "Onde aprendi a programar de verdade",
          body: [
            "Meu primeiro emprego como programadora. Entrei sabendo Python e saí sabendo construir um sistema completo, do front-end ao servidor.",
            "Lá criei sozinha o PrinterCollector, um sistema de monitoramento de impressoras que chegou a mais de 150 mil equipamentos, e liderei o desenvolvimento de vários projetos da empresa para o governo.",
            "Foi onde performance e segurança viraram o meu foco: os sistemas precisavam aguentar muito volume em um único servidor e lidavam com dados de clientes.",
          ],
          links: [{ label: "PrinterCollector", href: "/projetos/printercollector/" }],
        },
        {
          place: "Ana Gaming",
          title: "Mercado de jogos online",
          body: ["Da Copynorte fui para a Ana Gaming, onde comecei a trabalhar no mercado de jogos online."],
          links: [{ label: "meu desafio técnico de front-end", href: "/projetos/anagaming-desafio-frontend/" }],
        },
        {
          place: "PGX",
          period: "hoje",
          title: "Duas frentes",
          body: ["Na PGX eu divido o meu tempo entre dois trabalhos."],
          branches: [
            {
              title: "Supernova Bet",
              body: "Uma plataforma de apostas com várias casas, que rodou em produção em 2026. Criei o backoffice do zero e fui responsável por pagamentos, alarmes e segurança.",
              links: [{ label: "ver o projeto", href: "/projetos/supernova-bet/" }],
            },
            {
              title: "Meus projetos",
              body: "O kezz, meu ecossistema de apps em Rust integrado à minha IA, e a Kezz Game Forge, minha engine de jogos 2D.",
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
        "Comecei Engenharia de Software na época da Copynorte, mas parei. Naquele momento, construir sistemas reais me ensinava muito mais do que o curso, e eu queria ficar realmente boa em programação.",
      ],
    },
    principlesTitle: "No dia a dia",
    cta: {
      title: "Vamos trabalhar juntos?",
      body: "Estou aberta a propostas. Mande um e-mail ou veja os meus projetos.",
      primary: { label: "falar comigo →", href: "/#contato" },
      secondary: { label: "ver projetos", href: "/#projetos" },
    },
  },

  skills: {
    marker: { code: "//02.00 SEC_SKILLS", index: "[02 / 04]" },
    eyebrow: "STACK",
    title: "Tecnologias com que trabalho",
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
      back: "← voltar para os projetos",
      next: "próximo projeto",
      period: "período",
      role: "o que eu fiz",
      stack: "stack",
      links: "links",
      ctaTitle: "Quer conversar sobre algum projeto?",
      ctaBody: "Mande um e-mail e eu respondo.",
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
        slug: "supernova-bet",
        ogImage: "/og/supernova-bet.jpg",
        name: "Supernova Bet",
        featured: true,
        badge: "PRODUÇÃO · 2026 · FORA DO AR",
        tagline: "plataforma de apostas com várias casas // NestJS · Next.js · Postgres",
        summary:
          "Plataforma de apostas (casino e esportes) que rodou em produção em 2026. Criei o backoffice e fui responsável por pagamentos, alarmes e segurança.",
        tags: ["NestJS", "Next.js", "PostgreSQL", "AWS"],
        metrics: [
          { value: "~62%", label: "do código do backoffice é meu" },
          { value: "~57%", label: "do código do back-end é meu" },
          { value: "11", label: "gateways de pagamento integrados" },
          { value: "153", label: "telas no backoffice" },
        ],
        period: "março a novembro de 2026",
        role: "Desenvolvedora full-stack. Criei o backoffice e fui responsável por pagamentos, alarmes e segurança.",
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
          "A Supernova Bet é uma plataforma de apostas com casino e esportes, feita para rodar várias casas ao mesmo tempo. Cada casa tem o seu domínio, tema, moedas e meios de pagamento, mas todas rodam na mesma API. A plataforma foi pensada para operar em vários países: integrei pagamentos de 12 deles, e o site do jogador tem 32 idiomas. Entrou em produção em 2026 e hoje está fora do ar por causa da proibição das bets.",
          "É um projeto grande, com três repositórios (API, site do jogador e backoffice) e quase 9 mil commits somados. Trabalhei em praticamente todas as áreas, mas fiquei responsável pelo **backoffice**, pelos **pagamentos**, pelos **alarmes** e pela **segurança**.",
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
                text: "153 telas para operar cada casa. Criado do zero.",
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
              alerts: { name: "Telegram e e-mail", text: "destino dos alertas" },
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
          title: "Minhas áreas",
          items: [
            {
              title: "Backoffice",
              body: "Criei o repositório do zero (o primeiro commit é meu) e fui a única pessoa trabalhando nele até o fim de abril. Hoje são 153 telas e 92 itens no menu, e cerca de 62% do código é meu.",
              points: [
                "Um painel por casa e um painel da plataforma, acima de todas",
                "Permissões por papel: 10 papéis prontos e papéis customizados",
                "Português e inglês, com 11.728 chaves de tradução",
                "Mapa-múndi com a origem do tráfego de cada casa",
              ],
              tags: ["Next.js", "React", "next-intl", "Recharts"],
            },
            {
              title: "Pagamentos",
              body: "Integrei os 11 gateways da plataforma, todos desde o primeiro commit. Eles cobrem PIX no Brasil e meios de pagamento locais na Colômbia, no Chile, no México, no Peru, na Bolívia, na Argentina, no Paquistão, na Zâmbia e em outros países.",
              points: [
                "Webhooks de depósito e saque com assinatura, processamento assíncrono e retry",
                "Conciliação com o gateway e liquidação idempotente",
                "Limites de saque e saque automático até um teto; acima dele, o pedido vai para revisão manual",
                "No backoffice, a análise detalhada de cada depósito (com dados criptografados) e o request/response de cada webhook",
                "No site, o fluxo de depósito e saque e o checkout de cada país",
              ],
              tags: ["NestJS", "PostgreSQL", "Redis"],
            },
            {
              title: "Alarmes",
              body: "Criei o monitoramento dos módulos: a cada minuto a API testa gateways, meios de pagamento, SMS, e-mail, storage, cache e casino, e guarda o histórico.",
              points: [
                "Assinaturas por módulo que avisam no Telegram ou por e-mail quando algo cai e quando volta",
                "Severidade e limite de envio, para os avisos não virarem spam",
                "Alerta quando um consumer do RabbitMQ falha",
                "Aviso de viagem impossível no login",
              ],
              tags: ["RabbitMQ", "Telegram"],
            },
            {
              title: "Segurança",
              body: "Desenvolvi o sistema de permissões (RBAC/ABAC, com 133 permissões e papéis por casa) e boa parte das proteções da API.",
              points: [
                "2FA com app autenticador e códigos de recuperação",
                "Regras por IP contra sondagem de arquivos (`.env`, `.git`), rotas desconhecidas, rajadas de erros e falhas de login, com bloqueio automático e aviso em um bot do Telegram",
                "Listas públicas de ameaça, Cloudflare Turnstile e bloqueio por país",
                "Credenciais dos gateways criptografadas (AES-256-GCM) e log de auditoria que não grava segredos",
              ],
              tags: ["Redis", "Cloudflare"],
            },
          ],
        },
        showcase: {
          title: "Por dentro",
          note: "Como a Supernova saiu do ar, rodei a plataforma localmente com uma casa de exemplo, a Karin Bet. Ela não existe: logo, banners, jogos, jogadores e alertas foram criados só para estes prints.",
          items: [
            {
              eyebrow: "SEGURANÇA · ALARMES",
              title: "Quem está sondando a API, em tempo real",
              body: "Esta é a tela de segurança da plataforma. Cada regra vale para todas as casas ao mesmo tempo e cobre sondagem de arquivos como `.env` e `.git`, rotas inexistentes, rajadas de erros e falhas de login. Quando um IP passa do limite, um alerta é enviado no Telegram e o IP pode ser bloqueado automaticamente.",
              points: [
                "Limite, janela e tempo de espera por regra, com bloqueio automático por algumas horas",
                "IPs presentes em listas públicas de ameaça aparecem marcados",
                "Bloqueio direto pela linha do alerta, no site e na API",
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
              title: "Todas as casas em um só painel",
              body: "Acima das casas existe um painel da plataforma, que mostra cada casa com os erros e avisos das últimas 24 horas e um mapa da origem do tráfego. É nele também que se cria uma casa nova, com domínio, moeda e país.",
              points: [
                "Mapa-múndi com as requisições por país, por casa ou de todas juntas",
                "Status de cada casa e atalho para os eventos com erro",
                "153 telas no backoffice, em português e inglês",
              ],
              shot: {
                src: "/projetos/supernova-bet/casas-mapa.webp",
                alt: "Painel da plataforma com três casas e o mapa-múndi da origem do tráfego",
                label: "backoffice / plataforma / casas",
                ratio: "2400 / 1650",
              },
            },
            {
              eyebrow: "SITE DO JOGADOR",
              title: "Cada casa com a sua identidade",
              body: "O site do jogador muda tema, logo, banners e jogos de acordo com o domínio. A Karin Bet ganhou um tema rosa e um catálogo de jogos fictício. O restante (depósito por PIX, carteira, bônus) é o fluxo real, no desktop e no celular.",
              points: [
                "Tema, logo e banners vêm do backoffice, sem precisar de deploy",
                "Depósito e saque com os meios de pagamento de cada país",
                "32 idiomas no site",
              ],
              shot: {
                src: "/projetos/supernova-bet/site-home.webp",
                alt: "Página inicial da Karin Bet com o usuário logado, banner de rodadas grátis e a lista de jogos",
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
            title: "Também trabalhei em",
            paragraphs: [
              "Integração com provedores de casino, CRM com popups em tempo real, multimoeda e o deploy na AWS (GitHub Actions + ECS, com as migrações rodando antes da troca de versão). No site do jogador, também fiz gamificação, temas, KYC e bloqueio de acesso.",
            ],
          },
          {
            title: "Em números",
            paragraphs: [
              "**API:** cerca de 57% do código atual é meu, assim como 1.399 dos 2.497 commits (sem contar merges). 77 dos 111 controllers do admin foram criados por mim, e 381 das 568 migrações são minhas.",
              "**Backoffice:** 487 commits e cerca de 107 mil linhas que continuam no código. Também revisei e fiz merge de 249 PRs.",
              "**Site do jogador:** 482 commits, principalmente em depósito e saque.",
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
              caption: "As casas e a origem do tráfego de cada uma.",
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
              caption: "Inspeção das requisições à API, por rota, com erros e tempo de resposta.",
              ratio: "2400 / 1650",
            },
            {
              src: "/projetos/supernova-bet/site-home.webp",
              alt: "Página inicial da Karin Bet",
              label: "karinbet.localhost",
              caption: "Página inicial, com o usuário logado.",
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
        slug: "kezz",
        ogImage: "/og/kezz.jpg",
        name: "Ecossistema kezz",
        featured: true,
        badge: "PROJETO PESSOAL · NO AR",
        tagline: "quatro apps ligados à minha IA // Rust · axum · SQLite",
        summary:
          "Meu projeto pessoal: quatro apps em Rust com a minha IA no centro. Ela analisa a Security DB, escreve código, desenha workflows e edita o board, tudo com uma conta só.",
        tags: ["Rust", "IA", "MCP", "Tauri"],
        metrics: [
          { value: "4", label: "apps ligados à IA" },
          { value: "1", label: "conta para todos" },
          { value: "MCP", label: "a IA lê e escreve no board" },
          { value: "Rust", label: "em todos os serviços" },
        ],
        period: "desde agosto de 2026",
        role: "Projeto solo: arquitetura, integração com IA, código e deploy.",
        stack: ["Rust", "axum", "SQLite", "Vue", "Tauri", "LLMs", "MCP", "Square Cloud"],
        intro: [
          "O kezz começou como um assistente pessoal e virou um ecossistema em volta dele. O centro é o Kezz AI, a minha IA, que roda no desktop e no celular e está ligada a todos os outros apps.",
          "Ela analisa a Security DB e bloqueia domínios no DNS, escreve código no Kezz Code, desenha e dispara workflows, edita as notas do Kezz Board por MCP e explica o que o monitor detectou. Na maior parte das tarefas ela decide sozinha e só me chama quando tem dúvida ou quando a ação é crítica.",
          "Por baixo, são quatro apps em Rust com uma conta só: o Kezz Core guarda os usuários e define quem pode usar cada app, e cada um roda no próprio deploy, com o seu SQLite. Fiz tudo sozinha, do desenho dos serviços ao deploy na Square Cloud.",
        ],
        visual: {
          kind: "kezz-map",
          caption: "fig. 01 · como os apps do kezz se conectam à IA e à conta",
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
                text: "a minha IA, no desktop e no celular, mais o conector de cada máquina. Fala com todos os apps e usa o Kezz Board por MCP.",
              },
            },
            core: {
              name: "Kezz Core",
              aside: "(o kezz)",
              meta: "kezz-ai.squareweb.app · Rust/axum + SQLite",
              points: [
                "Servidor central da IA: assistente, coding, workflows, monitor e security",
                "**Conta única de todos os apps:** `users` + `module_grants`",
                "Permissão por pessoa e por app (`securitydb` · `kezzboard`), ativada ou desativada na tela Usuários",
                "Dashboard em Vue embutido, já com as telas da Security DB",
              ],
            },
            securityDb: {
              name: "Security DB",
              meta: "kezzsecuritydb.squareweb.app · Rust/axum + SQLite",
              points: [
                "Domínios, rede e ameaças para os apps kezz",
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
                "Canvas de notas no estilo do Milanote",
                "Login pela conta kezz e multiplayer com os usuários do kezz",
                "MCP para a IA, com um token por conta",
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
                text: "origem dos logs de DNS; recebe os bloqueios e as liberações",
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
              body: "O app recebe usuário e senha e repassa ao kezz (`/auth/module/login`, com a chave secreta do módulo). O kezz confere a senha e se a pessoa tem permissão para aquele app, e devolve um token. A cada requisição o app valida o token (`/auth/module/introspect`, com cache de 30 s). Se a permissão for removida no kezz, o acesso cai em até 30 s. Se o kezz estiver fora do ar, o app recusa quem não estiver no cache.",
            },
          },
        },
        highlights: {
          title: "Como funciona",
          items: [
            {
              title: "A IA no centro",
              body: "Todos os apps estão ligados à minha IA. Pelo chat ou por voz, ela consulta e analisa a Security DB, bloqueia domínios no DNS, abre tarefas no Kezz Code, roda workflows, edita o Kezz Board por MCP e explica o que o monitor detectou.",
            },
            {
              title: "Ela decide, eu supervisiono",
              body: "Na maior parte das tarefas, a IA decide sozinha. Ela só me chama quando tem dúvida ou quando a ação é crítica ou sensível, como segredos, deploys e migrações. Tudo o que ela faz fica registrado para eu revisar.",
            },
            {
              title: "Workflows com IA",
              body: "Descrevo o workflow em português e a IA desenha no canvas. Os passos também podem usar IA para resumir, extrair campos ou decidir se algo merece aviso, e qualquer workflow aprovado pode ser disparado numa conversa.",
            },
            {
              title: "Uma conta, um deploy por app",
              body: "Só o Kezz Core guarda senhas; os apps validam o token a cada requisição, com cache de 30 segundos. Cada app é um serviço separado na Square Cloud, com o seu SQLite, então se um cai os outros continuam.",
            },
          ],
        },
        showcase: {
          title: "Por dentro",
          note: "Os prints usam dados de demonstração, com domínios e conversas fictícios.",
          items: [
            {
              eyebrow: "WORKFLOWS",
              title: "Domínio suspeito bloqueado automaticamente",
              body: "Os workflows rodam no servidor, sem ninguém acompanhando. Posso desenhar no canvas ou descrever em português e deixar a IA montar. Este acompanha a Security DB: para cada domínio de risco novo que aparece no DNS, ele confere a nota de risco. Acima de 85, o domínio é bloqueado no DNS e eu recebo um aviso. Abaixo disso, o workflow me pergunta antes de agir.",
              points: [
                "Desenhado por mim ou pela IA, o workflow só roda depois que eu aprovo a lista do que ele pode alterar",
                "Passos com IA no mesmo fluxo: resumir, extrair campos e decidir se algo merece aviso",
                "Cada execução fica registrada com o caminho percorrido",
              ],
              shot: {
                src: "/projetos/kezz/kezz-workflow.webp",
                alt: "Workflow do kezz que bloqueia domínios suspeitos, com a lista do que ele pode alterar e as últimas execuções",
                label: "kezz / workflows / Domínio suspeito na Security DB",
                ratio: "2400 / 2086",
              },
            },
            {
              eyebrow: "KEZZ AI · CHAT",
              title: "O resumo da semana, com o bloqueio já feito",
              body: "Pedi à minha IA uma análise da semana na Security DB. Ela cruzou os logs de DNS dos aparelhos com as listas de ameaça, montou uma tabela com o que merecia atenção e bloqueou no NextDNS apenas o que era realmente perigoso. O resto ficou para eu decidir.",
              points: [
                "Ferramentas para os outros apps: Security DB, DNS, monitor, board, workflows e tarefas de código",
                "Modos de conversa para chat, voz, código e segurança, no desktop e no celular",
                "Cada resposta mostra o raciocínio, os tokens e o modelo usado",
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
              title: "Uma mudança pronta para revisão",
              body: "No Kezz Code eu descrevo uma mudança e a IA planeja, lê o código, implementa e roda os testes. Ela toma a maior parte das decisões sozinha e só me chama quando tem dúvida ou quando algo é crítico. Aqui ela terminou a busca nas notas do Kezz Board e está aguardando a minha revisão.",
              points: [
                "A trajetória mostra cada passo: o que a IA leu, escreveu e rodou",
                "Diff lado a lado de cada arquivo antes de aceitar",
                "`cargo test` e `pnpm test` rodam automaticamente antes do pedido de revisão",
              ],
              shot: {
                src: "/projetos/kezz/kezz-code.webp",
                alt: "Kezz Code com o diff lado a lado, os testes passando e a mudança aguardando revisão",
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
              caption: "O workflow, a lista do que ele pode alterar e as últimas 18 execuções.",
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
              alt: "Kezz Code aguardando revisão",
              label: "Kezz Code / kezz-board / busca nas notas",
              caption: "O Kezz Code aguardando revisão, com os testes passando.",
              ratio: "16 / 10",
            },
            {
              src: "/projetos/kezz/kezz-workflows-list.webp",
              alt: "Lista de workflows do kezz, ativos e inativos",
              label: "kezz / workflows",
              caption: "Os workflows da conta, ativos e inativos.",
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
        slug: "kezz-game-forge",
        ogImage: "/og/kezz-game-forge.jpg",
        name: "Kezz Game Forge",
        badge: "HOBBY · EM ANDAMENTO",
        tagline: "minha engine de jogos 2D // Rust · wgpu · Lua",
        summary:
          "Uma engine de jogos 2D em Rust, com editor próprio, que desenvolvo por hobby. O cyber-rune, um roguelike cyberpunk em pixel art, é o jogo que roda nela.",
        tags: ["Rust", "wgpu", "Lua"],
        period: "desde dezembro de 2025",
        role: "Projeto pessoal, nas horas vagas.",
        stack: ["Rust", "wgpu", "winit", "Lua (mlua)", "ECS próprio"],
        intro: [
          "Comecei a Kezz Game Forge para entender como uma engine funciona por dentro, e o projeto acabou crescendo. É uma engine 2D em Rust, com renderização em wgpu, ECS próprio e o conteúdo dos jogos escrito em Lua. Tem plugins de combate, inventário, crafting e outros, além de um editor com cerca de 10 painéis, incluindo um editor de pixels que salva direto no PNG.",
          "O jogo que estou fazendo nela é o cyber-rune. Uma androide inacabada acorda em um laboratório destruído e sai para o Distrito Neon, um bairro aberto com trânsito, NPCs e contratos, antes de descer aos andares inferiores.",
        ],
        showcase: {
          title: "No jogo e no editor",
          note: "Prints tirados com o comando `shot` da própria engine, em uma cópia do projeto.",
          items: [
            {
              eyebrow: "CYBER-RUNE",
              title: "O Distrito Neon",
              body: "Um cruzamento do bairro aberto do jogo. Os carros andam pelas ruas, os pedestres circulam pelas calçadas e a chuva não para. O traçado das ruas é sempre o mesmo, e o conteúdo de cada lote é gerado a partir da seed.",
              points: [
                "Pixel art na paleta Viva 32, sempre em escala inteira",
                "Salas no estilo de Hades, com a recompensa indicada na porta",
                "Cerca de 1.470 sprites, a maioria gerada por scripts",
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
              body: "O editor abre o mundo do jogo e permite jogar ali mesmo. Aqui a personagem está selecionada, e o Inspector mostra os componentes dela: posição, sprite, animação, colisão e vida.",
              points: [
                "Painéis de mundo, conteúdo, pixels e profiler, cada um em uma doca",
                "\"Play here\" começa o jogo a partir do ponto atual no mapa",
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
              "**cyber-rune:** cerca de 25 mil linhas de Lua, 57 mil de Rust e perto de 1.150 testes.",
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
          "Sistema de monitoramento de impressoras que criei na Copynorte. Um agente em Rust lê contadores e níveis de toner na rede de cada cliente, e o sistema gera relatórios e o arquivo de faturamento automaticamente.",
        tags: ["Rust", "NestJS", "Next.js"],
        metrics: [
          { value: "150 mil+", label: "impressoras enviando dados" },
          { value: "100+", label: "clientes cadastrados" },
          { value: "0", label: "quedas do servidor" },
          { value: "1 semana → 1 dia", label: "na coleta de contadores" },
        ],
        period: "2023 a maio de 2025",
        role: "Projeto inteiro feito por mim: agente, API, dashboard e deploy.",
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
          "O PrinterCollector monitorava as impressoras que a Copynorte aluga. Ele lia os contadores de páginas e o nível de toner direto na rede de cada cliente, mostrava quando o toner estava acabando, avisava quando uma impressora ficava offline e gerava os relatórios e o arquivo de faturamento. A maioria dos clientes era do Brasil, mas o sistema também atendia clientes de outros países.",
          "Foi meu primeiro projeto grande, e o escrevi praticamente sem IA, que na época ainda era bem limitada. O agente, a API, o dashboard e o deploy foram feitos por mim.",
          "O principal requisito era performance, junto com estabilidade e custo baixo, porque tudo rodava em uma única máquina da empresa. O sistema chegou a mais de 100 clientes e mais de 150 mil impressoras enviando dados, sem nenhuma queda do servidor, e a coleta de contadores, que levava uma semana e ocupava quase toda a equipe, passou a levar um dia.",
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
              panel: "RESILIÊNCIA",
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
                "Atualiza a si mesmo, com checksum SHA-256",
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
                "Trava para um job não rodar por cima de outro",
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
                "O HAProxy verifica a saúde de cada nó",
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
              { name: "Offline", how: "fica no SQLite até o servidor confirmar", accent: "pink" },
              { name: "Reenvio", how: "não sobrescreve leitura mais nova", accent: "magenta" },
              { name: "Heartbeat", how: "a cada minuto, com aviso de offline", accent: "teal" },
              { name: "Legado", how: "agente antigo continua aceito", accent: "amber" },
            ],
            foot: {
              title: "Tudo em um único servidor.",
              body: "API, tasker, dashboard e admin rodam em Docker atrás do Nginx, e o banco fica em 3 nós do CockroachDB atrás do HAProxy. Tudo em uma máquina da empresa, que suportou mais de 150 mil impressoras e ainda tinha folga.",
            },
          },
        },
        highlights: {
          title: "Como foi feito",
          items: [
            {
              title: "O agente nos clientes",
              body: "Um serviço Windows em Rust que roda na rede de cada cliente, encontra as impressoras e lê os contadores e o toner por SNMP.",
              points: [
                "Tenta SNMP v2 e volta para o v1 quando a impressora é antiga",
                "Os OIDs de cada modelo vêm do servidor, então um modelo novo não exige versão nova do agente",
                "Varre a rede em paralelo, com até 6 threads",
                "Atualiza a si mesmo: confere o SHA-256, roda o instalador e reinicia o serviço",
              ],
              tags: ["Rust", "Tokio", "SQLite"],
            },
            {
              title: "Segurança e privacidade",
              body: "Era a parte mais sensível: o agente fica dentro da rede do cliente e enxerga tudo o que responde nela, e uma falha poderia expor informações dos clientes. A regra era simples: só sai da rede o que for de fato uma impressora.",
              points: [
                "Só varre as faixas de IP configuradas para aquele local, com controle de quais faixas entram",
                "Um aparelho só conta como impressora se responder a marca e o número de série; o resto é descartado no próprio agente",
                "Somente leitura: o agente nunca altera nada na impressora",
                "Envia apenas IP, número de série, marca, contadores e toner, sempre por HTTPS",
                "No dashboard, cada cliente vê só as impressoras do próprio grupo",
              ],
              tags: ["SNMP", "HTTPS"],
            },
            {
              title: "Confiabilidade",
              body: "Nenhuma leitura podia se perder, e agentes antigos não podiam parar de funcionar.",
              points: [
                "As leituras ficam no SQLite do agente até o servidor confirmar o recebimento",
                "O servidor mescla cada contador pelo horário, então um reenvio nunca sobrescreve uma leitura mais nova",
                "Um registro com problema não derruba o lote inteiro",
                "Agentes de versões antigas continuaram funcionando com a rota e o formato antigos",
                "Heartbeat a cada minuto e e-mail quando uma impressora ou licença fica offline",
              ],
            },
            {
              title: "Tempo e custo",
              body: "A coleta de contadores, que levava uma semana e ocupava quase todos os funcionários, passou a levar um dia, com poucas pessoas indo só às máquinas que o agente não suportava. Com isso, a empresa pôde se concentrar em atender e alugar mais equipamentos.",
              points: [
                "Relatórios agendados por e-mail: contadores, suprimentos e impressoras ou licenças offline",
                "No dashboard, o toner fica vermelho abaixo de 10% e laranja até 40%",
                "Faturamento: o CSV de contadores ia para o ERP no formato Databit, pronto para importar. Milhares de impressoras faturadas em poucos minutos",
                "O servidor era uma máquina da própria empresa: quanto menos recurso ele usasse, mais clientes cabiam",
              ],
            },
            {
              title: "Performance",
              wide: true,
              body: "Mais de 100 clientes e 150 mil impressoras enviavam dados a cada minuto para um único servidor, que nunca caiu e ainda tinha processamento e memória sobrando para mais alguns milhares de impressoras. Para chegar a esse resultado, boa parte do sistema foi escrita do zero em vez de depender de bibliotecas prontas.",
              points: [
                "O agente usava cerca de 2 a 3 MB de RAM e quase nada de rede, porque só envia o que ainda não foi sincronizado",
                "Uma linha por impressora por dia, com as leituras em JSONB",
                "O agente envia 60 leituras por requisição",
                "Autenticação e permissões em cache no Redis",
                "gzip nos dois sentidos e um binário pequeno no agente",
              ],
              tags: ["CockroachDB", "Redis"],
            },
          ],
        },
        showcase: {
          title: "Por dentro",
          note: "A produção tem dados de clientes e não pode ser exibida. Por isso rodei o sistema localmente com dados fictícios: os clientes, as impressoras e os números destes prints não existem.",
          items: [
            {
              eyebrow: "SUPRIMENTOS",
              title: "O toner de todas as impressoras em uma tela",
              body: "Com a opção \"Mostrar suprimentos\", a lista troca os contadores por uma barra para cada cor de toner. O vermelho indica o que está acabando, então dá para ver de uma vez quais impressoras precisam de visita.",
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
              title: "Tudo sobre uma impressora em uma página",
              body: "A página da impressora reúne o que o agente leu: serial, IP, modelo, local, patrimônio, a última vez em que ela foi vista online, o toner de cada cor e os contadores dos últimos 30 dias.",
              points: [
                "Patrimônio, local e modelo editáveis pelo cliente",
                "Contador mono, cor e total de cada dia",
                "É possível tirar uma impressora do monitoramento sem apagar o histórico",
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
              title: "Os contadores que antes eram coletados à mão",
              body: "A mesma lista com os contadores ativados: mono, cor, total e o horário da última varredura de cada impressora. É daqui que saía o CSV para o ERP.",
              points: [
                "11 marcas na mesma tabela",
                "Busca e filtros na própria lista",
                "Última varredura de cada impressora, para saber se ela está respondendo",
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
              "**Monorepo:** 41 commits, todos meus, com cerca de 34,5 mil linhas de TypeScript entre API, tasker, admin e dashboard.",
              "**Agente:** 33 commits e cerca de 6,4 mil linhas de Rust, da versão 1.0 até a 1.2.",
              "Todos os commits dos dois repositórios são meus.",
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
        summary: "Desafio técnico de front-end da Ana Gaming, feito em TypeScript e React.",
        tags: ["TypeScript", "React"],
        intro: ["Desafio técnico de front-end que fiz para a Ana Gaming, em TypeScript e React. O código está no meu GitHub."],
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
          "Tradução para o português do guia de gramática japonesa do Tae Kim, feita enquanto eu estudava japonês.",
        tags: ["JavaScript", "Japonês"],
        intro: [
          "Tradução do guia de gramática japonesa do Tae Kim. Fiz enquanto estudava japonês, para ter o material em português.",
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
    body: "Tem um projeto ou uma vaga em mente? Mande um e-mail e eu respondo.",
    email: "karin@karinzitta.dev",
    socials: [
      { platform: "github", label: "github.com/karinzitta", href: "https://github.com/karinzitta" },
      { platform: "linkedin", label: "in/karinzitta", href: "https://www.linkedin.com/in/karinzitta" },
      { platform: "instagram", label: "@karinfoyu", href: "https://instagram.com/karinfoyu" },
      { platform: "site", label: "karinzitta.dev", href: "https://karinzitta.dev" },
    ],
  },

  footer: {
    copyright: "© 2026 Karin Elizabeth Ramos",
    signature: "karinzitta.dev // SEC_FIM",
  },
};

export default portfolio;
