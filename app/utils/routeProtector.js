import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { getCurrentUser } from 'services/localStorage';
import PropTypes from 'prop-types';

/* eslint-disable no-unused-expressions */
const RouteProtector = ({ component: Component, ...rest }) => {
  const currentUser = getCurrentUser();
  return (
    <Route
      {...rest}
      render={(props) =>
        currentUser ? (
          <Component currentUser={currentUser} {...props} />
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
};
/* eslint-enable */
RouteProtector.propTypes = {
  component: PropTypes.func,
};

export default RouteProtector;
