import "./assets/style/card.css";
import "./assets/style/index.css";
import React from "react";
import configureStore from "./stores/configureStore";
import {Provider} from "react-redux";
import {browserHistory, Router} from "react-router";
import {getRoutes} from "./routes";
import {render} from "react-dom";
import {syncHistoryWithStore} from "react-router-redux";

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);
const containerEl = document.getElementById('root');

console.log('booom');

render(
  <Provider store={store}>
    <Router history={history} routes={getRoutes(store)}/>
  </Provider>,
  containerEl
);