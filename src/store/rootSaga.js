import { authSaga } from './auth/saga';
import { musicSaga } from './music/saga';
import { fork } from '@redux-saga/core/effects';

export default function* rootSaga() {
  yield fork(authSaga);
  yield fork(musicSaga);
}
