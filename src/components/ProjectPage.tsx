import Link from "next/link";
import type { Project, ProjectsUi } from "@/types/portfolio";
import { ProjectVisual } from "./ProjectVisual";
import { Showcase } from "./Showcase";
import { Gallery } from "./Gallery";
import { rich } from "./map/kit";

export function ProjectPage({
  project: p,
  ui,
  next,
}: {
  project: Project;
  ui: ProjectsUi;
  next?: Project;
}) {
  return (
    <article className="pj">
      <Link className="pj-back mono" href="/#projetos">
        {ui.back}
      </Link>

      <header className="pj-head">
        <span className="pj-badge mono">{p.badge}</span>
        <h1 className="pj-title mono">{p.name}</h1>
        <div className="pj-tag mono">{p.tagline}</div>
        {p.intro.map((text, i) => (
          <p className="pj-desc" key={i}>
            {rich(text)}
          </p>
        ))}

        <dl className="pj-meta">
          {p.period ? (
            <div>
              <dt className="mono">{ui.period}</dt>
              <dd>{p.period}</dd>
            </div>
          ) : null}
          {p.role ? (
            <div>
              <dt className="mono">{ui.role}</dt>
              <dd>{p.role}</dd>
            </div>
          ) : null}
          {p.stack ? (
            <div className="wide">
              <dt className="mono">{ui.stack}</dt>
              <dd className="chips">
                {p.stack.map((s) => (
                  <span className="chip" key={s}>
                    {s}
                  </span>
                ))}
              </dd>
            </div>
          ) : null}
          {p.links ? (
            <div>
              <dt className="mono">{ui.links}</dt>
              <dd className="pj-links">
                {p.links.map((l) => (
                  <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer" className="mono">
                    {l.label} ↗
                  </a>
                ))}
              </dd>
            </div>
          ) : null}
        </dl>
      </header>

      {p.metrics ? (
        <div className="pj-metrics">
          {p.metrics.map((m) => (
            <div className="pj-m" key={m.label}>
              <div className="pj-mv mono">{m.value}</div>
              <div className="pj-ml mono">{m.label}</div>
            </div>
          ))}
        </div>
      ) : null}

      {p.visual ? <ProjectVisual visual={p.visual} slug={p.slug} /> : null}

      {p.highlights ? (
        <section className="pj-sec">
          <h2 className="pj-h2 mono">{p.highlights.title}</h2>
          <div className="pj-hl-grid">
            {p.highlights.items.map((h) => (
              <div className={`pj-hl${h.wide ? " pj-hl--wide" : ""}`} key={h.title}>
                <h3 className="mono">{h.title}</h3>
                <p>{rich(h.body)}</p>
                {h.points ? (
                  <ul>
                    {h.points.map((pt) => (
                      <li key={pt}>{rich(pt)}</li>
                    ))}
                  </ul>
                ) : null}
                {h.tags ? (
                  <div className="chips">
                    {h.tags.map((t) => (
                      <span className="chip" key={t}>
                        {t}
                      </span>
                    ))}
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        </section>
      ) : null}

      {p.showcase && p.showcase.items.length > 0 ? (
        <section className="pj-sec">
          <h2 className="pj-h2 mono">{p.showcase.title}</h2>
          {p.showcase.note ? <p className="pj-note">{p.showcase.note}</p> : null}
          <Showcase data={p.showcase} text={ui.shots} />
        </section>
      ) : null}

      {p.notes?.map((n) => (
        <section className="pj-sec" key={n.title}>
          <h2 className="pj-h2 mono">{n.title}</h2>
          {n.paragraphs.map((text, i) => (
            <p className="pj-desc" key={i}>
              {rich(text)}
            </p>
          ))}
        </section>
      ))}

      {p.gallery && p.gallery.items.length > 0 ? (
        <section className="pj-sec">
          <h2 className="pj-h2 mono">{p.gallery.title}</h2>
          <Gallery data={p.gallery} text={ui.shots} />
        </section>
      ) : null}

      <div className="pj-end">
        {next ? (
          <Link className="pj-next" href={`/projetos/${next.slug}/`}>
            <span className="mono">{ui.next}</span>
            <b className="mono">{next.name} →</b>
            <span>{next.summary}</span>
          </Link>
        ) : null}
        <div className="pj-cta">
          <h3 className="mono">{ui.ctaTitle}</h3>
          <p>{ui.ctaBody}</p>
          <Link className="btn btn-primary" href="/#contato">
            {ui.ctaButton}
          </Link>
        </div>
      </div>
    </article>
  );
}

export default ProjectPage;
