import React from 'react';
import ReactDOM from 'react-dom';
import 'typeface-roboto';
import './index.scss';
import { Provider } from 'react-redux';
import { CssBaseline } from '@material-ui/core';
import App from './App/app';
import reportWebVitals from './reportWebVitals';
import store from './redux/store';

ReactDOM.render(
  <React.StrictMode>
    <CssBaseline />
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
