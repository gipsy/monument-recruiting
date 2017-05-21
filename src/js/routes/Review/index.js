import React, { Component } from 'react';
import Chunk from 'components/Chunk';

const loadReviewContainer = () => import('containers/Review' /* webpackChunkName: "review" */);

class Review extends Component {
  render() {
    return <Chunk load={ loadReviewContainer } />;
  }
}

export default Review;
