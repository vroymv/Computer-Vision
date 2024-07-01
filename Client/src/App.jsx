import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Try, { submitAction } from "./routes/Try";
import Layout from "./routes/Layout";
import Database from "./routes/Database";
import { loader as databaseLoader } from "./routes/Database";
import About from "./routes/About/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
  },
  {
    path: "/try",
    element: <Try />,
    action: submitAction,
  },
  {
    path: "/database",
    element: <Database />,
    loader: databaseLoader,
  },
  {
    path: "/about",
    element: <About />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
