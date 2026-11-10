import Link from "next/link";
import type { Projects as ProjectsData } from "@/types/portfolio";
import { SectionMarker } from "./SectionMarker";
import { MapThumb } from "./ProjectVisual";

export function Projects({ data }: { data: ProjectsData }) {
  const featured = data.list.filter((p) => p.featured);
  const others = data.list.filter((p) => !p.featured);

  return (
    <section className="blk" id="projetos">
      <SectionMarker marker={data.marker} />
      <div className="eyebrow2 mono">{data.eyebrow}</div>
      <h2 className="h2">{data.title}</h2>

      <div className="pj-features">
        {featured.map((p) => {
          const shot = p.gallery?.items[0];
          return (
            <Link className="pj-feature" href={`/projetos/${p.slug}/`} key={p.slug}>
              <div className="pj-feature-visual" aria-hidden>
                {p.visual ? (
                  <MapThumb visual={p.visual} slug={`${p.slug}-home`} />
                ) : shot ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={shot.src} alt="" loading="lazy" />
                ) : null}
              </div>
              <div className="pj-feature-body">
                <span className="pj-badge mono">{p.badge}</span>
                <h3 className="pj-feature-name mono">{p.name}</h3>
                <div className="pj-tag mono">{p.tagline}</div>
                <p className="pj-feature-text">{p.summary}</p>
                {p.metrics ? (
                  <div className="pj-mini">
                    {p.metrics.slice(0, 3).map((m) => (
                      <div key={m.label}>
                        <b className="mono">{m.value}</b>
                        <span className="mono">{m.label}</span>
                      </div>
                    ))}
                  </div>
                ) : null}
                <span className="pj-more mono">{data.ui.open}</span>
              </div>
            </Link>
          );
        })}
      </div>

      {others.length > 0 ? (
        <>
          <div className="morelabel mono">{data.moreLabel}</div>
          <div className="projgrid projgrid--3">
            {others.map((p) => (
              <Link key={p.slug} className="projcard" href={`/projetos/${p.slug}/`}>
                <span className="projbadge mono">{p.badge}</span>
                <div className="pt mono">
                  <span className="gh">{"//"}</span>
                  {p.name}
                </div>
                <p>{p.summary}</p>
                <div className="tech">
                  {p.tags.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
                <div className="projlink mono">{data.ui.open}</div>
              </Link>
            ))}
          </div>
        </>
      ) : null}
    </section>
  );
}

export default Projects;
