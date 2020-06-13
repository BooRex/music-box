import { API_ROUTE } from '../constants/apiRoutes';
import { request } from '../helpers/index';

export const login = payload => request({
  url: API_ROUTE.AUTH.LOGIN,
  method: 'POST',
  body: JSON.stringify(payload)
});
