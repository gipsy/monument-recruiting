import React, {Component} from 'react';
import reduxify from '../util/reduxify';
import {routeTo} from '../store/configureStore';


class Main extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (<div>
      <div>Main</div>
      <pre>{JSON.stringify(this.props, null, 2)}</pre>
      <button onClick={() => this.props.routeTo('/')}>Route to Root Page</button>
    </div>)
  }
}

export default reduxify({}, [], Main, {routeTo}); // note the 4th parameter. This allows us to bind additional methods to props.
