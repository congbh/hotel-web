import { createSelector } from 'reselect';

const getLoginState = (state) => state.get('login');

const makeSelectIsLogin = () => createSelector(
  getLoginState,
  ({ isLogedIn }) => isLogedIn
);

export {
  getLoginState,
  makeSelectIsLogin,
};
