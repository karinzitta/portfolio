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
  initials: string;
  captionName: string;
  captionRole: string;
  tag: string;
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
  more?: Cta;
};

export type RoadmapLink = { label: string; href: string };

export type RoadmapBranch = { title: string; body: string; links?: RoadmapLink[] };

export type RoadmapStep = {
  place: string;
  period?: string;
  title: string;
  body: string[];
  links?: RoadmapLink[];
  compact?: boolean;
  branches?: RoadmapBranch[];
};

export type AboutPage = {
  seo: { title: string; description: string };
  eyebrow: string;
  title: string;
  lead: string[];
  facts: Stat[];
  pillarsTitle: string;
  how: { title: string; paragraphs: string[] };
  roadmap: { title: string; steps: RoadmapStep[] };
  study: { title: string; paragraphs: string[] };
  principlesTitle: string;
  cta: { title: string; body: string; primary: Cta; secondary: Cta };
};

export type SkillGroup = { label: string; items: string[] };

export type Skills = {
  marker: Marker;
  eyebrow: string;
  title: string;
  note?: string;
  groups: SkillGroup[];
};

export type MapAccent = "magenta" | "pink" | "teal" | "amber";

export type MapBox = {
  name: string;
  aside?: string;
  meta?: string;
  text?: string;
  points?: string[];
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

export type ZoomText = {
  path: string;
  title: string;
  hint: string;
  open: string;
  esc: string;
  close: string;
};

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
  src: string;
  alt: string;
  label: string;
  caption?: string;
  ratio?: string;
  device?: "desktop" | "mobile";
};

export type ShowcaseItem = {
  eyebrow?: string;
  title: string;
  body: string;
  points?: string[];
  shot: Shot;
  phone?: Shot;
};

export type ShotText = { hint: string; open: string; esc: string; close: string };

export type Highlight = {
  title: string;
  body: string;
  points?: string[];
  tags?: string[];
  wide?: boolean;
};

export type ProjectLink = { label: string; href: string };

export type Project = {
  slug: string;
  name: string;
  ogImage?: string;
  featured?: boolean;
  badge: string;
  tagline: string;
  summary: string;
  tags: string[];
  metrics?: Stat[];
  period?: string;
  role?: string;
  stack?: string[];
  intro: string[];
  links?: ProjectLink[];
  visual?: ProjectVisual;
  highlights?: { title: string; items: Highlight[] };
  showcase?: { title: string; note?: string; items: ShowcaseItem[] };
  notes?: { title: string; paragraphs: string[] }[];
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
  url: string;
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
