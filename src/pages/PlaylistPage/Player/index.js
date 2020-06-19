import React, { useContext } from 'react';
import { SongInfo } from '../../../components/SongInfo';
import PlayIcon from '../../../components/Icons/PlayIcon';
import PauseIcon from '../../../components/Icons/PauseIcon';
import PrevIcon from '../../../components/Icons/PrevIcon';
import NextIcon from '../../../components/Icons/NextIcon';
import { PlaylistContext } from '../index';
import { Volume } from './Volume';
import { Bar } from './Bar';
import { getFormattedTime } from '../../../helpers';
import { useAudio } from '../../../hooks/useAudio';
import { StyledControls, StyledPlayer, StyledPlayerContent, StyledSongInfo, StyledTime } from './styles';

export const Player = () => {
  const {
    musicToPlay,
    isPlaying,

    onPlay,
    onPause,
    onPrev,
    onNextOrEnd
  } = useContext(PlaylistContext);
  const {
    currentTime,
    duration,
    volume,

    onChangeVolume,
    onChangeCurrentTime,
  } = useAudio(
    musicToPlay.link,
    isPlaying,
    {onPlay, onPause, onNextOrEnd}
  );

  const renderTime = () => (
    <StyledTime>
      {getFormattedTime(currentTime)}&nbsp;/&nbsp;
      {getFormattedTime(duration)}
    </StyledTime>
  );

  return (
    <StyledPlayer>
      <Bar
        currentTime={currentTime}
        duration={duration}
        onChange={onChangeCurrentTime}
      />
      <StyledPlayerContent>
        <StyledControls>
          <PrevIcon onClick={onPrev}/>
          {isPlaying
            ? <PauseIcon onClick={onPause}/>
            : <PlayIcon onClick={onPlay}/>
          }
          <NextIcon onClick={onNextOrEnd}/>
          {renderTime()}
        </StyledControls>

        <StyledSongInfo>
          <SongInfo
            name={musicToPlay.name}
            author={musicToPlay.author}
          />
        </StyledSongInfo>

        <Volume
          volume={volume}
          onChangeVolume={onChangeVolume}
        />
      </StyledPlayerContent>
    </StyledPlayer>
  );
};
