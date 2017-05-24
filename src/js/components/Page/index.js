import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { StyleSheet, css } from 'aphrodite/no-important';

import { isMobile, isTablet, isDesktop } from '../../theme/breakpoints';

class Page extends Component {
  constructor(props) {
    super(props);
  }
  
  componentDidMount() { }

  render() {
    return (
      <div className={css(styles.Page)}>
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

const styles = StyleSheet.create({
  Page: {
    margin: '100px auto',
    height: '100vh',
    maxWidth: '75%',

    [isMobile]: {
      maxWidth: '95%'
    },

    [isTablet]: {
      maxWidth: '80%'
    },

    [isDesktop]: {
      maxWidth: '60%'
    }
  },
});

export default Page;
