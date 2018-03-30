/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
// import { Helmet } from 'react-helmet';
// import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import FeaturePage from 'containers/FeaturePage/Loadable';
import LoginPage from 'containers/LoginPage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
// import Footer from 'components/Footer';

export default function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <Route path="/features" component={FeaturePage} />
        <Route path="/login" component={LoginPage} />
        <Route path="" component={NotFoundPage} />
      </Switch>
    </div>
  );
}
