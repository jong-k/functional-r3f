import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./styles/index.scss";
import Home from "./pages/Home";
import TwoBoxes from "./pages/TwoBoxes";
import RenderTexture from "./pages/RenderTexture";
import Cerberus from "./pages/Cerberus";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/twoboxes",
    element: <TwoBoxes />,
  },
  {
    path: "/rendertexture",
    element: <RenderTexture />,
  },
  {
    path: "/cerberus",
    element: <Cerberus />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
