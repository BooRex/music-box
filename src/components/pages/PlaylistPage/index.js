import React from 'react';
import MusicList from './MusicList';
import Player from './Player';
import { connect } from 'react-redux';
import { usePlayer } from '../../../hooks/usePlayer';

export const PlaylistContext = React.createContext(null);

const PlaylistPage = ({items}) => {
  const {
    musicToPlay,
    isPlaying,

    onSelectMusic,
    onPlay,
    onPause,
    onPrev,
    onNext
  } = usePlayer(items);

  return (
    <PlaylistContext.Provider value={{
      isPlaying,
      musicToPlay,

      onPlay,
      onPause
    }}>
      <MusicList
        items={items}
        onSelectMusic={onSelectMusic}
      />
      {musicToPlay ? (
        <Player
          onPlay={onPlay}
          onPause={onPause}
          onPrev={onPrev}
          onNext={onNext}
        />
      ) : null}
    </PlaylistContext.Provider>
  );
};


const mapStateToProps = state => ({
  items: state.music.items
});

export default connect(mapStateToProps, null)(PlaylistPage);
