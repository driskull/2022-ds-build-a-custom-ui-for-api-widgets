import React, { useEffect, useState } from "react";
import "./LayerList.scss";

import { useLayerListViewModel } from "./hooks";

interface LayerListProps {
  view: __esri.MapView;
}

function LayerList(props: LayerListProps) {
  const layerListVM = useLayerListViewModel(props);

  useEffect(() => {
    if (layerListVM) {
      console.log("LAYER LIST VIEW MODEL: ", layerListVM);
    }
  }, [layerListVM]);

  return <div className="custom-layer-list-view">Custom Layer List View</div>;
}

export default LayerList;
