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
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

const isDev = process.env.NODE_ENV === "development";

let logger = createLogger({
  duration: true,
  timestamp: true,
  collapsed: true,
});

const enhancer =
  isDev ? compose(responsiveStoreEnhancer, applyMiddleware(thunk, routerMiddleware(browserHistory), logger))
        : compose(responsiveStoreEnhancer, applyMiddleware(thunk, routerMiddleware(browserHistory)));

const configureStore = (initialState) => 
  createStore(
    rootReducer,
    initialState,
    enhancer
  );

const store = configureStore();

// Extensions
store.asyncReducers = {}; // Async reducer registry

// Make reducers hot reloadable, see http://mxs.is/googmo
/* istanbul ignore next */
if (module.hot) {
  module.hot.accept('../reducers', () => {
    import('../reducers').then((reducerModule) => {
      const createReducers = reducerModule.default;
      const nextReducers = createReducers(store.asyncReducers);

      store.replaceReducer(nextReducers);
    });
  });
}

export const routeTo = (url) => {
  store.dispatch(push(url));
};

export default store;
