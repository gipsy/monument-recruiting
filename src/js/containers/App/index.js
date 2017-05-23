import React, { Component } from 'react';
import reduxify from '../../util/reduxify';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { BodyContainer } from 'material-ui-responsive-drawer';

import Page from '../../components/Page';
import FixedAppBar from '../../components/FixedAppBar';
import Drawer from '../../components/Drawer';

import personalTheme from '../../theme/personalTheme';

// #TODO investigate JSS vs Aphrodite vs current
// import { StyleSheet, css } from 'aphrodite';
import './style.scss';

const App = (props) => (
  <MuiThemeProvider theme={personalTheme}>
    <div className={ 'App' }>
      {
        location.pathname != '/register'
        ? <Drawer />
        : null
      }
      
      <BodyContainer
        openSecondary={false}
        width={150}
      >
        {
          location.pathname != '/register'
          ? <FixedAppBar />
          : null
        }

        <ReactCSSTransitionGroup
          component={Page}
          transitionName="example"
          transitionEnterTimeout={300}
          transitionLeaveTimeout={300}
        >
          {React.cloneElement(
            props.children, {
              key: location.pathname
            }
          )}
        </ReactCSSTransitionGroup>
      </BodyContainer>
    </div>
  </MuiThemeProvider>
);

export default App;
