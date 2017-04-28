import app from './app';
import { combineReducers } from 'redux';
import home from './home';
import { routerReducer as routing } from 'react-router-redux';

const rootReducer = combineReducers({
  app,
  home,
  routing
});

export default rootReducer;
