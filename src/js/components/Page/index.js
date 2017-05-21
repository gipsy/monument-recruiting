import React, { Component } from 'react';
import reduxify from '../../util/reduxify';

import { Grid, Row, Col } from 'react-flexbox-grid';

class Page extends Component {
  constructor(props) {
    super(props);
  }
  
  componentDidMount() { }

  render() {
    return (
      <div className="Page">
        <Grid fluid>
          <Row>
            <Col xs={6} md={3}>
              {this.props.children}
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
};

export default reduxify({}, [], Page);
