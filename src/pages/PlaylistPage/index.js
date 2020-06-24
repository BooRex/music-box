import React, { useEffect } from 'react';
import { MusicList } from './MusicList';
import { Player } from './Player';
import { usePlayer } from '../../hooks/usePlayer';
import { SearchBar } from './SearchBar';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMusicListStart } from '../../store/music/actions';

export const PlaylistContext = React.createContext(null);

export const PlaylistPage = () => {
  const items = useSelector(state => state.music.items);
  const dispatch = useDispatch();

  const {
    musicToPlay,
    isPlaying,

    onSelectMusic,
    onPlay,
    onPause,
    onPrev,
    onNextOrEnd
  } = usePlayer(items);

  const onMount = () => {
    dispatch(fetchMusicListStart(`?_limit=10`));
  };

  useEffect(onMount, []);

  return (
    <PlaylistContext.Provider value={{
      isPlaying,
      musicToPlay,

      onPlay,
      onPause,
      onPrev,
      onNextOrEnd
    }}>
      <SearchBar/>
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
