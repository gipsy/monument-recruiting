import React, { Component } from 'react';
import Chunk from 'components/Chunk';

const loadMainContainer = () => import('containers/Main' /* webpackChunkName: "main" */);

class Main extends Component {
  render() {
    return <Chunk load={ loadMainContainer } />;
  }
}

export default Main;
