import React from 'react';
import Link from 'react-router';

import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import ListItemIcon from 'material-ui/List/ListItemIcon';
import ListItemText from 'material-ui/List/ListItemText';
import Divider from 'material-ui/Divider';
import Avatar from 'material-ui/Avatar';
import Icon from 'material-ui/Icon';
import Button from 'material-ui/Button';
import Warning from 'material-ui-icons/Warning';
import { StyleSheet, css } from 'aphrodite/no-important';


const UserNotificationsMenu = (props) => (
  <List>
    <ListItem
      className={css(styles.FixedAppBar__UserNotificationsMenu__ListItem)}
      divider={true}
    >
      <Icon
        className={css(styles.FixedAppBar__UserNotificationsMenu__ListItemIcon)}
        accent={true}
      >
        <Warning />
      </Icon>
      <p>
        <span style={{color: '#000'}}>
          Your report has come back with 1 or more hist (records).
          Please verify and take the necessary steps to clear up the findings
          as soon as possible.
        </span>
      </p>
      <div className={css(styles.FixedAppBar__UserNotificationsMenu__Footer)}>
        <Button
          className={css(styles.FixedAppBar__UserNotificationsMenu__Button)}
          label="Review"
          accent={true}
          raised={true}
          children={
            <span>Review</span>
          }
        />
        <Button
          className={css(styles.FixedAppBar__UserNotificationsMenu__Button)}
          label="Dismiss"
          raised={true}
          children={
            <span>Dismiss</span>
          }
        />
      </div>
    </ListItem>
    <ListItem divider={true}>
      <Icon className={css(styles.FixedAppBar__UserNotificationsMenu__ListItemIcon)}>
        <Warning />
      </Icon>
      <p>
        <span style={{color: '#000'}}>Brunch this weekend?</span><br />
        I&apos;ll be in your neighborhood doing errands this weekend. Do you want to grab brunch?
      </p>
    </ListItem>
    <ListItem divider={true}>
      <Icon className={css(styles.FixedAppBar__UserNotificationsMenu__ListItemIcon)}>
        <Warning />
      </Icon>
      <p>
        <span style={{color: '#000'}}>Brunch this weekend?</span><br />
        I&apos;ll be in your neighborhood doing errands this weekend. Do you want to grab brunch?
      </p>
    </ListItem>
  </List>
);

const styles = StyleSheet.create({

  FixedAppBar__UserNotificationsMenu__ListItem: {
    paddingBottom: '60px',
  },

  FixedAppBar__UserNotificationsMenu__ListItemIcon: {
    margin: '20px 15px 0 0',
    alignSelf: 'flex-start',
    color: 'red',
  },

  FixedAppBar__UserNotificationsMenu__Footer: {
    position: 'absolute',
    flex: 'none',
    textAlign: 'center',
    left: '0',
    right: '0',
    bottom: '20px',
  },

  FixedAppBar__UserNotificationsMenu__Button: {
    margin: '0 10px',
  }
});

export default UserNotificationsMenu;
