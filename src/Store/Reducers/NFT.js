import * as actions from '../ActionLables';

export const INITIAL_STATE = {
  nftDetails: '',
  nftList: [],
  imagePreviewUrl: [],
  rawImage: [],
  collectionList: [],
  ticketList: [],
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

    case actions.GET_ALLNFT_REQUEST_SUCCESS:
      // eslint-disable-next-line no-case-declarations
      const isticket = action.payload.filter((elem) => elem.isTicket === true);
      console.log('success nft ', isticket);

      return {
        ...state,
        nftList: action.payload,
      };

    case actions.GET_ALLNFT_REQUEST_FAIL:
      console.log('fail nft ', action.payload);

      return {
        ...state,
        nftList: [],
      };
    case actions.NFT_IMAGE_PREVIEW_SUCCESS:
      console.log('nft preview', action.payload);
      return {
        ...state,
        imagePreviewUrl: action.payload.imageUrl,
        rawImage: action.payload.rawImage,
      };

    case actions.NFT_IMAGE_PREVIEW_FAIL:
      return {
        ...state,
        imagePreviewUrl: [],
        rawImage: [],
      };
    case actions.GET_COLLECTION_LIST_SUCCESS:
      return {
        ...state,
        collectionList: action.payload,
      };
    case actions.GET_COLLECTIBLE_TICKET_LIST_SUCCESS:
      return {
        ...state,
        ticketList: action.payload,
      };
    default:
      return state;
  }
};
