import React, { useContext } from "react";
import GuestComponent from "../components/Guest";
import HomeComponent from "../components/Home";
import { UserContext } from "../contexts/UserContext";

const HomePage = () => {
    const { isUserAuthenticated } = useContext(UserContext);

    return isUserAuthenticated ? <HomeComponent /> : <GuestComponent />;
};

export default HomePage;
