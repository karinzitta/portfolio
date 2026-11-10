# Portfólio · Karin Elizabeth

Meu portfólio pessoal, em Next.js + TypeScript, com export estático (pasta `out/`). Roda em qualquer host de arquivos estáticos.

## Conteúdo

Todos os textos ficam em `src/data/portfolio.ts`.

Cada projeto em `projects.list` vira uma página em `/projetos/<slug>/`. Os que têm `featured: true` aparecem como card grande na home; os outros ficam em "Outros projetos". A página `/sobre/` usa `aboutPage`, com o roadmap.

Campos opcionais de um projeto:

- `visual`: mapa de arquitetura (`kezz-map`, `supernova-map` ou `printer-map`). Aparece como miniatura e abre num modal grande.
- `highlights`: cards de "o que eu fiz". Com `wide: true`, o card ocupa a linha inteira.
- `showcase`: prints comentados, em zigue-zague.
- `gallery`: todos os prints, no fim da página. As imagens ficam em `public/projetos/<slug>/`.
- `notes`: seções de texto livre.
- `ogImage`: imagem de compartilhamento, em `public/og/`.

Nos textos, `` `crase` `` vira código e `**asteriscos**` viram negrito.

As animações de entrada usam `data-reveal` e `data-reveal-stagger` (ver `src/components/Motion.tsx`).

## Scripts

```bash
npm install      # dependências
npm run dev      # http://localhost:3000
npm run build    # gera o site em ./out
npm start        # serve o ./out em http://localhost:4000
npm run lint
```

## Deploy

- Vercel: importe o repositório.
- Netlify: build `npm run build`, pasta `out`.
- Outro host estático: `npm run build` e suba a pasta `out/`.

## Estrutura

```
src/
  app/
    page.tsx                 home
    sobre/page.tsx           sobre mim e roadmap
    projetos/[slug]/page.tsx página de cada projeto
    sitemap.ts, robots.ts    SEO
    globals.css              base e seções da home
    projects.css             cards e páginas de projeto
    about.css                página sobre e roadmap
    diagram.css              mapas de arquitetura
    zoom.css                 card com lupa e modal
    motion.css               animações de entrada
  components/
    map/                     mapas (kit, KezzMap, SupernovaMap, PrinterMap)
  lib/seo.ts                 metadata e dados estruturados
  data/portfolio.ts          conteúdo
  types/portfolio.ts         formato do conteúdo
```
