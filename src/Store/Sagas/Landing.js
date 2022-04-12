/* eslint-disable func-names */
/* eslint-disable require-yield */
/* eslint-disable no-unused-vars */
/* eslint-disable no-empty */
import { takeEvery, put } from 'redux-saga/effects';
import { apiHandler } from '../../utils';
import * as actions from '../Actions';
import * as actionLabels from '../ActionLables';

function* getInTouchRequest(action) {
  console.log('getInTouchRequest', action.payload);
  const { values, getInTouchRequestSuccess } = action.payload;
  try {
    yield apiHandler({
      endpoint: '/general/addContactUsFormApi',
      successHandler: yield function* (response) {
        yield console.log('RES', response);
        yield put(actions.getInTouchRequestSuccess(response.data));
        yield getInTouchRequestSuccess('Thank you!');
      },
      failHandler: yield function* (response) {
        yield console.log('RES', response);
        yield put(actions.getInTouchRequestFail(response));
      },
      payload: values,
      apiType: 'post',
    });
  } catch (error) {

  }
}

function* getAllnftRequest(action) {
  console.log('getAllnftRequest');
  try {
    yield apiHandler({
      endpoint: '/collectible/getTicketCollectible',
      successHandler: yield function* (response) {
        yield console.log('RES', response);
        yield put(actions.getAllNftsRequestsuccess(response.data));
        // yield getAllNftsRequestsuccess('Thank you!');
      },
      failHandler: yield function* (response) {
        yield console.log('RES', response);
        yield put(actions.getAllNftsRequestfail(response));
      },
      apiType: 'get',
    });
  } catch (error) {

  }
}

function* subscribeNewsLetter(action) {
  console.log('subscribeNewsLetter', action.payload);
  try {
    yield apiHandler({
      endpoint: '/general/subscribe',
      successHandler: yield function* (response) {
        yield console.log('RES', response);
        yield action.payload.onSuccessHandler(true);
      },
      failHandler: yield function* (response) {
        yield console.log('RES', response);
        yield action.payload.onFailHandler(response);
      },
      payload: action.payload,
      apiType: 'post',
    });
  } catch (error) {

  }
}

export default function* rootsaga() {
  yield takeEvery(actionLabels.GET_IN_TOUCH_REQUEST, getInTouchRequest);
  yield takeEvery(actionLabels.GET_ALLNFT_REQUEST, getAllnftRequest);
  yield takeEvery(actionLabels.SUBSCRIBE_NEWSLETTER, subscribeNewsLetter);
}
