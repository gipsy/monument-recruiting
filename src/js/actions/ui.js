import { UI_USER_MENU_VISIBILITY } from '../constants/actionTypes';

export const displayUserMenu = () => ({
  type: UI_USER_MENU_VISIBILITY,
  visibility: open
});
