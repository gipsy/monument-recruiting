import React from 'react';
import reduxify from '../../util/reduxify';

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

export default reduxify({}, [], NavLink);
