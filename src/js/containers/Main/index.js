import React, { Component } from 'react';
import reduxify from '../../util/reduxify';

import { routeTo } from '../../store/configureStore';
import { increment } from '../../actions/counter';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textField: ""
    }
    console.log('Main');
  }

  render() {
    return (
      <Paper>
        <div>Main</div>
        <TextField
          id="counter"
          onChange={ (event) => this.setState({ textField: event.target.value })}
          value={ this.state.textField }
        />
        <p>{ this.state.textField }</p>
        <p>{ this.props.counter }</p>
        <RaisedButton
          onTouchTap={ this.props.action.increment }
          label={"Add One"}
        />
        <RaisedButton
          onTouchTap={ () => this.props.routeTo('/admin') }
          label={"Route to the Admin Page"}
        />
      </Paper>
    )
  }
}

// note the 4th parameter. This allows us to bind additional methods to props.
export default reduxify({ increment }, [ 'counter' ], Main, { routeTo });
