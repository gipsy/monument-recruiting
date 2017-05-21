import React, { Component } from 'react';
import reduxify from '../../util/reduxify';

import { routeTo } from '../../store/configureStore';
import { increment } from '../../actions/counter';
import Paper from 'material-ui/Paper';
import Button from 'material-ui/Button/Button';
import TextField from 'material-ui/TextField';

class Review extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textField: ""
    }
  }

  render() {
    return (
      <Paper>
        <div>Review</div>
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
        <Button
          onTouchTap={ () => this.props.routeTo('/admin') }
          label={"Route to the Admin Page"}
        />
      </Paper>
    )
  }
}

// note the 4th parameter. This allows us to bind additional methods to props.
export default reduxify({ increment }, [ 'counter' ], Review, { routeTo });
