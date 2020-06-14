import React from 'react';
import styled from 'styled-components';

const StyledSongInfo = styled.div`
  color: #fff;
  line-height: 25px;
  display: flex;
  flex-direction: column;
  flex: 1;
  align-self: center;
`;

const StyledSongName = styled.div`
  font-weight: bold;
`;

const SongInfo = ({name, author}) => {
  return <StyledSongInfo>
    <StyledSongName>{name}</StyledSongName>
    <div>{author}</div>
  </StyledSongInfo>;
};

export default React.memo(SongInfo);
