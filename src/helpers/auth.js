import PropTypes from 'prop-types';

export const authorize = auth => {
  const isAuthenticated = !!auth.token && !!auth.user.id;

  return [auth.user, isAuthenticated]
}

authorize.propTypes = {
  auth: PropTypes.objectOf({
    token: PropTypes.string,
    user: PropTypes.objectOf({
      id: PropTypes.number,
      email: PropTypes.string,
    }),
  })
}
