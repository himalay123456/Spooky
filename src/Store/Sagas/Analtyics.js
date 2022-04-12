/* eslint-disable func-names */
/* eslint-disable require-yield */
/* eslint-disable no-unused-vars */
/* eslint-disable no-empty */
import { takeEvery, put } from 'redux-saga/effects';
import { apiHandler } from '../../utils';
import * as actions from '../Actions';
import * as actionLabels from '../ActionLables';

function* getAnalyticsList(action) {
  try {
    yield apiHandler({
      endpoint: `https://api-rinkeby.etherscan.io/api?module=account&action=txlist&address=${process.env.REACT_APP_ETHERSCAN_ADDRESS}&apikey=${process.env.REACT_APP_ETHERSCAN_API_KEY}`,
      successHandler: yield function* (response) {
        yield put(actions.getAnalyticsListSuccess(response.result));
      },
      failHandler: yield function* (response) {
        yield put(actions.getAnalyticsListFail(response));
      },
      apiType: 'get',
      thirdPartyApi: true,
    });
  } catch (error) {

  }
}

export default function* rootsaga() {
  yield takeEvery(actionLabels.GET_ANALYTICS_LIST, getAnalyticsList);
}
