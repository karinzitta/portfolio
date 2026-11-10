import type { Project, ShotText } from "@/types/portfolio";
import { ShotCard } from "./ShotCard";
import { rich } from "./map/kit";

type ShowcaseData = NonNullable<Project["showcase"]>;

export function Showcase({ data, text }: { data: ShowcaseData; text: ShotText }) {
  return (
    <div className="pj-showcase">
      {data.items.map((item) => (
        <div className={`pj-row${item.phone ? " has-phone" : ""}`} key={item.title}>
          <div className="pj-row-media">
            <ShotCard shot={item.shot} text={text} />
            {item.phone ? (
              <div className="pj-row-phone">
                <ShotCard shot={item.phone} text={text} />
              </div>
            ) : null}
          </div>
          <div className="pj-row-text">
            {item.eyebrow ? <div className="pj-row-eyebrow mono">{item.eyebrow}</div> : null}
            <h3 className="mono">{item.title}</h3>
            <p>{rich(item.body)}</p>
            {item.points ? (
              <ul>
                {item.points.map((pt) => (
                  <li key={pt}>{rich(pt)}</li>
                ))}
              </ul>
            ) : null}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Showcase;
