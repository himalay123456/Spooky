import * as actions from '../ActionLables';

export const INITIAL_STATE = {
  loader: false,
  NFTs: null,
};
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actions.GET_IN_TOUCH_REQUEST:
      return {
        ...state,
        loader: true,
      };

    case actions.GET_IN_TOUCH_REQUEST_SUCCESS:
      return {
        ...state,
        loader: false,
      };

    case actions.GET_IN_TOUCH_REQUEST_FAIL:
      return {
        ...state,
        loader: false,
      };
    case actions.GET_ALLNFT_REQUEST_SUCCESS:
      // eslint-disable-next-line no-case-declarations
      const isticket = action.payload.filter((elem) => elem.isTicket === true && elem.status === 'listed');
      console.log('success nft ', isticket);

      return {
        ...state,
        NFTs: action.payload,
      };

    case actions.GET_ALLNFT_REQUEST_FAIL:
      console.log('fail nft ', action.payload);

      return {
        ...state,
        NFTs: null,
      };
    default:
      return state;
  }
};
