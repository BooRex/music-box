import reducer from './store/rootReducer';
import createSagaMiddleware from 'redux-saga';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { loadState, saveState, stateToStorageSelector } from './helpers';
import rootSaga from './store/rootSaga';

const devTools = process.env.NODE_ENV === 'development';

const sagaMiddleware = createSagaMiddleware();

const middleware = [
  ...getDefaultMiddleware({ thunk: false }),
  sagaMiddleware
];

export const store = configureStore({
  reducer,
  middleware,
  devTools,
  preloadedState: loadState()
});

store.subscribe(() => {
  saveState(stateToStorageSelector(store.getState()));
});

sagaMiddleware.run(rootSaga);
