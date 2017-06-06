import {
  UI_DATA_IS_LOADING,
  UI_DATA_FETCH_SUCCESS,
  UI_DATA_HAS_ERRORED,
} from '../constants/actionTypes';

export function uiDataHasErrored(state = false, action) {
  switch (action.type) {
    case UI_DATA_HAS_ERRORED:
      return action.hasErrored;
    default:
      return state;
  }
}

export function uiDataIsLoading(state = false, action) {
  switch (action.type) {
    case UI_DATA_IS_LOADING:
      return action.isLoading;
    default:
      return state;
  }
}

export function uiDataFetchSuccess(state = [], action) {
  switch (action.type) {
    case UI_DATA_FETCH_SUCCESS:
      return action.uiData;
    default:
      return state;
  }
}
