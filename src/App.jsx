import { Routes } from "react-router-dom";
import "./App.css";
import Layout from "./layout/Layout";
import { useLocation } from "react-router-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import mainRoutes from "./routes/mainRoutes";

function App() {
  // const location = useLocation();

  // const homePage = location.pathname === "/";

  // return (
  //   <Layout>
  //     <div>nav</div>
  //     {homePage && <div>Side Nav</div>}
  //   </Layout>
  // );
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: mainRoutes,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
