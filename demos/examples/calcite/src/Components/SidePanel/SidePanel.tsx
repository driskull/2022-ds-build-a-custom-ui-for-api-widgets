import React from "react";

import LayerList from "../LayerList/LayerList";

import "@esri/calcite-components/dist/components/calcite-shell-panel";
import { CalciteShellPanel } from "@esri/calcite-components-react";

interface SidePanelProps {
  view: __esri.MapView;
}

function SidePanel(props: SidePanelProps) {
  return (
    <CalciteShellPanel slot="primary-panel" position="start">
      <LayerList view={props.view} />
    </CalciteShellPanel>
  );
}

export default SidePanel;
