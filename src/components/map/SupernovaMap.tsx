import type { SupernovaMapData } from "@/types/portfolio";
import { Box, Legend, Markers, Panel, Wire, Zone, rich } from "./kit";

// Visão geral da plataforma. Cinza = contexto; colorido = as partes que foram minhas.
export function SupernovaMap({ data, ids }: { data: SupernovaMapData; ids: string }) {
  const { zones, wires, externals } = data;
  return (
    <figure className="dg-figure sn">
      <Markers ids={ids} />
      <Legend legend={data.legend} />

      <div className="dg-map sn-map">
        <Zone label={zones.clients} className="sn-zone-cli" />
        <Zone label={zones.api} note={zones.apiNote} className="sn-zone-api" />
        <Zone label={zones.external} className="sn-zone-ext dashed" />
        <Zone label={zones.external} className="sn-zone-low dashed" />

        <div className="dg-stack sn-cli">
          <Box box={data.clients.site} accent="muted">
            <Wire ids={ids} pos="r" label={wires.site} />
          </Box>
          <Box box={data.clients.backoffice} accent="magenta">
            <Wire ids={ids} pos="r" both label={wires.backoffice} />
          </Box>
        </div>

        <Box box={data.core} accent="muted" className="sn-core" />

        <Box box={externals.games} accent="muted" ext className="sn-games dg-hide-sm">
          <Wire ids={ids} pos="l" kind="ext" both label={wires.games} />
        </Box>

        <Box box={data.security} accent="pink" className="sn-sec">
          <Wire ids={ids} pos="up" at="50%" label={wires.security} labelAt="right-hi" />
        </Box>
        <Box box={data.alarms} accent="amber" className="sn-alarm">
          <Wire ids={ids} pos="up" at="50%" label={wires.alarms} labelAt="right-hi" />
        </Box>
        <Box box={data.payments} accent="teal" className="sn-pay">
          <Wire ids={ids} pos="up" at="50%" label={wires.payments} labelAt="right-hi" />
        </Box>

        <Box box={externals.gateways} accent="teal" ext className="sn-gw">
          <Wire ids={ids} pos="l" kind="ext" both label={wires.gateways} />
        </Box>

        <Box box={externals.lists} accent="pink" ext className="sn-lists">
          <Wire ids={ids} pos="up2" kind="ext" reverse at="50%" label={wires.lists} labelAt="right-hi" />
        </Box>
        <Box box={externals.alerts} accent="amber" ext className="sn-alerts">
          <Wire ids={ids} pos="up2" kind="ext" at="50%" label={wires.alerts} labelAt="right-hi" />
        </Box>

        <Panel title={zones.mine} rows={data.mine} className="sn-mine" />
      </div>

      <figcaption className="dg-foot">
        <b>{data.foot.title}</b> {rich(data.foot.body)}
      </figcaption>
    </figure>
  );
}

export default SupernovaMap;
