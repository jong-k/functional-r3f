import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import TwoBoxes from "./pages/TwoBoxes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/twoboxes",
    element: <TwoBoxes />,
  },
]);

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
