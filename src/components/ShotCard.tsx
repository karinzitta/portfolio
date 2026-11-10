import type { Shot, ShotText } from "@/types/portfolio";
import { ZoomCard } from "./ZoomCard";

export function ShotCard({ shot, text }: { shot: Shot; text: ShotText }) {
  const phone = shot.device === "mobile";
  return (
    <ZoomCard
      frame={phone ? "phone" : "window"}
      bodyClass="zoom-body--img"
      text={{
        path: shot.label,
        title: shot.label,
        hint: text.hint,
        open: `${text.open}: ${shot.label}`,
        esc: text.esc,
        close: text.close,
      }}
      thumb={
        // eslint-disable-next-line @next/next/no-img-element
        <img
          className="pj-shot-img"
          src={shot.src}
          alt={shot.alt}
          loading="lazy"
          style={shot.ratio ? { aspectRatio: shot.ratio } : undefined}
        />
      }
      full={
        // eslint-disable-next-line @next/next/no-img-element
        <img className={`zoom-img${phone ? " zoom-img--phone" : ""}`} src={shot.src} alt={shot.alt} />
      }
    />
  );
}

export default ShotCard;
