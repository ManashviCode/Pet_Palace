import ReactDOM from "react-dom/client";
import "./global.scss";
import React from "react";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <BrowserRouter>
    <App />

  </BrowserRouter>
);
