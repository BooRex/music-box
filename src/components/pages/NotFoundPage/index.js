import React, { memo } from 'react';
import { ROUTES } from '../../../constants/routes';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledNotFoundPage = styled.div`
  display: flex; 
  justify-content: center;
  height: 100vh;
  align-items: center;
`;

const linkStyles = {
  textDecoration: 'none',
  color: '#fff'
};

const NotFoundPage = () => (
  <StyledNotFoundPage>
    <Link to={ROUTES.PLAYLIST_PAGE} style={linkStyles}>PAGE NOT FOUND</Link>
  </StyledNotFoundPage>
);

export default memo(NotFoundPage);
