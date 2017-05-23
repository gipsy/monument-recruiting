import React, { Component } from 'react';

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
            <Col xs={12} md={12}>
              {this.props.children}
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
};

export default Page;
