/* eslint-disable import/prefer-default-export */
import * as actionLabels from '../ActionLables';

export const getInTouchRequest = (payload) => ({
  type: actionLabels.GET_IN_TOUCH_REQUEST,
  payload,
});

export const getInTouchRequestSuccess = (payload) => ({
  type: actionLabels.GET_IN_TOUCH_REQUEST_SUCCESS,
  payload,
});

export const getInTouchRequestFail = (payload) => ({
  type: actionLabels.GET_IN_TOUCH_REQUEST_FAIL,
  payload,
});

export const getAllNftsRequest = (payload) => ({
  type: actionLabels.GET_ALLNFT_REQUEST,
  payload,
});
export const getAllNftsRequestsuccess = (payload) => ({
  type: actionLabels.GET_ALLNFT_REQUEST_SUCCESS,
  payload,
});
export const getAllNftsRequestfail = (payload) => ({
  type: actionLabels.GET_ALLNFT_REQUEST_FAIL,
  payload,
});

export const subscribeNewsLetter = (payload) => ({
  type: actionLabels.SUBSCRIBE_NEWSLETTER,
  payload,
});
