import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PublicRoute = ({component: Component,  ...rest}) => {
    let login = localStorage.getItem("login")
    return (
        <Route {...rest} render={props => (
            login  ?
                <Redirect to="/homepage" />
            : <Component {...props} />
        )} />
    );
};
export default PublicRoute;