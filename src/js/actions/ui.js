import fetch from 'isomorphic-fetch';
import {
  UI_DATA_IS_LOADING,
  UI_DATA_FETCH_SUCCESS,
  UI_DATA_HAS_ERRORED,
} from '../constants/actionTypes';

export function fetchData(url) {
  return (dispatch) => {
    dispatch(uiDataIsLoading(true));
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        dispatch(uiDataIsLoading(false));
        return response;
      })
      .then((response) => response.json())
      .then((data) => dispatch(uiDataFetchSuccess(data)))
      .catch(() => dispatch(uiDataHasErrored(true)));
  };
}

export function uiDataHasErrored(bool) {
  return {
    type: UI_DATA_HAS_ERRORED,
    hasErrored: bool
  };
}
export function uiDataIsLoading(bool) {
  return {
    type: UI_DATA_IS_LOADING,
    isLoading: bool
  };
}
export function uiDataFetchSuccess(uiData) {
  return {
    type: UI_DATA_FETCH_SUCCESS,
    uiData
  };
}
