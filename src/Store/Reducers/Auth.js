/* eslint-disable eqeqeq */
import * as actions from '../ActionLables';

export const INITIAL_STATE = {
  isAdmin: localStorage.getItem('isAdmin') == 'true',
  isSuperAdmin: localStorage.getItem('isSuperAdmin') == 'true',
  email: '',
  loader: false,
  adminLogin: {
    success: false,
    error: false,
    errorMsg: '',
  },
  adminData: {},
};
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actions.OTP_VERIFY_REQUEST:
      return {
        ...state,
        loader: true,
      };

    case actions.OTP_VERIFY_REQUEST_SUCCESS:
      return {
        ...state,
        loader: false,
      };

    case actions.OTP_VERIFY_REQUEST_FAIL:
      return {
        ...state,
        loader: false,
      };

    case actions.ADMIN_LOGIN_SUCCESS:
      return {
        ...state,
        adminLogin: { ...state.adminLogin, success: true },
        adminData: action.payload.data.admin.user,
      };
    case actions.ADMIN_LOGIN_FAIL:
      return {
        ...state,
        adminLogin: { ...state.adminLogin, error: true, errorMsg: action.payload },
      };

    case actions.CHANGE_IS_ADMIN:
      return {
        ...state,
        isAdmin: action.payload,
        isSuperAdmin: false,
      };
    case actions.CHANGE_IS_SUPER_ADMIN:
      return {
        ...state,
        isSuperAdmin: action.payload,
        isAdmin: false,
      };
    default:
      return state;
  }
};
