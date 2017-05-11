import AppContainer from './containers/AppContainer';
import ApiKeyContainer from './containers/ApiKeyContainer';
import AuthSessionContainer from './containers/AuthSessionContainer';
import DemoAuthSessionContainer from "./containers/DemoAuthSessionContainer";
import Error404 from './components/Shared/Error404';
import HomeContainer from './containers/HomeContainer';
import React from 'react';
import { Route } from 'react-router';

export const getRoutes = (store) => {
  return (
    <Route component={AppContainer} name=' '>
      <Route component={HomeContainer} path='/'/>
      <Route component={ApiKeyContainer} path='/keys/new'/>
      <Route component={AuthSessionContainer} path='/sessions/tokens/:token'/>
      <Route component={DemoAuthSessionContainer} path='/demo'/>
      <Route component={Error404} name='404: No Match for route' path='*'/>
    </Route>
  );
};
