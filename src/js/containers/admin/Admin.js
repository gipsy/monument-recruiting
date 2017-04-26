import React, { Component } from 'react';
import reduxify from '../../util/reduxify';

const Admin = (props) =>
      (<div>
          <div>Menu
             <ul>
                  {'Many things can go here, because it is, a comma seperated list'.split(',').map((el) => <li>{el}</li>)}
             </ul>
          </div>
      </div>)

export default reduxify({}, [], Admin)
