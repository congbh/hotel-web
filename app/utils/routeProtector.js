import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import decode from 'jwt-decode';
/* eslint-disable no-unused-expressions */

const checkAuth = () => {
  const token = window.sessionStorage.getItem('token');
  const refreshToken = window.localStorage.getItem('refresh_token');
  if (!token || !refreshToken) {
    return false;
  }

  try {
    const { exp } = decode(refreshToken);
    if (exp < new Date().getTime() / 1000) {
      return false;
    }
  } catch (e) {
    return false;
  }
  return true;
};

const RouteProtector = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
        checkAuth() ? (
          <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: '/login',
            state: { from: props.location },// eslint-disable-line
          }}
        />
      )
    }
  />
);
/* eslint-enable */
RouteProtector.propTypes = {
  component: PropTypes.func,
};

export default RouteProtector;
