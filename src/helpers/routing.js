import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { ROUTES } from '../constants/routes';
import PlaylistPage from '../components/pages/PlaylistPage';
import NotFoundPage from '../components/pages/NotFoundPage';
import LoginPage from '../components/pages/LoginPage';

export const routing = (user, isAuthenticated = false) =>
  isAuthenticated
    ? (
      <Switch>
        <Route exact path={ROUTES.PLAYLIST_PAGE} component={PlaylistPage}/>
        <Route path='*' component={NotFoundPage}/>
      </Switch>
    ) : (
      <Switch>
        <Route exact path={ROUTES.LOGIN_PAGE} component={LoginPage}/>
        <Route path='*'>
          <Redirect to={ROUTES.LOGIN_PAGE}/>
        </Route>
      </Switch>
    );

