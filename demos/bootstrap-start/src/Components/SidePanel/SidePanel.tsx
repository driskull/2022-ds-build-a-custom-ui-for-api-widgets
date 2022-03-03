import React from "react";
import "./SidePanel.scss";

import LayerList from "../LayerList/LayerList";

interface SidePanelProps {
  view: __esri.MapView;
}

function SidePanel(props: SidePanelProps) {
  // STEP 4
  return (
    <div className="side-panel">
      {/* <div className="side-panel col-4"> */}
      <LayerList view={props.view} />
    </div>
  );
}

export default SidePanel;
