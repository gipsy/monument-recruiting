import {
  UI_USER_MENU_VISIBILITY,
} from '../constants/actionTypes';

export const displayUserMenu = (open) => ({
  type: UI_USER_MENU_VISIBILITY,
  visibility: open,
});
