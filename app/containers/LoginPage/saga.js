import { call, put, takeLatest } from 'redux-saga/effects';
import { login } from 'services/api';
import { loginSuccess, loginFailure } from './actions';
import { LOGIN_REQUEST } from './constants';

export function* doLogin({ email, password }) {
  try {
    const user = yield call(login, email, password);
    yield put(loginSuccess(user));
  } catch (err) {
    yield put(loginFailure(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* githubData() {
  // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(LOGIN_REQUEST, doLogin);
}
