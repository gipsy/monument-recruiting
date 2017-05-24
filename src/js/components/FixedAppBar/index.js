import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import reduxify from '../../util/reduxify';

import { ResponsiveAppBar } from 'material-ui-responsive-drawer';
import Button from 'material-ui/Button';
import Badge from 'material-ui/Badge';
import Icon from 'material-ui/Icon';
import SvgIcon from 'material-ui/SvgIcon';
import IconButton from 'material-ui/IconButton';
import Menu from 'material-ui/Menu/Menu';
import MenuList from 'material-ui/Menu/MenuList';
import MenuItem from 'material-ui/Menu/MenuItem';
import Popover from 'material-ui/internal/Popover';
import Avatar from 'material-ui/Avatar';
import Chip from 'material-ui/Chip';
import NotificationsNone from 'material-ui-icons/NotificationsNone';
import Textsms from 'material-ui-icons/Textsms';
import { StyleSheet, css } from 'aphrodite/no-important';

import UserNotificationsMenu from './UserNotificationsMenu';
import userAvatarPlaceholder from 'avatar-placeholder.png';

// Action Creators
import * as actions from '../../actions/ui';


let userName = 'JoeBanks'

class FixedAppBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      openUserMenu: false,
      openUserNotificationMenu: false,
    };
  }

  handleTouchTapUserMenu = (event) => {
    // This prevents ghost click.
    event.preventDefault();

    this.setState({
      openUserMenu: true,
      anchorUserMenuEl: event.currentTarget,
    });
  };

  handleRequestUserMenuClose = () => {
    this.setState({
      openUserMenu: false,
    });
  };

  handleTouchTapUserNotificationMenu = (event) => {
    event.preventDefault();

    this.setState({
      openUserNotificationMenu: true,
      anchorUserNotificationMenuEl: event.currentTarget,
    });
  };

  handleRequestUserNotificationMenuClose = () => {
    this.setState({
      openUserNotificationMenu: false,
    });
  };

  static propTypes = {
    // auth: PropTypes.shape({
    //     error: PropTypes.string,
    //     phase: PropTypes.string.isRequired,
    //     user: PropTypes.object
    // }),
    dispatch: PropTypes.func.isRequired,
    ui: PropTypes.shape({
      UI_USER_MENU_VISIBILITY: PropTypes.bool.isRequired
    })
  }

  render() {
    let dispatch = this.props.dispatch;

    return (
      <ResponsiveAppBar
        width={150}
        children={
          <div className={css(styles.FixedAppBar__UserActions)}>
            <div className={css(styles.FixedAppBar__UserNotifications)}>
              <IconButton>
                <Badge
                  badgeContent={11}
                  accent={true}
                >
                  <Textsms />
                </Badge>
              </IconButton>
              <IconButton
                onTouchTap={this.handleTouchTapUserNotificationMenu}
                onMouseEnter={this.handleTouchTapUserNotificationMenu}
              >
                <Badge
                  badgeContent={5}
                  accent={true}
                >
                  <NotificationsNone />
                </Badge>
              </IconButton>
              <Popover
                open={this.state.openUserNotificationMenu}
                anchorEl={this.state.anchorUserNotificationMenuEl}
                onRequestClose={this.handleRequestUserNotificationMenuClose}
                elevation={10}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left'
                }}
                children={
                  <div className={css(styles.FixedAppBar__UserNotificationsMenu)}>
                    <UserNotificationsMenu />
                  </div>
                }
              />
            </div>
            <div className={css(styles.FixedAppBar__UserMenu)}>
              <Chip
                onTouchTap={this.handleTouchTapUserMenu}
                className={css(styles.FixedAppBar__UserMenuTrigger)}
                avatar={
                  <Avatar src={userAvatarPlaceholder} />
                }
                label={userName}
              />
              <Popover
                open={this.state.openUserMenu}
                anchorEl={this.state.anchorUserMenuEl}
                onRequestClose={this.handleRequestUserMenuClose}
                elevation={10}
                anchorOrigin={{
                  vertical: 'bottom', 
                  horizontal: 'right'
                }}
                children={
                  <div>
                    <MenuList>
                      <MenuItem children={
                        <Link to={'/dashboard'}
                          style={{textDecoration: 'none'}}
                        >
                          Dashboard
                        </Link>
                      } />
                      <MenuItem children={
                        <Link to={"/"}
                          style={{textDecoration: 'none'}}
                        >
                          Signout
                        </Link>
                      } />
                    </MenuList>
                  </div>
                }
              />
            </div>
          </div>
        }
      />
    )
  }
}

const styles = StyleSheet.create({
  FixedAppBar: {
  },

  FixedAppBar__UserActions: {
    flex: '1 1 0%',
    textAlign: 'right',
  },

  FixedAppBar__UserNotifications: {
    display: 'inline-block',
    marginRight: '20px',
    verticalAlign: 'bottom',
  },

  FixedAppBar__UserMenu: {
    display: 'inline-block',
    verticalAlign: 'top',
    marginTop: '7px',
  },

  FixedAppBar__UserMenuTrigger: {
    cursor: 'pointer',
    color: '#fff',
    backgroundColor: 'transparent',
  },

  FixedAppBar__UserNotificationsMenu: {
    width: '370px',

    '@media (max-width: 375px)': {
      width: '100%',
    }
  },

});

export default reduxify(actions, ['ui'], FixedAppBar);
