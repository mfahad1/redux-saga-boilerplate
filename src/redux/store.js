import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { fork } from 'redux-saga/effects';
import auth from '../modules/Auth/redux/auth';
import authSaga from '../modules/Auth/redux/saga';

const sagaMiddleware = createSagaMiddleware();

export default createStore(
  combineReducers({
    auth,
  }),
  compose(
    applyMiddleware(sagaMiddleware),

    // eslint-disable-next-line no-underscore-dangle
    window.__REDUX_DEVTOOLS_EXTENSION__(),
  ),
);

function* rootSaga() {
  yield [fork(authSaga)];
}

sagaMiddleware.run(rootSaga);
