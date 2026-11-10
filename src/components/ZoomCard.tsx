"use client";

import { useEffect, useId, useRef, useState, type ReactNode } from "react";
import { createPortal } from "react-dom";
import type { ZoomText } from "@/types/portfolio";

function LensIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden>
      <circle cx="10.5" cy="10.5" r="6.5" />
      <path d="M20 20l-4.6-4.6M10.5 7.5v6M7.5 10.5h6" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden>
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  );
}

function Dots() {
  return (
    <>
      <i />
      <i />
      <i />
    </>
  );
}

// Card com barra de janela. Hover mostra a lupa; clique abre um modal grande
// com `full`. `thumb` e `full` chegam prontos (mapa escalado, imagem...).
export function ZoomCard({
  text,
  thumb,
  full,
  bodyClass = "",
  frame = "window",
}: {
  text: ZoomText;
  thumb: ReactNode;
  full: ReactNode;
  bodyClass?: string;
  /** window: barra de janela em cima. phone: moldura de telefone, sem barra. */
  frame?: "window" | "phone";
}) {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);
  const titleId = useId();

  useEffect(() => {
    if (!open) return;
    const root = document.documentElement;
    const trigger = triggerRef.current;
    const prev = { overflow: root.style.overflow, paddingRight: root.style.paddingRight };
    // trava a rolagem sem a página pular quando a barra de rolagem some
    const gutter = window.innerWidth - root.clientWidth;
    root.style.overflow = "hidden";
    if (gutter > 0) root.style.paddingRight = `${gutter}px`;
    closeRef.current?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        setOpen(false);
        return;
      }
      if (e.key !== "Tab") return;
      const stops = [closeRef.current, bodyRef.current].filter(Boolean) as HTMLElement[];
      const at = stops.indexOf(document.activeElement as HTMLElement);
      const next = (at + (e.shiftKey ? -1 : 1) + stops.length) % stops.length;
      e.preventDefault();
      stops[next]?.focus();
    };
    document.addEventListener("keydown", onKey);

    return () => {
      document.removeEventListener("keydown", onKey);
      root.style.overflow = prev.overflow;
      root.style.paddingRight = prev.paddingRight;
      trigger?.focus();
    };
  }, [open]);

  return (
    <>
      <div className={`zoom-card${frame === "phone" ? " zoom-card--phone" : ""}`}>
        {frame === "window" ? (
          <div className="zoom-bar" aria-hidden>
            <Dots />
            <span className="path">{text.path}</span>
            <span className="hint">{text.hint}</span>
          </div>
        ) : null}
        <div className={`zoom-body${bodyClass ? ` ${bodyClass}` : ""}`}>{thumb}</div>
        <button
          ref={triggerRef}
          type="button"
          className="zoom-btn"
          aria-label={text.open}
          aria-haspopup="dialog"
          onClick={() => setOpen(true)}
        >
          <span className="zoom-lens">
            <LensIcon />
          </span>
        </button>
      </div>

      {open
        ? createPortal(
            <>
              <div className="zoom-backdrop" onClick={() => setOpen(false)} aria-hidden />
              <div className="zoom-modal" role="dialog" aria-modal="true" aria-labelledby={titleId}>
                <div className="zoom-bar">
                  <Dots />
                  <b id={titleId}>{text.title}</b>
                  <span className="hint">{text.esc}</span>
                  <button
                    ref={closeRef}
                    type="button"
                    className="zoom-close"
                    aria-label={text.close}
                    onClick={() => setOpen(false)}
                  >
                    <CloseIcon />
                  </button>
                </div>
                <div ref={bodyRef} className="zoom-modal-body" tabIndex={0}>
                  {full}
                </div>
              </div>
            </>,
            document.body,
          )
        : null}
    </>
  );
}

export default ZoomCard;
