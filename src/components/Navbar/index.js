import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";

const Navbar = () => {
    const { isUserAuthenticated, handleUserAuthentication } =
        useContext(UserContext);

    const guestLinks = [
        {
            title: "Home",
            url: "/",
        },
        {
            title: "Sign In",
            url: "/signin",
        },
        {
            title: "Sign Up",
            url: "/signup",
        },
    ];

    const userLinks = [
        {
            title: "Home",
            url: "/",
        },
        {
            title: "Sign Out",
            url: "/",
            onClickHandler: () => {
                handleUserAuthentication();
            },
        },
    ];

    const navLinks = isUserAuthenticated ? userLinks : guestLinks;

    return (
        <div className="flex justify-between px-5 py-3">
            <div>Fi</div>

            <div className="flex justify-between">
                {navLinks.map((link) => {
                    return (
                        <div className="px-3">
                            <Link
                                to={link.url}
                                onClick={link.onClickHandler || null}
                            >
                                {link.title}
                            </Link>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Navbar;
