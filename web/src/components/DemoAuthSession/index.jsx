import EmailDemo from './EmailDemo';
import SmsDemo from './SmsDemo';
import { Col, Row } from 'react-bootstrap';
import React, { Component } from 'react';

export default class DemoAuthSession extends Component {
  render() {
    console.log(this.props);
    return (
      <div className='demo-auth-session'>
        <Row>
          <Col sm={6}>
            <SmsDemo {...this.props} />
          </Col>
          <Col sm={6}>
            <EmailDemo {...this.props} />
          </Col>
        </Row>
      </div>
    );
  }
}
