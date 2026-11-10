// Formato do conteúdo. Os textos ficam em src/data/portfolio.ts.

export type NavLink = { label: string; href: string };

export type Status = { label: string; detail: string };

export type Cta = { label: string; href: string };

export type FocusCard = {
  num: string;
  title: string;
  chips: string[];
  description: string;
};

export type Stat = { value: string; label: string };

export type Portrait = {
  /** Aparece no lugar da foto se não tiver imagem. */
  initials: string;
  captionName: string;
  captionRole: string;
  tag: string;
  /** Caminho em /public, ex: "/me.png". */
  image?: string;
};

export type Profile = {
  wordmark: string;
  eyebrow: string;
  greeting: string;
  name: string;
  tagline: string;
  lead: string;
  status: Status;
  primaryCta: Cta;
  secondaryCta: Cta;
  portrait: Portrait;
  focusCards: FocusCard[];
  metrics: Stat[];
};

export type Marker = { code: string; index: string };

export type Principle = { code: string; title: string; body: string };

export type About = {
  marker: Marker;
  eyebrow: string;
  title: string;
  paragraphs: string[];
  quote: string;
  principles: Principle[];
  /** Link pra página Sobre. */
  more?: Cta;
};

// ---- página /sobre ----

export type RoadmapLink = { label: string; href: string };

export type RoadmapBranch = { title: string; body: string; links?: RoadmapLink[] };

export type RoadmapStep = {
  place: string;
  /** Ex: "2021 · mai 2025". */
  period?: string;
  title: string;
  body: string[];
  links?: RoadmapLink[];
  /** Passo menor, sem tanto destaque (os anos antes do primeiro emprego). */
  compact?: boolean;
  /** Onde o caminho se divide. */
  branches?: RoadmapBranch[];
};

export type AboutPage = {
  seo: { title: string; description: string };
  eyebrow: string;
  title: string;
  lead: string[];
  facts: Stat[];
  /** Título da seção com os três pilares (os focusCards da home). */
  pillarsTitle: string;
  how: { title: string; paragraphs: string[] };
  roadmap: { title: string; note?: string; steps: RoadmapStep[] };
  study: { title: string; paragraphs: string[] };
  /** Título da seção com os princípios da home. */
  principlesTitle: string;
  cta: { title: string; body: string; primary: Cta; secondary: Cta };
};

export type SkillGroup = { label: string; items: string[] };

export type Skills = {
  marker: Marker;
  eyebrow: string;
  title: string;
  groups: SkillGroup[];
};

// ---- mapas de arquitetura ----

export type MapAccent = "magenta" | "pink" | "teal" | "amber";

/** Caixa de um mapa. Nos textos, `crase` vira código e **asteriscos** viram negrito. */
export type MapBox = {
  name: string;
  /** Ao lado do nome, ex: "(o kezz)". */
  aside?: string;
  /** Host · stack, em fonte mono. */
  meta?: string;
  /** Descrição curta (caixas pequenas). */
  text?: string;
  /** Lista de pontos (caixas grandes). */
  points?: string[];
  /** Selo, ex: "em andamento". */
  wip?: string;
};

export type MapLegend = { data: string; login?: string; external: string };

export type MapFoot = { title: string; body: string };

export type KezzMapData = {
  legend: MapLegend;
  zones: {
    devices: string;
    cloud: string;
    cloudNote: string;
    external: string;
    board: string;
    boardNote: string;
    logins: string;
  };
  devices: { browser: MapBox; kezzAi: MapBox };
  core: MapBox;
  securityDb: MapBox;
  board: MapBox;
  boardBrowser: MapBox;
  externals: { ai: MapBox; dns: MapBox; rdap: MapBox };
  wires: {
    browser: string;
    kezzAi: string;
    api: string;
    secData: string;
    secLogin: string;
    boardLogin: string;
    mcp: string;
    boardBrowser: string;
  };
  logins: { name: string; how: string; accent: MapAccent }[];
  foot: MapFoot;
};

// ---- card com zoom (mapas e prints) ----

export type ZoomText = {
  /** Texto da barra da janela, ex: "~/kezz/infra/mapa". */
  path: string;
  /** Título do modal. */
  title: string;
  hint: string;
  /** Rótulo do botão que abre (leitor de tela). */
  open: string;
  esc: string;
  close: string;
};

