import React from 'react';
import { render } from 'react-dom';
import { configureStore } from './store';
import { loadState } from './helpers';
import { Provider } from 'react-redux';
import rootReducer from './store/rootReducer';
import rootSaga from './store/rootSaga';
import App from './components/common/App';

export const store = configureStore(
  rootReducer,
  rootSaga,
  loadState()
);

render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.querySelector('#root')
);
