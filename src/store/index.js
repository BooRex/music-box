import * as serviceWorker from '../serviceWorker';
import createSagaMiddleware from 'redux-saga';
import { applyMiddleware, compose, createStore } from 'redux';
import { saveState, stateToStorageSelector } from '../helpers';
import { routerMiddleware } from 'react-router-redux';
import history from '../history';

export const configureStore = (rootReducer, rootSaga, initialState) => {
  const sagaMiddleware = createSagaMiddleware();

  const middlewares = applyMiddleware(
    sagaMiddleware,
    routerMiddleware(history),
  );

  const devtools = typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION__
    ? window.__REDUX_DEVTOOLS_EXTENSION__({trace: true, traceLimit: 25})
    : f => f;

  const store = createStore(
    rootReducer,
    initialState,
    compose(middlewares, devtools),
  );

  store.subscribe(() => {
    saveState(stateToStorageSelector(store.getState()));
  });

  sagaMiddleware.run(rootSaga);
  serviceWorker.unregister();

  return store;
};
