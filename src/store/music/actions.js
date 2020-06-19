import { createAction } from '@reduxjs/toolkit';

export const types = {
  FETCH_MUSIC_LIST_START: 'FETCH_MUSIC_LIST_START',
  FETCH_MUSIC_LIST_SUCCESS: 'FETCH_MUSIC_LIST_SUCCESS',
  FETCH_MUSIC_LIST_FAIL: 'FETCH_MUSIC_LIST_FAIL',
};

export const fetchMusicListStart = createAction(types.FETCH_MUSIC_LIST_START);
export const fetchMusicListSuccess = createAction(types.FETCH_MUSIC_LIST_SUCCESS);
export const fetchMusicListFail = createAction(types.FETCH_MUSIC_LIST_FAIL);
