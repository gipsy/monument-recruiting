import React, { Component } from 'react';

import Chunk from 'components/Chunk';

const loadDocumentsContainer = () => import('containers/Documents' /* webpackChunkName: "admin" */);

class Documents extends Component {
  render() {
    return <Chunk load={ loadDocumentsContainer } />;
  }
}

export default Documents;
