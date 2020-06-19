import React from 'react';
import { Router } from 'react-router-dom';
import { useSelector } from 'react-redux';
import history from '../../history';
import { authorize } from '../../helpers/auth.js';
import { Template } from '../Template';
import { PrivateRoute } from '../PrivateRoute';
import { ROUTES } from '../../constants/routes';
import { PlaylistPage } from '../../pages/PlaylistPage';
import { Route, Switch } from 'react-router';
import { LoginPage } from '../../pages/LoginPage';
import { NotFoundPage } from '../../pages/NotFoundPage';

export const AuthContext = React.createContext({
  user: {},
  isAuthenticated: false
});

export const App = () => {
  const auth = useSelector(state => state.auth);
  const [user, isAuthenticated] = authorize(auth);

  return (
    <AuthContext.Provider value={{isAuthenticated, user}}>
      <Router history={history}>
        <Template>
          <Switch>
            <PrivateRoute exact path={ROUTES.PLAYLIST_PAGE} component={PlaylistPage}/>
            <Route exact path={ROUTES.LOGIN_PAGE} component={LoginPage}/>
            <Route path='*' component={NotFoundPage}/>
          </Switch>
        </Template>
      </Router>
    </AuthContext.Provider>
  );
};
