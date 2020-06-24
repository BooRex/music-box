import { call, put, takeLatest } from '@redux-saga/core/effects';
import { fetchMusicListFail, fetchMusicListSuccess, types } from './actions';
import { fetchMany } from '../../api/music';

function* fetchMusicList({payload}) {
  try {
    const response = yield call(fetchMany, payload);

    yield put(fetchMusicListSuccess(response));
  } catch (e) {
    yield put(fetchMusicListFail())
  }
}

export function* musicSaga() {
  yield takeLatest(types.FETCH_MUSIC_LIST_START, fetchMusicList);
}
