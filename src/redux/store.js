import { configureStore, combineReducers } from '@reduxjs/toolkit';
import auth from '../modules/Auth/redux/auth';
import user from '../modules/User/redux/user';

const reducer = combineReducers({
  auth,
  user,
});

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
