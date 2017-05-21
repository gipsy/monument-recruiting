import React, { Component } from 'react';

import Chunk from 'components/Chunk';

const loadDisputeContainer = () => import('containers/Dispute' /* webpackChunkName: "dispute" */);

class Dispute extends Component {
  render() {
    return <Chunk load={ loadDisputeContainer } />;
  }
}

export default Dispute;
