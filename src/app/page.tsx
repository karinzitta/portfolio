import { portfolio } from "@/data/portfolio";
import { SiteShell } from "@/components/SiteShell";
import { Hero } from "@/components/Hero";
import { FocusCards } from "@/components/FocusCards";
import { Metrics } from "@/components/Metrics";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";
import { JsonLd } from "@/components/JsonLd";
import { personJsonLd, websiteJsonLd } from "@/lib/seo";

export default function Home() {
  const { profile, about, skills, projects, contact } = portfolio;

  return (
    <SiteShell>
      <JsonLd data={websiteJsonLd()} />
      <JsonLd data={personJsonLd()} />
      <Hero profile={profile} />
      <FocusCards cards={profile.focusCards} />
      <Metrics metrics={profile.metrics} />
      <About data={about} />
      <Skills data={skills} />
      <Projects data={projects} />
      <Contact data={contact} />
    </SiteShell>
  );
}
