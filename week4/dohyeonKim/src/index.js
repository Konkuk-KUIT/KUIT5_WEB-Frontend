import {createRoot} from "react-dom/client"
import Home from "./Home"

const home = createRoot(document.getElementById("home"));

home.render(<Home/>);

