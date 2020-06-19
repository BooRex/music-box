import { Redirect, Route } from 'react-router';
import { AuthContext } from '../App';
import { ROUTES } from '../../constants/routes';
import React, { useContext } from 'react';

export const PrivateRoute = ({component: Component, ...rest}) => {
  const {isAuthenticated} = useContext(AuthContext);

  return (
    <Route {...rest} render={props => isAuthenticated ? (
      <Component {...props}/>
    ): (
      <Redirect to={ROUTES.LOGIN_PAGE}/>
    )}/>
  );
};
