import {USER_TYPES} from './Types';

const requestLogin = payload => {
  return {
    type: USER_TYPES.LOGIN_REQUEST,
    payload,
  };
};

const loginSuccess = user => {
  return {
    type: USER_TYPES.LOGIN_SUCCESS,
    user,
  };
};

export {requestLogin, loginSuccess};
