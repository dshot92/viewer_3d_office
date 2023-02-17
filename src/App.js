import "./App.css";
import { React } from "react";
import Grid from "./Grid";
import { FiberContainer } from "./FiberContainer";

import { useLocation } from "react-router-dom";

function App() {
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    return (
        <div className="App">
            {/* <Grid /> */}
            <FiberContainer path={params.get("model")} />
        </div>
    );
}

export default App;
