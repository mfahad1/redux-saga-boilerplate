import httpRequest from './config/HttpRequest';

export function getUsersService() {
  return httpRequest.request({
    url: '/user',
    method: 'get',
  });
}

export function createUserService(data) {
  return httpRequest.request({
    url: '/user',
    method: 'post',
    data,
  });
}
