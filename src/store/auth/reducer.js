import { loginFail, loginSuccess } from './actions';
import { createReducer } from '@reduxjs/toolkit';

const INIT = {
  token: '',
  user: {},
};

export const authReducer = createReducer(INIT, {
  [loginSuccess]: (state, {payload}) => ({
    ...state,
    user: payload.user,
    token: payload.token
  }),
  [loginFail]: () => INIT
});
