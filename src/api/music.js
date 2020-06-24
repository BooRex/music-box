import { request } from '../helpers';
import { API_ROUTE } from '../constants/apiRoutes';

export const fetchMany = payload => request({
  url: API_ROUTE.MUSIC.FETCH_MANY(payload),
  method: 'GET'
});
