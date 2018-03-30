import { createSelector } from 'reselect';

const getLoginState = (state) => state.get('login');

const makeSelectUser = () => createSelector(
  getLoginState,
  ({ user }) => user
);

export {
  getLoginState,
  makeSelectUser,
};
