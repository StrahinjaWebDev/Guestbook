import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.scss";
import AppProvider from "../context/AppProvider";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>
);
