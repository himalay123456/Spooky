/* eslint-disable import/prefer-default-export */
import * as actionLabels from '../ActionLables';

export const saveNFTCollection = (payload) => ({
  type: actionLabels.SAVE_NFT_COLLECTION,
  payload,
});

export const saveNFTCollectionSuccess = (payload) => ({
  type: actionLabels.SAVE_NFT_COLLECTION_SUCCESS,
  payload,
});

export const editNFTCollection = (payload) => ({
  type: actionLabels.EDIT_NFT_COLLECTION,
  payload,
});

export const getNFTDetails = (payload) => ({
  type: actionLabels.GET_NFT_DETAILS,
  payload,
});

export const getNFTDetailsSuccess = (payload) => ({
  type: actionLabels.GET_NFT_DETAILS_SUCCESS,
  payload,
});

export const getNFTDetailsFail = (payload) => ({
  type: actionLabels.GET_NFT_DETAILS_FAIL,
  payload,
});

export const getNFTHistory = (payload) => ({
  type: actionLabels.GET_NFT_HISTORY,
  payload,
});

export const getNFTHistorySuccess = (payload) => ({
  type: actionLabels.GET_NFT_HISTORY_SUCCESS,
  payload,
});

export const createNFTHistory = (payload) => ({
  type: actionLabels.CREATE_NFT_HISTORY,
  payload,
});

export const sellNFTCollection = (payload) => ({
  type: actionLabels.SELL_NFT_COLLECTION,
  payload,
});

export const openWalletPopUp = (payload) => ({
  type: actionLabels.OPEN_WALLET_POPUP,
  payload,
});
