import { TextField } from "@material-ui/core";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";

const AuthComponent = ({ flag }) => {
    const { handleUserAuthentication } = useContext(UserContext);

    return (
        <div className="mt-7">
            <h1 className="text-center text-5xl">
                {flag ? "Sign Up" : "Sign In"}
            </h1>

            <div className="flex justify-center items-center flex-col">
                <div className="my-5">
                    <div className="py-3">
                        <TextField
                            required
                            id="outlined-required"
                            label="Username"
                            size="small"
                            variant="outlined"
                            className="w-64"
                        />
                    </div>

                    <div className="py-3">
                        <TextField
                            required
                            id="outlined-required"
                            label="Password"
                            size="small"
                            type="password"
                            variant="outlined"
                            className="w-64"
                        />
                    </div>
                </div>

                <Link
                    to="/"
                    onClick={() => {
                        handleUserAuthentication("ABC");
                    }}
                >
                    <div className="border-2 border-blue-400 cursor-pointer rounded px-5 py-2 hover:bg-blue-100 mb-2">
                        {flag ? "Sign Up" : "Sign In"}
                    </div>
                </Link>

                <Link to={flag ? "/signin" : "signup"}>
                    <div className="bg-blue-400 text-white cursor-pointer rounded px-5 py-2.5 hover:bg-blue-500">
                        {flag ? "Sign In" : "Sign Up"}
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default AuthComponent;
