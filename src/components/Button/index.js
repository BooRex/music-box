import React, { memo } from 'react';
import { StyledButton } from './styles';

export const Button = memo(({children, onClick, optional}) => (
  <StyledButton onClick={onClick} {...optional}>{children}</StyledButton>
));
