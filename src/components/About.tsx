import Link from "next/link";
import type { About as AboutData } from "@/types/portfolio";
import { SectionMarker } from "./SectionMarker";

export function About({ data }: { data: AboutData }) {
  return (
    <section className="blk" id="sobre">
      <SectionMarker marker={data.marker} />
      <div className="two">
        <div>
          <div className="eyebrow2 mono">{data.eyebrow}</div>
          <h2 className="h2">{data.title}</h2>
          {data.paragraphs.map((p, i) => (
            <p className="para" key={i}>
              {p}
            </p>
          ))}
          <div className="quote mono">&ldquo;{data.quote}&rdquo;</div>
          {data.more ? (
            <Link className="about-more mono" href={data.more.href}>
              {data.more.label} →
            </Link>
          ) : null}
        </div>
        <div className="principles">
          {data.principles.map((pr) => (
            <div className="principle" key={pr.code}>
              <div className="pn mono">{pr.code}</div>
              <h4>{pr.title}</h4>
              <p>{pr.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
