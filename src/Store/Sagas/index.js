/* eslint-disable no-unused-vars */
import { all } from 'redux-saga/effects';
import authSaga from './Auth';
import landingPageSaga from './Landing';
import NFTSaga from './NFT';

export default function* rootSaga(getState) {
  yield all([
    authSaga(),
    landingPageSaga(),
    NFTSaga(),
  ]);
}
