import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";

const HomeComponent = () => {
    const { handleUserAuthentication } = useContext(UserContext);

    return (
        <div>
            <h1>Home Component</h1>
            <Link
                to="/"
                onClick={() => {
                    handleUserAuthentication();
                }}
            >
                Sign Out
            </Link>
        </div>
    );
};

export default HomeComponent;
