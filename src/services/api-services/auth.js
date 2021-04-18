import * as jwt from 'jsonwebtoken';
import localStorageService from '../../helpers/localStorageService';

import httpRequest from './config/HttpRequest';

export async function loginService(data) {
  const [user] = await httpRequest.request({
    url: `/user?search=${data.email}`,
    method: 'get',
  });

  const decoded = user;
  // idea is to store only the token in localStorage ,
  // as this is the mock API that's why we are storing whole user right now
  // decode user from JWT token sent by API above and return decoded user
  // and store the orignal token in LS
  localStorageService.set('token', decoded);

  return user;
}
