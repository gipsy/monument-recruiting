import React, { Component } from 'react';
import reduxify from '../../util/reduxify';
import store from '../../store/configureStore';

import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import { Link } from 'react-router';

import { ResponsiveDrawer, toggleDrawerOpen } from 'material-ui-responsive-drawer';
import MenuItem from 'material-ui/Menu/MenuItem';
import FontAwesome from 'react-fontawesome';
import { StyleSheet, css } from 'aphrodite/no-important';

import Logo from './Logo';

const data = [
  {
    linkTo: '/',
    fontAwesomeIcon: 'home',
    iconPath: 'assets/img/icon-dashboard.png',
    label: 'Dashboard',
  },
  {
    linkTo: '/documents',
    fontAwesomeIcon: 'file',
    iconPath: 'assets/img/icon-document.png',
    label: 'Documents'
  },
  {
    linkTo: '/searches',
    fontAwesomeIcon: 'cart-plus',
    iconPath: 'assets/img/icon-cart.png',
    label: 'Add Searches'
  },
];

const Drawer = (props) => (
  <ResponsiveDrawer>
    <div className={css(styles.Drawer__Container)}>
      <div className={css(styles.Drawer__HeaderContainer)}>
        <IconButton
          className={css(styles.Drawer__CloseIcon)}
          onTouchTap={() => (
            store.dispatch({
              type: 'RESPONSIVE_DRAWER_TOGGLE_DRAWER_OPEN'
            })
          )}
        >
          <FontAwesome
            name={'close'}
          />
        </IconButton>
        <Logo />
        {data.map(function(result) {
          return(
            <div key={result.label}>
              <Link to={result.linkTo}
                className={css(styles.Drawer__MenuItemLink)}>
                <MenuItem
                  className={css(styles.Drawer__MenuItem)}
                  onTouchTap={() => (
                    store.dispatch({
                      type: 'RESPONSIVE_DRAWER_TOGGLE_DRAWER_OPEN'
                    })
                  )}
                >
                  <div
                    style={{ backgroundImage: `url( ${result.iconPath} )` }}
                    className={css(styles.Drawer__MenuItemIcon)}
                  >
                  </div>
                  <div className={css(styles.Drawer__MenuItemLabel)}>
                    {result.label}
                  </div>
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
    backgroundColor: '#564f4d',
    height: '100%',
    width: '150px',
    borderRight: '5px solid #0697d7',
    textAlign: 'right',

    '@media (max-width: 600px)': {
      width: '100vw',
    }
  },

  Drawer__CloseIcon: {
    margin: '0px',
    paddingBottom: '10px',
    textAlign: 'right',
    color: 'white',
  },

  Drawer_HeaderContainer: {
    padding: '10px',
  },

  Drawer__MenuItem: {
    display: 'inline-block',
    width: '100%',
    textAlign: 'center',
    minHeight: 150,
    paddingTop: 35,

    ':hover': {
      backgroundColor: '#0697d7',
    }
  },

  Drawer__MenuItemLink: {
    color: '#fff',
    textDecoration: 'none',
    textAlign: 'center',
    overflow: 'hidden',
    display: 'block',
  },

  Drawer__MenuItemIcon: {
    display: 'inline-block',
    backgroundRepeat: 'no-repeat',
    width: 60,
    height: 50,
    backgroundSize: '100%',
  },

  Drawer__MenuItemLabel: {
    color: '#fff',
    width: '100%',
  },
});

export default Drawer;
