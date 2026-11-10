import type { KezzMapData } from "@/types/portfolio";
import { Box, Legend, Markers, Panel, Wire, Zone, rich } from "./kit";

export function KezzMap({ data, ids }: { data: KezzMapData; ids: string }) {
  const { zones, wires } = data;
  return (
    <figure className="dg-figure kz">
      <Markers ids={ids} />
      <Legend legend={data.legend} />

      <div className="dg-map kz-map">
        <Zone label={zones.devices} className="kz-zone-dev" />
        <Zone label={zones.cloud} note={zones.cloudNote} className="kz-zone-cloud" />
        <Zone label={zones.external} className="kz-zone-ext dashed" />
        <Zone label={zones.board} note={zones.boardNote} className="kz-zone-board warm" />

        <div className="dg-stack kz-dev">
          <Box box={data.devices.browser} accent="magenta" className="dg-hide-sm">
            <Wire ids={ids} pos="r" label={wires.browser} />
          </Box>
          <Box box={data.devices.kezzAi} accent="pink">
            <Wire ids={ids} pos="r" both label={wires.kezzAi} />
          </Box>
          <div className="dg-tail" aria-hidden>
            <Wire ids={ids} pos="mcp-a" arrow={false} />
            <Wire ids={ids} pos="mcp-b" arrow={false} />
          </div>
        </div>

        <Box box={data.core} accent="magenta" className="kz-core" />

        <Box box={data.externals.ai} accent="muted" ext className="kz-ext1">
          <Wire ids={ids} pos="l" kind="ext" label={wires.api} />
        </Box>

        <div className="kz-lane" aria-hidden>
          <Wire
            ids={ids}
            pos="lane"
            kind="login"
            reverse
            at="78%"
            label={wires.boardLogin}
            labelAt="left-mid"
          />
        </div>

        <Box box={data.securityDb} accent="teal" className="kz-sec">
          <Wire ids={ids} pos="up" at="22%" label={wires.secData} labelAt="right-hi" />
          <Wire
            ids={ids}
            pos="up"
            kind="login"
            reverse
            at="78%"
            label={wires.secLogin}
            labelAt="left-lo"
          />
        </Box>

        <div className="dg-stack kz-ext2">
          <Box box={data.externals.dns} accent="muted" ext>
            <Wire ids={ids} pos="l" kind="ext" />
          </Box>
          <Box box={data.externals.rdap} accent="muted" ext>
            <Wire ids={ids} pos="l" kind="ext" />
          </Box>
        </div>

        <div className="dg-stack kz-cli dg-hide-sm">
          <Box box={data.boardBrowser} accent="amber">
            <Wire ids={ids} pos="r" both label={wires.boardBrowser} />
          </Box>
        </div>

        <Box box={data.board} accent="amber" className="kz-board">
          <Wire ids={ids} pos="mcp-c" arrow={false} />
          <Wire ids={ids} pos="mcp-d" label={wires.mcp} />
        </Box>

        <Panel title={zones.logins} rows={data.logins} className="kz-login" />
      </div>

      <figcaption className="dg-foot">
        <b>{data.foot.title}</b> {rich(data.foot.body)}
      </figcaption>
    </figure>
  );
}

export default KezzMap;
