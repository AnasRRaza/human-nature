export const BASE_URL = '';

const AUTH_SUB_URL = {
  SIGNIN: '/signin',
  SIGNUP: '/signup',
};

const APP_SUB_URL = {
  GET_USER_DATA: '/getUserData',
};

export const REST_SUB_URL = {
  ...AUTH_SUB_URL,
  ...APP_SUB_URL,
};
