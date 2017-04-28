import './assets/style/card.css';
import './assets/style/index.css';
import configureStore from './stores/configureStore';
import { getRoutes } from './routes';
import { Provider } from 'react-redux';
import React from 'react';
import { render } from 'react-dom';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory, Router } from 'react-router';

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);
const containerEl = document.getElementById('root');

render(
  <Provider store={store}>
    <Router history={history} routes={getRoutes(store)}/>
  </Provider>,
  containerEl
);
