import React, { Component } from 'react';

import Chunk from 'components/Chunk';

const loadAddSearchesContainer = () => import('containers/AddSearches' /* webpackChunkName: "searches" */);

class AddSearches extends Component {
  render() {
    return <Chunk load={ loadAddSearchesContainer } />;
  }
}

export default AddSearches;
