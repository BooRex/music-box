import { createAction } from '@reduxjs/toolkit';

export const types = {
  LOGIN_START: 'LOGIN_START',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGIN_FAIL: 'LOGIN_FAIL'
};

export const login = createAction(types.LOGIN_START);
export const loginSuccess = createAction(types.LOGIN_SUCCESS);
export const loginFail = createAction(types.LOGIN_FAIL);
