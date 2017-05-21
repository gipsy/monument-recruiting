import React from 'react';
import reduxify from '../../../util/reduxify';

import logo from 'logo.svg';

const Logo = () => (
  <a href="">
    <img src={logo} alt="Monument Recruiting" className="Logo" />
  </a>
);

export default reduxify({}, [], Logo);
