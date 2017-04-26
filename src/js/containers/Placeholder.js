import React, { Component } from 'react';
import reduxify from '../util/reduxify';


const Placeholder = (props) => (
  <div>Placeholder</div>
)



export default reduxify({}, [], Placeholder);
