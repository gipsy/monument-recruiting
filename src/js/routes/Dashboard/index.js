import React, { Component } from 'react';

import Chunk from 'components/Chunk';

const loadDashboardContainer = () => import('containers/Dashboard' /* webpackChunkName: "dashboard" */);

class Dashboard extends Component {
  render() {
    return <Chunk load={ loadDashboardContainer } />;
  }
}

export default Dashboard;
