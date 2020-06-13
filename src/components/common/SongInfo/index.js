import React from 'react';
import * as PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  color: #fff;
  margin-left: 10px;
  display: flex;
  flex-direction: column;
  flex: 1;
  align-self: center;
  min-width: 1px;
`;

const StyledSongName = styled.div`
  font-weight: 'bold',
`;

const StyledAuthor = styled.div`
 
`;

const SongInfo = ({name, author}) => (
  <StyledWrapper>
    <StyledSongName>{name}</StyledSongName>
    <StyledAuthor>{author}</StyledAuthor>
  </StyledWrapper>
);

export default SongInfo;
