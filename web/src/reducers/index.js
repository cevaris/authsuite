import app from './app';
import apiKey from './apiKey';
import authSession from './authSession';
import { combineReducers } from 'redux';
import demoAuthSession from './demoAuthSession';
import flash from './flash';
import home from './home';
import { reducer as formReducer } from 'redux-form'
import { routerReducer as routing } from 'react-router-redux';

const rootReducer = combineReducers({
  app,
  apiKey,
  authSession,
  demoAuthSession,
  flash,
  form: formReducer,
  home,
  routing
});

export default rootReducer;
