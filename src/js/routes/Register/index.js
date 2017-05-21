import React, { Component } from 'react';

import Chunk from 'components/Chunk';

const loadRegisterContainer = () => import('containers/Register');

class Register extends Component {
  render() {
    return <Chunk load={ loadRegisterContainer } />;
  }
}

export default Register;
