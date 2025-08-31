import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app";  // seu componente raiz
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import './css/global.css';
import './css/styles.css';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
         <App />
  </React.StrictMode>
);