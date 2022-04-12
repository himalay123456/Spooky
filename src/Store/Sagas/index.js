/* eslint-disable no-unused-vars */
import { all } from 'redux-saga/effects';
import authSaga from './Auth';
import administratorSaga from './Administrator';
import NFTSaga from './NFT';
import AnalyticsSaga from './Analtyics';

export default function* rootSaga(getState) {
  yield all([
    authSaga(),
    administratorSaga(),
    NFTSaga(),
    AnalyticsSaga(),
  ]);
}
