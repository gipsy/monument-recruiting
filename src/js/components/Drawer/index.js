import React, { Component } from 'react';
import reduxify from '../../util/reduxify';

import Button from 'material-ui/Button';
import { Link } from 'react-router';

import { ResponsiveDrawer } from 'material-ui-responsive-drawer';
import MenuItem from 'material-ui/Menu/MenuItem';
import FontAwesome from 'react-fontawesome';

const styles={
  drawer_container:{
    backgroundColor: 'green',
    height: '100%',
    width: '150px'
  },
  drawer_header:{
    margin: '0px',
    paddingBottom: '10px'
  },
  drawer_header_container:{
    padding: '10px'
  },
}

const data = [
  {
    linkTo: '/',
    fontAwesomeIcon: 'home',
    label: 'Dashboard'
  },
  {
    linkTo: '/documents',
    fontAwesomeIcon: 'check',
    label: 'Documents'
  },
  {
    linkTo: '/checkout',
    fontAwesomeIcon: 'check',
    label: 'Add Searches'
  },
];

const Drawer = () => (
  <ResponsiveDrawer
    width={150}
  >
    <div style={styles.drawer_container}>
      <div style={styles.drawer_header_container}>
        {data.map(function(result) {
          return(
            <div key={result.label}>
              <Link to={result.label}
                onClick={self.revealMenu}
                style={{textDecoration: 'none'}}>
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

export default reduxify({}, [], Drawer);
