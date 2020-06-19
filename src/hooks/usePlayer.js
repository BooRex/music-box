import { useState } from 'react';

export const usePlayer = items => {
  const [musicToPlay, setMusicToPlay] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const onPlay = () => setIsPlaying(true);
  const onPause = () => setIsPlaying(false);
  const onPrev = () => {
    const currIndex = items.map(item => item.id).indexOf(musicToPlay.id);

    onSelectMusic(currIndex === 0
      ? items[items.length - 1]
      : items[currIndex - 1]
    );
  };
  const onNextOrEnd = () => {
    const currIndex = items.map(item => item.id).indexOf(musicToPlay.id);

    onSelectMusic(currIndex === items.length - 1
      ? items[0]
      : items[currIndex + 1]
    );
  };

  const onSelectMusic = music => {
    setMusicToPlay(items.find(item => item.id === music.id));
  };

  return {
    musicToPlay,
    isPlaying,
    onSelectMusic,
    onPlay,
    onPause,
    onPrev,
    onNextOrEnd,
  }
}
