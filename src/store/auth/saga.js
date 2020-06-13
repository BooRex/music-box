import { call, put, takeLatest } from '@redux-saga/core/effects';
import { loginFail, loginSuccess, types } from './actions';
import { redirect } from '../../helpers/index';
import { login } from '../../api/auth';
import { ROUTES } from '../../constants/routes';

function* loginUser({payload}) {
  try {
    const response = yield call(login , payload);

    yield put(loginSuccess({...response.data}));

    yield redirect(ROUTES.ADMIN.DASHBOARD);
  } catch (e) {
    yield put(loginFail())
  }
}

  export function* authSaga() {
    yield takeLatest(types.LOGIN_START, loginUser);
  }
