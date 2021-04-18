import { configureStore, combineReducers } from '@reduxjs/toolkit';
import auth from '../modules/Auth/redux/auth';

const reducer = combineReducers({
  auth,
});

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
