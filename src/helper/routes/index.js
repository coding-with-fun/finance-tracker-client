import React, { useContext, useEffect } from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";
import PageNotFound from "../../pages/404";
import AuthPage from "../../pages/AuthPage";
import HomePage from "../../pages/HomePage";

const IndexRoutes = () => {
    const { isUserAuthenticated, handleUserAuthentication } =
        useContext(UserContext);
    const location = useLocation();

    useEffect(() => {
        const token = localStorage.getItem("ftc-userToken");
        handleUserAuthentication(token);

        // eslint-disable-next-line
    }, [location]);

    return (
        <Switch>
            <Route exact path="/" component={HomePage} />

            {isUserAuthenticated ? (
                <Switch>
                    <Route path="*" component={PageNotFound} />
                </Switch>
            ) : (
                <Switch>
                    <Route exact path="/signin">
                        <AuthPage flag={0} />
                    </Route>
                    <Route exact path="/signup">
                        <AuthPage flag={1} />
                    </Route>
                    <Route path="*" component={PageNotFound} />
                </Switch>
            )}
        </Switch>
    );
};

export default IndexRoutes;
