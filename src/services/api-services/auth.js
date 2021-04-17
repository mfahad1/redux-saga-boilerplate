import * as jwt from 'jsonwebtoken';
import localStorageService from '../../helpers/localStorageService';

import httpRequest from './config/HttpRequest';

export async function login(data) {
  // const { token } = await httpRequest.request({
  //   url: '/users/authenticate',
  //   method: 'post',
  //   data,
  // });

  const decoded = { userId: 'asd', role: 'admin' };

  localStorageService.set('token', decoded);

  return {
    id: decoded.userId,
    role: decoded.role,
  };
}
