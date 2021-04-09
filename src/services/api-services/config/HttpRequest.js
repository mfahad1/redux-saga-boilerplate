import localStorageService from '../../../helpers/localStorageService';

import axiosRequest from './axios';

const baseURL = process.env.REACT_APP_API_URL;

const getHeader = (header) => {
  const defaultHeaders = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  };
  const token = localStorageService.get('token');

  if (token) defaultHeaders.Authorization = `Bearer ${token}`;
  if (header) return { ...defaultHeaders, ...header };

  return defaultHeaders;
};

const request = ({ method, url, params, data, header }) =>
  axiosRequest({
    baseURL,
    method,
    url,
    params,
    data,
    headers: getHeader(header),
  });

const httpRequest = {
  request,
};

export default httpRequest;
