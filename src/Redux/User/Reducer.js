import {USER_TYPES, CHAT_TYPES} from './Types';
import {InitalState} from './InitalState';

export const userReducer = (state = InitalState, action) => {
  switch (action.type) {
    case USER_TYPES.LOGIN_REQUEST:
      return {
        ...state,
      };

    case USER_TYPES.LOGIN_SUCCESS:
      return {
        ...state,
        user: action.user,
      };
    default:
      return state;
  }
};
