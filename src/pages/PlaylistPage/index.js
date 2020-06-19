import React from 'react';
import { MusicList } from './MusicList';
import { Player } from './Player';
import { usePlayer } from '../../hooks/usePlayer';
import { useSelector } from 'react-redux';

export const PlaylistContext = React.createContext(null);

export const PlaylistPage = () => {
  const items = useSelector(state => state.music.items);

  const {
    musicToPlay,
    isPlaying,

    onSelectMusic,
    onPlay,
    onPause,
    onPrev,
    onNextOrEnd
  } = usePlayer(items);

  return (
    <PlaylistContext.Provider value={{
      isPlaying,
      musicToPlay,

      onPlay,
      onPause,
      onPrev,
      onNextOrEnd
    }}>
      <MusicList
        items={items}
        onSelectMusic={onSelectMusic}
      />
      {musicToPlay ? (
        <Player/>
      ) : null}
    </PlaylistContext.Provider>
  );
};
