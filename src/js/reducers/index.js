// ==========================
// ./reducers/index.js
// ==========================

import {
  combineReducers
} from 'redux';
import { routerReducer } from 'react-router-redux';
import { responsiveStateReducer } from 'redux-responsive';
import { responsiveDrawer } from 'material-ui-responsive-drawer';

import * as counter from './counter';
import * as ui from './ui';

const allReducers = [counter, ui];

// get a list of all reducers in an array (mostly for Placeholder's reduxify call)
export const allReducerNames = allReducers.reduce((pv, cv) => pv.concat(Object.keys(cv)), [])

const appReducer = combineReducers(Object.assign({}, {
    routing: routerReducer,
    browser: responsiveStateReducer,
    responsiveDrawer: responsiveDrawer
  },
  ...allReducers
));


const rootReducer = (state, action) => appReducer(state, action);

export default rootReducer;
