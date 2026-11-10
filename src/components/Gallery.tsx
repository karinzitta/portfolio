import type { Project, ShotText } from "@/types/portfolio";
import { ShotCard } from "./ShotCard";

type GalleryData = NonNullable<Project["gallery"]>;

export function Gallery({ data, text }: { data: GalleryData; text: ShotText }) {
  const desktop = data.items.filter((s) => s.device !== "mobile");
  const mobile = data.items.filter((s) => s.device === "mobile");

  return (
    <div className="pj-gallery-wrap">
      {desktop.length > 0 ? (
        <>
          {mobile.length > 0 ? <div className="pj-gallery-label mono">{data.desktopLabel}</div> : null}
          <div className="pj-gallery">
            {desktop.map((shot) => (
              <figure className="pj-gallery-item" key={shot.src}>
                <ShotCard shot={shot} text={text} />
                {shot.caption ? <figcaption className="pj-gallery-cap">{shot.caption}</figcaption> : null}
              </figure>
            ))}
          </div>
        </>
      ) : null}

      {mobile.length > 0 ? (
        <>
          <div className="pj-gallery-label mono">{data.mobileLabel}</div>
          <div className="pj-gallery pj-gallery--phones">
            {mobile.map((shot) => (
              <figure className="pj-gallery-item" key={shot.src}>
                <ShotCard shot={shot} text={text} />
                {shot.caption ? <figcaption className="pj-gallery-cap">{shot.caption}</figcaption> : null}
              </figure>
            ))}
          </div>
        </>
      ) : null}
    </div>
  );
}

export default Gallery;
