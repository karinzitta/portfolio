import type { Contact as ContactData } from "@/types/portfolio";
import { CopyEmail } from "./CopyEmail";
import { Socials } from "./Socials";

export function Contact({ data }: { data: ContactData }) {
  return (
    <div className="contact" id="contato">
      <div className="eyebrow2 mono">{data.eyebrow}</div>
      <h2>
        {data.headlineLead}
        <span className="pk">{data.headlineHighlight}</span>
      </h2>
      <p>{data.body}</p>
      <CopyEmail email={data.email} />
      <Socials socials={data.socials} />
    </div>
  );
}

export default Contact;
