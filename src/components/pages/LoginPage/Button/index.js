import React, { memo } from 'react';
import * as PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledButton = styled.button`
  width: 300px;
  margin-top: 40px;
  height: 50px;
  background: #fff;
  border-radius: 15px;
  border: 1px solid #333;
  color: #333;
  font-weight: bold;
  
  &:hover {
    background: #eee
  }
`;

const Button = ({text, onClick, optional}) => (
  <StyledButton onClick={onClick} {...optional}>{text}</StyledButton>
);

Button.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
  optional: PropTypes.object,
};

export default memo(Button);
