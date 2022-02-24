import React from "react";
import "./SidePanel.scss";

import LayerList from "../LayerList/LayerList";

interface SidePanelProps {
  view: __esri.MapView;
}

function SidePanel(props: SidePanelProps) {
  return (
    <div className="side-panel col-4">
      <LayerList view={props.view} />
    </div>
  );
}

export default SidePanel;
