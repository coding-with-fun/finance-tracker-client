import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import IndexRoutes from "./helper/routes";

const App = () => {
    return (
        <Router>
            <IndexRoutes />
        </Router>
    );
};

export default App;
