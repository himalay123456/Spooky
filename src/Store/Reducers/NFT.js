import * as actions from '../ActionLables';

export const INITIAL_STATE = {
  nftDetails: '',
  nftHistory: '',
  openWalletPopUp: false,
};
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actions.SAVE_NFT_COLLECTION_SUCCESS:
      return {
        ...state,
        nftDetails: action.payload,
      };

    case actions.GET_NFT_DETAILS_SUCCESS:
      console.log('nft success', action.payload);

      return {
        ...state,
        nftDetails: action.payload,
      };
    case actions.GET_NFT_DETAILS_FAIL:
      console.log('nft success', action.payload);
      return {
        ...state,
        nftDetails: '',
      };
    case actions.GET_NFT_HISTORY_SUCCESS:
      return {
        ...state,
        nftHistory: action.payload,
      };
    case actions.OPEN_WALLET_POPUP:
      return {
        ...state,
        openWalletPopUp: action.payload,
      };
    default:
      return state;
  }
};
