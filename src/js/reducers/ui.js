import {
  DATA_UI_IS_LOADING,
  DATA_UI_FETCH_SUCCESS,
  DATA_UI_HAS_ERRORED,
} from '../constants/actionTypes';

export function uiDataHasErrored(state = false, action) {
  switch (action.type) {
    case 'DATA_UI_HAS_ERRORED':
      return action.hasErrored;
    default:
      return state;
  }
}

export function uiDataIsLoading(state = false, action) {
  switch (action.type) {
    case 'DATA_UI_IS_LOADING':
      return action.isLoading;
    default:
      return state;
  }
}

export function uiDataFetchSuccess(state = [], action) {
  switch (action.type) {
    case 'DATA_UI_FETCH_SUCCESS':
      return action.data;
    default:
      return state;
  }
}
