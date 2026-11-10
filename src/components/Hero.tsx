import type { Profile } from "@/types/portfolio";

export function Hero({ profile }: { profile: Profile }) {
  const { portrait } = profile;
  return (
    <div className="hero">
      <div>
        <div className="eyebrow mono">{profile.eyebrow}</div>
        <h1 className="title">
          {profile.greeting}
          <br />
          <span className="pk">{profile.name}</span>
        </h1>
        <div className="tagline mono">{profile.tagline}</div>
        <p className="lead">{profile.lead}</p>
        <div className="ctas">
          <a className="btn btn-primary" href={profile.primaryCta.href}>
            {profile.primaryCta.label} <span className="ar">→</span>
          </a>
          <a className="btn btn-ghost" href={profile.secondaryCta.href}>
            {profile.secondaryCta.label} <span className="ar">↓</span>
          </a>
        </div>
      </div>

      <div className="portrait">
        <div className="ring" aria-hidden />
        {portrait.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img className="photo" src={portrait.image} alt={portrait.captionName} />
        ) : (
          <div className="face mono" aria-hidden>
            {portrait.initials}
          </div>
        )}
        <div className="corner mono">{portrait.tag}</div>
        <div className="cap mono">
          <b>{portrait.captionName}</b>
          <span>{portrait.captionRole}</span>
        </div>
      </div>
    </div>
  );
}

export default Hero;
