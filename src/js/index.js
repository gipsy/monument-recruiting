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
import Placeholder from './containers/Placeholder';
import Main from './containers/Main';
import Admin from './containers/admin/Admin';
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
      <IndexRoute component={Main} />
      <Route path={'placeholder'} component={Placeholder} />
      <Route path={'admin'} component={Admin}/>
      <Route path={'*'} component={NotFound}/>
    </Route>
  </Router>
</Provider>, document.getElementById('root'));
