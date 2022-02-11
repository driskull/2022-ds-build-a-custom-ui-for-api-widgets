import React, { useEffect, useState } from "react";
import "./App.scss";

import Header from "./Components/Header/Header";
import View from "./Components/View/View";
import SidePanel from "./Components/SidePanel/SidePanel";

import WebMap from "@arcgis/core/WebMap";
import MapView from "@arcgis/core/views/MapView";

import applicationjSON from "../src/config/application.json";

import esriConfig from "@arcgis/core/config";

import "@esri/calcite-components/dist/components/calcite-button";

import { CalciteButton } from "@esri/calcite-components-react";

function App() {
  const { webmap, title, portalUrl } = applicationjSON;
  esriConfig.portalUrl = portalUrl;

  const [view, setView] = useState(null);

  useEffect(() => {
    const map = new WebMap({
      portalItem: {
        id: webmap,
      },
    });
    const mapView = new MapView({
      map,
    });
    setView(mapView);
  }, []);

  return (
    <div className="app">
      <Header title={title} />
      <div className="content">
        <SidePanel view={view} />
        <View view={view} />
        <CalciteButton />
      </div>
    </div>
  );
}

export default App;
