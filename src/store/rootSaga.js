import { authSaga } from './auth/saga';
import { fork } from '@redux-saga/core/effects';

export default function* rootSaga() {
  yield fork(authSaga);
}
