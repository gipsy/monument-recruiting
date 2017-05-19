import React, { Component } from 'react';
import reduxify from '../../util/reduxify';

class Page extends Component {
  constructor(props) {
    super(props);
    console.log('Page')
  }
  
  componentDidMount() { }

  render() {
    return (
      <div className="page">
        {this.props.children}
      </div>
    );
  }
};

export default reduxify({}, [], Page);
