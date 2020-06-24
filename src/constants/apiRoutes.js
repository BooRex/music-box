const API_URL = 'http://localhost:4000';

export const API_ROUTE = {
  LOGIN: `${API_URL}/auth/login`,
  MUSIC: {
    FETCH_MANY: payload => `${API_URL}/music${payload}`
  }
};
