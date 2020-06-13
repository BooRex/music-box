import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { ROUTES } from 'constants/routes';
import DashboardPage from 'components/pages/Admin/DashboardPage';
import PageNotFoundPage from 'components/pages/PageNotFoundPage';
import PageContent from 'components/common/PageWrapper/PageContent';
import LoginPage from 'components/pages/Auth/LoginPage';
import Navigation from 'components/common/Navigation';

const routeList = [
  {
    Component: DashboardPage,
    path: ROUTES.ADMIN.DASHBOARD,
  },
  {
    Component: PageNotFoundPage,
    path: '*',
  }
];

export const routing = (user, isAuthenticated = false, isAdmin = false) => {
  if (isAuthenticated) {
    return (
      <PageContent>
        <Navigation/>
        <Switch>
          {routeList.map(({Component, path, exact = true}, idx) =>
            <Route key={idx} exact={exact} path={path}>
              <Component user={user}/>
            </Route>
          )}
        </Switch>
      </PageContent>
    );
  }

  return (
    <Switch>
      <Route exact path={ROUTES.GENERAL.LOGIN_PAGE} component={LoginPage}/>
      <Route path='*'>
        <Redirect to={ROUTES.GENERAL.LOGIN_PAGE}/>
      </Route>
    </Switch>
  );
};
