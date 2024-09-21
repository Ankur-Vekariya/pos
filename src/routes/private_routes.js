import { lazy } from "react";
import { Navigate } from "react-router-dom";
// import Layout from "../Layout";
import { Dashboard } from "../Dashboard";
import Products from "../Products";
import EditProduct from "../EditProduct";
// const Dashboard = lazy(
//   () => import("../../components/Dashboard")
// );
// const Settings = lazy(
//   () => import("../../components/Settings")
// );

export default function privateRoutes() {
  return {
    // element: <Layout />,
    children: [
      { path: "/", element: <Dashboard /> },
      { path: "/products", element: <Products /> },
      { path: "/edit-products", element: <EditProduct /> },

      //   { path: "/settings", element: <Settings /> },
      //   { path: "*", element: <Navigate to="/" replace /> },
    ],
  };
}
