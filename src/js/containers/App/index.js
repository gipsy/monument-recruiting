import React, { Component } from 'react';
import { connect } from 'react-redux';
import reduxify from '../../util/reduxify';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import { BodyContainer } from 'material-ui-responsive-drawer';

import Page from 'components/Page';
import FixedAppBar from 'components/FixedAppBar';
import Drawer from 'components/Drawer';
import { fetchData, uiDataHasErrored, uiDataIsLoading, uiFetchDataSuccess } from '../../actions/ui';

import { personalTheme } from 'theme/personalTheme';

import './style.scss';

class App extends Component {

  componentDidMount() {
    console.log(this.props)
    this.props.action.fetchData("https://anypoint.mulesoft.com/apiplatform/proxy/https://mocksvc.mulesoft.com/mocks/b65d9d4c-9561-4301-9365-5d8fafef1878/api/v1/subject/{craURI}/resources/{clientID}");
  }

  render() {
      if (this.props.hasErrored) {
        return <p>Sorry! There was an error loading the items</p>;
      }
      if (this.props.isLoading) {
        return <p>Loading…</p>;
      }
      return (
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
                  this.props.children, {
                    key: location.pathname
                  }
                )}
              </CSSTransitionGroup>
            </BodyContainer>
          </div>
        </MuiThemeProvider>
      );
  }
}

// const mapStateToProps = (state) => {
//   console.log('mapStateToProps state:', JSON.stringify(state))
//   return {
//     fetchedData: state.data,
//     hasErrored: state.hasErrored,
//     isLoading: state.isLoading,
//   }
// };
//
// const mapDispatchToProps = (dispatch) => {
//   return {
//     fetchData: (url) => dispatch(fetchData(url))
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(App);

export default reduxify(
  { fetchData },
  [ 'fetchedData', 'hasErrored', 'isLoading' ],
  App
);
