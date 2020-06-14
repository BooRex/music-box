import React from 'react';
import { Router } from 'react-router-dom';
import { connect } from 'react-redux';
import history from '../../../history';
import { routing } from '../../../helpers/routing.js';
import { authorize } from '../../../helpers/auth.js';
import PageWrapper from '../../PageWrapper';

const App = ({auth}) => {
  const [user, isAuthenticated] = authorize(auth);
  const routes = routing(user, isAuthenticated);

  return (
    <Router history={history}>
      <PageWrapper>{routes}</PageWrapper>
    </Router>
  );
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, null)(App);
