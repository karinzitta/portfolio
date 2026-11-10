import type { ProjectVisual as Visual } from "@/types/portfolio";
import { ZoomCard } from "./ZoomCard";
import { ScaledStage } from "./ScaledStage";
import { KezzMap } from "./map/KezzMap";
import { SupernovaMap } from "./map/SupernovaMap";
import { PrinterMap } from "./map/PrinterMap";

// largura em que os mapas são desenhados antes de escalar
const DESIGN = 1240;
const RATIO = "1240 / 820";

function MapOf({ visual, ids }: { visual: Visual; ids: string }) {
  switch (visual.kind) {
    case "kezz-map":
      return <KezzMap data={visual.data} ids={ids} />;
    case "supernova-map":
      return <SupernovaMap data={visual.data} ids={ids} />;
    case "printer-map":
      return <PrinterMap data={visual.data} ids={ids} />;
  }
}

export function ProjectVisual({ visual, slug }: { visual: Visual; slug: string }) {
  return (
    <div className="pj-shot">
      <ZoomCard
        text={visual.zoom}
        bodyClass="zoom-body--map"
        thumb={
          <ScaledStage design={DESIGN} mode="thumb" ratio={RATIO}>
            <MapOf visual={visual} ids={`${slug}-thumb`} />
          </ScaledStage>
        }
        full={
          <ScaledStage design={DESIGN} mode="fit" minScale={1}>
            <MapOf visual={visual} ids={`${slug}-full`} />
          </ScaledStage>
        }
      />
      <p className="pj-shot-cap mono">{visual.caption}</p>
    </div>
  );
}

// Miniatura sem interação, pros cards da home.
export function MapThumb({ visual, slug }: { visual: Visual; slug: string }) {
  return (
    <ScaledStage design={DESIGN} mode="thumb" ratio={RATIO}>
      <MapOf visual={visual} ids={`${slug}-card`} />
    </ScaledStage>
  );
}
