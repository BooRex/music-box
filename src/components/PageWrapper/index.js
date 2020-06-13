import React from 'react';
import styled from 'styled-components';

const StyledPageWrapper = styled.div`
  height: 100vh;
  background: #222;
`;

const PageWrapper = ({children}) => (
  <StyledPageWrapper>{children}</StyledPageWrapper>
);

export default PageWrapper;
