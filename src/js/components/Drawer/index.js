import React, { Component } from 'react';
import reduxify from '../../util/reduxify';

import Button from 'material-ui/Button';
import { Link } from 'react-router';

import { ResponsiveDrawer } from 'material-ui-responsive-drawer';
import MenuItem from 'material-ui/Menu/MenuItem';
import FontAwesome from 'react-fontawesome';
import { StyleSheet, css } from 'aphrodite/no-important';

const data = [
  {
    linkTo: '/',
    fontAwesomeIcon: 'home',
    label: 'Dashboard'
  },
  {
    linkTo: '/documents',
    fontAwesomeIcon: 'file',
    label: 'Documents'
  },
  {
    linkTo: '/searches',
    fontAwesomeIcon: 'cart-plus',
    label: 'Add Searches'
  },
];

const Drawer = () => (
  <ResponsiveDrawer
    width={150}
  >
    <div className={css(styles.Drawer__Container)}>
      <div className={css(styles.Drawer__HeaderContainer)}>
        {data.map(function(result) {
          return(
            <div key={result.label}>
              <Link to={result.linkTo}
                className={css(styles.Drawer__MenuItemLink)}>
                <MenuItem>
                  <FontAwesome name={result.fontAwesomeIcon} />
                  {result.label}
                </MenuItem>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  </ResponsiveDrawer>
)

const styles = StyleSheet.create({
  Drawer__Container: {
    backgroundColor: 'green',
    height: '100%',
    width: '150px',
  },

  Drawer__Header: {
    margin: '0px',
    paddingBottom: '10px',
  },

  Drawer_HeaderContainer: {
    padding: '10px',
  },

  Drawer__MenuItemLink: {
    textDecoration: 'none',
  }
});

export default Drawer;
