import Link from "next/link";
import type { RoadmapStep } from "@/types/portfolio";

// Linha do tempo vertical. O último passo pode se dividir em ramos.
export function Roadmap({ steps }: { steps: RoadmapStep[] }) {
  return (
    <ol className="rm" data-reveal>
      {steps.map((step, i) => (
        <li className={`rm-step${step.branches ? " has-branches" : ""}${step.compact ? " rm-step--compact" : ""}`} key={step.place} data-reveal="left">
          <span className="rm-dot mono" aria-hidden>
            {String(i + 1).padStart(2, "0")}
          </span>
          <div className="rm-card">
            <div className="rm-meta mono">
              <b>{step.place}</b>
              {step.period ? <span>{step.period}</span> : null}
            </div>
            <h3 className="rm-title mono">{step.title}</h3>
            {step.body.map((text, j) => (
              <p key={j}>{text}</p>
            ))}
            {step.links ? (
              <div className="rm-links">
                {step.links.map((l) => (
                  <Link key={l.href} href={l.href} className="mono">
                    {l.label} →
                  </Link>
                ))}
              </div>
            ) : null}
          </div>

          {step.branches ? (
            <div className="rm-branches" data-reveal-stagger>
              {step.branches.map((b) => (
                <div className="rm-branch" key={b.title}>
                  <h4 className="mono">{b.title}</h4>
                  <p>{b.body}</p>
                  {b.links ? (
                    <div className="rm-links">
                      {b.links.map((l) => (
                        <Link key={l.href} href={l.href} className="mono">
                          {l.label} →
                        </Link>
                      ))}
                    </div>
                  ) : null}
                </div>
              ))}
            </div>
          ) : null}
        </li>
      ))}
    </ol>
  );
}

export default Roadmap;
