import * as actionLabels from '../ActionLables';

export const getAnalyticsList = (payload) => ({
  type: actionLabels.GET_ANALYTICS_LIST,
  payload,
});

export const getAnalyticsListSuccess = (payload) => ({
  type: actionLabels.GET_ANALYTICS_LIST_SUCCESS,
  payload,
});

export const getAnalyticsListFail = (payload) => ({
  type: actionLabels.GET_ANALYTICS_LIST_FAIL,
  payload,
});
