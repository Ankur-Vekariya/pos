import logo from "./logo.svg";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { useAuth } from "./contexts/Auth";
import privateRoutes from "./routes/private_routes";
import routes from "./routes/public_routes";

function App() {
  const { user } = useAuth();

  const router = createBrowserRouter([
    user ? privateRoutes() : {},
    ...routes(),
  ]);
  return <RouterProvider router={router} />;
}

export default App;
