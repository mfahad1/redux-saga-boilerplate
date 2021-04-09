export const LOGIN_REQUEST = 'auth/LOGIN_REQUEST';
const LOGIN_SUCCESS = 'auth/LOGIN_SUCCESS';
export const REGISTER_REQUEST = 'auth/REGISTER_REQUEST';
const REGISTER_SUCCESS = 'auth/REGISTER_SUCCESS';

export const loginSuccess = (payload) => ({
  type: LOGIN_SUCCESS,
  payload,
});

export const loginRequested = (payload) => ({
  type: LOGIN_REQUEST,
  payload,
});

export const registerSuccess = (payload) => ({
  type: REGISTER_SUCCESS,
  payload,
});

export const registerRequest = (payload) => ({
  type: REGISTER_REQUEST,
  payload,
});

const authReducer = (
  state = { login: null, register: null },
  { type, payload },
) => {
  switch (type) {
    case LOGIN_SUCCESS:
      return { ...state, login: payload };
    case REGISTER_SUCCESS:
      return { ...state, register: payload };
    default:
      return state;
  }
};

export default authReducer;
