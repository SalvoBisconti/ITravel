import React from "react";
import { createRoot } from "react-dom/client";
import About from "./pages/About";
import Activity from "./pages/Activity";
import City from "./pages/City";
import Home from "./pages/Home";
import "./index.css";

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Home />} />
      <Route path="activity/:id" element={<Activity />} />
      <Route path="city/:id" element={<City />} />
      <Route path="about" element={<About />} />
    </Route>
  )
);
const domNode = document.getElementById("root");
const root = createRoot(domNode);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
