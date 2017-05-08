// ==========================
// ./reducers/index.js
// ==========================

import {
  combineReducers
} from 'redux';
import { routerReducer } from 'react-router-redux';
import * as counter from './counter';

const allReducers = [counter];

// get a list of all reducers in an array (mostly for Placeholder's reduxify call)
export const allReducerNames = allReducers.reduce((pv, cv) => pv.concat(Object.keys(cv)), [])

const appReducer = combineReducers(Object.assign({}, {
    routing: routerReducer
  },
  ...allReducers
));


const rootReducer = (state, action) => appReducer(state, action);

export default rootReducer;
