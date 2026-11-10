import type { Marker } from "@/types/portfolio";

export function SectionMarker({ marker }: { marker: Marker }) {
  return (
    <div className="marker mono">
      <span>{marker.code}</span>
      <span className="ln" />
      <span className="idx">{marker.index}</span>
    </div>
  );
}

export default SectionMarker;
