import React, { useContext } from 'react';
import { MusicItem } from './MusicItem';
import { PlaylistContext } from '../index';
import { StyledMusicList } from './styles';

export const MusicList = ({items, onSelectMusic}) => {
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
