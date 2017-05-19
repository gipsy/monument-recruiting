import React, { Component } from 'react';
import reduxify from '../../util/reduxify';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import IconButton from 'material-ui/IconButton';
import Drawer from 'material-ui/Drawer';
import { Toolbar, ToolbarGroup, ToolbarTitle } from 'material-ui/Toolbar';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import Header from '../../components/Header';
import NavigationDrawer from '../../components/Navigation';
import ToolbarFixedContainer from '../../components/ToolbarFixedContainer';
import ToolbarFixed from '../../components/ToolbarFixed';
import Page from '../../components/Page';
// #TODO make research JSS vs Aphrodite vs current
// import { StyleSheet, css } from 'aphrodite';
import './style';

class App extends Component {
  constructor(props, context) {
    super(props, context);
  }

  componentDidMount() {}
  componentWillMount() {}

  render() {
    return (
      <MuiThemeProvider muiTheme={ getMuiTheme() }>
        <div className={ 'App' }>
          <Header />

          <ReactCSSTransitionGroup
            component="Page"
            transitionName="example"
            transitionEnterTimeout={300}
            transitionLeaveTimeout={300}
          >
            {React.cloneElement(
              this.props.children, {
                key: location.pathname
              }
            )}
          </ReactCSSTransitionGroup>
        </div>
      </MuiThemeProvider>
    );
  }
};

export default reduxify({}, [], App);
