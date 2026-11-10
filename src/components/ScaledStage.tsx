"use client";

import { useEffect, useLayoutEffect, useRef, useState, type ReactNode } from "react";

const useIsoLayoutEffect = typeof window === "undefined" ? useEffect : useLayoutEffect;

type Measure = { w: number; h: number; nh: number };

export function ScaledStage({
  children,
  design,
  mode,
  ratio,
  minMap = 1000,
  minScale = 0.85,
  maxScale = 1.6,
}: {
  children: ReactNode;
  design: number;
  mode: "thumb" | "fit";
  ratio?: string;
  minMap?: number;
  minScale?: number;
  maxScale?: number;
}) {
  const outerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLDivElement>(null);
  const [m, setM] = useState<Measure | null>(null);

  useIsoLayoutEffect(() => {
    const outer = outerRef.current;
    const canvas = canvasRef.current;
    if (!outer || !canvas) return;
    const read = () => {
      const next = { w: outer.clientWidth, h: outer.clientHeight, nh: canvas.offsetHeight };
      setM((prev) =>
        prev && prev.w === next.w && prev.h === next.h && prev.nh === next.nh ? prev : next,
      );
    };
    read();
    const ro = new ResizeObserver(read);
    ro.observe(outer);
    ro.observe(canvas);
    return () => ro.disconnect();
  }, []);

  const list = mode === "fit" && m !== null && m.w < minMap;
  let scale = 1;
  if (m && !list && m.nh > 0) {
    const byWidth = m.w / design;
    scale =
      mode === "thumb" ? byWidth : Math.min(byWidth, Math.max(m.h / m.nh, minScale), maxScale);
  }

  const outerStyle: React.CSSProperties & { "--stage-ratio"?: string } = {};
  if (ratio) outerStyle["--stage-ratio"] = ratio;
  if (mode === "thumb" && m) outerStyle.height = m.nh * scale;

  return (
    <div
      ref={outerRef}
      className={`stage stage--${mode}${list ? " is-list" : ""}`}
      style={outerStyle}
    >
      <div
        className="stage-sizer"
        style={m && !list ? { width: design * scale, height: m.nh * scale } : undefined}
      >
        <div
          ref={canvasRef}
          className="stage-canvas"
          style={
            list
              ? undefined
              : { width: design, transform: `scale(${scale})`, visibility: m ? "visible" : "hidden" }
          }
        >
          {children}
        </div>
      </div>
    </div>
  );
}

export default ScaledStage;
