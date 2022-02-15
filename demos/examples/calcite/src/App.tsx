import React, { useEffect, useState } from "react";
import "./App.scss";

import Header from "./Components/Header/Header";
import View from "./Components/View/View";
import SidePanel from "./Components/SidePanel/SidePanel";

import WebMap from "@arcgis/core/WebMap";
import MapView from "@arcgis/core/views/MapView";

import applicationjSON from "../src/config/application.json";

import esriConfig from "@arcgis/core/config";

import "@esri/calcite-components/dist/components/calcite-scrim";
import "@esri/calcite-components/dist/components/calcite-shell";
import { CalciteScrim, CalciteShell } from "@esri/calcite-components-react";

function App() {
  const { webmap, portalUrl } = applicationjSON;
  esriConfig.portalUrl = portalUrl;

  const [view, setView] = useState(null);
  const [mapTitle, setMapTitle] = useState(null);
  const [loading, setLoading] = useState(true);

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

    mapView.when().then((view) => {
      setMapTitle(view.map.portalItem.title);
      setLoading(false);
    });
  }, []);

  return [
    loading ? <CalciteScrim loading /> : null,
    <CalciteShell>
      <Header title={mapTitle || "Loading..."} />
      <SidePanel view={view} />
      <View view={view} />
    </CalciteShell>,
  ];
}

export default App;
