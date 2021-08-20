import React from "react";
import AuthComponent from "../components/Auth";

const AuthPage = ({ flag }) => {
    return (
        <div>
            <AuthComponent flag={flag} />
        </div>
    );
};

export default AuthPage;
