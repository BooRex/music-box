import { combineReducers } from 'redux';
import { authReducer } from './auth/reducer';
import { musicReducer } from './music/reducer';

const rootReducer = combineReducers({
  auth: authReducer,
  music: musicReducer,
});

export default rootReducer;
