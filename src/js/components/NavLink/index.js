import React from 'react';

import { PropTypes } from 'prop-types';
import { Link } from 'react-router';

const NavLink = ({ to, label, styles }) => (
  <Link
    to={ to }
    className={ `navLink ${location.pathname.indexOf(to) !== -1 ? 'selected' : ''}` }
  >
    { label }
  </Link>
)

NavLink.propTypes = {
  to: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  styles: PropTypes.object.isRequired,
};

const styles = StyleSheet.create({
  NavList: {
    padding: '35px 25px',
    margin: '-6px 6px 0',
    borderRadius: '6px',
    fontSize: '16px',
    color: 'gray',
    border: '1px solid lightgray',
    textDecoration: 'none'
  },

  hover: {
    ':hover': {
      color: 'black',
      textDecoration: 'underline',
      boxShadow: '0 1px 4px 1px darkgray',
    }
  }

  selected: {
    color: 'black',
    textDecoration: 'underline',
    boxShadow: '0 1px 4px 1px darkgray',
  }
});

export default NavLink;
