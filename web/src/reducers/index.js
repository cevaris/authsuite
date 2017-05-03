import app from './app';
import authSession from './authSession';
import { combineReducers } from 'redux';
import home from './home';
import { routerReducer as routing } from 'react-router-redux';

const rootReducer = combineReducers({
  app,
  authSession,
  home,
  routing
});

export default rootReducer;
