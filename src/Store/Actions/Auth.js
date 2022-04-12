/* eslint-disable no-unused-expressions */
/* eslint-disable import/prefer-default-export */
import * as actionLabels from '../ActionLables';

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
