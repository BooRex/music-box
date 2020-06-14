import React, { useContext } from 'react';
import MusicItem from './MusicItem';
import styled from 'styled-components';
import { PlaylistContext } from '../index';

const StyledMusicList = styled.ul`
  margin: 0;
  padding: 0;
  overflow-y: auto;
  height: ${({isPlaying}) => isPlaying 
    ? 'calc(100vh - 108px)' 
    : '100vh'};
  position: relative;
  
  &::-webkit-scrollbar {
    width: 10px;
  }
  
  &::-webkit-scrollbar-thumb {
    background: #999;
    border-radius: 5px;
  }
`;

const MusicList = ({items, onSelectMusic}) => {
  const {isPlaying} = useContext(PlaylistContext);

  return (
    <StyledMusicList isPlaying={isPlaying}>
      {items.map(item =>
        <MusicItem
          key={item.id}
          item={item}
          onSelect={onSelectMusic}
        />
      )}
    </StyledMusicList>
  );
};

export default MusicList;
