export const types = {
  FETCH_MUSIC_LIST_START: 'FETCH_MUSIC_LIST_START',
  FETCH_MUSIC_LIST_SUCCESS: 'FETCH_MUSIC_LIST_SUCCESS',
  FETCH_MUSIC_LIST_FAIL: 'FETCH_MUSIC_LIST_FAIL',
};

export const fetchMusicListStart = payload => ({
  type: types.FETCH_MUSIC_LIST_START,
  payload
});

export const fetchMusicListSuccess = payload => ({
  type: types.FETCH_MUSIC_LIST_SUCCESS,
  payload
});

export const fetchMusicListFail = payload => ({
  type: types.FETCH_MUSIC_LIST_FAIL,
  payload
});
