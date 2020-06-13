export const types = {
  PLAY: 'PLAY',
  PAUSE: 'PAUSE',
  PREVIOUS: 'PREVIOUS',
  NEXT: 'NEXT',
  SET_ITEM_TO_PLAY: 'SET_ITEM_TO_PLAY'
};

export const setItemToPlay = payload => ({
  type: types.SET_ITEM_TO_PLAY,
  payload
});
export const play = payload => ({
  type: types.PLAY,
  payload
});

export const pause = payload => ({
  type: types.PAUSE,
  payload
});

export const next = payload => ({
  type: types.NEXT,
  payload
});

export const prev = payload => ({
  type: types.PREVIOUS,
  payload
});
