import React, { Component } from 'react';

import { StyleSheet, css } from 'aphrodite/no-important';
import LoadingSpinner from '../../LoadingSpinner';

const Logo = (props) => {

  return props.data ? (
    <div>
      <img
        className={css(styles.Logo)}
        src={`https://vero75.stage.deverus.com/${props.data.logoURL}`}
      />
    </div>
  ) : <LoadingSpinner />
};

const styles = StyleSheet.create({
  Logo: {
    width: '100%'
  }
});

export default Logo;
