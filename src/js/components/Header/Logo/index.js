import React from 'react';
import reduxify from '../../../util/reduxify';

import logo from 'logo.svg';
import styles from './style';

const Logo = () => (
  <a href="">
    <img src={logo} alt="Monument Recruiting" className={styles.logo} />
  </a>
);

export default reduxify({}, [], Logo);
