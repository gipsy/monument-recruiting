import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Link from 'react-router';
import reduxify from '../../util/reduxify';

import { ResponsiveAppBar } from 'material-ui-responsive-drawer';
import Button from 'material-ui/Button';
import Badge from 'material-ui/Badge';
import Icon from 'material-ui/Icon';
import SvgIcon from 'material-ui/SvgIcon';
import IconButton from 'material-ui/IconButton';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/Menu/MenuItem';
import Popover from 'material-ui/internal/Popover';
import Avatar from 'material-ui/Avatar';
import NotificationsNone from 'material-ui-icons/NotificationsNone';
import Textsms from 'material-ui-icons/Textsms';

import userAvatarPlaceholder from 'avatar-placeholder.png';

// Action Creators
import { displayUserMenu } from '../../actions/ui';


let userName = 'JoeBanks'

class FixedAppBar extends Component {
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

    // Event Handlers
    let onTouchTapUserMenu = () => {
      return dispatch(displayUserMenu(!this.props.ui.UI_USER_MENU_VISIBILITY));
    };

    let onUserMenuRequestChange = (open) => {
      return dispatch(displayUserMenu(open));
    };

    let onUserMenuRequestClose = () => {
      return dispatch(displayUserMenu(this.props.ui.UI_USER_MENU_VISIBILITY));
    }

    return (
      <ResponsiveAppBar
        width={150}
        children={
          <div className="FixedAppBar__UserActions">
            <div className="FixedAppBar__UserNotifications">
              <IconButton>
                <Badge
                  badgeContent={11}
                  accent={true}
                >
                  <Textsms />
                </Badge>
              </IconButton>
              <IconButton onTouchTap={onTouchTapUserMenu}>
                <Badge
                  badgeContent={5}
                  accent={true}
                >
                  <NotificationsNone />
                </Badge>
              </IconButton>
            </div>
            <div className="FixedAppBar__UserMenu">
              <Avatar
                src={userAvatarPlaceholder}
              >
              </Avatar>
              <Popover
                open={this.props.ui.UI_USER_MENU_VISIBILITY}
                onRequestClose={onUserMenuRequestClose}
              >
                <Menu>
                  <MenuItem primaryText="Sign out" />
                </Menu>
              </Popover>
            </div>
          </div>
        }
      />
    )
  }
}

export default connect(
  (state) => {
    console.log(state.ui)
    return {
      // auth: state.auth,
      ui: {
        UI_USER_MENU_VISIBILITY: state.ui.UI_USER_MENU_VISIBILITY
      }
    };
  })(reduxify({}, [], FixedAppBar));
