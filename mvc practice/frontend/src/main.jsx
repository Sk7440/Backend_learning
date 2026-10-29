import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Homeprovider from "./components/Context.jsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
    <BrowserRouter>
  <Homeprovider>
    <App />
  </Homeprovider>,
    </BrowserRouter>
);
