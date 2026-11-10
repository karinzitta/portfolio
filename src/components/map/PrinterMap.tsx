import type { PrinterMapData } from "@/types/portfolio";
import { Box, Legend, Markers, Panel, Wire, Zone, rich } from "./kit";

// Da impressora na rede do cliente até o relatório.
export function PrinterMap({ data, ids }: { data: PrinterMapData; ids: string }) {
  const { zones, wires } = data;
  return (
    <figure className="dg-figure pc">
      <Markers ids={ids} />
      <Legend legend={data.legend} />

      <div className="dg-map pc-map">
        <Zone label={zones.client} note={zones.clientNote} className="pc-zone-client" />
        <Zone label={zones.server} note={zones.serverNote} className="pc-zone-server" />
        <Zone label={zones.out} className="pc-zone-out dashed" />
        <Zone label={zones.data} className="pc-zone-data warm" />

        <Box box={data.printers} accent="muted" ext className="pc-printers" />
        <Box box={data.agent} accent="pink" className="pc-agent">
          <Wire ids={ids} pos="up" at="50%" label={wires.snmp} labelAt="right-hi" />
          <Wire ids={ids} pos="r" both label={wires.https} />
        </Box>

        <Box box={data.dashboard} accent="teal" className="pc-dash" />
        <Box box={data.tasker} accent="magenta" className="pc-tasker" />
        <Box box={data.api} accent="magenta" className="pc-api">
          <Wire ids={ids} pos="up" at="50%" label={wires.rest} labelAt="right-hi" both />
        </Box>
        <Box box={data.admin} accent="magenta" className="pc-admin" />

        <div className="dg-stack pc-out">
          <Box box={data.out.email} accent="muted" ext>
            <Wire ids={ids} pos="l" kind="ext" label={wires.email} />
          </Box>
          <Box box={data.out.erp} accent="muted" ext>
            <Wire ids={ids} pos="l" kind="ext" label={wires.erp} />
          </Box>
        </div>

        <Box box={data.db} accent="amber" className="pc-db">
          <Wire ids={ids} pos="up2" at="25%" both label={wires.db} labelAt="right-hi" />
          <Wire ids={ids} pos="up2" at="75%" both />
        </Box>

        <Panel title={zones.panel} rows={data.panel} className="pc-panel" />
      </div>

      <figcaption className="dg-foot">
        <b>{data.foot.title}</b> {rich(data.foot.body)}
      </figcaption>
    </figure>
  );
}

export default PrinterMap;
