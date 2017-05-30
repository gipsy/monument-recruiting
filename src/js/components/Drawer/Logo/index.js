import React, { Component } from 'react';

import { StyleSheet, css } from 'aphrodite/no-important';

const Logo = () => (
  <div className={css(styles.Logo)}></div>
)

const styles = StyleSheet.create({
  Logo: {
    backgroundImage: 'url(assets/svg/monument-recruiting-Logo.svg)',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    height: '150px',
    width: '100%'
  }
});

export default Logo;
