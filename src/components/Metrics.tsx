import type { Stat } from "@/types/portfolio";

export function Metrics({ metrics }: { metrics: Stat[] }) {
  return (
    <div className="metrics">
      {metrics.map((m) => (
        <div className="metric" key={m.label}>
          <div className="v mono">{m.value}</div>
          <div className="l mono">{m.label}</div>
        </div>
      ))}
    </div>
  );
}

export default Metrics;
