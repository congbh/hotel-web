import { call, put, takeLatest } from 'redux-saga/effects';
import { login } from 'services/api';
import { setCurrentUser } from 'services/localStorage';
import { loginSuccess, loginFailure } from './actions';
import { LOGIN_REQUEST } from './constants';

export function* doLogin({ email, password }) {
  try {
    const { token, uid } = yield call(login, email, password);
    setCurrentUser({ token, uid });
    yield put(loginSuccess());
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
