import React from "react";
import ReactDOM from "react-dom/client";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider, Route,} from "react-router-dom";
import App from "./App";

createRoot(document.getElementById("root")).render(
  <App />
);