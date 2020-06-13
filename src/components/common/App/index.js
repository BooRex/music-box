import React from 'react';
import * as PropTypes from 'prop-types';
import { Router } from 'react-router-dom';
import { connect } from 'react-redux';
import history from '../../../history';
import { routing } from '../../../helpers/routing.js';
import { authorize } from '../../../helpers/auth.js';
import PageWrapper from '../../PageWrapper';

const App = ({auth}) => {
  const [user, isAuthenticated] = authorize(auth);
  const routes = routing(user, true);

  return (
    <Router history={history}>
      <PageWrapper>{routes}</PageWrapper>
    </Router>
  );
};

const mapStateToProps = state => ({
  auth: state.auth
});

App.propTypes = {
  auth: PropTypes.object
};

export default connect(mapStateToProps, null)(App);
