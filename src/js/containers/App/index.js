import React, { Component } from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import { BodyContainer } from 'material-ui-responsive-drawer';

import Page from 'components/Page';
import FixedAppBar from 'components/FixedAppBar';
import Drawer from 'components/Drawer';

import { personalTheme } from 'theme/personalTheme';

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

        <CSSTransitionGroup
          component={Page}
          transitionName="example"
          transitionAppear={true}
          transitionAppearTimeout={500}
          transitionEnterTimeout={300}
          transitionLeaveTimeout={300}
        >
          {React.cloneElement(
            props.children, {
              key: location.pathname
            }
          )}
        </CSSTransitionGroup>
      </BodyContainer>
    </div>
  </MuiThemeProvider>
);

export default App;
