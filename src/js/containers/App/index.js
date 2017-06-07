import React, { Component } from 'react';
import { connect } from 'react-redux';
import reduxify from '../../util/reduxify';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import { BodyContainer } from 'material-ui-responsive-drawer';

import Page from 'components/Page';
import FixedAppBar from 'components/FixedAppBar';
import Drawer from 'components/Drawer';
import store from '../../store/configureStore';
import { fetchData } from '../../actions/ui';

import { personalTheme } from 'theme/personalTheme';

import './style.scss';

class App extends Component {

  componentWillMount() {
    this.props.action.fetchData("https://mocksvc.mulesoft.com/mocks/ffd040a0-6b7c-40dd-8383-eecfa76b9bc5/api/v1/subject/asdf/resources/asdf");
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
            ? <Drawer responsive={store.getState().browser} data={store.getState().uiDataFetchSuccess.data} />
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
  [ 'uiDataHasErrored', 'uiDataIsLoading', 'uiDataFetchSuccess' ],
  App
);
