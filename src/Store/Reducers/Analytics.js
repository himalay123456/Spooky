/* eslint-disable no-underscore-dangle */
import * as actions from '../ActionLables';

export const INITIAL_STATE = {
  analyticsList: [],
  loader: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actions.GET_ANALYTICS_LIST_SUCCESS:
      return {
        ...state,
        analyticsList: action.payload,
      };
    default:
      return state;
  }
};
