import { fromJS } from 'immutable';

import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from './constants';


// The initial state of the App
const initialState = fromJS({
  user: {},
  error: null,
});

function loginReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_REQUEST:
      return state;
    case LOGIN_SUCCESS:
      return { ...state, user: action.user };
    case LOGIN_FAILURE:
      return {
        ...state,
        user: {},
        error: action.error,
      };
    default:
      return state;
  }
}

export default loginReducer;
