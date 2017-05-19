import React, { Component } from 'react';

import Chunk from 'components/Chunk';

const loadAdminContainer = () => import('containers/Admin' /* webpackChunkName: "admin" */);

class Admin extends Component {
  render() {
    return <Chunk load={ loadAdminContainer } />;
  }
}

export default Admin;
