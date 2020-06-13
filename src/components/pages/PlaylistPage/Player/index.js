import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import * as PropTypes from 'prop-types';
import SongInfo from '../../../common/SongInfo';
import { connect } from 'react-redux';
import { play, pause, prev, next } from '../../../../store/player/actions';
import PlayIcon from '../../../common/Icons/PlayIcon';
import PauseIcon from '../../../common/Icons/PauseIcon';
import PrevIcon from '../../../common/Icons/PrevIcon';
import NextIcon from '../../../common/Icons/NextIcon';
import ProgressBar from './ProgressBar';

const StyledPlayer = styled.div`
  height: 20vh;
  color: #fff;
  background: #333
`;

const Player = ({itemToPlay, isPlaying, play, pause, prev, next}) => {
  const [time, setTime] = useState();
  const [duration, setDuration] = useState();

  const onAudioPlay = () => {
    const audio = document.getElementById('audio');

    const onTimeUpdate = () => setTime(audio.currentTime);
    const onDataLoaded = () => {
      setDuration(audio.duration);
      setTime(audio.currentTime);
    };

    audio.addEventListener('timeupdate', onTimeUpdate);
    audio.addEventListener('loadeddata', onDataLoaded);

    isPlaying ? audio.play() : audio.pause();

    return () => {
      audio.removeEventListener('timeupdate', onTimeUpdate);
      audio.removeEventListener('loadeddata', onDataLoaded);
    };
  };

  useEffect(onAudioPlay, [itemToPlay, isPlaying]);

  const mouseMove = (e) => {
   console.log('---', 'mouseMove');
  };

  const mouseUp = (e) => {
    console.log('---', 'mouseUp');
  };

  const mouseDown = (e) => {
    console.log('---', 'mouseDown');
  };

  return (
    <StyledPlayer>
      <audio src={itemToPlay.link} id="audio"/>

      <PrevIcon onClick={prev}/>
      {isPlaying
        ? <PlayIcon onClick={pause}/>
        : <PauseIcon onClick={play}/>
      }
      <NextIcon onClick={next}/>
      <SongInfo time={time}/>
      <div id="timeline" onClick={mouseMove} ref={(timeline) => { timeline = timeline }}>
        <div id="handle" onMouseDown={mouseDown} ref={(handle) => { handle = handle }} />
      </div>
      <ProgressBar duration={duration} time={time}/>
    </StyledPlayer>
  );
};

const mapStateToProps = state => ({
  isPlaying: state.player.isPlaying
});

const mapDispatchToProps = {
  play,
  pause,
  prev,
  next
};


export default connect(mapStateToProps, mapDispatchToProps)(Player);
