import React from "react";
import { Link } from "react-router-dom";

const GuestComponent = () => {
    return (
        <div>
            <h1>Guest Component</h1>
            <Link to="/signin">Sign In</Link>
        </div>
    );
};

export default GuestComponent;
