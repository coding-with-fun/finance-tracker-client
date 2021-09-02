import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import IndexRoutes from "./helper/routes";

const App = () => {
    return (
        <Router>
            <div className="w-screen h-screen">
                <IndexRoutes />
            </div>
        </Router>
    );
};

export default App;
