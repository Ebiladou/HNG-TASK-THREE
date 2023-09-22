import React from "react";
import ReactDOM from "react-dom/client";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider, Route,} from "react-router-dom";
import App from "./App";
import Gallery from "./pages/Gallery";
import Drag from "./pages/Drag";
import Login from "./pages/Login"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path: "/gallery",
    element: <Gallery/>
  },
  {
    path: "/login",
    element: <Login/>
  },
  {
    path: "/dragdrop",
    element: <Drag/>
  },
  
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);