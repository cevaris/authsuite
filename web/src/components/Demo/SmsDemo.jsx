import { Button, Col, ControlLabel, Form, FormControl, FormGroup, HelpBlock, Row } from 'react-bootstrap';
import React, { Component } from 'react';

export default class SmsDemo extends Component {
  render() {
    return (
      <div className='demo-auth-session__form'>
        <Row>

          <Col sm={12} xs={12}>

            <Form horizontal>

              <FormGroup>
                <Col componentClass={ControlLabel} sm={3}>
                  SMS/Text
                </Col>
                <Col sm={9}>
                  <FormControl name='auth_session_demo[identity]' placeholder='555-123-4567' type='tel'/>
                  <HelpBlock>Demo using your SMS/Text Message</HelpBlock>
                </Col>
              </FormGroup>

              <FormGroup>
                <Col sm={9} smOffset={3}>
                  <Button bsStyle='primary' type='submit'>
                    Send Text
                  </Button>
                </Col>
              </FormGroup>
            </Form>

          </Col>
        </Row>
      </div>
    );
  }
}
