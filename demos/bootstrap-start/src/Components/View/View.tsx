import React, { useEffect, useRef } from "react";
import Home from "@arcgis/core/widgets/Home";
import "./View.scss";

interface ViewProps {
  view: __esri.MapView;
}

function View(props: ViewProps) {
  const viewRef = useRef(null) as React.RefObject<HTMLDivElement>;

  useEffect(() => {
    if (props.view && viewRef?.current) {
      props.view.container = viewRef.current;
    }
  }, [props.view, viewRef?.current]);

  useEffect(() => {
    if (!props.view) {
      return;
    }
    const home = new Home({
      view: props.view
    });
    props.view.ui.add(home, "top-left");
  }, [props.view]);

  return (
    <div
      ref={viewRef}
      id="viewDiv"
      // STEP 7: Set grid column to 8
      // className="col-8"
    />
  );
}

export default View;
