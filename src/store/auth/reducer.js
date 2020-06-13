import { types } from './actions';

const INIT = {
  token: '',
  user: {},
};

export const authReducer = (state = INIT, action) => {
  const {type, payload} = action;

  switch (type) {
    case types.LOGIN_SUCCESS:
      return {
        ...state,
        user: payload.user,
        token: payload.token
      };
    case types.LOGIN_FAIL:
      return INIT;
    default:
      return state;
  }
};
