import Link from "next/link";
import { SiteShell } from "@/components/SiteShell";

export default function NotFound() {
  return (
    <SiteShell>
      <section className="miss">
        <div className="eyebrow mono">● 404</div>
        <h1 className="mono">
          Página não
          <br />
          encontrada<span className="dot">.</span>
        </h1>
        <p>Esse endereço não existe. O link pode ter mudado, ou foi digitado errado.</p>
        <div className="ctas">
          <Link className="btn btn-primary" href="/">
            voltar para o início
          </Link>
          <Link className="btn btn-ghost" href="/#projetos">
            ver projetos
          </Link>
        </div>
      </section>
    </SiteShell>
  );
}
