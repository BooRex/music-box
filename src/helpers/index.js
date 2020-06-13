import history from '../history';

const getToken = () => {
  const state = localStorage.getItem('state');
  const serializedState = JSON.parse(state);

  if (serializedState.auth) {
    return serializedState.auth.user.token;
  } else {
    return '';
  }
};

export const request = async (options = {}) => {
  options.headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Authorization': `Bearer ${getToken()}`,
    ...options.headers,
  };

  try {
    const response = await fetch(options.url, options);
    const json = await response.json();

    if (!response.ok) {
      return new Error(JSON.stringify(json));
    }

    return json;
  } catch (error) {
    throw error;
  }
};

export const saveState = state => {
  try {
    localStorage.setItem('state', JSON.stringify(state));
  } catch (error) {
    console.error('Can\'t save state to localStorage!');
  }
};

// Selector of reducers, which we want to store in LocalStorage
export const stateToStorageSelector = state => ({
  auth: state.auth,
  version: state.version
});

export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('state');

    if (serializedState === null) {
      return {};
    }

    const state = JSON.parse(serializedState);

    saveState(state);

    return state;
  } catch (error) {
    return {};
  }
};

export const redirect = route => history.push(route);
