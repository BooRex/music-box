import React, { memo } from 'react';
import { StyledSongInfo, StyledSongName } from './styles';

export const SongInfo = memo(({name, author}) => (
  <StyledSongInfo>
    <StyledSongName>{name}</StyledSongName>
    <div>{author}</div>
  </StyledSongInfo>
));
