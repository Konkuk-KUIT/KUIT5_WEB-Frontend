import { createRoot } from "react-dom/client";
import Home from "./Home";
import "./index.css";

const root = createRoot(document.getElementById("app"));

root.render(<Home />);
