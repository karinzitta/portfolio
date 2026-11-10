import type { Skills as SkillsData } from "@/types/portfolio";
import { SectionMarker } from "./SectionMarker";

export function Skills({ data }: { data: SkillsData }) {
  return (
    <section className="blk" id="skills">
      <SectionMarker marker={data.marker} />
      <div className="eyebrow2 mono">{data.eyebrow}</div>
      <h2 className="h2">{data.title}</h2>
      <div className="skillgrid">
        {data.groups.map((group) => (
          <div className="skillcard" key={group.label}>
            <div className="sl mono">{group.label}</div>
            <div className="si mono">
              {group.items.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
