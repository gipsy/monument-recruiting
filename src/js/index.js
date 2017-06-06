'use-strict'
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {syncHistoryWithStore, routerReducer, push} from 'react-router-redux';
import store, {routeTo} from './store/configureStore';
import {Router, IndexRoute, Route, browserHistory} from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';

import App from './containers/App';
import Register from './routes/Register';
import Login from './routes/Login';
import Dashboard from './routes/Dashboard';
import Review from './routes/Review';
import Documents from './routes/Documents';
import Dispute from './routes/Dispute';
import AddSearches from './routes/AddSearches';
import NotFound from './components/NotFound';

injectTapEventPlugin();

// for React-Redux-Router. Redux store will now have access
// to window.location.
const history = syncHistoryWithStore(browserHistory, store);

/* While we could, we choose NOT to use code splitting */

// Render it to DOM
ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Dashboard} />
        <Route path={'/register'} component={Register} />
        <Route path={'/login'} component={Login} />
        <Route path={'/dashboard'} component={Dashboard} />
        <Route pash={'/review'} component={Review} />
        <Route path={'/documents'} component={Documents} />
        <Route path={'/dispute'} component={Dispute} />
        <Route path={'/searches'} component={AddSearches} />
        <Route path={'*'} component={NotFound} />
      </Route>
    </Router>
  </Provider>, document.getElementById('root')
);
