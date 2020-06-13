import React from 'react';
import MusicList from './MusicList';
import Player from './Player';
import { connect } from 'react-redux';

const PlaylistPage = ({items, itemToPlay}) => {
  return (
    <div>
      <MusicList/>
      {itemToPlay ? <Player itemToPlay={itemToPlay}/> : ''}
    </div>
  );
};


const mapStateToProps = state => ({
  itemToPlay: state.player.itemToPlay
});

export default connect(mapStateToProps, null)(PlaylistPage);
