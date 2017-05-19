import React, { Component } from 'react';
import reduxify from '../../util/reduxify';

import Toolbar from 'material-ui/Toolbar';

class ToolbarFixed extends Component {
  componentDidMount() {}

  render() {
    return(
      <Toolbar style={{position:'fixed',width:'100%',zIndex:'100'}}>
        {this.props.children}
      </Toolbar>
    )
  }
};

export default reduxify({}, [], ToolbarFixed);
