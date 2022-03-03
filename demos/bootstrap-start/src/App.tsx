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

  return (
    <div className="app">
      <Header title={loading ? "Loading..." : mapTitle} />
      <div
        // STEP 2
        className="content"
        // className="content row"
      >
        <SidePanel view={view} />
        <View view={view} />
      </div>
    </div>
  );
}

export default App;
