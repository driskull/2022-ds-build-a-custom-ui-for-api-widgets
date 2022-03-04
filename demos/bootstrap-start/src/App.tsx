import React, { useEffect, useState } from "react";
import "./App.scss";

import Header from "./Components/Header/Header";
import View from "./Components/View/View";
import SidePanel from "./Components/SidePanel/SidePanel";

import WebMap from "@arcgis/core/WebMap";
import MapView from "@arcgis/core/views/MapView";

import applicationjSON from "./config/application.json";

import esriConfig from "@arcgis/core/config";

function App() {
  const { webmap, portalUrl } = applicationjSON;
  esriConfig.portalUrl = portalUrl;

  const [view, setView] = useState(null);
  const [mapTitle, setMapTitle] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const map = new WebMap({
      portalItem: {
        id: webmap
      }
    });

    const mapView = new MapView({
      map
    });

    setView(mapView);

    mapView.when().then(view => {
      setMapTitle(view.map.portalItem.title);
      setLoading(false);
    });
  }, []);
  // STEP 2: .container-fluid for .app and .row for .content
  return (
    <div
      className="app"
      // className="app container-fluid"
    >
      <Header title={loading ? "Loading..." : mapTitle} />
      <div
        className="content"
        // className="content row g-0"
      >
        <SidePanel view={view} />
        <View view={view} />
      </div>
    </div>
  );
}

export default App;
