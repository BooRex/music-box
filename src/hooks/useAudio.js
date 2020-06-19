import { useEffect, useState } from 'react';

export const useAudio = (link, isPlaying, events) => {
  const [audio] = useState(new Audio(link));
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(100);
  const [volume, setVolume] = useState(1);

  const onUpdate = () => {
    const onTimeUpdate = () => setCurrentTime(audio.currentTime);
    const onDataLoaded = () => {
      setDuration(audio.duration);
      setCurrentTime(audio.currentTime);
      setVolume(audio.volume);
    };

    const onKeyPress = e => e.code === 'Space'
      ? isPlaying
        ? events.onPause()
        : events.onPlay()
      : null;

    audio.addEventListener('timeupdate', onTimeUpdate);
    audio.addEventListener('loadeddata', onDataLoaded);
    audio.addEventListener('ended', events.onEnd);
    window.addEventListener('keypress', onKeyPress);

    isPlaying ? audio.play() : audio.pause();

    return () => {
      audio.removeEventListener('timeupdate', onTimeUpdate);
      audio.removeEventListener('loadeddata', onDataLoaded);
      audio.removeEventListener('ended', events.onEnd);
      window.removeEventListener('keypress', onKeyPress);
    };
  };

  useEffect(onUpdate);

  const onChangeVolume = value => {
    setVolume(value);
    audio.volume = value;
  };
  const onChangeCurrentTime = value => {
    setCurrentTime(value);
    audio.currentTime = value;
  };

  return {
    currentTime,
    duration,
    volume,

    onChangeVolume,
    onChangeCurrentTime,
  };
};
