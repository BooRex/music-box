import React, { useContext, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import SongInfo from '../../../common/SongInfo';
import PlayIcon from '../../../common/Icons/PlayIcon';
import PauseIcon from '../../../common/Icons/PauseIcon';
import PrevIcon from '../../../common/Icons/PrevIcon';
import NextIcon from '../../../common/Icons/NextIcon';
import { PlaylistContext } from '../index';
import Volume from './Volume';
import Bar from './Bar';
import { getFormattedTime } from '../../../../helpers';

const StyledPlayer = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  color: #fff;
  background: #333;
`;

const StyledPlayerContent = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const StyledControls = styled.div`
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  line-height: 50px;
`;

const StyledTime = styled.div`
  line-height: 50px;
  margin-left: 20px;
  margin-right: 20px;
`;

const StyledSongInfo = styled.div`
  padding-left: 20px;
  text-align: center;
`;

const Player = props => {
  const {
    onPlay,
    onPause,
    onPrev,
    onNext
  } = props;

  const {isPlaying, musicToPlay} = useContext(PlaylistContext);

  const audio = useRef(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(100);
  const [volume, setVolume] = useState(1);

  const onAudioUpdate = () => {
    const track = audio.current;

    const onTimeUpdate = () => setCurrentTime(track.currentTime);
    const onEnded = () => onNext();
    const onDataLoaded = () => {
      setDuration(track.duration);
      setCurrentTime(track.currentTime);
      setVolume(track.volume);
    };

    const onKeyPress = e => e.code === 'Space'
      ? isPlaying
        ? onPause()
        : onPlay()
      : null;

    track.addEventListener('timeupdate', onTimeUpdate);
    track.addEventListener('loadeddata', onDataLoaded);
    track.addEventListener('ended', onEnded);
    window.addEventListener('keypress', onKeyPress);

    isPlaying ? track.play() : track.pause();

    return () => {
      track.removeEventListener('timeupdate', onTimeUpdate);
      track.removeEventListener('loadeddata', onDataLoaded);
      track.removeEventListener('ended', onEnded);
      window.removeEventListener('keypress', onKeyPress);
    };
  };

  useEffect(onAudioUpdate);

  const onChangeVolume = value => {
    setVolume(value);
    audio.current.volume = value;
  };
  const onChangeCurrentTime = value => {
    setCurrentTime(value);
    audio.current.currentTime = value;
  };

  const getTime = () => `${getFormattedTime(currentTime)} / ${getFormattedTime(duration)}`;

  return (
    <StyledPlayer>
      <audio ref={audio} src={musicToPlay.link}/>
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
          <NextIcon onClick={onNext}/>
          <StyledTime>{getTime()}</StyledTime>
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

export default Player;
