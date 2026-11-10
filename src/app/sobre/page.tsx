import Link from "next/link";
import { portfolio } from "@/data/portfolio";
import { SiteShell } from "@/components/SiteShell";
import { Roadmap } from "@/components/Roadmap";
import { JsonLd } from "@/components/JsonLd";
import { pageMeta, personJsonLd } from "@/lib/seo";

const page = portfolio.aboutPage;

export const metadata = pageMeta({
  title: page.seo.title,
  description: page.seo.description,
  path: "/sobre/",
  image: "/og/sobre.jpg",
});

export default function Sobre() {
  const { portrait } = portfolio.profile;
  return (
    <SiteShell>
      <JsonLd data={personJsonLd()} />
      <article className="ab">
        <header className="ab-head">
          <div className="ab-head-text" data-reveal>
            <div className="eyebrow mono">● {page.eyebrow}</div>
            <h1 className="ab-title mono">{page.title}</h1>
            {page.lead.map((text, i) => (
              <p className="ab-lead" key={i}>
                {text}
              </p>
            ))}
          </div>
          {portrait.image ? (
            <div className="ab-photo" data-reveal="scale">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={portrait.image} alt={`Foto da ${portrait.captionName}`} width={320} height={384} />
            </div>
          ) : null}
        </header>

        <div className="pj-metrics ab-facts" data-reveal-stagger>
          {page.facts.map((f) => (
            <div className="pj-m" key={f.label}>
              <div className="pj-mv mono">{f.value}</div>
              <div className="pj-ml mono">{f.label}</div>
            </div>
          ))}
        </div>

        <section className="ab-sec">
          <h2 className="pj-h2 mono" data-reveal>
            {page.pillarsTitle}
          </h2>
          <div className="pj-hl-grid ab-principles" data-reveal-stagger>
            {portfolio.profile.focusCards.map((card) => (
              <div className="pj-hl ab-pillar" key={card.num}>
                <div className="ab-pillar-num mono">{card.num}</div>
                <h3 className="mono">{card.title}</h3>
                <p>{card.description}</p>
                <div className="chips">
                  {card.chips.map((c) => (
                    <span className="chip" key={c}>
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="ab-sec" data-reveal>
          <h2 className="pj-h2 mono">{page.how.title}</h2>
          {page.how.paragraphs.map((text, i) => (
            <p className="pj-desc" key={i}>
              {text}
            </p>
          ))}
        </section>

        <section className="ab-sec">
          <h2 className="pj-h2 mono" data-reveal>
            {page.roadmap.title}
          </h2>
          <Roadmap steps={page.roadmap.steps} />
        </section>

        <section className="ab-sec" data-reveal>
          <h2 className="pj-h2 mono">{page.study.title}</h2>
          {page.study.paragraphs.map((text, i) => (
            <p className="pj-desc" key={i}>
              {text}
            </p>
          ))}
        </section>

        <section className="ab-sec">
          <h2 className="pj-h2 mono" data-reveal>
            {page.principlesTitle}
          </h2>
          <div className="pj-hl-grid ab-principles" data-reveal-stagger>
            {portfolio.about.principles.map((pr) => (
              <div className="pj-hl" key={pr.code}>
                <h3 className="mono">{pr.title}</h3>
                <p>{pr.body}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="pj-cta ab-cta" data-reveal>
          <h3 className="mono">{page.cta.title}</h3>
          <p>{page.cta.body}</p>
          <div className="ctas">
            <Link className="btn btn-primary" href={page.cta.primary.href}>
              {page.cta.primary.label}
            </Link>
            <Link className="btn btn-ghost" href={page.cta.secondary.href}>
              {page.cta.secondary.label}
            </Link>
          </div>
        </div>
      </article>
    </SiteShell>
  );
}