// Mapa da Supernova: a plataforma em cinza e, coloridas, as partes que foram minhas.
export type SupernovaMapData = {
  legend: MapLegend;
  zones: {
    clients: string;
    api: string;
    apiNote: string;
    external: string;
    mine: string;
  };
  clients: { site: MapBox; backoffice: MapBox };
  core: MapBox;
  security: MapBox;
  alarms: MapBox;
  payments: MapBox;
  externals: { games: MapBox; gateways: MapBox; lists: MapBox; alerts: MapBox };
  wires: {
    site: string;
    backoffice: string;
    games: string;
    security: string;
    alarms: string;
    payments: string;
    gateways: string;
    alerts: string;
    lists: string;
  };
  mine: { name: string; how: string; accent: MapAccent }[];
  foot: MapFoot;
};

// Mapa do PrinterCollector: da impressora no cliente até o relatório.
export type PrinterMapData = {
  legend: MapLegend;
  zones: {
    client: string;
    clientNote: string;
    server: string;
    serverNote: string;
    data: string;
    out: string;
    panel: string;
  };
  printers: MapBox;
  agent: MapBox;
  dashboard: MapBox;
  admin: MapBox;
  api: MapBox;
  tasker: MapBox;
  db: MapBox;
  out: { email: MapBox; erp: MapBox };
  wires: { snmp: string; https: string; rest: string; email: string; erp: string; db: string };
  panel: { name: string; how: string; accent: MapAccent }[];
  foot: MapFoot;
};

export type ProjectVisual =
  | { kind: "kezz-map"; zoom: ZoomText; caption: string; data: KezzMapData }
  | { kind: "supernova-map"; zoom: ZoomText; caption: string; data: SupernovaMapData }
  | { kind: "printer-map"; zoom: ZoomText; caption: string; data: PrinterMapData };

export type Shot = {
  /** Caminho em /public. */
  src: string;
  alt: string;
  /** Vai na barra da janela e no título do modal. */
  label: string;
  caption?: string;
  /** Proporção da imagem, ex: "16 / 10". */
  ratio?: string;
  /** Print de celular aparece numa moldura de telefone. */
  device?: "desktop" | "mobile";
};

/** Um print comentado, nas linhas em zigue-zague da página. */
export type ShowcaseItem = {
  eyebrow?: string;
  title: string;
  body: string;
  points?: string[];
  shot: Shot;
  /** Print de celular encaixado no canto do print principal. */
  phone?: Shot;
};

/** Textos dos cards com zoom de prints (galeria e zigue-zague). */
export type ShotText = { hint: string; open: string; esc: string; close: string };

export type Highlight = {
  title: string;
  body: string;
  points?: string[];
  tags?: string[];
  /** Ocupa a linha inteira, com os pontos em duas colunas. */
  wide?: boolean;
};

export type ProjectLink = { label: string; href: string };

export type Project = {
  slug: string;
  name: string;
  /** Imagem de compartilhamento da página, em /public. */
  ogImage?: string;
  /** Destaque na home (card grande). */
  featured?: boolean;
  badge: string;
  tagline: string;
  /** Texto do card na home. */
  summary: string;
  tags: string[];
  metrics?: Stat[];
  period?: string;
  role?: string;
  stack?: string[];
  /** Parágrafos do topo da página do projeto. */
  intro: string[];
  links?: ProjectLink[];
  visual?: ProjectVisual;
  highlights?: { title: string; items: Highlight[] };
  /** Os prints principais, comentados. */
  showcase?: { title: string; note?: string; items: ShowcaseItem[] };
  notes?: { title: string; paragraphs: string[] }[];
  /** Todos os prints, no fim da página. */
  gallery?: { title: string; desktopLabel: string; mobileLabel: string; items: Shot[] };
};

export type ProjectsUi = {
  open: string;
  back: string;
  next: string;
  period: string;
  role: string;
  stack: string;
  links: string;
  ctaTitle: string;
  ctaBody: string;
  ctaButton: string;
  /** Textos dos cards de print. */
  shots: ShotText;
};

export type Projects = {
  marker: Marker;
  eyebrow: string;
  title: string;
  moreLabel: string;
  list: Project[];
  ui: ProjectsUi;
};

export type SocialPlatform = "github" | "linkedin" | "instagram" | "site";

export type Social = {
  platform: SocialPlatform;
  label: string;
  href: string;
};

export type Contact = {
  marker: Marker;
  eyebrow: string;
  headlineLead: string;
  headlineHighlight: string;
  body: string;
  email: string;
  socials: Social[];
};

export type Footer = { copyright: string; signature: string };

export type SiteMeta = {
  title: string;
  description: string;
  lang: string;
  /** Endereço público, sem barra no fim. */
  url: string;
  /** Imagem de compartilhamento padrão, em /public. */
  ogImage: string;
  keywords: string[];
};

export type Portfolio = {
  site: SiteMeta;
  nav: NavLink[];
  profile: Profile;
  about: About;
  aboutPage: AboutPage;
  skills: Skills;
  projects: Projects;
  contact: Contact;
  footer: Footer;
};
