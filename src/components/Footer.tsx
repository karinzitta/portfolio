import type { Footer as FooterData } from "@/types/portfolio";

export function Footer({ data }: { data: FooterData }) {
  return (
    <footer className="footer">
      <div>{data.copyright}</div>
      <div className="sig mono">{data.signature}</div>
    </footer>
  );
}

export default Footer;
