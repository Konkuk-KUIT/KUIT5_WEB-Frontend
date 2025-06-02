import { createRoot } from "react-dom/client";
import Home from "./Home";
import "./index.css";

const container = document.getElementById("app");
if (!container) throw new Error("Root element with id 'app' not found");

const root = createRoot(container);
root.render(<Home />);
