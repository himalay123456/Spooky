/* eslint-disable no-unused-expressions */
/* eslint-disable import/prefer-default-export */
import * as actionLabels from '../ActionLables';

export const OTPVerifyRequest = (payload) => ({
  type: actionLabels.OTP_VERIFY_REQUEST,
  payload,
});

export const OTPVerifyRequestSuccess = (payload) => ({
  type: actionLabels.OTP_VERIFY_REQUEST_SUCCESS,
  payload,
});

export const OTPVerifyRequestFail = (payload) => ({
  type: actionLabels.OTP_VERIFY_REQUEST_FAIL,
  payload,
});

export const adminLogin = (payload) => ({
  type: actionLabels.ADMIN_LOGIN,
  payload,
});

export const adminLoginSuccess = (payload) => ({
  type: actionLabels.ADMIN_LOGIN_SUCCESS,
  payload,
});

export const adminLoginFail = (payload) => ({
  type: actionLabels.ADMIN_LOGIN_FAIL,
  payload,
});

export const createUserProfile = (payload) => ({
  type: actionLabels.CREATE_USER_PROFILE,
  payload,
});

export const verifyUserProfileEmail = (payload) => ({
  type: actionLabels.VERIFY_USER_PROFILE_EMAIL,
  payload,
});

export const verifyUserProfileOTP = (payload) => ({
  type: actionLabels.VERIFY_USER_PROFILE_OTP,
  payload,
});

export const resetPassword = (payload) => ({
  type: actionLabels.RESET_PASSWORD,
  payload,
});

export const changeIsAdmin = (payload) => ({
  type: actionLabels.CHANGE_IS_ADMIN,
  payload,
});

export const changeIsSuperAdmin = (payload) => ({
  type: actionLabels.CHANGE_IS_SUPER_ADMIN,
  payload,
});
