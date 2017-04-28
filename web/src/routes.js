import React from "react";
import {NoMatch, Route} from "react-router";
import AppContainer from "./containers/AppContainer";
import HomeContainer from "./containers/HomeContainer";

export const getRoutes = (store) => {
  return (
    <Route component={AppContainer} name=' ' path="/">
      <Route component={HomeContainer} path="/home"/>
      <Route component={NoMatch} name='404: No Match for route' path='*'/>
    </Route>
  );
};
