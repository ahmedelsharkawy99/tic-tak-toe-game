import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

import App from "./App.jsx";

const enteryPoint = document.getElementById("root");
ReactDOM.createRoot(enteryPoint).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
