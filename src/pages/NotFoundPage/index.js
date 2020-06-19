import React, { memo } from 'react';
import { ROUTES } from '../../constants/routes';
import { Link } from 'react-router-dom';
import { StyledNotFoundPage } from './styles';

export const NotFoundPage = memo(() => (
  <StyledNotFoundPage>
    <Link to={ROUTES.PLAYLIST_PAGE}>PAGE NOT FOUND</Link>
  </StyledNotFoundPage>
));
