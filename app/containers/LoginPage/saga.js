import { call, put, takeLatest } from 'redux-saga/effects';
import { login, getMyProfile } from 'services/api';
import { loginSuccess, loginFailure } from './actions';
import { LOGIN_REQUEST } from './constants';

export function* doLogin({ email, password }) {
  try {
    const { token, uid, refresh_token } = yield call(login, email, password);
    window.sessionStorage.setItem('token', token);
    window.sessionStorage.setItem('uid', uid);
    window.localStorage.setItem('refresh_token', refresh_token);
    const user = yield call(getMyProfile);
    yield put(loginSuccess(user));
  } catch (err) {
    yield put(loginFailure(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* root() {
  yield takeLatest(LOGIN_REQUEST, doLogin);
}
