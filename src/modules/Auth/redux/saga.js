import { put, call, takeEvery, all } from 'redux-saga/effects';
import { login } from '../../../services/api-services/auth';
import { LOGIN_REQUEST, loginSuccess } from './auth';

function* loginSaga(action) {
  try {
    const response = yield call(login, action.payload);
    yield put(loginSuccess(response));
  } catch (error) {
    console.log(error);
  }
}

function* watchLoginSaga() {
  yield takeEvery(LOGIN_REQUEST, loginSaga);
}

export default function* rootSaga() {
  yield all([call(watchLoginSaga)]);
}
