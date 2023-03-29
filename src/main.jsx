import React from "react";
import { createRoot } from "react-dom/client";
import About from "./pages/About";
import Activities from "./pages/activities";
import Activity from "./pages/activities/id";
import Cities from "./pages/cities";
import City from "./pages/cities/id";
import Home from "./pages/Home";
import MainLayout from "./layouts/mainLayout/mainLayout";
import "./index.css";

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<MainLayout />}>
      <Route path="/" element={<Home />} />
      <Route path="activities" element={<Activities />} />
      <Route path="activities/:id" element={<Activity />} />
      <Route path="cities" element={<Cities />} />
      <Route path="cities/:id" element={<City />} />
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
