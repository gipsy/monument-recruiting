import fetch from 'isomorphic-fetch';
//import { uiDataFetchSuccess, uiDataHasErrored, uiDataIsLoading } from '../reducers/ui'

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
        type: 'UI_DATA_HAS_ERRORED',
        hasErrored: bool
    };
}
export function uiDataIsLoading(bool) {
    return {
        type: 'UI_DATA_IS_LOADING',
        isLoading: bool
    };
}
export function uiFetchDataSuccess(data) {
    return {
        type: 'UI_DATA_FETCH_SUCCESS',
        data
    };
}
