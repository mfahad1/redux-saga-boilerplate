import { put, call, takeEvery, fork } from 'redux-saga/effects';
import { login } from '../../../services/api-services/auth';
import { LOGIN_REQUEST } from './auth';

function* loginSaga(action) {
  try {
    const response = yield call(login(action.payload));
    yield put(login(response.data));
  } catch (error) {
    console.log(error);
  }
}

function* watchLoginSaga() {
  yield takeEvery(LOGIN_REQUEST, loginSaga);
}

export default function* rootSaga() {
  yield [fork(loginSaga, watchLoginSaga)];
}
