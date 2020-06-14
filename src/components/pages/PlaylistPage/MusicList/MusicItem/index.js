import React, { useContext } from 'react';
import PlayIcon from '../../../../common/Icons/PlayIcon';
import PauseIcon from '../../../../common/Icons/PauseIcon';
import SongInfo from '../../../../common/SongInfo';
import styled from 'styled-components';
import { PlaylistContext } from '../../index';

const StyledMusicItem = styled.li`
  list-style: none;
  border: 1px solid #fff;
  border-radius: 5px;
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  margin: 10px;
  
  &:hover {
    background: #333;
  }
`;
const StyledSongInfo = styled.div`
  padding-left: 20px;
`;
const StyledDuration = styled.div`
  position: absolute;
  right: 0;
  line-height: 50px;
  color: #fff;
  text-align: right;
  font-weight: bold;
  margin-left: 20px;
  margin-right: 40px;
`;

const MusicItem = ({item, onSelect}) => {
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

export default MusicItem;
