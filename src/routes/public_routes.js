import { Navigate } from "react-router-dom";
import { Login } from "../Login";
import { Signup } from "../Signup";


export default function routes() {
  return [
    { path: "/login", element: <Login /> },
    { path: "*", element: <Navigate to="/login" replace /> },
    {
      path: "/sign-up",
      element: <Signup />,
    },
  ];
}
