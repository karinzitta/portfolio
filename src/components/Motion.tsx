"use client";

import { useEffect } from "react";

// Animações de entrada. O elemento ganha `is-in` quando aparece na tela e o
// motion.css faz o resto. No markup:
//   data-reveal ("up" por padrão, ou "left" | "right" | "scale")
//   data-reveal-stagger: os filhos diretos entram um depois do outro
// Os seletores abaixo já entram sozinhos, sem precisar de atributo.

const SINGLE: [string, string][] = [
  [".hero .portrait", "scale"],
  [".contact", "up"],
  [".footer", "up"],
  [".pj-back", "left"],
  [".pj-h2", "up"],
  [".pj-note", "up"],
  [".pj-shot-cap", "up"],
  [".pj-sec > .pj-desc", "up"],
  [".morelabel", "up"],
  [".pj-gallery-label", "up"],
  [".zoom-modal .zoom-img", "scale"],
];

const STAGGER = [
  ".hero > div:not(.portrait)",
  ".cards",
  ".metrics",
  ".blk",
  ".skillgrid",
  ".pj-features",
  ".projgrid",
  ".pj-head",
  ".pj-metrics",
  ".pj-hl-grid",
  ".pj-gallery",
  ".pj-end",
].join(",");

const STEP = 84; // ms entre um filho e o próximo
const MAX_STEPS = 12;

declare global {
  interface Window {
    __motion?: boolean;
  }
}

function tagAuto(root: ParentNode) {
  for (const [sel, kind] of SINGLE) {
    root.querySelectorAll<HTMLElement>(sel).forEach((el) => {
      if (!el.hasAttribute("data-reveal")) el.setAttribute("data-reveal", kind);
    });
  }
  root.querySelectorAll<HTMLElement>(STAGGER).forEach((el) => {
    if (!el.hasAttribute("data-reveal-stagger")) el.setAttribute("data-reveal-stagger", "");
  });
  // zigue-zague: a imagem vem do lado dela e o texto do outro
  root.querySelectorAll<HTMLElement>(".pj-row").forEach((row) => {
    const even = Array.prototype.indexOf.call(row.parentElement?.children ?? [], row) % 2 === 1;
    const media = row.querySelector<HTMLElement>(":scope > .pj-row-media");
    const text = row.querySelector<HTMLElement>(":scope > .pj-row-text");
    if (media && !media.hasAttribute("data-reveal")) media.setAttribute("data-reveal", even ? "right" : "left");
    if (text && !text.hasAttribute("data-reveal")) text.setAttribute("data-reveal", even ? "left" : "right");
  });
  root.querySelectorAll<HTMLElement>(".zoom-card").forEach((el) => {
    if (!el.hasAttribute("data-reveal")) el.setAttribute("data-reveal", "wipe");
  });
}

function prepareStagger(el: HTMLElement) {
  Array.from(el.children).forEach((child, i) => {
    (child as HTMLElement).style.setProperty("--i", String(Math.min(i, MAX_STEPS)));
  });
}

// Mapas: zonas, depois as caixas uma a uma, cada seta logo depois da caixa
// dela, e por fim o painel e a nota. Uns 1,3s no total.
const PACE = 1.3; // tudo um pouco mais calmo

function prepareMap(fig: HTMLElement) {
  const set = (el: Element, ms: number) => (el as HTMLElement).style.setProperty("--d", `${Math.round(ms * PACE)}ms`);

  fig.querySelectorAll(".dg-zone").forEach((z, i) => set(z, i * 45));

  const boxes = Array.from(fig.querySelectorAll<HTMLElement>(".dg-box"));
  const base = 140;
  const step = boxes.length > 1 ? Math.min(55, 520 / (boxes.length - 1)) : 0;
  const delayOf = new Map<Element, number>();
  boxes.forEach((b, i) => {
    delayOf.set(b, base + i * step);
    set(b, base + i * step);
  });
  const last = base + Math.max(0, boxes.length - 1) * step;

  const perOwner = new Map<Element, number>();
  fig.querySelectorAll<HTMLElement>(".dg-w").forEach((w) => {
    const owner = w.closest(".dg-box");
    const k = perOwner.get(owner ?? fig) ?? 0;
    perOwner.set(owner ?? fig, k + 1);
    const from = owner ? delayOf.get(owner) ?? last : last * 0.7;
    set(w, from + 210 + k * 30);

    const line = w.querySelector("line");
    const vertical = w.classList.contains("v");
    const reversed = vertical ? line?.getAttribute("y1") === "100%" : line?.getAttribute("x1") === "100%";
    w.setAttribute("data-draw", vertical ? (reversed ? "btt" : "ttb") : reversed ? "rtl" : "ltr");
  });

  fig.querySelectorAll(".dg-panel").forEach((p) => set(p, last + step));
  fig.querySelectorAll(".dg-legend").forEach((l) => set(l, 0));
  fig.querySelectorAll(".dg-foot").forEach((f) => set(f, last + 260));
}

export function Motion() {
  useEffect(() => {
    window.__motion = true;
    const root = document.documentElement;
    root.classList.remove("motion-off");

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue;
          e.target.classList.add("is-in");
          io.unobserve(e.target);
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0 },
    );

    const seen = new WeakSet<Element>();
    const scan = () => {
      tagAuto(document.body);
      document.body
        .querySelectorAll<HTMLElement>("[data-reveal], [data-reveal-stagger], .dg-figure")
        .forEach((el) => {
          if (seen.has(el)) return;
          seen.add(el);
          if (el.hasAttribute("data-reveal-stagger")) prepareStagger(el);
          if (el.classList.contains("dg-figure")) prepareMap(el);
          io.observe(el);
        });
    };

    scan();
    let queued = false;
    const mo = new MutationObserver(() => {
      if (queued) return;
      queued = true;
      requestAnimationFrame(() => {
        queued = false;
        scan();
      });
    });
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      mo.disconnect();
      io.disconnect();
    };
  }, []);

  return null;
}

export default Motion;
