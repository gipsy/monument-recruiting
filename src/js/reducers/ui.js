import { UI_USER_MENU_VISIBILITY } from '../constants/actionTypes';

const initialState = {
  UI_USER_MENU_VISIBILITY: false
};

export const ui = (state = initialState, action = {}) => {
  switch (action.type) {
    case UI_USER_MENU_VISIBILITY:
      return Object.assign({}, state, {
        UI_USER_MENU_VISIBILITY: action.visibility
      });
    default:
      return state;
  }
}
