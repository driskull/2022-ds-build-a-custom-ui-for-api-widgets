import React from "react";
import ReactDOM from "react-dom";
import { setAssetPath } from "@esri/calcite-components/dist/components";
setAssetPath(window.location.href);
import "./index.scss";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
