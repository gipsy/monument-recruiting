import React, { Component } from 'react';
import reduxify from '../../../util/reduxify';

import { Toolbar, ToolbarGroup, ToolbarTitle } from 'material-ui/Toolbar';
import Avatar from 'material-ui/Avatar';
import IconButton from 'material-ui/IconButton';

import LoginMenu from '../LoginMenu';
import userAvatarPlaceholder from 'avatar-placeholder.png';

class ToolbarFixed extends Component {
  constructor(props, context) {
    super (props, context);
    this.state = {
      logged: true,
      openDrawer: false,
      openUserDropdown: false,
    };
    this.revealMenu = this.revealMenu.bind(this);
  }

  componentDidMount() {}
  componentWillMount() {}

  revealMenu() {
    this.setState({ openDrawer: !this.state.openDrawer });
  }

  revealUserMenu() {
    this.setState({ openUserDropdown: !this.state.openUserDropdown });
  }

  render() {
    let self = this;
    return(
      <Toolbar
        className="ToolbarFixed"
        style={{
          background:'#fff',
        }}
      >
        <ToolbarGroup className="ToolbarTitle">
          <IconButton iconClassName="fa fa-bars"
            onClick={self.revealMenu}
          />
          <ToolbarTitle
            className="ToolbarTitle"
            text="Welcome to the portal, Joe Banks."
          />
        </ToolbarGroup>
        <ToolbarGroup firstChild={true}>
          <Avatar
            src={userAvatarPlaceholder}
            onClick={self.revealUserMenu}
          />
          <ToolbarTitle
            text="JoeBanks"
            onClick={self.revealUserMenu}
          />
          {
            this.state.logged
            ? <Logged />
            : <Login />
          }
        </ToolbarGroup>
      </Toolbar>
    )
  }
};

export default reduxify({}, [], ToolbarFixed);
