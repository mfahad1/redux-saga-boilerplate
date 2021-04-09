import * as jwt from 'jsonwebtoken';
import localStorageService from '../../helpers/localStorageService';

import httpRequest from './config/HttpRequest';

export async function login(data) {
  const { token } = await httpRequest.request({
    url: '/users/authenticate',
    method: 'post',
    data,
  });

  const decoded = jwt.decode(token, { json: true });

  localStorageService.set('token', token);

  return {
    id: decoded.userId,
    role: decoded.role,
  };
}
