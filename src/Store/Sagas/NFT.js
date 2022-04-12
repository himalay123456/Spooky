/* eslint-disable func-names */
/* eslint-disable require-yield */
/* eslint-disable no-unused-vars */
/* eslint-disable no-empty */
import { takeEvery, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { apiHandler } from '../../utils';
import * as actions from '../Actions';
import * as actionLabels from '../ActionLables';

function* saveNFTCollection(action) {
  const { values, saveNFTCollectiontSuccess, saveNFTCollectiontFail } = action.payload;
  console.log('🚀 ~ file: NFT.js ~ line 12 ~ function*saveNFTCollection ~ action.payload', action.payload.values);
  try {
    yield apiHandler({
      endpoint: '/collectible/createCollectible',
      successHandler: yield function* (response) {
        console.log('🚀 ~ file: NFT.js ~ line 18 ~ function*saveNFTCollection ~ response', response);
        yield put(actions.saveNFTCollectionSuccess(response.data.result));
        yield saveNFTCollectiontSuccess(response.data.result);
      },
      failHandler: yield function* (response) {
        console.log('🚀 ~ file: NFT.js ~ line 23 ~ function*saveNFTCollection ~ response', response);
        toast.error(response, {
          position: toast.POSITION.BOTTOM_RIGHT,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          autoClose: 3000,
        });
        yield saveNFTCollectiontFail(response);
      },
      payload: values,
      apiType: 'post',
    });
  } catch (error) {

  }
}

function* editNFTCollection(action) {
  const { values, editNFTCollectiontSuccess, editNFTCollectiontFail } = action.payload;
  console.log('🚀 ~ file: NFT.js ~ line 35 ~ function*editNFTCollection ~ values', values);
  try {
    yield apiHandler({
      endpoint: '/collectible/editCollectible',
      successHandler: yield function* (response) {
        console.log('🚀 ~ file: NFT.js ~ line 38 ~ function*editNFTCollection ~ response', response);
        yield put(actions.saveNFTCollectionSuccess(response.data.result));
        if (editNFTCollectiontSuccess) { yield editNFTCollectiontSuccess(response.data.result); }
      },
      failHandler: yield function* (response) {
        yield console.log('RES', response);
        toast.error(response, {
          position: toast.POSITION.BOTTOM_RIGHT,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          autoClose: 3000,
        });
        if (editNFTCollectiontFail) { yield editNFTCollectiontFail(); }
      },
      payload: values,
      apiType: 'put',
    });
  } catch (error) {

  }
}

function* getNFTDetails(action) {
  try {
    const { id, account } = action.payload;
    let userAccountHex = '';
    if (account) userAccountHex = account;
    yield apiHandler({
      endpoint: `/collectible/collectibleDetails/${id}/${userAccountHex}`,
      successHandler: yield function* (response) {
        console.log('🚀 ~ file: NFT.js ~ line 59 ~ function*getNFTDetails ~ response', response);
        yield put(actions.getNFTDetailsSuccess(response.data));
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
        toast.error(response, {
          position: toast.POSITION.BOTTOM_RIGHT,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          autoClose: 3000,
        });
      },
      apiType: 'post',
      payload: action.payload,
    });
  } catch (error) {

  }
}

function* sellNFTCollection(action) {
  try {
    yield apiHandler({
      endpoint: '/collectible/sellCollectible',
      successHandler: yield function* (response) {
        yield console.log('RES', response);
        console.log('🚀 ~ file: NFT.js ~ line 96 ~ function*sellNFTCollection ~ response', response);
      },
      failHandler: yield function* (response) {
        console.log('🚀 ~ file: NFT.js ~ line 99 ~ function*sellNFTCollection ~ response', response);
        toast.error(response, {
          position: toast.POSITION.BOTTOM_RIGHT,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          autoClose: 3000,
        });
      },
      payload: action.payload,
      apiType: 'post',
    });
  } catch (error) {

  }
}

function* getAllnftRequest(action) {
  console.log('getAllnftRequest');
  try {
    yield apiHandler({
      endpoint: '/collectible/getAllCollectible',
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

function* setImagePreview(action) {
  console.log('imagePreview', action.payload);
  try {
    if (action.payload) {
      yield put(actions.nftImagePreviewSuccess(action.payload));
    } else {
      yield put(actions.nftImagePreviewFail(action.payload));
    }
  } catch (error) {

  }
}

function* getCollectionList(action) {
  console.log('getAllnftRequest');
  try {
    yield apiHandler({
      endpoint: '/collection/getCollection/0xE0079b3F4e6B5d605768880673Ed8F4B7D168049',
      successHandler: yield function* (response) {
        console.log('🚀 ~ file: NFT.js ~ line 149 ~ function*getCollectionList ~ response', response);
        yield put(actions.getCollectionListSuccess(response.data));
        // yield getAllNftsRequestsuccess('Thank you!');
      },
      failHandler: yield function* (response) {
        console.log('🚀 ~ file: NFT.js ~ line 154 ~ function*getCollectionList ~ response', response);
        // yield put(actions.getAllNftsRequestfail(response));
      },
      apiType: 'get',
    });
  } catch (error) {

  }
}
function* getCollectibleTicketList(action) {
  console.log('getAllnftRequest');
  try {
    yield apiHandler({
      endpoint: '/collectible/getTicketCollectible',
      successHandler: yield function* (response) {
        console.log('🚀 ~ file: NFT.js ~ line 169 ~ function*getCollectibleTicketList ~ response', response);
        yield put(actions.getCollectibleTicketListSuccess(response.data));
        // yield getAllNftsRequestsuccess('Thank you!');
      },
      failHandler: yield function* (response) {
        console.log('🚀 ~ file: NFT.js ~ line 174 ~ function*getCollectibleTicketList ~ response', response);
        // yield put(actions.getAllNftsRequestfail(response));
      },
      apiType: 'get',
    });
  } catch (error) {

  }
}

export default function* rootsaga() {
  yield takeEvery(actionLabels.SAVE_NFT_COLLECTION, saveNFTCollection);
  yield takeEvery(actionLabels.EDIT_NFT_COLLECTION, editNFTCollection);
  yield takeEvery(actionLabels.SELL_NFT_COLLECTION, sellNFTCollection);
  yield takeEvery(actionLabels.GET_NFT_DETAILS, getNFTDetails);
  yield takeEvery(actionLabels.CREATE_NFT_HISTORY, createNFTHistory);
  yield takeEvery(actionLabels.GET_ALLNFT_REQUEST, getAllnftRequest);
  yield takeEvery(actionLabels.NFT_IMAGE_PREVIEW, setImagePreview);
  yield takeEvery(actionLabels.GET_COLLECTION_LIST, getCollectionList);
  yield takeEvery(actionLabels.GET_COLLECTIBLE_TICKET_LIST, getCollectibleTicketList);
}
