import { call, put, takeLatest } from 'redux-saga/effects'
import axios from 'axios'
import {
  FETCH_API_REQUEST,
  FETCH_API_SUCCESS,
  FETCH_API_FAIL,
} from '../constants/actionTypes';

const BASE_URL = `https://vero75.stage.deverus.com/`
// Moved api call into own function (for easy test swapping)
export function fetchFromApi(userId) {
    // return axios.get(`/users/${userId}`)
    return axios.get(`${BASE_URL}https://anypoint.mulesoft.com/apiplatform/proxy/https://mocksvc.mulesoft.com/mocks/b65d9d4c-9561-4301-9365-5d8fafef1878/api/v1/subject/${craURI}/resources/${clientID}`)
}

export function* requestFetchFromApi(action) {
    console.log(action)
    try {
        const data = yield call(fetchFromApi, action.userId);
        yield put(fetchApiSuccess(data));
    } catch (error) {
        yield put(fetchApiFail(error));
    }
}

// Regular action creators
export function fetchApiRequest(userId) {
    return {
      type: FETCH_API_REQUEST,
      userId
    }  
}

export function fetchApiSuccess(data) {
    return {
        type: FETCH_API_SUCCESS,
        data
    };
}

export function fetchApiFail(error) {
    return {
        type: FETCH_API_FAIL,
        error
    };
}

// The saga that gets imported and ran by your store
// Listens for all dispatches of FETCH_API_REQUEST
export function* watchRequestFetchApi() {
    yield takeLatest(FETCH_API_REQUEST, requestFetchFromApi);
}
