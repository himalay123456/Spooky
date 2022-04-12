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

export const createNFTHistory = (payload) => ({
  type: actionLabels.CREATE_NFT_HISTORY,
  payload,
});

export const sellNFTCollection = (payload) => ({
  type: actionLabels.SELL_NFT_COLLECTION,
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

export const nftImagePreview = (payload) => ({
  type: actionLabels.NFT_IMAGE_PREVIEW,
  payload,
});
export const nftImagePreviewSuccess = (payload) => ({
  type: actionLabels.NFT_IMAGE_PREVIEW_SUCCESS,
  payload,
});
export const nftImagePreviewFail = (payload) => ({
  type: actionLabels.NFT_IMAGE_PREVIEW_FAIL,
  payload,
});
export const getCollectionList = (payload) => ({
  type: actionLabels.GET_COLLECTION_LIST,
  payload,
});
export const getCollectionListSuccess = (payload) => ({
  type: actionLabels.GET_COLLECTION_LIST_SUCCESS,
  payload,
});

export const getCollectibleTicketList = (payload) => ({
  type: actionLabels.GET_COLLECTIBLE_TICKET_LIST,
  payload,
});
export const getCollectibleTicketListSuccess = (payload) => ({
  type: actionLabels.GET_COLLECTIBLE_TICKET_LIST_SUCCESS,
  payload,
});
