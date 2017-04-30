import EmailDemo from './EmailDemo';
import SmsDemo from './SmsDemo';
import { Col, Row } from 'react-bootstrap';
import React, { Component } from 'react';

export default class DemoAuthSession extends Component {
  render() {
    return (
      <div className='demo-auth-session'>
        <Row>
          <Col sm={6}>
            <SmsDemo/>
          </Col>
          <Col sm={6}>
            <EmailDemo/>
          </Col>
        </Row>
      </div>
    );
  }
}