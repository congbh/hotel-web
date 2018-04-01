/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import RouteProtector from 'utils/routeProtector';
import DashboardPage from 'containers/Dashboard/Loadable';

import HotelPage from 'containers/HotelPage/Loadable';
import LoginPage from 'containers/LoginPage/Loadable';

export default function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <RouteProtector path="/dashboard" component={DashboardPage} />
        <RouteProtector path="/hotel" component={HotelPage} />
      </Switch>
    </div>
  );
}
