/* eslint-disable import/named */
/* eslint-disable require-yield */
/* eslint-disable no-unused-vars */
/* eslint-disable no-empty */
import { takeEvery, put } from 'redux-saga/effects';
import { apiHandler } from '../../utils';
import * as actionLabels from '../ActionLables';
import * as actions from '../Actions';

function* otpVerifyRequest(action) {
  try {
    const {
      email, otp, code, handleSuccess, setError, isSuperAdmin,
    } = action.payload;
    yield apiHandler({
      endpoint: action.payload.endpoint,
      successHandler: yield function* (response) {
        yield put(actions.OTPVerifyRequestSuccess(response));
        if (isSuperAdmin) {
          localStorage.setItem('isAdmin', !response.data.userInfo.isSuperAdmin);
          localStorage.setItem('isSuperAdmin', response.data.userInfo.isSuperAdmin);
          yield put(actions.changeIsSuperAdmin(true));
        } else if (response.data.admin.isPasswordReset) {
          localStorage.setItem('isAdmin', !response.data.admin.isSuperAdmin);
          localStorage.setItem('isSuperAdmin', response.data.admin.isSuperAdmin);
          yield put(actions.changeIsAdmin(true));
        }
        yield handleSuccess(response);
      },
      failHandler: yield function* (response) {
        yield setError('OTP verification failed!!');
        yield put(actions.OTPVerifyRequestFail(response));
      },
      apiType: 'post',
      payload: isSuperAdmin ? { email, code } : { email, otp },
    });
  } catch (error) {
    console.log('Error', error);
  }
}

function* adminLogin(action) {
  try {
    console.log('LOGIN SAGA');
    yield apiHandler({
      endpoint: '/admin/login',
      successHandler: yield function* (response) {
        yield put(actions.adminLoginSuccess(response));
      },
      failHandler: yield function* (response) {
        yield put(actions.adminLoginFail(response));
      },
      apiType: 'post',
      payload: action.payload,
    });
  } catch (error) {
    console.log('Error', error);
  }
}

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

function* resetPassword(action) {
  const {
    email, password, handleSuccess, handleFail,
  } = action.payload;
  try {
    console.log('LOGIN SAGA');
    yield apiHandler({
      endpoint: 'admin/resetPassword',
      successHandler: yield function* (response) {
        yield put(actions.changeIsAdmin(true));
        localStorage.setItem('isAdmin', true);
        localStorage.setItem('isSuperAdmin', false);
        yield handleSuccess(response);
      },
      failHandler: yield function* (response) {
        console.log('failHandler', response);
        yield handleFail(response);
      },
      apiType: 'post',
      payload: { email, password },
    });
  } catch (error) {
    console.log('Error', error);
  }
}

export default function* rootsaga() {
  yield takeEvery(actionLabels.OTP_VERIFY_REQUEST, otpVerifyRequest);
  yield takeEvery(actionLabels.ADMIN_LOGIN, adminLogin);
  yield takeEvery(actionLabels.CREATE_USER_PROFILE, createUserProfile);
  yield takeEvery(actionLabels.VERIFY_USER_PROFILE_EMAIL, verifyUserProfileEmail);
  yield takeEvery(actionLabels.VERIFY_USER_PROFILE_OTP, verifyUserProfileOTP);
  yield takeEvery(actionLabels.RESET_PASSWORD, resetPassword);
}
