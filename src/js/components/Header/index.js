import React, { Component } from 'react';
import reduxify from '../../util/reduxify';

import MenuItem from 'material-ui/MenuItem';
import FontAwesome from 'react-fontawesome';
import { Link } from 'react-router';
import IconButton from 'material-ui/IconButton';
import Drawer from 'material-ui/Drawer';
import { Toolbar, ToolbarGroup, ToolbarTitle } from 'material-ui/Toolbar';
import AppBar from 'material-ui/AppBar';

// import NavLink from 'components/NavLink';
// import Logo from './Logo';

// import NavigationDrawer from '../Navigation';
// import ToolbarFixedContainer from '../ToolbarFixedContainer';
// import ToolbarFixed from '../ToolbarFixed';

import styles from './style';

class Header extends Component {
  constructor(props, context) {
    super (props, context);
    this.state = {
      open: false
    };
    this.revealMenu = this.revealMenu.bind(this);
  }

  componentDidMount() {}
  componentWillMount() {}

  revealMenu() {
    this.setState({ open: !this.state.open });
  }

  render() {
    let data = [
      {
        linkTo: '/',
        fontAwesomeIcon: 'home',
        label: 'Main'
      },
      {
        linkTo: '/admin',
        fontAwesomeIcon: 'check',
        label: 'Admin'
      },
      {
        linkTo: '/about',
        fontAwesomeIcon: 'check',
        label: 'About'
      },
    ];

    let self = this;
    return (
      <div className="header">
        <AppBar
          title="Welcome to the portal, Joe Banks."
          iconClassNameRight="muidocs-icon-navigation-expand-more"
          onLeftIconButtonTouchTap={self.revealMenu}
        />
        <Drawer
          docked={false} 
          onRequestChange={this.revealMenu}
          open={this.state.open}
          zIndex={1000}>
          <div className="header">
            <h2>
              Applicant Portal
            </h2>
          </div>
          {data.map(function(result) {
            return(
              <div key={result.label}>
                <Link to={result.linkTo}
                  onClick={self.revealMenu}
                  style={{textDecoration:'none'}}>
                  <MenuItem>
                    <div className="inline-block content center"
                      style={{ width: '2em'}}>
                      <FontAwesome name={result.fontAwesomeIcon} />
                    </div>
                    {result.label}
                  </MenuItem>
                </Link>
              </div>
            );
          })}
        </Drawer>
      </div>
    );
  }
};

    {/* <Drawer open={this.state.open}> */}
    {/*       <MenuItem>Menu Item</MenuItem> */}
    {/*       <MenuItem>Menu Item 2</MenuItem> */}
    {/*     </Drawer> */}
    {/* </div> */}
    {/* <ToolbarFixedContainer> */}
    {/*   <ToolbarFixed> */}
    {/*     <ToolbarGroup> */}
    {/*       <NavigationDrawer /> */}
    {/*     </ToolbarGroup> */}
    {/*     <ToolbarGroup> */}
    {/*       <ToolbarTitle text="Monument Recruiting" /> */}
    {/*     </ToolbarGroup> */}
    {/*   </ToolbarFixed> */}
    {/* </ToolbarFixedContainer> */}
    {/* <NavLink to="/admin" label="Admin" styles={styles} /> */}
    {/* <NavLink to="/about" label="About" styles={styles} /> */}
    {/* <Logo /> */}

export default reduxify({}, [], Header);
