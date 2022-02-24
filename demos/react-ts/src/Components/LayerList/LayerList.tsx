import React, { useEffect, useState } from "react";
import "./LayerList.scss";

import LayerListViewModel from "@arcgis/core/widgets/LayerList/LayerListViewModel";

interface LayerListProps {
  view: __esri.MapView;
}

function LayerList(props: LayerListProps) {
  const [layerListVM, setLayerListVM] = useState(null);

  useEffect(() => {
    if (props.view) {
      setLayerListVM(
        new LayerListViewModel({
          view: props.view
        })
      );
    }
  }, [props.view]);

  useEffect(() => {
    if (layerListVM) {
      console.log("LAYER LIST VIEW MODEL: ", layerListVM);
    }
  }, [layerListVM]);

  return <div className="custom-layer-list-view">Custom Layer List View</div>;
}

export default LayerList;
