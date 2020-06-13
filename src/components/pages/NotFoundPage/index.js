import React, { memo } from 'react';
import { ROUTES } from '../../../constants/routes';
import { Link } from 'react-router-dom';

const styles = {
  wrapper: {
    display: 'flex',
    justifyContent: 'center',
    height: '100vh',
    alignItems: 'center'
  },
  text: {
    textDecoration: 'none',
    color: '#fff'
  }
};

const NotFoundPage = () => (
  <div style={styles.wrapper}>
    <Link to={ROUTES.PLAYLIST_PAGE} style={styles.text}>PAGE NOT FOUND</Link>
  </div>
);

export default memo(NotFoundPage);
