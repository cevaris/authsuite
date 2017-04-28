import app from "./app";
import {combineReducers} from "redux";
import {routerReducer as routing} from "react-router-redux";

const rootReducer = combineReducers({
  app,
  routing
});

export default rootReducer;
