import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";

const AuthComponent = ({ flag }) => {
    const { handleUserAuthentication } = useContext(UserContext);

    return (
        <div>
            <h1>Auth Component {flag ? "Sign Up" : "Sign In"}</h1>
            <Link
                to="/"
                onClick={() => {
                    handleUserAuthentication("ABC");
                }}
            >
                Home
            </Link>
            {flag ? (
                <Link to="/signin">Sign In</Link>
            ) : (
                <Link to="/signup">Sign Up</Link>
            )}
        </div>
    );
};

export default AuthComponent;
