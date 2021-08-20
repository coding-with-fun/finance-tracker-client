import React from "react";
import { Link } from "react-router-dom";

const AuthComponent = ({ flag }) => {
    return (
        <div>
            <h1>Auth Component {flag ? "Sign Up" : "Sign In"}</h1>
            <Link to="/">Home</Link>
            {flag ? (
                <Link to="/signin">Sign In</Link>
            ) : (
                <Link to="/signup">Sign Up</Link>
            )}
        </div>
    );
};

export default AuthComponent;
