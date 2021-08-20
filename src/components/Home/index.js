import React from "react";
import { Link } from "react-router-dom";

const HomeComponent = () => {
    return (
        <div>
            <h1>Home Component</h1>
            <Link to="/signin">Sign In</Link>
        </div>
    );
};

export default HomeComponent;
