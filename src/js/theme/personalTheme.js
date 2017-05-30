import createMuiTheme from 'material-ui/styles/theme';
import createStyleSheet from 'material-ui/styles/theme'
import createPalette from 'material-ui/styles/palette';
// import createBreakpoints from 'material-ui/styles/breakpoints';
import {
  blue,
  lightBlue,
  blueGrey,
  darkBlack,
  lightBlack,
  white,
  orange,
  red,
  indigo
} from 'material-ui/styles/colors';
import { fade } from 'material-ui/styles/colorManipulator';



export const personalTheme = createMuiTheme({
  fontFamily: 'Roboto, sans-serif',
  status: {
    danger: 'red',
  },

  palette: createPalette({
    primary: {
      ...lightBlue,
      500: '#0697d7',
    },
    accent: {
      ...orange,
      A200: '#f79027',
    },
  }),

  avatar: {
    borderColor: lightBlue,
  },

  overrides: {
    MuiToolbar: {
      root: {
        backgroundColor: '#ededed',

      },
    },
  },

  // breakpoints: createBreakpoints({
  //   xs: 360,
  //   sm: 600,
  //   md: 960,
  //   lg: 1280,
  //   xl: 1920
  // }),
});
