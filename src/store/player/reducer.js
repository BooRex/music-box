import { types } from './actions';

const MUSIC = [
  {
    id: 1,
    name: 'Demons',
    author: 'Imagine Dragons',
    link: 'https://cdn.drivemusic.me/dl/online/JIO-jEltEIJ9huwU4yvNWA/1592099342/download_music/2013/12/imagine-dragons-demons.mp3'
  },
  {
    id: 2,
    name: 'On Top Of The World',
    author: 'Imagine Dragons',
    link: 'https://cdn.drivemusic.me/dl/online/Hki0TxEw4N2IJiy3T-ZYpw/1592099342/download_music/2014/01/imagine-dragons-on-top-of-the-world.mp3'
  },
  {
    id: 3,
    name: 'Monster',
    author: 'Imagine Dragons',
    link: 'https://cdn.drivemusic.me/dl/online/xXo3G1diy-IIFokRiXCLKw/1592099342/download_music/2013/09/imagine-dragons-monster.mp3'
  },

];

const INIT = {
  items: MUSIC,
  itemToPlay: null,
  isPlaying: false,
};

const getPrev = state => {
  const currIndex = state.items.map(item => item.id).indexOf(state.itemToPlay.id);

  return currIndex === 0
    ? state.itemToPlay
    : state.items[currIndex - 1];
};

const getNext = state => {
  const currIndex = state.items.map(item => item.id).indexOf(state.itemToPlay.id);

  return currIndex === state.items.length - 1
    ? state.itemToPlay
    : state.items[currIndex + 1];
};

export const playerReducer = (state = INIT, action) => {
  const {type, payload} = action;

  switch (type) {
    case types.SET_ITEM_TO_PLAY:
      return {...state, itemToPlay: {...state.items.find(item => item.id === payload)}};
    case types.PLAY:
      return {...state, isPlaying: true};
    case types.PAUSE:
      return {...state, isPlaying: false};
    case types.PREVIOUS:
      return {...state, itemToPlay: getPrev(state)};
    case types.NEXT:
      return {...state, itemToPlay: getNext(state)};
    default:
      return state;
  }
};
