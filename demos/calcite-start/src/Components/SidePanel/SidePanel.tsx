import React from "react";
import "./SidePanel.scss";

import LayerList from "../LayerList/LayerList";

// STEP 1: ADD CALCITE DEPENDENCIES
// import "@esri/calcite-components/dist/components/calcite-shell-panel";
// import { CalciteShellPanel } from "@esri/calcite-components-react";

interface SidePanelProps {
  view: __esri.MapView;
}

// STEP 2: UPDATE RENDERING RETURN VNODE
// function SidePanel(props: SidePanelProps) {
//   return (
//     <CalciteShellPanel slot="primary-panel" position="start">
//       <LayerList view={props.view} />
//     </CalciteShellPanel>
//   );
// }

function SidePanel(props: SidePanelProps) {
  return (
    <div className="side-panel">
      <LayerList view={props.view} />
    </div>
  );
}

export default SidePanel;
