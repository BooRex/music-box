import { fetchMusicListSuccess } from './actions';
import { createReducer } from '@reduxjs/toolkit';

const INIT = {
  items: []
};

export const musicReducer = createReducer(INIT, {
  [fetchMusicListSuccess]: (state, {payload}) => ({...state, items: payload}),
});
