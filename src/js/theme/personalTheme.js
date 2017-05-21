import createMuiTheme from 'material-ui/styles/theme';

import {grey, amber, red} from 'material-ui/styles/colors'

import createPalette from 'material-ui/styles/palette'

import * as Colors from 'material-ui/styles/colors';
// import * as ColorManipulator from 'material-ui/utils/colorManipulator';
// import * as Spacing from 'material-ui/styles/spacing';
// import * as zIndex from 'material-ui/styles/zIndex';

// zIndex.appBar = 2000;

// export default {
//     spacing: Spacing,
//     zIndex: zIndex,
//     fontFamily: 'Roboto, sans-serif',
//     palette: {
//         primary1Color: Colors.cyan500,
//         primary2Color: Colors.cyan700,
//         primary3Color: Colors.lightBlack,
//         accent1Color: Colors.pinkA200,
//         accent2Color: Colors.grey100,
//         accent3Color: Colors.grey500,
//         textColor: Colors.darkBlack,
//         alternateTextColor: Colors.white,
//         canvasColor: Colors.grey100,
//         borderColor: Colors.grey300,
//         disabledColor: ColorManipulator.fade(Colors.darkBlack, 0.3),
//         pickerHeaderColor: Colors.cyan500,
//     }
// };
export const personalTheme = createMuiTheme({
  palette: createPalette({
    primary: grey,
    accent: amber,
    error: red,
    type: 'dark'
  })
})
