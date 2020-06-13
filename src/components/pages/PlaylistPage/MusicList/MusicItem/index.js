import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as PropTypes from 'prop-types';
import PlayIcon from '../../../../common/Icons/PlayIcon';
import PauseIcon from '../../../../common/Icons/PauseIcon';
import SongInfo from '../../../../common/SongInfo';
import { pause, play } from '../../../../../store/player/actions';
import styled from 'styled-components';
import { getAudioDuration } from '../../../../../helpers';

const StyledMusicItem = styled.li`
  list-style: none;
  padding: 10px;
  border: 1px solid #fff;
  border-radius: 5px;
  display: flex;
  overflow: hidden;
  margin: 5px 20px 0 20px;
`;

const StyledTime = styled.div`
  color: #fff;
  display: inline-flex;
  align-items: center;
  overflow: hidden;
`

const MusicItem = props => {
  const {
    id,
    name,
    author,
    link,
    duration,

    onSelect,
    play,
    pause,
    isPlaying,
    itemToPlay
  } = props;

  const onPlay = () => {
    play();
    onSelect(id);
  };
  const onPause = () => {
    isPlaying
      ? pause()
      : play();
  };

  return (
    <StyledMusicItem>
      {itemToPlay && itemToPlay.id === id && isPlaying ? <PauseIcon onClick={onPause}/> : <PlayIcon onClick={onPlay}/>}

      <SongInfo name={name} author={author}/>

    </StyledMusicItem>
  );
};

const mapStateToProps = state => ({
  itemToPlay: state.player.itemToPlay,
  isPlaying: state.player.isPlaying,
});

const mapDispatchToProps = {
  play,
  pause
};

export default connect(mapStateToProps, mapDispatchToProps)(MusicItem);
