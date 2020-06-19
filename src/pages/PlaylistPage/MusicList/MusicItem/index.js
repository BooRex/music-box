import React, { useContext } from 'react';
import PlayIcon from '../../../../components/Icons/PlayIcon';
import PauseIcon from '../../../../components/Icons/PauseIcon';
import { SongInfo } from '../../../../components/SongInfo';
import { PlaylistContext } from '../../index';
import { StyledDuration, StyledMusicItem, StyledSongInfo } from './styles';

export const MusicItem = ({item, onSelect}) => {
  const {isPlaying, musicToPlay, onPlay, onPause} = useContext(PlaylistContext);

  const onPlayMusic = () => {
    onSelect(item);
    onPlay();
  };

  return (
    <StyledMusicItem isPlaying={isPlaying}>
      {musicToPlay && musicToPlay.id === item.id && isPlaying
        ? <PauseIcon onClick={onPause}/>
        : <PlayIcon onClick={onPlayMusic}/>
      }

      <StyledSongInfo>
        <SongInfo name={item.name} author={item.author}/>
      </StyledSongInfo>
      <StyledDuration>
        {item.duration}
      </StyledDuration>

    </StyledMusicItem>
  );
};
