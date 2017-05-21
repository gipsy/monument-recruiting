// ==========================
// ./store/configureStore.js
// ==========================

import {
  createStore,
  applyMiddleware,
  compose,
} from 'redux';
import { browserHistory } from 'react-router';
import { routerMiddleware, push } from 'react-router-redux';
import { responsiveStoreEnhancer } from 'redux-responsive';

import rootReducer from '../reducers/index';
import { createLogger } from 'redux-logger';

const isDev = process.env.NODE_ENV === "development";

let logger = createLogger({
  duration: true,
  timestamp: true,
  collapsed: true,
});

const enhancer =
  isDev ? compose(responsiveStoreEnhancer, applyMiddleware(routerMiddleware(browserHistory), logger))
        : compose(responsiveStoreEnhancer, applyMiddleware(routerMiddleware(browserHistory)));

const configureStore = (initialState) => createStore(rootReducer, initialState, enhancer);

const store = configureStore();

export const routeTo = (url) => {
  store.dispatch(push(url));
};

export default store;
