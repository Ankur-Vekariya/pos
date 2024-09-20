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
  return (
    <div>
      <h1>POS</h1>
    </div>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
