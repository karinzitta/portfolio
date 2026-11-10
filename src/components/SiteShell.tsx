import type { ReactNode } from "react";
import { portfolio } from "@/data/portfolio";
import { GridBackground } from "./GridBackground";
import { Nav } from "./Nav";
import { Footer } from "./Footer";

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <>
      <GridBackground />
      <div className="page">
        <Nav profile={portfolio.profile} nav={portfolio.nav} />
        <main className="wrap">
          {children}
          <Footer data={portfolio.footer} />
        </main>
      </div>
    </>
  );
}

export default SiteShell;
