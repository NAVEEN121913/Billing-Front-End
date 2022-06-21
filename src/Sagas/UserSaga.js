import {call, put} from 'redux-saga/effects';
import {USER_TYPES} from '../Redux/User/Types';
import {loginUserService} from '../Services/userService';

export function* loginUser(request) {
  try {
    console.log('request>>>>', request);
    const response = yield call(loginUserService(request));
    yield put(USER_TYPES.LOGIN_SUCCESS, response);
  } catch (error) {
    console.log('error>>>>', error);
  }
}
