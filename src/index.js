import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Dashboard } from "./Dashboard";
import { Signup } from "./Signup";
import { Login } from "./Login";
import { AuthProvider } from "./contexts/Auth";
import { PrivateRoute } from "./components/PrivateRoute";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <PrivateRoute><Dashboard /></PrivateRoute>,
//   },
//   {
//     path: "/login",
//     element: <Login />,
//   },
//   {
//     path: "/sign-up",
//     element: <Signup />,
//   },
// ]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <App />
      {/* <RouterProvider router={router} /> */}
    </AuthProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
