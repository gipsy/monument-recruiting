import React, { Component } from 'react';
import reduxify from '../../util/reduxify';

import Menu from 'material-ui/Menu/Menu';
import MenuItem from 'material-ui/Menu/MenuItem';
import FontAwesome from 'react-fontawesome';
import { Link } from 'react-router';
import IconButton from 'material-ui/IconButton';
import Drawer from 'material-ui/Drawer';
// import { Toolbar, ToolbarGroup, ToolbarTitle } from 'material-ui/Toolbar';
import { Toolbar } from 'material-ui/Toolbar';
import Button from 'material-ui/Button/Button';
import Popover from 'material-ui/internal/Popover';
import Fade from 'material-ui/transitions/Fade';
// import Menu from 'material-ui/Menu';
// import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
// import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import Avatar from 'material-ui/Avatar';
import Badge from 'material-ui/Badge';

// import NotificationsIcon from 'material-ui/svg-icons/social/notifications';
// import CommunicationChatBubbleOutline from 'material-ui/svg-icons/communication/chat-bubble-outline';
// import FontIcon from 'material-ui/FontIcon';
import Icon from 'material-ui/Icon';

import Authenticated from './Authenticated';

import {
  ResponsiveDrawer,
  BodyContainer,
  ResponsiveAppBar
} from 'material-ui-responsive-drawer';

import userAvatarPlaceholder from 'avatar-placeholder.png';



class Login extends Component {
  static muiName = 'Button';

  render() {
    return (
      <Button {...this.props} label="Login" />
    );
  }
}

// const Authenticated = (props) => (
//   <Menu
//     {...props}
//     iconButtonElement={
//       <IconButton touch={true}>
//         {#<{(| <NavigationExpandMoreIcon /> |)}>#}
//       </IconButton>
//     }
//     targetOrigin={{horizontal: 'right', vertical: 'top'}}
//     anchorOrigin={{horizontal: 'right', vertical: 'top'}}
//   >
//     <Link to={'/dashboard'}
//       onClick={props.revealUserMenu}
//       style={{textDecoration: 'none'}}
//     >
//       <MenuItem
//         primaryText="Dashboard"
//       />
//     </Link>
//     <Link to={'/signout'}
//       onClick={props.revealUserMenu}
//       style={{textDecoration: 'none'}}
//     >
//       <MenuItem
//         primaryText="Log Out"
//       />
//     </Link>
//   </Menu>
// );

Authenticated.muiName = 'Icon';

class Navigation extends Component {
  constructor(props, context) {
    super (props, context);
    this.state = {
      setAuthenticated: true,
      drawerMenuVisibility: false,
      userMenuVisibility: false,
      notificationPopoverVisibility: false,
    };
    this.revealMenu = this.revealMenu.bind(this);
  }

  componentDidMount() {}
  componentWillMount() {}

  revealMenu() {
    this.setState({ drawerMenuVisibility: !this.state.drawerMenuVisibility });
  }

  revealUserMenu() {
    this.setState({ userMenuVisibility: !this.state.userMenuVisibility });
  }

  handleTouchTap = (event) => {
    console.log(event);
    // This prevents ghost click.
    event.preventDefault();

    this.setState({
      openNotificationDropdown: true,
      anchorEl: event.currentTarget,
    });
  };

  handleRequestClose = () => {
    this.setState({
      openNotificationDropdown: false,
    });
  };

  render() {
    let data = [
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

    let self = this;
    return (
      <div className="Navigation">
            <IconButton iconClassName="fa fa-bars"
              onClick={self.revealMenu}
            />
            <Badge
              className="ToolbarFixed__Notification"
              badgeContent={5}
              style={{top:12, left:0, width:19, height:19, fontSize:9}}
            >
              <Icon
                className="fa fa-commenting-o"
              />
            </Badge>
            <Badge
              className="ToolbarFixed__Documents"
              badgeContent={10}
              style={{top:12, left:0, width:19, height:19, fontSize:9}}
              onTouchTap={self.handleTouchTap}
            >
              <Icon
                className="fa fa-bell-o"
              />
            </Badge>
            <Popover
              open={self.state.open}
              anchorEl={self.state.anchorEl}
              anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
              targetOrigin={{horizontal: 'left', vertical: 'top'}}
              onRequestClose={self.handleRequestClose}
              animation={Fade}
            >
              <Menu>
                <MenuItem primaryText="Refresh" />
                <MenuItem primaryText="Help &amp; feedback" />
                <MenuItem primaryText="Settings" />
                <MenuItem primaryText="Sign out" />
              </Menu>
            </Popover>
            <Avatar
              src={userAvatarPlaceholder}
              onClick={self.revealUserMenu}
            />
            {
              this.state.setAuthenticated
              ? <Authenticated />
              : <Login />
            }
        <ResponsiveDrawer
          docked={false} 
          onRequestChange={self.revealMenu}
          open={this.state.drawerMenuVisibility}
          zIndex={1000}>
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
        </ResponsiveDrawer>
      </div>
    );
  }
};

export default reduxify({}, [], Navigation);
