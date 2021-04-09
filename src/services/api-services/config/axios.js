import Axios from 'axios';

import history from '../../../helpers/history';
import localStorageService from '../../../helpers/localStorageService';

function APIError(message, status) {
  return { message, status };
}

const axios = Axios.create();

axios.interceptors.response.use(
  (response) => response,
  (error) => {
    if (!error.response) {
      return Promise.reject(new APIError('Unable to reach server', 0));
    }

    if ([401, 403].includes(error.response.status)) {
      localStorageService.remove('token');

      if (error.response.status === 403) {
        localStorageService.remove('client');
      }

      setTimeout(() => {
        history.push('/');
      }, 0);
    }

    if (error.response.data.message) {
      return Promise.reject(
        new APIError(error.response.data.message, error.response.status),
      );
    }

    return Promise.reject(
      new APIError(
        `Request failed with ${error.response.status}`,
        error.response.status,
      ),
    );
  },
);

async function axiosRequest(options) {
  const response = await axios(options);

  return response.data;
}

export default axiosRequest;
