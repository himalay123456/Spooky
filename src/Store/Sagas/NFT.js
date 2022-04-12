/* eslint-disable func-names */
/* eslint-disable require-yield */
/* eslint-disable no-unused-vars */
/* eslint-disable no-empty */
import { takeEvery, put } from 'redux-saga/effects';
import { apiHandler } from '../../utils';
import * as actions from '../Actions';
import * as actionLabels from '../ActionLables';

function* saveNFTCollection(action) {
  const { values, saveNFTCollectiontSuccess, saveNFTCollectiontFail } = action.payload;
  try {
    yield apiHandler({
      endpoint: '/collectible/createCollectible',
      successHandler: yield function* (response) {
        yield console.log('RES', response);
        yield put(actions.saveNFTCollectionSuccess(response.data.result));
        yield saveNFTCollectiontSuccess();
      },
      failHandler: yield function* (response) {
        yield console.log('RES', response);
        yield saveNFTCollectiontFail();
      },
      payload: values,
      apiType: 'post',
    });
  } catch (error) {

  }
}

function* getNFTDetails(action) {
  try {
    const { id, account } = action.payload;
    let userAccountHex = '';
    if (account) userAccountHex = account;
    console.log('🚀 ~ file: NFT.js ~ line 36 ~ function*getNFTDetails ~ userAccountHex', account);

    yield apiHandler({
      endpoint: `/collectible/collectibleDetails/${id}/${userAccountHex}`,
      successHandler: yield function* (response) {
        console.log('🚀 ~ file: NFT.js ~ line 59 ~ function*getNFTDetails ~ response', response);
        yield put(actions.getNFTDetailsSuccess(response.data));
      },
      failHandler: yield function* (response) {
        yield put(actions.getNFTDetailsFail(response.data));
      },
      apiType: 'get',
    });
  } catch (error) {

  }
}

function* getNFTHistory(action) {
  try {
    yield apiHandler({
      endpoint: `/collectible/history/${action.payload}`,
      successHandler: yield function* (response) {
        console.log('🚀 ~ file: NFT.js ~ line 59 ~ function*getNFTDetails ~ response', response);
        yield put(actions.getNFTHistorySuccess(response.data));
      },
      failHandler: yield function* (response) {
        console.log('🚀 ~ file: NFT.js ~ line 62 ~ function*getNFTDetails ~ response', response);
      },
      apiType: 'get',
    });
  } catch (error) {

  }
}

function* createNFTHistory(action) {
  try {
    yield apiHandler({
      endpoint: '/collectible/createHistory',
      successHandler: yield function* (response) {
        console.log('🚀 ~ file: NFT.js ~ line 77 ~ function*createNFTHistory ~ response', response);
      },
      failHandler: yield function* (response) {
        console.log('🚀 ~ file: NFT.js ~ line 80 ~ function*createNFTHistory ~ response', response);
      },
      apiType: 'post',
      payload: action.payload,
    });
  } catch (error) {

  }
}

function* editNFTCollection(action) {
  // const { values, saveNFTCollectiontSuccess, saveNFTCollectiontFail } = action.payload;
  try {
    yield apiHandler({
      endpoint: '/collectible/editCollectible',
      successHandler: yield function* (response) {
        console.log('🚀 ~ file: NFT.js ~ line 38 ~ function*editNFTCollection ~ response', response);
        // yield put(actions.saveNFTCollectionSuccess(response.data.result));
        // yield saveNFTCollectiontSuccess();
      },
      failHandler: yield function* (response) {
        yield console.log('RES', response);
        // yield saveNFTCollectiontFail();
      },
      payload: action.payload,
      apiType: 'put',
    });
  } catch (error) {

  }
}

export default function* rootsaga() {
  yield takeEvery(actionLabels.SAVE_NFT_COLLECTION, saveNFTCollection);
  yield takeEvery(actionLabels.GET_NFT_DETAILS, getNFTDetails);
  yield takeEvery(actionLabels.GET_NFT_HISTORY, getNFTHistory);
  yield takeEvery(actionLabels.CREATE_NFT_HISTORY, createNFTHistory);
  yield takeEvery(actionLabels.EDIT_NFT_COLLECTION, editNFTCollection);
}
