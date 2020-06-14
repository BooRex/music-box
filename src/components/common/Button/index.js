import React, { memo } from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  width: 300px;
  margin-top: 40px;
  margin-bottom: 40px;
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

export default memo(Button);
