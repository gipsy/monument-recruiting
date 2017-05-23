import React, { Component } from 'react';
import reduxify from '../../../util/reduxify';

import FlatButton from 'material-ui/FlatButton';

class Login extends Component {
  static muiName = 'FlatButton';

  render() {
    return (
      <FlatButton {...this.props} label="Login" />
    );
  }
}
