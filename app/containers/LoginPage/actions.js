/*
 * Home Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from './constants';

  /**
   * Changes the input field of the form
   *
   * @param  {email} email The new text of the input field
   * @param  {password} password The new text of the input field
   *
   * @return {object}    An action object with a type of LOGIN_REQUESTED
   */
export function loginRequest(email, password) {
  return {
    type: LOGIN_REQUEST,
    email,
    password,
  };
}

/**
 *
 * @param  {user} user The user response from server
 *
 * @return {object}    An action object with a type of LOGIN_SUCCESS
 */
export function loginSuccess(user) {
  return {
    type: LOGIN_SUCCESS,
    user,
  };
}

/**
 *
 * @param  {error} error The error message
 *
 * @return {object}    An action object with a type of LOGIN_FAILURE
 */
export function loginFailure(error) {
  return {
    type: LOGIN_FAILURE,
    error,
  };
}

