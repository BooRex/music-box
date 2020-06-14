import { call } from '@redux-saga/core/effects';

const delay = () => new Promise(resolve => setTimeout(resolve, 2000));

//Симуляция реального запроса
export function* login(payload) {
  yield call(delay);

  return {
    token: 'kdnas743h4d3hfh7348fh34f',
    user: {
      id: +new Date(),
      email: payload.email,
    }
  };
}
