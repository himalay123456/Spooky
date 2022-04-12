/* eslint-disable import/named */
/* eslint-disable require-yield */
/* eslint-disable no-unused-vars */
/* eslint-disable no-empty */
import { takeEvery, put } from 'redux-saga/effects';
import { apiHandler } from '../../utils';
import * as actionLabels from '../ActionLables';
import * as actions from '../Actions';

function* createUserProfile(action) {
  const { walletAddress, handleFail, handleSuccess } = action.payload;
  try {
    console.log('LOGIN SAGA');
    yield apiHandler({
      endpoint: 'general/createUserProfile',
      successHandler: yield function* (response) {
        yield handleSuccess(response.data);
      },
      failHandler: yield function* (response) {
        yield handleFail(response);
      },
      apiType: 'post',
      payload: { walletAddress },
    });
  } catch (error) {
    console.log('Error', error);
  }
}

function* verifyUserProfileEmail(action) {
  const { values, handleOnSuccess: handleSuccess, handleOnFail: handleFail } = action.payload;
  try {
    console.log('LOGIN SAGA');
    yield apiHandler({
      endpoint: 'general/sendEmailOtp',
      successHandler: yield function* (response) {
        yield handleSuccess(values);
      },
      failHandler: yield function* (response) {
        yield handleFail(response);
      },
      apiType: 'post',
      payload: values,
    });
  } catch (error) {
    console.log('Error', error);
  }
}

function* verifyUserProfileOTP(action) {
  const {
    email, otp, handleOnSuccess: handleSuccess, handleOnFail: handleFail,
  } = action.payload;
  try {
    console.log('LOGIN SAGA');
    yield apiHandler({
      endpoint: 'general/verifyEmailOtp',
      successHandler: yield function* (response) {
        yield handleSuccess('User Verified');
      },
      failHandler: yield function* (response) {
        console.log('failHandler', response);
        yield handleFail(response);
      },
      apiType: 'post',
      payload: { email, otp },
    });
  } catch (error) {
    console.log('Error', error);
  }
}

export default function* rootsaga() {
  yield takeEvery(actionLabels.CREATE_USER_PROFILE, createUserProfile);
  yield takeEvery(actionLabels.VERIFY_USER_PROFILE_EMAIL, verifyUserProfileEmail);
  yield takeEvery(actionLabels.VERIFY_USER_PROFILE_OTP, verifyUserProfileOTP);
}
