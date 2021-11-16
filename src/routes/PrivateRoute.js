import React, { Component }  from 'react';
import { Route, Redirect } from "react-router-dom";
import UseAuth from "../containers/Login/auth/useAuth";

//const user = null;
//const user = {id: 1, username: "Robert"}

export default function PrivateRoute({ component: Component, ...rest }) {

    const auth = UseAuth();

    return (
        <Route {...rest}>
            {auth.isLogged() ? (<Component />):(<Redirect to="/login"/>) }
        </Route>

    );

}

