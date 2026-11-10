import { Fragment, type ReactNode } from "react";
import type { MapBox, MapLegend } from "@/types/portfolio";

export type Accent = "magenta" | "pink" | "teal" | "amber" | "muted";
type WireKind = "data" | "login" | "ext";
type WirePos = "r" | "l" | "up" | "up2" | "lane" | "mcp-a" | "mcp-b" | "mcp-c" | "mcp-d";

const COLORS: [WireKind, string][] = [
  ["data", "#ff7ac0"],
  ["login", "#c879ff"],
  ["ext", "#8f81a0"],
];
const VERTICAL: WirePos[] = ["up", "up2", "lane", "mcp-b", "mcp-c"];

// `crase` -> <code>, **asteriscos** -> <b>
export function rich(text: string): ReactNode {
  return text.split(/(`[^`]+`|\*\*[^*]+\*\*)/g).map((part, i) => {
    if (part.length > 2 && part.startsWith("`") && part.endsWith("`")) {
      return <code key={i}>{part.slice(1, -1)}</code>;
    }
    if (part.length > 4 && part.startsWith("**") && part.endsWith("**")) {
      return <b key={i}>{part.slice(2, -2)}</b>;
    }
    return <Fragment key={i}>{part}</Fragment>;
  });
}

// Pontas de seta. O mapa aparece mais de uma vez na página (miniatura e modal),
// por isso os ids levam um prefixo por instância.
export function Markers({ ids }: { ids: string }) {
  return (
    <svg className="dg-defs" width="0" height="0" aria-hidden focusable="false">
      <defs>
        {COLORS.map(([kind, color]) => (
          <Fragment key={kind}>
            <marker
              id={`${ids}-end-${kind}`}
              viewBox="0 0 10 10"
              refX="9"
              refY="5"
              markerWidth="8"
              markerHeight="8"
              markerUnits="userSpaceOnUse"
              orient="auto"
            >
              <path d="M0,0 L10,5 L0,10 z" fill={color} />
            </marker>
            <marker
              id={`${ids}-start-${kind}`}
              viewBox="0 0 10 10"
              refX="1"
              refY="5"
              markerWidth="8"
              markerHeight="8"
              markerUnits="userSpaceOnUse"
              orient="auto"
            >
              <path d="M10,0 L0,5 L10,10 z" fill={color} />
            </marker>
          </Fragment>
        ))}
      </defs>
    </svg>
  );
}

export function Legend({ legend }: { legend: MapLegend }) {
  return (
    <div className="dg-legend mono">
      <span>
        <svg width="30" height="10" aria-hidden>
          <line x1="0" y1="5" x2="30" y2="5" className="lg-data" />
        </svg>
        {legend.data}
      </span>
      {legend.login ? (
        <span>
          <svg width="30" height="10" aria-hidden>
            <line x1="0" y1="5" x2="30" y2="5" className="lg-login" />
          </svg>
          {legend.login}
        </span>
      ) : null}
      <span>
        <svg width="30" height="14" aria-hidden>
          <rect x="1" y="1" width="28" height="12" rx="3" className="lg-ext" />
        </svg>
        {legend.external}
      </span>
    </div>
  );
}

// Um trecho de seta. A posição vem do CSS (.dg-w.r, .dg-w.up, ...): ela fica
// presa ao elemento onde foi colocada e atravessa o vão até o vizinho.
export function Wire({
  ids,
  pos,
  kind = "data",
  both = false,
  reverse = false,
  arrow = true,
  label,
  at,
  labelAt,
}: {
  ids: string;
  pos: WirePos;
  kind?: WireKind;
  both?: boolean;
  reverse?: boolean;
  arrow?: boolean;
  label?: string;
  at?: string;
  labelAt?: "right-hi" | "left-lo" | "left-mid";
}) {
  const vertical = VERTICAL.includes(pos);
  const from = reverse ? "100%" : "0";
  const to = reverse ? "0" : "100%";
  return (
    <span
      className={`dg-w ${vertical ? "v" : "h"} ${pos} k-${kind}`}
      style={at ? { left: at } : undefined}
      aria-hidden
    >
      <svg>
        <line
          x1={vertical ? "50%" : from}
          y1={vertical ? from : "50%"}
          x2={vertical ? "50%" : to}
          y2={vertical ? to : "50%"}
          markerEnd={arrow ? `url(#${ids}-end-${kind})` : undefined}
          markerStart={both ? `url(#${ids}-start-${kind})` : undefined}
        />
      </svg>
      {label ? <span className={`dg-wl${labelAt ? ` ${labelAt}` : ""}`}>{rich(label)}</span> : null}
    </span>
  );
}

export function Box({
  box,
  accent,
  className = "",
  ext = false,
  children,
}: {
  box: MapBox;
  accent: Accent;
  className?: string;
  ext?: boolean;
  children?: ReactNode;
}) {
  const points = box.points ?? [];
  const big = points.length > 0;
  return (
    <div className={`dg-box a-${accent}${ext ? " ext" : ""}${className ? ` ${className}` : ""}`}>
      {big ? (
        <h3>
          {box.name}
          {box.aside ? <small>{box.aside}</small> : null}
          {box.wip ? <span className="dg-wip">{box.wip}</span> : null}
        </h3>
      ) : (
        <h4>{box.name}</h4>
      )}
      {box.meta ? <span className="dg-meta">{box.meta}</span> : null}
      {box.text ? <p>{rich(box.text)}</p> : null}
      {big ? (
        <ul>
          {points.map((p) => (
            <li key={p}>{rich(p)}</li>
          ))}
        </ul>
      ) : null}
      {children}
    </div>
  );
}

export function Zone({
  label,
  note,
  className,
}: {
  label: string;
  note?: string;
  className: string;
}) {
  return (
    <div className={`dg-zone ${className}`} aria-hidden>
      <span className="dg-zl">
        {label}
        {note ? <small>{note}</small> : null}
      </span>
    </div>
  );
}

export function Panel({
  title,
  rows,
  className,
}: {
  title: string;
  rows: { name: string; how: string; accent: Accent }[];
  className: string;
}) {
  return (
    <div className={`dg-panel ${className}`}>
      <span className="dg-zl">{title}</span>
      {rows.map((r) => (
        <div className="dg-lrow" key={r.name}>
          <span className={`dg-dot a-${r.accent}`} />
          <b>{r.name}</b>
          <span>{r.how}</span>
        </div>
      ))}
    </div>
  );
}
