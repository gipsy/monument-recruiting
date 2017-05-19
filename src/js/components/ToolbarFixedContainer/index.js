import React, { Component } from 'react';
import reduxify from '../../util/reduxify';

class ToolbarFixedContainer extends Component {
  componentDidMount() {}

  render() {
    return(
      <div style={{ height: '56px' }}>
        { this.props.children }
      </div>
    );
  }
};

export default reduxify({}, [], ToolbarFixedContainer);
