// import { fromJS } from 'immutable';
//
// import {
//   LOAD_UI_SUCCESS,
//   LOAD_UI,
//   LOAD_UI_ERROR,
// } from '../constants/actionTypes';
//
// // The initial state of the App
// const initialState = fromJS({
//   loading: false,
//   error: false,
//   currentUser: false,
//   userData: {
//     repositories: false,
//   },
// });
//
// export const ui = (state = initialState, action) => {
//   switch (action.type) {
//     case LOAD_UI:
//       return state
//         .set('loading', true)
//         .set('error', false)
//         .setIn(['userData', 'repositories'], false);
//     case LOAD_UI_SUCCESS:
//       return state
//         .setIn(['userData', 'repositories'], action.repos)
//         .set('loading', false)
//         .set('currentUser', action.username);
//     case LOAD_UI_ERROR:
//       return state
//         .set('error', action.error)
//         .set('loading', false);
//     default:
//       return state;
//   }
// }

import {
  LOAD,
  SUCCESS_SUBMIT,
  FAILURE_SUBMIT,
  // REQUEST_MR_LANDLORD_SUBMIT,
  // REQUEST_REQUEST_QUOTE_SUBMIT,
  // REQUEST_SEND_WORK_ORDER_SUBMIT,
  // REQUEST_SEND_TENANT_MESSAGE_SUBMIT,
} from '../constants/actionTypes';

export default function ui(state = {}, action = {}) {
  switch (action.type) {

    case LOAD:
      return {
        data: action.data
      }

    // case REQUEST_MR_LANDLORD_SUBMIT:
    //   return [
    //     ...state,
    //     {
    //       // landlord_mobile: state.data.landlordMobile,
    //     },
    //   ]
    //
    // case REQUEST_REQUEST_QUOTE_SUBMIT:
    //   console.log(action.type)
    //   console.log(state)
    //   return [...state, {}]
    //
    // case REQUEST_SEND_WORK_ORDER_SUBMIT:
    //   console.log(action.type)
    //   console.log(state)
    //   return [...state, {}]
    //
    // case REQUEST_SEND_TENANT_MESSAGE_SUBMIT:
    //   console.log(action.type)
    //   console.log(state)
    //   return [...state, {}]

    case SUCCESS_SUBMIT:
      console.log(action.type)
      console.log(state)
      return [...state, {}]

    case FAILURE_SUBMIT:
      console.log(action.type)
      console.log(state)
      return state;

    default: return state;
  }
}
