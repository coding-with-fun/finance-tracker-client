import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import IndexRoutes from "./helper/routes";

const App = () => {
    return (
        <Router>
            <div className="w-screen h-screen">
                <Navbar />
                <IndexRoutes />
            </div>
        </Router>
    );
};

export default App;
