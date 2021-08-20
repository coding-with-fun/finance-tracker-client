import React, { useEffect, useRef } from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import PageNotFound from "../../pages/404";
import AuthPage from "../../pages/AuthPage";
import HomePage from "../../pages/HomePage";

const IndexRoutes = () => {
    const isUserAuthenticated = useRef();
    const location = useLocation();
    useEffect(() => {
        isUserAuthenticated.current = Boolean(
            localStorage.getItem("ftc-userToken")
        );
        console.log("object >> ", isUserAuthenticated.current);
    }, [location]);

    return (
        <Switch>
            <Route exact path="/" component={HomePage} />

            {isUserAuthenticated.current ? (
                <Switch></Switch>
            ) : (
                <Switch>
                    <Route exact path="/signin">
                        <AuthPage flag={0} />
                    </Route>
                    <Route exact path="/signup">
                        <AuthPage flag={1} />
                    </Route>
                </Switch>
            )}

            <Route path="*" component={PageNotFound} />
        </Switch>
    );
};

export default IndexRoutes;
