export const types = {
  LOGIN_START: 'LOGIN_START',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGIN_FAIL: 'LOGIN_FAIL'
};

export const login = payload => ({
  type: types.LOGIN_START,
  payload
});
export const loginSuccess = payload => ({
  type: types.LOGIN_SUCCESS,
  payload
});
export const loginFail = payload => ({
  type: types.LOGIN_FAIL,
  payload
});
