import React, { useEffect, useRef } from "react";
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

  return <div ref={viewRef} id="viewDiv" className="col-8" />;
}

export default View;
