import app from './app';
import authSession from './authSession';
import { combineReducers } from 'redux';
import flash from './flash';
import home from './home';
import { routerReducer as routing } from 'react-router-redux';

const rootReducer = combineReducers({
  app,
  authSession,
  flash,
  home,
  routing
});

export default rootReducer;
