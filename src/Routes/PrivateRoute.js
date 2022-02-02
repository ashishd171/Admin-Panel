import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({component: Component, ...rest}) => {
    let login = localStorage.getItem("login")
    return (
        <Route {...rest} render={props => (
            login ?
                <Component {...props} {...rest}/>
            : <Redirect to="/login" />
        )} />
    );
};
export default PrivateRoute;