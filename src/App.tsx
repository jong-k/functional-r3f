import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/ui/Layout";
import Home from "./pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);

export default function App() {
  return (
    <Layout>
      <RouterProvider router={router} />
    </Layout>
  );
}
