import React from 'react';
import Link from 'react-router';

import { Menu, MenuItem } from 'material-ui/Menu';
import IconButton from 'material-ui/IconButton';
import MoreVert from 'material-ui-icons/MoreVert';

import { routeTo } from '../../store/configureStore';

const Authenticated = (props) => (
  <Menu
    {...props}
    iconButtonElement={
      <IconButton touch={true}>
        <MoreVert />
      </IconButton>
    }
    targetOrigin={{horizontal: 'right', vertical: 'top'}}
    anchorOrigin={{horizontal: 'right', vertical: 'top'}}
  >
    <Link to={'/dashboard'}
      style={{textDecoration: 'none'}}
    >
      <MenuItem
        primaryText="Dashboard"
        selected={true}
      />
    </Link>
    <Link to={'/signout'}
      style={{textDecoration: 'none'}}
    >
      <MenuItem
        primaryText="Log Out"
      />
    </Link>
  </Menu>
);

export default Authenticated;
