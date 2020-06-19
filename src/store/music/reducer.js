import { fetchMusicListSuccess } from './actions';
import { createReducer } from '@reduxjs/toolkit';

const MUSIC = [
  {
    id: 1,
    name: 'Demons',
    author: 'Imagine Dragons',
    duration: '2:57',
    link: 'https://cdn.drivemusic.me/dl/online/JIO-jEltEIJ9huwU4yvNWA/1592099342/download_music/2013/12/imagine-dragons-demons.mp3'
  },
  {
    id: 2,
    name: 'On Top Of The World',
    author: 'Imagine Dragons',
    duration: '3:12',
    link: 'https://cdn.drivemusic.me/dl/online/Hki0TxEw4N2IJiy3T-ZYpw/1592099342/download_music/2014/01/imagine-dragons-on-top-of-the-world.mp3'
  },
  {
    id: 3,
    name: 'Monster',
    author: 'Imagine Dragons',
    duration: '4:10',
    link: 'https://cdn.drivemusic.me/dl/online/xXo3G1diy-IIFokRiXCLKw/1592099342/download_music/2013/09/imagine-dragons-monster.mp3'
  },
  {
    id: 4,
    name: 'The Nights',
    author: 'Avicii',
    duration: '2:53',
    link: 'https://cdn.drivemusic.me/dl/online/jdUFjSF_Lqm1bI7TTpjGFg/1592161855/download_music/2014/09/avicii-the-nights.mp3'
  },
  {
    id: 5,
    name: 'Alone',
    author: 'Alan Walker',
    duration: '2:40',
    link: 'https://cdn.drivemusic.me/dl/online/kQmMZvg8eePm77oLG90nzw/1592161951/download_music/2016/12/alan-walker-alone.mp3'
  },
  {
    id: 6,
    name: 'Ignite',
    author: 'Alan Walker',
    duration: '3:30',
    link: 'https://cdn.drivemusic.me/dl/online/EiY_-CMu5ievwaqfQ5EyFA/1592161951/download_music/2018/05/k-391-feat.-alan-walker-julie-bergan-seungri-ignite.mp3'
  },
  {
    id: 7,
    name: 'Play',
    author: 'Alan Walker',
    duration: '2:36',
    link: 'https://cdn.drivemusic.me/dl/online/kC9-ccHOB0IGaaoooPIuNg/1592161951/download_music/2019/10/k-391-alan-walker-tungevaag-mangoo-play-niya-alan-walker-remix.mp3'
  },
  {
    id: 8,
    name: 'Walk Away',
    author: 'LVNDSCAPE',
    duration: '3:45',
    link: 'https://cdn.drivemusic.me/dl/online/TyFF8WpaZeqfL_YBcsPNSA/1592162159/download_music/2017/04/lvndscape-feat.-kaptan-walk-away.mp3'
  },
  {
    id: 9,
    name: 'Shape Of You',
    author: 'Ed Sheeran',
    duration: '3:53',
    link: 'https://cdn.drivemusic.me/dl/online/rPF47P1eFS3DKFDsBRH4Eg/1592162976/download_music/2017/01/ed-sheeran-shape-of-you.mp3'
  }
];

const INIT = {
  items: MUSIC
};

export const musicReducer = createReducer(INIT, {
  [fetchMusicListSuccess]: (state, {payload}) => ({...state, items: payload}),
});
